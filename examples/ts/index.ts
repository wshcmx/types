type FuncManagerQueryResult = {
  person_id: XmlElem<number>;
};

type Managers = {
  personId: number;
  fullname: string;
};

function select<T>(command: string) {
  return ArraySelectAll(tools.xquery<T>(command));
}

function getManagersByType(bossTypeCode: string = "main"): Managers[] {
  const sql = `sql:
    SELECT
      [t0].[person_id]
    FROM [func_managers] AS [t0]
      INNER JOIN [boss_types] AS [t1] ON [t1].[id] = [t0].[boss_type_id]
    WHERE [t1].[code] = ${SqlLiteral(bossTypeCode)}
  `;

  const query = select<FuncManagerQueryResult>(sql);

  const result: Managers[] = [];
  let collaboratorDocument;
  let personId;

  for (let i = 0; i < query.length; i++) {
    personId = query[i].person_id.Value;
    collaboratorDocument = tools.open_doc<CollaboratorDocument>(personId);

    if (collaboratorDocument === undefined) {
      alert(`Невозможно открыть документ сотрудника по id "${personId}"`);
      continue;
    }

    result.push({
      personId,
      fullname: collaboratorDocument.TopElem.fullname()
    });
  }
  
  return result;
}

const mainFuncManagers = getManagersByType();
const bpFuncManagers = getManagersByType("bp");
const unionManagers = ArrayUnion(mainFuncManagers, bpFuncManagers);

if (unionManagers.length === 0) {
  throw new Error("В системе должен быть хотя бы один руководитель");
}

alert(`Функциональные руководители:\n${ArrayExtract(unionManagers, "This.fullname").join(", ")}`);