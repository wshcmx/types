declare namespace tools {
  let lds_address: XmlElem<string | null>;

  /**
   * Назначение курса участникам указанного мероприятия.
   * @param {number} eventId - Id мероприятия, для участников которого назначается курс.
   * @param {number} courseId - Id курса, который необходимо назначить.
   * @param {EventDocument} eventDocument - Документ карточки мероприятия.
   * @param {number} duration - Длительность курса в днях. Определяет дату планируемого завершения.
   * @param {Date} startLearningDate - Дата начала обучения. Если данный аргумент задан,
   * то обучение невозможно будет начать раньше указанной даты.
   * @param {Date} testLearningDate - Контрольная дата завершения предыдущего обучения.
   * Если параметр задан, то при назначении курса, проверяется,
   * существует ли в каталоге learnings курс, завершенный после указанной даты.
   * Если такой курс существует, то соответствующая запись из каталога
   * learnings возвращается как результат работы функции.
   * @returns {number} Количество назначенных курсов.
   */
  function activate_course_to_event(eventId: number, courseId: number, eventDocument?: EventDocument, duration?: number, startLearningDate?: Date, testLearningDate?: Date): number;

  let object_license: XmlElem<unknown | null>;

  /**
   * Активирует курс для каждого сотрудника мероприятия через activate_course_to_person и возвращает число успешных активаций.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} evenId - Значение параметра `evenId`.
   * @param {number} courseId - Значение параметра `courseId`.
   * @param {XmlDocument} docEvent - Значение параметра `docEvent`.
   * @param {number} duration - Значение параметра `duration`.
   * @param {Date} startLearningDate - Значение параметра `startLearningDate`.
   * @param {Date} lastLearningDate - Значение параметра `lastLearningDate`.
   * @param {boolean} bSkipDismissed - Значение параметра `bSkipDismissed`.
   * @param {boolean} bUseProctoring - Значение параметра `bUseProctoring`.
   * @param {number} iProctorPreferID - Значение параметра `iProctorPreferID`.
   * @param {string} sComment - Значение параметра `sComment`.
   * @returns {number} Результат выполнения.
   */
  function activate_course_to_event(evenId: number, courseId: number, docEvent: XmlDocument, duration: number, startLearningDate: Date, lastLearningDate: Date, bSkipDismissed: boolean, bUseProctoring: boolean, iProctorPreferID: number, sComment: string): number;

  /**
   * Назначение курса участникам указанного мероприятия.
   * @param {number} personId - Id сотрудника, которому назначается курс.
   * @param {number} courseId - Id курса, который необходимо назначить.
   * @param {number} eventId - Id мероприятия, участникам которого назначается курс.
   * @param {CollaboratorDocumentTopElem} personDoc - TopElem карточки сотрудника, которому назначается курс.
   * @param {number} educationPlanId - Id плана обучения, в рамках которого назначен курс.
   * @param {number} duration - Длительность курса в днях. Определяет дату планируемого завершения.
   * @param {Date} startLearningDate - Дата начала обучения. Если данный аргумент задан,
   * то обучение невозможно будет начать раньше указанной даты.
   * @param {Date} lastLearningDate - Контрольная дата завершения предыдущего обучения.
   * Если параметр задан, то при назначении курса, проверяется,
   * существует ли в каталоге learnings курс, завершенный после указанной даты.
   * Если такой курс существует, то Id соответствующей записи из каталога
   * learnings возвращается как результат работы функции.
   * @param {number} groupId - Id группы, которой назначен курс.
   * @param {string} eid - Код записи в каталоге active_learnings.
   * Если он указан, то при назначении курса,
   * когда производится проверка на уже существующий активный курс
   * данного сотрудника в каталоге active_learnings, проверяется также,
   * что у данной записи должен быть указанный в параметре код.
   * @param {boolean} skipDismissed - Аргумент, указывающий на необходимость пропускать уволенных
   * сотрудников (true – пропускать, false –не пропускать). По умолчанию true.
   * @returns {XmlElem<number> | null | ActiveLearningDocument}.
   * Если курс назначен при выполнении функции,
   * то возвращается ссылка на вновь созданный документ обучения.
   * Если курс был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается Id карточки ранее назначенного курса (из каталога active_learning).
   */
  function activate_course_to_person(personId: number | string, courseId?: number, eventId?: number, personDoc?: CollaboratorDocumentTopElem, educationPlanId?: number, duration?: number, startLearningDate?: Date, lastLearningDate?: Date, groupId?: number, eid?: string, skipDismissed?: boolean): XmlElem<number> | null | ActiveLearningDocument;

  /**
   * Назначение курса участникам указанного мероприятия.
   * @param {ActivateCourseToPersonObject} params - Параметры назначения курса.
   * @returns {XmlElem<number> | null | ActiveLearningDocument}.
   * Если курс назначен при выполнении функции,
   * то возвращается ссылка на вновь созданный документ обучения.
   * Если курс был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается Id карточки ранее назначенного курса (из каталога active_learning).
   */
  function activate_course_to_person(params: ActivateCourseToPersonObject): XmlElem<number> | null | ActiveLearningDocument;

  /**
   * Возвращает существующее активное обучение по курсу или создаёт новое, списывает стоимость курса, отправляет уведомления об активации и вызывает системное событие.
   * @param {number} oPersonID - Значение параметра `oPersonID`.
   * @param {number} courseId - Значение параметра `courseId`.
   * @param {number} eventId - Значение параметра `eventId`.
   * @param {XmlTopElem} personDoc - Значение параметра `personDoc`.
   * @param {number} educationPlanId - Значение параметра `educationPlanId`.
   * @param {number} duration - Значение параметра `duration`.
   * @param {Date} startLearningDate - Значение параметра `startLearningDate`.
   * @param {Date} dtLastLearningDateParam - Значение параметра `dtLastLearningDateParam`.
   * @param {number} groupId - Значение параметра `groupId`.
   * @param {string} sEIDParam - Значение параметра `sEIDParam`.
   * @param {boolean} bSkipDismissedParam - Значение параметра `bSkipDismissedParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function activate_course_to_person(oPersonID: number, courseId: number, eventId: number, personDoc: XmlTopElem, educationPlanId: number, duration: number, startLearningDate: Date, dtLastLearningDateParam: Date, groupId: number, sEIDParam: string, bSkipDismissedParam: boolean): unknown;

  /**
   * Назначение сотруднику курсов, которые указаны в учебных программах (с типом "Электронный курс"),
   * перечисленных в наборе программ. Если в наборе учебных программ указаны учебные программы,
   * содержащие дистанционное обучение (курсы), то эти курсы будут назначены сотруднику.
   * @param {number} personId - Id сотрудника, которому назначается набор учебных программ.
   * @param {number} educationProgramId - Id набора учебных программ.
   * @param {CollaboratorDocumentTopElem} collaboratorDocumentTopElem - TopElem карточки сотрудника,
   * которому назначается тест.
   * @param {EducationProgramDocumentTopElem} educationProgramDocumentTopElem - TopElem карточки набора
   * учебных программ.
   * @returns {number} Количество назначенных курсов в составе набора учебных программ.
   */
  function activate_education_program_to_person(personId: number, educationProgramId: number, collaboratorDocumentTopElem: CollaboratorDocumentTopElem, educationProgramDocumentTopElem: EducationProgramDocumentTopElem): number;

  /**
   * Активирует для сотрудника все методы обучения типа «курс» образовательной программы и возвращает число успешных активаций.
   * @param {number} personId - Значение параметра `personId`.
   * @param {number} educationProgramId - Значение параметра `educationProgramId`.
   * @param {XmlTopElem} personDoc - Значение параметра `personDoc`.
   * @param {XmlTopElem} educationProgramDoc - Значение параметра `educationProgramDoc`.
   * @returns {number} Результат выполнения.
   */
  function activate_education_program_to_person(personId: number, educationProgramId: number, personDoc: XmlTopElem, educationProgramDoc: XmlTopElem): number;

  function activate_poll_to_person(personId: Object, pollId: Object, pollProcedureId: number, educationPlanId: number): unknown;

  /**
   * Создаёт, привязывает и сохраняет новый документ результата опроса для сотрудника или анонимного опроса, вызывает системное событие common_create_poll_result и возвращает документ.
   * @param {number} oPersonID - Значение параметра `oPersonID`.
   * @param {number} oPollID - Значение параметра `oPollID`.
   * @param {number} iPollProcedureID - Значение параметра `iPollProcedureID`.
   * @param {number} iEducationPlanID - Значение параметра `iEducationPlanID`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function activate_poll_to_person(oPersonID: number, oPollID: number, iPollProcedureID: number, iEducationPlanID: number): XmlDocument;

  /**
   * Назначение теста участникам указанного мероприятия.
   * @param {number} eventId - Id мероприятия, участникам которого назначается тест.
   * @param {number} assessmentId - Id теста, который необходимо назначить.
   * @param {EventDocument} eventDocument - Документ карточки мероприятия.
   * @param {number} duration - Длительность теста в днях. Определяет дату планируемого завершения.
   * @param {Date} startLearningDate - Дата начала обучения. Если данный аргумент задан,
   * то обучение невозможно будет начать раньше указанной даты.
   * @param {Date} lastLearningDate - Контрольная дата завершения предыдущего обучения.
   * Если параметр задан, то при назначении теста проверяется, существует ли в каталоге test_learnings тест,
   * завершенный после указанной даты. Если такой тест существует, то Id соответствующей записи из
   * каталога test_learnings возвращается как результат работы функции.
   * @param {string} actType - Строка, указывающая, кому назначать тесты.
   * Возможные значения:
   * 'all' - Тесты назначаются всем участникам мероприятия (значение по умолчанию).
   * 'post' - Тесты назначаются участникам мероприятия, у которых проставлен флаг «Присутствовал на мероприятии».
   * @param {boolean} skipDismissed - Аргумент, указывающий на необходимость пропускать уволенных сотрудников
   * (true – пропускать, false – не пропускать). По умолчанию true.
   * @param {boolean} bUseProctoring - Использовать прокторинг.
   * @param {number} iProctorPreferID - Id прокторинга.
   * @param {boolean} bActivateOnlyAssist - Активация мероприятий.
   * @returns {number} Количество назначенных тестов.
   */
  function activate_test_to_event(eventId: number, assessmentId: number, eventDocument?: EventDocument, duration?: number, startLearningDate?: Date, lastLearningDate?: Date, actType?: string, skipDismissed?: boolean, bUseProctoring?: boolean, iProctorPreferID?: number, bActivateOnlyAssist?: boolean): number;

  /**
   * Передаёт активацию теста для всех участников мероприятия методу activate_test мероприятия, нормализуя необязательные параметры, и возвращает его результат.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} evenId - Значение параметра `evenId`.
   * @param {number} testId - Значение параметра `testId`.
   * @param {XmlDocument} docEvent - Значение параметра `docEvent`.
   * @param {number} duration - Значение параметра `duration`.
   * @param {Date} startLearningDate - Значение параметра `startLearningDate`.
   * @param {Date} lastLearningDate - Значение параметра `lastLearningDate`.
   * @param {string} sActTypeParam - Значение параметра `sActTypeParam`.
   * @param {boolean} bSkipDismissed - Значение параметра `bSkipDismissed`.
   * @param {boolean} bUseProctoring - Значение параметра `bUseProctoring`.
   * @param {number} iProctorPreferID - Значение параметра `iProctorPreferID`.
   * @param {boolean} bActivateOnlyAssist - Значение параметра `bActivateOnlyAssist`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function activate_test_to_event(evenId: number, testId: number, docEvent: XmlDocument, duration: number, startLearningDate: Date, lastLearningDate: Date, sActTypeParam: string, bSkipDismissed: boolean, bUseProctoring: boolean, iProctorPreferID: number, bActivateOnlyAssist: boolean): XmlTopElem;

  /**
   * Функция назначения теста пользователю.
   * @param {ActivateCourseToPersonObject} params - Объект JavaScript (Структура параметров).
   * @returns {XmlElem<number> | null | XmlDocument} Объект XmlDocument или Целое число.
   * Если тест назначен при выполнении функции, то возвращается ссылка на вновь созданный документ обучения.
   * Если тест был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается Id карточки ранее назначенного теста (из каталога active_test_learning).
   */
  function activate_test_to_person(params: ActivateTestToPersonParams): XmlElem<number> | null | ActiveTestLearningDocument;

  /**
   * Функция назначения теста пользователю.
   * @param {number} personId - Id пользователя.
   * @param {number} assessmentId - Id курса.
   * @param {number} eventId - Id мероприятия.
   * @param {CollaboratorDocumentTopElem} personDoc - Документ пользователя.
   * @param {AssessmentDocumentTopElem} assessmentDocument - Документ теста.
   * @param {null} eventDocument - Документ мероприятия.
   * @param {number} duration - Продолжительность тестирования.
   * @param {Date} startLearningDate - Дата начала тестирования.
   * @param {Date} lastLearningDate - Дата окончания тестирования.
   * @param {number} groupId - Id группы.
   * @param {number} educationPlanId - Id плана обучения.
   * @param {boolean} skipDismissed - Аргумент, указывающий на необходимость пропускать уволенных сотрудников.
   * (true – пропускать, false – не пропускать). По умолчанию true.
   * @returns {XmlElem<number> | null | XmlDocument} Объект XmlDocument или Целое число.
   * Если тест назначен при выполнении функции, то возвращается ссылка на вновь созданный документ обучения.
   * Если тест был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается Id карточки ранее назначенного теста (из каталога active_test_learning).
   */
  function activate_test_to_person(personId: number, assessmentId: number | string, eventId: number | string | null | undefined, personDoc: CollaboratorDocumentTopElem | null | undefined | "", assessmentDocument: AssessmentDocumentTopElem | null | "", eventDocument?: null, duration?: number | string | null, startLearningDate?: Date | string, lastLearningDate?: Date | string, groupId?: number | string | null, educationPlanId?: number | string | null, skipDismissed?: boolean | null): XmlElem<number> | null | ActiveTestLearningDocument;

  /**
   * Возвращает существующее активное тестирование или создаёт и сохраняет новое, отправляет уведомления об активации и вызывает системное событие.
   * @param {number} oPersonID - Значение параметра `oPersonID`.
   * @param {number} testId - Значение параметра `testId`.
   * @param {number} eventId - Значение параметра `eventId`.
   * @param {XmlTopElem} personDoc - Значение параметра `personDoc`.
   * @param {XmlTopElem} testDoc - Значение параметра `testDoc`.
   * @param {XmlTopElem} eventDoc - Значение параметра `eventDoc`.
   * @param {number} duration - Значение параметра `duration`.
   * @param {Date} startLearningDate - Значение параметра `startLearningDate`.
   * @param {Date} dtLastLearningDateParam - Значение параметра `dtLastLearningDateParam`.
   * @param {number} groupId - Значение параметра `groupId`.
   * @param {number} educationPlanId - Значение параметра `educationPlanId`.
   * @param {boolean} bSkipDismissedParam - Значение параметра `bSkipDismissedParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function activate_test_to_person(oPersonID: number, testId: number, eventId: number, personDoc: XmlTopElem, testDoc: XmlTopElem, eventDoc: XmlTopElem, duration: number, startLearningDate: Date, dtLastLearningDateParam: Date, groupId: number, educationPlanId: number, bSkipDismissedParam: boolean): unknown;

  /**
   * Функция завершает указанный активный электронный курс и создает карточку завершенного электронного курса
   * (карточка незавершенного курса при этом удаляется).
   * @param {number} learningId - Id активного электронного курса, который необходимо завершить.
   * @param {ActiveLearningDocumentTopElem} activeLearningDocumentTopElem - TopElem активного электронного курса,
   * который необходимо завершить.
   * @param {CourseDocumentTopElem} courseDocumentTopElem - TopElem электронного курса, который необходимо завершить.
   * @returns {number} Id нового завершенного курса.
   */
  function active_learning_finish(learningId: number, activeLearningDocumentTopElem?: ActiveLearningDocumentTopElem, courseDocumentTopElem?: CourseDocumentTopElem): number;

  /**
   * Завершает активное обучение: завершает тестовые разделы, сохраняет документ обучения с баллом и состоянием, ставит в очередь обновление плана обучения, вызывает событие, удаляет активное обучение и возвращает идентификатор обучения.
   * @param {number} learningId - Значение параметра `learningId`.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @param {XmlTopElem} courseDoc - Значение параметра `courseDoc`.
   * @returns {number} Результат выполнения.
   */
  function active_learning_finish(learningId: number, source: XmlTopElem, courseDoc: XmlTopElem): number;

  /**
   * Функция завершает указанный активный тест и создает карточку завершенного теста
   * (карточка незавершенного теста при этом не удаляется, и тест остается в списке назначенных).
   * Если необходимо полное завершение, то карточку незавершенного теста нужно удалять дополнительно
   * (с помощью отдельного кода вне данной функции).
   * @param {number} learningId - Id активного теста, который необходимо завершить.
   * @param {ActiveTestLearningDocumentTopElem} activeTestLearningDocumentTopElem - TopElem активного теста,
   * который необходимо завершить.
   * @param {AssessmentDocumentTopElem} assessmentDocumentTopElem - TopElem теста, который необходимо завершить.
   * @param {number} personId - Id сотрудника.
   * @param {boolean} finishTest - Флаг завершение теста.
   * @returns {TestLearningDocument} Документ завершенного теста.
   */
  function active_test_learning_finish(learningId: number, activeTestLearningDocumentTopElem?: ActiveTestLearningDocumentTopElem, assessmentDocumentTopElem?: AssessmentDocumentTopElem, personId?: number, finishTest?: boolean): TestLearningDocument;

  /**
   * Создаёт документ тестирования из активного тестирования, заполняет разделы и ответы, вызывает событие завершения и возвращает документ тестирования.
   * @param {number} learningId - Значение параметра `learningId`.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @param {XmlTopElem} assessmentDoc - Значение параметра `assessmentDoc`.
   * @param {number} iPersonIDParam - Значение параметра `iPersonIDParam`.
   * @param {boolean} bFinishTest - Значение параметра `bFinishTest`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function active_test_learning_finish(learningId: number, source: XmlTopElem, assessmentDoc: XmlTopElem, iPersonIDParam: number, bFinishTest: boolean): XmlDocument;

  /**
   * Функция завершает указанную попытку для теста и создает карточку завершенного теста.
   * @param {number} learningId - Id активного теста, попытку которого необходимо завершить.
   * @param {string} learningCode - Код раздела теста, который нужно завершить.
   * @param {AssessmentDocument} assessmentDocument - `TopElem` теста, который необходимо завершить.
   * @param {boolean} flagCreateLearning - Возвращает значение, показывающее,
   * создавать или не создавать запись завершенного теста:
   * - `true` – создавать запись завершенного теста;
   * - `false` – не создавать запись.
   * @param {ActiveTestLearningDocument} docActiveLearning - Документ активного теста, который необходимо завершить.
   * @returns {boolean} Результат выполнения функции.
   */
  function active_test_learning_finish_attempt(learningId: number, learningCode?: string, assessmentDocument?: AssessmentDocument, flagCreateLearning?: boolean, docActiveLearning?: ActiveTestLearningDocument): boolean;

  /**
   * Создаёт попытку тестирования, обновляет попытки разделов, состояние и балл, уведомляет об экспертной оценке, сохраняет активное тестирование и возвращает признак наличия оставшихся попыток.
   * @param {number} learningId - Значение параметра `learningId`.
   * @param {string} learningCode - Значение параметра `learningCode`.
   * @param {XmlTopElem} assessmentDoc - Значение параметра `assessmentDoc`.
   * @param {boolean} flagCreateLearning - Значение параметра `flagCreateLearning`.
   * @param {XmlDocument} docActiveLearning - Значение параметра `docActiveLearning`.
   * @param {boolean} bIsFinal - Значение параметра `bIsFinal`.
   * @returns {boolean} Результат выполнения.
   */
  function active_test_learning_finish_attempt(learningId: number, learningCode: string, assessmentDoc: XmlTopElem, flagCreateLearning: boolean, docActiveLearning: XmlDocument, bIsFinal: boolean): boolean;

  function active_test_learning_finish_link(activeLearningId: number, learningId: number, learningTopElem: XmlTopElem, assessmentTopElem: XmlTopElem): false | void;

  /**
   * Проверяет идентификаторы, ставит в очередь обновление плана обучения для тестирования и завершает запись прокторинга; возвращает false при некорректных документах.
   * @param {number} activeLearningID - Значение параметра `activeLearningID`.
   * @param {number} learningID - Значение параметра `learningID`.
   * @param {XmlTopElem} teLearning - Значение параметра `teLearning`.
   * @param {XmlTopElem} teAssessment - Значение параметра `teAssessment`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function active_test_learning_finish_link(activeLearningID: number, learningID: number, teLearning: XmlTopElem, teAssessment: XmlTopElem): unknown;

  /**
   * Добавляет новый язык в список используемых в системе языков. Загрузка происходит из XML-файла с константами.
   * Используется в администраторе в общих настройках, для установки новых языков или обновления существующих.
   * @param {string} sLngUrlParam - Путь до XML-файла с константами.
   * @param {boolean} bDoObtainParam - Используется при вызове функции на сервере. Если значение аргумента равно `true`,
   * то существующие значения констант языка перезаписываются новыми из файла `sLngUrlParam`.
   * @returns {number} Количество обновленных констант.
   * @example
   * ```
   * tools.add_lng(_url);
   * tools.add_lng(UrlAppendPath("x-local://custom/", temp_doc.lngs_url), true);
   * _num = TopElem.add_lng_items(_doc, true);
   * ```
   */
  function add_lng(sLngUrlParam: string, bDoObtainParam?: boolean): number;

  /**
   * Импортирует языковые константы из заданного файла в общий список lngs, объединяя существующие записи после подтверждения, и возвращает число обработанных записей.
   * @param {string} sLngUrlParam - Значение параметра `sLngUrlParam`.
   * @param {boolean} bDoObtainParam - Значение параметра `bDoObtainParam`.
   * @returns {number} Результат выполнения.
   */
  function add_lng(sLngUrlParam: string, bDoObtainParam: boolean): number;

  function add_object_to_package(object: XmlDocument, objectId: number, screen: unknown, fldPackage: unknown, o: Object): unknown;

  /**
   * Через диалог добавляет объект в пакет, при необходимости вместе с файлами, ролями, разделами и связанными объектами, сохраняет пакет и возвращает объект результата.
   * @param {XmlDocument} docObject - Значение параметра `docObject`.
   * @param {number} iObjectID - Значение параметра `iObjectID`.
   * @param {Object} screen - Значение параметра `screen`.
   * @param {XmlElem<unknown>} fldPackage - Значение параметра `fldPackage`.
   * @param {Object} oParam - Значение параметра `oParam`.
   * @returns {Object} Результат выполнения.
   */
  function add_object_to_package(docObject: XmlDocument, iObjectID: number, screen: Object, fldPackage: XmlElem<unknown>, oParam: Object): Object;

  /**
   * Функция добавляет сотрудника в список оцениваемых в процедуре оценки. Планы и анкеты при этом не создаются.
   * @param {number} personId - Id сотрудника.
   * @param {number} assessmentAppraiseId - Id процедуры оценки, в которую нужно добавить сотрудника.
   * @param {CollaboratorDocument} personDocument - `TopElem` карточки сотрудника.
   * @param {AssessmentAppraiseDocument} assessmentAppraiseDocument - Документ процедуры оценки, в которую нужно добавить сотрудника.
   * @returns {AssessmentAppraiseDocument} Измененный и сохраненный документ процедуры оценки.
   * ```
   */
  function add_person_to_assessment_appraise(personId: number, assessmentAppraiseId: number, personDocument?: CollaboratorDocument, assessmentAppraiseDocument?: AssessmentAppraiseDocument): AssessmentAppraiseDocument;

  /**
   * Добавляет сотрудника в аудиторию оценочной процедуры, если его там нет, сохраняет документ и возвращает его либо null.
   *
   * Примечание исходного кода: НАЧАЛО, автор — Мария Букина
   * @param {number} personId - Значение параметра `personId`.
   * @param {number} assessmentAppraiseId - Значение параметра `assessmentAppraiseId`.
   * @param {XmlTopElem} personDoc - Значение параметра `personDoc`.
   * @param {XmlDocument} docAssessmentAppraise - Значение параметра `docAssessmentAppraise`.
   * @returns {XmlDocument | null} Результат выполнения.
   */
  function add_person_to_assessment_appraise(personId: number, assessmentAppraiseId: number, personDoc: XmlTopElem, docAssessmentAppraise: XmlDocument): XmlDocument | null;

  /**
   * Добавляет участника в мероприятие.
   * @param {number} personId - Id сотрудника, добавляемого в мероприятие.
   * @param {number} eventId - Id мероприятия, в которое добавляется сотрудник.
   * @param {CollaboratorDocumentTopElem} personTopElem - `TopElem` сотрудника.
   * @param {EventDocument} event - Документ мероприятия.
   * @param {number} educationPlanId - Id плана обучения добавляемого сотрудника.
   * Если аргумент указан, то ссылка на план сохранится в результатах мероприятия сотрудника.
   * @param {number} requestPersonId - Id лица, подавшего заявку на добавление сотрудника в мероприятие.
   * Если аргумент указан, то ссылка на лицо, подавшее заявку, сохранится в результатах мероприятия сотрудника.
   * @param {number} requestId - Id заявки на включение сотрудника в состав участников мероприятия.
   * Если аргумент указан, то ссылка на заявку сохранится в результате мероприятия сотрудника.
   * @param {boolean} guestLogin - .
   * @param {boolean} doObtain - .
   * @returns {EventDocument | null} Документ мероприятия, к которому добавлялся сотрудник
   * (если сотрудник ранее не был добавлен в данное мероприятие),
   * или `null` (если сотрудник ранее уже был добавлен).
   * @example
   * ```
   * docEvent = tools.add_person_to_event (Int(sUserId), Int(sRoomId));
   * tools.add_person_to_event(_source.TopElem.person_id, _source.TopElem.object_id, null, docObject);
   * tools.add_person_to_event(fldPersonElem.PrimaryKey, docEvent.DocID, null, docEvent, null, catRequest.PrimaryKey);
   * ```
   */
  function add_person_to_event(personId: number, eventId: number, personTopElem?: CollaboratorDocumentTopElem, event?: EventDocument, educationPlanId?: number, requestPersonId?: number, requestId?: number, guestLogin?: boolean, doObtain?: boolean): EventDocument | null;

  /**
   * Передаёт добавление сотрудника в мероприятие в libEducation с флагами сохранения, создания результата и уведомления, возвращая документ мероприятия либо null.
   * @param {number} iPersonIDParam - Значение параметра `iPersonIDParam`.
   * @param {number} iEventIDParam - Значение параметра `iEventIDParam`.
   * @param {XmlTopElem} tePersonParam - Значение параметра `tePersonParam`.
   * @param {XmlDocument} docEventParam - Значение параметра `docEventParam`.
   * @param {number} iEducationPlanIDParam - Значение параметра `iEducationPlanIDParam`.
   * @param {number} iRequestPersonIDParam - Значение параметра `iRequestPersonIDParam`.
   * @param {number} iRequestIDParam - Значение параметра `iRequestIDParam`.
   * @param {boolean} bGuestLogin - Значение параметра `bGuestLogin`.
   * @param {boolean} bDoObtain - Значение параметра `bDoObtain`.
   * @returns {XmlDocument | null} Результат выполнения.
   */
  function add_person_to_event(iPersonIDParam: number, iEventIDParam: number, tePersonParam: XmlTopElem, docEventParam: XmlDocument, iEducationPlanIDParam: number, iRequestPersonIDParam: number, iRequestIDParam: number, bGuestLogin: boolean, bDoObtain: boolean): XmlDocument | null;

  /**
   * Добавляет строку к событию базы, определяемому `report_id` или документом `source_doc`.
   * @param {number} actionReportId - Id события базы, к которому нужно добавить строку.
   * @param {string} text - Строка, которую нужно добавить к событию базы.
   * @param {ActionReportDocument} actionReportDocument - Документ события базы, к которому нужно добавить строку.
   * @returns {ActionReportDocument} Сохраненный документ события базы с добавленной строкой.
   * @example
   * ```
   * var reportDocument = OpenNewDoc("x-local://wtv/wtv_action_report.xmd");
   * var reportId = reportDocument.DocID;
   * tools.add_report(reportId, "Saving archive: OK.");
   * ```
   */
  function add_report(actionReportId: number, text?: string, actionReportDocument?: ActionReportDocument): ActionReportDocument;

  /**
   * Добавляет строку с отметкой времени в текст отчёта о действии, сохраняет документ и возвращает его либо null, если идентификатор отчёта не задан.
   * @param {number} iActionRepotrIDParam - Значение параметра `iActionRepotrIDParam`.
   * @param {string} sTextParam - Значение параметра `sTextParam`.
   * @param {XmlDocument} docActionRepotrParam - Значение параметра `docActionRepotrParam`.
   * @returns {XmlDocument | null} Результат выполнения.
   */
  function add_report(iActionRepotrIDParam: number, sTextParam: string, docActionRepotrParam: XmlDocument): XmlDocument | null;

  /**
   * Создает элемент очереди скриптов.
   * @param {string} scriptParam - Код для выполнения.
   * @param {string} code - Строка с кодом скрипта.
   * @param {boolean} deleteAutomaticallyParam - Флаг, определяющий, нужно ли автоматически удалять код из очереди:
   * - `true` – код автоматически удаляется из очереди;
   * - `false` – не удаляется.
   * @param {number} delayParam - Задержка в секундах перед выполнением кода.
   * @param {Date} [startDate] - Дата старта агента.
   * @returns {number} Id созданного объекта.
   * @example
   * ```
   * var scriptId = tools.add_script_to_queue(sRegistrationScript,"mgr", true, 5);
   * tools.add_script_to_queue(
   *   "tools_chat.write_message(" + XQueryLiteral(sTextMessage) + ", " + iObjectID + ")",
   *   "send_message",
   *   true,
   *   0
   *);
   * tools.add_script_to_queue(
   *   "tools_chat.change_participants_conversation(" + iConversationID + ", null, " + XQueryLiteral(sAction) + ")",
   *   "change_participants_conversation",
   *   true,
   *   0
   *);
   * ```
   */
  function add_script_to_queue(scriptParam: string, code: string, deleteAutomaticallyParam: boolean, delayParam: number, startDate?: Date): number;

  /**
   * Создаёт и сохраняет документ очереди сценариев с кодом, задержкой, датой начала и флагом автоудаления, возвращая идентификатор документа.
   * @param {string} sScriptParam - Значение параметра `sScriptParam`.
   * @param {string} sCodeParam - Значение параметра `sCodeParam`.
   * @param {boolean} bDeleteAutomaticallyParam - Значение параметра `bDeleteAutomaticallyParam`.
   * @param {number} iDelayParam - Значение параметра `iDelayParam`.
   * @param {Date} dStartDate - Значение параметра `dStartDate`.
   * @returns {number} Результат выполнения.
   */
  function add_script_to_queue(sScriptParam: string, sCodeParam: string, bDeleteAutomaticallyParam: boolean, iDelayParam: number, dStartDate: Date): number;

  function add_system_event_handlers_to_obj(systemEventId: number, systemEventHandlerId: number, systemEventHandlerTopElem: XmlTopElem): unknown;

  /**
   * Добавляет или обновляет обработчик системного события в кешированной коллекции, обновляет кеш на 86400 секунд и возвращает true.
   * @param {number} iSystemEventId - Значение параметра `iSystemEventId`.
   * @param {number} iSystemEventHandlerId - Значение параметра `iSystemEventHandlerId`.
   * @param {XmlTopElem} teSystemEventHandler - Значение параметра `teSystemEventHandler`.
   * @returns {boolean} Результат выполнения.
   */
  function add_system_event_handlers_to_obj(iSystemEventId: number, iSystemEventHandlerId: number, teSystemEventHandler: XmlTopElem): boolean;

  /**
   * Сдвигает указанную дату на количество секунд, заданное параметрами функции.
   * Можно передать дни, часы, минуты и секунды для сдвига даты.
   * Дни, часы, минуты будут пересчитаны в секунды.
   * @param {Date} [dateVal=CurDate] - Исходная дата, подлежащая изменению.
   * @param {number} [days=0] - Количество дней, на которое нужно сдвинуть текущую дату.
   * @param {number} [hours=0] - Количество часов, на которое нужно сдвинуть текущую дату.
   * @param {number} [minutes=0] - Количество минут, на которое нужно сдвинуть текущую дату.
   * @param {number} [seconds=0] - Количество секунд, на которое нужно сдвинуть текущую дату.
   * @returns {Date} Измененная дата, полученная сдвигом исходной даты на указанное
   * количество дней, часов, минут и секунд.
   * @example
   * ```
   * newDate = tools.AdjustDate(null, 1); // сдвиг текущей даты на 1 сутки
   * newDate1 = tools.AdjustDate(null, -1); // сдвиг текущей даты на 1 сутки назад
   * ```
   */
  function AdjustDate(dateVal?: Date, days?: number, hours?: number, minutes?: number, seconds?: number): Date;

  /**
   * Сдвигает дату на дни, часы, минуты и секунды и возвращает скорректированную дату, используя текущую дату, если она не передана.
   * @param {string} dateVal - Значение параметра `dateVal`.
   * @param {number} days - Значение параметра `days`.
   * @param {number} hours - Значение параметра `hours`.
   * @param {number} minutes - Значение параметра `minutes`.
   * @param {number} seconds - Значение параметра `seconds`.
   * @returns {string} Результат выполнения.
   */
  function AdjustDate(dateVal: string, days: number, hours: number, minutes: number, seconds: number): string;

  /**
   * Копирует параметры доступа к объекту в другой объект.
   * @param {number} toObjId - Id объекта, в который нужно скопировать параметры доступа.
   * @param {XmlTopElem} toObjDoc - TopElem объекта, в который нужно скопировать параметры доступа.
   * @param {number} fromObjId - Id объекта, из которого нужно скопировать параметры доступа.
   * @param {XmlTopElem} fromObjDoc - TopElem объекта, из которого нужно скопировать параметры доступа.
   * @example
   * ```
   * tools.admin_access_copying("", docEventResult.TopElem, "", topElem);
   * tools.admin_access_copying(null, requestDoc.TopElem, curObjectID, curObject);
   * ```
   */
  function admin_access_copying(toObjId: number | undefined | null, toObjDoc: XmlTopElem | undefined | null, fromObjId: number | undefined | null, fromObjDoc: XmlTopElem | undefined | null): void;

  /**
   * Копирует поля роли доступа и группы из исходного объекта в целевой, если каталог доступа разрешает автоматическое заполнение.
   * @param {number} toObjId - Значение параметра `toObjId`.
   * @param {XmlTopElem} toObjDoc - Значение параметра `toObjDoc`.
   * @param {number} fromObjId - Значение параметра `fromObjId`.
   * @param {XmlTopElem} fromObjDoc - Значение параметра `fromObjDoc`.
   */
  function admin_access_copying(toObjId: number, toObjDoc: XmlTopElem, fromObjId: number, fromObjDoc: XmlTopElem): void;

  /**
   * Проверяет доступ к объекту на основе настроек в разделе
   * Отображение каталогов (блок Безопасность) для текущего пользователя в Webtutor Administrator.
   * @param {XmlTopElem} objectTopElem - `TopElem` объекта, к которому проверяется доступ.
   * @returns {boolean} Возвращает значение, показывающее наличие или отсутствие доступа:
   * - `true` – доступ разрешен;
   * - `false` – доступ запрещен.
   */
  function admin_access_filling(objectTopElem: XmlTopElem): boolean;

  /**
   * Проверяет административный доступ текущего пользователя к объекту, показывает ошибку и отменяет действие при отказе, а для новых объектов заполняет роль или группу.
   * @param {XmlTopElem} teObjectParam - Значение параметра `teObjectParam`.
   * @returns {boolean} Результат выполнения.
   */
  function admin_access_filling(teObjectParam: XmlTopElem): boolean;

  function alert_server(message: string): void;

  function amgr_cancel_agent(roleUId: number, threadId: number): unknown;

  /**
   * На клиенте передаёт выполнение серверу; на сервере ставит сообщение отмены потока в очередь и возвращает true.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} roleUID - Значение параметра `roleUID`.
   * @param {number} threadID - Значение параметра `threadID`.
   * @returns {boolean} Результат выполнения.
   */
  function amgr_cancel_agent(roleUID: number, threadID: number): boolean;

  function amgr_get_agent_list_json(): unknown;

  /**
   * На клиенте передаёт выполнение серверу; на сервере собирает сведения о выполняющихся и завершённых агентах из очередей UniBridge в строку массива JSON.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @returns {string | null} Результат выполнения.
   */
  function amgr_get_agent_list_json(): string | null;

  function amgr_kill_role(nodeId: number, roleUId: number): unknown;

  /**
   * На клиенте передаёт выполнение серверу; на сервере ставит команду Kill для роли на узле в очередь и возвращает true.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} nodeId - Значение параметра `nodeId`.
   * @param {number} roleUID - Значение параметра `roleUID`.
   * @returns {boolean} Результат выполнения.
   */
  function amgr_kill_role(nodeId: number, roleUID: number): boolean;

  /**
   * Представляет результаты теста в формате XML-структуры.
   * @param {XmlElem<unknown>} oSourceParam - Элемент для разбора теста,
   * в котором содержится либо непустое поле `lesson_report`, `objects` (массив с элементами) или `core_lesson`.
   * @param {string} sQtiPathParam - Путь до файла со структурой теста в формате qti.
   * @param {string} sQtiTextParam - Структура теста в формате qti.
   * @param {boolean} bNoSendCorrectAnswerParam - Не отправлять правильный ответ.
   * @returns {XmlDocument} XML-структура, содержащая результаты тестирования.
   * @example
   * ```
   * tools.annals_decrypt(Ps);
   * TopElem.annals_variant = tools.annals_decrypt(oSource, sQtiPath);
   *
   * for (_learning in _learning_array ) {
   *   learningDoc = OpenDoc(UrlFromDocID(_learning.id)).TopElem;
   *   assessmentDoc = OpenDoc(UrlFromDocID(_learning.assessment_id)).TopElem;
   *   fldAnnals = tools.annals_decrypt(learningDoc, tools.get_qti_path(assessmentDoc));
   * }
   * ```
   */
  function annals_decrypt(oSourceParam: XmlElem<unknown>, sQtiPathParam?: string, sQtiTextParam?: string, bNoSendCorrectAnswerParam?: boolean): XmlDocument;

  /**
   * Формирует текстовый документ журнала из отчёта занятия, объектов или основного содержимого занятия, декодирует кодировку и заполняет данные QTI, возвращая поле либо null.
   * @param {XmlTopElem} oSourceParam - Значение параметра `oSourceParam`.
   * @param {string} sQtiPathParam - Значение параметра `sQtiPathParam`.
   * @param {string} sQtiTextParam - Значение параметра `sQtiTextParam`.
   * @param {boolean} bNoSendCorrectAnswerParam - Значение параметра `bNoSendCorrectAnswerParam`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function annals_decrypt(oSourceParam: XmlTopElem, sQtiPathParam: string, sQtiTextParam: string, bNoSendCorrectAnswerParam: boolean): XmlTopElem;

  function array_opt_find_by_key(arr: unknown, key: string, value: Object): unknown;

  /**
   * Сортирует массив по заданному ключу и возвращает соответствующий элемент либо undefined, если совпадение не найдено.
   * @param {unknown[]} arrParam - Значение параметра `arrParam`.
   * @param {string} sKeyParam - Значение параметра `sKeyParam`.
   * @param {Object} oValueParam - Значение параметра `oValueParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function array_opt_find_by_key(arrParam: unknown[], sKeyParam: string, oValueParam: Object): unknown;

  /**
   * Преобразует массив в строку указанного формата (`json`, `xml`).
   * @param {unknown[]} array - Массив, который необходимо преобразовать.
   * @param {string} [format="xml"] - Формат возвращаемой строки. Возможны два значения: `json` и `xml`).
   * @param {string} [rootName="data"] - Название корневого (`root`) тега.
   * Значение аргумента учитывается, если формируется строка в формате XML.
   * По умолчанию имеет значение `data` (корневой тег `<data></data>`).
   * @returns {string} Строка, сформированная из массива.
   * @example
   * ```
   * tools.array_to_text(["one", "two", "three"], "json"); // ["value":"one", "value":"two", "value":"three"]
   * tools.array_to_text(["one", "two", "three"], "xml"); // <data><value>one</value></data><data><value>two</value></data><data><value>three</value></data>
   * tools.array_to_text(["one", "two", "three"], "xml", "d"); // <d><value>one</value></d><d><value>two</value></d><d><value>three</value></d>
   * ```
   */
  function array_to_text(array: unknown[], format?: string, rootName?: string): string;

  /**
   * Преобразует каждый элемент массива в текст XML или JSON и объединяет их в единый документ с заголовком.
   * @param {unknown[]} aArrayPARAM - Значение параметра `aArrayPARAM`.
   * @param {string} sFormatPARAM - Значение параметра `sFormatPARAM`.
   * @param {string} sNamePARAM - Значение параметра `sNamePARAM`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function array_to_text(aArrayPARAM: unknown[], sFormatPARAM: string, sNamePARAM: string): unknown;

  /**
   * Заполняет карточку теста и создает вопросы к нему на основе qti-описания теста.
   * @param {number} assessmentId - Id теста.
   * @param {AssessmentDocumentTopElem} assessmentDocumentTopElem - TopElem теста.
   * @param {string} qti - Структура теста в формате qti.
   */
  function assessment_filling_from_qti(assessmentId: number, assessmentDocumentTopElem: AssessmentDocumentTopElem, qti: string): void;

  /**
   * Заполняет документ теста из текста QTI, заново создавая разделы, задания, ответы и признаки правильности, сохраняет задания; ничего не возвращает.
   * @param {number} assessmentId - Значение параметра `assessmentId`.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @param {string} qtiText - Значение параметра `qtiText`.
   * @returns {number} Результат выполнения.
   */
  function assessment_filling_from_qti(assessmentId: number, source: XmlTopElem, qtiText: string): number;

  /**
   * Заполняет свойства объекта-получателя из соответствующих свойств объекта-источника.
   * Заполняются только те свойства, названия которых указаны в переданном в функцию массиве.
   * @param {XmlTopElem} fldTarget - Объект-получатель.
   * @param {XmlTopElem} fldSourceParam - Объект-источник.
   * @param {string[]} arrFieldNamesParam - Массив строк с названиями полей для заполнения.
   */
  function assign_elems(fldTarget: XmlTopElem, fldSourceParam: XmlTopElem, arrFieldNamesParam: string[]): void;

  /**
   * Присваивает указанные дочерние поля из источника целевому элементу, не изменяя остальные поля.
   * @param {XmlElem<unknown>} fldTarget - Значение параметра `fldTarget`.
   * @param {XmlElem<unknown>} fldSourceParam - Значение параметра `fldSourceParam`.
   * @param {unknown[]} arrFieldNamesParam - Значение параметра `arrFieldNamesParam`.
   */
  function assign_elems(fldTarget: XmlElem<unknown>, fldSourceParam: XmlElem<unknown>, arrFieldNamesParam: unknown[]): void;

  function assign_elems_exclude(fldTarget: unknown, fldSource: unknown, arrFieldNames: unknown[]): unknown;

  /**
   * Присваивает все дочерние поля из источника целевому элементу, кроме указанных в списке исключений.
   * @param {XmlElem<unknown>} fldTarget - Значение параметра `fldTarget`.
   * @param {XmlElem<unknown>} fldSourceParam - Значение параметра `fldSourceParam`.
   * @param {unknown[]} arrFieldNamesParam - Значение параметра `arrFieldNamesParam`.
   */
  function assign_elems_exclude(fldTarget: XmlElem<unknown>, fldSourceParam: XmlElem<unknown>, arrFieldNamesParam: unknown[]): void;

  function assign_from_object(fldTarget: unknown, source: Object): unknown;

  /**
   * Рекурсивно копирует свойства объектов и массивов в соответствующие XML-поля целевого элемента, возвращая true.
   * @param {XmlElem<unknown>} fldTarget - Значение параметра `fldTarget`.
   * @param {Object} oSourceParam - Значение параметра `oSourceParam`.
   * @returns {boolean} Результат выполнения.
   */
  function assign_from_object(fldTarget: XmlElem<unknown>, oSourceParam: Object): boolean;

  /**
   * Создает объект присвоенной квалификации для всех участников указанного мероприятия.
   * @param {number} eventId - Id мероприятия.
   * @param {EventDocumentTopElem} eventDocumentTopElem - Документ мероприятия.
   * @param {number} qualificationId - Id квалификации.
   * @param {Date} date - Дата присвоения квалификации.
   * @returns {number} Количество созданных присвоенных квалификаций.
   */
  function assign_qualification_to_event(eventId: number, eventDocumentTopElem: EventDocumentTopElem, qualificationId: number, date: Date): number;

  /**
   * Передаёт назначение квалификации на заданную дату методу assign_qualification мероприятия и возвращает результат.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} evenId - Значение параметра `evenId`.
   * @param {XmlDocument} docEvent - Значение параметра `docEvent`.
   * @param {number} qualificationId - Значение параметра `qualificationId`.
   * @param {Date} date - Значение параметра `date`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function assign_qualification_to_event(evenId: number, docEvent: XmlDocument, qualificationId: number, date: Date): XmlTopElem;

  /**
   * Назначение квалификации.
   * @param {number} personId - Id сотрудника.
   * @param {number} eventId - Id мероприятия.
   * @param {number} qualificationId - Id квалификации.
   * @param {Date} assignmentDate - Дата присвоения квалификации.
   * @param {Date} expirationDate - Дата истечения квалификации.
   * @param {number[]} testLearnings - Массив законченных тестов сотрудника из параметра 1,
   * которые будут записаны в карточку присвоения квалификации.
   * @param {number[]} learnings - Массив законченных электронных курсов сотрудника из параметра 1,
   * которые будут записаны в карточку присвоения квалификации.
   * @param {number} sendMail - Числовое значение `0/1` – не отправлять/отправлять уведомление
   * сотруднику о присвоении квалификации.
   * @param {number} inProcess - Числовое значение `0/1` – не присвоена/в процессе
   * (`in_process`, если не передан, то по умолчанию = 0).
   * @param {boolean} assignTests - Булевое значение назначать/не назначать тесты сотруднику
   * присвоенной квалификации, если она в статусе `В процессе`.
   * @param {boolean} assignCourses - Булевое значение назначать/не назначать курсы
   * сотруднику присвоенной квалификации, если она в статусе `В процессе`.
   * @param {boolean} unconditionalAssignment - Булевое значение, если `false` и в статусе
   * `В процессе` и не заданы или равны `[]` параметры `6` и `7` – будет проверять
   * прохождение всех испытаний квалификации.
   * @param {QualificationAssignmentDocument} qualificationAssignmentDocument - Документ присвоенной
   * квалификации, меняется статус квалификации в зависимости от параметра `9`.
   * @param {QualificationDocumentTopElem} qualificationDocumentTopElem - XmlTopElem квалификации.
   * @param {CollaboratorDocumentTopElem} collaboratorDocumentTopElem - XmlTopElem сотрудника,
   * передается в параметрах функции при назначении теста/курса сотруднику.
   * @param {boolean} givePoint - Начислять баллы квалификации (вкладка `Бонус`), `true`,
   * если присвоение происходит из контекстного меню интерфейса администратора.
   * @returns {QualificationAssignmentDocument | null} Документ квалификации или null.
   */
  function assign_qualification_to_person(personId: number, eventId: number | undefined | null, qualificationId: number, assignmentDate: Date | undefined | null, expirationDate: Date | undefined | null, testLearnings: number[] | undefined | null, learnings: number[] | undefined | null, sendMail: number, inProcess: number, assignTests: boolean, assignCourses: boolean, unconditionalAssignment: boolean, qualificationAssignmentDocument: QualificationAssignmentDocument | null, qualificationDocumentTopElem: QualificationDocumentTopElem | undefined | null, collaboratorDocumentTopElem: CollaboratorDocumentTopElem | null, givePoint: boolean): QualificationAssignmentDocument | null;

  /**
   * Назначает квалификацию сотруднику, создаёт или обновляет документ назначения, при необходимости отправляет уведомления и письма, вызывает системное событие и возвращает документ.
   * @param {number} personId - Значение параметра `personId`.
   * @param {number} eventId - Значение параметра `eventId`.
   * @param {number} qualificationId - Значение параметра `qualificationId`.
   * @param {Date} assignmentDate - Значение параметра `assignmentDate`.
   * @param {Date} expirationDate - Значение параметра `expirationDate`.
   * @param {unknown[]} qualificationTestArray - Значение параметра `qualificationTestArray`.
   * @param {unknown[]} qualificationCourseArray - Значение параметра `qualificationCourseArray`.
   * @param {boolean} sendMail - Значение параметра `sendMail`.
   * @param {boolean} inProcess - Значение параметра `inProcess`.
   * @param {boolean} bAssignTestsParam - Значение параметра `bAssignTestsParam`.
   * @param {boolean} bAssignCoursesParam - Значение параметра `bAssignCoursesParam`.
   * @param {boolean} bUnconditionalAssignmentParam - Значение параметра `bUnconditionalAssignmentParam`.
   * @param {XmlTopElem} qualificationAssignmentDoc - Значение параметра `qualificationAssignmentDoc`.
   * @param {XmlTopElem} teQualification - Значение параметра `teQualification`.
   * @param {XmlTopElem} tePerson - Значение параметра `tePerson`.
   * @param {boolean} bGivePointParam - Значение параметра `bGivePointParam`.
   * @returns {XmlDocument | null} Результат выполнения.
   */
  function assign_qualification_to_person(personId: number, eventId: number, qualificationId: number, assignmentDate: Date, expirationDate: Date, qualificationTestArray: unknown[], qualificationCourseArray: unknown[], sendMail: boolean, inProcess: boolean, bAssignTestsParam: boolean, bAssignCoursesParam: boolean, bUnconditionalAssignmentParam: boolean, qualificationAssignmentDoc: XmlTopElem, teQualification: XmlTopElem, tePerson: XmlTopElem, bGivePointParam: boolean): XmlDocument | null;

  /**
   * Возвращает строку с размером файла в соответствующих единицах измерения
   * с учетом размерности (байтах, килобайтах, мегабайтах и т.д.).
   * @param {number} bytes - Размер файла в байтах.
   * @param {boolean} [addUnit=true] - Необходимость указания единиц измерения размера файла
   * (true – указывать единицы измерения, false – не указывать).
   * @returns {string} Размер файла.
   */
  function beautify_file_size(bytes: number, addUnit?: boolean): string;

  /**
   * Форматирует число байтов в удобочитаемый размер с необязательными единицами измерения; для некорректных данных возвращает маркер ошибки.
   * @param {number} iByteSizePARAM - Значение параметра `iByteSizePARAM`.
   * @param {boolean} bAddUnitPARAM - Значение параметра `bAddUnitPARAM`.
   * @returns {string} Результат выполнения.
   */
  function beautify_file_size(iByteSizePARAM: number, bAddUnitPARAM: boolean): string;

  /**
   * Используется в Webtutor Administrator в форме редактирования условий документооборота.
   * Формирует строку на основе стандартных значений, доступных в выпадающем списке условий документооборота.
   * Эта строка в дальнейшем выполняется в функции eval для определения
   * видимости/редактирования объектов документооборота.
   * @param {ConditionBase} conditions - Структура, содержащая условия документооборота..
   * @param {number} workflowId - Id документооборота. Применяется, если используется условие с типом проверки
   * определенного поля в документообороте (type ='if_workflow_field_value')
   * или если не передан параметр <teWorkflowParam>.
   * @param {WorkflowDocumentTopElem} workflowDocumentTopElem - TopElem документооборота.
   * Применяется, если используется условие с типом проверки определенного поля в документообороте
   * (type='if_workflow_field_value').
   * @returns {string} Значение списка.
   */
  function build_condition_eval_str(conditions: ConditionBase, workflowId?: number, workflowDocumentTopElem?: WorkflowDocumentTopElem): string;

  /**
   * Формирует строку вычисляемого выражения из условий документооборота, включая проверки состояния документооборота, значений полей и записей об активности.
   * @param {unknown[]} conditions - Значение параметра `conditions`.
   * @param {number} iWorkflowIDParam - Значение параметра `iWorkflowIDParam`.
   * @param {XmlTopElem} teWorkflowParam - Значение параметра `teWorkflowParam`.
   * @returns {string} Результат выполнения.
   */
  function build_condition_eval_str(conditions: unknown[], iWorkflowIDParam: number, teWorkflowParam: XmlTopElem): string;

  /**
   * Преобразует строку вида `+7-903-508-20-45` или `+7(903)508-20-45` в строку `79035082045 5082045`.
   * Функция используется для унификации поиска по телефонным номерам.
   * @param {string} strPhoneParam - Исходная строка для преобразования.
   * @returns {string | null} Преобразованная строка или значение `null`, если произошла ошибка.
   * @example
   * ```
   * sPhoneUnif1 = tools.build_phone("+7-903-508-20-45"); // 79035082045
   * sPhoneUnif2 = tools.build_phone("+7(903)508-20-45"); // 79035082045
   * sPhoneUnif3 = tools.build_phone("+7(903)508-2045"); // 5082045
   * ```
   */
  function build_phone(strPhoneParam: string): string | null;

  /**
   * Формирует нормализованную строку телефона, добавляя основные части для записей с кодом региона.
   * @param {string} strPhoneParam - Значение параметра `strPhoneParam`.
   * @returns {string} Результат выполнения.
   */
  function build_phone(strPhoneParam: string): string;

  /**
   * Запускает построение настраиваемого отчета.
   * @param {number} reportId - Id отчета для построения.
   * @param {ActionReportDocumentTopElem} [actionReportDocumentTopElem] - Документ карточки отчета,
   * если она открыта в интерфейсе Webtutor Administrator.
   * Данные (последние изменения) будут браться из этого документа.
   * @param {ActionReportDocument} [actionReportDocument] - Документ отчета.
   * @param {string} [lngShort] - Неизвестный параметр.
   * @param {boolean} [metaOnly] - Неизвестный параметр.
   * @returns {TaskInfoBase | null} Документ сохраненного настраиваемого отчета.
   * @example
   * ```
   * tools.build_report_remote (null, null, docCustomReport);
   * ServerEval('tools.build_report_remote (' + _cur_custom_report_id + ')');
   * if (tools.build_report_remote(iCustomReportID, teCustomReport, null) != null) {
   *   vReportResult = teCustomReport.get_report_data(iCustomReportID, curPersonID);
   * } else {
   *   alert("custom_report.html: invalid custom_report_id [" +iCustomReportID+ "] PS.Name=" + Ps.Name);
   * }
   * ```
   */
  function build_report_remote(reportId: number, actionReportDocumentTopElem?: ActionReportDocumentTopElem, actionReportDocument?: ActionReportDocument, lngShort?: string, metaOnly?: boolean): TaskInfoBase | null;

  /**
   * Удалённо формирует пользовательский отчёт в фоновой задаче, записывает запуск в журнал и возвращает сведения о ходе выполнения задачи.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} reportId - Значение параметра `reportId`.
   * @param {string} ps - Значение параметра `ps`.
   * @param {XmlDocument} docReportParam - Значение параметра `docReportParam`.
   * @param {string} sLngSHORT - Значение параметра `sLngSHORT`.
   * @param {boolean} bMetaOnly - Значение параметра `bMetaOnly`.
   * @returns {XmlDocument | null} Результат выполнения.
   */
  function build_report_remote(reportId: number, ps: string, docReportParam: XmlDocument, sLngSHORT: string, bMetaOnly: boolean): XmlDocument | null;

  /**
   * Заменяет в строке пробел, «(» , «)», «+» и «-» на пустую сроку, а символы «,» и «;» - на пробел.
   * @param {string} strPhoneParam - Исходная строка для преобразования.
   * @returns {string | null} - Преобразованная строка или значение `null`, если произошла ошибка.
   * @example
   * ```
   * sPhoneUnif1 = tools.build_simple_phone('+7-903-508-20-45');
   * sPhoneUnif2 = tools.build_simple_phone('+7(903)508-20-45');
   * sPhoneUnif3 = tools.build_simple_phone('+7(903)508-2045');
   * sPhoneUnif4 = tools.build_simple_phone('+7(903)508-2045; +7(903)508-2046; +7(903)508-2047');
   * ```
   */
  function build_simple_phone(strPhoneParam: string): string | null;

  /**
   * Удаляет из телефонного номера пробелы, скобки, знаки плюса, дефисы и разделители, возвращая очищенную строку.
   * @param {string} strPhoneParam - Значение параметра `strPhoneParam`.
   * @returns {string} Результат выполнения.
   */
  function build_simple_phone(strPhoneParam: string): string;

  function calculate_statistic_rec(statisticRecId: number, objectId: number, ignorePeriodSettings: boolean, calculateCatalogs: boolean): unknown;

  /**
   * Пересчитывает запись статистики в задаче с индикацией выполнения и возвращает результат вычисления, обновляя статус задачи.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iStatisticRecId - Значение параметра `iStatisticRecId`.
   * @param {number} iObjectIdParam - Значение параметра `iObjectIdParam`.
   * @param {boolean} bIgnorePeriodSettingsParam - Значение параметра `bIgnorePeriodSettingsParam`.
   * @param {boolean} bCalculateCatalogsParam - Значение параметра `bCalculateCatalogsParam`.
   * @returns {XmlTopElem | null} Результат выполнения.
   */
  function calculate_statistic_rec(iStatisticRecId: number, iObjectIdParam: number, bIgnorePeriodSettingsParam: boolean, bCalculateCatalogsParam: boolean): XmlTopElem | null;

  /**
   * Вызов метода из библиотеки программного кода. После выполнения загрузки библиотека кэшируется.
   * Примечание - По существу, данная функция получает объект библиотеки по его имени и вызывает
   * (при помощи функции CallObjectMethod) определенный метод из указанной библиотеки с заданными параметрами.
   * Внимание! При выполнении функции tools.call_code_library_method имеется возможность
   * использования кода C#, записанного в карточке библиотеки.
   * Для карточек, в которых записан код JavaScript, данная возможность заблокирована.
   * В последнем случае имеется возможность использовать код, записанный в прикрепленном файле JavaScript.
   * @param {string} library - Код библиотеки программного кода, в которой описан вызываемый метод.
   * @param {string} method - Название вызываемого метода.
   * @param {T} arrParams - Строка в формате json, задающая значения массива параметров вызываемого метода.
   * Параметры перечисляются через запятую, и весь набор параметров заключается в квадратные скобки.
   * @returns {K} Результат выполнения метода <sMethodNameParam>, определяемый типом указанного метода.
   * @example
   * ```
   * // вызов метода получения иерархического списка этапов и задач программы развития карьеры
   * // GetCareerReserveHierStageTaskByID из библиотеки программного кода libTalentPool (Библиотека развития карьеры)
   * var oRes = tools.call_code_library_method(
   *   "libTalentPool",
   *   "GetCareerReserveHierStageTaskByID",
   *   [
   *     OptInt(iCareerReserveID, curObjectID)
   *   ]
   * )
   * ```
   */
  function call_code_library_method<T, K>(library: string, method: string, arrParams: T[]): K;

  /**
   * Определяет библиотеку, выполняет код C# через сборщик dotnet или методы JS с временным переключением локали i18n и возвращает результат.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number | string | XmlTopElem} oLibraryParam - Значение параметра `oLibraryParam`.
   * @param {string} sMethodNameParam - Значение параметра `sMethodNameParam`.
   * @param {unknown[]} arrParams - Значение параметра `arrParams`.
   * @returns {Object} Результат выполнения.
   */
  function call_code_library_method(oLibraryParam: number | string | XmlTopElem, sMethodNameParam: string, arrParams: unknown[]): Object;

  function call_library_system_method(librarySystemId: number, methodName: string, params: Object): unknown;

  /**
   * Загружает документ библиотечной системы, добавляет его в параметры и вызывает указанный метод её библиотеки кода, возвращая результат.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iLibrarySystemIdParam - Значение параметра `iLibrarySystemIdParam`.
   * @param {string} sMethodNameParam - Значение параметра `sMethodNameParam`.
   * @param {Object} oParams - Значение параметра `oParams`.
   * @returns {string} Результат выполнения.
   */
  function call_library_system_method(iLibrarySystemIdParam: number, sMethodNameParam: string, oParams: Object): string;

  /**
   * Выполняет метод системы отправки уведомлений, указанный в атрибуте.
   * Значения для переменных системы отправки уведомлений, используемых в методе,
   * можно передать через параметры (атрибуты) функции. Название переменной в передаваемом параметре
   * должно совпадать с названием переменной в списке переменных в объекте системы отправки уведомлений.
   * @param {unknown} param - Id объекта системы отправки уведомлений или его TopElem.
   * Если передан Id или TopElem объекта, отличного от notification_system,
   * то в объекте будет произведен поиск Id системы отправки уведомлений в поле
   * notification_system_id и использован TopElem объекта, определяемый Id из этого поля.
   * @param {string} methodName - Название вызываемого метода.
   * @param {string} json - Строка в формате json, задающая значения переменных в объекте системы отправки уведомлений.
   * @returns {unknown} Результат выполнения метода <sMethodNameParam>, определяемый типом указанного метода.
   */
  function call_notification_system_method(param: unknown, methodName: string, json: Object): unknown;

  /**
   * Объединяет сохранённые параметры системы уведомлений со значениями вызывающей стороны и вызывает указанный метод её библиотеки, показывая предупреждения при ошибках.
   * @param {Object} oParam - Значение параметра `oParam`.
   * @param {string} sMethodNameParam - Значение параметра `sMethodNameParam`.
   * @param {unknown[]} oArrParam - Значение параметра `oArrParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function call_notification_system_method(oParam: Object, sMethodNameParam: string, oArrParam: unknown[]): unknown;

  function call_webinar_system_method(webinarSystemId: number, methodName: string, params: Object): unknown;

  /**
   * Вызывает разрешённый метод библиотеки системы вебинаров для онлайн-мероприятий, не являющихся шаблонами, возвращая ошибку и сообщение; при сбое показывает предупреждение.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iWebinarSystemIdParam - Значение параметра `iWebinarSystemIdParam`.
   * @param {string} sMethodNameParam - Значение параметра `sMethodNameParam`.
   * @param {Object} oParams - Значение параметра `oParams`.
   * @returns {Object} Результат выполнения.
   */
  function call_webinar_system_method(iWebinarSystemIdParam: number, sMethodNameParam: string, oParams: Object): Object;

  /**
   * Проверяет разрешение на доступ к указанному объекту для указанного пользователя.
   * Проверка идет по уровню доступа, роли доступа, группам доступа и условиям доступа,
   * если в карточке объекта есть соответствующие настройки.
   * @param {XmlTopElem} topElem - TopElem объекта, доступ к которому нужно проверить.
   * @param {number} userId - Id сотрудника, для которого нужно проверить доступ.
   * @returns {boolean} Возвращает значение, показывающее,
   * разрешен ли сотруднику доступ к объекту (true – доступ разрешен, false – доступ запрещен).
   */
  function check_access(topElem: XmlTopElem, userId: number): boolean;

  /**
   * Определяет идентификатор пользователя и сеанс, затем передаёт проверку доступа в tools_web.check_access и возвращает её результат.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {XmlTopElem} sourceDoc - Значение параметра `sourceDoc`.
   * @param {number} userId - Значение параметра `userId`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function check_access(sourceDoc: XmlTopElem, userId: number): unknown;

  /**
   * Для типов установки WebTutor с информационной базой, отличной от XML,
   * данная функция обновляет документ в кэше.
   * URL обновляемого документа указывается в качестве атрибута.
   * @param {string} url - Строка, содержащая путь до документа.
   * @returns {boolean} Возвращает значение, показывающее, успешно ли был обновлен документ в кэше
   * (true – документ обновлен успешно, false – документ не обновлен).
   */
  function check_and_refresh_cached_docs(url: string): boolean;

  function check_course_finish_condition(learningDoc: LearningDocument, courseDoc: CourseDocument): boolean;

  /**
   * Открывает документы обучения и курса, проверяет незавершённые обязательные разделы и проходной балл и возвращает признак возможности завершения курса.
   * @param {number | XmlTopElem} learningDoc - Значение параметра `learningDoc`.
   * @param {number | XmlTopElem} courseDoc - Значение параметра `courseDoc`.
   * @returns {boolean} Результат выполнения.
   */
  function check_course_finish_condition(learningDoc: number | XmlTopElem, courseDoc: number | XmlTopElem): boolean;

  function check_cur_user_admin_access(objectTopElem: XmlTopElem, fldAccessCalalogName: unknown): boolean;

  /**
   * Проверяет доступ текущего пользователя к объекту по роли администратора, членству в группе или фильтрам каталога доступа, записывая отказы в auth-events.
   * @param {XmlTopElem} teObjectParam - Значение параметра `teObjectParam`.
   * @param {XmlElem<unknown>} fldAccessCalalogNameParam - Значение параметра `fldAccessCalalogNameParam`.
   * @returns {boolean} Результат выполнения.
   */
  function check_cur_user_admin_access(teObjectParam: XmlTopElem, fldAccessCalalogNameParam: XmlElem<unknown>): boolean;

  function check_event_fields(eventId: number, event: EventDocument, eventTopElem: XmlTopElem): unknown;

  /**
   * Проверяет данные мероприятия, при необходимости передаёт проверку полей системе вебинаров, кеширует флаг пропуска проверки на десять секунд и возвращает объект ошибки и сообщения.
   * @param {number} iEventID - Значение параметра `iEventID`.
   * @param {XmlDocument} docEvent - Значение параметра `docEvent`.
   * @param {XmlTopElem} teEvent - Значение параметра `teEvent`.
   * @returns {Object} Результат выполнения.
   */
  function check_event_fields(iEventID: number, docEvent: XmlDocument, teEvent: XmlTopElem): Object;

  /**
   * Проверяет, что переданная строка не пустая и не содержит русские буквы
   * или недопустимые в названии теги XML-символы.
   * Функция используется для проверки правильности названия полей,
   * создаваемых пользователем в интерфейсе (настраиваемые поля, настраиваемые типы документов).
   * @param {string} field - Строковое выражение с названием поля (то, что содержится в поле name, а не title).
   * @param {boolean} [isStrictBegin=false] - Аргумент, определяющий выполнение проверки на наличие русских букв
   * или недопустимых в названии тегов XML-символов (true – указанная проверка производится,
   * false – указанная проверка не производится).
   * @returns {boolean} Возвращает значение, показывающее,
   * прошла ли строка указанную проверку (true – проверка пройдена успешно, false – проверка не пройдена).
   */
  function check_field_name(field: string, isStrictBegin: boolean): boolean;

  /**
   * Проверяет, есть ли операция, привязанная к переданному в параметрах функции действию (action),
   * в списке переданных операций.
   * @param {OperationCatalogDocumentTopElem[]} operations - Массив каталожных записей операций.
   * @param {CollaboratorDocumentTopElem} collaboratorTopElem - TopElem сотрудника.
   * Если передан не пустой атрибут и не null и если роль доступа - Администратор, то функция всегда будет возвращать true.
   * @param {string} action - Код действия, к которому должна быть привязана операция.
   * @returns {boolean} Значение true демонстрирует, что в функцию передан TopElem сотрудника с ролью Администратор
   * или в массиве найдена операция с указанным кодом действия. В противном случае возвращается значение false.
   */
  function check_operation_rights(operations: OperationCatalogDocumentTopElem[], collaboratorTopElem: unknown, action: string): boolean;

  /**
   * Возвращает true для администраторов, иначе проверяет наличие действия в переданном массиве операций.
   * @param {unknown[]} arrOperationsParam - Значение параметра `arrOperationsParam`.
   * @param {XmlTopElem} teCurUserParam - Значение параметра `teCurUserParam`.
   * @param {string} sActionParam - Значение параметра `sActionParam`.
   * @returns {boolean} Результат выполнения.
   */
  function check_operation_rights(arrOperationsParam: unknown[], teCurUserParam: XmlTopElem, sActionParam: string): boolean;

  function check_periodity(fldPeriodity: unknown, curDate: unknown, sleepSec: number): unknown;

  /**
   * Возвращает признак необходимости срабатывания настройки periodity сейчас, проверяя тип запуска, диапазон дат, временное окно и дату последнего запуска.
   * @param {XmlElem<unknown>} fldPeriodityParam - Значение параметра `fldPeriodityParam`.
   * @param {Date} curDate - Значение параметра `curDate`.
   * @param {number} iSleepSecParam - Значение параметра `iSleepSecParam`.
   * @returns {boolean} Результат выполнения.
   */
  function check_periodity(fldPeriodityParam: XmlElem<unknown>, curDate: Date, iSleepSecParam: number): boolean;

  /**
   * Проверяет, входит ли указанная операция в состав массива операций, определяемых типами руководителей
   * из массива функциональных руководителей, который передается в функцию.
   * @param {FuncManagersBaseFuncManager[]} manager - Массив каталожных записей функциональных руководителей.
   * @param {string | number} operation - Id операции или код действия (action), привязанного к операции.
   * @returns {boolean} Возвращает значение, показывающее, входит ли указанная операция в массив операций
   * (true – операция входит в массив операций, false – операция не входит в массив операций).
   */
  function check_relative_operation(manager: FuncManagersBaseFuncManager[], operation: string | number): boolean;

  /**
   * Проверяет, относится ли операция, определённая по идентификатору или имени действия, к одному из типов руководителя.
   * @param {Object} oManagerParam - Значение параметра `oManagerParam`.
   * @param {Object} oOperationParam - Значение параметра `oOperationParam`.
   * @returns {boolean} Результат выполнения.
   */
  function check_relative_operation(oManagerParam: Object, oOperationParam: Object): boolean;

  /**
   * На основе настроек профиля редактирования контента в карточке сотрудника проверяется
   * возможность загрузки файла указанного размера. В частности, проверяется ограничение
   * на размер загружаемого файла, на общий размер файлов, загруженных пользователем,
   * и на максимальное количество загружаемых файлов.
   * Применяется при загрузке файла в базу с портала.
   * @param {number} filesize - Размер файла в байта.
   * @param {number} personId - Id сотрудника.
   * @param {XmlTopElem} personTopElem - .
   * @returns {"ok" | string} Возвращает выражение `ok`, если загрузка разрешена,
   * или строку с сообщением о причине отказа в загрузке в противном случае.
   */
  function check_resource_size(filesize: number, personId: number, personTopElem: XmlTopElem): "ok" | string;

  /**
   * Проверяет размер файла и общий объём ресурсов сотрудника по ограничениям профиля, возвращая 'ok' либо локализованное сообщение о превышении лимита.
   * @param {number} iFileSizeParam - Значение параметра `iFileSizeParam`.
   * @param {number} iPersonIDParam - Значение параметра `iPersonIDParam`.
   * @param {XmlTopElem} tePerson - Значение параметра `tePerson`.
   * @returns {string} Результат выполнения.
   */
  function check_resource_size(iFileSizeParam: number, iPersonIDParam: number, tePerson: XmlTopElem): string;

  function check_sum_sid(id: string, sum: string): ReturnType<typeof tools_web.check_sum_sid>;

  /**
   * Проверяет переданную контрольную сумму по SID текущего сеанса с помощью tools_web.
   * @param {string} sIdParam - Значение параметра `sIdParam`.
   * @param {string} sSumParam - Значение параметра `sSumParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function check_sum_sid(sIdParam: string, sSumParam: string): unknown;

  /**
   * Очищает данные статуса экземпляра товара.
   * @param {number | string} goodInstance - Id экземпляра товара или документ экземпляра товара.
   * @returns {boolean} Возвращает значение, показывающее,
   * выполнена ли функция успешно (true – функция выполнена успешно, false – функция не выполнена).
   */
  function clear_good_instance_status(goodInstance: number | string): boolean;

  /**
   * Очищает поле статуса документа экземпляра товара и сохраняет его; возвращает false при ошибке операции.
   * @param {XmlDocument} oSourceGoodInstance - Значение параметра `oSourceGoodInstance`.
   * @returns {boolean} Результат выполнения.
   */
  function clear_good_instance_status(oSourceGoodInstance: XmlDocument): boolean;

  /**
   * Закрывает HTTP-запрос к странице.
   * При закрытии запроса вызывается код, обрабатывающий ее закрытие.
   * В самой функции статус запроса не меняется.
   * @param {number} requestId - Id HTTP-запроса, который необходимо закрыть.
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно, или false в противном случае.
   */
  function close_request(requestId: number): boolean;

  /**
   * Функция очищает поля в приемнике данных на основе указанного типа объекта источника данных.
   * Приемником может быть элемент любого уровня в xml-структуре содержащий нужные поля.
   * В зависимости от типа источника очищаются разные поля в приемнике.
   * Для источника типа event очищаются поля event_name, event_start_date.
   * Для источника типа education_org очищается поле education_org_name.
   * Для источника типа course очищаются поля course_name, course_code.
   * Для источника типа assessment очищаются поля assessment_name, assessment_code.
   * Для источника типа request_type очищаются поля request_type_id, type, workflow_id, is_group.
   * Для источника типа response_type очищаются поля response_type_id, type.
   * Для источника типа collaborator очищаются поля:
   * - person_fullname;
   * - collaborator_fullname;
   * - person_name;
   * - person_position_name;
   * - position_name;
   * - person_org_name;
   * - person_instance_id;
   * - person_current_state;
   * - person_code.
   * Для источника типа object очищаются поля object_type, object_name, object_code, object_start_date.
   * @param {string} type - Строка, содержащая название типа источника объекта.
   * @param {XmlTopElem} source - Приемник данных.
   * @param {MsPersonSdInnerBase} xmlElemWithSdNode - Элемент XML, имеющий дочерний элемент sd (если атрибут ps указан, то его дочерний элемент sd очищается).
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно, или false в противном случае.
   * @example
   * ```
   * tools.common_clear(_cur_catalog_name, TopElem, Ps);
   * tools.common_clear("collaborator", Child(0).Parent, person_id);
   * ```
   */
  function common_clear(type: "subdivision" | "org" | "position" | "event" | "education_org" | "course" | "assessment" | "request_type" | "task_type" | "response_type" | "collaborator" | "object" | "education_type", source: XmlTopElem, xmlElemWithSdNode?: MsPersonSdInnerBase): boolean;

  /**
   * Очищает зависящие от типа поисковые поля, например имена, коды и даты, в исходном элементе и его дочернем элементе sd, затем возвращает true.
   * @param {string} type - Значение параметра `type`.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @param {XmlTopElem} ps - Значение параметра `ps`.
   * @param {XmlDocument} doc - Значение параметра `doc`.
   * @returns {boolean} Результат выполнения.
   */
  function common_clear(type: string, source: XmlTopElem, ps: XmlTopElem, doc: XmlDocument): boolean;

  /**
   * Функция заполняет некоторые поля (дополнительную информацию) в карточке
   * объекта-приемника данных на основе значений из объекта-источника данных.
   * В качестве источника данных используется TopElem соответствующего документа.
   * Приемником может быть элемент любого уровня в xml-структуре, содержащий нужные поля.
   * В зависимости от типа источника заполняются разные поля в приемнике.
   * Примечание - Функция не предназначена для копирования однотипных объектов.
   * Она может быть использована для заполнения некоторого набора стандартных полей объекта
   * одного типа в зависимости от полей объекта другого типа,
   * а основе которого создан первый объект
   * (например, для заполнения дополнительной информации объекта
   * Незаконченный электронный курс из полей объекта Электронный курс).
   * Для типа источника subdivision заполняется поле subdivision_name.
   * Для типа источника event заполняются поля:
   * - event_name;
   * - event_start_date;
   * - event_result_type_id (если в мероприятии задан default_event_result_type_id).
   * Для типа источника course заполняются поля course_name, course_code, duration, no_encoding_core_lesson.
   * Для типа источника assessment заполняются поля assessment_name, assessment_code, duration, attempts_num.
   * Для типа источника request_type заполняются поля request_type_id, type, workflow_id, is_group.
   * Для типа источника response_type заполняются поля response_type_id, type.
   * Для типа источника education_method заполняются поля:
   * - duration_plan;
   * - duration_fact;
   * - duration_days_plan;
   * - duration_days_fact;
   * - max_person_num;
   * - name;
   * - default_response_type_id;
   * - mandatory_fill_response;
   * - cost;
   * - currency;
   * - cost_type;
   * - education_org_id;
   * - event_form;
   * - lectors (массив);
   * - prev_testing.assessments (массив);
   * - post_testing (массив);
   * - expense_items (массив).
   * Для типа источника education_org заполняется поле education_org_name.
   * Для типа источника collaborator заполняются поля:
   * - person_fullname;
   * - collaborator_fullname;
   * - person_name;
   * - person_position_name;
   * - position_name;
   * - person_org_name;
   * - person_instance_id;
   * - person_current_state;
   * - person_code.
   * Для типа источника item заполняются поля title, question_text, type_id, question_points.
   * Для типа источника submission_type заполняется поле submission_type_name.
   * Для типа источника activity заполняются поля activity_code, activity_name.
   * Для типа источника verb заполняются поля verb_code, verb_name.
   * Для типа источника object заполняются поля object_type, object_name, object_code, object_start_date.
   * Для типа источника tag заполняется поле tag_name.
   * @param {string} type - Строка, содержащая название типа источника объекта.
   * @param {XmlElem<unknown>} elem - TopElem документа-приемника данных (документа, которому передаются данные).
   * @param {number} objectId - Id документа-источника данных.
   * @param {XmlTopElem} [xmlTopElem] - TopElem документа-источника данных.
   * @param {boolean} [customFlag] - Если значение данного атрибута равно true и значение атрибута type равно 'event',
   * то в интерфейс администратора выводится сообщение о количестве преподавателей в мероприятии.
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно
   * и при заполнении не было выявлено ошибок,
   * или false - если заполнение произошло с ошибкой.
   * Если в приемнике данных не было полей для заполнения или в источнике данных не было необходимых данных,
   * функция вернет значение true.
   * @example
   * ```
   * // Пример 1:
   * oActiveLearning_receiver = OpenNewDoc("x-local://wtv/wtv_active_learning.xmd");
   * oCollab_source = tools.get_doc_by_key("collaborator", "fullname", "Вилкова Ольга Николаевна");
   * // на экран выводится информация об отобранном сотруднике-источнике
   * alert ("Найден сотрудник " + oCollab_source.TopElem.name + " с идентификационным номером " + oCollab_source.DocID);
   * oActiveLearning_receiver.TopElem.person_id = oCollab_source.DocID; // заполнение основной информации о сотруднике
   * // заполнение дополнительной информации о сотруднике
   * tools.common_filling("collaborator", oActiveLearning_receiver.TopElem, oCollab_source.DocID);
   * oCourse_source = tools.get_doc_by_key ("course", "name", "Эффективное совещание");
   * // на экран выводится информация об отобранном курсе-источнике
   * alert ("Найден курс " + oCourse_source.TopElem.name + " с идентификационным номером " + oCourse_source.DocID);
   * oActiveLearning_receiver.TopElem.course_id = oCourse_source.DocID; // заполнение основной информации о курсе
   * // заполнение дополнительной информации о курсе
   * tools.common_filling("course", oActiveLearning_receiver.TopElem, oCourse_source.DocID);
   * // связывание нового сформированного объекта с базой данных
   * oActiveLearning_receiver.BindToDb();
   * // сохранение нового объекта в информационной базе
   * oActiveLearning_receiver.Save();
   * // Пример 2:
   * tools.common_filling("request_type", doc.TopElem, _request_type_first_elem.PrimaryKey);
   * tools.common_filling("education_method", doc.TopElem, TopElem.Doc.DocID, TopElem);
   * ```
   */
  function common_filling(type: "subdivision" | "org" | "position" | "event" | "course" | "assessment" | "request_type" | "task_type" | "presence_state" | "project" | "response_type" | "education_method" | "education_org" | "collaborator" | "item" | "submission_type" | "activity" | "object" | "tag" | "object_data_type" | "custom_web_template", elem: XmlElem<unknown>, objectId: number, xmlTopElem?: XmlTopElem, customFlag?: boolean): boolean;

  /**
   * Заполняет целевые поля из документа объекта по типу, при необходимости копируя административный доступ и пользовательские соответствия; возвращает false, если документ нельзя открыть.
   * @param {string} type - Значение параметра `type`.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @param {number} objectId - Значение параметра `objectId`.
   * @param {XmlTopElem} objectDoc - Значение параметра `objectDoc`.
   * @param {boolean} customFlag - Значение параметра `customFlag`.
   * @param {Object} oAddParam - Значение параметра `oAddParam`.
   * @returns {boolean} Результат выполнения.
   */
  function common_filling(type: string, source: XmlTopElem, objectId: number, objectDoc: XmlTopElem, customFlag: boolean, oAddParam: Object): boolean;

  /**
   * Функция выявляет домен и логин почтового адреса из электронного сообщения в стандарте X.400
   * и возвращает строку вида login@domainтекст_письма.
   * @param {string} x40Email - Строка электронного сообщения в стандарте X.400,
   * из которого выделяется домен и логин электронного адреса.
   * @param {string} endMail - Строковое выражение, содержащее текст письма, который будет добавлен к login@domain.
   * @returns {string} Строковое выражение вида login@domain текст_письма.
   */
  function convert_email_from_x40(x40Email: string, endMail: string): string;

  /**
   * Копирует папку с файлами, включая все подпапки из указанного источника в указанный приемник.
   * Если приемник не существует, то он создается по указанному адресу.
   * @param {string} sourceDirectory - Путь до папки источника.
   * @param {string} destinationDirectory - Путь до папки приемника.
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно
   * (копирование выполнено), или false - в противном случае (копирование не выполнено).
   */
  function copy_directory(sourceDirectory: string, destinationDirectory: string): boolean;

  /**
   * Копирует все ресурсы из манифеста SCORM по базовому URL курса с модальным индикатором выполнения и возвращает накопленные количество и текст ошибок.
   * @param {string} fileUrl - Путь или URL до файла manifest.
   * @param {string} baseUrl - Путь или URL до папки получателя относительно папки wt/web.
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно (копирование выполнено),
   * или false - в противном случае (копирование не выполнено).
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   */
  function copy_manifest_resources(fileUrl: string, baseUrl: string): BaseToolsResponse;

  /**
   * Копирует файл из адреса источника данных по адресу получателя данных.
   * Все папки в адресе должны существовать до начала копирования, как в источнике, так и в получателе.
   * @param {string} destinationDirectory - Путь или URL до файла получателя (включая название файла).
   * @param {string} sourceDirectory - Путь или URL до файла источника (включая название файла).
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно (копирование выполнено),
   * или false - в противном случае (копирование не выполнено).
   */
  function copy_url(destinationDirectory: string, sourceDirectory: string): boolean;

  /**
   * Копирует данные по URL в целевое расположение, используя провайдер UniBridge или загрузку частями, когда это применимо.
   * @param {string} sDestDirPARAM - Значение параметра `sDestDirPARAM`.
   * @param {string} sSourceDirPARAM - Значение параметра `sSourceDirPARAM`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function copy_url(sDestDirPARAM: string, sSourceDirPARAM: string): unknown;

  function copy_url_server(destUrl: string, sourceUrl: string): string | never;

  /**
   * Копирует данные исходного URL в базу данных по умолчанию или расположение trash/temp и возвращает результат tools.copy_url.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sDestUrlParam - Значение параметра `sDestUrlParam`.
   * @param {string} sSourceUrlParam - Значение параметра `sSourceUrlParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function copy_url_server(sDestUrlParam: string, sSourceUrlParam: string): unknown;

  function copy_url_temp_suffix(destUrl: string, sourceUrl: string): void;

  function core_decrypt(core: string, qtiPath: string, qtiText: string, learning: LearningDocument): string;

  /**
   * Расшифровывает основное содержимое занятия, извлекает цели, взаимодействия и журнал, при необходимости дополняет данными QTI и возвращает объединённый XML.
   *
   * Примечание исходного кода: НАЧАЛО отчёта и журнала занятия
   * @param {string} core - Значение параметра `core`.
   * @param {string} qtiPath - Значение параметра `qtiPath`.
   * @param {string} qtiText - Значение параметра `qtiText`.
   * @param {XmlTopElem} learningDoc - Значение параметра `learningDoc`.
   * @returns {string} Результат выполнения.
   */
  function core_decrypt(core: string, qtiPath: string, qtiText: string, learningDoc: XmlTopElem): string;

  /**
   * Создает сертификаты указанного типа для всех участников указанного мероприятия.
   * @param {number} eventId - Id мероприятия.
   * @param {number} typeId - Id типа сертификата.
   * @param {EventDocument} eventDocument - Документ мероприятия.
   * @returns {number} Количество созданных сертификатов.
   */
  function create_certificate_to_event(eventId: number, typeId: number, eventDocument: EventDocument): number;

  /**
   * Передаёт создание сертификата заданного типа методу create_certificate мероприятия и возвращает результат.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} evenId - Значение параметра `evenId`.
   * @param {number} typeId - Значение параметра `typeId`.
   * @param {XmlDocument} docEvent - Значение параметра `docEvent`.
   * @param {boolean} bCreateByNotAssist - Значение параметра `bCreateByNotAssist`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function create_certificate_to_event(evenId: number, typeId: number, docEvent: XmlDocument, bCreateByNotAssist: boolean): XmlTopElem;

  /**
   * Создает сертификаты указанного типа для указанного сотрудника.
   * Если указано мероприятие, то сертификат привязывается к указанному мероприятию.
   * @param {number} personId - Id сотрудника.
   * @param {number} typeId - Id типа сертификата.
   * @param {number} eventId - Id мероприятия.
   * @param {CollaboratorDocumentTopElem} personDocument - TopElem сотрудника.
   * @param {CertificateTypeDocumentTopElem} certificateTypeTopElem - TopElem типа сертификата.
   * @param {EventDocument} eventDocument - TopElem мероприятия.
   * @returns {CertificateDocument} Документ созданного сертификата.
   */
  function create_certificate_to_person(personId: number, typeId: number, eventId: number, personDocument: CollaboratorDocument, certificateTypeTopElem: CertificateTypeDocumentTopElem, eventDocument: EventDocument): CertificateDocument;

  /**
   * Создаёт документ сертификата по типу сертификата, заполняет данные сотрудника и мероприятия, сохраняет в базе данных и возвращает его.
   * @param {number} personId - Значение параметра `personId`.
   * @param {number} typeId - Значение параметра `typeId`.
   * @param {number} eventId - Значение параметра `eventId`.
   * @param {XmlTopElem} personDoc - Значение параметра `personDoc`.
   * @param {XmlTopElem} typeDoc - Значение параметра `typeDoc`.
   * @param {XmlTopElem} eventDoc - Значение параметра `eventDoc`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function create_certificate_to_person(personId: number, typeId: number, eventId: number, personDoc: XmlTopElem, typeDoc: XmlTopElem, eventDoc: XmlTopElem): XmlDocument;

  function create_committee_member(objectId: number, objectTopElem: XmlTopElem, personnelCommitteeId: number, strCommitteeMemberType: unknown): unknown;

  /**
   * Создаёт и сохраняет документ члена комитета при отсутствии соответствующей записи, вызывает системное событие и возвращает документ либо null.
   * @param {number} iObjectIDParam - Значение параметра `iObjectIDParam`.
   * @param {XmlTopElem} teObjectParam - Значение параметра `teObjectParam`.
   * @param {number} iPersonnelCommitteeIDParam - Значение параметра `iPersonnelCommitteeIDParam`.
   * @param {string} strCommitteeMemberTypeParam - Значение параметра `strCommitteeMemberTypeParam`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function create_committee_member(iObjectIDParam: number, teObjectParam: XmlTopElem, iPersonnelCommitteeIDParam: number, strCommitteeMemberTypeParam: string): XmlDocument;

  function create_condition_field(fldCondition: unknown, elemName: string): string;

  /**
   * Формирует выражение поля JavaScript для условия фильтра, приводя значения по типу и считывая пользовательские поля.
   * @param {XmlElem<unknown>} fldConditionParam - Значение параметра `fldConditionParam`.
   * @param {string} sElemNameParam - Значение параметра `sElemNameParam`.
   * @returns {string} Результат выполнения.
   */
  function create_condition_field(fldConditionParam: XmlElem<unknown>, sElemNameParam: string): string;

  /**
   * Создание пакета данных для отправки на сервер обмена данными.
   * @param {number} serverId - Id сервера обмена данными, для которого формируется пакет.
   * @param {number} reportId - Id документа событий базы, в который будут записываться отчет.
   * @param {string} packageId - Строковое выражение Id загружаемого пакета.
   * @param {Date} [date] - Дата, начиная с которой нужно загружать данные.
   * @returns {string} Строковое выражение, содержащее путь до сформированного пакета.
   * @example
   * ```
   * var filename = tools.create_data_package(serverId, reportId, packageId, "");
   * var packageUrl = tools.create_data_package(serverId, reportId, packageId, date, serverId);
   * var filename = ServerEval("tools.create_data_package(" + serverId + "," + reportId + "," + packageId + ",\"\")");
   * ```
   */
  function create_data_package(serverId: number, reportId: number, packageId: string, date: Date): string;

  let cur_user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;

  let cur_user: XmlElem<CurUser | null>;

  let cur_user_groups: XmlElem<unknown | null>;

  let cur_user_content_access: XmlElem<unknown | null>;

  let cur_user_admin_configuration: XmlElem<unknown | null>;

  let cur_user_admin_configuration_applications: XmlElem<unknown | null>;

  let cur_user_access_claims: XmlElem<unknown | null>;

  let cur_user_access_blocks: XmlElem<unknown | null>;

  let cur_user_admin_type: XmlElem<string | null>;

  /**
   * Формирует ZIP-пакеты выгрузки данных для выбранных объектов обмена, кеширует список файлов в пользовательских данных, записывает ход выполнения и возвращает сведения о пакетах.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} exchangeSeverIDrParad - Значение параметра `exchangeSeverIDrParad`.
   * @param {number} reportId - Значение параметра `reportId`.
   * @param {string} sPackIDParam - Значение параметра `sPackIDParam`.
   * @param {Date} dateLimit - Значение параметра `dateLimit`.
   * @param {number} iExchangeObjectIDParam - Значение параметра `iExchangeObjectIDParam`.
   * @param {string} sPrimaryKeyUserData - Значение параметра `sPrimaryKeyUserData`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function create_data_package(exchangeSeverIDrParad: number, reportId: number, sPackIDParam: string, dateLimit: Date, iExchangeObjectIDParam: number, sPrimaryKeyUserData: string): unknown;

  /**
   * Создает строку условий для использования в выражении типа eval в коде администратора WebTutor
   * или в серверном коде на основе структуры с описанием условий.
   * @param {ViewConditionBase} conditions - Условия выборки.
   * Структура условий выборки имеет следующий вид:
   * ```
   * <condition MULTIPLE="1"
   *   <field TYPE="string"/
   *   <title TYPE="string"/
   *   <value TYPE="string "/
   *   <type TYPE="string" NOT-NULL="1" DEFAULT="string"/
   *   <option_type TYPE="string" NOT-NULL="1" DEFAULT="eq" FOREIGN-ARRAY="common.all_option_types"/
   *   <is_custom_field TYPE="bool" NULL-FALSE="1" DEFAULT="false"/
   *   <and_or TYPE="string" NOT-NULL="1" DEFAULT="and"/
   *   <is_multiple TYPE="bool" NULL-FALSE="1" DEFAULT="false"/
   *   <value_multiple TYPE="string" MULTIPLE="1"/
   *   <bracket TYPE="string"/
   * </condition>
   * ```
   * @param {string} condition - Строковое выражение, которое может быть использовано,
   * как префикс к формируемой функцией строке.
   * @param {string} name - Название переменной в формируемой строке. По умолчанию – текущий объект `curObject`.
   * @returns {string} Строковое выражение условий для использования в выражении eval.
   */
  function create_filter_javascript(conditions: ViewConditionBase, condition: string, name: string): string;

  /**
   * Формирует логическое выражение фильтра JavaScript из условий, включая скобки, проверки вхождения и заполнители вычисляемых значений.
   * @param {unknown[]} conditions - Значение параметра `conditions`.
   * @param {string} firstCond - Значение параметра `firstCond`.
   * @param {string} elemName - Значение параметра `elemName`.
   * @returns {string} Результат выполнения.
   */
  function create_filter_javascript(conditions: unknown[], firstCond: string, elemName: string): string;

  /**
   * Создает строку условий для использования в выражении where в запросе XQuery на основе
   * структуры с описанием условий.
   * @param {ViewConditionBase} conditions - Условия выборки.
   * Структура условий выборки имеет следующий вид:
   * ```
   * <condition MULTIPLE="1"
   *   <field TYPE="string"/
   *   <title TYPE="string"/
   *   <value TYPE="string "/
   *   <type TYPE="string" NOT-NULL="1" DEFAULT="string"/
   *   <option_type TYPE="string" NOT-NULL="1" DEFAULT="eq" FOREIGN-ARRAY="common.all_option_types"/
   *   <is_custom_field TYPE="bool" NULL-FALSE="1" DEFAULT="false"/
   *   <and_or TYPE="string" NOT-NULL="1" DEFAULT="and"/
   *   <is_multiple TYPE="bool" NULL-FALSE="1" DEFAULT="false"/
   *   <value_multiple TYPE="string" MULTIPLE="1"/
   *   <bracket TYPE="string"/
   * </condition>
   * ```
   * @param {string} condition - Строковое выражение, которое может быть использовано,
   * как префикс к формируемой функцией строке.
   * @param {string} name - Название переменной в формируемой строке. По умолчанию elem. ($elem).
   * @returns {string} Строковое выражение условий для использования в выражении where в запросе XQuery.
   */
  function create_filter_xquery(conditions: ViewConditionBase, condition: string, name: string): string;

  /**
   * Формирует строку условия XQuery из условий фильтра, учитывая пользовательские поля, множественные значения и оптимизацию ресурсоёмкого сопоставления.
   * @param {unknown[]} conditions - Значение параметра `conditions`.
   * @param {string} cond - Значение параметра `cond`.
   * @param {string} elemName - Значение параметра `elemName`.
   * @returns {string} Результат выполнения.
   */
  function create_filter_xquery(conditions: unknown[], cond: string, elemName: string): string;

  /**
   * Формирует данные формы выгрузки обмена для объектов и шаблонов пакета, записывает XML по заданному URL, добавляет записи отчёта и возвращает число обработанных объектов.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} pakUrl - Значение параметра `pakUrl`.
   * @param {number} reportId - Значение параметра `reportId`.
   * @param {string} paramSource - Значение параметра `paramSource`.
   * @param {string} sPackIDParam - Значение параметра `sPackIDParam`.
   * @param {string} sModeParam - Значение параметра `sModeParam`.
   * @param {boolean} bStdParam - Значение параметра `bStdParam`.
   * @returns {number} Результат выполнения.
   */
  function create_inst_package(pakUrl: string, reportId: number, paramSource: string, sPackIDParam: string, sModeParam: string, bStdParam: boolean): number;

  function create_list_package(resultUrl: string, fldPackage: unknown): {
    error: 0 | 1;
    error_text: string;
    counter: number;
  };

  /**
   * Создаёт отчёт о действии, упаковывает объекты и файлы в ZIP с desc.xml по итоговому URL, обновляет состояние завершения отчёта и возвращает объект результата.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sResultUrlParam - Значение параметра `sResultUrlParam`.
   * @param {XmlElem<unknown>} fldPackage - Значение параметра `fldPackage`.
   * @returns {Object} Результат выполнения.
   */
  function create_list_package(sResultUrlParam: string, fldPackage: XmlElem<unknown>): Object;

  /**
   * Создает новое неотправленное уведомление.
   * В теле уведомления (шаблоне уведомления) обращение к первому параметру идет через objDocID, к документу,
   * открываемому автоматически при вызове функции по отправке уведомления, objDoc. ObjDoc- это TopElem документа.
   * Обращение ко второму параметру идет через objDocSecID, к документу, открываемому автоматически при
   * вызове функции по отправке уведомления objDocSec. ObjDocSec- это TopElem документа.
   * Если документ отрыт ранее, то для ускорения работы функции отправки уведомления, можно передать открытый
   * документ в функцию, что позволит избежать его повторного открытия.
   * Для этого вместо tools.create_notification(code, id1, '', id2)
   * вызывается функция, куда передаются дополнительные параметры
   * tools.create_notification(code, id1, '', id2, TopElem1,TopElem2).
   * @param {string} notificationIdentifier - Код типа уведомления, которое будет отправляться.
   * Если параметр пустой ('') или равен '0', то в параметр
   * additionalParams необходимо передавать структуру, из которой будут заполняться типы получателей (recipients),
   * тип отправителя (sender_selector), тема сообщения (subject), тип текста в теле сообщения (body_type),
   * тело сообщения (body) и адрес отправителя (sender_email). Если oTypeParam - это реальный код типа уведомления,
   * то типы получателей (recipients), тип отправителя (sender_selector) и адрес отправителя (sender_email) будут
   * браться из указанного объекта. А тема сообщения (subject), тип текста в теле сообщения (body_type),
   * тело сообщения (body) из шаблона уведомления, прикрепленного к типу сообщения с указанным в параметре кодом.
   * Если в существующих в системе типах уведомления не найдено типа уведомления с указанным кодом,
   * то уведомление не формируется и функция возвратит значение false.
   * В определенных случаях в качестве данного аргумента вместо кода типа уведомления
   * может быть указан Id открытого документа типа уведомления.
   * @param {string} objectId - Id первого объекта (обыкновенно, по данным первого документа формируется, в частности,
   * перечень сотрудников, которым нужно отправить сообщение. В теле уведомления (шаблоне уведомления) обращение
   * к этому параметру идет через objDoc (например, <%=objDoc.name%>) и objDocID.
   * @param {T} text - Аргумент, к которому можно обращаться в теле шаблона уведомления как к Text (<%=Text%>).
   * @param {number} secondObjectId - Id второго объекта, который прикрепляется к уведомлению.
   * В теле уведомления (шаблоне уведомления) обращение этому параметру
   * идет через objDocSec (например, <%=objDocSec.name%>) и objDocSecID.
   * @param {XmlTopElem} objectTopElem - TopElem карточки первого объекта, определяемого аргументом objectId.
   * @param {XmlTopElem} secondObjectTopElem - TopElem карточки второго объекта,
   * определяемого аргументом secondObjectId.
   * @param {ICreateNotificationAdditionalParams} additionalParams - Структура, позволяющая создать собственное
   * (пользовательское) уведомление "на лету".
   * Из нее берутся данные о типах получателей (recipients), тип отправителя (sender_selector),
   * тема сообщения (subject), тип текста в теле сообщения (body_type), тело сообщения (body)
   * и адрес отправителя (sender_email).
   * @returns {boolean} Результат отправки уведомления.
   */
  function create_notification<T>(notificationIdentifier: number | string, objectId: number | string, text?: T, secondObjectId?: number, objectTopElem?: XmlTopElem, secondObjectTopElem?: XmlTopElem, additionalParams?: ICreateNotificationAdditionalParams): boolean;

  /**
   * Формирует активное уведомление по типу или шаблону, определяет получателей, планирует отправку и создаёт сценарии чат-бота, возвращая признак успеха.
   * @param {string} oTypeParam - Значение параметра `oTypeParam`.
   * @param {number} iObjectIDParam - Значение параметра `iObjectIDParam`.
   * @param {string} sTextParam - Значение параметра `sTextParam`.
   * @param {number} iSecondObjectIDParam - Значение параметра `iSecondObjectIDParam`.
   * @param {Object} oObjectParam - Значение параметра `oObjectParam`.
   * @param {Object} oSecondObjectParam - Значение параметра `oSecondObjectParam`.
   * @param {XmlTopElem} teSourceParam - Значение параметра `teSourceParam`.
   * @param {XmlDocument} docChatboScriptObject - Значение параметра `docChatboScriptObject`.
   * @param {XmlTopElem} teNotificationSource - Значение параметра `teNotificationSource`.
   * @param {unknown[]} arrTeNotificationTemplateSource - Значение параметра `arrTeNotificationTemplateSource`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function create_notification(oTypeParam: string, iObjectIDParam: number, sTextParam: string, iSecondObjectIDParam: number, oObjectParam: Object, oSecondObjectParam: Object, teSourceParam: XmlTopElem, docChatboScriptObject: XmlDocument, teNotificationSource: XmlTopElem, arrTeNotificationTemplateSource: unknown[]): unknown;

  /**
   * Сохраняет версию объекта каталога, для которого проставлен флаг сохранения версий в администраторе.
   * При этом создается объект в каталоге «Версии объектов» (Системное администрирование – Версии объектов).
   * @param {XmlDocument} XmlDocument - Документ объекта, версия которого сохраняется.
   * @returns {void} Сохраняет версию объекта каталога. Возвращаемое значение отсутствует.
   */
  function create_object_version(XmlDocument: XmlDocument): void;

  /**
   * Сохраняет снимок версии документа в базе данных, если его каталог разрешает резервное копирование и содержимое изменилось.
   * @param {XmlDocument} oDocParam - Значение параметра `oDocParam`.
   */
  function create_object_version(oDocParam: XmlDocument): void;

  /**
   * Создает новый пакет по указанному адресу.
   * @param {string} packagePath - Путь в файловой системе с указанием имени файла, в который нужно сохранить пакет.
   * @param {number} reportId - Id события базы, в которое будет записываться отчет о процессе генерации.
   * @param {T} paramSource - Элемент XML, содержащий поля process_custom_templates и process_access_roles
   * (process_custom_templates (булево) – в пакет добавляются выбранные настраиваемые поля;
   * process_access_roles (булево) - в пакет добавляются роли доступа).
   * @param {string} packId - Строковое выражение Id формируемого пакета.
   * @returns {number} Количество объектов, добавленных в пакет.
   * @example
   * ```
   * counter = tools.create_package(_file_url, _report_id, Ps, _cur_id);
   * counter = tools.create_package(_temp_dir + '/' + _pak_name, _report_id, fldPackage, _cur_id);
   * ```
   */
  function create_package<T extends XmlElem<unknown, unknown>>(packagePath: string, reportId: number, paramSource: T, packId: string): number;

  /**
   * Записывает XML обновления через create_inst_package во временную папку, упаковывает в ZIP, копирует по целевому URL и возвращает счётчик.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} pakUrl - Значение параметра `pakUrl`.
   * @param {number} reportId - Значение параметра `reportId`.
   * @param {string} paramSource - Значение параметра `paramSource`.
   * @param {string} sPackIDParam - Значение параметра `sPackIDParam`.
   * @param {string} sModeParam - Значение параметра `sModeParam`.
   * @param {boolean} bStdParam - Значение параметра `bStdParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function create_package(pakUrl: string, reportId: number, paramSource: string, sPackIDParam: string, sModeParam: string, bStdParam: boolean): unknown;

  /**
   * Создает объект Участник проекта для указанного проекта и указанного сотрудника.
   * Перечень проектов находится в разделе Персонал – Управление проектами - Проекты.
   * @param {number} objectId - Id сотрудника.
   * @param {CollaboratorDocumentTopElem} collaboratorTopElem - TopElem документа Сотрудник.
   * @param {number} projectId - Id проекта.
   * @param {number} bossTypeId - .
   * @param {boolean} withoutAgreement - .
   * @returns {ProjectParticipantDocument} Документ созданного объекта Участник проекта.
   */
  function create_project_participant(objectId: number, collaboratorTopElem: CollaboratorDocumentTopElem, projectId: number, bossTypeId: number, withoutAgreement: boolean): ProjectParticipantDocument;

  /**
   * Создаёт и сохраняет участника проекта при его отсутствии, может установить статус согласования, уведомляет руководителей проекта, вызывает системное событие и возвращает документ.
   * @param {number} iObjectIDParam - Значение параметра `iObjectIDParam`.
   * @param {XmlTopElem} teObjectParam - Значение параметра `teObjectParam`.
   * @param {number} iProjectIDParam - Значение параметра `iProjectIDParam`.
   * @param {number} iBossTypeIDParam - Значение параметра `iBossTypeIDParam`.
   * @param {boolean} bWithoutAgreement - Значение параметра `bWithoutAgreement`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function create_project_participant(iObjectIDParam: number, teObjectParam: XmlTopElem, iProjectIDParam: number, iBossTypeIDParam: number, bWithoutAgreement: boolean): XmlDocument;

  function create_search_condition(searchString: string, catalogName: string, arrSearchFieldNames: unknown[], foreignFieldName: string, searchType: string): unknown;

  /**
   * Формирует строку поискового условия XQuery из текста поиска, полей каталога и режима полнотекстового поиска или doc-contains.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sSearchString - Значение параметра `sSearchString`.
   * @param {string} sCatalogName - Значение параметра `sCatalogName`.
   * @param {unknown[]} arrSearchFieldNames - Значение параметра `arrSearchFieldNames`.
   * @param {string} sForeignFieldName - Значение параметра `sForeignFieldName`.
   * @param {string} sSearchTypeParam - Значение параметра `sSearchTypeParam`.
   * @returns {string} Результат выполнения.
   */
  function create_search_condition(sSearchString: string, sCatalogName: string, arrSearchFieldNames: unknown[], sForeignFieldName: string, sSearchTypeParam: string): string;

  /**
   * Отправляет письмо с параметрами, заданными в аргументах.
   * Если первый параметр равен '0' или пустому значению, то производится отправка по адресам,
   * заданным в структуре recipients объекта teSourceParam.
   * Если первый параметр – это код или идентификатор реального типа уведомления,
   * то в список адресатов будут добавлены адреса, вычисленные по правилам этого объекта (типа уведомления).
   * Тема (subject) и тело (body) письма будут взяты из аргументов, переданных в функцию,
   * а не из параметров шаблона уведомления.
   * @param {string} type - Код типа уведомления, которое будет связано с формируемым шаблоном уведомления.
   * @param {number} objectId - Id первого прикрепленного документа,
   * относительного которого будет идти поиск получателей.
   * В шаблоне уведомления обращение к этому параметру идет через objDocID.
   * @param {string} [subject] - Строка, в которой содержится тема сообщения.
   * @param {string} [body] - Строка, в которой содержится тело сообщения.
   * @param {XmlTopElem} [topElem] - TopElem карточки первого объекта, определяемого аргументом <iObjectIDParam>.
   * @param {XmlDocument} [teSourceParam] - Структура, из которой будут заполняться:
   * - типы получателей (recipients);
   * - тип отправителя (sender_selector);
   * - тип текста в теле сообщения (body_type);
   * - адрес отправителя (sender_email).
   * @param {number} [objectSecondId] - Id документа, который передается,
   * как второй прикрепленный к уведомлению документ.
   * В шаблоне уведомления обращение этому параметру идет через objDocSecID.
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно, или false в противном случае.
   * @example tools.create_template_notification(0, personId, dlgDoc.TopElem.subject, dlgDoc.TopElem.body, null, dlgDoc.TopElem, secondId);
   */
  function create_template_notification(type: string, objectId: number, subject?: string, body?: string, topElem?: XmlTopElem, teSourceParam?: XmlDocument, objectSecondId?: number): ReturnType<typeof create_notification>;

  /**
   * Формирует пользовательский шаблон уведомления с темой, текстом и получателями, затем передаёт его создание и отправку в create_notification.
   * @param {string} sTypeParam - Значение параметра `sTypeParam`.
   * @param {number} iObjectIDParam - Значение параметра `iObjectIDParam`.
   * @param {string} sSubjectParam - Значение параметра `sSubjectParam`.
   * @param {string} sBodyParam - Значение параметра `sBodyParam`.
   * @param {Object} oObjectParam - Значение параметра `oObjectParam`.
   * @param {XmlTopElem} teSourceParam - Значение параметра `teSourceParam`.
   * @param {number} iObjectSecondIDParam - Значение параметра `iObjectSecondIDParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function create_template_notification(sTypeParam: string, iObjectIDParam: number, sSubjectParam: string, sBodyParam: string, oObjectParam: Object, teSourceParam: XmlTopElem, iObjectSecondIDParam: number): unknown;

  /**
   * Формирует строку для использования в запросе XQuery на основе указанных параметров.
   * @param {string} catalog - Строка с названием каталога без «s» на конце,
   * по которому будет происходить поиск в запросе.
   * @param {strign} xqueryQual - Строка с текстом условий поиска, который используется в конструкции where.
   * Они будут добавлены к условиям заданными в других параметрах функции (filter_xquery и ft_filter).
   * @param {strign} filterXQuery - Строка с текстом других условий поиска,
   * который используется в конструкции where. Они будут добавлены к условиям заданными
   * в других параметрах функции (xquery_qual и ft_filter).
   * При отсутствии данного аргумента необходимо добавить значение null.
   * @param {strign} ftFilter - Строка с текстом для полнотекстового поиска в документе,
   * который используется в конструкции where (с использованием оператора doc-contains).
   * Они будут добавлены к условиям, заданным в других параметрах функции (xquery_qual и filter_xquery).
   * @param {strign} order - Строка названий полей разделенных символами «запятая» (,),
   * по которым будет происходить сортировка в запросе (используются в конструкции order by).
   * @param {strign} orderDirection - Строка, указывающая направление сортировки
   * (значение по умолчанию равно '+' (сортировка по возрастанию (asсending)).
   * Для задания сортировки по убыванию (descending) значение параметра указывается равным
   * '-', 'descending' или 'desc'.
   * @param {boolean} [isHier=false] - Аргумент, определяющий необходимость создания иерархии в результате запроса
   * (true – в строку запроса будет добавлен фрагмент $elem/Hier()).
   * @param {string} foreignField - Если в запросе будет использоваться полнотекстовый поиск
   * (параметр ft_filter), то можно указать ключевое поле поиска, отличное от id.
   * Значение по умолчанию равно 'id'.
   * @param {T} oColumnsParam - Колонки (например, из файла view_types.xml) для возврата результатов запроса.
   * @param {"global_settings" | "indexed"} [searchType="global_settings"] - .
   * @returns {string} Строка для использования в запросе XQuery на основе указанных параметров.
   */
  function create_xquery<T extends XmElem<unknown, unknown>>(catalog: string, xqueryQual: string, filterXQuery: string, ftFilter: string, order: string, orderDirection: string, isHier?: boolean, foreignField?: string, oColumnsParam?: T, searchType?: "global_settings" | "indexed"): unknown;

  /**
   * Формирует строку XQuery для каталога с учётом фильтров, иерархии, сортировки и запрошенных возвращаемых полей.
   * @param {Object} catalogName - Значение параметра `catalogName`.
   * @param {string} xqueryQual - Значение параметра `xqueryQual`.
   * @param {string} filterXquery - Значение параметра `filterXquery`.
   * @param {string} ftFilter - Значение параметра `ftFilter`.
   * @param {string} orderStr - Значение параметра `orderStr`.
   * @param {string} orderDir - Значение параметра `orderDir`.
   * @param {boolean} isHier - Значение параметра `isHier`.
   * @param {string} foreignField - Значение параметра `foreignField`.
   * @param {unknown[] | Object} oColumnsParam - Значение параметра `oColumnsParam`.
   * @param {string} sSearchTypeParam - Значение параметра `sSearchTypeParam`.
   * @returns {string} Результат выполнения.
   */
  function create_xquery(catalogName: Object, xqueryQual: string, filterXquery: string, ftFilter: string, orderStr: string, orderDir: string, isHier: boolean, foreignField: string, oColumnsParam: unknown[] | Object, sSearchTypeParam: string): string;

  function crypto_obj_init(): unknown;

  /**
   * Лениво создаёт объект сборки Crypto, кеширует его в tools.crypto_obj и возвращает его либо null при ошибке загрузки.
   * @returns {Object | null} Результат выполнения.
   */
  function crypto_obj_init(): Object | null;

  function cur_user_is_admin(): boolean;

  /**
   * Возвращает true, если текущий пользователь не найден или его роль доступа — admin, иначе false.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function cur_user_is_admin(): unknown;

  function data_type(v: unknown, detailed: unknown): unknown;

  /**
   * Возвращает описательное имя типа значения, при необходимости с уточняющим суффиксом формы, узла или примитивного типа.
   * @param {unknown} v - Значение параметра `v`.
   * @param {boolean} detailed - Значение параметра `detailed`.
   * @returns {string} Результат выполнения.
   */
  function data_type(v: unknown, detailed: boolean): string;

  /**
   * Преобразует дату в строку, разделенную символом _ (нижнее подчеркивание).
   * Например, дата 01.02.1999 12:34:15 будет преобразована в 1999_02_01_12_34.
   * @param {Date} [date=Date()] - Дата, подлежащая преобразованию.
   * Если атрибут не указан, то будут преобразовываться текущие дата и время.
   * @returns {string} Дата, преобразованная в строку. Результат дейсттвия функции.
   */
  function date_str(date?: Date): string;

  /**
   * Возвращает заданную или текущую дату в формате года, месяца, дня, часа и минуты, разделённых символами подчёркивания.
   * @param {Date} curDate - Значение параметра `curDate`.
   * @returns {string} Результат выполнения.
   */
  function date_str(curDate: Date): string;

  /**
   * Возвращает результат выполнения функции eval, определяемый формулой evalstr и
   * другими атрибутами вызова функции.
   * @param {Date} [src1=Date()] - Поле-источник для передачи даты в формулу evalstr.
   * Если в качестве данного аргумента будет передана пустая строка (''),
   * то результатом будут текущие дата и время.
   * @param {Date} [src2=Date()] - Второе поле-источник для передачи даты в формулу evalstr.
   * Если в качестве данного аргумента будет передана пустая строка (''),
   * то результатом будут текущие дата и время.
   * @param {string} evalstr - Строковое выражение формулы, выполняемой в функции eval.
   * @param {string} param1 - Атрибут, в который можно записать промежуточное значение,
   * а потом вызвать его в другом месте с помощью выражения @1.
   * В составе данного атрибута можно также использовать источники src1 и src2 в форме выражений #1 и #2,
   * соответственно.
   * @param {string} param2 - Атрибут, в который можно записать промежуточное значение,
   * а потом вызвать его в другом месте с помощью выражения @2.
   * В составе данного атрибута можно использовать источники src1 и src2 в форме выражений #1 и #2,
   * соответственно.
   * @param {string} param3 - Атрибут, в который можно записать промежуточное значение,
   * а потом вызвать его в другом месте с помощью выражения @3.
   * В составе данного атрибута можно использовать источники src1 и src2 в форме выражений #1 и #2,
   * соответственно.
   * @returns {string} Результат выполнения формулы, заданной атрибутом evalstr.
   */
  function DateFunc(src1: Date, src2: Date, evalstr: string, param1: string, param2: string, param3: string): string;

  /**
   * Фактически отключена и сразу возвращает пустую строку; закомментированный код вычислял бы формулы дат с источниками и промежуточными параметрами.
   * @param {string} src1 - Значение параметра `src1`.
   * @param {string} src2 - Значение параметра `src2`.
   * @param {string} evalstr - Значение параметра `evalstr`.
   * @param {string} param1 - Значение параметра `param1`.
   * @param {string} param2 - Значение параметра `param2`.
   * @param {string} param3 - Значение параметра `param3`.
   * @returns {string} Результат выполнения.
   */
  function DateFunc(src1: string, src2: string, evalstr: string, param1: string, param2: string, param3: string): string;

  function decode_course_folder(code: string): string;

  /**
   * Удаляет участника (сотрудника) из мероприятия.
   * @param {number} personId - Id сотрудника, удаляемого из мероприятия.
   * @param {number} eventId - Id мероприятия, из которого удаляется сотрудник.
   * @param {EventDocument} [event] - Документ мероприятия, из которого удаляется сотрудник.
   * @param {boolean} [isSave=true] - Аргумент, определяющий необходимость сохранения карточки
   * мероприятия после удаления сотрудника (true – сохранять карточку мероприятия, false – не сохранять).
   * @returns {EventDocument} Документ мероприятия, из которого удален сотрудник.
   */
  function del_person_from_event(personId: number, eventId: number, event?: EventDocument, isSave?: boolean): EventDocument;

  /**
   * Передаёт удаление сотрудника из мероприятия методу DeletePersonFromEventXmd библиотеки libEducation и возвращает документ мероприятия.
   * @param {number} personId - Значение параметра `personId`.
   * @param {number} eventId - Значение параметра `eventId`.
   * @param {XmlDocument} docEvent - Значение параметра `docEvent`.
   * @param {boolean} flagSave - Значение параметра `flagSave`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function del_person_from_event(personId: number, eventId: number, docEvent: XmlDocument, flagSave: boolean): XmlDocument;

  function del_system_event_handlers_from_obj(systemEventId: number, systemEventHandlerId: number): unknown;

  /**
   * Удаляет обработчик из кешированной коллекции обработчиков системных событий, обновляет кеш на 86400 секунд и возвращает true.
   * @param {number} iSystemEventId - Значение параметра `iSystemEventId`.
   * @param {number} iSystemEventHandlerId - Значение параметра `iSystemEventHandlerId`.
   * @returns {boolean} Результат выполнения.
   */
  function del_system_event_handlers_from_obj(iSystemEventId: number, iSystemEventHandlerId: number): boolean;

  function delete_directory_server(dir: string): boolean | never;

  /**
   * Удаляет каталог x-local или temp на сервере и возвращает true при успехе либо false, если путь не является каталогом.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sDirParam - Значение параметра `sDirParam`.
   * @returns {boolean} Результат выполнения.
   */
  function delete_directory_server(sDirParam: string): boolean;

  function delete_poll_result(pollResult: Object, pollTopElem: XmlTopElem): unknown;

  /**
   * Удаляет связанные файловые ресурсы, затем документ результата опроса из базы данных, возвращая true.
   * @param {Object} oPollResultParam - Значение параметра `oPollResultParam`.
   * @param {XmlTopElem} tePollParam - Значение параметра `tePollParam`.
   * @returns {boolean} Результат выполнения.
   */
  function delete_poll_result(oPollResultParam: Object, tePollParam: XmlTopElem): boolean;

  /**
   * Отменяет транзакцию. Используется в модуле геймификация.
   * @param {number} transactionId - Id транзакции, которую нужно отменить.
   * @returns {number} Id транзакции, отменяющей указанную транзакцию.
   * @example tools.delete_transaction(Ps.Doc.DocID);
   */
  function delete_transaction(transactionId: number): number;

  function delete_trash_url_server(url: string): void | never;

  /**
   * Удаляет заданный файл в x-local://trash/ через DeleteUrl; при вызове с клиента передаёт выполнение серверу.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sUrlParam - Значение параметра `sUrlParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function delete_trash_url_server(sUrlParam: string): unknown;

  /**
   * Прообразовывает содержание строки для сохранения в теге <desc> ... </desc>.
   * Предназначено для преобразования тегов и ссылок на файлы в описании.
   * @param {string} desc - Строка для преобразования.
   * @param {string} tempDir - Строчное выражение пути до папки с файлами, указанными в теге.
   * @returns {string} Преобразованная строка. Результат действия функции.
   */
  function desc_cleanup(desc: string, tempDir?: string): string;

  /**
   * Очищает HTML-описания, переписывая относительные пути изображений и удаляя потерявшие связь теги составных вложений; возвращает итоговый HTML.
   * @param {string} desc - Значение параметра `desc`.
   * @param {string} tempDir - Значение параметра `tempDir`.
   * @returns {string} Результат выполнения.
   */
  function desc_cleanup(desc: string, tempDir: string): string;

  /**
   * Выполняет проверку электронно-цифровой подписи (ЭЦП) и оригинального текста, переданных как аргументы функции.
   * Проверяется, что текст и цифровая подпись текста соответствуют друг другу
   * или, иначе говоря, что указанный текст действительно подписан данной подписью.
   * Проверка происходит с помощью криптопровайдера указанного в общих настройках.
   * @param {string} source - Оригинальный текст, подписанный ЭЦП.
   * @param {string} signature - Строковое выражение электронно-цифровой подписи.
   * @returns {DigitalVerifyResult} Объект.
   */
  function DigitalVerify(source: unknown, signature: string): DigitalVerifyResult;

  /**
   * Проверяет подпись CAPICOM или CAdESCOM для текста, возвращая объект с кодом результата и локализованным сообщением; при ошибках проверки показывает предупреждение.
   * @param {string} strTextParam - Значение параметра `strTextParam`.
   * @param {string} strSignatureParam - Значение параметра `strSignatureParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function DigitalVerify(strTextParam: string, strSignatureParam: string): unknown;

  /**
   * Выполняет проверку цифровой подписи и текста в указанном объекте электронно-цифровой подписи.
   * Проверяется, что текст и цифровая подпись текста соответствуют друг другу.
   * Проверка происходит с помощью криптопровайдера, указанного в общих настройках.
   * @param {string} documentID - Id объекта электронно-цифровой подписи.
   * @returns {DigitalVerifyResult} Объект.
   */
  function DigitalVerifyDoc(documentID: string): DigitalVerifyResult;

  /**
   * Проверяет цифровую подпись документа и возвращает XML-результат с идентификатором статуса и сообщением, регистрируя и кешируя форму результата.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iDocIDParam - Значение параметра `iDocIDParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function DigitalVerifyDoc(iDocIDParam: number): unknown;

  /**
   * Заполняет данные для отображения списка объектов в блоке в разделах администратора.
   * Используется для отображения настраиваемых отчетов, настраиваемых типов документов,
   * типов заявок и типов отзывов в нужных разделах администратора WebTutor с использованием функции
   * {@link disp_block_filling_by_source}.
   * @param {XmlTopElem} source - TopElem объекта, который нужно отобразить в блоке.
   * @param {MsDispBlockBase} dispBlock - XML-структура.
   * Если в качестве атрибута disp_block передать пустую XML-структуру (<disp_block> </disp_block>),
   * то список объектов будет удален из описания соответствующего раздела.
   * @returns {void} Возвращаемое значение отсутствует.
   */
  function disp_block_filling(source: XmlTopElem, dispBlock: MsDispBlockBase): void;

  /**
   * Перезагружает документ блоков объектов отображения, заполняет его из исходного элемента и блока, затем сохраняет документ.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @param {XmlTopElem} dispBlock - Значение параметра `dispBlock`.
   */
  function disp_block_filling(source: XmlTopElem, dispBlock: XmlTopElem): void;

  /**
   * Заполняет данные для отображения списка объектов в блоке в разделах администратора по указанным источникам.
   * Используется для отображения настраиваемых отчетов, настраиваемых типов документов,
   * типов заявок и типов отзывов в нужных разделах администратора WebTutor.
   * @param {XmlTopElem} source - TopElem объекта, который нужно отобразить в блоке.
   * @param {MSDispBlockBase} dispBlock - XML-структура.
   * Если в качестве атрибута disp_block передать пустую XML-структуру (<disp_block> </disp_block>),
   * то список объектов будет удален из описания соответствующего раздела.
   * @param {IAccessBlockType} dispObjectBlocks - Существующие блоки (источники) для отображения.
   * @param {number} sourceId - Id объекта, который нужно отобразить в блоке.
   * @returns {void} Возвращаемое значение отсутствует.
   */
  function disp_block_filling_by_source(source: XmlTopElem, dispBlock: MsDispBlockBase, dispObjectBlocks: AccessBlockBase, sourceId: number): void;

  /**
   * Обновляет списки объектов блоков отображения из исходного элемента, копируя его в выбранный блок и удаляя из остальных блоков.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @param {XmlTopElem} dispBlock - Значение параметра `dispBlock`.
   * @param {XmlTopElem} dispObjectBlocks - Значение параметра `dispObjectBlocks`.
   * @param {number} sourceId - Значение параметра `sourceId`.
   */
  function disp_block_filling_by_source(source: XmlTopElem, dispBlock: XmlTopElem, dispObjectBlocks: XmlTopElem, sourceId: number): void;

  /**
   * Получение данных с сервера обмена данными.
   * @param {number} serverId - Id сервера обмена данными, с которого необходимо получить данные.
   * @returns {DownloadDataResponse} В случае успеха выполнения функции возвращаются значения oRes.error = 0
   * и пустая строка в поле oRes.error_text.
   * В случае возникновения ошибки возвращаются значения oRes.error = 500 и сведения об ошибке в поле oRes.error_text.
   */
  function download_data(serverId: number): {
    error: 0 | 1;
    error_text: string;
    data_file_url: string;
    report_id: number;
  };

  /**
   * Загружает пакет данных, сохраняет и импортирует его через package_process, обновляет дату последней загрузки сервера обмена и возвращает состояние.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} exchangeSeverIDrParad - Значение параметра `exchangeSeverIDrParad`.
   * @returns {Object} Результат выполнения.
   */
  function download_data(exchangeSeverIDrParad: number): Object;

  function download_package(exchangeSeverId: number, packageId: number, tempUrl: string, fldPackageValId: number, updateObjects: boolean): {
    error: 0 | 1;
    error_text: string;
    data_file_url: string;
    application_id: number;
  };

  /**
   * Загружает или копирует файл пакета, размещает его в хранилище базы данных, записывает его состояние, запускает обработку пакета и возвращает состояние с URL файла.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} exchangeServerId - Значение параметра `exchangeServerId`.
   * @param {number} iPackageID - Значение параметра `iPackageID`.
   * @param {string} sTempUrlParam - Значение параметра `sTempUrlParam`.
   * @param {XmlElem<unknown>} fldPackageValidParam - Значение параметра `fldPackageValidParam`.
   * @param {boolean} bUpdateObjects - Значение параметра `bUpdateObjects`.
   * @returns {Object} Результат выполнения.
   */
  function download_package(exchangeServerId: number, iPackageID: number, sTempUrlParam: string, fldPackageValidParam: XmlElem<unknown>, bUpdateObjects: boolean): Object;

  /**
   * Загружает указанные пакеты с сервера обмена данными.
   * @param {number} exchangeServerId - Id сервера обмена данными, с которого загружаются пакеты.
   * Если Id сервера обмена данными не указан, считается, что сервер локальный.
   * @param {number} [packageId] - Id пакета, который нужно загрузить.
   * @param {string} [filePath] - Путь до файла с пакетом.
   * @returns {DownloadDataResponse} Результирующий объект oRes имеет три свойства:
   * - код oRes.error;
   * - URL файла данных oRes.data_file_url;
   * - и сведения об ошибке oRes.error_text.
   */
  function download_package_list(exchangeServerId: number, packageId?: number, filePath?: string): {
    error: 0 | 1;
    error_text: string;
    data_file_url: string;
    report_id: number;
  };

  /**
   * Загружает список пакетов с сервера обмена, создаёт и обрабатывает документы загружаемых пакетов для новых элементов и обновляет дату последней загрузки сервера.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} exchangeServerId - Значение параметра `exchangeServerId`.
   * @returns {number} Результат выполнения.
   */
  function download_package_list(exchangeServerId: number): number;

  function drop_cache_code_library(codeLibraryIds: unknown): unknown;

  /**
   * Очищает кеш форм каждой выбранной библиотеки кода JavaScript, возвращая количество или объединённое сообщение об ошибке.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {unknown[]} codeLibraryIDs - Значение параметра `codeLibraryIDs`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function drop_cache_code_library(codeLibraryIDs: unknown[]): unknown;

  function drop_doc_type(typeId: number, checkContent: boolean): 1 | -1;

  /**
   * Удаляет все объекты типа документа и файлы его форм XMD; возвращает 1 при успехе, 0 при наличии содержимого или -1.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} docTypeID - Значение параметра `docTypeID`.
   * @param {boolean} checkContent - Значение параметра `checkContent`.
   * @returns {number} Результат выполнения.
   */
  function drop_doc_type(docTypeID: number, checkContent: boolean): number;

  /**
   * Включает или выключает журнал веб-запросов.
   * @param {boolean} isEnable - Включить (true) / выключить (false) журнал веб-запросов.
   */
  function enable_log_web_request(isEnable: boolean): void;

  function encode_course_folder(code: string): string;

  /**
   * Выполняет функцию eval указанного в параметрах функции файла.
   * @param {string} url - Путь до файла.
   * @param {number | XmlDocument | XmlTopElem} documentId - Целое число, объект XmlDocument или TopElem.
   * Id объекта. Если аргумент указан, то будет открыт объект по указанному Id
   * (если данный объект еще не был открыт) и он будет доступен для исполняемого кода файла.
   * В этом аргументе может быть также указан объект XmlDocument или TopElem открытого объекта.
   * @param {string} fileName - Строка с названием файла.
   * Если аргумент указан, то результат выполнения функции eval будет сохранен
   * в папку trash/temp/ с названием, указанным в данном аргументе.
   * @returns {string} Строка, полученная после выполнения функции eval.
   */
  function eval_code_page_url(url: string, documentId: number | XmlDocument | XmlTopElem, fileName: string): string;

  /**
   * Устарела по соображениям безопасности и теперь возвращает пустую строку; оставшийся код выполнял бы код страницы по URL с возможным кешированием результата.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} url - Значение параметра `url`.
   * @param {number} docId - Значение параметра `docId`.
   * @param {number} rndId - Значение параметра `rndId`.
   * @returns {string} Результат выполнения.
   */
  function eval_code_page_url(url: string, docId: number, rndId: number): string;

  /**
   * Заменяет в строке выражения:
   * {@link ProcessExecute}, {@link alert}, {@link eval}, {@link ShellExecute}, {@link Eval}.
   * Это позволяет использовать полученную в результате выполнения функции строку в выражении eval
   * и таким образом частично обезопасить выполнение кода от атак с помощью внедрения SQL-кода (SQL injection).
   * @param {string} evalString - Строка для преобразования.
   * @returns {string} Строка без выражений:
   * {@link ProcessExecute}, {@link alert}, {@link eval}, {@link ShellExecute}, {@link Eval}.
   */
  function evalReplace(evalString: string): string;

  function event_finish(eventId: number, eventDocument?: EventDocument, screen?: typeof Screen): EventDocument;

  /**
   * Устарела; закрывает мероприятие, создаёт отсутствующие результаты, активирует обучение по курсам, обновляет планы обучения, сохраняет, вызывает событие завершения и возвращает документ мероприятия.
   * @param {number} eventId - Значение параметра `eventId`.
   * @param {XmlTopElem} eventDoc - Значение параметра `eventDoc`.
   * @param {Object} oScreenParam - Значение параметра `oScreenParam`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function event_finish(eventId: number, eventDoc: XmlTopElem, oScreenParam: Object): XmlDocument;

  function event_start(eventId: number, event: EventDocument, screen: Object): EventDocument;

  /**
   * Устарела; активирует мероприятие, запускает обучение по курсам и программы плана обучения, сохраняет и вызывает событие начала, возвращая документ мероприятия.
   * @param {number} eventId - Значение параметра `eventId`.
   * @param {XmlTopElem} eventDoc - Значение параметра `eventDoc`.
   * @param {Object} oScreenParam - Значение параметра `oScreenParam`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function event_start(eventId: number, eventDoc: XmlTopElem, oScreenParam: Object): XmlDocument;

  /**
   * Добавляет свойства (properties) объекта-источника к свойствам объекта-получателя.
   * @param {object} target - Объект-получатель.
   * @param {object} source - Объект-источник.
   * @returns {object} Объект-получатель с добавлением свойств объекта-источника.
   */
  function extend_object(target: Object, source: Object): Object;

  /**
   * Копирует все свойства исходного объекта в объект-получатель, перезаписывая существующие значения, и возвращает получатель.
   * @param {Object} oObjectRecipient - Значение параметра `oObjectRecipient`.
   * @param {Object} oObjectSource - Значение параметра `oObjectSource`.
   * @returns {Object} Результат выполнения.
   */
  function extend_object(oObjectRecipient: Object, oObjectSource: Object): Object;

  /**
   * Возвращает объект, составленный из списка полей указанного объекта-источника.
   * Список полей передаётся как аргумент функции.
   * @param {object | XmlTopElem} fldSPXML - Ссылка на объект или его TopElem.
   * @param {string} fieldList - Строка из названий полей объекта-источника,
   * которые нужно получить (названия полей в строке разделяются символом «точка с запятой» (;)).
   * @param {boolean} [noValidation=true] - Аргумент, определяющий необходимость выполнения проверки в списке полей,
   * преданных в аргумент fieldList, наличия ведущих или заключительных знаков
   * (true – выполнять проверку, false – не проверять).
   * @returns {object} Объект со значениями выбранных полей
   * (название свойства – название поля в исходном объекте-источнике,
   * значение свойства – значение поля в исходном объекте-источнике).
   */
  function extract_bfields_by_list(fldSPXML: object | XmlTopElem, fieldList: string, noValidation: boolean): object;

  /**
   * Извлекает из документа поля по путям, разделённым точками с запятой, во вложенный объект; возвращает null, если исходный документ некорректен.
   * @param {XmlElem<unknown>} fldSPXML - Значение параметра `fldSPXML`.
   * @param {string} sFieldList - Значение параметра `sFieldList`.
   * @param {boolean} bNoValidation - Значение параметра `bNoValidation`.
   * @returns {Object | null} Результат выполнения.
   */
  function extract_bfields_by_list(fldSPXML: XmlElem<unknown>, sFieldList: string, bNoValidation: boolean): Object | null;

  function file_source_clear_old_file(fileSourceId: number, oldFileUrl: string, curFileUrl: string): unknown;

  /**
   * Запрашивает удаление устаревшего файла у библиотеки источника файлов или встроенного обработчика и возвращает логический результат.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iFileSourceIdParam - Значение параметра `iFileSourceIdParam`.
   * @param {string} sOldFileUrlParam - Значение параметра `sOldFileUrlParam`.
   * @param {string} sCurFileUrlParam - Значение параметра `sCurFileUrlParam`.
   * @returns {boolean} Результат выполнения.
   */
  function file_source_clear_old_file(iFileSourceIdParam: number, sOldFileUrlParam: string, sCurFileUrlParam: string): boolean;

  function file_source_download_file(fileSourceId: number, uId: string, request: Object, response: Object): unknown;

  /**
   * Передаёт файл потоком в ответ через библиотеку источника файлов или встроенный обработчик; ничего не возвращает.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iFileSourceIdParam - Значение параметра `iFileSourceIdParam`.
   * @param {string} sUidPARAM - Значение параметра `sUidPARAM`.
   * @param {Object} oRequestPARAM - Значение параметра `oRequestPARAM`.
   * @param {Object} oResponsePARAM - Значение параметра `oResponsePARAM`.
   */
  function file_source_download_file(iFileSourceIdParam: number, sUidPARAM: string, oRequestPARAM: Object, oResponsePARAM: Object): void;

  function file_source_get_file_to_save_url(fileSourceId: number, resourceId: number, uid: string): string;

  function file_source_get_file_url(fileSourceId: number, uId: string): unknown;

  /**
   * Возвращает URL файла для заданного uid из библиотеки настроенного источника файлов или встроенного обработчика.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iFileSourceIdParam - Значение параметра `iFileSourceIdParam`.
   * @param {string} sUidPARAM - Значение параметра `sUidPARAM`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function file_source_get_file_url(iFileSourceIdParam: number, sUidPARAM: string): unknown;

  function file_source_get_files_list(fileSourceId: number): unknown;

  /**
   * Возвращает список файлов, предоставленный библиотекой настроенного источника файлов или встроенным обработчиком.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iFileSourceIdParam - Значение параметра `iFileSourceIdParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function file_source_get_files_list(iFileSourceIdParam: number): unknown;

  let current_user_boss_type: Variant<BossTypeDocumentTopElem | null>;

  function file_source_get_temp_file_to_save_url(fileSourceId: number, resourceId: number, uId: string): unknown;

  /**
   * Возвращает временный URL сохранения файла, сформированный библиотекой источника файлов или встроенным обработчиком run_code.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iFileSourceIdParam - Значение параметра `iFileSourceIdParam`.
   * @param {number} iResourceIdParam - Значение параметра `iResourceIdParam`.
   * @param {string} sUidPARAM - Значение параметра `sUidPARAM`.
   * @returns {string} Результат выполнения.
   */
  function file_source_get_temp_file_to_save_url(iFileSourceIdParam: number, iResourceIdParam: number, sUidPARAM: string): string;

  function file_source_get_upload_file_url(fileSourceId: number, fileName: string): unknown;

  /**
   * Возвращает URL файла для загрузки, полученный из библиотеки кода источника файлов или его встроенного обработчика run_code.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iFileSourceIdParam - Значение параметра `iFileSourceIdParam`.
   * @param {string} sFileNameParam - Значение параметра `sFileNameParam`.
   * @returns {string} Результат выполнения.
   */
  function file_source_get_upload_file_url(iFileSourceIdParam: number, sFileNameParam: string): string;

  function file_source_upload_file(fileSourceId: number, fileUrl: string, tempFileUrl: string): unknown;

  /**
   * Загружает файл через библиотеку настроенного источника файлов или встроенный обработчик и возвращает полученный временный URL.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iFileSourceIdParam - Значение параметра `iFileSourceIdParam`.
   * @param {string} sFileUrlParam - Значение параметра `sFileUrlParam`.
   * @param {string} sTempFileUrlParam - Значение параметра `sTempFileUrlParam`.
   * @returns {string} Результат выполнения.
   */
  function file_source_upload_file(iFileSourceIdParam: number, sFileUrlParam: string, sTempFileUrlParam: string): string;

  /**
   * Возвращает URL без изменений для путей x-local или file, иначе добавляет к нему префикс x-local://wtv/.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sUrl - Значение параметра `sUrl`.
   * @returns {string} Результат выполнения.
   */
  function file_source_url(sUrl: string): string;

  /**
   * Проверяет, существует ли файл по указанному пути.
   * @param {string} filePath - Строка с путем до файла.
   * @returns {boolean} Возвращает значение true, если файл существует, или false в противном случае.
   */
  function file_url_exists(filePath: string): boolean;

  function file_url_exists_server(filePath: string): boolean | never;

  /**
   * При необходимости передаёт выполнение серверу, затем перед проверкой существования убеждается, что путь относится к x-local.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sFilePathParam - Значение параметра `sFilePathParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function file_url_exists_server(sFilePathParam: string): unknown;

  /**
   * Заполняет структуру annals результатами теста в XML-формате.
   * @param {XmlElem<AnnalsObjectsBase>} annals - Структура для заполнения.
   * @param {string} fileQtiPath - Путь до файла со структурой теста в формате qti.
   * @param {string} qtiStructire - Структура теста в формате qti.
   * @param {XmlElem<AnnalsObjectsBase>} annalsSource - Тест-источник.
   * @param {boolean} [noSendCorrectAnswer=true] - Аргумент, указывающий, что не нужно записывать правильный ответ
   * в результирующую структуру (true – не нужно записывать правильный ответ,
   * false – нужно записывать правильный ответ).
   */
  function fill_annals_text(annals: XmlElem<AnnalsObjectsBase["objects"]>, fileQtiPath: string, qtiStructire: string, annalsSource: XmlElem<AnnalsObjectsBase["objects"]>, noSendCorrectAnswer: boolean): void;

  /**
   * Заполняет объекты журнала разделами QTI, состояниями вопросов, временными данными и баллами, удаляя объекты, не относящиеся к QTI.
   * @param {XmlElem<unknown>} fldAnnalsObjectsTarget - Значение параметра `fldAnnalsObjectsTarget`.
   * @param {string} sQtiPathParam - Значение параметра `sQtiPathParam`.
   * @param {string} sQtiTextParam - Значение параметра `sQtiTextParam`.
   * @param {XmlElem<unknown>} fldAnnalsObjectsSource - Значение параметра `fldAnnalsObjectsSource`.
   * @param {boolean} bNoSendCorrectAnswerParam - Значение параметра `bNoSendCorrectAnswerParam`.
   */
  function fill_annals_text(fldAnnalsObjectsTarget: XmlElem<unknown>, sQtiPathParam: string, sQtiTextParam: string, fldAnnalsObjectsSource: XmlElem<unknown>, bNoSendCorrectAnswerParam: boolean): void;

  function fill_annals_timings(fldTarget: unknown, fldSource: unknown): void;

  /**
   * Копирует длительность в целевой элемент и вычисляет прошедшие секунды и оставшееся время таймера по задержке исходного элемента.
   * @param {XmlElem<unknown>} fldTarget - Значение параметра `fldTarget`.
   * @param {XmlElem<unknown>} fldSource - Значение параметра `fldSource`.
   */
  function fill_annals_timings(fldTarget: XmlElem<unknown>, fldSource: XmlElem<unknown>): void;

  let sys_db_capability: XmlElem<number | null>;

  let sys_db_capability_ex: XmlElem<number | null>;

  let sys_db_capability_role_tags: XmlElem<number | null>;

  let uid: XmlElem<string | null>;

  let UNI_CAP_BASIC: XmlElem<number | null>;

  let UNI_CAP_BLOB_STREAM: XmlElem<number | null>;

  let UNI_CAP_CLUSTER: XmlElem<number | null>;

  let UNI_CAP_WORKER_ROLE: XmlElem<number | null>;

  let UNI_CAP_WEB_ROLE: XmlElem<number | null>;

  let UNI_CAP_IMPORT_DOCS_BATCH: XmlElem<number | null>;

  let UNI_CAP_IMPORT_CATALOG_BATCH: XmlElem<number | null>;

  let UNI_CAP_IMPORT_BLOBS_BATCH: XmlElem<number | null>;

  let UNI_CAP_IMPORT_LOCAL_BLOBS_BATCH: XmlElem<number | null>;

  let UNI_CAP_EXPORT_DOCS_BATCH: XmlElem<number | null>;

  let UNI_CAP_EXPORT_CATALOG_BATCH: XmlElem<number | null>;

  let UNI_CAP_EXPORT_BLOBS_BATCH: XmlElem<number | null>;

  let UNI_CAP_EXPORT_LOCAL_BLOBS_BATCH: XmlElem<number | null>;

  let UNI_CAP_FT_INDEX: XmlElem<number | null>;

  let UNI_CAP_MULTI_TENANCY: XmlElem<number | null>;

  let UNI_CAP_AZURE: XmlElem<number | null>;

  let UNI_CAP_MSSQL: XmlElem<number | null>;

  let UNI_CAP_ORACLE: XmlElem<number | null>;

  let UNI_CAP_DATA_STORAGE: XmlElem<number | null>;

  let UNI_CAP_USER_CACHE: XmlElem<number | null>;

  let UNI_CAP_DISTR_CACHE: XmlElem<number | null>;

  let UNI_CAP_SYNC_CATALOG: XmlElem<number | null>;

  let UNI_CAP_TEMP_OBJECTS_IN_MEMORY: XmlElem<number | null>;

  let UNI_CAP_FT_INDEX_BLOBS: XmlElem<number | null>;

  let UNI_CAP_PD: XmlElem<number | null>;

  let UNI_CAP_AGENT_MANAGER: XmlElem<number | null>;

  let UNI_CAP_INVENTORY: XmlElem<number | null>;

  let UNI_CAP_ALL_ROLE_TAG: XmlElem<number | null>;

  let UNI_CAP_AGENT_ROLE_TAG: XmlElem<number | null>;

  let UNI_CAP_NOTIFICATION_ROLE_TAG: XmlElem<number | null>;

  let UNI_CAP_SCRIPT_QUEUE_ROLE_TAG: XmlElem<number | null>;

  let UNI_CAP_WEBSOCKET_ROLE_TAG: XmlElem<number | null>;

  let UNI_CAP_WEBONLY_ROLE_TAG: XmlElem<number | null>;

  let UNI_CAP_VCLASS_RECORDER_ROLE_TAG: XmlElem<number | null>;

  let UNI_CAP_MEDIA_HANDLER_ROLE_TAG: XmlElem<number | null>;

  let UNI_CAP_NEURAL_HANDLER_ROLE_TAG: XmlElem<number | null>;

  let spxml_unibridge: XmlElem<{
    Object: {
      provider: SPXMLUnibridgeProvider;
    }
  }>;

  let spxml_unibridge_stage: XmlElem<number>;

  let UNI_STAGE_INIT: XmlElem<number | null>;

  let UNI_STAGE_COMPLETE: XmlElem<number | null>;

  let doc_types_catalog_hashes: XmlMultiElem<ToolsDocTypesCatalogHash | null>;

  let doc_types_catalog_registered: XmlElem<boolean>;

  /**
   * Заполняет структуру полей (из объекта или из каталога) для использования в формах выбора условий.
   * Применяется в диалогах построения фильтров, настраиваемых отчетах и т.д.
   * @param {XmlElem<FieldNamesBase>} fieldNames - Структура полей.
   * @param {XmlElem<unknown, unknown>} form - Форма источника (объект или каталог), из которой нужно заполнить данные.
   * @param {boolean} [isCatalog=true] - Аргумент, определяющий тип источника (объект или каталог)
   * (true – в качестве источника используется каталог, false – в качестве источника используется объект).
   * @param {XmlElem<unknown, unknown>} [evalPath] - XML-элемент в структуре field_names внутри элемента, который нужно заполнять.
   * Задается в случае, если нужно заполнить один из дочерних элементов field_names,
   * вложенных в элемент первого уровня field_names.
   * @param {string} [prefix] - Префикс, который добавляется к названию полей в источнике form
   * при заполнении структуры field_names. Атрибут передается, если нужно, например,
   * заполнить значения по ключу данными типа multiple из дочернего элемента источника form.
   */
  function fill_field_names(fieldNames: XmlElem<FieldNamesBase>, form: XmlElem<unknown, unknown>, isCatalog?: boolean, evalPath?: XmlElem<unknown, unknown>, prefix?: string): void;

  /**
   * Формирует плоский список имён и заголовков полей из структуры формы, включая пользовательские поля и метаданные связанных каталогов.
   * @param {unknown[]} fieldNames - Значение параметра `fieldNames`.
   * @param {XmlTopElem} form - Значение параметра `form`.
   * @param {boolean} iscatalog - Значение параметра `iscatalog`.
   * @param {string} evalpath - Значение параметра `evalpath`.
   * @param {string} pretitle - Значение параметра `pretitle`.
   * @param {number} customfieldstypeid - Значение параметра `customfieldstypeid`.
   */
  function fill_field_names(fieldNames: unknown[], form: XmlTopElem, iscatalog: boolean, evalpath: string, pretitle: string, customfieldstypeid: number): void;

  function filling_learning_parts(topElem: unknown): unknown;

  /**
   * Копирует изменённые элементы разделов обучения в их документы learning_part, сохраняет их, очищает данные занятия и сбрасывает флаг изменения.
   * @param {XmlTopElem} topElem - Значение параметра `topElem`.
   */
  function filling_learning_parts(topElem: XmlTopElem): void;

  /**
   * Проверяется возможность создания настраиваемого документа указанного типа,
   * после чего можно будет создать XMD-форму документа и XMD-форму каталога.
   * При вызове функции из интерфейса администратора будут выводиться всплывающие сообщения об ошибках.
   * @param {DocTypeDocumentTopElem} topElem - TopElem типа настраиваемого документа.
   * @param {number} documentId - Id типа настраиваемого документа.
   * @returns {boolean} Возвращает значение true, если можно создать настраиваемый
   * документ указанного типа, или false - в противном случае.
   */
  function generate_doc_type_xmds(topElem: DocTypeDocumentTopElem, documentId: number): boolean;

  /**
   * Проверяет поля типа документа, генерирует и записывает его формы XMD, при изменениях устанавливает флаг перезапуска и возвращает признак успеха.
   * @param {XmlTopElem} docTopelem - Значение параметра `docTopelem`.
   * @param {number} docId - Значение параметра `docId`.
   * @returns {boolean} Результат выполнения.
   */
  function generate_doc_type_xmds(docTopelem: XmlTopElem, docId: number): boolean;

  function generate_qr(text: unknown, options: unknown): unknown;

  /**
   * На клиенте передаёт выполнение серверу; на сервере генерирует PNG с QR-кодом через WebUtils и возвращает URL временного файла либо null.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} text - Значение параметра `text`.
   * @param {Object} options - Значение параметра `options`.
   * @returns {string | null} Результат выполнения.
   */
  function generate_qr(text: string, options: Object): string | null;

  function get_access_role_application_access_level(fldAccessRole: unknown, applicationId: number): unknown;

  /**
   * Ищет приложение по идентификатору или коду в функциональных блоках роли доступа и возвращает его уровень доступа либо null.
   * @param {XmlElem<unknown>} fldAccessRoleParam - Значение параметра `fldAccessRoleParam`.
   * @param {number} iApplicationIDParam - Значение параметра `iApplicationIDParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_access_role_application_access_level(fldAccessRoleParam: XmlElem<unknown>, iApplicationIDParam: number): unknown;

  function get_access_role_claims(update: Date): unknown;

  /**
   * Возвращает утверждения роли, разобранные из утверждений IDM текущего пользователя, кешируя их на клиенте, либо null для локальных или отсутствующих утверждений.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {boolean} dUpdateParam - Значение параметра `dUpdateParam`.
   * @returns {unknown[] | null} Результат выполнения.
   */
  function get_access_role_claims(dUpdateParam: boolean): unknown[] | null;

  /**
   * Создает строку XML для помещения агента с указанным id в очередь на выполнение.
   * Получается строка следующего вида:
   * ```
   * <queue_command>
   *   <type>run_agent</type>
   *   <agent_id TYPE="integer">0x4F71ACFB4EF22716</agent_id>
   *   <element_id/><elems_id_str/>
   *    <dDateParam>30.05.2115 16:44:07</dDateParam>
   *   <tenancy_name>dbo</tenancy_name>
   * </queue_command>
   * ```
   * Примечание – Проверка наличия агента с указанным id в системе не производится.
   * @param {number} agentId - Id агента. Значение данного аргумента не проверяется.
   * @param {number} [sElementIDParam] - Id объекта, над которым запускается агента (например, в списке).
   * Значение данного аргумента не проверяется.
   * При отсутствии данного аргумента указывается пустая строка ('').
   * @param {string} [elems] - Id объектов, разделенных символом «точка с запятой» (;),
   * над которыми запускается агент (например, в списке).
   * Значение данного аргумента не проверяется.
   * При отсутствии данного аргумента указывается пустая строка ('').
   * @param {Date} [date] - Дата запуска агента, по умолчанию текущая дата.
   * Значение данного аргумента не проверяется. При отсутствии данного аргумента указывается значение null.
   * @param {string} [tenancyName] - Код экземпляра системы (tenant) в multitenant системе,
   * в котором нужно запустить агент.
   * Значение данного аргумента не проверяется.
   * При отсутствии данного аргумента указывается пустая строка ('').
   * @returns {string} Строка XML для помещения агента в очередь на выполнение. Результат действия функции.
   * @example
   * ```
   * tools.get_agent_command_queue_xml(5724546796725872406, "", "", null, "");
   * tools.get_agent_command_queue_xml(5724546796725872406, 5724546796725872406, "", Date(), "dbo");
   * ```
   */
  function get_agent_command_queue_xml(agentId: number, sElementIDParam?: number, elems?: string, date?: Date, tenancyName?: string): string;

  /**
   * Формирует и возвращает XML-команду постановки запуска заданного агента для переданных элементов в очередь.
   * @param {number} iServerAgentIDParam - Значение параметра `iServerAgentIDParam`.
   * @param {string} sElementIDParam - Значение параметра `sElementIDParam`.
   * @param {string} sElemsIDParam - Значение параметра `sElemsIDParam`.
   * @param {Date} dDateParam - Значение параметра `dDateParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_agent_command_queue_xml(iServerAgentIDParam: number, sElementIDParam: string, sElemsIDParam: string, dDateParam: Date): unknown;

  /**
   * Возвращает массив каталожных записей подчинённых подразделений
   * (как непосредственных, так и дочерних) для указанного сотрудника.
   * Сотрудник может быть руководителем любого типа.
   * @param {number} managerId - Id сотрудника, для которого нужно найти подчиненные ему подразделения.
   * @returns {CollaboratorCatalogDocumentTopElem[]} Массив каталожных записей подчинённых подразделений.
   */
  function get_all_subs_by_func_manager_id(managerId: number): CollaboratorCatalogDocumentTopElem[];

  /**
   * Собирает подразделения, подчинённые организациям и должностям руководителя, возвращая объединённый массив записей подразделений.
   * @param {number} managerId - Значение параметра `managerId`.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_all_subs_by_func_manager_id(managerId: number): unknown[];

  /**
   * Представляет результаты завершенного теста в XML-формате.
   * @param {string} testResults - Результаты завершенного теста для дешифровки.
   * @returns {string} Строковое выражение XML-структуры, содержащей результаты тестирования в теге annals.
   * @example
   * ```
   * tod = StrSimpleDecrypt(_core);
   * tod = Trim(tod);
   * annals = tools.get_annals_from_core(tod);
   * sReport = tools.get_annals_from_core(Trim(StrSimpleDecrypt(oSourceParam.core_lesson)));
   * ```
   */
  function get_annals_from_core(testResults: string): string;

  /**
   * Декодирует основной текст с префиксом ws_ с помощью кодов подстановки и возвращает XML-фрагмент журнала либо пустой журнал при его отсутствии.
   * @param {string} sSourceParam - Значение параметра `sSourceParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_annals_from_core(sSourceParam: string): unknown;

  /**
   * Заполняет структуру annals результатами теста в XML-формате.
   * @param {XmlElem<AnnalsObjectsBase>} annals - Структура для заполнения.
   * @param {string} qtiPath - Путь до файла со структурой теста в формате qti.
   * @param {string} qtiText - Структура теста в формате qti.
   * @param {AssessmentDocumentTopElem} learning - TopElem карточки теста.
   * @param {XmlTopElem} annalsTarget - TopElem открытого документа структуры для заполнения.
   * @returns {string} Строковое выражение заполненной XML-структуры с результатами тестирования, без отступов.
   */
  function get_annals_text(annals: XmlElem<AnnalsObjectsBase>, qtiPath: string, qtiText: string, learning: AssessmentDocumentTopElem, annalsTarget: XmlTopElem): string;

  /**
   * Устарела; разбирает XML журнала, заполняет текст данными QTI и возвращает итоговую XML-строку или пустую строку.
   * @param {string} annals - Значение параметра `annals`.
   * @param {string} qtiPath - Значение параметра `qtiPath`.
   * @param {string} qtiText - Значение параметра `qtiText`.
   * @param {XmlTopElem} learningDoc - Значение параметра `learningDoc`.
   * @param {Object} oAnnalsTarget - Значение параметра `oAnnalsTarget`.
   * @returns {string} Результат выполнения.
   */
  function get_annals_text(annals: string, qtiPath: string, qtiText: string, learningDoc: XmlTopElem, oAnnalsTarget: Object): string;

  /**
   * Возвращает строку в формате XML без отступов, но со стандартным XML-заголовком на основе XML-структуры,
   * переданной в функцию. Например, если передан объект XmlElem:
   * ```
   * <elem_count>
   *   Новый элемент
   *   <count TYPE='integer'>5</count>
   *   <description>Описание нового элемента</description>
   * </elem_count>
   * ```
   * то будет возвращено:
   * ```
   * <?xml version="1.0"encoding="utf-8"?>
   * <elem_count>Новый элемент<count TYPE='integer'>5</count>
   *   <description>Описание нового элемента</description>
   * </elem_count>
   * ```
   * Примечание – Передаваемый в данную функцию аргумент должен строго соответствовать
   * требованиям к объекту XmlElem.
   * В противном случае функция может выдать ошибку: «Unknown method: GetXml()».
   * Соответствие аргумента структуре annals (результатам тестирования) данная функция не проверяет.
   * @param {XmlElem<AnnalsObjectsBase>} annals - Данные для преобразования.
   * @returns {string} Строка в формате XML со стандартным заголовком. Результат действия функции.
   */
  function get_annals_text_from_annals(annals: XmlElem<AnnalsObjectsBase["objects"]>): string;

  /**
   * Возвращает сериализованное поле журнала с заголовком XML либо пустую строку, если поле равно null.
   * @param {XmlElem<unknown>} fldAnnalsParam - Значение параметра `fldAnnalsParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_annals_text_from_annals(fldAnnalsParam: XmlElem<unknown>): unknown;

  function get_cache_code_librarys(codeLibraryId: number): unknown;

  /**
   * Возвращает кешированную библиотеку кода по идентификатору или коду, загружая и кешируя её при отсутствии и выбрасывая исключение при неизвестном коде.
   * @param {number} iCodeLibraryId - Значение параметра `iCodeLibraryId`.
   * @returns {XmlTopElem | null} Результат выполнения.
   */
  function get_cache_code_librarys(iCodeLibraryId: number): XmlTopElem | null;

  function get_catalog_limits(): string;

  function get_client_data(login: string, password: string): unknown;

  /**
   * Отправляет аутентифицированный HTTP POST на about.websoft.ru и возвращает тело ответа либо null после предупреждения об ошибке.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sLogin - Значение параметра `sLogin`.
   * @param {string} sPassword - Значение параметра `sPassword`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_client_data(sLogin: string, sPassword: string): unknown;

  function get_code_library(library: Object): unknown;

  /**
   * Возвращает переданный корневой элемент библиотеки кода либо определяет его и загружает в кеш при отсутствии.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number | string | XmlTopElem} oLibraryParam - Значение параметра `oLibraryParam`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function get_code_library(oLibraryParam: number | string | XmlTopElem): XmlTopElem;

  function get_code_library_error_message(libRes: Object, env: Object): unknown;

  /**
   * Преобразует объект результата библиотеки кода или строку ошибки в локализованное сообщение об ошибке, включая имя параметра для известных кодов.
   * @param {Object} oLibResParam - Значение параметра `oLibResParam`.
   * @param {Object} oEnvParam - Значение параметра `oEnvParam`.
   * @returns {string} Результат выполнения.
   */
  function get_code_library_error_message(oLibResParam: Object, oEnvParam: Object): string;

  function get_code_library_result_object(libRes: Object, env: Object): unknown;

  /**
   * Возвращает новый объект результата библиотеки кода с нулевым кодом ошибки, пустым текстом ошибки и пустыми объектами данных и пагинации.
   * @param {Object} oLibResParam - Значение параметра `oLibResParam`.
   * @param {Object} oEnvParam - Значение параметра `oEnvParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_code_library_result_object(oLibResParam: Object, oEnvParam: Object): unknown;

  function get_content_access(personId: number, personTopElem: XmlTopElem, appOnly: boolean): unknown;

  /**
   * Объединяет права связей с объектами и профилей сотрудника и групп в массив доступа к каталогам; на клиенте передаёт выполнение серверу.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iPersonID - Значение параметра `iPersonID`.
   * @param {XmlTopElem} tePerson - Значение параметра `tePerson`.
   * @param {boolean} bAppOnly - Значение параметра `bAppOnly`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_content_access(iPersonID: number, tePerson: XmlTopElem, bAppOnly: boolean): unknown;

  /**
   * Возвращает массив руководителей (руководителей по должности) центра затрат указанного сотрудника.
   * Если указанные руководители не найдены, то возвращается пустой массив.
   * @param {number} personId - Id сотрудника, для которого производится поиск руководителей центра затрат.
   * @param {CollaboratorDocumentTopElem} [personDocumentTopElem] - TopElem сотрудника, для которого производится поиск руководителей центра затрат.
   * @returns {CollaboratorCatalogDocumentTopElem[]} Массив каталожных записей сотрудников, являющихся руководителями центра затрат указанного сотрудника.
   */
  function get_cost_center_boss_by_person_id(personId: number, personDocumentTopElem: CollaboratorDocumentTopElem): CollaboratorCatalogDocumentTopElem[];

  /**
   * Находит центр затрат сотрудника и возвращает идентификаторы сотрудников — руководителей этого центра затрат либо пустой массив.
   * @param {number} personId - Значение параметра `personId`.
   * @param {XmlTopElem} personDoc - Значение параметра `personDoc`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_cost_center_boss_by_person_id(personId: number, personDoc: XmlTopElem): unknown;

  /**
   * Функция возвращает Id центра затрат сотрудника, указанного в качестве аргумента.
   * Если такой центр затрат не найден, то функция возвращает Id центра затрат,
   * указанного в общих настройках.
   * @param {number} personId - Id сотрудника, для которого производится поиск центра затрат.
   * @param {CollaboratorDocumentTopElem} [personDocumentTopElem] - TopElem сотрудника,
   * для которого производится поиск центра затрат.
   * @returns {number} Id центра затрат указанного сотрудника.
   * Если центр затрат не найден, то возвращает Id центра затрат, указанного в общих настройках.
   */
  function get_cost_center_id_by_person_id(personId: number, personDocumentTopElem?: CollaboratorDocumentTopElem): number;

  /**
   * Определяет центр затрат сотрудника по самому сотруднику или родительским должностям согласно приоритету, используя глобальное значение по умолчанию как запасное.
   * @param {number} personId - Значение параметра `personId`.
   * @param {XmlTopElem} personDoc - Значение параметра `personDoc`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_cost_center_id_by_person_id(personId: number, personDoc: XmlTopElem): unknown;

  function get_cur_user(): CurUser | null;

  /**
   * Возвращает корневой элемент текущего пользователя из контекста аутентификации, сеанса или кешированного состояния, загружая или обновляя его при необходимости.
   * @returns {XmlTopElem | null} Результат выполнения.
   */
  function get_cur_user(): XmlTopElem | null;

  function get_cur_user_access_blocks(): unknown;

  /**
   * Формирует и кеширует блоки доступа из утверждений LDS текущего пользователя, возвращая блоки с правами чтения, записи и удаления.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_cur_user_access_blocks(): unknown;

  function get_cur_user_admin_configuration(): unknown;

  /**
   * Возвращает кешированную конфигурацию администратора текущего пользователя, предварительно загружая и кешируя её при отсутствии.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_cur_user_admin_configuration(): unknown;

  function get_cur_user_admin_configuration_applications(): unknown;

  /**
   * Возвращает кешированные приложения конфигурации администратора текущего пользователя, предварительно обновляя конфигурацию; при недоступности возвращает пустой массив.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_cur_user_admin_configuration_applications(): unknown[];

  function get_cur_user_application_access_level(applicationId: number): unknown;

  /**
   * Возвращает уровень доступа текущего пользователя к приложению, используя логику приложения или роли доступа в зависимости от типа администратора.
   * @param {number} iApplicationIDParam - Значение параметра `iApplicationIDParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_cur_user_application_access_level(iApplicationIDParam: number): unknown;

  function get_cur_user_content_access(): unknown;

  /**
   * Возвращает кешированный доступ к содержимому для текущего пользователя, предварительно вычисляя и кешируя его, если он ещё не загружен.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_cur_user_content_access(): unknown;

  function get_cur_user_groups(): GroupCollaboratorCatalogDocumentTopElem[];

  /**
   * Возвращает группы текущего пользователя, запрашивая членство в группах на сервере и обновляя кешированный список при его отсутствии.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_cur_user_groups(): unknown;

  function get_cur_user_id(): number | null;

  function get_current_user_operations(): number[];

  /**
   * Возвращает операции, назначенные кешированному типу руководителя текущего пользователя, при необходимости загружая и кешируя этот тип.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_current_user_operations(): unknown[];

  function get_custom_document_data_form_url(catalogName: string): string;

  /**
   * Возвращает XMS-форму (экранную форму) для каталога (указанного в качестве аргумента),
   * создаваемого из типа настраиваемого документа.
   * Если для данного типа документа создан свой пользовательский интерфейс,
   * то документ откроется с использованием этого интерфейса.
   * В противном случае документ откроется с использованием формы по умолчанию.
   * @param {string} catalogName - Название каталога, создаваемого из типа настраиваемого документа.
   * @returns {Screen} XMS-форма в формате SPXML-SCREEN для каталога, создаваемого из типа настраиваемого документа.
   */
  function get_custom_document_form(catalogName: string): typeof Screen;

  /**
   * Возвращает путь формы каталога документов, используя настроенную форму пользовательского шаблона либо стандартную форму документа.
   * @param {string} catalogName - Значение параметра `catalogName`.
   * @returns {string} Результат выполнения.
   */
  function get_custom_document_form(catalogName: string): string;

  /**
   * Функция возвращает набор заполненных настраиваемых полей для данного каталога и данного документа.
   * Если указан только первый параметр, функция вернет список полей без значений.
   * @param {string} catalog - Строка с названием каталога без "s" на конце.
   * @param {number} [topId] - Id документа, для которого нужно вернуть набор полей.
   * @param {XmlTopElem} source - TopElem документа, для которого нужно вернуть набор полей.
   * @returns {XmlElem<CustomElemsBase>} Объект с набором заполненных настраиваемых полей
   * для данного каталога и данного документа.
   * @example
   * ```
   * fldCustomTemplate = tools.get_custom_template("collaborator", null, null);
   * // возвращает строку, содержащую отформатированные данные массива XML-элементов
   * str = ExportElemsToStr(fldCustomTemplate);
   * fldCustomElems = tools.get_custom_template("request_type", filRequestType.id);
   * custom_fields = tools.get_custom_template("development_plan", Int(curObjectID), curPA).fields;
   * arrSheets = tools.get_custom_template(TopElem.Name, TopElem.Doc.DocID, TopElem).sheets;
   * ```
   */
  function get_custom_template(catalog: string, topId?: number, source?: XmlTopElem): XmlElem<CustomElemsBase>;

  /**
   * Определяет пользовательский шаблон по каталогу и исходному корневому элементу, объединяя поля, и возвращает поле либо null.
   * @param {string} catalog - Значение параметра `catalog`.
   * @param {number} topId - Значение параметра `topId`.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @returns {XmlElem<unknown> | null} Результат выполнения.
   */
  function get_custom_template(catalog: string, topId: number, source: XmlTopElem): XmlElem<unknown> | null;

  function get_custom_ui_form(customAdminTemplate: Object): string;

  let xhttp_ini: XmlElem<{ name: string, value: string }[] | null>;

  /**
   * Возвращает URL формы пользовательского шаблона администратора, используя существующий URL кода или записывая код во временный файл либо файл формы.
   * @param {Object} oCustomAdminTemplateParam - Значение параметра `oCustomAdminTemplateParam`.
   * @returns {string} Результат выполнения.
   */
  function get_custom_ui_form(oCustomAdminTemplateParam: Object): string;

  function get_data_answers(fldDataItem: unknown): {
    ident: string;
    value: string;
  }[];

  /**
   * Разбирает последнюю попытку элемента данных в массив объектов ответов с полями ident и value.
   * @param {XmlElem<unknown>} fldDataItem - Значение параметра `fldDataItem`.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_data_answers(fldDataItem: XmlElem<unknown>): unknown[];

  /**
   * Возвращает Id различных объектов системы по умолчанию.
   * @param {string} catalogName - Строковое значение типа объекта.
   * @param {string} type - Строковое значение подтипа объекта.
   * @param {XmlTopElem} topElem - TopElem объекта.
   * @returns {number} Id заданного объекта системы по умолчанию.
   * @see {@link get_default_notification_system_id}
   * @see {@link get_default_webinar_system_id}.
   */
  function get_default_object_id(catalogName: "notification_system" | "webinar_system" | "boss_type" | "contact_type" | "contact_result" | "custom_web_template" | "learning_storage", type?: string, topElem?: XmlTopElem): number;

  /**
   * Возвращает жёстко заданные идентификаторы объектов каталога по умолчанию по каталогу и типу, динамически находя системы вебинаров, либо null для неизвестных значений.
   * @param {string} sCatalogNameParam - Значение параметра `sCatalogNameParam`.
   * @param {string} sTypeParam - Значение параметра `sTypeParam`.
   * @param {XmlTopElem} teObjectParam - Значение параметра `teObjectParam`.
   * @returns {number | null} Результат выполнения.
   */
  function get_default_object_id(sCatalogNameParam: string, sTypeParam: string, teObjectParam: XmlTopElem): number | null;

  function get_default_proctoring_system_id(): unknown;

  /**
   * Возвращает жёстко заданный идентификатор системы прокторинга по умолчанию 6729767194009546182.
   * @returns {number} Результат выполнения.
   */
  function get_default_proctoring_system_id(): number;

  /**
   * Возвращает массив Id сотрудников, состоящий из непосредственных подчиненных указанного сотрудника.
   * @param {number} userId - Id сотрудника, для которого идет поиск подчиненных.
   * @returns {CollaboratorCatalogDocumentTopElem[]} Массив каталожных записей сотрудников,
   * состоящий из непосредственных подчиненных указанного сотрудника.
   */
  function get_direct_sub_person_ids(userId: number): CollaboratorCatalogDocumentTopElem[];

  /**
   * Собирает идентификаторы непосредственных подчинённых по функциям руководителя, должностям и организациям через XQuery, возвращая массив идентификаторов.
   * @param {number} iUserId - Значение параметра `iUserId`.
   * @returns {string} Результат выполнения.
   */
  function get_direct_sub_person_ids(iUserId: number): string;

  /**
   * Возвращает название объекта из поля, которое его содержит.
   * Например, для курса (course) это значение поля name, а для теста (test) это поле title.
   * Отличие от функции {@link get_object_name_field_value} в том,
   * что если поле содержит путь до элемента через “.”, то поле с названием будет найдено по этому пути,
   * а функция {@link get_object_name_field_value} будет ошибка.
   * Смотрите также {@link get_object_name_field_value}.
   * @param {XmlTopElem} topElem - TopElem объекта, название которого нужно показать.
   * @returns {string} Строка с названием объекта.
   */
  function get_disp_name_value(topElem: XmlTopElem): string;

  /**
   * Возвращает отображаемое имя объекта, вычисляя пути с точечной нотацией; при ошибке возвращает 'N/A'.
   * @param {XmlTopElem} oObjectParam - Значение параметра `oObjectParam`.
   * @returns {string} Результат выполнения.
   */
  function get_disp_name_value(oObjectParam: XmlTopElem): string;

  /**
   * Возвращает объект документа, соответствующего указанным условиям, или null, если документ не найден.
   * @param {string} catalog - Название каталога для поиска объекта (без s на конце).
   * @param {string | string[]} key - Строка или Массив.
   * Критерии поиска.
   * Если передается строка, то это название поля в каталоге, по которому происходит поиск значения,
   * заданного oKeyValueParam.
   * Если это массив свойств, то будет создано условие поиска,
   * в котором название свойства - название поля в каталоге, по которому происходит поиск значения,
   * а значение - значение указанного свойства.
   * @param {string} value - Значение поля в каталоге, по которому происходит поиск.
   * @returns {T} Документ, удовлетворяющий указанным условиям, или значение null, если такой документ не найден.
   */
  function get_doc_by_key<T = XmlDocument>(catalog: string, key: string | string[], value: string | number): T | null;

  /**
   * Ищет документ каталога по значениям ключей через XQuery и открывает его из корзины или базы данных по умолчанию; возвращает null, если документ не найден.
   * @param {string} sObjectNameParam - Значение параметра `sObjectNameParam`.
   * @param {string | string[]} oKeyParam - Значение параметра `oKeyParam`.
   * @param {string | Object} oKeyValueParam - Значение параметра `oKeyValueParam`.
   * @returns {XmlDocument | null} Результат выполнения.
   */
  function get_doc_by_key(sObjectNameParam: string, oKeyParam: string | string[], oKeyValueParam: string | Object): XmlDocument | null;

  function get_doc_desc(objectTopElem: XmlTopElem): string;

  /**
   * Формирует отображаемое описание из заголовка типа объекта обмена и кода и имени объекта либо отображаемого поля.
   * @param {XmlTopElem} teObjectParam - Значение параметра `teObjectParam`.
   * @returns {string} Результат выполнения.
   */
  function get_doc_desc(teObjectParam: XmlTopElem): string;

  /**
   * На основе указанного типа настраиваемого документа создает объект,
   * содержащий в своих полях строковое описание XMD-формы документа и XMD-формы каталога,
   * а также поле, по которому строится иерархия данного документа.
   * @param {number} docTypeId - Id типа настраиваемого документа.
   * @param {DocTypeDocumentTopElem} docTypeTopElem - TopElem типа настраиваемого документа.
   * @returns {object} Объект, содержащий в поле object_form_str строковое описание XMD-формы документа,
   * в поле catalog_form_str описание XMD-формы каталога, а также поле hier_field,
   * по которому строится иерархия данного документа.
   */
  function get_doc_type_xmds(docTypeId: number, docTypeTopElem: DocTypeDocumentTopElem): object;

  /**
   * Генерирует XML-строки формы XMD и каталога из определения типа документа, возвращая их вместе с полем иерархии.
   * @param {number} iDocTypeIDParam - Значение параметра `iDocTypeIDParam`.
   * @param {XmlTopElem} teDocTypeParam - Значение параметра `teDocTypeParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_doc_type_xmds(iDocTypeIDParam: number, teDocTypeParam: XmlTopElem): unknown;

  /**
   * Возвращает последнюю дату обмена данными (отправки или получения) для указанного сервера обмена данными.
   * @param {ExchangeServerDocumentTopElem} source - Xml элемент, в котором храниться дата (download, upload).
   * @param {Date} lastDate - Дата последней отправки.
   * @returns {Date} Дата обмена данными.
   * @example
   * ```
   * _exa2wx5nutv7 = tools.get_exchange_date(curServerDoc.download, curServerDoc.last_download_date);
   * _exa2wx5nutv7 = tools.get_exchange_date(curServerDoc.upload, curServerDoc.last_upload_date);
   * ```
   */
  function get_exchange_date(source: ExchangeServerDocumentTopElem, lastDate: Date): Date;

  /**
   * Вычисляет дату начала обмена по настроенному типу обмена (последний обмен, недавний период или недавняя дата), при необходимости используя последнюю дату как запасную.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @param {Date} lastDate - Значение параметра `lastDate`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_exchange_date(source: XmlTopElem, lastDate: Date): unknown;

  /**
   * Возвращает массив из каталожных записей экспертов, определенных в значениях карты знаний
   * текущего сотрудника.
   * Значения карты знаний получают из карточки сотрудника и профиля значений карты знаний
   * из должности сотрудника.
   * @param {number} personId - Id сотрудника.
   * @returns {ExpertCatalogDocumentTopElem[]} Массив из каталожных записей экспертов.
   */
  function get_experts_by_person_id(personId: number): ExpertCatalogDocumentTopElem[];

  /**
   * Возвращает экспертов, указанных в разделах знаний сотрудника во всех его профилях знаний.
   * @param {number} personId - Значение параметра `personId`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_experts_by_person_id(personId: number): unknown;

  /**
   * Возвращает название поле из тега TITLE xmd или xml формы для указанного языка.
   * Если в теге есть «const=», то производится поиск значения указанного после «=» среди констант языка.
   * Если в константах значение не найдено, то возвращается, то, что указано после «const=».
   * Если «const=» не указано, то возвращается значение тега TITLE.
   * @param {XmlElem<unknown, unknown>} field - Объект, представляющий собой XML поле, для которого нужно взять название.
   * @param {XmlElem<unknown, unknown>} curLngWeb - Текущий язык, если не указан, берется язык пользовательского интерфейса
   * в администраторе. При вызове на портале параметр обязателен.
   * @returns {string} Название поле из тега TITLE xmd или xml формы для указанного языка.
   */
  function get_field_title(field: XmlElem<unknown, unknown>, curLngWeb?: XmlElem<unknown, unknown>): string;

  /**
   * Возвращает локализованный заголовок поля, разрешая ключи локализации const= через языковой словарь интерфейса.
   * @param {string} field - Значение параметра `field`.
   * @param {string} curLngWeb - Значение параметра `curLngWeb`.
   * @returns {string} Результат выполнения.
   */
  function get_field_title(field: string, curLngWeb: string): string;

  function get_file_from_data(source: Object): unknown;

  /**
   * Записывает переданные данные в общий файл, добавляя BOM кодировки, если кодировка не 1251, и возвращает URL файла либо ошибку.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {Object} oSource - Значение параметра `oSource`.
   * @returns {Object} Результат выполнения.
   */
  function get_file_from_data(oSource: Object): Object;

  let upgrade_locked: XmlElem<boolean>;

  let in_place_upgrade: XmlElem<boolean | null>;

  function get_file_sources(fileSourceId: number): unknown;

  let os_type: XmlElem<string | null>;

  let dotnet_host: DotNetCoreHost | null;

  let object_assembly: Variant<Websoft.Interfaces>;

  /**
   * Возвращает кешированный корневой элемент источника файлов по идентификатору, предварительно обновляя кеш источников файлов при его отсутствии.
   * @param {number} iFileSourceId - Значение параметра `iFileSourceId`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_file_sources(iFileSourceId: number): unknown;

  /**
   * Возвращает значение указанного поля, полученного как ForeignElem поля источника данных,
   * или заданную строку с ошибкой, если ссылка ведет на несуществующий объект.
   * @param {T} field - Поле с типом ForeignElem из которого нужно получить ссылку на объект.
   * @param {K} name - Название поля в объекте, которое нужно вернуть.
   * @param {U} defaultValue - Значение по умолчанию.
   * @returns {T[K]["Value"] | U} Значение.
   */
  function get_foreign_field<R, T extends keyof R>(
    field: XmlElem<unknown, R>,
    name: T,
    defaultValue?: string): R[T] extends XmlElem<unknown, unknown> ? R[T]["Value"] : string;

  /**
   * Возвращает значение запрошенного поля связанного элемента либо переданный текст ошибки при его отсутствии.
   * @param {XmlElem<unknown>} fldForeignFieldParam - Значение параметра `fldForeignFieldParam`.
   * @param {string} sFieldParam - Значение параметра `sFieldParam`.
   * @param {string} sErrTextParam - Значение параметра `sErrTextParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_foreign_field(fldForeignFieldParam: XmlElem<unknown>, sFieldParam: string, sErrTextParam: string): unknown;

  /**
   * Получает заполонённую  Xml структуру с данными о выгруженном пакете.
   * Xml структура может быть сохранена как есть, при генерации пакета,
   * или использована для дальнейшего заполнения.
   * @param {string} [packageId=tools.random_string()] - Id пакета.
   * @returns {GetFormUploadDataResult} Xml.
   */
  function get_form_upload_data(packageId: string): GetFormUploadDataResult;

  /**
   * Формирует и возвращает XML-документ данных с идентификатором (случайным при отсутствии), датой создания и версией сервера.
   * @param {string} sIDParam - Значение параметра `sIDParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_form_upload_data(sIDParam: string): unknown;

  let crypto_obj: XmlElem<unknown | null>;

  /**
   * Возвращает строку для использования в запросах для поиска по full text индексу.
   * Строка параметр функция преобразуется в строку в зависимости от настроек базы.
   * @param {string} value - Строка для преобразования.
   * @returns {string} Строка для использования в запросах для поиска по full text индексу.
   * @example tools.get_ft_value(value);
   */
  function get_ft_value(value: string): string;

  function get_func_manager_substitution(arrFuncManager: unknown[], params: Object): number[];

  /**
   * Заменяет руководителей, для которых действует замещение, их заместителями в списке руководителей, возвращая итоговые идентификаторы сотрудников.
   * @param {unknown[]} arrFuncManagerParam - Значение параметра `arrFuncManagerParam`.
   * @param {Object} oParams - Значение параметра `oParams`.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_func_manager_substitution(arrFuncManagerParam: unknown[], oParams: Object): unknown[];

  function get_hash_server(text: string, type: string): string;

  function get_hashable_object_text(topElem: unknown): unknown;

  /**
   * Возвращает текст объекта для хеширования, передавая обработку статей вики библиотеке кода libWiki; в остальных случаях возвращает пустую строку.
   * @param {XmlTopElem} topElem - Значение параметра `topElem`.
   * @returns {string} Результат выполнения.
   */
  function get_hashable_object_text(topElem: XmlTopElem): string;

  function get_item_points(fldQuestion: unknown): number | null;

  /**
   * Просматривает значения setvar в resprocessing QTI и возвращает первое положительное значение баллов задания, иначе null.
   * @param {XmlElem<unknown>} fldQuestion - Значение параметра `fldQuestion`.
   * @returns {number | null} Результат выполнения.
   */
  function get_item_points(fldQuestion: XmlElem<unknown>): number | null;

  /**
   * Возвращает массив из каталожных записей значений карты знаний из карточки сотрудника
   * и профиля значений карты знаний из должности сотрудника.
   * @param {number} personId - Id сотрудника.
   * @returns {KnowledgePartCatalogDocumentTopElem[]} Массив из каталожных записей значений карты знаний.
   */
  function get_knowledge_parts_by_person_id(personId: number): KnowledgePartCatalogDocumentTopElem[];

  let dotnet_xhttp_middleware: XmlElem<unknown | null>;

  /**
   * Возвращает уникальные разделы знаний из профилей знаний должностей сотрудника вместе с его собственными разделами знаний.
   * @param {number} personId - Значение параметра `personId`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_knowledge_parts_by_person_id(personId: number): unknown;

  function get_list_lngs(): unknown;

  /**
   * На клиенте передаёт выполнение серверу; на сервере загружает форму списка языков и возвращает её корневой элемент, заполненный lngs.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function get_list_lngs(): XmlTopElem;

  /**
   * Возвращает непосредственных руководителей организации указанного сотрудника.
   * @param {number} personId - Id сотрудника для организации, которого производится поиск руководителей.
   * @returns {number[]} Массив с Id сотрудников, являющихся непосредственными руководителями организации
   * указанного сотрудника.
   */
  function get_main_boss_by_person_id(personId: number): number[];

  /**
   * Возвращает идентификаторы сотрудников — руководителей верхнего уровня, поднимаясь по иерархии должностей сотрудника до корневого родительского объекта.
   * @param {number} personId - Значение параметра `personId`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_main_boss_by_person_id(personId: number): unknown;

  /**
   * Возвращает Id самой верхней в иерархии родительской статьи форума.
   * @param {number} forumEntryId - Id статьи форума.
   * @param {ForumEntryDocumentTopElem} forumEntryTopElem - TopElem статьи форума.
   * @returns {number} Id самой верхней в иерархии родительской статьи форума.
   */
  function get_main_forum_entry_by_forum_entry_id(forumEntryId: number, forumEntryTopElem: ForumEntryDocumentTopElem): number;

  /**
   * Поднимается по родительским записям форума для поиска идентификатора корневой записи, останавливаясь после пятидесяти уровней.
   * @param {number} iForumEntryParam - Значение параметра `iForumEntryParam`.
   * @param {XmlTopElem} teForumEntryParam - Значение параметра `teForumEntryParam`.
   * @returns {number} Результат выполнения.
   */
  function get_main_forum_entry_by_forum_entry_id(iForumEntryParam: number, teForumEntryParam: XmlTopElem): number;

  /**
   * Возвращает массив из обязательных обучений сотрудника, в которые входит переданный объект.
   * Обязательные обучения указываются в требованиях к следящим объектам сотрудника должность,
   * типовая должность, группа подразделений, семейство должностей, группа.
   * @param {number} personId - Id сотрудника.
   * @param {number} objectId - Id объекта обучения.
   * @param {CollaboratorDocumentTopElem} personTopElem - Элемент {@link XmlTopElem} сотрудника.
   * @param {XmlTopElem} objectTopElem - Элемент {@link XmlTopElem} объекта обучения.
   * @returns {unknown[]} Массив из обязательных обучений сотрудника, в которые входит переданный объект.
   */
  function get_mandatory_learnings(personId: number, objectId: number, personTopElem: CollaboratorDocumentTopElem, objectTopElem: XmlTopElem): {
    source_object_id: number;
    source_object_type: string;
    source_object_name: string;
    object_id: number;
    object_type: string;
    object_name: string;
  }[];

  /**
   * Собирает обязательные курсы, тесты и программы из должности, семейства должностей и групп сотрудника в результирующий массив.
   * @param {number} iPersonIDParam - Значение параметра `iPersonIDParam`.
   * @param {number} iObjectIDParam - Значение параметра `iObjectIDParam`.
   * @param {XmlTopElem} tePersonParam - Значение параметра `tePersonParam`.
   * @param {XmlTopElem} teObjectParam - Значение параметра `teObjectParam`.
   * @returns {Object} Результат выполнения.
   */
  function get_mandatory_learnings(iPersonIDParam: number, iObjectIDParam: number, tePersonParam: XmlTopElem, teObjectParam: XmlTopElem): Object;

  /**
   * Возвращает Id самого верхнего иерархии документа портала, на который разрешена подписка,
   * относительно текущего документа.
   * Используется для отправки сообщений об изменении документа портала.
   * @param {number | DocumentDocument} documentId - Id документа для которого происходит поиск документов верхнего уровня.
   * @returns {number | null} Id самого верхнего иерархии документа портала,
   * на который разрешена подписка, относительно текущего документа или Null если такой документ не найден.
   */
  function get_notification_document(documentId: number | DocumentDocument): number | null;

  /**
   * Поднимается по родительским документам до ближайшего документа, атрибуты которого разрешают подписку, и возвращает его идентификатор либо null.
   * @param {Object} oDocumentParam - Значение параметра `oDocumentParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_notification_document(oDocumentParam: Object): unknown;

  /**
   * Возвращает TopElem системы отправки уведомлений.
   * @param {number} param - Id объекта системы отправки уведомлений, или его TopElem.
   * Если передан Id или TopElem объекта отличного от notification_system,
   * то в объекте будет произведен поиск Id системы отправки уведомлений в поле notification_system_id,
   * и возращен TopElem объекта, определяемый Id из этого поля.
   * @returns {NotificationSystemDocumentTopElem} - TopElem системы отправки уведомлений.
   */
  function get_notification_system(param: number): NotificationSystemDocumentTopElem;

  /**
   * Определяет и возвращает элемент системы уведомлений по идентификатору или документу, при необходимости переходя по вложенной ссылке notification_system_id.
   * @param {Object} oParam - Значение параметра `oParam`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function get_notification_system(oParam: Object): XmlTopElem;

  function get_oapi_schemas(): unknown;

  /**
   * Возвращает имена профилей из каталога профилей oapi, добавляя имена XML-схем из необязательного настроенного каталога.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_oapi_schemas(): unknown[];

  /**
   * Возвращает объект библиотеки.
   * @param {T} libraryName - Название библиотеки.
   * @returns {WebsoftDlls[T]} Класс работы с библиотекой.
   */
  function get_object_assembly<T extends keyof Websoft.Interfaces>(libraryName: T): T extends keyof Websoft.Interfaces ? Websoft.Interfaces[T] : T;

  /**
   * Возвращает именованный объект сборки или класса .NET из встроенного соответствия, создавая и кешируя его в общем хранилище объектов.
   * @param {string} sLibNameParam - Значение параметра `sLibNameParam`.
   * @returns {Object} Результат выполнения.
   */
  function get_object_assembly(sLibNameParam: string): Object;

  function get_object_data_from_package_url(urlPackage: string, objectId: number, objectType: string): {
    error: 0 | 1;
    error_text: string;
    object_xml: string;
  };

  let webinar_conversation_participants_obj: XmlElem<unknown | null>;

  /**
   * Читает update.xml пакета и возвращает XML запрошенного объекта вместе с полями состояния ошибки.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} packageUrl - Значение параметра `packageUrl`.
   * @param {number} iObjectIDParam - Значение параметра `iObjectIDParam`.
   * @param {string} sObjectTypeParam - Значение параметра `sObjectTypeParam`.
   * @returns {Object} Результат выполнения.
   */
  function get_object_data_from_package_url(packageUrl: string, iObjectIDParam: number, sObjectTypeParam: string): Object;

  /**
   * Возвращает путь до xmd формы каталога или объекта каталога.
   * @param {string} catalogName - Название каталога (без s на конце).
   * @param {boolean} isCatalog - Флаг указывающий, нужно возвращать форму каталога (true), или форму объекта (false).
   * @returns {string} Пусть до формы начинающийся с «x-local:».
   */
  function get_object_form_url(catalogName: string, isCatalog: boolean): string;

  let system_event_handlers_obj: XmlElem<unknown | null>;

  /**
   * Возвращает название объекта из поля, которое его содержит.
   * Например, для курса (course) это значение поля name, а для теста (test) это поле title.
   * Отличие от функции {@link tools.get_disp_name_value} в том,
   * что если поле содержит путь до элемента через “.”, то данная функция выдаст ошибку,
   * а функция {@link tools.get_disp_name_value} найдет поле с названием по указанному пути.
   * @param {XmlTopElem} topElem - TopElem объекта, название которого нужно показать.
   * @returns {string} Строка с названием объекта.
   */
  function get_object_name_field_value(topElem: XmlTopElem): string;

  /**
   * При необходимости открывает объект и возвращает значение настроенного свойства отображаемого имени.
   * @param {XmlTopElem} oObjectParam - Значение параметра `oObjectParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_object_name_field_value(oObjectParam: XmlTopElem): unknown;

  /**
   * Возвращает массив из каталожных записей типов функциональных руководителей (boss_types),
   * соответствующих указанному объекту и указанному пользователю.
   * Например, если выбран объект – определенное мероприятие – и пользователь – руководитель отдела,
   * который сам участвовали в данном мероприятии, то типы руководителя могут быть следующими:
   * «Участник мероприятия», «Руководитель участника мероприятия».
   * Если выбран объект – сотрудник отдела – и пользователь – руководитель отдела,
   * в котором работает указанный сотрудник, то типы руководителя могут быть следующими:
   * «Непосредственный руководитель», «Руководитель обучения» и т.д.
   * @param {number} userId - Id сотрудника, для которого нужно определить список
   * типов функциональных руководителей.
   * @param {number} objectId - Id объекта, относительно которого нужно определить список типов
   * функциональных руководителей.
   * Доступные типы объектов, Id которых может быть указан в данном аргументе:
   * - career_reserve (развитие карьеры);
   * - career_reserve_type (тип кадрового резерва);
   * - collaborator (сотрудник);
   * - education_plan (план обучения);
   * - event (мероприятие);
   * - group (группа);
   * - key_position (ключевая должность);
   * - org (организация);
   * - personnel_reserve (кадровый резерв);
   * - project (проект);
   * - project_participant (участник проекта);
   * - recommendation (рекомендация на вакансию);
   * - recruitment_plan (план подбора);
   * - subdivision (подразделение);
   * - successor (преемник);
   * - task (задача);
   * - vacancy_response (отклик на вакансию).
   * @returns {unknown[]} Массив из каталожных записей типов функциональных руководителей (boss_types),
   * соответствующих указанному объекту и указанному пользователю.
   */
  function get_object_relative_boss_types(userId: number, objectId: number): unknown;

  /**
   * Определяет типы руководителя пользователя относительно мероприятия, организации, подразделения или другого объекта, включая специальные типы ролей.
   * @param {number} iUserIDParam - Значение параметра `iUserIDParam`.
   * @param {number} iObjectIDParam - Значение параметра `iObjectIDParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_object_relative_boss_types(iUserIDParam: number, iObjectIDParam: number): unknown;

  /**
   * Возвращает массив из каталожных записей операций, доступных указанному пользователю в рамках указанного объекта
   * и указанного типа (иначе говоря, для всех типов руководителей указанного пользователя в рамках указанного объекта).
   * @param {number} userId - Id сотрудника, для которого нужно определить список операций.
   * @param {number} objectId - Id объекта, относительно которого нужно определить список операций.
   * @param {string} catalogName - Строка с названием типа объекта (каталога без ‘s’ на конце).
   * Если передана пустая строка, то функция вернет все операции, доступные всем типам руководителей данного пользователя.
   * @returns {OperationCatalogDocumentTopElem[]} Массив из каталожных записей операций, доступных указанному пользователю в рамках указанного объекта и указанного типа.
   */
  function get_object_relative_operations(userId: number, objectId: number, catalogName: string): OperationCatalogDocumentTopElem[];

  /**
   * Возвращает операции, доступные пользователю для объекта, объединяя относительные типы руководителей и их операции.
   * @param {number} iUserIDParam - Значение параметра `iUserIDParam`.
   * @param {number} iObjectIDParam - Значение параметра `iObjectIDParam`.
   * @param {string} sCatalogNameParam - Значение параметра `sCatalogNameParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_object_relative_operations(iUserIDParam: number, iObjectIDParam: number, sCatalogNameParam: string): unknown;

  /**
   * Возвращает документ объекта, переданного в параметрах функции.
   * Если свойство Doc определено, то функция возвращает его значение.
   * В противном случае функция открывает объект по идентификатору Id и возвращает значение Doc открытого объекта.
   * @param {XmlTopElem} topElem - TopElem объекта.
   * @returns {XmlDocument | null} Документ объекта или значение null.
   */
  function get_opened_doc(topElem: XmlTopElem): XmlDocument | null;

  /**
   * Возвращает документ, которому принадлежит элемент, при необходимости открывая его по идентификатору, либо null, если открыть его нельзя.
   * @param {XmlTopElem} teObjectParam - Значение параметра `teObjectParam`.
   * @returns {XmlDocument | null} Результат выполнения.
   */
  function get_opened_doc(teObjectParam: XmlTopElem): XmlDocument | null;

  function get_order_query(order: string, dir: string): string;

  let file_sources_obj: XmlElem<unknown | null>;

  function get_package_log(urlPackage: string, o: Object): unknown;

  /**
   * Извлекает пакет ZIP или XML во временный каталог, заполняет форму журнала пакета и возвращает её с кодами ошибок при их наличии.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} packageUrl - Значение параметра `packageUrl`.
   * @param {Object} oParam - Значение параметра `oParam`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function get_package_log(packageUrl: string, oParam: Object): XmlTopElem;

  let cache_code_librarys_obj: XmlElem<unknown | null>;

  /**
   * Возвращает ошибку формы, переданной как параметр.
   * @param {XmlDocument} XmlDocument - Документ формы, содержащей ошибку.
   * @returns {string} Строка с описанием ошибки.
   */
  function get_param_error_text(XmlDocument: XmlDocument): string;

  /**
   * Возвращает локализованную константу ошибки формы параметров или обычный текст ошибки либо null, если ничего не задано.
   * @param {XmlTopElem} paramForm - Значение параметра `paramForm`.
   * @returns {string | null} Результат выполнения.
   */
  function get_param_error_text(paramForm: XmlTopElem): string | null;

  function get_params_code_library(library: Object): unknown;

  /**
   * Определяет библиотеку кода и возвращает её wvars, преобразованные в обычный объект.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number | string | XmlTopElem} oLibraryParam - Значение параметра `oLibraryParam`.
   * @returns {Object} Результат выполнения.
   */
  function get_params_code_library(oLibraryParam: number | string | XmlTopElem): Object;

  /**
   * Возвращает продолжительность периода времени в миллисекундах,
   * преобразованную из XML-тега period.
   * Время в теге задано в формате P5Y2M10DT15H30M45S по ГОСТ ИСО 8601-2001.
   * Используется для разбора результатов курса.
   * @param {string} period - Строка с указанием продолжительности периода времени вида "P5Y2M10DT15H30M45S".
   * Примечание. "P5Y2M10DT15H30M45S" – пример обозначения периода времени по ГОСТ ИСО 8601-2001 СИБИД.
   * Представление дат и времени. Общие требования (п. 4.3-4.4).
   * Условные обозначения:
   * P (period) – период времени;
   * Y (years) – количество лет (5Y – 5 лет);
   * M (months) – количество месяцев (2M – 2 месяца);
   * D (days) – количество дней (10D – 10 дней);
   * T (time) – время в пределах суток;
   * H (hours) – количество часов (от 0 до 23) (15H – 15 часов);
   * M (minutes) – количество минут (от 0 до 59) (30M – 30 минут);
   * S (seconds) – количество секунд (от 0 до 59) (45S – 45 секунд).
   * @returns {number} Длительность в миллисекундах.
   */
  function get_period_from_iso(period: string): number;

  function get_process_param(library: Object, nameAttr: string): unknown;

  /**
   * Ищет значение параметра в библиотеке или связанных приложениях, преобразуя его согласно объявленному типу; при отсутствии возвращает null.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {Object} oLibraryParam - Значение параметра `oLibraryParam`.
   * @param {string} sNameAttr - Значение параметра `sNameAttr`.
   * @returns {Object | null} Результат выполнения.
   */
  function get_process_param(oLibraryParam: Object, sNameAttr: string): Object | null;

  /**
   * Возвращает путь до файла со структурой теста/курса в формате qti.
   * @param {number | AssessmentDocumentTopElem | CourseDocumentTopElem} objectIdOrObject - Id карточки теста/курса или TopElem карточки теста/курса.
   * @param {string} partCode - Код модуля электронного теста или курса, для которого нужно определить путь.
   * @returns {string} Путь до файла со структурой теста/курса в формате qti.
   */
  function get_qti_path(objectIdOrObject: number | AssessmentDocumentTopElem | CourseDocumentTopElem, partCode: string): string;

  /**
   * Определяет URL папки QTI для раздела курса или URL публикации теста в локальном веб-каталоге.
   * @param {XmlTopElem} oSource - Значение параметра `oSource`.
   * @param {XmlElem<unknown>} fldPartParam - Значение параметра `fldPartParam`.
   * @returns {string} Результат выполнения.
   */
  function get_qti_path(oSource: XmlTopElem, fldPartParam: XmlElem<unknown>): string;

  /**
   * Возвращает массив каталожных записей функциональных руководителей.
   * Отбираются те функциональные руководители, где объект (например, сотрудник),
   * переданный в качестве первого параметра, является руководителем объекта
   * (сотрудника/сотрудников, подразделений, организаций, групп), переданного во втором параметре.
   * Для объектов должность, группа, подразделение, организация, сотрудник руководитель может быть любого типа.
   * @param {number | XmlDocument | XmlTopElem} object - Id объекта, либо Doc объекта, либо TopElem объекта,
   * для которого идет поиск руководителей относительно объекта, переданного во втором параметре.
   * @param {number | unknown[]} personParameter - Id сотрудника, для которого ищется руководитель,
   * либо массив элементов (сотрудников, подразделений, организаций, групп).
   * @returns {unknow[]} Массив каталожных записей функциональных руководителей.
   */
  function get_relative_boss_types(object: number | XmlDocument | XmlTopElem, personParameter: number | unknown[]): unknown[];

  /**
   * Фильтрует записи func_manager сотрудника, оставляя те, чьи типы руководителей применимы к указанному сотруднику или группе.
   *
   * Примечание исходного кода: UNI
   * @param {number | XmlTopElem | XmlDocument} objectParam - Значение параметра `objectParam`.
   * @param {number | XmlTopElem} oPersonParam - Значение параметра `oPersonParam`.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_relative_boss_types(objectParam: number | XmlTopElem | XmlDocument, oPersonParam: number | XmlTopElem): unknown[];

  /**
   * Возвращает массив каталожных записей операций, определяемых типами руководителей
   * из массива функциональных руководителей, который передается в функцию.
   * Возвращает объединение операций, доступных отдельному типу руководителя.
   * @param {FuncManagersBaseFuncManager[]} manager - Массив каталожных записей функциональных руководителей.
   * @returns {OperationCatalogDocumentTopElem[]} Массив каталожных записей операций.
   */
  function get_relative_operations(manager: FuncManagersBaseFuncManager[]): OperationCatalogDocumentTopElem[];

  /**
   * Определяет типы руководителей по записям руководителей и возвращает связанные с ними операции.
   *
   * Примечание исходного кода: UNI
   * @param {Object} oManagerParam - Значение параметра `oManagerParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_relative_operations(oManagerParam: Object): unknown;

  /**
   * Возвращает массив каталожных записей операций, определяемых типами руководителей (boss_types),
   * который передается в функцию. Возвращает объединение операций доступных отдельному типу руководителя.
   * При этом возвращаются только операции, привязанные к определённому (заданному параметрами функции)
   * типу объекта (каталога) или все операции, если тип не указан.
   * @param {BossTypeCatalogDocumentTopElem[]} bossTypes - Массив каталожных записей типов руководителей.
   * @param {string} catalogName - Строка с названием типа объекта (каталога без `s` на конце).
   * Если передана пустая строка, то вернет все операция доступные указанным типам руководителей.
   * @returns {OperationCatalogDocumentTopElem[]} Массив каталожных записей операций, доступных указанному пользователю
   * относительно указанного объекта.
   */
  function get_relative_operations_by_boss_types(bossTypes: BossTypeCatalogDocumentTopElem[], catalogName?: string): OperationCatalogDocumentTopElem[];

  /**
   * Собирает идентификаторы операций из типов руководителей и возвращает соответствующие операции с необязательной фильтрацией по имени каталога.
   * @param {unknown[]} arrBossTypesParam - Значение параметра `arrBossTypesParam`.
   * @param {string} sCatalogNameParam - Значение параметра `sCatalogNameParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_relative_operations_by_boss_types(arrBossTypesParam: unknown[], sCatalogNameParam: string): unknown;

  type ToolsDocTypesCatalogHash = {
    object_hash: XmlElem<string>;
  };

  type BaseToolsResponse = {
    error: number;
    error_text: string;
  };

  type LoadCourseResult = BaseToolsResponse & {
    course: null
  };

  type OpenCoursePackageServerResponse = BaseToolsResponse & {
    file_import: string;
    tempurl: string;
    course: CourseDocument | null;
  };

  type ActivateTestToPersonParams = {
    /** Идентификатор сотрудника. */
    personId: number;
    /** Идентификатор теста. */
    iAssessmentID: number;
    /** Id мероприятия. */
    iEventID?: number;
    /** Дата последнего обучения. */
    dtLastLearningDate?: number;
    /** Не назначать уволенным. */
    bSkipDismissed?: number;
    /** Карточка сотрудника. */
    teCollaborator?: CollaboratorDocumentTopElem;
    /** Не назначать повторно успешно прошедшим тестирование (с учетом даты последнего обучения). */
    bMissOnlySuccessLearning?: number;
    /** Карточка мероприятия. */
    teEvent?: EventDocumentTopElem;
    /** Карточка теста. */
    teAssessment?: AssessmentDocumentTopElem;
    /** Длительность в днях. */
    iDuration?: number;
    /** Дата начала тестирования. */
    dtStartLearningDate?: Date;
    /** Id плана обучения. */
    iEducationPlanID?: number;
    /** Id группы. */
    iGroupID?: number;
    /** Признак самоактивации. */
    bSelfEnrolled?: boolean;
    /** Комментарий назначившего (записывается в карточку незаконченного/законченного теста). */
    sComment?: string;
    /** Использовать прокторинг. */
    bUseProctoring?: boolean;
    iProctorPreferID?: number;
  };

  type WorkflowActionProcessResult = {
    /** @type {boolean} - Успешное или неуспешное выполнение действия. */
    result: boolean;
    /** @type {string} - Строка с XAML кодом, выполняющимся при успешном выполнении действия (обрабатывается в карточке заявки на портале) */
    workflow_success_action: string;
    /** @type {string} Строка текстом сообщения при успешном выполнении действия, (обрабатывается в карточке заявки на портале) */
    workflow_action_message: string;
    /** @type {boolean} Прерывать или нет выполнения действия (обрабатывается в карточке заявки на портале). */
    workflow_create_break: boolean;
  };

  /**
   * - id - Тип: Целое число. Id результата выполнения проверки подписи.
   * - strMessage - Тип: Строка. Текстовое сообщение о результате выполнения функции.
   * Поле id может принимать следующие значения:
   * 0 – подпись действительна;
   * 1 – подпись недействительна;
   * 2 - номер сертификата подписи не соответствует номеру сертификата, указанному в карточке пользователя;
   * 3 - текст подписанного документа пустой;
   * 4 - электронно-цифровая подпись пустая.
   */
  type DigitalVerifyResult = {
    id: 0 | 1 | 2 | 3 | 4;
    strMessage: string;
  };

  type GetFormUploadDataResult = XmlElem<unknown, unknown> & {
    id: string;
    create_date: Date;
    server_version: string;
  };

  interface ICreateNotificationAdditionalParams {
    recipients: string[];
    sender_selector: string;
    subject: string;
    body_type: string;
    body: string;
    sender_email: string;
  }

  export type ActivateCourseToPersonObject = {
    /** Id Сотрудника. */
    personId: number;
    /** Id курса. */
    iCourseID: number;
    /** Код записи в каталоге незаконченных электронных курсов active_learnings (необязательный). */
    sEID?: string;
    /** Id мероприятия (необязательный). */
    iEventID?: number;
    /** Карточка сотрудника (необязательный). */
    teCollaborator?: CollaboratorDocumentTopElem;
    /** Карточка курса (необязательный). */
    teCourse?: CourseDocumentTopElem;
    /** Длительность в днях (необязательный). */
    iDuration?: number;
    /** Дата последнего обучения (необязательный). */
    dtLastLearningDate?: Date;
    /** Дата начала прохождения курса (необязательный). */
    dtStartLearningDate?: Date;
    /** Id плана обучения (необязательный). */
    iEducationPlanID?: number;
    /** Id группы (необязательный). */
    iGroupID?: number;
    /** Возможность комментировать (необязательный). */
    bCommenting?: boolean;
    /** Ведение подробного лога (журнала) курса (необязательный). */
    bLogging?: boolean;
    /** Не назначать уволенным (необязательный). */
    bSkipDismissed?: boolean;
    /** Не назначать повторно успешно прошедшим курс (с учетом даты последнего обучения) (необязательный). */
    bMissOnlySuccessLearning?: boolean;
    /** Карточка мероприятия (необязательный). */
    teEvent?: EventDocumentTopElem;
    /** Признак самоактивации (необязательный). */
    bSelfEnrolled?: boolean;
    /** Комментарий назначившего (записывается в карточку незаконченного/законченного курса) (необязательный). */
    sComment?: string;
    /** Использовать прокторинг (необязательный). */
    bUseProctoring?: boolean;
  };

  type RegisterDocTypeCatalog = {
    catalog: string;
    catalog_form_url: string;
    catalog_form_hash: string;
  };

  /**
   * Используется в настраиваемых отчетах для возврата названия тега,
   * в котором хранится значение по типу данных этого значения.
   * Начение затем может быть показано пользователю в ячейке отчета.
   * @param {string} type - Тип данных.
   * @returns {string} Название тега, в котором хранится значение указанного типа.
   * Предусмотрены следующие возвращаемые значения:
   * - "vi" – для значения аргумента "integer";
   * - "vn" – для значения аргумента "real";
   * - "vd" – для значения аргумента "date";
   * - "vb" – для значения аргумента "bool";
   * - "vs" – для значений аргумента, отличных от допустимых.
   */
  function get_report_storage_field(type: "integer" | "real" | "date" | "bool"): string;

  /**
   * Сопоставляет имя типа данных отчёта с кратким кодом поля хранения, по умолчанию используя код строки.
   * @param {string} sDatatype - Значение параметра `sDatatype`.
   * @returns {string} Результат выполнения.
   */
  function get_report_storage_field(sDatatype: string): string;

  function get_screen_form_url(catalogName: string): string;

  /**
   * Возвращает продолжительность периода времени в секундах.
   * Время задано в формате P5Y2M10DT15H30M45S по ГОСТ ИСО 8601-2001.
   * @param {string} duration - Строка с указанием продолжительности времени вида 'P5Y2M10DT15H30M45S'.
   * Примечание.
   * 'P5Y2M10DT15H30M45S' – пример обозначения периода времени по ГОСТ ИСО 8601-2001 СИБИД.
   * Представление дат и времени. Общие требования (п. 4.3-4.4).
   * Условные обозначения:
   * P (period) – период времени;
   * Y (years) – количество лет (5Y – 5 лет);
   * M (months) – количество месяцев (2M – 2 месяца);
   * D (days) – количество дней (10D – 10 дней);
   * T (time) – время в пределах суток;
   * H (hours) – количество часов (от 0 до 23) (15H – 15 часов);
   * M (minutes) – количество минут (от 0 до 59) (30M – 30 минут);
   * S (seconds) – количество секунд (от 0 до 59) (45S – 45 секунд).
   * @returns {number} Длительность в секундах.
   */
  function get_seconds_from_duration(duration: string): number;

  /**
   * Возвращает https при работе в веб-клиенте или при включённой опции LDS-HTTPS либо ALT-PORT-HTTPS, иначе http.
   * @returns {string} Протокол сервера.
   * @example
   * ```
   * UrlSchema("http://docs.datex.ru/"); // http
   * ```
   */
  function get_server_protocol(): "file" | "http" | "https" | "mailto" | "ftp" | "x-local";

  function get_short_login_by_login(login: string): string;

  /**
   * Сокращает логин до части перед почтовым доменом или после последней обратной косой черты.
   * @param {string} sLoginParam - Значение параметра `sLoginParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_short_login_by_login(sLoginParam: string): unknown;

  /**
   * Возвращает массив каталожных записей сотрудников, которые подписаны на данного сотрудника или
   * на его индивидуальный (а не групповой) блог.
   * @param {number} personId - Id сотрудника, подписки на которого определяет функция.
   * @param {string} messageType - .
   * @param {boolean} showAdditionalInfo - .
   * @returns {CollaboratorCatalogDocumentTopElem[]} Массив каталожных записей сотрудников,
   * подписанных на данного сотрудника или на его индивидуальный блог.
   */
  function get_sibscriber_subscriptions(personId: number, messageType: string, showAdditionalInfo: boolean): CollaboratorCatalogDocumentTopElem[];

  /**
   * Возвращает активные подписки сотрудника вместе с подписками на принадлежащие ему блоги.
   * @param {number} iPersonIDParam - Значение параметра `iPersonIDParam`.
   * @param {string} sMessageTypeParam - Значение параметра `sMessageTypeParam`.
   * @param {boolean} bShowAdditionalInfoParam - Значение параметра `bShowAdditionalInfoParam`.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_sibscriber_subscriptions(iPersonIDParam: number, sMessageTypeParam: string, bShowAdditionalInfoParam: boolean): unknown[];

  function get_srw_object(defaultObjectType: string): unknown;

  /**
   * На сервере возвращает новый SRWLock; на клиенте возвращает обычный или безопасный объект согласно запрошенному типу.
   * @param {string} sDefaultObjectTypeParam - Значение параметра `sDefaultObjectTypeParam`.
   * @returns {Object} Результат выполнения.
   */
  function get_srw_object(sDefaultObjectTypeParam: string): Object;

  function get_statistic_data(statisticRecId: number, objectId: number, periodType: string, dateStart: Date, dateEnd: Date): unknown;

  /**
   * Пересчитывает статистику по истечении её периода, затем возвращает отфильтрованные результаты запроса данных статистики.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iStatisticRecId - Значение параметра `iStatisticRecId`.
   * @param {number} iObjectIdParam - Значение параметра `iObjectIdParam`.
   * @param {string} sPeriodTypeParam - Значение параметра `sPeriodTypeParam`.
   * @param {Date} dDateStartParam - Значение параметра `dDateStartParam`.
   * @param {Date} dDateEndParam - Значение параметра `dDateEndParam`.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_statistic_data(iStatisticRecId: number, iObjectIdParam: number, sPeriodTypeParam: string, dDateStartParam: Date, dDateEndParam: Date): unknown[];

  function get_sub_boss_by_person_id(personId: number, person: CollaboratorDocument): number[];

  /**
   * Устаревшая функция, возвращающая идентификаторы сотрудников — функциональных руководителей родительской должности или подразделения сотрудника либо пустой массив.
   * @param {number} personId - Значение параметра `personId`.
   * @param {XmlTopElem} personDoc - Значение параметра `personDoc`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_sub_boss_by_person_id(personId: number, personDoc: XmlTopElem): unknown;

  /**
   * Возвращает массив руководителей (руководителей по должности) центра затрат указанного сотрудника.
   * Если указанные руководители не найдены, то возвращается пустой массив.
   * @param {number} subdivisionId - Id подразделения, для которого происходит поиск руководителей.
   * @returns {number} Массив Id руководителей (руководителей по должности) указанного подразделения.
   * @example
   * ```
   * // Пусть в системе имеется подразделение «IT отдел»
   * // Находим программно подразделение «IT отдел» с помощью функции tools.get_doc_by_key
   * oSub = tools.get_doc_by_key ('subdivision', 'name', 'IT отдел');
   * // на экран выводится информация об отобранном подразделении
   * alert("Найдено подразделение " + oSub.TopElem.name + " с идентификационным номером " + oSub.TopElem.id);
   * arrBoss = tools.get_sub_boss_by_sub_id (oSub.TopElem.id);
   * alert (ArrayCount (arrBoss)); // возвращает количество элементов массива
   * str = "Руководители подразделения " + oSub.TopElem.name + ": \n";
   * for (elem in arrBoss) // выводит информацию об элементах массива
   * {
   *      // Находим руководителя по его Id с помощью функции tools.get_doc_by_key
   *      iCollab_id = elem;
   *      oCollab = tools.get_doc_by_key ('collaborator', 'id', iCollab_id);
   *      str = str + ' - ' + oCollab.TopElem.fullname + '\n';
   * }
   * alert (str);
   * ```
   */
  function get_sub_boss_by_sub_id(subdivisionId: number): number[];

  /**
   * Возвращает идентификаторы сотрудников на руководящих должностях непосредственно в заданном подразделении либо null при некорректном идентификаторе.
   * @param {number} subId - Значение параметра `subId`.
   * @returns {string | null} Результат выполнения.
   */
  function get_sub_boss_by_sub_id(subId: number): string | null;

  /**
   * Возвращает массив каталожных записей всех дочерних объектов указанного объекта,включая его самого.
   * @param {number} nodeId - Id объекта, для которого происходит поиск дочерних объектов.
   * @param {string} nodeCatalog - Название каталога без `s` на конце, в котором производится поиск.
   * @param {string} nodeParentField - Название поля, в котором указывается Id родительского элемента.
   * По умолчанию parent_object_id.
   * Если название данного поля отличается от принятого по умолчанию,
   * это название обязательно нужно указать.
   * @returns {XmlTopElem[]} Массив каталожных записей всех дочерних объектов указанного объекта,
   * включая его самого.
   */
  function get_sub_hierarchy(nodeId: number, nodeCatalog: string, nodeParentField: string): XmlTopElem[];

  /**
   * Рекурсивно собирает узел и всех его потомков из каталога по заданному полю родителя, возвращая их массивом.
   * @param {number} nodeId - Значение параметра `nodeId`.
   * @param {string} nodeCatalog - Значение параметра `nodeCatalog`.
   * @param {string} nodeParentField - Значение параметра `nodeParentField`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_sub_hierarchy(nodeId: number, nodeCatalog: string, nodeParentField: string): unknown;

  /**
   * Возвращает массив Id подчиненных сотрудников (как непосредственных, так и подчиненных подчиненных)
   * указанного сотрудника.
   * @param {number} managerId - Id сотрудника, для которого производится поиск подчиненных.
   * @param {string | null} catalogNames - Можно передать любой набор из следующих каталогов
   * (collaborator, group, org, position, subdivision), разделенных запятой;
   * native – поиск подчиненных только непосредственного руководителя по должности;
   * not_native – поиск подчиненных руководителя любого типа: группы, сотрудника, подразделения, организации.
   * Тогда поиск будет происходить только среди объектов указанных каталогов.
   * @param {boolean | number } bossType - Тип руководителя.
   * Допустимые значения:
   * - true – поиск только непосредственного руководителя;
   * - false - поиск только функционального руководителя без признака Непосредственный.
   * - Id типа руководителя. Если передать Id нужного типа руководителя,
   * то будет осуществлен поиск подчиненных сотрудников только для руководителей указанного типа.
   * @param {number} limit - Максимальное количество подчиненных для поиска.
   * Указывается в случае, когда массив подчиненных руководителя высокого уровня является очень большим
   * и процесс поиска может быть достаточно долгим.
   * Если будет найдено больше записей, чем указанно, то будет возвращено только указанное количество,
   * а процесс поиска будет остановлен.
   * @param {string} fullnameContains - Символы, которые должны содержать ФИО подчиненных сотрудников.
   * @returns {number[]} Массив Id подчиненных сотрудников.
   * @example
   * ```
   * var curSubPersonIDsByManagerIDSearch = tools.get_sub_person_ids_by_func_manager_id(
   *  curUserID,
   *   null,
   *   null,
   *   null,
   *   search_fullname
   *);
   * ```
   */
  function get_sub_person_ids_by_func_manager_id(managerId: number, catalogNames?: string | null, bossType?: boolean | number | null, limit?: number | null, fullnameContains?: string): number[];

  /**
   * Собирает идентификаторы подчинённых руководителя по выбранным типам каталогов с необязательной поисковой фильтрацией; возвращает уникальные идентификаторы либо null при превышении ограничений.
   * @param {number} managerId - Значение параметра `managerId`.
   * @param {string} catalogNames - Значение параметра `catalogNames`.
   * @param {string} vBossType - Значение параметра `vBossType`.
   * @param {number} iLimitParam - Значение параметра `iLimitParam`.
   * @param {string} sSearchParam - Значение параметра `sSearchParam`.
   * @returns {unknown[] | null} Результат выполнения.
   */
  function get_sub_person_ids_by_func_manager_id(managerId: number, catalogNames: string, vBossType: string, iLimitParam: number, sSearchParam: string): unknown[] | null;

  /**
   * Возвращает массив Id сотрудников указанного подразделения и дочерних подразделений.
   * @param {number} subdivisionId - Id подразделения, сотрудников которого нужно найти.
   * @param {string} condition - Дополнительное условие для поиска сотрудников.
   * Будет добавлено в условия поиска с использованием and в запросе.
   * @returns {number[]} Массив Id сотрудников указанного подразделения и дочерних подразделений.
   */
  function get_sub_person_ids_by_subdivision_id(subdivisionId: number, condition: string): number[];

  /**
   * Возвращает идентификаторы сотрудников должностей в иерархии подразделений, соответствующих необязательным условиям, в порядке иерархии.
   * @param {number} subdivisionId - Значение параметра `subdivisionId`.
   * @param {string} sConditionsParam - Значение параметра `sConditionsParam`.
   * @returns {string} Результат выполнения.
   */
  function get_sub_person_ids_by_subdivision_id(subdivisionId: number, sConditionsParam: string): string;

  /**
   * Возвращает массив каталожных записей подчинённых сотрудников
   * (как непосредственных, так и подчинённых подчиненных) указанного сотрудника.
   * @param {number} managerId - Id сотрудника, для которого производится поиск подчиненных.
   * @param {string} catalogNames - Допустимые значения:
   * - native – поиск подчиненных только непосредственного руководителя по должности;
   * - not_native – поиск подчиненных руководителя любого типа: группы, сотрудника, подразделения, организации.
   * Можно передать любой набор из следующих каталогов (collaborator, group, org, position, subdivision),
   * разделенных запятой. Тогда поиск будет происходить только среди объектов указанных каталогов.
   * @param {boolean | string} bossType - Булево или Целое число. Тип руководителя.
   * Допустимые значения:
   * - true – поиск только непосредственного руководителя;
   * - false - поиск только функционального руководителя без признака Непосредственный.
   * - Id типа руководителя.
   * Если передать Id нужного типа руководителя, то будет осуществлен поиск подчинённых
   * сотрудников только для руководителей указанного типа.
   * @returns {CollaboratorCatalogDocumentTopElem[]} Массив каталожных записей подчинённых сотрудников.
   */
  function get_sub_persons_by_func_manager_id(managerId: number, catalogNames: string, bossType: boolean | number): CollaboratorCatalogDocumentTopElem[];

  /**
   * Вызывает get_sub_person_ids_by_func_manager_id и получает записи сотрудников по возвращённым идентификаторам.
   * @param {number} iManagerIDParam - Значение параметра `iManagerIDParam`.
   * @param {string} sCatalogNamesParam - Значение параметра `sCatalogNamesParam`.
   * @param {string} vBossType - Значение параметра `vBossType`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_sub_persons_by_func_manager_id(iManagerIDParam: number, sCatalogNamesParam: string, vBossType: string): unknown;

  /**
   * Возвращает массив каталожных записей сотрудников указанного подразделения и дочерних подразделений.
   * @param {number} subdivisionId - Id подразделения, для которого производится поиск сотрудников.
   * @param {string} condition - Дополнительное условие для поиска сотрудников.
   * Будет добавлено в условия поиска с использованием and в запросе.
   * @returns {number[]} Массив каталожных записей сотрудников указанного подразделения и дочерних подразделений.
   */
  function get_sub_persons_by_subdivision_id(subdivisionId: number, condition: string): number[];

  /**
   * Получает полные документы сотрудников подразделения с помощью функции поиска идентификаторов подчинённых.
   * @param {number} subdivisionId - Значение параметра `subdivisionId`.
   * @param {string} sConditionsParam - Значение параметра `sConditionsParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_sub_persons_by_subdivision_id(subdivisionId: number, sConditionsParam: string): unknown;

  function get_sum_sid(id: string): ReturnType<typeof tools_web.get_sum_sid>;

  /**
   * Возвращает привязанный к сеансу идентификатор контрольной суммы для переданного идентификатора с помощью tools_web.
   * @param {string} sIdParam - Значение параметра `sIdParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_sum_sid(sIdParam: string): unknown;

  function get_system_event_handlers(systemEventId: number): unknown;

  /**
   * Возвращает включённые обработчики системного события, при отсутствии формируя и кешируя облегчённый список обработчиков на 86400 секунд.
   * @param {number} iSystemEventId - Значение параметра `iSystemEventId`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_system_event_handlers(iSystemEventId: number): unknown;

  function get_tag_cloud(): unknown[];

  /**
   * Собирает теги из разделов знаний и возвращает отсортированные теги, встречающиеся только один раз после фильтрации дубликатов.
   *
   * Примечание исходного кода: КОНЕЦ, автор — Мария Букина
   * @returns {string} Результат выполнения.
   */
  function get_tag_cloud(): string;

  /**
   * Функция разработана для проверки данных времени в строке, полученной из внешнего источника.
   * Возвращает строку со временем (часами и/или минутами и/или секундами) из строки времени,
   * разделенной символами «:». Принимается строка вида '23:58:56'.
   * Если строка будет некорректной – например, вида '33:58:56', функция возвращает значение null.
   * Если в исходной строке передается неполное значение времени
   * (без указания количества минут или секунд), то в зависимости от значения аргументов
   * minite_flag и second_flag функция дополняет время значением ':00' или возвращает значение null.
   * @deprecated
   * @param {string} value - Исходная строка для разбора.
   * @param {boolean} [checkMinutes=false] - Указывает на необходимость проверки наличия минут в исходной строке.
   * Например, если в исходной строке имеется значение '23', а minite_flag = true,
   * то функция выдаст значение null, а при minite_flag = false – значение '23:00'.
   * @param {boolean} [checkSeconds=false] - Указывает на необходимость проверки наличия секунд в исходной строке.
   * @returns {string | null} Строка с откорректированным значением времени или значение null.
   */
  function get_time(value: string, checkMinutes: boolean, checkSeconds: boolean): string;

  /**
   * Нормализует строку времени с разделителями-двоеточиями в HH:MM или HH:MM:SS; возвращает null при некорректном значении или отсутствии обязательных частей.
   * @param {string} str - Значение параметра `str`.
   * @param {boolean} miniteFlag - Значение параметра `miniteFlag`.
   * @param {boolean} secondFlag - Значение параметра `secondFlag`.
   * @returns {string | null} Результат выполнения.
   */
  function get_time(str: string, miniteFlag: boolean, secondFlag: boolean): string | null;

  /**
   * Возвращает время (часы, минуты и секунды) из строки с разделителем T,
   * например, вида "2015-06-02T07:51:44".
   * Используется для разбора результатов теста.
   * Проверка формата исходного аргумента не производится.
   * @param {string} duration - Строковое выражение даты в формате "2015-06-02T07:51:44".
   * @returns {string} Строковое выражение времени (часы, минуты и секунды) в формате "07:51:44",
   * если переданы дата и время, или выражение, находящееся после символа T, если передана строка с таким разделителем.
   * @example tools.get_time_from_duration("2015-06-02T07:51:44"); // 07:41:44
   */
  function get_time_from_duration(duration: string): string;

  /**
   * Возвращаете время (часы, минуты и секунды) в виде «часы H минуты M секунды S»,
   * полученное из количества секунд. Используется для разбора результатов теста.
   * @param {string} seconds - Количество секунд, которые нужно преобразовать в часы, минуты и секунды.
   * @returns {string} Строковое значение, содержащее значение времени в формате «часы H минуты M секунды S» в строке,
   * или пустая строка, если входной параметр (аргумент) не удалось преобразовать в число.
   * @example tools.get_time_from_seconds(86399); // 23H59M59S
   */
  function get_time_from_seconds(seconds: string): string;

  /**
   * Преобразует число секунд в строку длительности H/M/S; существующую строку длительности возвращает без изменений, в остальных случаях — пустую строку.
   * @param {number} seconds - Значение параметра `seconds`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_time_from_seconds(seconds: number): unknown;

  /**
   * Формирует строку с уникальным идентификатором на основе параметров функции.
   * Формируется результирующая строка вида $$uid_первый параметр_второй параметр.
   * @param {string} uid - Строка формирования идентификатора (первый параметр).
   * @param {string} url - Строка формирования идентификатора (второй параметр).
   * @returns {string} Строка вида $$uid_первый параметр_второй параметр.
   */
  function get_uid_cached_doc(uid: string, url: string): string;

  /**
   * Возвращает каталожную запись сотрудника, являющегося непосредственным (фактическим)
   * руководителем указанного объекта (организации, подразделения, сотрудника)
   * по должности либо функциональным руководителем из карточки объекта или вышестоящего подразделения,
   * организации (если они определены для данного типа объекта).
   * Для сотрудника также учитывается функциональные руководители групп,
   * в которые данный сотрудник включен.
   * По сути возвращается первый руководитель из массива, полученного из функции
   * tools.get_uni_user_bosses.
   * @param {number | XmlTopElem} objectParam - Либо Id объекта, либо Doc объекта, либо TopElem объекта, для которого идет поиск руководителей.
   * @param {object} [params] -
   * @returns {XmlDocument} Каталожная запись руководителя указанного объекта.
   */
  function get_uni_user_boss(objectParam: number | XmlTopElem, params?: Object): CollaboratorDocument;

  /**
   * Возвращает первую запись руководителя из результата get_uni_user_bosses для заданного объекта.
   * @param {Object} objectParam - Значение параметра `objectParam`.
   * @param {Object} oParams - Значение параметра `oParams`.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_uni_user_boss(objectParam: Object, oParams: Object): unknown[];

  /**
   * Возвращает массив Id или список каталожных записей сотрудников,
   * являющихся непосредственными (фактическими) руководителями указанного объекта
   * (организации, подразделения, сотрудника) по должности либо функциональными
   * руководителями из карточки объекта или вышестоящего подразделения,
   * организации (если они определены для данного типа объекта).
   * Для сотрудника также учитываются функциональные руководители групп,
   * в которые данный сотрудник включен.
   * @param {object} objectParam - Либо Id объекта, либо Doc объекта, либо TopElem объекта, для которого идет поиск руководителей.
   * @param {object} params -
   * @returns {number[]} Массив Id или список каталожных записей руководителей указанного объекта.
   */
  function get_uni_user_bosses(objectParam: object, params: Object): number[];

  /**
   * Обходит иерархию collaborator, position, subdivision и org через func_managers, возвращая руководителей сотрудника, их идентификаторы или записи руководителей.
   * @param {XmlTopElem | XmlDocument} objectParam - Значение параметра `objectParam`.
   * @param {Object} oParams - Значение параметра `oParams`.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_uni_user_bosses(objectParam: XmlTopElem | XmlDocument, oParams: Object): unknown[];

  function get_user_boss(object: number | XmlDocument): CollaboratorCatalogDocumentTopElem | undefined;

  /**
   * Обходит иерархию сотрудников, должностей или подразделений для поиска записи сотрудника ответственного руководителя; при отсутствии возвращает undefined.
   * @param {XmlDocument} object - Значение параметра `object`.
   * @returns {XmlTopElem | null} Результат выполнения.
   */
  function get_user_boss(object: XmlDocument): XmlTopElem | null;

  /**
   * Возвращает каталожную запись сотрудника с соответствующим логином и типом авторизации,
   * или undefined, если такой сотрудник не найден.
   * @param {string} login - Логин сотрудника.
   * @param {string} authType - Тип авторизации.
   * @returns {CollaboratorCatalogDocument | undefined} Каталожная запись сотрудника или undefined, если сотрудник не найден.
   */
  function get_user_by_login(login: string, authType: "ntlm" | string): CollaboratorCatalogDocumentTopElem | undefined;

  /**
   * Ищет сотрудников по логину с учётом регистра и использует сопоставление по краткому логину как запасной вариант при аутентификации NTLM.
   * @param {string} login - Значение параметра `login`.
   * @param {string} authType - Значение параметра `authType`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_user_by_login(login: string, authType: string): unknown;

  /**
   * Возвращает список каталожных записей из профилей компетенции указанного сотрудника.
   * Данные собираются из кодов профилей, указанных в должности сотрудника,
   * и из профиля компетенции, указанного в должности сотрудника.
   * Если в должности сотрудника не найдены профили компетенции,
   * то берется профиль из типовой должности, привязанной к должности сотрудника
   * (если такая связь имеется).
   * @param {number | object | XmlTopElem} objectParam - Id сотрудника, либо документ сотрудника, либо TopElem сотрудника.
   * @returns {number[]} Список каталожных записей из профилей компетенции, указанного сотрудника.
   */
  function get_user_comp_profiles(objectParam: number | object | XmlTopElem): number[];

  /**
   * Возвращает профили компетенций, соответствующие кодам компетенций должности пользователя, используя профиль типовой должности, если совпадений нет.
   * @param {XmlTopElem | XmlDocument} objectParam - Значение параметра `objectParam`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function get_user_comp_profiles(objectParam: XmlTopElem | XmlDocument): XmlTopElem;

  /**
   * Возвращает версию и дату модификации из файла history.
   * Поиск файла history может происходить в разных местоположениях в зависимости от параметров функции.
   * @param {string} type - Строка, указывающая, какой именно файл history
   * нужно открыть для получения версии и даты модификации.
   * По умолчанию - 'wtv'.
   * Допустимые значения:
   * - wtv – данные из файла history.xml, находящегося в папке wtv.
   * - qti – данные из файла history.xml, находящегося в папке qti.
   * - assessment – данные из файла history_ass.xml, находящегося в папке wtv.
   * - last – данные из файла history.xml, находящегося в папке last.
   * @param {boolean} dateFlag - .
   * @returns {string} Строка вида 'номер версии (дата модификации версии)'.
   * @example
   * ```
   * tools.get_version("last");
   * ```
   */
  function get_version(type: "wtv" | "qti" | "assessment" | "last", dateFlag: boolean): string;

  /**
   * Открывает history.xml для заданного типа и возвращает строку версии с датой изменения.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sTypeParam - Значение параметра `sTypeParam`.
   * @param {boolean} bDateFlag - Значение параметра `bDateFlag`.
   * @returns {string} Результат выполнения.
   */
  function get_version(sTypeParam: string, bDateFlag: boolean): string;

  /**
   * Получение текстового значения языкового параметра из curLngWeb.
   * @param {string} name - Название параметра.
   * @returns {string} Значение языкового параметра.
   */
  function get_web_str(name: string): string;

  /**
   * Возвращает локализованную веб-строку по заданному имени, вызывая tools_web.get_web_str.
   * @param {string} sNameParam - Значение параметра `sNameParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_web_str(sNameParam: string): unknown;

  function get_webinar_conversation_participants(webinarSystemId: number): unknown;

  /**
   * Однократно собирает участников бесед из всех систем вебинаров, кеширует их в tools и возвращает кешированный массив.
   * @param {number} iWebinarSystemId - Значение параметра `iWebinarSystemId`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_webinar_conversation_participants(iWebinarSystemId: number): unknown;

  function get_webinar_system_topelem(webinarSystemId: number): unknown;

  /**
   * Возвращает обычный объект с идентификатором и кодом системы вебинаров, URL и кодом библиотеки и wvars; на клиенте передаёт выполнение серверу.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iWebinarSystemIdParam - Значение параметра `iWebinarSystemIdParam`.
   * @returns {Object} Результат выполнения.
   */
  function get_webinar_system_topelem(iWebinarSystemIdParam: number): Object;

  function get_xhttp_ini(iniVarName: string): unknown;

  /**
   * Лениво загружает кеш xHttp.ini и возвращает значение указанной переменной либо undefined при её отсутствии.
   * @param {string} sIniVarName - Значение параметра `sIniVarName`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function get_xhttp_ini(sIniVarName: string): unknown;

  function getDayYear(date: Date): unknown;

  /**
   * Возвращает порядковый номер дня в году для заданной даты, начиная с единицы, либо null, если дата некорректна.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {Date} dDate - Значение параметра `dDate`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function getDayYear(dDate: Date): unknown;

  function getWeekYear(date: Date): unknown;

  /**
   * Возвращает номер недели в году с учётом дня недели 1 января либо null для некорректной даты.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {Date} dDate - Значение параметра `dDate`.
   * @returns {number | null} Результат выполнения.
   */
  function getWeekYear(dDate: Date): number | null;

  /**
   * Преобразовывает html-файл, переданный в функцию, в файл в формате pdf и сохраняет его по указанному пути.
   * Примечание – Если указанный файл уже существует в файловой системе,
   * то он перезаписывается без выдачи предупреждения.
   * Если файл открыт в другой программе, то выдается ошибка с прерыванием выполняемого кода:
   * «Процесс не может получить доступ к файлу…,
   * так как этот файл используется другим процессом.».
   * @param {string} sHtmlText - Строка с html для преобразования.
   * @param {string} sResourcesDirPath - Путь до папки с ресурсами (изображения, стили и т.д.),
   * которые используются в html. При отсутствии таких ресурсов указывается пустая строка ('').
   * @param {string} sOutFilePath - Путь до файла, в который будет сохранен полученный файл pdf.
   * @param {0 | 1} pageOrientation - Ориентация листа. 0 - Вертикальная 1 - Горизонтальная
   * @returns {boolean} Возвращает значение `true`, если преобразование завершилось успешно,
   * или `false` - в противном случае.
   * @example tools.html_to_pdf(_str, "", UrlToFilePath(_filename)); // returns true
   */
  function html_to_pdf(sHtmlText: string, sResourcesDirPath: string, sOutFilePath: string, pageOrientation: 0 | 1): boolean;

  /**
   * Преобразует HTML в PDF-файл с помощью сборки PdfGenerator; при ошибке генерации показывает предупреждение и возвращает false.
   * @param {string} sHtmlText - Значение параметра `sHtmlText`.
   * @param {string} sResourcesDirPath - Значение параметра `sResourcesDirPath`.
   * @returns {boolean} Результат выполнения.
   */
  function html_to_pdf(sHtmlText: string, sResourcesDirPath: string): boolean;

  /**
   * Импортирует курс в систему из указанного файла.
   * Файл должен быть сформирован предварительно и соответствовать определенным стандартам (например, SCORM 2004).
   * @param {string} filepath - Путь до файла.
   * @returns {boolean} Результат true в любом случае.
   */
  function import_course(filepath: string): boolean;

  /**
   * Загрузка данных по сотрудникам из XML-структуры.
   * Используется для импорта сотрудников.
   * Документ XML с данными для загрузки должен быть сформирован
   * предварительно и соответствовать определенным правилам.
   * @param {XmlDocument} XmlDocument - Документ XML с данными для загрузки.
   * @returns {number} Id документа события базы с отчетом о загрузке.
   * @example
   * ```
   * var docId = tools.import_excel_persons(XmlDocument);
   * var xml = CodeLiteral(fldTE.GetXml({ "tabs": false }));
   * var importExcelPersonActionReportId = OptInt(tools.import_excel_persons(xml), null);
   * local_settings.temp.import_excel_person_action_report_id = importExcelPersonActionReportId;
   * ```
   */
  function import_excel_persons(XmlDocument: XmlDocument): number;

  /**
   * Создаёт отчёт о действии и запускает фоновый поток агента импорта сотрудников из Excel с декодированными параметрами, возвращая идентификатор отчёта.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sParamsXml - Значение параметра `sParamsXml`.
   * @returns {number} Результат выполнения.
   */
  function import_excel_persons(sParamsXml: string): number;

  /**
   * Включает сотрудника в кадровый резерв.
   * При этом создается объект Кадровый резерв и этап развития карьеры к нему.
   * Если объект кадрового резерва для данного сотрудника уже создан, в этот объект вносятся изменения.
   * @param {number} personId - Id сотрудника, включаемого в резерв.
   * @param {RequestDocumentTopElem} requestTopElem - TopElem заявки на включение в резерв.
   * Если в заявке есть настраиваемые поля и в настраиваемых полях есть ссылка на тип кадрового резерва,
   * то этот тип будет приписан создаваемому объекту кадрового резерва.
   * При отсутствии TopElem заявки необходимо обязательно указать значение null.
   * @param {number} careerReserveTypeId - Id типа кадрового резерва.
   * Этот тип будет приписан создаваемому объекту кадрового резерва.
   * @param {number} positionId - Id должности. Эта должность будет указана в качестве цели
   * развития этапа развития карьеры. Если должность не указана, но в заявке на включение
   * в резерв была проставлена должность (как объект заявки), то будет использоваться Id должности из заявки.
   * @param {string} [state="candidate"] - Статус объекта кадрового резерва,
   * который присваивается в результате работы функции.
   * @param {number} positionCommonId - Id типовой должности (используется, если не указана должность iPositionIdParam).
   * Эта типовая должность будет указана в качестве цели развития этапа развития карьеры.
   * Если типовая должность не указана, но в заявке на включение в резерв была проставлена типовая должность
   * (как объект заявки), то будет использоваться Id типовой должности из заявки.
   * @param {Date} [includeDateParam=CurDate] - Дата включения в резерв.
   * @returns {number} Id объекта Кадровый резерв.
   */
  function include_person_to_personnel_reserve_position(personId: number, requestTopElem: RequestDocumentTopElem, careerReserveTypeId: unknown, positionId: number, state: string, positionCommonId: number, includeDateParam: Date): number;

  /**
   * Передаёт включение в кадровый резерв методу include_person_to_personnel_reserve библиотеки кода libTalentPool и возвращает его результат.
   * @param {number} iPersonIdParam - Значение параметра `iPersonIdParam`.
   * @param {XmlTopElem} teRequestParam - Значение параметра `teRequestParam`.
   * @param {number} iCareerReserveTypeIdParam - Значение параметра `iCareerReserveTypeIdParam`.
   * @param {number} iPositionIdParam - Значение параметра `iPositionIdParam`.
   * @param {string} strStateParam - Значение параметра `strStateParam`.
   * @param {number} iPositionCommonIdParam - Значение параметра `iPositionCommonIdParam`.
   * @param {string} sIncludeDateParam - Значение параметра `sIncludeDateParam`.
   * @returns {number} Результат выполнения.
   */
  function include_person_to_personnel_reserve_position(iPersonIdParam: number, teRequestParam: XmlTopElem, iCareerReserveTypeIdParam: number, iPositionIdParam: number, strStateParam: string, iPositionCommonIdParam: number, sIncludeDateParam: string): number;

  function init_cache_code_librarys(codeLibraryId: number): unknown;

  /**
   * Сбрасывает кеш библиотек кода в новый пустой словарь; аргумент идентификатора не используется.
   * @param {number} iCodeLibraryId - Значение параметра `iCodeLibraryId`.
   */
  function init_cache_code_librarys(iCodeLibraryId: number): void;

  /**
   * Проверяет, является ли указанный сотрудник (первый аргумент функции) непосредственным руководителем сотрудника,
   * который указан в качестве второго аргумента функции.
   * @param {number} userId - Id сотрудника, для которого нужно осуществить проверку,
   * является ли он руководителем сотрудника, заданного во втором аргументе.
   * Если первый аргумент не указан, то проверка производится относительно текущего пользователя
   * (Id текущего авторизованного на портале пользователя равно curUserID),
   * если этот пользователь определен в окружении, в котором вызывается функция.
   * @param {number} personId - Id сотрудника, для которого нужно осуществить проверку,
   * является ли он подчиненным сотрудника, заданного в первом аргументе.
   * Если второй аргумент не указан, то проверка производится относительно поля curObject.person_id,
   * если curObject определен в окружении, в котором вызывается функция.
   * @returns {boolean} Возвращает значение true, если первый сотрудник является
   * непосредственным руководителем второго, или false - в противном случае.
   * @example
   * ```
   * // Пусть в системе имеется сотрудники Жирова Антонина Васильевна и Васильева Людмила Петровна
   * // Находим программно этих сотрудников с помощью функции tools.get_doc_by_key
   * oCollab1 = tools.get_doc_by_key("collaborator", "fullname", "Жирова Антонина Васильевна");
   *
   * // на экран выводится информация об отобранном сотруднике
   * alert("Найден сотрудник " + oCollab1.TopElem.fullname + " с идентификационным номером " + oCollab1.DocID);
   *
   * oCollab2 = tools.get_doc_by_key("collaborator", "fullname", "Васильева Людмила Петровна");
   * // на экран выводится информация об отобранном сотрудник
   * alert("Найден сотрудник " + oCollab2.TopElem.fullname + " с идентификационным номером " + oCollab2.DocID);
   *
   * // Жирова А.В. является заведующей отделом, в котором работает Васильева Л.П.
   * // Проверяем, является ли Жирова А.В. начальником Васильевой Л.П.?
   * bIs_Boss = tools.is_boss(oCollab1.DocID, oCollab2.DocID);
   * alert(bIs_Boss); // ответ - верно
   * ```
   */
  function is_boss(userId: number, personId: number): boolean;

  /**
   * Возвращает признак того, является ли пользователь непосредственным функциональным руководителем сотрудника или занимает вышестоящую руководящую должность; по умолчанию использует текущих пользователя и объект.
   * @param {number} iUserIDParam - Значение параметра `iUserIDParam`.
   * @param {number} iPersonIDParam - Значение параметра `iPersonIDParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function is_boss(iUserIDParam: number, iPersonIDParam: number): unknown;

  /**
   * Используется для работы в документообороте по заявкам в процедуре оценки.
   * Проверяет, является ли текущий пользователь непосредственным руководителем указанного подразделения.
   * Проверка производится относительно текущего пользователя
   * (Id текущего авторизованного на портале пользователя равно curUserID),
   * если он определен в окружении, в котором вызывается функция.
   * @param {number} subdivisionId - Id подразделения, для которого производится проверка.
   * @returns {boolean} Возвращает значение true, если функция выполнена успешно, или false в противном случае.
   * @example
   * ```
   * Пример 1:
   * // Пусть в системе имеется подразделение «IT отдел»
   * // Находим программно подразделение «IT отдел» с помощью функции tools.get_doc_by_key
   * oSub = tools.get_doc_by_key('subdivision', 'name', 'IT отдел');
   * // на экран выводится информация об отобранном подразделении
   * alert('Найдено подразделение ' + oSub.TopElem.name + ' с идентификационным номером ' + oSub.DocID);
   *
   * // Пусть в системе имеется заведующая отделом Жирова Антонина Васильевна
   * oCollab1 = tools.get_doc_by_key('collaborator', 'fullname', 'Жирова Антонина Васильевна');
   * // на экран выводится информация об отобранном сотруднике
   * alert('Найден сотрудник ' + oCollab1.TopElem.fullname + ' с идентификационным номером ' + oCollab1.DocID);
   *
   * // указание текущего пользователя для корректного выполнения данного примера
   * // (на практике обычно текущий пользователь определен в окружении)
   * curUserID = oCollab1.DocID;
   *
   * // Проверяем, является ли Жирова А.В. начальником указанного подразделения?
   * bRez = tools.is_boss_by_subdivision_id(oSub.DocID);
   * alert (bRez); // ответ - верно
   *
   * // Пусть в системе имеется сотрудник Васильева Людмила Петровна
   * oCollab2 = tools.get_doc_by_key('collaborator', 'fullname', 'Васильева Людмила Петровна');
   * // на экран выводится информация об отобранном сотруднике
   * alert('Найден сотрудник ' + oCollab2.TopElem.fullname + ' с идентификационным номером ' + oCollab2.DocID);
   *
   * // указание текущего пользователя для корректного выполнения данного примера
   * (на практике обычно текущий пользователь определен в окружении)
   * curUserID = oCollab2.DocID;
   *
   * // Проверяем, является ли Васильева Л.П. начальником указанного подразделения?
   * bRez2 = tools.is_boss_by_subdivision_id (oSub.DocID);
   * alert (bRez2); // ответ - неверно
   *
   * Пример 2:
   * _eval_str = _eval_str + 'tools.is_boss_by_subdivision_id(' + _condition.cur_parent_object_id + ')';
   * ```
   */
  function is_boss_by_subdivision_id(subdivisionId: number): boolean;

  /**
   * Используется для работы в документообороте по заявкам в процедуре оценки.
   * Проверяет, входит ли текущий пользователь в указанную группу.
   * Проверка производится относительно текущего пользователя
   * (Id текущего авторизованного на портале пользователя равно curUserID),
   * если этот пользователь определен в окружении, в котором вызывается функция.
   * @param {number} groupId - Id должности для которой происходит проверка.
   * @returns {boolean} Возвращает значение true, если текущий пользователь входит в указанную группу,
   * или false - в противном случае.
   * @example
   * ```
   * // Пусть в системе имеется группа «Динамическая группа»
   * // Находим программно данную группу с помощью функции tools.get_doc_by_key
   * // атрибуты групп хранятся в каталоге group; ищем группу по названию
   * oGroup = tools.get_doc_by_key ('group', 'name', 'Динамическая группа');
   * // на экран выводится информация об отобранной группе
   * alert ('Найдена группа ' + oGroup.TopElem.name + ' с идентификационным номером ' + oGroup.DocID);
   * // Пусть в системе имеется сотрудник Калинин Михаил Михайлович,
   * // который входит в состав группы «Динамическая группа»
   * oCollab1 = tools.get_doc_by_key ('collaborator', 'fullname', 'Калинин Михаил Михайлович');
   * // на экран выводится информация об отобранном сотруднике
   * alert ('Найден сотрудник ' + oCollab1.TopElem.fullname + ' с идентификационным номером ' + oCollab1.DocID);
   * // указание текущего пользователя для корректного выполнения данного примера
   * // (на практике обычно текущий пользователь определен в окружении на портале)
   * curUserID = oCollab1.DocID;
   * // Проверяем, входит ли Калинин М.М. в состав указанной группы?
   * bRez = tools.is_by_group_id (oGroup.DocID);
   * alert (bRez); // ответ - верно
   * ```
   */
  function is_by_group_id(groupId: number): boolean;

  /**
   * Возвращает признак того, содержит ли группа с заданным идентификатором текущего пользователя, либо false при ошибке.
   * @param {number} groupId - Значение параметра `groupId`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function is_by_group_id(groupId: number): unknown;

  /**
   * Используется для работы в документообороте по заявкам в процедуре оценки.
   * Проверяет, занимает ли текущий пользователь указанную должность.
   * Проверка производится относительно текущего пользователя
   * (Id текущего авторизованного на портале пользователя равно curUserID),
   * если этот пользователь определен в окружении, в котором вызывается функция.
   * @param {number} positionId - Id должности для которой происходит проверка.
   * @returns {boolean} Возвращает значение true, если текущий пользователь занимает указанную должность,
   * или false - в противном случае.
   * @example
   * ```
   * // Пусть в системе имеется должность Ведущий специалист
   * // Находим программно должность Ведущий специалист с помощью функции tools.get_doc_by_key
   * oPos = tools.get_doc_by_key ('position', 'name', 'Ведущий специалист'); // ищем должность по названию
   * // на экран выводится информация об отобранной должности
   * alert ('Найдена должность ' + oPos.TopElem.name + ' с идентификационным номером ' + oPos.DocID);
   * // Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая работает в должности «Ведущий специалист»
   * oCollab1 = tools.get_doc_by_key ('collaborator', 'fullname', 'Васильева Людмила Петровна');
   * // на экран выводится информация об отобранном сотруднике
   * alert ('Найден сотрудник ' + oCollab1.TopElem.fullname + ' с идентификационным номером ' + oCollab1.DocID);
   * // указание текущего пользователя для корректного выполнения данного примера
   * // (на практике обычно текущий пользователь определен в окружении на портале)
   * curUserID = oCollab1.DocID;
   * // Проверяем, занимает ли Васильева Л.П. указанную должность
   * bRez = tools.is_by_position_id (oPos.DocID);
   * alert (bRez); // ответ - верно
   * ```
   */
  function is_by_position_id(positionId: number): boolean;

  /**
   * Возвращает признак того, занимает ли текущий пользователь должность с заданным идентификатором, либо false при ошибке.
   * @param {number} positionId - Значение параметра `positionId`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function is_by_position_id(positionId: number): unknown;

  function is_cost_center_boss(): boolean;

  function is_func_manager(): boolean;

  /**
   * Возвращает признак того, находится ли сотрудник текущего объекта среди подчинённых текущего пользователя, либо false при ошибке.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function is_func_manager(): unknown;

  function is_main_boss(): boolean;

  /**
   * Возвращает признак того, занимает ли текущий пользователь руководящую должность верхнего уровня непосредственно над сотрудником текущего объекта в иерархии.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function is_main_boss(): unknown;

  function is_next_boss(): boolean;

  function is_person_func_manager(): boolean;

  /**
   * Возвращает признак того, указан ли текущий пользователь среди функциональных руководителей сотрудника текущего объекта, либо false при ошибке.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function is_person_func_manager(): unknown;

  function is_person_org_func_manager(): boolean;

  /**
   * Возвращает признак того, является ли текущий пользователь функциональным руководителем организации сотрудника текущего объекта, либо false при ошибке.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function is_person_org_func_manager(): unknown;

  function is_project_manager(): boolean;

  /**
   * Возвращает признак того, является ли текущий пользователь активным участником проекта текущего объекта при наличии типа руководителя project_manager.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function is_project_manager(): unknown;

  function is_real_boss(): boolean;

  /**
   * Используется для работы в документообороте по процедуре оценки и по заявкам.
   * Проверяет, является ли указанный сотрудник тем, от чьего имени подана заявка
   * или на кого создана форма оценки (где он оцениваемый).
   * @param {number} userId - Id сотрудника, для которого нужно осуществить проверку.
   * Если параметр не указан, то проверка происходит относительно текущего пользователя (curUserID),
   * если он определен в окружении, в котором вызывается функция.
   * @returns {boolean} Результат проверки.
   * @example tools.is_self_cur_user()
   */
  function is_self_cur_user(userId?: number): boolean;

  /**
   * Возвращает признак совпадения заданного идентификатора пользователя с текущим пользователем или пользователем сотрудника, используя сотрудника запроса как запасной вариант.
   * @param {number} iUserIDParam - Значение параметра `iUserIDParam`.
   * @returns {boolean} Результат выполнения.
   */
  function is_self_cur_user(iUserIDParam: number): boolean;

  function is_simple_array_field(fld: unknown): unknown;

  /**
   * Возвращает true, если форма поля содержит ровно один дочерний элемент с признаком multiple, что указывает на поле простого массива.
   * @param {XmlElem<unknown>} fldParam - Значение параметра `fldParam`.
   * @returns {number} Результат выполнения.
   */
  function is_simple_array_field(fldParam: XmlElem<unknown>): number;

  function is_statement_date(activityId: number, value: string, usl: string): boolean;

  /**
   * Формирует условие XQuery по дате из опции и значения, затем возвращает признак наличия у текущего пользователя соответствующей записи об активности.
   * @param {number} iActivityIDParam - Значение параметра `iActivityIDParam`.
   * @param {string} sValueParam - Значение параметра `sValueParam`.
   * @param {string} sUslParam - Значение параметра `sUslParam`.
   * @returns {string} Результат выполнения.
   */
  function is_statement_date(iActivityIDParam: number, sValueParam: string, sUslParam: string): string;

  /**
   * Возвращаемый результат – флаг да, если первый сотрудник, является руководителем второго сотрудника.
   * Или нет, если проверка не удалась или первый сотрудник, не является
   * непосредственным руководителем второго сотрудника.
   * @param {number} managerId - Id сотрудника, для которого нужно осуществить проверку.
   * То есть проверяется, является ли он непосредственным руководителем,
   * указанного типа, сотрудника, который указан в качестве второго параметра функции.
   * @param {number} userId - Id сотрудника руководитель, для которого проверяется.
   * @param {string} [catalogNames] - Native – поиск только непосредственного руководителя по должности.
   * Not_native руководитель любого типа группы, сотрудника, подразделения, организации.
   * @param {boolean} [bossType] - True поиск только непосредственного руководителя.
   * False поиск только функционального руководителя без признака непосредственный.
   * Если передать Id нужного типа руководителя, то будет проверятся руководитель указанного типа.
   * @param {number} [limit] - .
   * @param {string} [searchParam] - .
   * @returns {boolean | null} Результат проверки.
   */
  function is_user_boss(managerId: number, userId: number, catalogNames?: "not_native" | "native" | "collaborator" | "group" | "org" | "position" | "subdivision" | "" | null | undefined, bossType?: boolean | number, limit?: number | "", searchParam?: string | null): boolean | null;

  /**
   * Проверяет, руководит ли один пользователь другим по каталогам collaborator, group, org, position или subdivision, при необходимости фильтруя по типу руководителя; возвращает логическое значение.
   * @param {number} iManagerIdParam - Значение параметра `iManagerIdParam`.
   * @param {number} iUserIdParam - Значение параметра `iUserIdParam`.
   * @param {string} catalogNames - Значение параметра `catalogNames`.
   * @param {string} vBossType - Значение параметра `vBossType`.
   * @returns {boolean} Результат выполнения.
   */
  function is_user_boss(iManagerIdParam: number, iUserIdParam: number, catalogNames: string, vBossType: string): boolean;

  /**
   * Функция возвращает строку с полным путем из родительских элементов карты знаний (значений)
   * без классификатора. Путь разделен указанным в параметрах функции разделителем.
   * @param {number} knowledgePartId - Id значения, для которого нужно найти пусть.
   * @param {KnowledgePartDocumentTopElem} knowledgePartTopElem - TopElem значения, для которого нужно найти пусть.
   * @param {number} [depth=0] - Глубина пути, число, показывающее длину цепочки в пути.
   * Если 0, то показывается полная цепочка пути.
   * @param {number} [top=1] - Параметр направления показа пути.
   * Если 1, то путь рассчитывается "сверху", то есть от классификатора.
   * Если 0, то путь рассчитывается "снизу", то есть от текущего значения.
   * @param {string} separator - Разделитель. Если указана пустая строка "",
   * по умолчанию используется разделитель " -> ".
   * @returns {string} Строка полным путем из родительских элементов карты знаний (значений) без классификатора.
   */
  function knowledge_part_path_by_knowledge_part_id(knowledgePartId: number, knowledgePartTopElem: KnowledgePartDocumentTopElem, depth: number, top: number, separator: string): string;

  /**
   * Формирует отформатированную строку пути иерархии разделов знаний с учётом глубины, направления и разделителя.
   * @param {number} knowledgePartID - Значение параметра `knowledgePartID`.
   * @param {XmlTopElem} knowledgePartDoc - Значение параметра `knowledgePartDoc`.
   * @param {number} depth - Значение параметра `depth`.
   * @param {string} top - Значение параметра `top`.
   * @param {string} separator - Значение параметра `separator`.
   * @returns {string} Результат выполнения.
   */
  function knowledge_part_path_by_knowledge_part_id(knowledgePartID: number, knowledgePartDoc: XmlTopElem, depth: number, top: string, separator: string): string;

  function lite_call_code_library_method(libraryUrl: Object, methodName: string, arrParams: unknown[]): unknown;

  /**
   * Открывает библиотеку кода по заданному URL, вызывает указанный метод и возвращает его результат без переключения локали.
   * @param {Object} oLibraryUrlParam - Значение параметра `oLibraryUrlParam`.
   * @param {string} sMethodNameParam - Значение параметра `sMethodNameParam`.
   * @param {unknown[]} arrParams - Значение параметра `arrParams`.
   * @returns {Object} Результат выполнения.
   */
  function lite_call_code_library_method(oLibraryUrlParam: Object, sMethodNameParam: string, arrParams: unknown[]): Object;

  /**
   * Загрузка курса из архива в базу. Курс создается если его нет или обновляется существующий.
   * @param {string} fileUrl - Адрес до файла (архива) с курсом.
   * @param {string} [charset="utf-8"] - Кодировка.
   * @param {CourseDocument} [courseDocument] - Документ курса.
   * @returns {CourseDocument} Документ курса или ошибка.
   */
  function load_course(fileUrl: string, charset?: string | null | undefined | "", courseDocument?: CourseDocument | undefined | ""): CourseDocumentTopElem | "" | string | LoadCourseResult;

  /**
   * Разбирает файл курса AICC или SCORM/XML в документ курса и возвращает объект результата с кодом ошибки, сообщением и курсом.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} fileUrl - Значение параметра `fileUrl`.
   * @param {string} sFileCharsetParam - Значение параметра `sFileCharsetParam`.
   * @param {XmlDocument} docCourseParam - Значение параметра `docCourseParam`.
   * @returns {Object} Результат выполнения.
   */
  function load_course(fileUrl: string, sFileCharsetParam: string, docCourseParam: XmlDocument): Object;

  function load_share_url_server(url: string, b64encode: unknown): string | never;

  /**
   * Загружает данные из общего URL x-local, при необходимости в кодировке base64, блокируя переходы к родительским каталогам; на клиенте передаёт выполнение серверу.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sUrlParam - Значение параметра `sUrlParam`.
   * @param {boolean} b64encode - Значение параметра `b64encode`.
   * @returns {string} Результат выполнения.
   */
  function load_share_url_server(sUrlParam: string, b64encode: boolean): string;

  function load_url_data_server(filePath: string, size: number): string | never;

  /**
   * При необходимости передаёт выполнение серверу, проверяет путь x-local и возвращает данные файла или его последние байты.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sFilePathParam - Значение параметра `sFilePathParam`.
   * @param {number} iSizeParam - Значение параметра `iSizeParam`.
   * @returns {string} Результат выполнения.
   */
  function load_url_data_server(sFilePathParam: string, iSizeParam: number): string;

  function load_url_text_server(filePath: string): string | never;

  /**
   * При необходимости передаёт выполнение серверу, отклоняет небезопасные пути x-local и возвращает текст файла.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sFilePathParam - Значение параметра `sFilePathParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function load_url_text_server(sFilePathParam: string): unknown;

  function load_xhttp_ini(): void;

  /**
   * Функция для записи в лог настраиваемых сообщений с более подробной информацией и
   * возможностью указания типа ошибки и отключения отладочных сообщений,
   * когда режим отладки отключен в общих настройках.
   * @param {string} value - Строка с текстом для записи в лог.
   * @param {string} type - Строка с типом сообщения.
   * Возможные значения:
   * Ошибка - error.
   * Сообщения с таким типом всегда пишутся в основной лог системы (xhttp.log) с префиксом 'ERROR:'.
   * Если в общих настройках включен лог отладки.
   * Отладочное сообщение - debug.
   * Сообщения с таким типом всегда пишутся в лог отладки (debug.log),
   * если в общих настройках он включен с префиксом 'DEBUG: '.
   * По умолчанию тип сообщения info - Сообщения с таким типом всегда пишутся в основной лог системы (xhttp.log)
   * с префиксом ‘INFO: ‘.
   * Если в общих настройках включен лог отладки (debug.log), то и в него то же (debug.log).
   * @param {boolean} showAdditionalInfo - Флаг true – показывать дополнительную информацию по сообщению.
   * False - не показывать.
   * Дополнительная информация включает в себя mode, по которому вызывается сообщение:
   * - curObjectID;
   * - curDocID;
   * - curUserID;
   * если их можно получить.
   */
  function log(value: string, type: "error" | "debug" | "info", showAdditionalInfo: boolean): void;

  /**
   * Показывает информационные, отладочные сообщения или ошибки и при включённом отладочном журналировании записывает их в журнал событий.
   * @param {string} sTextParam - Значение параметра `sTextParam`.
   * @param {string} sMessageTypeParam - Значение параметра `sMessageTypeParam`.
   * @param {boolean} bShowAdditionalInfoParam - Значение параметра `bShowAdditionalInfoParam`.
   */
  function log(sTextParam: string, sMessageTypeParam: string, bShowAdditionalInfoParam: boolean): void;

  function log_event_server(type: string, text: string): void;

  /**
   * Записывает запись заданного типа и текста в журнал событий сервера; на клиенте передаёт выполнение серверу.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sTypeParam - Значение параметра `sTypeParam`.
   * @param {string} sTextParam - Значение параметра `sTextParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function log_event_server(sTypeParam: string, sTextParam: string): unknown;

  /**
   * Возвращает значение параметра, переданного в функцию, в зашифрованном виде.
   * Вид шифрования указывается в общих настройках (Формат хранения и проверки пароля): md5, sha1, sha1_base64.
   * @param {string} password - Строка для преобразования.
   * @param {boolean} check - Флаг, показывающий, что получаемая в результате преобразования
   * строка будет использоваться для проверки пароля (true).
   * Это значит, что их строки будут удалены открывающаяся "(" и закрывающаяся “)" скобки для
   * md5, sha1, sha1_base64. В противном случае (false),
   * будет возвращена строка в () в указанном в настройках формате md5, sha1, sha1_base64
   * или без скобок для формата Plain.
   * @returns {string} Возвращаемый результат – строка, преобразованная в соответствие с параметрами вызова.
   */
  function make_password(password: string, check: boolean): string;

  /**
   * Возвращает пароль, хешированный в настроенном формате (md5, sha1, sha256), не изменяя уже хешированные значения.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} password - Значение параметра `password`.
   * @param {string} check - Значение параметра `check`.
   * @returns {string} Результат выполнения.
   */
  function make_password(password: string, check: string): string;

  /**
   * Преобразует массив или объект в строку указанного формата (json, xml).
   * @param {object | unknown[]} array - Массив array или объект (object) для преобразования.
   * @param {string} [name=null] - Необязательный по умолчанию null.
   * Если не null, то параметр указывает название тега (для XML) или свойства (json),
   * в который будут заключены данные, полученные из array.
   * @param {boolean} [isObject=false] - Флаг true – преобразуется объект, false – преобразуется массив.
   * @param {"json" | "xml"} [format=xml] - По умолчанию XML. Возможны два значения (json, xml).
   * Задает формат возвращаемой строки.
   * @returns {string} Строка, полученная из массива или объекта.
   * @example tools.merge_text_array(_aPairs, (format == "json" ? null : namePARAM), false, format);
   */
  function merge_text_array(array: Object | unknown[], name?: string, isObject?: boolean, format?: "json" | "xml"): string;

  /**
   * Объединяет фрагменты текста в единый массив XML или JSON либо именованный объект в зависимости от флагов.
   * @param {unknown[]} aDataPARAM - Значение параметра `aDataPARAM`.
   * @param {string} sName - Значение параметра `sName`.
   * @param {boolean} bObj - Значение параметра `bObj`.
   * @param {string} sFormatPARAM - Значение параметра `sFormatPARAM`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function merge_text_array(aDataPARAM: unknown[], sName: string, bObj: boolean, sFormatPARAM: string): unknown;

  /**
   * Создает новый объект в указанном каталоге.
   * @param {string} documentName - Название каталога. Обычно указывается без s на конце.
   * @param {boolean} [isCatalog] - Флаг указывающий, что создается новая запись в каталоге (true),
   * или создается новый объект (false). Обычно передается false.
   * @returns {T} Документ объекта.
   */
  function new_doc_by_name<T = XmlDocument>(documentName: string, isCatalog?: boolean): T;

  /**
   * Нормализует имя каталога, считая имена во множественном числе каталогами, и открывает новый документ по URL соответствующей формы.
   * @param {string} sCatalogNameParam - Значение параметра `sCatalogNameParam`.
   * @param {boolean} bIsCatalogParam - Значение параметра `bIsCatalogParam`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function new_doc_by_name(sCatalogNameParam: string, bIsCatalogParam: boolean): XmlDocument;

  /**
   * Функция заполняет поля в приемнике данных на основе значений из объекта источника данных:
   * workflow_id,
   * object_name,
   * object_code,
   * object_start_date
   * Источник данных это TopElem документа источника данных.
   * Приемником может быть элемент любого уровня в xml структуре содержащий нужные поля.
   * @param {unknown} type - Строка, содержащая название типа источника объекта.
   * @param {XmlTopElem} source - Приемник данных.
   * @param {number} objectId - Id документа источника данных.
   * @param {XmlTopElem} objectDocument - TopElem источника данных.
   * @returns {boolean} True если при заполнении не произошло ошибок, False если заполнение произошло с ошибкой.
   * Если в приемнике данных не было полей для заполнения или в источнике данных не было необходимых данных,
   * функция вернет да (true).
   * @example
   * ```
   * tools.object_filling("event", curProgram, docEvent.DocID, docEvent.TopElem);
   * tools.object_filling(docRequest.TopElem.type, docRequest.TopElem, Int(program_id));
   * ```
   */
  function object_filling(type: unknown, source: XmlTopElem, objectId: number, objectDocument: XmlTopElem | null | ""): boolean;

  /**
   * Заполняет в целевом элементе идентификатор документооборота, имя объекта, код и дату начала из документа объекта; возвращает false, если документ нельзя открыть.
   * @param {string} type - Значение параметра `type`.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @param {number} objectId - Значение параметра `objectId`.
   * @param {XmlTopElem} objectDoc - Значение параметра `objectDoc`.
   * @returns {boolean} Результат выполнения.
   */
  function object_filling(type: string, source: XmlTopElem, objectId: number, objectDoc: XmlTopElem): boolean;

  function object_to_script(object: Object, warily: boolean): string;

  /**
   * Генерирует текст сценария, объявляющий свойства переданного объекта с типизированными значениями и регистрирующий их в SCOPE_WVARS.
   * @param {Object} objectPARAM - Значение параметра `objectPARAM`.
   * @param {boolean} bWarily - Значение параметра `bWarily`.
   * @returns {string} Результат выполнения.
   */
  function object_to_script(objectPARAM: Object, bWarily: boolean): string;

  /**
   * Сериализация объекта в строку/xml.
   * @param {T} arg - Объект для преобразования.
   * @param {"json" | "xml"} [formatType=xml] - По умолчанию XML. Возможны два значения (json, xml).
   * Задает формат возвращаемой строки.
   * @param {number} [maxDepth=0] - По умолчанию 0. Глубина дочерних свойств объекта,
   * до которой можно спускаться. Должна быть не больше 5.
   * @param {string} [name=null] - Параметр указывает название тега (для XML),
   * в который будут заключены данные, полученные из _vObjectPARAM. По умолчанию <value></value>.
   * @returns {string} Строка, полученная из объекта.
   * @example
   * ```
   * tools.object_to_text(RESULT, "json")
   * tools.object_to_text(_vValue, _sFormatPARAM, iDepth + 1, name);
   * ```
   */
  function object_to_text<T>(arg: T, formatType: "json" | "xml", maxDepth?: number, name?: string): string;

  /**
   * Сериализует переданный объект в текст XML или JSON с ограничением максимальной глубины рекурсии и возвращает строку.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {unknown} objectPARAM - Значение параметра `objectPARAM`.
   * @param {string} sFormatPARAM - Значение параметра `sFormatPARAM`.
   * @param {number} iMaxDepthPARAM - Значение параметра `iMaxDepthPARAM`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function object_to_text(objectPARAM: unknown, sFormatPARAM: string, iMaxDepthPARAM: number): unknown;

  /**
   * Обновляет значения ролей в системе на основе списка, указанного в параметрах.
   * @param {string} url - Путь до файла с структурой списка (List) из которого будут загружаться данные.
   * @param {XmlTopElem} list - List для обновления.
   * @returns {number} Количество обновленных элементов списка.
   * @example tools.obtain_custom_templates(UrlAppendPath("x-local://custom/", temp_doc.custom_templates_url));
   */
  function obtain_access_roles(url: string, list: unknown): number;

  /**
   * Добавляет отсутствующие роли доступа в глобальный список access_roles из переданного документа и возвращает число добавленных ролей.
   * @param {string} url - Значение параметра `url`.
   * @param {XmlTopElem} list - Значение параметра `list`.
   * @returns {number} Результат выполнения.
   */
  function obtain_access_roles(url: string, list: XmlTopElem): number;

  function obtain_custom_templates(url: string, source: unknown): number;

  /**
   * Объединяет поля и листы документа списка шаблонов с глобальным custom_templates и возвращает число обработанных списков.
   * @param {string} url - Значение параметра `url`.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @returns {number} Результат выполнения.
   */
  function obtain_custom_templates(url: string, source: XmlTopElem): number;

  /**
   * Возвращает Doc документа по указанным условиям, если документ не найден, то создает новый документ.
   * @param {string} catalogName - Название каталога для поиска объекта (без s на конце).
   * @param {string | string[]} key - Если передается строка, то это название поля в каталоге,
   * по которому происходит поиск значения, заданного oKeyValueParam.
   * Если это массив свойств, то будет создано условие поиска.
   * Где название свойства это название поля в каталоге, по которому происходит поиск значения.
   * А значение это значение указанного свойства.
   * @param {string | number} value - Значение поля в каталоге, по которому происходит поиск.
   * @returns {T} XmlDocument.
   */
  function obtain_doc_by_key<T extends XmlDocument>(catalogName: string, key: string | string[], value: string | number): T;

  /**
   * Возвращает документ, найденный по ключу, или создаёт новый документ, привязанный к базе данных, с заданными значениями ключей, если документа нет.
   * @param {string} sObjectNameParam - Значение параметра `sObjectNameParam`.
   * @param {string | string[]} oKeyParam - Значение параметра `oKeyParam`.
   * @param {string | Object} oKeyValueParam - Значение параметра `oKeyValueParam`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function obtain_doc_by_key(sObjectNameParam: string, oKeyParam: string | string[], oKeyValueParam: string | Object): XmlDocument;

  function obtain_field_from_unform_field(fldTarget: unknown, fldSource: unknown): unknown;

  /**
   * Рекурсивно копирует значения исходного поля unform в целевое поле и возвращает число изменённых полей.
   * @param {XmlElem<unknown>} fldTargetParam - Значение параметра `fldTargetParam`.
   * @param {XmlElem<unknown>} fldSourceParam - Значение параметра `fldSourceParam`.
   * @returns {number} Результат выполнения.
   */
  function obtain_field_from_unform_field(fldTargetParam: XmlElem<unknown>, fldSourceParam: XmlElem<unknown>): number;

  /**
   * Добавляет в системные lists новый список(списки) со значениям или обновляет старый.
   * @param {string} url - Путь до файла со Lists.
   * @param {string} [name] - Название списка, значения которого будут обновлены на основе данных из файла.
   * @returns {boolean} Флаг да (bool) при любом (успешном или неуспешном) выполнение действия.
   * @example tools.obtain_lists(UrlAppendPath("x-local://custom/", temp_doc.lists_url));
   */
  function obtain_lists(url: string, name?: string): boolean;

  /**
   * Объединяет дочерние элементы документа по URL с глобальными списками, добавляя только отсутствующие ключи, и возвращает true.
   * @param {string} url - Значение параметра `url`.
   * @param {string} listName - Значение параметра `listName`.
   * @returns {boolean} Результат выполнения.
   */
  function obtain_lists(url: string, listName: string): boolean;

  function obtain_simple_array_from_unform_array(fldArrTarget: unknown, fldArrSource: unknown): unknown;

  /**
   * Копирует значения из массива unform в поле простого массива, сопоставляя по первичному ключу, и возвращает число записанных полей.
   * @param {XmlElem<unknown>} fldArrTargetParam - Значение параметра `fldArrTargetParam`.
   * @param {XmlElem<unknown>} fldArrSourceParam - Значение параметра `fldArrSourceParam`.
   * @returns {number} Результат выполнения.
   */
  function obtain_simple_array_from_unform_array(fldArrTargetParam: XmlElem<unknown>, fldArrSourceParam: XmlElem<unknown>): number;

  function obtain_statistic_data(statisticRec: unknown, objectId: number, periodType: string, dateStart: Date, dateEnd: Date, virtual: boolean, forceRedo: boolean): unknown;

  /**
   * Вычисляет или восстанавливает данные статистики для объекта и периода, при необходимости виртуально или принудительно (с удалением старых записей), сообщая ход выполнения задачи.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number | XmlDocument} statisticRec - Значение параметра `statisticRec`.
   * @param {number} iObjectIdParam - Значение параметра `iObjectIdParam`.
   * @param {string} sPeriodTypeParam - Значение параметра `sPeriodTypeParam`.
   * @param {Date} dDateStartParam - Значение параметра `dDateStartParam`.
   * @param {Date} dDateEndParam - Значение параметра `dDateEndParam`.
   * @param {boolean} bVirtual - Значение параметра `bVirtual`.
   * @param {boolean} bForceRedo - Значение параметра `bForceRedo`.
   * @returns {XmlTopElem | null} Результат выполнения.
   */
  function obtain_statistic_data(statisticRec: number | XmlDocument, iObjectIdParam: number, sPeriodTypeParam: string, dDateStartParam: Date, dDateEndParam: Date, bVirtual: boolean, bForceRedo: boolean): XmlTopElem | null;

  function open_course_package_server(url: string): {
    error: 0 | 1;
    error_text: string;
    file_import: string,
    temp_url: string;
    course: unknown | null;
  };

  /**
   * Распаковывает ZIP-архив курса на сервере, находит манифест или файл .crs, загружает курс и возвращает объект результата с ошибками.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} str - Значение параметра `str`.
   * @returns {Object} Результат выполнения.
   */
  function open_course_package_server(str: string): Object;

  /**
   * Отрывает указанную версию курса в интерфейсе администратора WebTutor.
   * @param {number} courseId - Id курса.
   * @param {string} baseUrl - Путь до папок с предыдущий версией курса в файловой систем.
   * @returns {CourseDocument} Документ указанного курса.
   */
  function open_course_version(courseId: number, baseUrl: string): CourseDocument;

  /**
   * Открывает документ курса, возвращая сохранённую версию объекта в виде курса, если базовый URL отличается.
   * @param {number} iCourseIdParam - Значение параметра `iCourseIdParam`.
   * @param {string} sBaseUrlParam - Значение параметра `sBaseUrlParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function open_course_version(iCourseIdParam: number, sBaseUrlParam: string): unknown;

  /**
   * Функция открывает документ и возвращает его.
   * Если не смогла открыть, возвращает undefined.
   * @param {string | number} documentId - Id документа.
   * @returns {T | undefined} XML документ или undefined.
   */
  function open_doc<T extends XmlDocument = XmlDocument>(documentId: number): T | undefined;

  /**
   * Открывает и возвращает документ с заданным числовым идентификатором; при ошибке открытия возвращает undefined.
   * @param {number} iDocID - Значение параметра `iDocID`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function open_doc(iDocID: number): XmlDocument;

  /**
   * Возвращает сроку с тегами XML, полученную из файла путь до которого, передан в параметрах функции.
   * Вызывает функцию tools.open_str_win_ini для разбора файла.
   * @param {string} url -string с путем до файла.
   * @returns {string} Строка с путем до файла.
   */
  function open_doc_win_ini(url: string): string;

  /**
   * Загружает текст по URL и разбирает его как INI-файл.
   * @param {string} sUrlParam - Значение параметра `sUrlParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function open_doc_win_ini(sUrlParam: string): unknown;

  function open_excel(fileUrl: string): unknown;

  /**
   * Открывает файл Excel через сборку Excel и преобразует непустые строки каждого листа в XML-элемент рабочей книги.
   * @param {string} sFileUrlParam - Значение параметра `sFileUrlParam`.
   * @returns {Object} Результат выполнения.
   */
  function open_excel(sFileUrlParam: string): Object;

  /**
   * Возвращает сроку с тегами XML, полученную из строки, переданной в параметрах функции.
   * Предполагается, что в функцию передается файл со значениями параметров,
   * потому в результирующей строке будут представлены название параметра и его значение.
   * @param {string} sFileText - Строка для разбора.
   * @returns {string} Строка с тегами XML.
   * @example tools.open_str_win_ini(LoadUrlText(url))string
   */
  function open_str_win_ini(sFileText: string): string;

  /**
   * Преобразует в дату первый параметр функции.
   * Если преобразование не удалось, то возвращается второй параметр в таком виде,
   * как он передан в функцию, или undefined, если он не задан.
   * @param {string} value - Cтрока для преобразования в дату.
   * @param {T} defaultValue - Значение по умолчанию, если преобразование перового параметра не удалось.
   * @returns {Date | T} Либо дата, либо второй параметр в таком виде,
   * как он передан в функцию, или undefined, если он не задан.
   */
  function opt_date<T>(value: string, defaultValue: T): Date | T;

  /**
   * Возвращает разобранную дату либо переданное значение по умолчанию при ошибке разбора.
   * @param {Object} oDateParam - Значение параметра `oDateParam`.
   * @param {Object} oDefaultParam - Значение параметра `oDefaultParam`.
   * @returns {Object | null} Результат выполнения.
   */
  function opt_date(oDateParam: Object, oDefaultParam: Object): Object | null;

  /**
   * Заполняет пакет данными из пакета источника.
   * Возвращает количество обработанных объектов в пакете.
   * @param {DownloadPackageLogBase} packageTargetTopElem - TopElem пакета, в который нужно копировать данные.
   * @param {DownloadPackageLogBase} packageSourceTopElem - TopElem пакета, из которого нужно копировать данные.
   * @returns {number} Количество скопированных элементов.
   */
  function package_log_filling(packageTargetTopElem: DownloadPackageLogBase, packageSourceTopElem: DownloadPackageLogBase): number;

  /**
   * Очищает и заново заполняет объекты, шаблоны, списки и роли журнала пакета из источника, возвращая число элементов.
   * @param {XmlElem<unknown>} fldPackageTarget - Значение параметра `fldPackageTarget`.
   * @param {XmlElem<unknown>} fldSourceParam - Значение параметра `fldSourceParam`.
   * @returns {number} Результат выполнения.
   */
  function package_log_filling(fldPackageTarget: XmlElem<unknown>, fldSourceParam: XmlElem<unknown>): number;

  /**
   * Обрабатывает пакет с данными и загружает содержимое в базу данных.
   * @param {string} path - Путь до файла с пакетом.
   * @param {string} type - Тип загрузки.
   * Возможные значения:
   * objects и std_objects – загружает объекты в базу;
   * std_objects применяется для загрузки стандартных объектов из первоначальной установки;
   * code_update – выгружает файлы из архива в папку wtv сервера WebTutor;
   * web – выгружает файлы из архива в папку wt/web сервера WebTutor.
   * @param {XmlDocument} source - Источник данных о типах загружаемых объектов, и других параметров загрузки объектов.
   * @param {number} reportId - Id документа событий базы, в который будут записываться отчет.
   * @param {number} exchangeServerId - Id сервера обмена данным, из которого берутся параметры
   * для фильтрации данных из пакета.
   * @param {number} downloadPackageId - Id пакета, из которого нужно загрузить данные.
   * @returns {boolean} Успешная или не успешная загрузка данных.
   * В случае типа объектов objects и std_objects.
   * Возвращается форма открытого документа пакета.
   * @example
   * ```
   * var packageProcessResult = tools.package_process(Ps.local_file_url, Ps.type, Ps.Doc.DocID);
   * common_variables.len_flag = packageProcessResult !== null;
   * ```
   */
  function package_process(path: string, type: string, source: XmlDocument, reportId: number, exchangeServerId: number, downloadPackageId: number): boolean;

  /**
   * Импортирует объекты, списки, роли доступа или глобальные настройки из пакета согласно настройкам и фильтрам обмена, возвращая true.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} path - Значение параметра `path`.
   * @param {string} type - Значение параметра `type`.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @param {number} reportId - Значение параметра `reportId`.
   * @param {number} exchangeServerId - Значение параметра `exchangeServerId`.
   * @param {number} iDownloadPackageIDParam - Значение параметра `iDownloadPackageIDParam`.
   * @param {boolean} bUpdateObjects - Значение параметра `bUpdateObjects`.
   * @param {string} baseUrl - Значение параметра `baseUrl`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function package_process(path: string, type: string, source: XmlTopElem, reportId: number, exchangeServerId: number, iDownloadPackageIDParam: number, bUpdateObjects: boolean, baseUrl: string): unknown;

  function parse_email_address(address: string): unknown;

  /**
   * Разбирает строку адреса электронной почты в объект с отображаемым именем и адресом, удаляя обрамляющие кавычки.
   * @param {string} sAddressParam - Значение параметра `sAddressParam`.
   * @returns {Object} Результат выполнения.
   */
  function parse_email_address(sAddressParam: string): Object;

  function parse_throw_error(errorStr: string, error: Object): unknown;

  /**
   * Разбирает строку ошибки в новый или переданный объект результата, выделяя необязательный числовой код перед разделителем ::.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sErrorStr - Значение параметра `sErrorStr`.
   * @param {Object} oError - Значение параметра `oError`.
   * @returns {Object} Результат выполнения.
   */
  function parse_throw_error(sErrorStr: string, oError: Object): Object;

  function path_subs_filling(pathSubs: PathSubsBase, personId: number, person: CollaboratorDocument): PathSubsBase;

  /**
   * Заполняет поле кадровым путём сотрудника из filling_path_subs и возвращает это поле.
   * @param {XmlElem<unknown>} pathSubs - Значение параметра `pathSubs`.
   * @param {number} personId - Значение параметра `personId`.
   * @param {XmlTopElem} personDoc - Значение параметра `personDoc`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function path_subs_filling(pathSubs: XmlElem<unknown>, personId: number, personDoc: XmlTopElem): unknown;

  /**
   * Создает транзакцию по списанию указной суммы со счета указанной организации.
   * @param {number} orgId - Id организации.
   * @param {number} amount - Сумма списания.
   * @param {string} [comment] - Комментарий к транзакции.
   * @returns {number | null} Id транзакции или null.
   */
  function pay_courses(orgId: number, amount: number, comment?: string): number | null;

  /**
   * Записывает расходную транзакцию оплаты курса организацией, уменьшает баланс счёта и возвращает идентификатор транзакции либо null.
   * @param {number} orgId - Значение параметра `orgId`.
   * @param {number} amount - Значение параметра `amount`.
   * @param {string} comment - Значение параметра `comment`.
   * @returns {number | null} Результат выполнения.
   */
  function pay_courses(orgId: number, amount: number, comment: string): number | null;

  /**
   * Создает транзакцию зачислению суммы из указанной оплаты на счет.
   * @param {number} invoiceId - Id документа Оплат.
   * @param {InvoiceDocumentTopElem} [invoiceDocumentTopElem] - TopElem карточки оплаты.
   * @returns {InvoiceDocument | null} Документ оплаты или null.
   */
  function pay_invoice(invoiceId: number, invoiceDocumentTopElem: InvoiceDocumentTopElem): InvoiceDocument | null;

  /**
   * Создаёт платёжную транзакцию по счёту на оплату, увеличивает баланс лицевого счёта, отмечает счёт на оплату как оплаченный и возвращает его либо null при отсутствии лицевого счёта.
   * @param {number} invoiceId - Значение параметра `invoiceId`.
   * @param {XmlDocument} docInvoice - Значение параметра `docInvoice`.
   * @returns {XmlDocument | null} Результат выполнения.
   */
  function pay_invoice(invoiceId: number, docInvoice: XmlDocument): XmlDocument | null;

  /**
   * Создает транзакцию по списанию указной суммы в указанной валюте с указанного счета.
   * Используется в модуле геймификация.
   * Совершает оплату по выбранному объекту.
   * @param {number} acountId - Id объекта, к которому прикреплен счет, с которого будет происходить списание.
   * @param {string} accountCurrency - Строка валюты счета, содержащая Id валюты из списка валют в системе.
   * @param {number} sum - Сумма.
   * @param {string} comment - Комментарий к транзакции.
   * @param {number} objectId - Id объекта по которому происходит транзакция.
   * @returns {TransactionDocument} Документ созданной новой транзакции.
   * @example
   * ```
   * tools.pay_new_transaction_by_object(
   *   personID,
   *   fldBonusElem.currency_type_id,
   *   fldBonusElem.sum,
   *   "Bonus by qualification \"" + teQualification.name + "\".",
   *   qualificationID
   *);
   * ```
   */
  function pay_new_transaction_by_object(acountId: number, accountCurrency: string, sum: number, comment: string, objectId: number): TransactionDocument;

  /**
   * Находит или создаёт счёт объекта, записывает транзакцию, обновляет баланс и вызывает системное событие, возвращая документ транзакции.
   * @param {number} iAccountObjectIDParam - Значение параметра `iAccountObjectIDParam`.
   * @param {string} sAccountCurrencyParam - Значение параметра `sAccountCurrencyParam`.
   * @param {number} rSumParam - Значение параметра `rSumParam`.
   * @param {string} sCommentParam - Значение параметра `sCommentParam`.
   * @param {number | number[]} iObjectIDParam - Значение параметра `iObjectIDParam`.
   * @param {number} iPersonIDParam - Значение параметра `iPersonIDParam`.
   * @param {boolean} changeBalance - Значение параметра `changeBalance`.
   * @returns {XmlDocument | null} Результат выполнения.
   */
  function pay_new_transaction_by_object(iAccountObjectIDParam: number, sAccountCurrencyParam: string, rSumParam: number, sCommentParam: string, iObjectIDParam: number | number[], iPersonIDParam: number, changeBalance: boolean): XmlDocument | null;

  function person_hierarchy_build(aInstructions: unknown): unknown;

  /**
   * Записывает записи каталога person_hierarchys с цепочками подразделений для каждой инструкции, записывая ход выполнения; ничего не возвращает.
   *
   * Примечание исходного кода: /*PERSON_HIERARHY*\/
   * @param {unknown[]} aInstructions - Значение параметра `aInstructions`.
   */
  function person_hierarchy_build(aInstructions: unknown[]): void;

  function person_hierarchy_build_all(): unknown;

  /**
   * Перестраивает всю иерархию сотрудников под блокировкой пользовательских данных, очищая person_hierarchys и формируя записи из должностей, затем снимает блокировку.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function person_hierarchy_build_all(): unknown;

  /**
   * Функция возвращает строку с полным штатным расписанием (без должности).
   * Штатное расписание разделено указанным в параметрах функции разделителем.
   * @param {number} personId - Id сотрудника.
   * @param {CollaboratorDocumentTopElem} personDocumentTopElem - TopElem сотрудника.
   * @param {number} [depth=0] - Глубина штатного расписания, число, показывающее длину цепочки штатного расписания.
   * Если 0, то показывается полная цепочка штатного расписания.
   * @param {string} [top=0] - Параметр направления показа штатного расписания.
   * Если 0, то штатное расписание рассчитывается 'сверху', то есть от организации.
   * Если 1, то штатное расписание рассчитывается 'снизу', то есть от должности сотрудника.
   * Если в параметре _depth задано 0 (полная цепочка),
   * то параметр направления не учитывается - полная цепочка всегда строится "сверху", от организации.
   * @param {string} [separator=" -> "] - Если указана пустая строка "", по умолчанию используется разделитель "" -> "".
   * @returns {string} Строка с полным штатным расписанием (без должности).
   */
  function person_list_staff_by_person_id(personId: number, personDocumentTopElem: CollaboratorDocumentTopElem, depth: number, top: string, separator: string): string;

  /**
   * Формирует отформатированную строку кадрового пути сотрудника с учётом глубины, направления и разделителя.
   * @param {number} personID - Значение параметра `personID`.
   * @param {XmlTopElem} personDoc - Значение параметра `personDoc`.
   * @param {number} depth - Значение параметра `depth`.
   * @param {string} top - Значение параметра `top`.
   * @param {string} separator - Значение параметра `separator`.
   * @returns {string} Результат выполнения.
   */
  function person_list_staff_by_person_id(personID: number, personDoc: XmlTopElem, depth: number, top: string, separator: string): string;

  /**
   * Создает документ об оплате (invoice) для курса из заявки.
   * @param {number} orgId - Id организации.
   * @param {number} requestId - Id заявки сотрудника на курс по которой происходит списание.
   * @returns {number} Id оплаты.
   */
  function personal_pay(orgId: number, requestId: number): number;

  /**
   * Отправляет файл на указанный сервер обмена данными. Отправление идет Post по http протоколу.
   * @param {string} fileAddress - Строка с адресом до отправляемого файла.
   * @param {number} serverId - Id сервера обмена данными, для которого формируется пакет.
   * @param {number} reportId - Id документа событий базы, в который будут записываться отчет.
   */
  function post_file_to_server(fileAddress: string, serverId: number, reportId: number): void;

  /**
   * Устанавливает пакеты со стандартными объектами системы, которые входят в первоначальную поставку WebTutor.
   * При этом проверяется дата последней установки и язык системы по умолчанию.
   * @param {unknown[]} arrAddPacks - .
   * @param {string} basePathElem - .
   */
  function process_custom_packs(arrAddPacks: unknown[], basePathElem: string): void;

  /**
   * Переносит и сохраняет списки пользовательских установочных пакетов, затем обрабатывает необработанные пакеты, переключая глобальную настройку и показывая сообщения о ходе выполнения.
   * @param {unknown[]} arrAddPacksParam - Значение параметра `arrAddPacksParam`.
   * @param {string} sBasePathElem - Значение параметра `sBasePathElem`.
   */
  function process_custom_packs(arrAddPacksParam: unknown[], sBasePathElem: string): void;

  function process_package(url: string, fldPackagesValId: number, updateObjects: boolean): unknown;

  /**
   * Извлекает описание пакета, создаёт документы загружаемых пакетов для каждого выбранного элемента, загружает их и возвращает форму параметров со счётчиками.
   * @param {string} url - Значение параметра `url`.
   * @param {XmlElem<unknown>} fldPackagesValidParam - Значение параметра `fldPackagesValidParam`.
   * @param {boolean} bUpdateObjects - Значение параметра `bUpdateObjects`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function process_package(url: string, fldPackagesValidParam: XmlElem<unknown>, bUpdateObjects: boolean): XmlTopElem;

  /**
   * Возвращает сформированный на основе кода печатной формы текст печатной формы.
   * @param {number} formParam - Id печатной формы.
   * @returns {string} Текст печатной формы.
   */
  function process_print_form(formParam: number): string;

  /**
   * Обрабатывает печатную форму Word, Excel или другого формата по данным документа, возвращая созданный временный файл либо его содержимое.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string | number} oFormParam - Значение параметра `oFormParam`.
   * @param {number} iTopElemParam - Значение параметра `iTopElemParam`.
   * @param {boolean} bReturnFilename - Значение параметра `bReturnFilename`.
   * @param {XmlTopElem} topElemParam - Значение параметра `topElemParam`.
   * @returns {string} Результат выполнения.
   */
  function process_print_form(oFormParam: string | number, iTopElemParam: number, bReturnFilename: boolean, topElemParam: XmlTopElem): string;

  function process_skk(instFlag: boolean): boolean;

  function put_message_in_queue(queueName: string, commandXml: string): unknown;

  /**
   * На клиенте передаёт выполнение серверу и помещает XML команды в указанную очередь UniBridge, возвращая true.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sQueueName - Значение параметра `sQueueName`.
   * @param {string} sCommandXml - Значение параметра `sCommandXml`.
   * @returns {boolean} Результат выполнения.
   */
  function put_message_in_queue(sQueueName: string, sCommandXml: string): boolean;

  function put_url_text_server(url: string, text: string): string | never;

  /**
   * Записывает текст по URL x-local, предпочитая PutUrl из unibridge и используя PutUrlText как запасной вариант; при ошибке показывает предупреждение.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sUrlParam - Значение параметра `sUrlParam`.
   * @param {string} sTextParam - Значение параметра `sTextParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function put_url_text_server(sUrlParam: string, sTextParam: string): unknown;

  /**
   * Возвращает строку символов указанной длины, сформированную случайным образом.
   * @param {number} length - Количество символов в указанной строке. Длина возвращаемой строки.
   * @param {string} [dictionary] - Набор символов, из которого формируется строка
   * (кроме букв и цифр набор может содержать также специальные символы '!@#$%^&*_+-=?').
   * Для удобства использования набор не должен содержать символы 'o', 'O', '0', 'l', 'I'.
   * Если параметр не указан (опущен или представлен в виде пустой строки),
   * то символы берутся из набора 'qwertyuiopasdfghjklzxcvbnm1234567890'.
   * @returns {string} Cформированное строковое значение.
   * @example
   * ```
   * // строка из 12 случайных символов
   * password = tools.random_string(12);
   * // строка из 10 случайных символов (с применением строчных букв и специальных символов)
   * password = tools.random_string(10, "QWERTYUPASDFGHJKLZXCVBNMqwertyuipasdfghjkzxcvbnm123456789!@#$%^&*_+-=?");
   * docPerson.TopElem.password = tools.random_string(Ps.password_digits_num);
   * ```
   */
  function random_string(length: number, dictionary?: string): string;

  /**
   * Возвращает случайную строку заданной длины из переданного набора символов или стандартного буквенно-цифрового набора.
   * @param {number} digitNum - Значение параметра `digitNum`.
   * @param {string} dict - Значение параметра `dict`.
   * @returns {string} Результат выполнения.
   */
  function random_string(digitNum: number, dict: string): string;

  function read_directory_server(filePath: string, dir: boolean): string[] | never;

  /**
   * Перечисляет файлы каталога x-local, при необходимости оставляя только каталоги, и возвращает записи; на клиенте передаёт выполнение серверу.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sFilePathParam - Значение параметра `sFilePathParam`.
   * @param {boolean} bDirParam - Значение параметра `bDirParam`.
   * @returns {string} Результат выполнения.
   */
  function read_directory_server(sFilePathParam: string, bDirParam: boolean): string;

  /**
   * Преобразует строку в объект. Например, строку в формате json в объект. Или строку, содержащую XML, в объект.
   * @param {string} value - Строка в формате json или строка, содержащая XML.
   * @returns {T} Возвращаемый результат – полученный объекта (object).
   * @example
   * ```
   * tools.read_object(call_method("getSaveFileUrl", oParam, "json"));
   * tools.read_object(sResult);
   * ```
   */
  function read_object<T>(value: string): T;

  /**
   * Разбирает строку XML или JSON в обычный объект; для нераспознанных входных данных возвращает пустой объект.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sSomeObjectPARAM - Значение параметра `sSomeObjectPARAM`.
   * @returns {Object} Результат выполнения.
   */
  function read_object(sSomeObjectPARAM: string): Object;

  /**
   * Возвращает объект с полями id и type, полученные из json строки без ведущих и замыкающих [].
   * Если в переданной строке будет “id”:значение и “type”:значение, то вернет эти значения в возвращаемом объекте.
   * Причем значения id и type должны встречаться только один раз.
   * @param {string} value - Строка.
   * @returns {object} Объект с указными полями.
   */
  function read_selected_date(value: string): Object;

  /**
   * Разбирает строку параметров id/type в простой объект, игнорируя остальные ключи.
   * @param {string} sSomeObjectPARAM - Значение параметра `sSomeObjectPARAM`.
   * @returns {Object} Результат выполнения.
   */
  function read_selected_date(sSomeObjectPARAM: string): Object;

  /**
   * Назначает сотруднику материал библиотеки для изучения.
   * При этом создается объект просмотра материала library_material_viewing.
   * Если материал уже назначен, возвращается id назначенного ранее объекта просмотра материла.
   * @param {number} personId - Id сотрудника для назначения.
   * @param {number} libraryMaterialId - Id материала библиотеки.
   * @param {CollaboratorDocumentTopElem} collaboratorTopElem - TopElem сотрудника.
   * @param {LibraryMaterialDocumentTopElem} libraryMaterialTopElem - Id материала библиотеки.
   * @param {boolean} sendNotification - Отправляется стандартное уведомление о назначении материала библиотеки,
   * false – не отправляется.
   * @returns {LibraryMaterialViewingDocument} Документ.
   */
  function recommend_library_material_to_person(personId: number, libraryMaterialId: number, collaboratorTopElem: CollaboratorDocumentTopElem, libraryMaterialTopElem: LibraryMaterialDocumentTopElem, sendNotification: boolean,): LibraryMaterialViewingDocument;

  /**
   * Создаёт и сохраняет просмотр библиотечного материала, при необходимости уведомляет сотрудника и возвращает новый документ.
   * @param {number} iPersonIDParam - Значение параметра `iPersonIDParam`.
   * @param {number} iMaterialIDParam - Значение параметра `iMaterialIDParam`.
   * @param {XmlTopElem} tePersonParam - Значение параметра `tePersonParam`.
   * @param {XmlTopElem} teMaterialParam - Значение параметра `teMaterialParam`.
   * @param {boolean} bSendNotificationParam - Значение параметра `bSendNotificationParam`.
   * @param {number} iEducationPlanID - Значение параметра `iEducationPlanID`.
   * @param {boolean} bCommentParam - Значение параметра `bCommentParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function recommend_library_material_to_person(iPersonIDParam: number, iMaterialIDParam: number, tePersonParam: XmlTopElem, teMaterialParam: XmlTopElem, bSendNotificationParam: boolean, iEducationPlanID: number, bCommentParam: boolean): unknown;

  /**
   * Восстанавливает значение для пустых констант в системе.
   * @param {string} languageId - Id языка, для которого нужно восстановить значения констант.
   * @param {T} source - Элемент, в дочерних элементах которого происходит поиск язык по _lng_id
   * для восстановления значений.
   * @returns {number} Количество восстановленных элементов.
   */
  function recovery_empty_lng_const<T extends XmlElem<unknown, unknown>>(languageId: string, source: T): number;

  /**
   * Восстанавливает отсутствующие или пустые языковые константы из стандартного const.xml, задаёт краткий идентификатор и URL и возвращает число восстановленных констант.
   * @param {number} lngId - Значение параметра `lngId`.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @returns {number} Результат выполнения.
   */
  function recovery_empty_lng_const(lngId: number, source: XmlTopElem): number;

  /**
   * На основе указанного типа настраиваемого документа регистрирует в базе объект
   * по XMD форме документа и XMD форме каталога.
   * После вызова функции объекты настраиваемого типа документа доступны в базе.
   * @param {DocTypeDocument} docTypeDocument - Doc типа настраиваемого документа.
   * @param {number} documentId - Id типа настраиваемого документа.
   * @returns {object} Объект (object) содержащий следующие поля success
   * (успешная или неуспешная регистрация нового объекта базы),
   * object_form_url (url до XMD формы документа),
   * catalog_form_url (url до XMD формы каталога),
   * catalog_form_hash (Hash XMD формы каталога),
   * catalog (названия нового типа документов).
   */
  function register_doc_type(docTypeDocument: DocTypeDocument, documentId: number): object;

  /**
   * Генерирует и регистрирует формы XMD типа документа в базе данных, сбрасывает флаг перезапуска и возвращает объект результата.
   * @param {XmlDocument} docDocTypePARAM - Значение параметра `docDocTypePARAM`.
   * @param {number} iDocIDParam - Значение параметра `iDocIDParam`.
   * @returns {Object} Результат выполнения.
   */
  function register_doc_type(docDocTypePARAM: XmlDocument, iDocIDParam: number): Object;

  /**
   * Сравнивает hash в структуре doc_types_catalog_hashes с текущим hash объектов и обновляет его в случае изменения.
   * @param {RegisterDocTypeCatalog[]} object - Название объекта.
   * @param {boolean} serverCheck - Флаг true – запускать проверку на сервере, или false на локальной машине.
   */
  function register_doc_types_catalog(object: RegisterDocTypeCatalog[], serverCheck: boolean): void;

  /**
   * Регистрирует формы каталогов с изменившимися хешами, обновляет сохранённые хеши и при необходимости проверяет регистрацию на сервере.
   * @param {unknown[]} aCatalogsToRegPARAM - Значение параметра `aCatalogsToRegPARAM`.
   * @param {boolean} bServerCheck - Значение параметра `bServerCheck`.
   * @returns {boolean} Результат выполнения.
   */
  function register_doc_types_catalog(aCatalogsToRegPARAM: unknown[], bServerCheck: boolean): boolean;

  function register_doc_types_catalog_by_serialized_str(serializedCatalogsToReg: string, serverCheck: boolean): unknown;

  /**
   * Вычисляет сериализованные данные каталогов и передаёт регистрацию в register_doc_types_catalog.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sSerializedCatalogsToRegPARAM - Значение параметра `sSerializedCatalogsToRegPARAM`.
   * @param {boolean} bServerCheck - Значение параметра `bServerCheck`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function register_doc_types_catalog_by_serialized_str(sSerializedCatalogsToRegPARAM: string, bServerCheck: boolean): unknown;

  function remove_fetch_doc(objectId: number): unknown;

  /**
   * Ставит команду удаления загружаемого документа в очередь fetch-doc каждого работающего узла и возвращает число уведомлённых узлов.
   * @param {number} iObjectIDParam - Значение параметра `iObjectIDParam`.
   * @returns {number} Результат выполнения.
   */
  function remove_fetch_doc(iObjectIDParam: number): number;

  function repeate_learning_activation(leartning: Object): unknown;

  /**
   * Повторно активирует назначенное обучение или тестирование для того же сотрудника через активацию курса или теста, возвращая новый документ обучения.
   * @param {Object} oLeartningParam - Значение параметра `oLeartningParam`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function repeate_learning_activation(oLeartningParam: Object): XmlDocument;

  function replace_cached_doc_server(url: string): void | never;

  /**
   * Повторно открывает документ по URL x-local и заменяет его кешированную копию через ReplaceCachedDoc; на клиенте передаёт выполнение серверу.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sUrlParam - Значение параметра `sUrlParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function replace_cached_doc_server(sUrlParam: string): unknown;

  /**
   * Используется в процессе выгрузке/загрузки данных в WebTutor при интеграции с другими системами.
   * Заменяет в строке символы определенные символы в [].
   * [yyyy] меняется на 4 символа года из даты.
   * [yy] меняется на 2 последних символа года из даты.
   * [mm] и [m] меняется на месяц из даты.
   * [dd] и [d] меняется на день из даты.
   * [hh] и [h] меняется на часы из даты.
   * [mimi] и [mi] меняется на минуты из даты.
   * [ss] и [s] меняется на секунды из даты.
   * [AppDirectoryPath] меняется на функцию {@link AppDirectoryPath}().
   * @param {string} str - Стока для преобразования.
   * @param {Date} date - Дата, данные из которой берутся для замены символов в строке,
   * по умолчанию текущая дата и время.
   * @returns {string} Результирующая строка.
   */
  function replace_temlate_tags(str: string, date?: Date): string;

  /**
   * Заменяет в строке теги-заполнители даты, времени и каталога приложения и возвращает полученный текст.
   * @param {string} str - Значение параметра `str`.
   * @param {Date} date - Значение параметра `date`.
   * @returns {string} Результат выполнения.
   */
  function replace_temlate_tags(str: string, date: Date): string;

  function report_decrypt(source: unknown, qtiPath: string | null, qtiText: string | null): string;

  /**
   * Устарела; расшифровывает отчёт занятия или вызывает annals_decrypt и возвращает XML-текст журнала.
   * @param {XmlTopElem} source - Значение параметра `source`.
   * @param {string} qtiPath - Значение параметра `qtiPath`.
   * @param {string} qtiText - Значение параметра `qtiText`.
   * @returns {string} Результат выполнения.
   */
  function report_decrypt(source: XmlTopElem, qtiPath: string, qtiText: string): string;

  function request_eval_code(request: RequestDocument, requestTypeTopElem: XmlTopElem, curUserId: number, code: string, codeLibraryId: number, methodName: string): string;

  /**
   * Вызывает метод библиотеки кода типа заявки или выполняет сохранённый код с заявкой, возвращая null при недоступности либо true.
   * @param {XmlDocument} docRequest - Значение параметра `docRequest`.
   * @param {XmlTopElem} teRequestType - Значение параметра `teRequestType`.
   * @param {number} curUserID - Значение параметра `curUserID`.
   * @param {string} sCode - Значение параметра `sCode`.
   * @param {number} iCodeLibraryId - Значение параметра `iCodeLibraryId`.
   * @param {string} sMethodName - Значение параметра `sMethodName`.
   * @returns {boolean | null} Результат выполнения.
   */
  function request_eval_code(docRequest: XmlDocument, teRequestType: XmlTopElem, curUserID: number, sCode: string, iCodeLibraryId: number, sMethodName: string): boolean | null;

  /**
   * Осуществляет обработку заявки.
   * Выполняет стандартную обработку заявки по типу прикреплённого объекта
   * (если в типе заявки не снят признак «Использовать стандартную обработку для данного типа объекта»).
   * Выполняет код обработки заявки из типа заявки.
   * Меняет статус у заявки на «закрыта» и проставляет дату закрытия заявки.
   * Если стандартная обработка включает отправку уведомлений, то будут отправлены уведомления.
   * @param {number} requestId - Id заявки для обработки.
   * @param {RequestDocument} [requestDocument] - Doc заявки для обработки.
   * @returns {RequestDocument} XmlDocument обработанной и сохраненной заявки.
   */
  function request_processing(requestId: number, requestDocument?: RequestDocument): RequestDocument;

  /**
   * Записывает начало обработки, выполняет стандартную обработку по типу объекта, например мероприятия, курса, теста или материала, отправляет уведомления и возвращает документ заявки.
   * @param {number} iRequestID - Значение параметра `iRequestID`.
   * @param {XmlDocument} docRequest - Значение параметра `docRequest`.
   * @param {XmlTopElem} curUser - Значение параметра `curUser`.
   * @param {boolean} bNoLog - Значение параметра `bNoLog`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function request_processing(iRequestID: number, docRequest: XmlDocument, curUser: XmlTopElem, bNoLog: boolean): XmlDocument;

  /**
   * Осуществляет отмену (отклонение) заявки.
   * Выполняет действия по отклонению заявки по типу прикреплённого объекта
   * (если в типе заявки не снят признак «Использовать стандартную обработку для данного типа объекта»).
   * Выполняет код отмены заявки из типа заявки.
   * Меняет статус у заявки на «отмена» и проставляет дату закрытия заявки.
   * Если стандартная обработка включает отправку уведомлений, то будут отправлены уведомления.
   * @param {number} requestId - Id заявки для отмены.
   * @param {RequetDocument} request - XmlDocument заявки для обработки.
   * @param {number} personId - Id сотрудника.
   * Если будет совпадать с id подавшего заявку, то руководителю будет отправлено уведомление,
   * что подчиненный сотрудник отменил заявку.
   * @param {boolean} isSave - Флаг.
   * @param {CurUser} curUser - TopElem пользователя.
   * @returns {RequestDocument} Doc обработанной и сохраненной заявки.
   */
  function request_rejecting(requestId: number, request: RequestDocument, personId?: number, isSave?: boolean, curUser?: CurUser): RequestDocument;

  /**
   * Отклоняет заявку: устанавливает статус, записывает действие в журнал, выполняет код отклонения, отправляет уведомления и возвращает документ заявки.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iRequestID - Значение параметра `iRequestID`.
   * @param {XmlDocument} docRequest - Значение параметра `docRequest`.
   * @param {number} iPersonID - Значение параметра `iPersonID`.
   * @param {Date} dSaveParam - Значение параметра `dSaveParam`.
   * @param {XmlTopElem} curUser - Значение параметра `curUser`.
   * @param {boolean} bNoLog - Значение параметра `bNoLog`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function request_rejecting(iRequestID: number, docRequest: XmlDocument, iPersonID: number, dSaveParam: Date, curUser: XmlTopElem, bNoLog: boolean): XmlDocument;

  function resource_pic_envelope(mode: string, vParam1: unknown, vParam2: unknown, vParam3: unknown, vParam4: unknown, resourceId: number): unknown;

  /**
   * Передаёт вызовы get_pic_path, get_size или resize библиотеке кода wtv_resource и возвращает её результат.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sMode - Значение параметра `sMode`.
   * @param {unknown} vParam1 - Значение параметра `vParam1`.
   * @param {unknown} vParam2 - Значение параметра `vParam2`.
   * @param {unknown} vParam3 - Значение параметра `vParam3`.
   * @param {unknown} vParam4 - Значение параметра `vParam4`.
   * @param {number} iResourceID - Значение параметра `iResourceID`.
   * @returns {string} Результат выполнения.
   */
  function resource_pic_envelope(sMode: string, vParam1: unknown, vParam2: unknown, vParam3: unknown, vParam4: unknown, iResourceID: number): string;

  function restore_doc(objectId: number): unknown;

  /**
   * Перемещает документ из базы данных корзины обратно в базу данных по умолчанию и возвращает результат перемещения.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iObjectIDParam - Значение параметра `iObjectIDParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function restore_doc(iObjectIDParam: number): unknown;

  function safe_execution(codeSaveExecution: string, env: Object): unknown;

  /**
   * Отклоняет код с опасными функциями работы с файлами, реестром, процессами или eval, затем выполняет его с помощью SafeEval или eval.
   * @param {string} sCodeSaveExecutionParam - Значение параметра `sCodeSaveExecutionParam`.
   * @param {Object} oEnvParam - Значение параметра `oEnvParam`.
   * @returns {boolean} Результат выполнения.
   */
  function safe_execution(sCodeSaveExecutionParam: string, oEnvParam: Object): boolean;

  /**
   * Формирует форму сертификата из стандартного шаблона templates/certificate_template.html
   * на основе завершенного курса.
   * Используется в карточке завершенного курса.
   * @param {number} learningId - Id завершенного курса, для которого формируется сертификат.
   * @returns {string} Сформированный Html сертификат.
   */
  function save_certificate(learningId: number): string;

  /**
   * Вычисляет HTML-шаблон сертификата в контексте документа обучения и возвращает сформированное содержимое сертификата.
   * @param {number} learningId - Значение параметра `learningId`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function save_certificate(learningId: number): unknown;

  /**
   * Создает xms форму пользовательского интерфейса.
   * @param {number | XmlTopElem} template - Id или TopElem объекта пользовательский интерфейс.
   * @returns {boolean} Флаг true – создание успешно завершено, false создание неуспешно.
   */
  function save_custom_ui_form(template: number | XmlTopElem): boolean;

  /**
   * Записывает содержимое XMS пользовательского шаблона администратора в файл формы, удаляя существующий файл, и возвращает признак успеха.
   * @param {XmlTopElem} template - Значение параметра `template`.
   * @returns {boolean} Результат выполнения.
   */
  function save_custom_ui_form(template: XmlTopElem): boolean;

  /**
   * Отправляет уведомления участникам мероприятия (участникам мероприятия, руководителям участников,
   * преподавателям, ответственным за проведения, ответственным за подготовку) в соответствии с настройками
   * мероприятия и типом отправки (всем участникам, новым участникам, тем участникам, кому не было отправлено).
   * @param {number} eventId - Id мероприятия.
   * @param {EventDocument} eventDocument - Документ карточки мероприятия.
   * @param {string} [sendType="all"] - Задает способ отправки уведомления для участников мероприятия
   * (руководители участников, преподаватели, ответственные за проведения, ответственные за подготовку
   * не учитываются в этом параметре).
   * Значения all - отправка всем участникам,
   * new - отправка новым участникам,
   * not_send отправка тем участникам, кому не было отправлено.
   * @returns {true} Флаг true – в любом случае.
   */
  function send_event_notifications(eventId: number, eventDocument: EventDocument, sendType?: string): true;

  /**
   * Создаёт уведомления для сотрудников, руководителей, тьюторов, организаторов и преподавателей мероприятия, обновляет даты последней отправки и возвращает true.
   * @param {number} eventId - Значение параметра `eventId`.
   * @param {XmlDocument} docEvent - Значение параметра `docEvent`.
   * @param {string} sendType - Значение параметра `sendType`.
   * @returns {boolean} Результат выполнения.
   */
  function send_event_notifications(eventId: number, docEvent: XmlDocument, sendType: string): boolean;

  /**
   * Отправляет файл на указанный сервер обмена данными.
   * Отправление идет как письмо по протоколу Smtp.
   * Поэтому возможно указать тему и тело сообщения.
   * @param {string} subject - Строка с темой отправляемого сообщения.
   * @param {string} body - Строка с телом отправляемого сообщения.
   * @param {string} sendFile - Строка с адресом до отправляемого файла.
   * @param {number} serverId - Id сервера обмена данными, для которого формируется пакет.
   * @param {number} reportId - Id документа событий базы, в который будут записываться отчет.
   * @returns {string} Строка с адресом до сформированного пакета.
   * @example
   * ```
   * var subject = "data [" + serverDocument.code.Value + "]" + (type == "full" ? " - full" : "");
   * tools.send_file_to_server(subject, "Id: " + packageId, fileName, serverId, reportId);
   * ```
   */
  function send_file_to_server(subject: string, body: string, sendFile: string, serverId: number, reportId: number): string;

   /**
    * Отправляет созданное с помощью функции tools.create_notification неотправленное уведомление.
    * @param {number} activeNotificationId - Id неотправленного уведомления, которое должно быть отправлено.
    * @returns {boolean} Флаг успешной или не успешной отправки уведомления.
    */
  function send_notification(activeNotificationId: number): boolean;

  /**
   * Создает документ об оплате (invoice).
   * @param {number} orgId - Id организации.
   * @param {number} amount - Сумма списания.
   * @returns {number} Id оплаты.
   */
  function set_account(orgId: number, amount: number): number;

  function set_default_content(contentTopElem: XmlTopElem, subjectTopElem: XmlTopElem): unknown;

  /**
   * Объединяет права связей профиля субъекта и объекты с документом содержимого; ничего не возвращает.
   * @param {XmlTopElem} teContentPARAM - Значение параметра `teContentPARAM`.
   * @param {XmlTopElem} teSubjectPARAM - Значение параметра `teSubjectPARAM`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function set_default_content(teContentPARAM: XmlTopElem, teSubjectPARAM: XmlTopElem): XmlTopElem;

  /**
   * Заполняет в объекте получатель поле type_id кодом типа мероприятия, переданного в параметрах функции.
   * Если при этом в системе есть тип мероприятия с указанным кодом, то заполняется ссылка на этот тип
   * в поле event_type_id.
   * @param {XmlTopElem} target - TopElem для заполнения.
   * @param {string} eventTypeCode - Cтрока с кодом типа мероприятия.
   * @returns {number | null} Если тип мероприятия с указным кодом не найден, то null, или id этого типа мероприятия.
   */
  function set_event_type_id(target: unknown, eventTypeCode: string): number | null;

  /**
   * Устанавливает type_id целевого элемента и определяет соответствующий идентификатор типа мероприятия; при отсутствии очищает event_type_id и возвращает null.
   * @param {XmlElem<unknown>} ftTarget - Значение параметра `ftTarget`.
   * @param {string} sEventTypeParam - Значение параметра `sEventTypeParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function set_event_type_id(ftTarget: XmlElem<unknown>, sEventTypeParam: string): unknown;

  /**
   * Добавляет поля в XML структуру (например, полученную функцией tools.get_form_upload_data) из указанного объекта.
   * Применяется при создании лицензии на материалы библиотеки или формировании пакетов.
   * @param {unknown} fldFormTarget - Структура, в которую добавляют информацию.
   * @param {unknown} fldObjParam - Либо XML структура из которой берется информация.
   * @param {number} objectId - Id объекта.
   * @param {boolean} invariable - Неизвестный параметр.
   */
  function set_field_to_form_upload_data(fldFormTarget: unknown, fldObjParam: unknown, objectId: number, invariable: boolean): void;

  /**
   * Добавляет объект каталога в XML-поле формы выгрузки, встраивая данные ресурса в base64 и необязательные флаги; ничего не возвращает.
   * @param {XmlElem<unknown>} fldFormTarget - Значение параметра `fldFormTarget`.
   * @param {XmlElem<unknown>} fldObjParam - Значение параметра `fldObjParam`.
   * @param {number} oObjIDParam - Значение параметра `oObjIDParam`.
   * @param {Object} oParams - Значение параметра `oParams`.
   */
  function set_field_to_form_upload_data(fldFormTarget: XmlElem<unknown>, fldObjParam: XmlElem<unknown>, oObjIDParam: number, oParams: Object): void;

  /**
   * Разрешает установки даты сохранения (не modification_date) для объектов каталога
   * для последующего отслеживания версий объекта.
   * @param {string} catalogName - Название каталога без `s` на конце.
   * @param {boolean} isSetDate - Значение `true` размещать установку даты, `false` не разрешать.
   */
  function set_form_last_seved_data(catalogName: string, isSetDate: boolean): void;

  /**
   * Создает запись в журнале profiling.log.
   * @example
   * ```
   * // Строка вида
   * var sid = Request.Session.GetOptProperty("sid", "");
   * sIDParam + "\t" + GetCurTicks() + "\t" + sid + "\t" + Request.Url + "\t" + sTypeParam;
   * ```
   * @param {string} eventId - Cтрока идентификатор события.
   * @param {Request} req - Объект {@link Request}.
   * @param {string} message - Cтрока с текстом события.
   */
  function set_profile_log(eventId: string, req: Request, message: string): void;

  /**
   * Записывает событие журнала профилирования с идентификатором, тактами, сеансом, URL запроса и типом; ничего не возвращает.
   * @param {string} sIDParam - Значение параметра `sIDParam`.
   * @param {string} request - Значение параметра `request`.
   * @param {string} sTypeParam - Значение параметра `sTypeParam`.
   */
  function set_profile_log(sIDParam: string, request: string, sTypeParam: string): void;

  /**
   * Устанавливает тип руководителя для участника проекта.
   * @param {number} projectParticipantId - Id объекта участник проекта.
   * @param {ProjectParticipantDocument} projectParticipantDocument - Документ объекта участник проекта.
   * @param {number} bossTypeId - Id типа руководителя для присвоения участнику проекта.
   * @returns {boolean} Флаг успешного выполнения функции.
   */
  function set_project_participant_type(projectParticipantId: number, projectParticipantDocument: ProjectParticipantDocument, bossTypeId: number): boolean;

  /**
   * Устанавливает тип руководителя в документе участника проекта, сохраняет его и возвращает true либо false с предупреждением при ошибке.
   * @param {number} iProjectParticipantIDParam - Значение параметра `iProjectParticipantIDParam`.
   * @param {XmlDocument} docProjectParticipantParam - Значение параметра `docProjectParticipantParam`.
   * @param {number} iBossTypeIDParam - Значение параметра `iBossTypeIDParam`.
   * @returns {string} Результат выполнения.
   */
  function set_project_participant_type(iProjectParticipantIDParam: number, docProjectParticipantParam: XmlDocument, iBossTypeIDParam: number): string;

  function set_upgrade_locked(b: boolean): unknown;

  /**
   * Записывает флаг UpgradeLocked в конфигурацию провайдера UniBridge и обновляет кешированную переменную модуля; ничего не возвращает.
   * @param {boolean} bParam - Значение параметра `bParam`.
   */
  function set_upgrade_locked(bParam: boolean): void;

  /**
   * Функция меняет статус указанного сотрудника у поля «Временно запрещен доступ на портал».
   * Функция отправляет уведомления сотруднику об изменении доступа.
   * @param {number} personId - Id сотрудника для установки значения поля «Временно запрещен доступ на портал».
   * @param {boolean} banStatus - Доступ запрещен (true), доступ разрешен (false).
   * @param {CollaboratorDocument} [personDocument] - Document документа, для которого поменять значение в поле.
   * @param {boolean} changeOnlyForAdmin - Если значение параметра (true),
   * менять значение можно только у сотрудников не являющихся администраторами.
   * @returns {boolean} Флаг да/нет (bool) успех или неуспех смены статуса доступа на портал.
   */
  function set_web_ban(personId: number, banStatus: boolean, personDocument?: CollaboratorDocument, changeOnlyForAdmin?: boolean): boolean;

  /**
   * Устанавливает флаг запрета веб-доступа сотрудника, сохраняет документ и отправляет уведомление; возвращает false для администраторов или при неизменном статусе.
   * @param {number} personId - Значение параметра `personId`.
   * @param {boolean} status - Значение параметра `status`.
   * @param {XmlDocument} source - Значение параметра `source`.
   * @param {boolean} checkAdmin - Значение параметра `checkAdmin`.
   * @returns {boolean} Результат выполнения.
   */
  function set_web_ban(personId: number, status: boolean, source: XmlDocument, checkAdmin: boolean): boolean;

  function split_errortext(errorStr: string): unknown;

  /**
   * Разделяет текст ошибки по первому переносу строки на части для пользователя и администратора и возвращает обе.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sErrorStr - Значение параметра `sErrorStr`.
   * @returns {Object} Результат выполнения.
   */
  function split_errortext(sErrorStr: string): Object;

  /**
   * Запускает системный агент на выполнение.
   * @param {number} agentId - Id агента для запуска.
   * @param {number} [objectId] - Id объекта, над которым запускается агента (например, в списке).
   * @param {string} [objectIdsStr] - Id объектов разделенных «;», над которым запускается агента (например, в списке).
   * @param {Date} [dateStart] - Дата запуска агента, по умолчанию текущая дата.
   * @returns {boolean} Успех или неуспех выполнения агента.
   */
  function start_agent(agentId: number, objectId?: number, objectIdsStr?: string, dateStart?: Date): boolean;

  /**
   * Ставит команду агента в очередь при наличии возможности unibridge, иначе запускает и сохраняет агента; возвращает логическое значение.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} agentId - Значение параметра `agentId`.
   * @param {number} elementId - Значение параметра `elementId`.
   * @param {string} elemsIdStr - Значение параметра `elemsIdStr`.
   * @param {Date} dDateParam - Значение параметра `dDateParam`.
   * @returns {boolean} Результат выполнения.
   */
  function start_agent(agentId: number, elementId: number, elemsIdStr: string, dDateParam: Date): boolean;

  /**
   * Используется для проверки заполнения схемы импорта перед импортом сотрудников в интерфейсе администратора.
   * @param {XmlTopElem} topElem - TopElem Xml документа с настройками для загрузки.
   * @returns {string} Возвращаемый результат – строка с ошибкой или пустая строка в случае успеха.
   */
  function start_import_excel_persons(topElem: XmlTopElem): string;

  /**
   * Проверяет настройки импорта из Excel: URL файла, соответствие столбцов, поле логина, пароль и параметры организации; возвращает локализованное сообщение об ошибке или пустую строку.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {XmlTopElem} ps - Значение параметра `ps`.
   * @returns {string} Результат выполнения.
   */
  function start_import_excel_persons(ps: XmlTopElem): string;

  /**
   * Преобразует в строку числовой параметр функции.
   * Если параметр отрицательный, то строка будет начинаться со знака «-».
   * @param {number | null} number - Число для преобразования в строку.
   * @returns {string} Строка.
   */
  function str_negative_number(number: number | null): string;

  /**
   * Возвращает пустую строку для null, иначе число в виде текста со знаком минуса для отрицательных значений.
   * @param {number} iNumberParam - Значение параметра `iNumberParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function str_negative_number(iNumberParam: number): unknown;

  /**
   * Функция возвращает строку вида «часы:минуты:секунды.миллисекунды»,
   * полученную из параметра функции (миллисекунды).
   * Миллисекунды после «.» в результирующей строке передаются,
   * если их значение больше нуля.
   * @param {number} ms - Количество миллисекунд.
   * @returns {string} Строку вида «часы:минуты:секунды.миллисекунды».
   */
  function str_time_from_mseconds(ms: number): string;

  /**
   * Преобразует миллисекунды в строку HH:MM:SS, включая дробную часть миллисекунд при её наличии.
   * @param {string} mseconds - Значение параметра `mseconds`.
   * @returns {string} Результат выполнения.
   */
  function str_time_from_mseconds(mseconds: string): string;

  /**
   * Отправляет письмо об изменении в блоке, форуме, сообщении форума или документе портала,
   * всем подписанным на изменения пользователям, или конкретному пользователю.
   * @param {number} documentId - Id объекта, для рассылки изменений.
   * @param {XmlTopElem} documentDoc - TopElem объекта.
   * @param {number} personId - Id сотрудника, которому нужно отправить сообщение.
   * @returns {SubscriptionCatalogDocumentTopElem[]} Массив каталожных записей с подписками, по которым произошла рассылка.
   */
  function submit_subscriptions(documentId: number, documentDoc: XmlTopElem, personId: number): SubscriptionCatalogDocumentTopElem[];

  /**
   * На сервере находит подписки на документ, включая родительские документы, и отправляет уведомления; на клиенте вызывает серверный метод.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} documentId - Значение параметра `documentId`.
   * @param {XmlTopElem} documentDoc - Значение параметра `documentDoc`.
   * @param {number} iPersonIDParam - Значение параметра `iPersonIDParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function submit_subscriptions(documentId: number, documentDoc: XmlTopElem, iPersonIDParam: number): unknown;

  /**
   * Используется для вариантов установки WebTutor c базой данных отличной от XML.
   * Если в настройках моста связи с базой данных установлена асинхронная обработка катологов,
   * то вызов этой функции позволяет дождаться окончания синхронизации текущего каталога и потом выполнять действия.
   * Ее необходимо вызвать, если произошло изменение объекта, затрагивающее изменение каталожных полей,
   * и сразу после изменения нужно выполнить запрос к каталогу объекта.
   * Без вызова функции запрос к каталогу может вернуть старое значение каталожного поля измененного объекта,
   * если синхронизация еще не закончена. Например, меняется поле логин сотрудника с 1 на 2.
   * И сразу после сохранения идет запрос по поиску логина со значением 2.
   * Если не вызывать функцию, то искомое значение может быть не найдено.
   * Для XML базы функция ничего не делает, так что ее вызов не мешает выполнению программы.
   * Проверяет, существует ли файл по указанному пути.
   * @param {string} catalogName - Cтрока с названием каталога с `s` на конце.
   */
  function sync_catalog(catalogName: string): void;

  /**
   * Синхронизирует указанный каталог через провайдер unibridge, если база данных поддерживает синхронизацию каталогов; ничего не возвращает.
   * @param {Object} catalogName - Значение параметра `catalogName`.
   */
  function sync_catalog(catalogName: Object): void;

  function sys_db_type(): string;

  /**
   * Возвращает 'xml', если база данных не имеет базовой поддержки UniBridge, иначе 'undefined'.
   */
  function sys_db_type(): void;

  function uni_process_package(urlPackage: string, fldForm: unknown): {
    error: 0 | 1;
    error_text: string;
    progress_count: number;
    list_count: number;
  };

  /**
   * Обрабатывает ZIP через process_package или XML-файл через package_process, возвращая состояние ошибки, счётчик выполнения и количество списков.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} packageUrl - Значение параметра `packageUrl`.
   * @param {XmlElem<unknown>} fldFormParam - Значение параметра `fldFormParam`.
   * @returns {Object} Результат выполнения.
   */
  function uni_process_package(packageUrl: string, fldFormParam: XmlElem<unknown>): Object;

  function update_adding_objects<T extends XmlDocument>(object: T, objectId: number): T;

  /**
   * Создаёт, обновляет или удаляет связи статьи вики из adding_objects, очищает это поле и возвращает документ объекта.
   * @param {XmlDocument} docObject - Значение параметра `docObject`.
   * @param {number} iObjectID - Значение параметра `iObjectID`.
   * @returns {XmlDocument} Результат выполнения.
   */
  function update_adding_objects(docObject: XmlDocument, iObjectID: number): XmlDocument;

  function update_cache_code_librarys(codeLibraryId: number, paramCodeLibraryTopElem: XmlTopElem): unknown;

  /**
   * Загружает все библиотеки кода в словарь кеша или обновляет одну запись с ключом по коду и возвращает true.
   * @param {number} iCodeLibraryId - Значение параметра `iCodeLibraryId`.
   * @param {XmlTopElem} teParamCodeLibrary - Значение параметра `teParamCodeLibrary`.
   * @returns {boolean} Результат выполнения.
   */
  function update_cache_code_librarys(iCodeLibraryId: number, teParamCodeLibrary: XmlTopElem): boolean;

  /**
   * Обновляет список типов мероприятий в системе.
   * @param {boolean} updateServers - Флаг true обновлять данные на сервере
   * (если функция запускается не на сервере) или на локальной машине - false .
   * @param {XmlTopElem} target - TopElem документа, дочерний элемент event_types, которого нужно обновить.
   */
  function update_commons_event_types(updateServers: boolean, target: XmlTopElem): void;

  /**
   * Обновляет имена дочерних элементов типов мероприятий в целевом или общем объекте, удаляя устаревшие нестандартные записи и при необходимости заново кешируя локализованные документы.
   * @param {boolean} bUpdateServersParam - Значение параметра `bUpdateServersParam`.
   * @param {XmlTopElem} oTarget - Значение параметра `oTarget`.
   */
  function update_commons_event_types(bUpdateServersParam: boolean, oTarget: XmlTopElem): void;

  function update_content_access(idOrTEUser: unknown, catalog: string, idOrTEObjectId: number, canEdit: boolean, canDelete: boolean): unknown;

  /**
   * Добавляет или обновляет запись объекта в документах person_object_link сотрудника и групп, сохраняя их и при необходимости создавая персональную связь.
   * @param {number | XmlTopElem} idOrTEUserPARAM - Значение параметра `idOrTEUserPARAM`.
   * @param {string} sCatalogPARAM - Значение параметра `sCatalogPARAM`.
   * @param {number} idOrTEObjectID - Значение параметра `idOrTEObjectID`.
   * @param {boolean} bCanEditPARAM - Значение параметра `bCanEditPARAM`.
   * @param {boolean} bCanDeletePARAM - Значение параметра `bCanDeletePARAM`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function update_content_access(idOrTEUserPARAM: number | XmlTopElem, sCatalogPARAM: string, idOrTEObjectID: number, bCanEditPARAM: boolean, bCanDeletePARAM: boolean): unknown;

  /**
   * Обновляет структуру разделов активных электронных курсов.
   * @param {number} learningId - Id активного электронного курса структуру, которого нужно обновить.
   * @param {CourseDocumentTopElem} courseDocumentTopElem - TopElem электронного курса, структура которого обновляется.
   * @param {ActiveLearningDocument} [activeLearningDocument] - Doc активного электронного курса структуру, которого нужно обновить.
   * @returns {true} - Всегда возвращается true.
   */
  function update_course_parts_structure(learningId: number, courseDocumentTopElem: CourseDocumentTopElem, activeLearningDocument?: ActiveLearningDocument): true;

  /**
   * Перестраивает разделы обучения из курса, копирует названия тестов, пересчитывает балл, сохраняет документ и возвращает признак успеха.
   * @param {number} learningId - Значение параметра `learningId`.
   * @param {XmlTopElem} courseDoc - Значение параметра `courseDoc`.
   * @param {XmlDocument} docLearning - Значение параметра `docLearning`.
   * @returns {boolean} Результат выполнения.
   */
  function update_course_parts_structure(learningId: number, courseDoc: XmlTopElem, docLearning: XmlDocument): boolean;

  function update_cur_user(): CurUser | null;

  /**
   * Обновляет кешированные данные текущего пользователя по идентификатору пользователя LDS, определяет тип администратора, обновляет доступ к содержимому и возвращает корневой элемент пользователя.
   * @returns {XmlTopElem | null} Результат выполнения.
   */
  function update_cur_user(): XmlTopElem | null;

  function update_cur_user_admin_configuration(): unknown;

  /**
   * Определяет роль доступа и конфигурацию администратора текущего пользователя, кеширует её и список приложений и возвращает корневой элемент конфигурации.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function update_cur_user_admin_configuration(): unknown;

  function update_cur_user_content_access(): unknown;

  /**
   * Вычисляет и кеширует записи доступа к содержимому текущего пользователя с фильтрацией по типу администратора, затем возвращает итоговый массив.
   * @returns {unknown[]} Результат выполнения.
   */
  function update_cur_user_content_access(): unknown[];

  function update_cur_user_groups(): GroupCollaboratorCatalogDocumentTopElem[];

  /**
   * Перестраивает и кеширует список групп текущего пользователя по записям членства в группах; для анонимных пользователей возвращает пустой массив.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function update_cur_user_groups(): unknown;

  /**
   * Обновляет данные о количестве дочерних элементов в родительском комментарии к разделу портала.
   * Если задан iNewPortalDocIDParam, то дочерним записям проставляется новое значение документа портала,
   * к которому они привязаны.
   * @param {DocumentDocument} documentDocument - Doc документ записи комментария к разделу портала,
   * родителя которого нужно обновить.
   * @param {number|""|null} documentId - Id раздела портала к которому нужно привязать дочерние комментарии.
   * @returns {number} Целое число , количество дочерних элементов вниз по иерархии в определяемом doc.
   */
  function update_document_comment_entry(documentDocument: DocumentDocument, documentId: number | "" | null): number;

  /**
   * Пересчитывает число дочерних комментариев корневого комментария документа и дату последнего создания, сохраняет его, при необходимости переносит дочерние комментарии в другой документ портала и возвращает их число.
   * @param {XmlDocument} doc - Значение параметра `doc`.
   * @param {number} iNewPortalDocIDParam - Значение параметра `iNewPortalDocIDParam`.
   * @returns {number} Результат выполнения.
   */
  function update_document_comment_entry(doc: XmlDocument, iNewPortalDocIDParam: number): number;

  /**
   * Используется для обновления данных по редактированию разделов на закладке
   * «Редактирование разделов» в администраторе в разделе портала.
   * Обновления происходят во всех дочерних элементов портала.
   * @param {number} objectId - Id измененного документа.
   * @param {XmlTopElem} topElem - TopElem измененного документа.
   * @returns {number} Количество изменённых дочерних элементов.
   */
  function update_document_persons(objectId: number, topElem: XmlTopElem): number;

  /**
   * Распространяет права сотрудников на документ из родительского объекта или документа на связанные документы, обновляя документы интерфейса и возвращая счётчик.
   * @param {number} objId - Значение параметра `objId`.
   * @param {Object} objDoc - Значение параметра `objDoc`.
   * @returns {number} Результат выполнения.
   */
  function update_document_persons(objId: number, objDoc: Object): number;

  function update_file_sources(fileSourceId: number, fileSourceTopElem: XmlTopElem): unknown;

  /**
   * Загружает все источники файлов или обновляет одну запись в кеше источников файлов tools и возвращает true.
   * @param {number} iFileSourceId - Значение параметра `iFileSourceId`.
   * @param {XmlTopElem} teFileSource - Значение параметра `teFileSource`.
   * @returns {boolean} Результат выполнения.
   */
  function update_file_sources(iFileSourceId: number, teFileSource: XmlTopElem): boolean;

  /**
   * Обновляет указанный фильтр в администраторе WebTutor.
   * @param {T} sourceConditions - Структура, содержащая текущие условия поиска.
   * @param {string} catalogName - Строка с названием каталога, для которого используется фильтр.
   * @param {string} schemeId - Id фильтра для обновления.
   * @param {boolean} setFlag - Если указанный фильтр проставляется в качестве
   * выбранного для каталога в администраторе WebTutor.
   */
  function update_filter_conditions<T extends XmlElem<unknown, unknown>>(sourceConditions: T, catalogName: string, schemeId: string, setFlag: boolean): void;

  /**
   * Перестраивает условия фильтра каталога, добавляя ограничения роли доступа, группы пользователей и схемы и очищая условия квалификации; ничего не возвращает.
   * @param {XmlElem<unknown>} sourceConditions - Значение параметра `sourceConditions`.
   * @param {string} catalogName - Значение параметра `catalogName`.
   * @param {XmlElem<unknown>} schemeId - Значение параметра `schemeId`.
   * @param {boolean} setFlag - Значение параметра `setFlag`.
   */
  function update_filter_conditions(sourceConditions: XmlElem<unknown>, catalogName: string, schemeId: XmlElem<unknown>, setFlag: boolean): void;

  /**
   * Обновляет данные о количестве дочерних элементов в родительском форуме.
   * Если задан forumId, то дочерним записям форума с parentForumEntryId,
   * проставляется новое значение форума.
   * @param {ForumDocument} [forumDocument] - Необязательный, если задан parentForumId – Doc записи форума,
   * родителя которого нужно обновить.
   * @param {number} [forumId] - Необязательный – Id форума, к которому нужно привязать элементы.
   * @param {number | "" | null} [parentForumId] - Необязательный, если задан doc – Id родительской записи форума.
   * @returns {number | null} Целое число (int), количество дочерних элементов вниз по иерархии
   * в документе определяемом parentForumId.
   * @example
   * ```
   * tools.update_forum_entry(null, null, iParentForumEntryID);
   * tools.update_forum_entry(TopElem.Doc, TopElem.forum_id);
   * ```
   */
  function update_forum_entry(forumDocument: ForumDocument, forumId?: number | "" | null, parentForumId?: number | null): number;

  /**
   * Пересчитывает число дочерних записей корневой записи форума и дату последнего создания, сохраняет её, при необходимости переносит дочерние записи в новый форум и возвращает их число.
   * @param {XmlDocument} doc - Значение параметра `doc`.
   * @param {number} newForumId - Значение параметра `newForumId`.
   * @param {number} parentForumEntryId - Значение параметра `parentForumEntryId`.
   * @returns {number} Результат выполнения.
   */
  function update_forum_entry(doc: XmlDocument, newForumId: number, parentForumEntryId: number): number;

  function update_learnings_course_parts_structure(learningArray: unknown, courseDocStr: unknown): unknown;

  /**
   * Перестраивает разделы для списка обучений по курсу с записью хода выполнения, возвращая объект результата со счётчиком и ошибкой.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {unknown[]} learningArray - Значение параметра `learningArray`.
   * @param {string} courseDocStr - Значение параметра `courseDocStr`.
   * @returns {Object} Результат выполнения.
   */
  function update_learnings_course_parts_structure(learningArray: unknown[], courseDocStr: string): Object;

  function update_object_versions(version: XmlDocument, versionId: number, object: XmlDocument, personId: number, personTopElem: XmlTopElem, comment: string): void;

  /**
   * Применяет версию объекта к его объекту, архивирует старые версии, создаёт записи изменений, уведомляет подписчиков вики и сохраняет оба документа.
   * @param {XmlDocument} docVersion - Значение параметра `docVersion`.
   * @param {number} iVersionID - Значение параметра `iVersionID`.
   * @param {XmlDocument} docObject - Значение параметра `docObject`.
   * @param {number} iPersonID - Значение параметра `iPersonID`.
   * @param {XmlTopElem} tePerson - Значение параметра `tePerson`.
   * @param {string} sComment - Значение параметра `sComment`.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function update_object_versions(docVersion: XmlDocument, iVersionID: number, docObject: XmlDocument, iPersonID: number, tePerson: XmlTopElem, sComment: string): XmlTopElem;

  function update_webinar_conversation_participants(webinarSystemId: number): unknown;

  /**
   * Обновляет кешированных участников бесед вебинаров для одной системы вебинаров, обновляет кешированную коллекцию и возвращает true.
   * @param {number} iWebinarSystemId - Значение параметра `iWebinarSystemId`.
   * @returns {boolean} Результат выполнения.
   */
  function update_webinar_conversation_participants(iWebinarSystemId: number): boolean;

  function upload_begin(url: string, lenght: number): unknown;

  /**
   * Начинает загрузку частями, обнуляя целевой или временный файл, сохраняет данные сеанса на 600 секунд и возвращает его идентификатор.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sUrlParam - Значение параметра `sUrlParam`.
   * @param {number} iLenghtParam - Значение параметра `iLenghtParam`.
   * @returns {string} Результат выполнения.
   */
  function upload_begin(sUrlParam: string, iLenghtParam: number): string;

  /**
   * Загрузка данных на сервер обмена данными.
   * @param {number} serverId - Id сервера обмена данными, на который нужно отправить данные.
   * @param {Date} [date] - Дата, начиная с которой нужно грузить данные.
   * @param {string} type - Описание типа отправки.
   * @returns {string} Строка с ошибкой или пустая строка в случае успеха.
   * @example
   * ```
   * var date = tools.get_exchange_date(serverDoc.TopElem.upload, serverDoc.TopElem.last_upload_date);
   * tools.upload_data(serverId, date, "quick");
   * tools.upload_data(serverId, "", "full");
   * ```
   */
  function upload_data(serverId: number, date: Date, type: string): string;

  /**
   * Создаёт и отправляет пакет обмена данными по SMTP или HTTP, записывает каждый шаг в отчёт о действии и возвращает поля состояния.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   *
   * Примечание исходного кода: версия RGS
   * @param {number} exchangeSeverIDrParad - Значение параметра `exchangeSeverIDrParad`.
   * @param {Date} dateLimit - Значение параметра `dateLimit`.
   * @param {number} iExchangeObjectIDParam - Значение параметра `iExchangeObjectIDParam`.
   * @returns {Object} Результат выполнения.
   */
  function upload_data(exchangeSeverIDrParad: number, dateLimit: Date, iExchangeObjectIDParam: number): Object;

  function upload_end(id: string): unknown;

  /**
   * Завершает загрузку, копируя временный файл в целевое расположение, удаляя временный файл и данные сеанса; возвращает true.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sIDParam - Значение параметра `sIDParam`.
   * @returns {boolean} Результат выполнения.
   */
  function upload_end(sIDParam: string): boolean;

  function upload_range(id: string, startIndex: number, finishIndex: number, data: string): unknown;

  /**
   * Записывает декодированный фрагмент в целевой файл сеанса в заданном диапазоне байтов; возвращает true или выбрасывает исключение при потере сеанса.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sIDParam - Значение параметра `sIDParam`.
   * @param {number} iStartIndexParam - Значение параметра `iStartIndexParam`.
   * @param {number} iFinishIndexParam - Значение параметра `iFinishIndexParam`.
   * @param {string} sDataParam - Значение параметра `sDataParam`.
   * @returns {boolean} Результат выполнения.
   */
  function upload_range(sIDParam: string, iStartIndexParam: number, iFinishIndexParam: number, sDataParam: string): boolean;

  function url_file_size_server(url: string): number | never;

  /**
   * Возвращает размер файла в байтах в x-local://share/ на сервере, отклоняя другие пути.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sUrlParam - Значение параметра `sUrlParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function url_file_size_server(sUrlParam: string): unknown;

  function ValidateName(str: unknown, isVar: boolean): unknown;

  /**
   * Проверяет, что строка содержит только допустимые символы идентификатора, при необходимости требуя допустимый первый символ переменной, и возвращает логическое значение.
   * @param {string} str - Значение параметра `str`.
   * @param {boolean} isVar - Значение параметра `isVar`.
   * @returns {boolean} Результат выполнения.
   */
  function ValidateName(str: string, isVar: boolean): boolean;

  /**
   * Ожидает выполнения элемента очереди скриптов.
   * @param {number} scriptId - Id скрипта.
   * @param {boolean} isScriptDelete - Удалять объект элемент очереди скриптов после выполнения или нет.
   * @returns {object} Объект со следующими полями result – содержит объект,
   * который возвращается по результатам выполнения скрипта (если такой есть),
   * error описание ошибки, возникшей при выполнении (если ошибка обрабатывается скриптом).
   * Если элемент очереди скриптов не найден, вернет null.
   */
  function wait_script_queue(scriptId: number, isScriptDelete: boolean): {
    result: string;
    error: unknown;
  } | null;

  /**
   * Опросом очереди сценариев каждые 500 мс ожидает завершения сценария, затем возвращает результат и ошибку, при необходимости удаляя документ.
   * @param {number} iScriptIdParam - Значение параметра `iScriptIdParam`.
   * @param {boolean} bDeleteScript - Значение параметра `bDeleteScript`.
   * @returns {Object | null} Результат выполнения.
   */
  function wait_script_queue(iScriptIdParam: number, bDeleteScript: boolean): Object | null;

  /**
   * Вызов действия документооборота.
   * @param {XmlDocument} source - Документ объекта, относительно которого вызывается действие.
   * @param {string} actionCode - Код действия документооборота.
   * @param {number} workflowId - Id документооборота, действие которого выполняется.
   * @param {WorkflowDocumentTopElem} workflowDocumentTopElem - TopElem документооборота.
   * @param {number} additionalObjectId - Если действие документооборота, это печать печатной формы,
   * то можно передать в этот параметр Id объекта, который будет передаваться в печатную форму как object_id.
   * @returns {WorkflowActionProcessResult} Структура.
   */
  function workflow_action_process(source: XmlDocument, actionCode: string, workflowId: number, workflowDocumentTopElem: WorkflowDocumentTopElem, additionalObjectId: number,): WorkflowActionProcessResult;

  /**
   * Выполняет операции действия документооборота: изменение состояния, полей и статуса, добавление событий, вычисление кода и уведомления; возвращает объект результата с признаками ошибки и действия.
   * @param {XmlDocument} source - Значение параметра `source`.
   * @param {string} actionCode - Значение параметра `actionCode`.
   * @param {number} workflowId - Значение параметра `workflowId`.
   * @param {XmlTopElem} workflowDoc - Значение параметра `workflowDoc`.
   * @param {number} alterCurObjectID - Значение параметра `alterCurObjectID`.
   * @param {Date} dConditionProcess - Значение параметра `dConditionProcess`.
   * @param {Object} lPERequest - Значение параметра `lPERequest`.
   * @param {XmlTopElem} curUser - Значение параметра `curUser`.
   * @param {Object} oRemoteActionParam - Значение параметра `oRemoteActionParam`.
   * @returns {string} Результат выполнения.
   */
  function workflow_action_process(source: XmlDocument, actionCode: string, workflowId: number, workflowDoc: XmlTopElem, alterCurObjectID: number, dConditionProcess: Date, lPERequest: Object, curUser: XmlTopElem, oRemoteActionParam: Object): string;

  /**
   * Вызов эскалации по документообороту.
   * @param {XmlDocument} source - Документ объекта, относительно которого вызывается действие.
   * @param {string} escalationCode - Код эскалации документооборота.
   * @param {number} workflowId - Id документооборота.
   * @param {WorkflowDocumentTopElem} workflowTopElem - TopElem документооборота.
   * @param {number} alterObjectId - Если эскалация документооборота, это печать печатной формы,
   * то можно передать в этот параметр Id объекта, который будет передаваться в печатную форму
   * как object_id.
   * @returns {true} Флаг всегда true.
   */
  function workflow_escalation_process(source: XmlDocument, escalationCode: string, workflowId: number, workflowTopElem: WorkflowDocumentTopElem, alterObjectId: number): true;

  /**
   * Применяет операции эскалации документооборота к исходному документу в памяти, создавая уведомления и обрабатывая заявки; возвращает признак успеха.
   * @param {XmlDocument} source - Значение параметра `source`.
   * @param {string} escalationCode - Значение параметра `escalationCode`.
   * @param {number} workflowId - Значение параметра `workflowId`.
   * @param {XmlTopElem} workflowDoc - Значение параметра `workflowDoc`.
   * @param {number} alterCurObjectID - Значение параметра `alterCurObjectID`.
   * @returns {boolean} Результат выполнения.
   */
  function workflow_escalation_process(source: XmlDocument, escalationCode: string, workflowId: number, workflowDoc: XmlTopElem, alterCurObjectID: number): boolean;

  /**
   * Функция, которая формирует объект на основе переменных элемента шаблона, шаблона документа,
   * удаленного действия, выгрузки и т.д. Объект будет иметь следующий вид.
   * Свойство(property) это название переменной. Значение свойства это value переменной,
   * как оно заполнено в структуре параметров (listWVarsPARAM).
   * @param {WebVariablesBaseWvar} listWVars - Cтруктура описывающая переменные вида.
   * @returns {object} Объект, полученный на основе переменных элемента шаблона,
   * шаблона документа, удаленного действия, выгрузки и т.д.
   */
  function wvars_to_object(listWVars: WebVariablesBaseWvar): Object;

  /**
   * Преобразует переданный список wvar в объект со значениями, приведёнными согласно типу каждой wvar.
   * @param {unknown[]} listWVarsPARAM - Значение параметра `listWVarsPARAM`.
   * @returns {Object} Результат выполнения.
   */
  function wvars_to_object(listWVarsPARAM: unknown[]): Object;

  /**
   * Функция, которая формирует строку на основе переменных элемента шаблона, шаблона документа,
   * удаленного действия, выгрузки и т.д.
   * Эту строку затем используют в выражении типа eval вместе с кодом элемента шаблона,
   * шаблона документа, удаленного действия, выгрузки и т.д. Таким образом,
   * инициализируются переменные нужного типа и им присваиваются значения,
   * которые затем видны в коде элемента шаблона, шаблона документа, удаленного действия, выгрузки и т.д.
   * @param {WebVariablesBaseWvar} listWVars - Структура описывающая переменные вида.
   * @param {boolean} warily - Необязательный по умолчанию false.
   * Если передается true, то при вычислении первоначального значение переменной,
   * код будет помещен в `try { } catch { }`. То есть если произойдет ошибка вычисления,
   * то код не прервет свое выполнение, а переменной будет присвоено значение
   * по умолчанию соответствующего типа.
   * @returns {string} Строка, полученная на основе переменных элемента шаблона,
   * шаблона документа, удаленного действия, выгрузки и т.д..
   */
  function wvars_to_script(listWVars: WebVariablesBaseWvar, warily: boolean): string;

  /**
   * Генерирует текст сценария, объявляющий переданные wvars с типизированными значениями и регистрирующий их в SCOPE_WVARS.
   * @param {unknown[]} listWVarsPARAM - Значение параметра `listWVarsPARAM`.
   * @param {boolean} bWarily - Значение параметра `bWarily`.
   * @returns {string} Результат выполнения.
   */
  function wvars_to_script(listWVarsPARAM: unknown[], bWarily: boolean): string;

  function xml_header(): "<?xml version=\"1.0\" encoding=\"utf-8\"?>";

  /**
   * Возвращает стандартную строку декларации XML, используемую при формировании XML-документов.
   * @returns {string} Результат выполнения.
   */
  function xml_header(): string;

  /**
   * Оптимизированная функция выполнения длинных запросов.
   * Ее предпочтительнее использовать, кода нужно сделать, например запрос с иерархией.
   * И всегда использовать вместо CatalogHierSubset используя функцию IsHierChild.
   * @param {string} command - Cтрока для выполнения запроса.
   * @returns {T[]} Результат выполнения запроса XQuery по оптимизированной строке sQueryParam.
   * @example
   * ```
   * docArray = tools.xquery('for $elem in documents where IsHierChild($elem/id, ' + _main_doc.document_id + ' )
   * order by $elem/Hier() return $elem/id');
   * xarrSubdivisions = tools.xquery('for $elem in subdivisions where IsHierChild($elem/id, ' + iLastDepID + ' )
   * order by $elem/Hier() return $elem/id');
   * ```
   */
  function xquery<T>(command: string): T[];

  /**
   * Нормализует текст запроса, переписывает конструкции hierarchy, contains и distinct для базы данных, затем выполняет XQuery и возвращает результаты.
   * @param {string} sQueryParam - Значение параметра `sQueryParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function xquery(sQueryParam: string): unknown;

  /**
   * Создает архив по указанному адресу из файлов в папке источнике.
   * Все папки в адресе должны существовать до начала распаковки, как в источнике, так и в получателе.
   * @param {string} archivePath - Полный путь до файла получателя. Включая название файла.
   * @param {string} contentPath - Полный путь до папки источника с файлами или путь до файла,
   * который нужно добавить (в этом случае нужно указать contentDirectoryPath).
   * @param {string} contentDirectoryPath - Если все файлы лежат в одной папке - полный путь
   * до папки источника с файлами.
   */
  function zip_create(archivePath: string, contentPath: string, contentDirectoryPath?: string): void;

  /**
   * Создаёт ZIP-архив из файла, каталога или набора файлов, используя сборку .NET Zip на сервере.
   * @param {string} sArchivePathPARAM - Значение параметра `sArchivePathPARAM`.
   * @param {string} sContentPathPARAM - Значение параметра `sContentPathPARAM`.
   * @param {string} sContentDirPathPARAM - Значение параметра `sContentDirPathPARAM`.
   */
  function zip_create(sArchivePathPARAM: string, sContentPathPARAM: string, sContentDirPathPARAM: string): void;

  /**
   * Распаковывает архив из адреса источника данных по адресу получателя данных.
   * Все папки в адресе должны существовать до начала распаковки, как в источнике, так и в получателе.
   * @param {string} sourcePath - Полный путь до файла источника. Включая название файла.
   * @param {string} destinationPath - Полный путь до файла получателя.
   */
  function zip_extract(sourcePath: string, destinationPath: string): void;

  /**
   * Распаковывает ZIP-архив в целевой каталог, используя провайдер хранения данных на серверах с такой возможностью.
   * @param {string} sSourceDirPARAM - Значение параметра `sSourceDirPARAM`.
   * @param {string} sDestDirPARAM - Значение параметра `sDestDirPARAM`.
   * @returns {number} Результат выполнения.
   */
  function zip_extract(sSourceDirPARAM: string, sDestDirPARAM: string): number;

  function zip_extract_server(sourceUrl: string, targetUrl: string): void | never;

  /**
   * Распаковывает ZIP-архив из исходного URL x-local в целевой URL x-local на сервере; ничего не возвращает.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {string} sSourceUrlParam - Значение параметра `sSourceUrlParam`.
   * @param {string} sTargetUrlParam - Значение параметра `sTargetUrlParam`.
   * @returns {unknown} Тип не установлен статически; указан `unknown`.
   */
  function zip_extract_server(sSourceUrlParam: string, sTargetUrlParam: string): unknown;
}
