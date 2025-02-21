declare namespace tools {
  let lds_address: XmlElem<string | null>;

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
   * @param {number} [limit] - Ограничение на количество выбираемых результатов.
   * @param {string} [searchParam] - Условие фильтрации where xquery или по object_name.
   * @returns {boolean|null} Результат проверки.
   */
  function is_user_boss(managerId: number, userId: number, catalogNames?: "not_native" | "native" | "collaborator" | "group" | "org" | "position" | "subdivision" | "" | null | undefined, bossType?: boolean | number, limit?: number | "", searchParam?: string | null): boolean | null;

  /**
   * Используется для работы в документообороте по процедуре оценки и по заявкам.
   * Проверяет, является ли указанный сотрудник тем, от чьего имени подана заявка
   * или на кого создана форма оценки (где он оцениваемый).
   * @param {number} userId - Id сотрудника, для которого нужно осуществить проверку.
   * Если параметр не указан, то проверка происходит относительно текущего пользователя (curUserID),
   * если он определен в окружении, в котором вызывается функция.
   * @returns {boolean} Результат проверки.
   * @example
   * ```
   * tools.is_self_cur_user()
   * ```
   */
  function is_self_cur_user(userId?: number): boolean;

  function is_main_boss(): unknown;

  function is_real_boss(): unknown;

  function is_cost_center_boss(): unknown;

  function is_next_boss(): unknown;

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

  function is_person_func_manager(): unknown;

  function is_person_org_func_manager(): unknown;

  function is_func_manager(): unknown;

  function is_project_manager(): unknown;

  function is_statement_date(iActivityIDParam: unknown, sValueParam: unknown, sUslParam: unknown): unknown;


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
   * @param {MsPersonSdInnerBase} xmlElemWithSdNode - Элемент XML, имеющий дочерний элемент sd
   * (если атрибут ps указан, то его дочерний элемент sd очищается).
   * @param {unknown} doc - Неиспользуемый параметр.
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно, или false в противном случае.
   * @example
   * ```
   * tools.common_clear(_cur_catalog_name, TopElem, Ps);
   * tools.common_clear("collaborator", Child(0).Parent, person_id);
   * ```
   */
  function common_clear(type: "subdivision" | "org" | "position" | "event" | "education_org" | "course" | "assessment" | "request_type" | "task_type" | "response_type" | "collaborator" | "object" | "education_type", source: XmlTopElem, xmlElemWithSdNode?: MsPersonSdInnerBase, doc?: unknown): boolean;

  function check_course_finish_condition(learningDoc: unknown, courseDoc: unknown): unknown;

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
   * Функция завершает указанный активный тест и создает карточку завершенного теста
   * (карточка незавершенного теста при этом не удаляется, и тест остается в списке назначенных).
   * Если необходимо полное завершение, то карточку незавершенного теста нужно удалять дополнительно
   * (с помощью отдельного кода вне данной функции).
   * @param {number} learningId - Id активного теста, который необходимо завершить.
   * @param {ActiveTestLearningDocumentTopElem} activeTestLearningDocumentTopElem - TopElem активного теста,
   * который необходимо завершить.
   * @param {AssessmentDocumentTopElem} assessmentDocumentTopElem - TopElem теста, который необходимо завершить.
   * @param {number} iPersonIDParam - Id сотрудника.
   * @param {boolean} bFinishTest - Флаг завершение теста.
   * @returns {TestLearningDocument} Документ завершенного теста.
   */
  function active_test_learning_finish(learningId: number, activeTestLearningDocumentTopElem?: ActiveTestLearningDocumentTopElem, assessmentDocumentTopElem?: AssessmentDocumentTopElem, iPersonIDParam?: number, bFinishTest?: unknown): TestLearningDocument;

  function active_test_learning_finish_link(activeLearningID: number, learningID: number, teLearning: TestLearningDocumentTopElem, teAssessment: AssessmentDocumentTopElem): unknown;

  /**
   * Функция завершает указанную попытку для теста и создает карточку завершенного теста.
   * @param {number} _learning_id - Id активного теста, попытку которого необходимо завершить.
   * @param {string} _learning_code - Код раздела теста, который нужно завершить.
   * @param {AssessmentDocument} _assessment_doc - `TopElem` теста, который необходимо завершить.
   * @param {boolean} _flag_create_learning - Возвращает значение, показывающее,
   * создавать или не создавать запись завершенного теста:
   * - `true` – создавать запись завершенного теста;
   * - `false` – не создавать запись.
   * @param {ActiveTestLearningDocument} docActiveLearning - Документ активного теста, который необходимо завершить.
   * @returns {boolean} Результат выполнения функции.
   */
  function active_test_learning_finish_attempt(_learning_id: number, _learning_code?: string, _assessment_doc?: AssessmentDocument, _flag_create_learning?: boolean, docActiveLearning?: ActiveTestLearningDocument): boolean;

  function core_decrypt(_core: unknown, _qti_path: unknown, _qti_text: unknown, _learning_doc: unknown): unknown;

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
   * требованиям к объекту XmlElem. В противном случае функция может выдать ошибку:
   * «Unknown method: GetXml()».
   * Соответствие аргумента структуре annals (результатам тестирования) данная функция не проверяет.
   * @param {XmlElem<AnnalsObjectsBase>} annals - Данные для преобразования.
   * @returns {string} Строка в формате XML со стандартным заголовком. Результат действия функции.
   */
  function get_annals_text_from_annals(annals: XmlElem<AnnalsObjectsBase["objects"]>): string;

  /**
   * Возвращает путь до файла со структурой теста/курса в формате qti.
   * @param {number} objectId - Id карточки теста/курса.
   * @param {string} partCode - Код модуля электронного теста или курса, для которого нужно определить путь.
   * @returns {string} Путь до файла со структурой теста/курса в формате qti.
   */
  function get_qti_path(objectId: number, partCode: string): string;

  /**
   * Возвращает путь до файла со структурой теста/курса в формате qti.
   * @param {AssessmentDocumentTopElem | CourseDocumentTopElem} topElem - TopElem карточки теста/курса.
   * @param {string} partCode - Код модуля электронного теста или курса, для которого нужно определить путь.
   * @returns {string} Путь до файла со структурой теста/курса в формате qti.
   */
  function get_qti_path(topElem: AssessmentDocumentTopElem | CourseDocumentTopElem, partCode: string): string;

  function xml_header(): unknown;

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

  function report_decrypt(_source: unknown, _qti_path: unknown, _qti_text: unknown): unknown;

  function fill_annals_timings(fldTarget: unknown, fldSource: unknown): unknown;

  function get_data_answers(fldDataItem: unknown): unknown;

  function get_item_points(fldQuestion: unknown): unknown;

  /**
   * Заполняет структуру annals результатами теста в XML-формате.
   * @param {XmlElem<AnnalsObjectBase>} annals - Структура для заполнения.
   * @param {string} fileQtiPath - Путь до файла со структурой теста в формате qti.
   * @param {string} qtiStructire - Структура теста в формате qti.
   * @param {XmlElem<AnnalsObjectBase>} annalsSource - Тест-источник.
   * @param {boolean} [noSendCorrectAnswer=true] - Аргумент, указывающий, что не нужно записывать правильный ответ
   * в результирующую структуру (true – не нужно записывать правильный ответ,
   * false – нужно записывать правильный ответ).
   */
  function fill_annals_text(annals: XmlElem<AnnalsObjectsBase["objects"]>, fileQtiPath: string, qtiStructire: string, annalsSource: XmlElem<AnnalsObjectsBase["objects"]>, noSendCorrectAnswer: boolean): void;

  /**
   * Заполняет структуру annals результатами теста в XML-формате.
   * @param {XmlElem<AnnalsObjectBase>} annals - Структура для заполнения.
   * @param {string} qtiPath - Путь до файла со структурой теста в формате qti.
   * @param {string} qtiText - Структура теста в формате qti.
   * @param {AssessmentDocumentTopElem} assessmentDocumentTopElem - TopElem карточки теста.
   * @param {XmlTopElem} annalsTarget - TopElem открытого документа структуры для заполнения.
   * @returns {string} Строковое выражение заполненной XML-структуры с результатами тестирования, без отступов.
   */
  function get_annals_text(annals: unknown, qtiPath: unknown, qtiText: unknown, assessmentDocumentTopElem: AssessmentDocumentTopElem, annalsTarget: XmlTopElem): string;

  /**
   * Закрывает HTTP-запрос к странице.
   * При закрытии запроса вызывается код, обрабатывающий ее закрытие.
   * В самой функции статус запроса не меняется.
   * @param {number} requestId - Id HTTP-запроса, который необходимо закрыть.
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно, или false в противном случае.
   */
  function close_request(requestId: number): boolean;

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
   * Добавляет в системные lists новый список(списки) со значениям или обновляет старый.
   * @param {string} url - Путь до файла со Lists.
   * @param {string} [name] - Название списка, значения которого будут обновлены на основе данных из файла.
   * @returns {boolean} Флаг да (bool) при любом (успешном или неуспешном) выполнение действия.
   * @example
   * ```
   * tools.obtain_lists(UrlAppendPath("x-local://custom/", temp_doc.lists_url));
   * ```
   */
  function obtain_lists(url: string, name?: string): boolean;

  function event_finish(eventId: number, eventDocument?: EventDocument): unknown;

  function event_start(eventId: number, eventDocument: EventDocument, oScreenParam: unknown): unknown;

  /**
   * Проверяет разрешение на доступ к указанному объекту для указанного пользователя.
   * Проверка идет по уровню доступа, роли доступа, группам доступа и условиям доступа,
   * если в карточке объекта есть соответствующие настройки.
   * @param {XmlTopElem} TopElem - TopElem объекта, доступ к которому нужно проверить.
   * @param {number} userId - Id сотрудника, для которого нужно проверить доступ.
   * @returns {boolean} Возвращает значение, показывающее,
   * разрешен ли сотруднику доступ к объекту (true – доступ разрешен, false – доступ запрещен).
   */
  function check_access(TopElem: XmlTopElem, userId: number): boolean;

  /**
   * Возвращает путь до xmd формы каталога или объекта каталога.
   * @param {string} catalogName - Название каталога (без s на конце).
   * @param {boolean} isCatalog - Флаг указывающий, нужно возвращать форму каталога (true), или форму объекта (false).
   * @returns {string} Пусть до формы (string) начинающийся с «x-local:».
   */
  function get_object_form_url(catalogName: string, isCatalog: unknown): string;

  function get_screen_form_url(catalogName: string): unknown;

  /**
   * Создает новый объект в указанном каталоге.
   * @param {string} documentName - Название каталога. Обычно указывается без s на конце.
   * @param {boolean} [isCatalog] - Флаг указывающий, что создается новая запись в каталоге (true),
   * или создается новый объект (false). Обычно передается false.
   * @returns {T} Документ объекта.
   */
  function new_doc_by_name<T = XmlDocument>(documentName: string, isCatalog?: boolean): T;

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

  function create_list_package(sResultUrlParam: unknown, fldPackage: unknown): unknown;

  /**
   * Возвращает объект документа, соответствующего указанным условиям, или null, если документ не найден.
   * @param {string} catalog - Название каталога для поиска объекта (без s на конце).
   * @param {string|string[]} key - Строка или Массив.
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
   * Возвращает Doc документа по указанным условиям, если документ не найден, то создает новый документ.
   * @param {string} catalogName - Название каталога для поиска объекта (без s на конце).
   * @param {string|string[]} key - Если передается строка, то это название поля в каталоге,
   * по которому происходит поиск значения, заданного oKeyValueParam.
   * Если это массив свойств, то будет создано условие поиска.
   * Где название свойства это название поля в каталоге, по которому происходит поиск значения.
   * А значение это значение указанного свойства.
   * @param {string|number} value - Значение поля в каталоге, по которому происходит поиск.
   * @returns {T} XmlDocument.
   */
  function obtain_doc_by_key<T extends XmlDocument>(catalogName: unknown, key: unknown, value: string|number): T;

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
   * Заполняет карточку теста и создает вопросы к нему на основе qti-описания теста.
   * @param {number} assessmentId - Id теста.
   * @param {AssessmentDocumentTopElem} assessmentDocumentTopElem - TopElem теста.
   * @param {string} qti - Структура теста в формате qti.
   */
  function assessment_filling_from_qti(assessmentId: number, assessmentDocumentTopElem: AssessmentDocumentTopElem, qti: string): void;

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

  function create_condition_field(fldCondition: unknown, elemName: string): unknown;

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
   * Обновляет значения текущих настраиваемых полей в системе на основе списка, указанного в параметрах.
   * @param {string} url - Путь до файла с структурой списка (List) из которого будут загружаться данные.
   * @param {XmlTopElem} source - List для обновления.
   * @returns {number} Количество обновленных элементов списка.
   * @example
   * ```
   * count = tools.obtain_custom_templates(UrlAppendPath("x-local://custom/", temp_doc.custom_templates_url));
   * ```
   */
  function obtain_custom_templates(url: unknown, source: unknown): unknown;

  /**
   * Обновляет значения ролей в системе на основе списка, указанного в параметрах.
   * @param {string} url - Путь до файла с структурой списка (List) из которого будут загружаться данные.
   * @param {XmlTopElem} list - List для обновления.
   * @returns {number} Количество обновленных элементов списка.
   * @example
   * ```
   * count = tools.obtain_custom_templates(UrlAppendPath("x-local://custom/", temp_doc.custom_templates_url));
   * ```
   */
  function obtain_access_roles(url: string, list: XmlTopElem): number;

  /**
   * Импортирует курс в систему из указанного файла.
   * Файл должен быть сформирован предварительно и соответствовать определенным стандартам (например, SCORM 2004).
   * @param {string} filepath - Путь до файла.
   * @returns {boolean} Результат true в любом случае.
   */
  function import_course(filepath: string): boolean;

  function process_skk(_inst_flag: unknown): unknown;

  /**
   * Возвращает значение параметра, переданного в функцию, в зашифрованном виде.
   * Вид шифрования указывается в общих настройках (Формат хранения и проверки пароля): md5, sha1, sha1_base64.
   * @param {string} password - Строка для преобразования.
   * @param {boolean} flag - Флаг, показывающий, что получаемая в результате преобразования
   * строка будет использоваться для проверки пароля (true).
   * Это значит, что их строки будут удалены открывающаяся "(" и закрывающаяся “)" скобки для
   * md5, sha1, sha1_base64. В противном случае (false),
   * будет возвращена строка в () в указанном в настройках формате md5, sha1, sha1_base64
   * или без скобок для формата Plain.
   * @returns {string} Возвращаемый результат – строка (string), преобразованная в соответствие с параметрами вызова.
   */
  function make_password(password: string, flag: boolean): string;

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
   * @returns {string} Строка вида 'номер версии (дата модификации версии)'.
   * @example
   * ```
   * tools.get_version("last");
   * ```
   */
  function get_version(type: "wtv" | "qti" | "assessment" | "last"): string;

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

  function get_order_query(sOrderParam: unknown, sDirParam: unknown): unknown;

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
   * @returns {string} Строка для использования в запросе XQuery на основе указанных параметров.
   */
  function create_xquery<T extends XmElem<unknown, unknown>>(catalog: string, xqueryQual: string, filterXQuery: string, ftFilter: string, order: string, orderDirection: string, isHier?: boolean, foreignField?: string, oColumnsParam?: T): unknown;

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

  function update_object_versions(docVersion: unknown, iVersionID: unknown, docObject: unknown, personId: number, tePerson: unknown, sComment: unknown): unknown;

  function update_adding_objects(docObject: unknown, iObjectID: unknown): unknown;

  /**
   * Осуществляет отмену (отклонение) заявки.
   * Выполняет действия по отклонению заявки по типу прикреплённого объекта
   * (если в типе заявки не снят признак «Использовать стандартную обработку для данного типа объекта»).
   * Выполняет код отмены заявки из типа заявки.
   * Меняет статус у заявки на «отмена» и проставляет дату закрытия заявки.
   * Если стандартная обработка включает отправку уведомлений, то будут отправлены уведомления.
   * @param {number} objectId - Id заявки для отмены.
   * @param {RequetDocument} objectDocument - XmlDocument заявки для обработки.
   * @param {number} personId - Id сотрудника.
   * Если будет совпадать с id подавшего заявку, то руководителю будет отправлено уведомление,
   * что подчиненный сотрудник отменил заявку.
   * @param {boolean} isSave - Флаг.
   * @returns {RequestDocument} Doc обработанной и сохраненной заявки.
   */
  function request_rejecting(objectId: number, objectDocument: RequestDocument, personId?: number, isSave?: boolean): RequestDocument;

  /**
   * Добавляет участника в мероприятие.
   * @param {number} userId - Id сотрудника, добавляемого в мероприятие.
   * @param {number} eventId - Id мероприятия, в которое добавляется сотрудник.
   * @param {CollaboratorDocumentTopElem} userTopElem - `TopElem` сотрудника.
   * @param {EventDocument} eventDocument - Документ мероприятия.
   * @param {number} educationPlanId - Id плана обучения добавляемого сотрудника.
   * Если аргумент указан, то ссылка на план сохранится в результатах мероприятия сотрудника.
   * @param {number} requestPersonId - Id лица, подавшего заявку на добавление сотрудника в мероприятие.
   * Если аргумент указан, то ссылка на лицо, подавшее заявку, сохранится в результатах мероприятия сотрудника.
   * @param {number} requestId - Id заявки на включение сотрудника в состав участников мероприятия.
   * Если аргумент указан, то ссылка на заявку сохранится в результате мероприятия сотрудника.
   * @returns {EventDocument|null} Документ мероприятия, к которому добавлялся сотрудник
   * (если сотрудник ранее не был добавлен в данное мероприятие),
   * или `null` (если сотрудник ранее уже был добавлен).
   * @example
   * ```
   * docEvent = tools.add_person_to_event (Int(sUserId), Int(sRoomId));
   * tools.add_person_to_event(_source.TopElem.person_id, _source.TopElem.object_id, null, docObject);
   * tools.add_person_to_event(fldPersonElem.PrimaryKey, docEvent.DocID, null, docEvent, null, catRequest.PrimaryKey);
   * ```
   */
  function add_person_to_event(userId: number, eventId: number, userTopElem?: CollaboratorDocumentTopElem, eventDocument?: EventDocument, educationPlanId?: number, requestPersonId?: number, requestId?: number): EventDocument | null;

  /**
   * Удаляет участника (сотрудника) из мероприятия.
   * @param {number} personId - Id сотрудника, удаляемого из мероприятия.
   * @param {number} eventId - Id мероприятия, из которого удаляется сотрудник.
   * @param {EventDocument} [eventDocument] - Документ мероприятия, из которого удаляется сотрудник.
   * @param {boolean} [isSave=true] - Аргумент, определяющий необходимость сохранения карточки
   * мероприятия после удаления сотрудника (true – сохранять карточку мероприятия, false – не сохранять).
   * @returns {EventDocument} Документ мероприятия, из которого удален сотрудник.
   */
  function del_person_from_event(personId: number, eventId: number, eventDocument?: EventDocument, isSave?: boolean): unknown;

  /**
   * Восстанавливает значение для пустых констант в системе.
   * @param {string} languageId - Id языка, для которого нужно восстановить значения констант.
   * @param {T} source - Элемент, в дочерних элементах которого происходит поиск язык по _lng_id
   * для восстановления значений.
   * @returns {number} Количество восстановленных элементов.
   */
  function recovery_empty_lng_const<T extends XmlElem<unknown, unknown>>(languageId: string, source: T): number;

  /**
   * Запускает системный агент на выполнение.
   * @param {number} agentId - Id агента для запуска.
   * @param {number} [objectId] - Id объекта, над которым запускается агента (например, в списке).
   * @param {string} [objectIdsStr] - Id объектов разделенных «;», над которым запускается агента (например, в списке).
   * @param {Date} [dateStart] - Дата запуска агента, по умолчанию текущая дата.
   * @param {string} [tenancyName] - Код экземпляра системы в multitenant системе, в котором нужно запустить агент.
   * @returns {boolean} Успех или неуспех выполнения агента.
   */
  function start_agent(agentId: number, objectId?: number, objectIdsStr?: string, dateStart?: Date, tenancyName?: string): boolean;

  function update_learnings_course_parts_structure(learningArray: unknown, courseDocStr: unknown): unknown;

  /**
   * Обновляет структуру разделов активных электронных курсов.
   * @param {number} learningId - Id активного электронного курса структуру, которого нужно обновить.
   * @param {CourseDocumentTopElem} courseDocumentTopElem - TopElem электронного курса, структура которого обновляется.
   * @param {ActiveLearningDocument} activeLearningDocument - Doc активного электронного курса структуру,
   * которого нужно обновить.
   * @returns {true} Всегда возвращается true.
   */
  function update_course_parts_structure(learningId: unknown, courseDocumentTopElem: CourseDocumentTopElem, activeLearningDocument: ActiveLearningDocument): true;

  /**
   * Возвращает массив Id сотрудников, состоящий из непосредственных подчиненных указанного сотрудника.
   * @param {number} userId - Id сотрудника, для которого идет поиск подчиненных.
   * @returns {CollaboratorCatalogDocumentTopElem[]} Массив каталожных записей сотрудников,
   * состоящий из непосредственных подчиненных указанного сотрудника.
   */
  function get_direct_sub_person_ids(userId: number): CollaboratorCatalogDocumentTopElem[];

  /**
   * Возвращает массив Id сотрудников указанного подразделения и дочерних подразделений.
   * @param {number} subdivisionId - Id подразделения, сотрудников которого нужно найти.
   * @param {string} condition - Дополнительное условие для поиска сотрудников.
   * Будет добавлено в условия поиска с использованием and в запросе.
   * @returns {number[]} Массив Id сотрудников указанного подразделения и дочерних подразделений.
   */
  function get_sub_person_ids_by_subdivision_id(subdivisionId: number, condition: string): number[];

  /**
   * Возвращает массив каталожных записей сотрудников указанного подразделения и дочерних подразделений.
   * @param {number} subdivisionId - Id подразделения, для которого производится поиск сотрудников.
   * @param {string} condition - Дополнительное условие для поиска сотрудников.
   * Будет добавлено в условия поиска с использованием and в запросе.
   * @returns {number[]} Массив каталожных записей сотрудников указанного подразделения и дочерних подразделений.
   */
  function get_sub_persons_by_subdivision_id(subdivisionId: number, condition: string): number[];

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
   * Возвращает массив каталожных записей подчинённых подразделений
   * (как непосредственных, так и дочерних) для указанного сотрудника.
   * Сотрудник может быть руководителем любого типа.
   * @param {number} managerId - Id сотрудника, для которого нужно найти подчиненные ему подразделения.
   * @returns {CollaboratorCatalogDocumentTopElem[]} Массив каталожных записей подчинённых подразделений.
   */
  function get_all_subs_by_func_manager_id(managerId: number): CollaboratorCatalogDocumentTopElem[];

  /**
   * Выполняет функцию eval указанного в параметрах функции файла.
   * @param {string} url - Путь до файла.
   * @param {number|XmlDocument|XmlTopElem} documentId - Целое число, объект XmlDoc или TopElem.
   * Id объекта. Если аргумент указан, то будет открыт объект по указанному Id
   * (если данный объект еще не был открыт) и он будет доступен для исполняемого кода файла.
   * В этом аргументе может быть также указан объект XmlDoc или TopElem открытого объекта.
   * @param {string} fileName - Строка с названием файла.
   * Если аргумент указан, то результат выполнения функции eval будет сохранен
   * в папку trash/temp/ с названием, указанным в данном аргументе.
   * @returns {string} Строка, полученная после выполнения функции eval.
   */
  function eval_code_page_url(url: string, documentId: number | XmlDocument | XmlTopElem, fileName: string): string;

  let cur_user_id: XmlElem<number>;
  let cur_user: XmlElem<unknown>;
  let cur_user_groups: XmlElem<unknown>;
  let cur_user_content_access: XmlElem<unknown>;
  let cur_user_admin_configuration: XmlElem<unknown>;
  let cur_user_admin_configuration_applications: XmlElem<unknown>;
  let cur_user_access_claims: XmlElem<unknown>;
  let cur_user_access_blocks: XmlElem<unknown>;
  let cur_user_admin_type: XmlElem<string>;

  function get_cur_user(): unknown;

  function update_cur_user(): unknown;

  function get_cur_user_groups(): unknown;

  function update_cur_user_groups(): unknown;

  function cur_user_is_admin(): unknown;

  function get_cur_user_content_access(): unknown;

  function update_cur_user_content_access(): unknown;

  function get_cur_user_admin_configuration(): unknown;

  function update_cur_user_admin_configuration(): unknown;

  function get_cur_user_admin_configuration_applications(): unknown;

  function get_cur_user_application_access_level(applicationId: number): unknown;

  function get_access_role_application_access_level(fldAccessRole: unknown, applicationId: number): unknown;

  function get_cur_user_access_blocks(): unknown;

  /**
   * Обновляет указанный фильтр в администраторе WebTutor.
   * @param {T} sourceConditions - Структура, содержащая текущие условия поиска.
   * @param {string} catalogName - Строка с названием каталога, для которого используется фильтр.
   * @param {string} schemeId - Id фильтра для обновления.
   * @param {boolean} setFlag - Если указанный фильтр проставляется в качестве
   * выбранного для каталога в администраторе WebTutor.
   */
  function update_filter_conditions<T extends XmlElem<unknown, unknown>>(sourceConditions: T, catalogName: string, schemeId: string, setFlag: boolean): void;

  function check_cur_user_admin_access(objectTopElem: unknown, curUser: unknown, fldAccessCalalogParam: unknown): unknown;

  /**
   * Проверяет доступ к объекту на основе настроек в разделе
   * Отображение каталогов (блок Безопасность) для текущего пользователя в Webtutor Administrator.
   * @param {XmlTopElem} objectTopElem - `TopElem` объекта, к которому проверяется доступ.
   * @returns {boolean} Возвращает значение, показывающее наличие или отсутствие доступа:
   * - `true` – доступ разрешен;
   * - `false` – доступ запрещен.
   * @example
   * ```
   * tools.admin_access_filling(TopElem);
   * ``
   */
  function admin_access_filling(objectTopElem: XmlTopElem): boolean;

  /**
   * Копирует параметры доступа к объекту в другой объект.
   * @param {number} _to_obj_id - Id объекта, в который нужно скопировать параметры доступа.
   * @param {XmlTopElem} _to_obj_doc - TopElem объекта, в который нужно скопировать параметры доступа.
   * @param {number} _from_obj_id - Id объекта, из которого нужно скопировать параметры доступа.
   * @param {XmlTopElem} _from_obj_doc - TopElem объекта, из которого нужно скопировать параметры доступа.
   * @example
   * ```
   * tools.admin_access_copying("", docEventResult.TopElem, "", topElem);
   * tools.admin_access_copying(null, requestDoc.TopElem, curObjectID, curObject);
   * ```
   */
  function admin_access_copying(_to_obj_id: number | undefined | null, _to_obj_doc: XmlTopElem | undefined | null, _from_obj_id: number | undefined | null, _from_obj_doc: XmlTopElem | undefined | null): void;

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
   * @example
   * ```
   * tools.replace_temlate_tags(_source.db_path);
   * ```
   */
  function replace_temlate_tags(str: string, date?: Date): string;

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
   * Используется для обновления данных по редактированию разделов на закладке
   * «Редактирование разделов» в администраторе в разделе портала.
   * Обновления происходят во всех дочерних элементов портала.
   * @param {number} objectId - Id измененного документа.
   * @param {T} topElem - TopElem измененного документа.
   * @returns {number} Количество изменённых дочерних элементов.
   */
  function update_document_persons<T extends XmlTopElem>(objectId: number, topElem: T): number;

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

  /**
   * Возвращает Id самого верхнего иерархии документа портала, на который разрешена подписка,
   * относительно текущего документа.
   * Используется для отправки сообщений об изменении документа портала.
   * @param {number} documentId - Id документа для которого происходит поиск документов верхнего уровня.
   * @returns {number | null} Id самого верхнего иерархии документа портала,
   * на который разрешена подписка, относительно текущего документа или Null если такой документ не найден.
   */
  function get_notification_document(documentId: number | DocumentDocument): number | null;

  /**
   * Возвращает Id самого верхнего иерархии документа портала, на который разрешена подписка,
   * относительно текущего документа.
   * Используется для отправки сообщений об изменении документа портала.
   * @param {DocumentDocumentTopElem} topElem - TopElem документа для которого происходит поиск
   * документов верхнего уровня.
   * @returns {number | null} Id самого верхнего иерархии документа портала,
   * на который разрешена подписка, относительно текущего документа или Null если такой документ не найден.
   */
  function get_notification_document(topElem: DocumentDocument): number | null;

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
   * Возвращает массив руководителей (руководителей по должности) центра затрат указанного сотрудника.
   * Если указанные руководители не найдены, то возвращается пустой массив.
   * @param {number} personId - Id сотрудника, для которого производится поиск руководителей центра затрат.
   * @param {CollaboratorDocumentTopElem} [personDocumentTopElem] - TopElem сотрудника,
   * для которого производится поиск руководителей центра затрат.
   * @returns {CollaboratorCatalogDocumentTopElem[]} Массив каталожных записей сотрудников,
   * являющихся руководителями центра затрат указанного сотрудника.
   */
  function get_cost_center_boss_by_person_id(personId: number, personDocumentTopElem: CollaboratorDocumentTopElem): CollaboratorCatalogDocumentTopElem[];

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
   * Включает или выключает журнал веб-запросов.
   * @param {boolean} isEnable - Включить (true) / выключить (false) журнал веб-запросов.
   */
  function enable_log_web_request(isEnable: boolean): void;

  /**
   * Прообразовывает содержание строки для сохранения в теге <desc> ... </desc>.
   * Предназначено для преобразования тегов и ссылок на файлы в описании.
   * @param {string} _desc - Строка для преобразования.
   * @param {string} _temp_dir - Строчное выражение пути до папки с файлами, указанными в теге.
   * @returns {string} Преобразованная строка. Результат действия функции.
   */
  function desc_cleanup(_desc: string, _temp_dir?: string): string;

  /**
   * Возвращает название поле из тега TITLE xmd или xml формы для указанного языка.
   * Если в теге есть «const=», то производится поиск значения указанного после «=» среди констант языка.
   * Если в константах значение не найдено, то возвращается, то, что указано после «const=».
   * Если «const=» не указано, то возвращается значение тега TITLE.
   * @param {T} field - Объект, представляющий собой XML поле, для которого нужно взять название.
   * @param {K} curLngWeb - Текущий язык, если не указан, берется язык пользовательского интерфейса
   * в администраторе. При вызове на портале параметр обязателен.
   * @returns {string} Название поле из тега TITLE xmd или xml формы для указанного языка.
   */
  function get_field_title<T extends XmlElem<unknown, unknown>, K extends XmlElem<unknown, unknown>>(field: T, curLngWeb?: K): unknown;

  /**
   * Заполняет структуру полей (из объекта или из каталога) для использования в формах выбора условий.
   * Применяется в диалогах построения фильтров, настраиваемых отчетах и т.д.
   * @param {XmlElem<FieldNamesBase>} fieldNames - Структура полей.
   * @param {T} form - Форма источника (объект или каталог), из которой нужно заполнить данные.
   * @param {boolean} [isCatalog=true] - Аргумент, определяющий тип источника (объект или каталог)
   * (true – в качестве источника используется каталог, false – в качестве источника используется объект).
   * @param {K} [evalPath] - XML-элемент в структуре field_names внутри элемента, который нужно заполнять.
   * Задается в случае, если нужно заполнить один из дочерних элементов field_names,
   * вложенных в элемент первого уровня field_names.
   * @param {string} [prefix] - Префикс, который добавляется к названию полей в источнике form
   * при заполнении структуры field_names. Атрибут передается, если нужно, например,
   * заполнить значения по ключу данными типа multiple из дочернего элемента источника form.
   */
  function fill_field_names<T extends XmlElem<unknown, unknown>, K extends XmlElem<unknown, unknown>>(fieldNames: XmlElem<FieldNamesBase>, form: T, isCatalog?: boolean, evalPath?: K, prefix?: string): void;

  /**
   * Возвращает результат выполнения функции eval, определяемый формулой evalstr и
   * другими атрибутами вызова функции.
   * @param {Date} [SRC1=Date()] - Поле-источник для передачи даты в формулу evalstr.
   * Если в качестве данного аргумента будет передана пустая строка (''),
   * то результатом будут текущие дата и время.
   * @param {Date} [SRC2=Date()] - Второе поле-источник для передачи даты в формулу evalstr.
   * Если в качестве данного аргумента будет передана пустая строка (''),
   * то результатом будут текущие дата и время.
   * @param {string} EVALSTR - Строковое выражение формулы, выполняемой в функции eval.
   * @param {string} PARAM1 - Атрибут, в который можно записать промежуточное значение,
   * а потом вызвать его в другом месте с помощью выражения @1.
   * В составе данного атрибута можно также использовать источники src1 и src2 в форме выражений #1 и #2,
   * соответственно.
   * @param {string} PARAM2 - Атрибут, в который можно записать промежуточное значение,
   * а потом вызвать его в другом месте с помощью выражения @2.
   * В составе данного атрибута можно использовать источники src1 и src2 в форме выражений #1 и #2,
   * соответственно.
   * @param {string} PARAM3 - Атрибут, в который можно записать промежуточное значение,
   * а потом вызвать его в другом месте с помощью выражения @3.
   * В составе данного атрибута можно использовать источники src1 и src2 в форме выражений #1 и #2,
   * соответственно.
   * @returns {string} Результат выполнения формулы, заданной атрибутом evalstr.
   */
  function DateFunc(SRC1: Date, SRC2: Date, EVALSTR: string, PARAM1: string, PARAM2: string, PARAM3: string): string;

  /**
   * Сдвигает указанную дату на количество секунд, заданное параметрами функции.
   * Можно передать дни, часы, минуты и секунды для сдвига даты.
   * Дни, часы, минуты будут пересчитаны в секунды.
   * @param {Date} [DATE_VAL=Date()] - Исходная дата, подлежащая изменению.
   * @param {number} [DAYS=0] - Количество дней, на которое нужно сдвинуть текущую дату.
   * @param {number} [HOURS=0] - Количество часов, на которое нужно сдвинуть текущую дату.
   * @param {number} [MINUTES=0] - Количество минут, на которое нужно сдвинуть текущую дату.
   * @param {number} [SECONDS=0] - Количество секунд, на которое нужно сдвинуть текущую дату.
   * @returns {Date} Измененная дата, полученная сдвигом исходной даты на указанное
   * количество дней, часов, минут и секунд.
   * @example
   * ```
   * newDate = tools.AdjustDate(null, 1); // сдвиг текущей даты на 1 сутки
   * newDate1 = tools.AdjustDate(null, -1); // сдвиг текущей даты на 1 сутки назад
   * ```
   */
  function AdjustDate(DATE_VAL?: Date, DAYS?: number, HOURS?: number, MINUTES?: number, SECONDS?: number): Date;

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
   * Запускает построение настраиваемого отчета.
   * @param {number} reportId - Id отчета для построения.
   * @param {ActionReportDocumentTopElem} [actionReportDocumentTopElem] - Документ карточки отчета,
   * если она открыта в интерфейсе Webtutor Administrator.
   * Данные (последние изменения) будут браться из этого документа.
   * @param {ActionReportDocument} [actionReportDocument] - Документ отчета.
   * @param {string} [lngShort] - Неизвестный параметр.
   * @param {boolean} [metaOnly] - Неизвестный параметр.
   * @returns {TaskInfoBase|null} Документ сохраненного настраиваемого отчета.
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
   * Возвращает массив каталожных записей всех дочерних объектов указанного объекта,включая его самого.
   * @param {number} NODE_ID - Id объекта, для которого происходит поиск дочерних объектов.
   * @param {string} NODE_CATALOG - Название каталога без `s` на конце, в котором производится поиск.
   * @param {string} NODE_PARENT_FIELD - Название поля, в котором указывается Id родительского элемента.
   * По умолчанию parent_object_id.
   * Если название данного поля отличается от принятого по умолчанию,
   * это название обязательно нужно указать.
   * @returns {XmlTopElem[]} Массив каталожных записей всех дочерних объектов указанного объекта,
   * включая его самого.
   */
  function get_sub_hierarchy(NODE_ID: number, NODE_CATALOG: string, NODE_PARENT_FIELD: string): XmlTopElem[];

  /**
   * Возвращает сформированный на основе кода печатной формы текст печатной формы.
   * @param {number} formParam - Id печатной формы.
   * @returns {string} Текст печатной формы.
   */
  function process_print_form(formParam: number): string;

  function get_user_boss(OBJECT: unknown): unknown;

  /**
   * Функция, которая заполняет структуру path_subs в карточке преподавателя,
   * для отображения пути штатного расписания на основе карточки сотрудника
   * для внутренних преподавателей.
   * @param {PathSubBase["path_subs"]} pathSubsElement - Xml структура.
   * @param {number} personId - Id сотрудника.
   * @param {CollaboratorDocument} personDocument - TopElem сотрудника.
   * @returns {PathSubBase["path_subs"]} Заполненная структура {@link PathSubBase["path_subs"]}.
   */
  function path_subs_filling(pathSubsElement: PathSubsBase["path_subs"], personId: number, personDocument: CollaboratorDocument): unknown;

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
   * @param {string} [separator=" -> "] - Если указана пустая строка "",
   * по умолчанию используется разделитель "" -> "".
   * @returns {string} Строка с полным штатным расписанием (без должности).
   */
  function person_list_staff_by_person_id(personId: number, personDocumentTopElem: CollaboratorDocumentTopElem, depth: number, top: string, separator: string): string;

  /**
   * Функция выявляет домен и логин почтового адреса из электронного сообщения в стандарте X.400
   * и возвращает строку вида login@domainтекст_письма.
   * @param {string} _x40_email - Строка электронного сообщения в стандарте X.400,
   * из которого выделяется домен и логин электронного адреса.
   * @param {string} _end_mail - Строковое выражение, содержащее текст письма, который будет добавлен к login@domain.
   * @returns {string} Строковое выражение вида login@domain текст_письма.
   */
  function convert_email_from_x40(_x40_email: string, _end_mail: string): string;

  /**
   * Функция добавляет сотрудника в список оцениваемых в процедуре оценки. Планы и анкеты при этом не создаются.
   * @param {number} personId - Id сотрудника.
   * @param {number} assessmentAppraiseId - Id процедуры оценки, в которую нужно добавить сотрудника.
   * @param {CollaboratorDocument} personDocument - `TopElem` карточки сотрудника.
   * @param {AssessmentAppraiseDocument} assessmentAppraiseDocument - Документ процедуры оценки,
   * в которую нужно добавить сотрудника.
   * @returns {AssessmentAppraiseDocument} Измененный и сохраненный документ процедуры оценки.
   * @example
   * ```
   * tools.add_person_to_assessment_appraise (iPersonID, iObjectID, null, docObject);
   * ```
   */
  function add_person_to_assessment_appraise(personId: number, assessmentAppraiseId: number, personDocument?: CollaboratorDocument, assessmentAppraiseDocument?: AssessmentAppraiseDocument): AssessmentAppraiseDocument;

  function get_tag_cloud(): unknown;

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

  function drop_doc_type(docTypeId: number, checkContent: unknown): unknown;

  /**
   * Создает сертификаты указанного типа для всех участников указанного мероприятия.
   * @param {number} eventId - Id мероприятия.
   * @param {number} typeId - Id типа сертификата.
   * @param {EventDocument} eventDocument - Документ мероприятия.
   * @returns {number} Количество созданных сертификатов.
   */
  function create_certificate_to_event(eventId: number, typeId: number, eventDocument: EventDocument): number;

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
   * Возвращает Id самой верхней в иерархии родительской статьи форума.
   * @param {number} forumEntryId - Id статьи форума.
   * @param {ForumEntryDocumentTopElem} forumEntryTopElem - TopElem статьи форума.
   * @returns {number} Id самой верхней в иерархии родительской статьи форума.
   */
  function get_main_forum_entry_by_forum_entry_id(forumEntryId: number, forumEntryTopElem: ForumEntryDocumentTopElem): number;

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
   * @returns {QualificationAssignmentDocument|null} Документ квалификации или null.
   */
  function assign_qualification_to_person(personId: number, eventId: number | undefined | null, qualificationId: number, assignmentDate: Date | undefined | null, expirationDate: Date | undefined | null, testLearnings: number[] | undefined | null, learnings: number[] | undefined | null, sendMail: number, inProcess: number, assignTests: boolean, assignCourses: boolean, unconditionalAssignment: boolean, qualificationAssignmentDocument: QualificationAssignmentDocument | null, qualificationDocumentTopElem: QualificationDocumentTopElem | undefined | null, collaboratorDocumentTopElem: CollaboratorDocumentTopElem | null, givePoint: boolean): QualificationAssignmentDocument | null;

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
   * Создает xms форму пользовательского интерфейса.
   * @param {number|XmlTopElem} template - Id или TopElem объекта пользовательский интерфейс.
   * @returns {boolean} Флаг true – создание успешно завершено, false создание неуспешно.
   */
  function save_custom_ui_form(template: number | XmlTopElem): boolean;

  function get_custom_ui_form(customAdminTemplate: unknown): unknown;

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

  function get_custom_document_data_form_url(sCatalogNameParam: unknown): unknown;

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

  function get_func_manager_substitution(arrFuncManagerParam: unknown, oParams: unknown): unknown;

  /**
   * Возвращает массив Id или список каталожных записей сотрудников,
   * являющихся непосредственными (фактическими) руководителями указанного объекта
   * (организации, подразделения, сотрудника) по должности либо функциональными
   * руководителями из карточки объекта или вышестоящего подразделения,
   * организации (если они определены для данного типа объекта).
   * Для сотрудника также учитываются функциональные руководители групп,
   * в которые данный сотрудник включен.
   * @param {object} objectParam - Либо Id объекта, либо Doc объекта,
   * либо TopElem объекта, для которого идет поиск руководителей.
   * @returns {number[]} Массив Id или список каталожных записей руководителей указанного объекта.
   */
  function get_uni_user_bosses(objectParam: object): number[];

  /**
   * Возвращает каталожную запись сотрудника, являющегося непосредственным (фактическим)
   * руководителем указанного объекта (организации, подразделения, сотрудника)
   * по должности либо функциональным руководителем из карточки объекта или вышестоящего подразделения,
   * организации (если они определены для данного типа объекта).
   * Для сотрудника также учитывается функциональные руководители групп,
   * в которые данный сотрудник включен.
   * По сути возвращается первый руководитель из массива, полученного из функции
   * tools.get_uni_user_bosses.
   * @param {number | XmlTopElem} objectParam - Либо Id объекта, либо Doc объекта,
   * либо TopElem объекта, для которого идет поиск руководителей.
   * @returns {XmlDocument} Каталожная запись руководителя указанного объекта.
   */
  function get_uni_user_boss(objectParam: number | XmlTopElem): XmlDocument;

  /**
   * Вызов эскалации по документообороту.
   * @param {T} source - Документ объекта, относительно которого вызывается действие.
   * @param {string} escalationCode - Код эскалации документооборота.
   * @param {number} workflowId - Id документооборота.
   * @param {WorkflowDocumentTopElem} workflowTopElem - TopElem документооборота.
   * @param {number} alterObjectId - Если эскалация документооборота, это печать печатной формы,
   * то можно передать в этот параметр Id объекта, который будет передаваться в печатную форму
   * как object_id.
   * @returns {true} Флаг всегда true.
   */
  function workflow_escalation_process<T extends XmlDocument>(source: T, escalationCode: string, workflowId: number, workflowTopElem: WorkflowDocumentTopElem, alterObjectId: number): true;

  /**
   * Возвращает список каталожных записей из профилей компетенции указанного сотрудника.
   * Данные собираются из кодов профилей, указанных в должности сотрудника,
   * и из профиля компетенции, указанного в должности сотрудника.
   * Если в должности сотрудника не найдены профили компетенции,
   * то берется профиль из типовой должности, привязанной к должности сотрудника
   * (если такая связь имеется).
   * @param {number|object|XmlTopElem} objectParam - Id сотрудника, либо документ сотрудника,
   * либо TopElem сотрудника.
   * @returns {number[]} Список каталожных записей из профилей компетенции, указанного сотрудника.
   */
  function get_user_comp_profiles(objectParam: number | object| XmlTopElem): number[];

  function get_object_data_from_package_url(urlPackage: string, objectId: number, objectType: string): unknown;

  function get_package_log(sUrlPackageParam: unknown, oParam: unknown): unknown;

  /**
   * Заполняет пакет данными из пакета источника.
   * Возвращает количество обработанных объектов в пакете.
   * @param {DownloadPackageLogBase} packageTargetTopElem - TopElem пакета, в который нужно копировать данные.
   * @param {DownloadPackageLogBase} packageSourceTopElem - TopElem пакета, из которого нужно копировать данные.
   * @returns {number} Количество скопированных элементов.
   */
  function package_log_filling(packageTargetTopElem: DownloadPackageLogBase, packageSourceTopElem: DownloadPackageLogBase): number;

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

  function object_to_script(object: unknown, warily: boolean): unknown;

  /**
   * Функция, которая формирует объект на основе переменных элемента шаблона, шаблона документа,
   * удаленного действия, выгрузки и т.д. Объект будет иметь следующий вид.
   * Свойство(property) это название переменной. Значение свойства это value переменной,
   * как оно заполнено в структуре параметров (listWVarsPARAM).
   * @param {WebVariablesBaseWvar} listWVars - Cтруктура описывающая переменные вида.
   * @returns {object} Объект, полученный на основе переменных элемента шаблона,
   * шаблона документа, удаленного действия, выгрузки и т.д.
   */
  function wvars_to_object(listWVars: WebVariablesBaseWvar): object;

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
   * Преобразует массив в строку указанного формата (`json`, `xml`).
   * @param {unknown[]} _aArrayPARAM - Массив, который необходимо преобразовать.
   * @param {string} [format="xml"] - Формат возвращаемой строки. Возможны два значения: `json` и `xml`).
   * @param {string} [rootName="data"] - Название корневого (`root`) тега.
   * Значение аргумента учитывается, если формируется строка в формате XML.
   * По умолчанию имеет значение `data` (корневой тег `<data></data>`).
   * @returns {string} Строка, сформированная из массива.
   * @example
   * ```
   * tools.array_to_text(["one", "two", "three"], "json");
   * // ["value":"one", "value":"two", "value":"three"]
   *
   * tools.array_to_text(["one", "two", "three"], "xml");
   * // <data><value>one</value></data><data><value>two</value></data><data><value>three</value></data>
   *
   * tools.array_to_text(["one", "two", "three"], "xml", "d");
   * // <d><value>one</value></d><d><value>two</value></d><d><value>three</value></d>
   * ```
   */
  function array_to_text(_aArrayPARAM: unknown[], format?: string, rootName?: string): string;

  /**
   * Преобразует массив или объект в строку указанного формата (json, xml).
   * @param {object | unknown[]} _aDataPARAM - Массив array или объект (object) для преобразования.
   * @param { string }[_sName=null] - Необязательный по умолчанию null.
   * Если не null, то параметр указывает название тега (для XML) или свойства (json),
   * в который будут заключены данные, полученные из _aDataPARAM.
   * @param { boolean } [_bObj=false] - Флаг true – преобразуется объект, false – преобразуется массив.
   * @param { string } [_sFormatPARAM=xml] - По умолчанию XML. Возможны два значения (json, xml).
   * Задает формат возвращаемой строки.
   * @returns {string} Строка, полученная из массива или объекта.
   * @example
   * tools.merge_text_array(_aPairs, (_sFormatPARAM == "json" ? null: _sNamePARAM), false, _sFormatPARAM);
   */
  function merge_text_array(_aDataPARAM: Object | unknown[], _sName?: string, _bObj?: boolean, _sFormatPARAM?: string): string;

  /**
   * Сериализация объекта в строку/xml.
   * @param {T} arg - Объект для преобразования.
   * @param { string }[formatType=xml] - По умолчанию XML. Возможны два значения (json, xml).
   * Задает формат возвращаемой строки.
   * @param { number } [maxDepth=0] - По умолчанию 0. Глубина дочерних свойств объекта,
   * до которой можно спускаться. Должна быть не больше 5.
   * @param { stirng } [_sName=null] - Параметр указывает название тега (для XML),
   * в который будут заключены данные, полученные из _vObjectPARAM. По умолчанию <value></value>.
   * @returns {string} Строка, полученная из объекта.
   * @example
   * ```
   * tools.object_to_text(RESULT,'json')
   * tools.object_to_text(_vValue, _sFormatPARAM, iDepth + 1, _sName);
   * ```
   */
  function object_to_text<T>(arg: T, formatType: string, maxDepth?: number, _sName?: string): string;

  /**
   * Сохраняет версию объекта каталога, для которого проставлен флаг сохранения версий в администраторе.
   * При этом создается объект в каталоге «Версии объектов» (Системное администрирование – Версии объектов).
   * @param {XmlDocument} xmlDocument - Документ объекта, версия которого сохраняется.
   * @returns {void} Сохраняет версию объекта каталога. Возвращаемое значение отсутствует.
   */
  function create_object_version(xmlDocument: XmlDocument): void;

  /**
   * Возвращает массив из обязательных обучений сотрудника, в которые входит переданный объект.
   * Обязательные обучения указываются в требованиях к следящим объектам сотрудника должность,
   * типовая должность, группа подразделений, семейство должностей, группа.
   * @param {number} personId - Id сотрудника.
   * @param {number} objectId - Id объекта обучения.
   * @param {CollaboratorDocumentTopElem} personTopElem - Элемент {@link XmlTopElem} сотрудника.
   * @param {XmlTopElem} objectTopElem - Элемент {@link XmlTopElem} объекта обучения.
   * @returns {unknown} Массив из обязательных обучений сотрудника, в которые входит переданный объект.
   */
  function get_mandatory_learnings(personId: number, objectId: number, personTopElem: CollaboratorDocumentTopElem, objectTopElem: XmlTopElem): unknown;

  /**
   * Возвращает массив каталожных записей функциональных руководителей.
   * Отбираются те функциональные руководители, где объект (например, сотрудник),
   * переданный в качестве первого параметра, является руководителем объекта
   * (сотрудника/сотрудников, подразделений, организаций, групп), переданного во втором параметре.
   * Для объектов должность, группа, подразделение, организация, сотрудник руководитель может быть любого типа.
   * @param {number|XmlDocument|XmlTopElem} object - Id объекта, либо Doc объекта, либо TopElem объекта,
   * для которого идет поиск руководителей относительно объекта, переданного во втором параметре.
   * @param {number|unknown[]} personParameter - Id сотрудника, для которого ищется руководитель,
   * либо массив элементов (сотрудников, подразделений, организаций, групп).
   * @returns {unknow[]} Массив каталожных записей функциональных руководителей.
   */
  function get_relative_boss_types(object: number | XmlDocument | XmlTopElem, personParameter: number|unknown[]): unknown[];

  /**
   * Возвращает массив каталожных записей операций, определяемых типами руководителей
   * из массива функциональных руководителей, который передается в функцию.
   * Возвращает объединение операций, доступных отдельному типу руководителя.
   * @param {FuncManagersBaseFuncManager[]} manager - Массив каталожных записей функциональных руководителей.
   * @returns {OperationCatalogDocumentTopElem[]} Массив каталожных записей операций.
   */
  function get_relative_operations(manager: unknown): OperationCatalogDocumentTopElem[];

  /**
   * Проверяет, входит ли указанная операция в состав массива операций, определяемых типами руководителей
   * из массива функциональных руководителей, который передается в функцию.
   * @param {FuncManagersBaseFuncManager[]} manager - Массив каталожных записей функциональных руководителей.
   * @param {string|number} operation - Id операции или код действия (action), привязанного к операции.
   * @returns {boolean} Возвращает значение, показывающее, входит ли указанная операция в массив операций
   * (true – операция входит в массив операций, false – операция не входит в массив операций).
   */
  function check_relative_operation(manager: unknown, operation: string|number): boolean;

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
   * @returns {any[]} Массив из каталожных записей типов функциональных руководителей (boss_types),
   * соответствующих указанному объекту и указанному пользователю.
   */
  function get_object_relative_boss_types(userId: number, objectId: number): unknown;

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
   * Возвращает массив из каталожных записей операций, доступных указанному пользователю в рамках указанного объекта
   * и указанного типа (иначе говоря, для всех типов руководителей указанного пользователя в рамках указанного объекта).
   * @param {number} userId - Id сотрудника, для которого нужно определить список операций.
   * @param {number} objectId - Id объекта, относительно которого нужно определить список операций.
   * @param {string} catalogName - Строка с названием типа объекта (каталога без ‘s’ на конце).
   * Если передана пустая строка, то функция вернет все операции,
   * доступные всем типам руководителей данного пользователя.
   * @returns {OperationCatalogDocumentTopElem[]} Массив из каталожных записей операций,
   * доступных указанному пользователю в рамках указанного объекта и указанного типа.
   */
  function get_object_relative_operations(userId: number, objectId: number, catalogName: string): OperationCatalogDocumentTopElem[];

  /**
   * Проверяет, есть ли операция, привязанная к переданному в параметрах функции действию (action),
   * в списке переданных операций.
   * @param {OperationCatalogDocumentTopElem[]} operations - Массив каталожных записей операций.
   * @param {CollaboratorDocumentTopElem} collaboratorTopElem - TopElem сотрудника.
   * Если передан не пустой атрибут и не null и если роль доступа - Администратор,
   * то функция всегда будет возвращать true.
   * @param {string} action - Код действия, к которому должна быть привязана операция.
   * @returns {boolean} Значение true демонстрирует, что в функцию передан TopElem сотрудника с ролью Администратор
   * или в массиве найдена операция с указанным кодом действия. В противном случае возвращается значение false.
   */
  function check_operation_rights(operations: OperationCatalogDocumentTopElem[], collaboratorTopElem: unknown, action: string): boolean;

  /**
   * Добавляет свойства (properties) объекта-источника к свойствам объекта-получателя.
   * @param {object} target - Объект-получатель.
   * @param {object} source - Объект-источник.
   * @returns {object} Объект-получатель с добавлением свойств объекта-источника.
   */
  function extend_object(target: object, source: object): object;

  let current_user_boss_type: Variant<BossTypeDocumentTopElem>;

  function get_current_user_operations(): number[];

  /**
   * Заполняет свойства объекта-получателя из соответствующих свойств объекта-источника.
   * Заполняются только те свойства, названия которых указаны в переданном в функцию массиве.
   * @param {XmlTopElem} fldTarget - Объект-получатель.
   * @param {XmlTopElem} fldSourceParam - Объект-источник.
   * @param {string[]} arrFieldNamesParam - Массив строк с названиями полей для заполнения.
   */
  function assign_elems(fldTarget: XmlTopElem, fldSourceParam: XmlTopElem, arrFieldNamesParam: string[]): void;

  function assign_elems_exclude(fldTarget: unknown, fldSourceParam: unknown, arrFieldNamesParam: unknown): unknown;

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

  function get_short_login_by_login(login: string): unknown;

  /**
   * Возвращает каталожную запись сотрудника с соответствующим логином и типом авторизации,
   * или undefined, если такой сотрудник не найден.
   * @param {string} login - Логин сотрудника.
   * @param {string} authType - Тип авторизации.
   * @returns {CollaboratorCatalogDocument | undefined} Каталожная запись сотрудника или undefined,
   * если сотрудник не найден.
   */
  function get_user_by_login(login: string, authType: "ntlm" | string): CollaboratorCatalogDocumentTopElem | undefined;

  /**
   * Разрешает установки даты сохранения (не modification_date) для объектов каталога
   * для последующего отслеживания версий объекта.
   * @param {string} catalogName - Название каталога без `s` на конце.
   * @param {boolean} isSetDate - Значение `true` размещать установку даты, `false` не разрешать.
   */
  function set_form_last_seved_data(catalogName: string, isSetDate: boolean): void;

  /**
   * Возвращает массив из каталожных записей значений карты знаний из карточки сотрудника
   * и профиля значений карты знаний из должности сотрудника.
   * @param {number} personId - Id сотрудника.
   * @returns {KnowledgePartCatalogDocumentTopElem[]} Массив из каталожных записей значений карты знаний.
   */
  function get_knowledge_parts_by_person_id(personId: number): KnowledgePartCatalogDocumentTopElem[];

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
   * Возвращает название объекта из поля, которое его содержит.
   * Например, для курса (course) это значение поля name, а для теста (test) это поле title.
   * Отличие от функции {@link tools.get_disp_name_value} в том,
   * что если поле содержит путь до элемента через “.”, то данная функция выдаст ошибку,
   * а функция {@link tools.get_disp_name_value} найдет поле с названием по указанному пути.
   * @param {K} topElem - TopElem объекта, название которого нужно показать.
   * @returns {string} Строка с названием объекта.
   */
  function get_object_name_field_value<K extends XmlTopElem>(topElem: K): string;

  /**
   * Копирует файл из адреса источника данных по адресу получателя данных.
   * Все папки в адресе должны существовать до начала копирования,
   * как в источнике, так и в получателе.
   * @param {string} destinationDirectory - Путь или URL до файла получателя (включая название файла).
   * @param {string} sourceDirectory - Путь или URL до файла источника (включая название файла).
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно (копирование выполнено),
   * или false - в противном случае (копирование не выполнено).
   */
  function copy_url(destinationDirectory: string, sourceDirectory: string): boolean;

  /**
   * Распаковывает архив из адреса источника данных по адресу получателя данных.
   * Все папки в адресе должны существовать до начала распаковки, как в источнике, так и в получателе.
   * @param {string} sourcePath - Полный путь до файла источника. Включая название файла.
   * @param {string} destinationPath - Полный путь до файла получателя.
   */
  function zip_extract(sourcePath: string, destinationPath: string): void;

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

  function sys_db_type(): unknown;

  let sys_db_capability: XmlElem<number>;
  let sys_db_capability_ex: XmlElem<number>;
  let sys_db_capability_role_tags: XmlElem<number>;
  let uid: XmlElem<string>;
  let UNI_CAP_BASIC: XmlElem<number>;
  let UNI_CAP_BLOB_STREAM: XmlElem<number>;
  let UNI_CAP_CLUSTER: XmlElem<number>;
  let UNI_CAP_WORKER_ROLE: XmlElem<number>;
  let UNI_CAP_WEB_ROLE: XmlElem<number>;
  let UNI_CAP_IMPORT_DOCS_BATCH: XmlElem<number>;
  let UNI_CAP_IMPORT_CATALOG_BATCH: XmlElem<number>;
  let UNI_CAP_IMPORT_BLOBS_BATCH: XmlElem<number>;
  let UNI_CAP_IMPORT_LOCAL_BLOBS_BATCH: XmlElem<number>;
  let UNI_CAP_EXPORT_DOCS_BATCH: XmlElem<number>;
  let UNI_CAP_EXPORT_CATALOG_BATCH: XmlElem<number>;
  let UNI_CAP_EXPORT_BLOBS_BATCH: XmlElem<number>;
  let UNI_CAP_EXPORT_LOCAL_BLOBS_BATCH: XmlElem<number>;
  let UNI_CAP_FT_INDEX: XmlElem<number>;
  let UNI_CAP_MULTI_TENANCY: XmlElem<number>;
  let UNI_CAP_AZURE: XmlElem<number>;
  let UNI_CAP_MSSQL: XmlElem<number>;
  let UNI_CAP_ORACLE: XmlElem<number>;
  let UNI_CAP_DATA_STORAGE: XmlElem<number>;
  let UNI_CAP_USER_CACHE: XmlElem<number>;
  let UNI_CAP_DISTR_CACHE: XmlElem<number>;
  let UNI_CAP_SYNC_CATALOG: XmlElem<number>;
  let UNI_CAP_TEMP_OBJECTS_IN_MEMORY: XmlElem<number>;
  let UNI_CAP_FT_INDEX_BLOBS: XmlElem<number>;
  let UNI_CAP_PD: XmlElem<number>;
  let UNI_CAP_APP_INSIGHTS: XmlElem<number>;
  let UNI_CAP_AGENT_MANAGER: XmlElem<number>;
  let UNI_CAP_INVENTORY: XmlElem<number>;
  let UNI_CAP_ALL_ROLE_TAG: XmlElem<number>;
  let UNI_CAP_AGENT_ROLE_TAG: XmlElem<number>;
  let UNI_CAP_NOTIFICATION_ROLE_TAG: XmlElem<number>;
  let UNI_CAP_SCRIPT_QUEUE_ROLE_TAG: XmlElem<number>;
  let UNI_CAP_WEBSOCKET_ROLE_TAG: XmlElem<number>;
  let UNI_CAP_WEBONLY_ROLE_TAG: XmlElem<number>;
  let UNI_CAP_VCLASS_RECORDER_ROLE_TAG: XmlElem<number>;
  let UNI_CAP_MEDIA_HANDLER_ROLE_TAG: XmlElem<number>;
  let UNI_CAP_NEURAL_HANDLER_ROLE_TAG: XmlElem<number>;
  let spxml_unibridge: SPXMLUnibridgeTool;
  let app_insights_threshold: XmlElem<number>;
  let spxml_unibridge_stage: XmlElem<number>;
  let UNI_STAGE_INIT: XmlElem<number>;
  let UNI_STAGE_COMPLETE: XmlElem<number>;
  let doc_types_catalog_hashes: XmlMultiElem<ToolsDocTypesCatalogHash>;
  let doc_types_catalog_registered: XmlElem<boolean>;

  function register_doc_types_catalog_by_serialized_str(sSerializedCatalogsToRegPARAM: unknown, bServerCheck: unknown): unknown;

  /**
   * Сравнивает hash в структуре doc_types_catalog_hashes с текущим hash объектов и обновляет его в случае изменения.
   * @param {string} objectName - Название объекта.
   * @param {boolean} serverCheck - Флаг true – запускать проверку на сервере, или false на локальной машине.
   */
  function register_doc_types_catalog(objectName: unknown, serverCheck: boolean): void;

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
   * Возвращает объект с полями id и type, полученные из json строки без ведущих и замыкающих [].
   * Если в переданной строке будет “id”:значение и “type”:значение, то вернет эти значения в возвращаемом объекте.
   * Причем значения id и type должны встречаться только один раз.
   * @param {string} value - Строка.
   * @returns {object} Объект с указными полями.
   */
  function read_selected_date(value: string): object;

  function get_sum_sid(id: string): unknown;

  function check_sum_sid(id: string, sSumParam: unknown): unknown;

  /**
   * Заменяет в строке пробел, «(» , «)», «+» и «-» на пустую сроку, а символы «,» и «;» - на пробел.
   * @param {string} strPhoneParam - Исходная строка для преобразования.
   * @returns {string|null} Преобразованная строка или значение `null`, если произошла ошибка.
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
   * Преобразует в дату первый параметр функции.
   * Если преобразование не удалось, то возвращается второй параметр в таком виде,
   * как он передан в функцию, или undefined, если он не задан.
   * @param {string} value - Cтрока для преобразования в дату.
   * @param {T} defaultValue - Значение по умолчанию, если преобразование перового параметра не удалось.
   * @returns {Date|T} Либо дата, либо второй параметр в таком виде,
   * как он передан в функцию, или undefined, если он не задан.
   */
  function opt_date<T>(value: string, defaultValue: T): Date | T;

  /**
   * Преобразует в строку числовой параметр функции.
   * Если параметр отрицательный, то строка будет начинаться со знака «-».
   * @param {number} number - Число для преобразования в строку.
   * @returns {string} Строка.
   * @example
   * ```
   * tools.str_negative_number(TopElem.weight);
   * ```
   */
  function str_negative_number(number: number): string;

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
   * Возвращает строку для использования в запросах для поиска по full text индексу.
   * Строка параметр функция преобразуется в строку в зависимости от настроек базы.
   * @param {string} value - Строка для преобразования.
   * @returns {string} Строка для использования в запросах для поиска по full text индексу.
   * @example
   * ```
   * tools.get_ft_value(value);
   * ```
   */
  function get_ft_value(value: string): string;

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
  function get_agent_command_queue_xml(agentId: number, sElementIDParam?: number, elems?: string, date?: Date, tenancyName?: string): unknown;

  /**
   * Формирует строку с уникальным идентификатором на основе параметров функции.
   * Формируется результирующая строка вида $$uid_первый параметр_второй параметр.
   * @param {string} uid - Строка формирования идентификатора (первый параметр).
   * @param {string} url - Строка формирования идентификатора (второй параметр).
   * @returns {string} Строка вида $$uid_первый параметр_второй параметр.
   */
  function get_uid_cached_doc(uid: string, url: string): string;

  /**
   * Для типов установки WebTutor с информационной базой, отличной от XML,
   * данная функция обновляет документ в кэше.
   * URL обновляемого документа указывается в качестве атрибута.
   * @param {string} url - Строка, содержащая путь до документа.
   * @returns {boolean} Возвращает значение, показывающее, успешно ли был обновлен документ в кэше
   * (true – документ обновлен успешно, false – документ не обновлен).
   */
  function check_and_refresh_cached_docs(url: string): boolean;

  /**
   * Возвращает сроку с тегами XML, полученную из файла путь до которого, передан в параметрах функции.
   * Вызывает функцию tools.open_str_win_ini для разбора файла.
   * @param {string} url -string с путем до файла.
   * @returns {string} Строка с путем до файла.
   */
  function open_doc_win_ini(url: string): string;

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
  function log(value: unknown, type: "error" | "debug" | "info", showAdditionalInfo: boolean): void;


  /**
   * Возвращает массив каталожных записей сотрудников, которые подписаны на данного сотрудника или
   * на его индивидуальный (а не групповой) блог.
   * @param {number} personId - Id сотрудника, подписки на которого определяет функция.
   * @returns {CollaboratorCatalogDocumentTopElem[]} Массив каталожных записей сотрудников,
   * подписанных на данного сотрудника или на его индивидуальный блог.
   */
  function get_sibscriber_subscriptions(personId: number): CollaboratorCatalogDocumentTopElem[];

  /**
   * Проверяет, существует ли файл по указанному пути.
   * @param {string} filepath - Строка с путем до файла.
   * @returns {boolean} Возвращает значение true, если файл существует, или false в противном случае.
   */
  function file_url_exists(filepath: string): boolean;

  function file_url_exists_server(sFilePathParam: unknown): unknown;

  function load_url_text_server(sFilePathParam: unknown): unknown;

  function load_url_data_server(sFilePathParam: unknown, iSizeParam: unknown): unknown;

  function read_directory_server(sFilePathParam: unknown, bDirParam: unknown): unknown;

  function delete_directory_server(sDirParam: unknown): unknown;

  function zip_extract_server(sSourceUrlParam: unknown, sTargetUrlParam: unknown): unknown;

  function delete_trash_url_server(url: string): unknown;

  function alert_server(sMessageParam: unknown): unknown;

  function log_event_server(sTypeParam: unknown, sTextParam: unknown): unknown;

  function replace_cached_doc_server(url: string): unknown;

  function copy_url_server(sDestUrlParam: unknown, sSourceUrlParam: unknown): unknown;

  function url_file_size_server(url: string): unknown;

  function put_url_text_server(url: string, sTextParam: unknown): unknown;

  function load_share_url_server(url: string): unknown;

  function get_hash_server(sTextParam: unknown, sTypeParam: unknown): unknown;

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
  function sync_catalog(catalogName: unknown): void;

  /**
   * Обновляет список типов мероприятий в системе.
   * @param {boolean} updateServers - Флаг true обновлять данные на сервере
   * (если функция запускается не на сервере) или на локальной машине - false .
   * @param {XmlTopElem=common} target - TopElem документа, дочерний элемент event_types, которого нужно обновить.
   */
  function update_commons_event_types(updateServers: boolean, target: XmlTopElem): void;

  /**
   * Выполняет проверку цифровой подписи и текста в указанном объекте электронно-цифровой подписи.
   * Проверяется, что текст и цифровая подпись текста соответствуют друг другу.
   * Проверка происходит с помощью криптопровайдера, указанного в общих настройках.
   * @param {string} documentID - Id объекта электронно-цифровой подписи.
   * @returns {DigitalVerifyResult} Объект.
   */
  function DigitalVerifyDoc(documentID: string): DigitalVerifyResult;

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
   * Устанавливает пакеты со стандартными объектами системы, которые входят в первоначальную поставку WebTutor.
   * При этом проверяется дата последней установки и язык системы по умолчанию.
   */
  function process_custom_packs(): void;

  /**
   * На основе настроек профиля редактирования контента в карточке сотрудника проверяется
   * возможность загрузки файла указанного размера. В частности, проверяется ограничение
   * на размер загружаемого файла, на общий размер файлов, загруженных пользователем,
   * и на максимальное количество загружаемых файлов.
   * Применяется при загрузке файла в базу с портала.
   * @param {number} filesize - Размер файла в байта.
   * @param {number} personId - Id сотрудника.
   * @returns {string} Возвращает выражение `ok`, если загрузка разрешена,
   * или строку с сообщением о причине отказа в загрузке в противном случае.
   */
  function check_resource_size(filesize: number, personId: number): "ok" | string;

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
  function include_person_to_personnel_reserve_position(personId: unknown, requestTopElem: RequestDocumentTopElem, careerReserveTypeId: unknown, positionId: number, state: string, positionCommonId: number, includeDateParam: Date): number;

  /**
   * Возвращает объект, составленный из списка полей указанного объекта-источника.
   * Список полей передаётся как аргумент функции.
   * @param {object|XmlTopElem} fldSPXML - Ссылка на объект или его TopElem.
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
   * Возвращает документ объекта, переданного в параметрах функции.
   * Если свойство Doc определено, то функция возвращает его значение.
   * В противном случае функция открывает объект по идентификатору Id и возвращает значение Doc открытого объекта.
   * @param {XmlTopElem} topElem - TopElem объекта.
   * @returns {XmlDocument|null} Документ объекта или значение null.
   */
  function get_opened_doc(topElem: XmlTopElem): XmlDocument | null;

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
   * @returns {boolean} Возвращает значение `true`, если преобразование завершилось успешно,
   * или `false` - в противном случае.
   * @example
   * // returns true
   * tools.html_to_pdf(_str, "", UrlToFilePath(_filename));
   */
  function html_to_pdf(sHtmlText: string, sResourcesDirPath: string, sOutFilePath: string): boolean;

  /**
   * Устанавливает тип руководителя для участника проекта.
   * @param {number} projectParticipantId - Id объекта участник проекта.
   * @param {ProjectParticipantDocument} projectParticipantDocument - Документ объекта участник проекта.
   * @param {number} bossTypeId - Id типа руководителя для присвоения участнику проекта.
   * @returns {boolean} Флаг успешного выполнения функции.
   */
  function set_project_participant_type(projectParticipantId: number, projectParticipantDocument: ProjectParticipantDocument, bossTypeId: number): boolean;

  /**
   * Создает объект Участник проекта для указанного проекта и указанного сотрудника.
   * Перечень проектов находится в разделе Персонал – Управление проектами - Проекты.
   * @param {number} objectId - Id сотрудника.
   * @param {CollaboratorDocumentTopElem} collaboratorTopElem - TopElem документа Сотрудник.
   * @param {number} projectId - Id проекта.
   * @returns {ProjectParticipantDocument} Документ созданного объекта Участник проекта.
   */
  function create_project_participant(objectId: number, collaboratorTopElem: CollaboratorDocumentTopElem, projectId: number): ProjectParticipantDocument;

  /**
   * Создает запись в журнале profiling.log.
   * @example
   * ```
   * Строка вида
   * var sid = Request.Session.GetOptProperty("sid", "");
   * sIDParam + "\t" + GetCurTicks() + "\t" + sid + "\t" + Request.Url + "\t" + sTypeParam;
   * ```
   * @param {string} eventId - Cтрока идентификатор события.
   * @param {Request} req - Объект {@link Request}.
   * @param {string} message - Cтрока с текстом события.
   */
  function set_profile_log(eventId: string, req: Request, message: string): void;

  /**
   * Очищает данные статуса экземпляра товара.
   * @param {number|string} goodInstance - Id экземпляра товара или документ экземпляра товара.
   * @returns {boolean} Возвращает значение, показывающее,
   * выполнена ли функция успешно (true – функция выполнена успешно, false – функция не выполнена).
   */
  function clear_good_instance_status(goodInstance: number | string): boolean;

  /**
   * Получает заполонённую  Xml структуру с данными о выгруженном пакете.
   * Xml структура может быть сохранена как есть, при генерации пакета,
   * или использована для дальнейшего заполнения.
   * @param {string} [packageId=tools.random_string()] - Id пакета.
   * @returns {GetFormUploadDataResult} Xml.
   */
  function get_form_upload_data(packageId: string): GetFormUploadDataResult;

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
   * Возвращает Id различных объектов системы по умолчанию.
   * Смотрите также устаревшие функции: {@link get_default_notification_system_id}
   * и {@link get_default_webinar_system_id}.
   * @param {string} catalogName - Строковое значение типа объекта.
   * @param {string} type - Строковое значение подтипа объекта.
   * @param {XmlTopElem} topElem - TopElem объекта.
   * @returns {number} Id заданного объекта системы по умолчанию.
   */
  function get_default_object_id(catalogName: "notification_system" | "webinar_system" | "boss_type" | "contact_type" | "contact_result" | "custom_web_template" | "learning_storage", type?: string, topElem?: XmlTopElem): number;

  /**
   * Возвращает TopElem системы отправки уведомлений.
   * @param {unknown} param - Id объекта системы отправки уведомлений, или его TopElem.
   * Если передан Id или TopElem объекта отличного от notification_system,
   * то в объекте будет произведен поиск Id системы отправки уведомлений в поле notification_system_id,
   * и возращен TopElem объекта, определяемый Id из этого поля.
   * @returns {NotificationSystemDocumentTopElem} TopElem системы отправки уведомлений.
   */
  function get_notification_system(param: unknown): NotificationSystemDocumentTopElem;

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
  function call_notification_system_method(param: unknown, methodName: string, json: unknown): unknown;

  /**
   * Заполняет в объекте получатель поле type_id кодом типа мероприятия, переданного в параметрах функции.
   * Если при этом в системе есть тип мероприятия с указанным кодом, то заполняется ссылка на этот тип
   * в поле event_type_id.
   * @param {XmlTopElem} target - TopElem для заполнения.
   * @param {string} eventTypeCode - Cтрока с кодом типа мероприятия.
   * @returns {number|null} Если тип мероприятия с указным кодом не найден, то null, или id этого типа мероприятия.
   */
  function set_event_type_id(target: unknown, eventTypeCode: string): number | null;

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
   * Ожидает выполнения элемента очереди скриптов.
   * @param {number} scriptId - Id скрипта.
   * @param {boolean} isScriptDelete - Удалять объект элемент очереди скриптов после выполнения или нет.
   * @returns {object} Объект со следующими полями result – содержит объект,
   * который возвращается по результатам выполнения скрипта (если такой есть),
   * error описание ошибки, возникшей при выполнении (если ошибка обрабатывается скриптом).
   * Если элемент очереди скриптов не найден, вернет null.
   */
  function wait_script_queue(scriptId: unknown, isScriptDelete: boolean): unknown;

  /**
   * Отрывает указанную версию курса в интерфейсе администратора WebTutor.
   * @param {number} courseId - Id курса.
   * @param {string} baseUrl - Путь до папок с предыдущий версией курса в файловой систем.
   * @returns {CourseDocument} Документ указанного курса.
   */
  function open_course_version(courseId: number, baseUrl: string): CourseDocument;

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

  function get_catalog_limits(): unknown;

  let xhttp_ini: XmlElem<unknown>;

  function load_xhttp_ini(): unknown;

  function get_xhttp_ini(sIniVarName: unknown): unknown;

  function resource_pic_envelope(sMode: unknown, vParam1: unknown, vParam2: unknown, vParam3: unknown, vParam4: unknown): unknown;

  function file_source_get_upload_file_url(fileSourceId: number, fileName: string): unknown;

  function file_source_upload_file(fileSourceId: number, fileUrl: string, tempFileUrl: string): unknown;

  function file_source_get_file_to_save_url(fileSourceId: number, resourceId: number, uid: string): string;

  function file_source_get_temp_file_to_save_url(fileSourceId: number, resourceId: number, uid: string): unknown;

  function file_source_clear_old_file(fileSourceId: number, oldFileUrl: string, curFileUrl: string): unknown;

  function file_source_get_files_list(fileSourceId: number): unknown;

  function file_source_download_file(fileSourceId: number, uid: string, oRequestPARAM: unknown, oResponsePARAM: unknown): unknown;

  function file_source_get_file_url(fileSourceId: number, uid: string): unknown;

  function call_webinar_system_method(webinarSystemId: number, methodName: number, oParams: unknown): unknown;

  function get_webinar_system_topelem(webinarSystemId: number): unknown;

  function call_library_system_method(librarySystemId: number, methodName: number, oParams: unknown): unknown;

  function calculate_statistic_rec(statisticRecId: number, objectId: number, bIgnorePeriodSettingsParam: unknown, bCalculateCatalogsParam: unknown): unknown;

  function get_statistic_data(statisticRecId: number, objectId: number, periodType: string, dateStart: Date, dateEnd: Date): unknown;

  function obtain_statistic_data(StatisticRec: unknown, objectId: number, periodType: string, dateStart: Date, dateEnd: Date, bVirtual: unknown, bForceRedo: unknown): unknown;

  function assign_from_object(fldTarget: unknown, oSourceParam: unknown): unknown;

  /**
   * Функция открывает документ и возвращает его.
   * Если не смогла открыть, возвращает undefined.
   * @param {string|number} documentId - Id документа.
   * @returns {T|undefined} XML документ или undefined.
   */
  function open_doc<T = XmlDocument>(documentId: number): T | undefined;

  function filling_learning_parts(TopElem: unknown): unknown;

  function parse_email_address(sAddressParam: unknown): unknown;

  function safe_execution(sCodeSaveExecutionParam: unknown, oEnvParam?: unknown): unknown;

  function get_content_access(personId: number, tePerson: unknown): unknown;

  function update_content_access(idOrTE_UserPARAM: unknown, sCatalogPARAM: unknown, idOrTE_ObjectID: unknown, bCanEditPARAM: boolean, bCanDeletePARAM: boolean): unknown;

  function set_default_content(teContentPARAM: unknown, teSubjectPARAM: unknown): unknown;
  let upgrade_locked: XmlElem<boolean>;
  let in_place_upgrade: XmlElem<boolean>;

  function set_upgrade_locked(bParam: unknown): unknown;
  let os_type: XmlElem<string>;
  let dotnet_host: DotNetCoreHost | null;
  let object_assembly: Variant<Websoft.Interfaces>;

  /**
   * Возвращает объект библиотеки.
   * @param {T} libraryName - Название библиотеки.
   * @returns {WebsoftDlls[T]} Класс работы с библиотекой.
   */
  function get_object_assembly<T extends keyof Websoft.Interfaces>(libraryName: T): T extends keyof Websoft.Interfaces ? Websoft.Interfaces[T] : T;

  function create_committee_member(objectID: number, objectTopElem: unknown, iPersonnelCommitteeIDParam: unknown, strCommitteeMemberTypeParam: unknown): unknown;

  function activate_poll_to_person(personId: unknown, oPollID: unknown, iPollProcedureID: unknown, iEducationPlanID: unknown): unknown;

  function delete_poll_result(oPollResultParam: unknown, tePollParam: unknown): unknown;

  function array_opt_find_by_key(arrParam: unknown, sKeyParam: unknown, oValueParam: unknown): unknown;
  let crypto_obj: XmlElem<unknown>;

  function crypto_obj_init(): unknown;

  function get_default_proctoring_system_id(): unknown;

  function data_type(v: unknown, detailed: unknown): unknown;

  function get_list_lngs(): unknown;

  function check_periodity(fldPeriodityParam: unknown, _cur_date: unknown, iSleepSecParam: unknown): unknown;

  function upload_begin(url: string, iLenghtParam: unknown): unknown;

  function upload_range(id: string, iStartIndexParam: unknown, iFinishIndexParam: unknown, sDataParam: unknown): unknown;

  function upload_end(id: string): unknown;

  function get_oapi_schemas(): unknown;
  let dotnet_xhttp_middleware: XmlElem<unknown>;

  function is_simple_array_field(fldParam: unknown): unknown;

  function restore_doc(objectID: number): unknown;

  function ValidateName(str: unknown, is_var: unknown): unknown;

  function check_event_fields(eventId: number, docEvent: unknown, teEvent: unknown): unknown;

  function get_code_library(library: unknown): unknown;

  function lite_call_code_library_method(libraryUrl: unknown, methodName: string, arrParams: unknown): unknown;

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
  function call_code_library_method<T, K>(library: string, method: string, arrParams: T): K;

  function get_params_code_library(library: unknown): unknown;

  function get_process_param(library: unknown, nameAttr: string): unknown;

  function get_code_library_error_message(oLibResParam: unknown, oEnvParam: unknown): unknown;

  function parse_throw_error(errorStr: string, error: unknown): unknown;

  function split_errortext(errorStr: string): unknown;

  function get_code_library_result_object(oLibResParam: unknown, oEnvParam: unknown): unknown;

  function amgr_get_agent_list_json(): unknown;

  function amgr_cancel_agent(roleUID: unknown, threadID: unknown): unknown;

  function amgr_kill_role(nodeId: unknown, roleUID: unknown): unknown;

  function get_doc_desc(objectTopElem: unknown): unknown;

  function get_client_data(sLogin: unknown, sPassword: unknown): unknown;
  let webinar_conversation_participants_obj: XmlElem<unknown>;

  function get_webinar_conversation_participants(iWebinarSystemId: unknown): unknown;

  function update_webinar_conversation_participants(webinarSystemId: number): unknown;
  let system_event_handlers_obj: XmlElem<unknown>;

  function get_system_event_handlers(systemEventId: number): unknown;

  function add_system_event_handlers_to_obj(systemEventId: number, systemEventHandlerId: number, teSystemEventHandler: unknown): unknown;

  function del_system_event_handlers_from_obj(systemEventId: number, systemEventHandlerId: number): unknown;

  function add_object_to_package(docObject: unknown, iObjectID: unknown, Screen: unknown, fldPackage: unknown): unknown;

  function generate_qr(text: string, options: unknown): unknown;

  function repeate_learning_activation(leartning: unknown): unknown;

  function person_hierarchy_build(aInstructions: unknown): unknown;
  function person_hierarchy_build_all(): unknown;
  let file_sources_obj: XmlElem<unknown | null>;
  let cache_code_librarys_obj: XmlElem<unknown | null>;
  function update_file_sources(fileSourceId: number, fileSourceTopElem: XmlTopElem): unknown;
  function init_cache_code_librarys(codeLibraryId: number): unknown;
  function get_cache_code_librarys(codeLibraryId: number): unknown;
  function update_cache_code_librarys(codeLibraryId: number, paramCodeLibraryTopElem: XmlTopElem): unknown;
  function drop_cache_code_library(codeLibraryIds: unknown): unknown;
  function getDayYear(date: Date): unknown;
  function getWeekYear(date: Date): unknown;
  function create_search_condition(searchString: string, catalogName: string, arrSearchFieldNames: unknown[], foreignFieldName: string, searchType: string): unknown;
  function get_access_role_claims(update: Date): unknown;

  function remove_fetch_doc(objectId: number): unknown;

  function open_excel(fileUrl: string): unknown;
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
    /** Id collaborator. */
    personId: number;
    /** Id test. */
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
    // eslint-disable-next-line no-magic-numbers
    id: 0 | 1 | 2 | 3 | 4;
    strMessage: string;
  };

  type GetFormUploadDataResult = XmlElem<unknown, unknown> & {
    id: string;
    create_date: Date;
    server_version: string;
  };

  /**
   * Информация об успехе выполнения функции или об ошибке.
   * Результирующий объект oRes имеет три свойства:
   * - код oRes.error;
   * - URL файла данных oRes.data_file_url;
   * - и сведения об ошибке oRes.error_text.
   */
  interface DownloadDataResponse {
    error: number;
    data_fileurl: string;
    error_text: string;
  }

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
}
