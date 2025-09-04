/**
 * @typedef {Object} FuncManagerQueryResult
 * @property {XmlElem<number>} person_id
 */

/**
 * @typedef {Object} Managers
 * @param {number} personId
 * @param {string} fullname
 */

/**
 * @param {string} command - Команда для исполнения
 */
function select(command) {
  return ArraySelectAll(tools.xquery(command));
}

/**
 * Возвращает информацию о функциональных руководителях по типу
 * @param {string} [bossTypeCode=main] - Код типа функционального руководителя
 * @returns {Managers[]}
 */
function getManagersByType(bossTypeCode) {
  var sql = `sql:
    SELECT
      [t0].[person_id]
    FROM [func_managers] AS [t0]
      INNER JOIN [boss_types] AS [t1] ON [t1].[id] = [t0].[boss_type_id]
    WHERE [t1].[code] = ${SqlLiteral(bossTypeCode)}
  `;

  /** @type {FuncManagerQueryResult[]} query */
  var query = select(sql);

  /** @type {Managers[]} result */
  var result = [];
  /** @type {CollaboratorDocument | undefined} */
  var collaboratorDocument;
  var personId;

  for (let i = 0; i < query.length; i++) {
    personId = query[i].person_id.Value;
    collaboratorDocument = tools.open_doc(personId);

    if (collaboratorDocument === undefined) {
      alert("Невозможно открыть документ сотрудника по id \"${personId}\"");
      continue;
    }

    result.push({
      personId,
      fullname: collaboratorDocument.TopElem.fullname()
    });
  }

  return result;
}

var mainFuncManagers = getManagersByType();
var bpFuncManagers = getManagersByType("bp");
var unionManagers = ArrayUnion(mainFuncManagers, bpFuncManagers);

if (unionManagers.length === 0) {
  throw new Error("В системе должен быть хотя бы один руководитель");
}

alert("Функциональные руководители:\n" + ArrayExtract(unionManagers, "This.fullname").join(", "));