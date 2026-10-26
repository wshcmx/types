declare namespace tools_web {

  /**
   * Проверяет наличие настроек доступа.
   * @param {unknown} fldAccess - Поле настроек доступа.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function access_exists(fldAccess: unknown): boolean;

  /**
   * Путь до wt/web директории сервера.
   * @returns {string} Путь.
   */
  let web_url: XmlElem<string | null>;

  /**
   * Формирует URL запроса с учетом хоста и пути.
   * @param {string} url - URL.
   * @param {string} hostAndPath - Хост и путь.
   * @returns {string} Результат выполнения.
   */
  function build_query_url(url: string, hostAndPath: string): string;

  /**
   * Формирует относительный URL.
   * @param {string} url - URL.
   * @returns {string} Результат выполнения.
   */
  function build_relative_url(url: string): string;

  /**
   * Формирует строку с учетом исходного текста и подстановок.
   * @param {string} sourceString - Исходная строка.
   * @param {string} realString - Строка сопоставления.
   * @param {string} destString - Строка подстановки.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function build_submatched_string(sourceString: string, realString: string, destString: string): unknown;

  /**
   * Проверяет доступ сотрудника к объекту в контексте сессии.
   * @param {XmlTopElem} source - Исходные данные.
   * @param {number} personDocId - Идентификатор документа сотрудника.
   * @param {CollaboratorDocumentTopElem} [personDoc] - Данные сотрудника.
   * @param {Session} [session] - Сессия.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function check_access(source: XmlTopElem, personDocId: number, personDoc?: CollaboratorDocumentTopElem, session?: Session): boolean;

  /**
   * Проверяет доступ пользователя к коллекции объектов.
   * @param {object} curUser - Текущий пользователь.
   * @param {object} object - Обрабатываемый объект.
   * @param {string} personAccessType - Тип доступа сотрудника.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function check_collection_access(curUser: Object, object: Object, personAccessType: string): boolean;

  /**
   * Проверяет доступ пользователя к записи форума.
   * @param {ForumEntryDocumentTopElem} formEntryTopElem - Корневой элемент записи форума.
   * @param {CollaboratorDocumentTopElem} userTopElem - Корневой элемент пользователя.
   * @param {number} userId - Идентификатор пользователя.
   * @param {ForumDocumentTopElem} [forumTopElem] - Корневой элемент форума.
   * @returns {ReturnType<typeof is_moderator_forum>} Результат выполнения.
   */
  function check_forum_entry_access(formEntryTopElem: ForumEntryDocumentTopElem, userTopElem: CollaboratorDocumentTopElem, userId: number, forumTopElem?: ForumDocumentTopElem): ReturnType<typeof is_moderator_forum>;

  /**
   * Проверяет расписание обучения.
   * @param {number | XmlTopElem} learning - Идентификатор или корневой элемент обучения.
   * @param {XmlTopElem} [objectTopElem] - Корневой элемент объекта.
   * @returns {object} Результат выполнения.
   */
  function check_learning_schedule(learning: number | XmlTopElem, objectTopElem?: XmlTopElem): {
    error: 0 | 1;
    error_text: string;
  };

  /**
   * Проверяет объект на соответствие указанному типу.
   * @param {XmlElem<unknown>} xmCurObject - Проверяемый XML-элемент.
   * @param {string} type - Тип или режим обработки.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function check_object(xmCurObject: XmlElem<unknown>, type: string): boolean;

  /**
   * Проверяет адрес перенаправления в контексте URL запроса.
   * @param {string} url - URL.
   * @param {string} requestUrl - URL исходного запроса.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function check_redirect_url(url: string, requestUrl: string): boolean;

  /**
   * Проверяет контрольный идентификатор сессии.
   * @param {string} sum - Проверяемое контрольное значение.
   * @param {number} sessionId - Идентификатор сессии.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function check_secid(sum: string, sessionId: number): unknown;

  /**
   * Проверяет соответствие пользователя сессии запроса.
   * @param {Request} request - Объект запроса.
   * @param {number} userId - Идентификатор пользователя.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function check_session_user(request: Request, userId: number): boolean;

  /**
   * Проверяет доступ сотрудника к сайту.
   * @param {CollaboratorDocument} personTopElem - Данные сотрудника.
   * @param {SiteDocumentTopElem | number} site - Корневой элемент или идентификатор сайта.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function check_site_access(personTopElem: CollaboratorDocument, site: SiteDocumentTopElem | number): boolean;

  /**
   * Проверяет контрольное значение идентификатора объекта для сессии.
   * @param {string} id - Идентификатор.
   * @param {string} sum - Проверяемое контрольное значение.
   * @param {number} sessionId - Идентификатор сессии.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function check_sum_sid(id: string, sum: string, sessionId: number): boolean;

  /**
   * Проверяет веб-правило для URL и запроса.
   * @param {string} url - URL.
   * @param {Request} request - Объект запроса.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function check_web_rule_by_url(url: string, request: Request): boolean;

  // Проверяет видимость файлов объекта.
  /**
   * Проверяет видимость файлов объекта для пользователя.
   * @param {unknown} fldFile - Поле файла.
   * @param {number} userId - Идентификатор пользователя.
   * @param {number} objectId - Идентификатор объекта.
   * @param {XmlTopElem} objectTopElem - Корневой элемент объекта.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function CheckRelativeFileVisibility(fldFile: unknown, userId: number, objectId: number, objectTopElem: XmlTopElem): unknown;

  // В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
  /**
   * Очищает HTML-текст от разметки BBCode.
   * @param {string} messageSource - Исходный текст сообщения.
   * @param {Websoft.RegExp.RegExp} [objRegExp] - Объект регулярных выражений.
   * @returns {string} Результат выполнения.
   */
  function clear_bbcode_from_html(messageSource: string, objRegExp?: Websoft.RegExp.RegExp): string;

  // В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
  /**
   * Очищает кэш изображения сотрудника.
   * @param {number} personId - Идентификатор сотрудника.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function clear_person_pict_cache(personId: number): unknown;

  /**
   * Очищает стандартные веб-правила.
   * @returns {true} Значение true согласно объявленному типу.
   */
  function clear_std_web_rules(): true;

  /**
   * Закрывает запись форума.
   * @param {number} forumEntryId - Идентификатор записи форума.
   * @param {ForumEntryDocumentTopElem} [forumEntryTopElem] - Корневой элемент записи форума.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function close_forum_entry(forumEntryId: number, forumEntryTopElem?: ForumEntryDocumentTopElem): boolean;

  /**
   * Преобразует текст BBCode в HTML.
   * @param {string} messageSource - Исходный текст сообщения.
   * @param {Websoft.RegExp.RegExp} [objRegExp] - Объект регулярных выражений.
   * @returns {string} Результат выполнения.
   */
  function convert_bbcode_to_html(messageSource: string, objRegExp?: Websoft.RegExp.RegExp): string;

  /**
   * Преобразует теги BBCode в HTML.
   * @param {string} messageSource - Исходный текст сообщения.
   * @param {Websoft.RegExp.RegExp} [objRegExp] - Объект регулярных выражений.
   * @returns {string} Результат выполнения.
   */
  function convert_bbtags_to_html(messageSource: string, objRegExp?: Websoft.RegExp.RegExp): string;

  /**
   * Преобразует описание в HTML.
   * @param {string} desc - Описание.
   * @returns {string} Результат выполнения.
   */
  function convert_desc_to_html(desc: string): string;

  /**
   * Преобразует HTML в текст BBCode.
   * @param {string} messageSource - Исходный текст сообщения.
   * @param {Websoft.RegExp.RegExp} [objRegExp] - Объект регулярных выражений.
   * @returns {string} Результат выполнения.
   */
  function convert_html_to_bbcode(messageSource: string, objRegExp?: Websoft.RegExp.RegExp): string;

  /**
   * Преобразует URL в человекочитаемое представление режима.
   * @param {string} url - URL.
   * @returns {ReturnType<typeof get_mode_clean_url>} Результат выполнения.
   */
  function convert_mode_clean_url(url: string): ReturnType<typeof get_mode_clean_url>;

  /**
   * Преобразует содержимое ответа XHTTP с учетом исходного описания.
   * @param {string} textArea - Содержимое текстовой области.
   * @param {string} sourceDesc - Исходное описание.
   * @returns {string} Результат выполнения.
   */
  function convert_xhttp_res(textArea: string, sourceDesc: string): string;

  /**
   * Преобразует текст с учетом указанного режима обработки XSS.
   * @param {string} text - Исходный текст.
   * @param {string} [type] - Тип или режим обработки.
   * @returns {string} Результат выполнения.
   */
  function convert_xss(text: string, type?: string): string;

  /**
   * Создает соединение пользователя с учебным объектом.
   * @param {XmlTopElem} objectTopElem - Корневой элемент объекта.
   * @param {XmlTopElem} userTopElem - Корневой элемент пользователя.
   * @param {string | null | undefined} partCode - Код части учебного объекта.
   * @returns {number} Результат выполнения.
   */
  function create_learning_connection(objectTopElem: XmlTopElem, userTopElem: XmlTopElem, partCode: string | null | undefined): number;

  /**
   * Создает ресурс из вложения для сотрудника.
   * @param {object} attachment - Вложение.
   * @param {number} personId - Идентификатор сотрудника.
   * @param {XmlTopElem} personTopElem - Данные сотрудника.
   * @returns {ResourceDocument} Результат выполнения.
   */
  function create_resource_from_attacment(attachment: Object, personId: number, personTopElem: XmlTopElem): ResourceDocument;

  /**
   * Заполняет пользовательские поля объекта и возвращает сведения о проверке заполнения.
   * @param {unknown} fldTarget - Целевой элемент.
   * @param {object} source - Исходные данные.
   * @param {null | unknown[]} arrCustomElems - Массив пользовательских полей.
   * @param {object} params - Параметры операции.
   * @returns {object} Результат выполнения.
   */
  function custom_elems_filling(fldTarget: unknown, source: Object, arrCustomElems: null | unknown[], params: Object): {
    error: 0 | 1;
    error_text: string;
    title: string;
    mandatory_fields: unknown[];
    condition_fields: unknown[]
  };

  /**
   * Декодирует зарезервированные символы URL.
   * @param {string} url - URL.
   * @returns {string} Результат выполнения.
   */
  function decode_url_reserved(url: string): string;

  /**
   * Расшифровывает идентификатор запуска.
   * @param {string} launchId - Идентификатор запуска.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function decrypt_launch_id(launchId: string): unknown;

  /**
   * Ссылка на раздел портала.
   * @param {DocumentDocumentTopElem["attributes"]} attributes - Параметры.
   * @returns {string} Ссылка на документ.
   */
  function doc_link(attributes: DocumentDocumentTopElem["attributes"]): string;

  /**
   * Формирует представление календаря для элемента страницы.
   * @param {string} objectName - Название каталога или типа объекта.
   * @param {unknown} objectValue - Значение элемента страницы.
   * @param {string} format - Формат представления.
   * @returns {string} Результат выполнения.
   */
  function draw_calendar(objectName: string, objectValue: unknown, format: string): string;

  // В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
  /**
   * Сбрасывает активные веб-шаблоны.
   * @returns {number} Результат выполнения.
   */
  function drop_active_web_templates(): number;

  /**
   * Кодирует зарезервированные символы URL.
   * @param {string} url - URL.
   * @returns {string} Результат выполнения.
   */
  function encode_url_reserved(url: string): string;

  /**
   * Декоратор для простого шифрования функцией StrSimpleEncrypt({objectId}_{date}).
   * @param {string} launchId - Id объекта.
   * @param {Date} endDate - Дата.
   * @returns {string} Значение StrSimpleEncrypt({objectId}_{date}).
   */
  function encrypt_launch_id(launchId: string, endDate: Date): string;

  /**
   * Формирует скриптовое представление окружения.
   * @param {Env} env - Окружение выполнения.
   * @returns {string} Результат выполнения.
   */
  function env_to_script(env: Env): string;

  /**
   * Выполняет скрипт операции с указанными параметрами.
   * @param {number} operationId - Идентификатор операции.
   * @param {string} scriptType - Тип скрипта операции.
   * @param {object} params - Параметры операции.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function eval_operation_script(operationId: number, scriptType: string, params: Object): unknown;

  /**
   * Вычисляет значение языковой константы для веб-колонки.
   * @param {string} name - Имя параметра или константы.
   * @param {unknown} fldLng - Языковые данные.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function eval_web_column_const(name: string, fldLng: unknown): unknown;

  /**
   * Выполняет удаленное действие в контексте запроса.
   * @param {number | RemoteActionCatalogDocumentTopElem} vRemoteActionDoc - Идентификатор или корневой элемент удаленного действия.
   * @param {Request} request - Объект запроса.
   * @returns {ReturnType<RemoteActionDocumentTopElem["evaluate"]>} Результат выполнения.
   */
  function evaluate_remote_action(vRemoteActionDoc: number | RemoteActionCatalogDocumentTopElem, request: Request): ReturnType<RemoteActionDocumentTopElem["evaluate"]>;

  /**
   * Выполняет внешнюю команду в переданном окружении.
   * @param {string} command - Выполняемая команда.
   * @param {object} params - Параметры операции.
   * @param {Env} env - Окружение выполнения.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function external_eval(command: string, params: Object, env: Env): unknown;

  /**
   * Завершает запись данных профилирования.
   * @param {string} id - Идентификатор.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function finish_profiling_record(id: string): unknown;

  /**
   * Возвращает хеш параметров активного веб-шаблона.
   * @param {string} mode - Режим обработки или отображения.
   * @param {string} accessLevel - Уровень доступа.
   * @param {string} accessRole - Роль доступа.
   * @param {string} siteId - Идентификатор сайта.
   * @param {string} webDesignId - Идентификатор веб-дизайна.
   * @returns {string} Результат выполнения.
   */
  function get_active_web_template_hash(mode: string, accessLevel: string, accessRole: string, siteId: string, webDesignId: string): string;

  /**
   * Возвращает запрос в административном контексте.
   * @returns {Request} Результат выполнения.
   */
  function get_admin_request(): Request;

  /**
   * Возвращает объект пользовательского интерфейса приложения.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_app_ui(): unknown;

  /**
   * Возвращает хеш данных аутентификации.
   * @param {string} source - Исходные данные.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_auth_hash(source: string): unknown;

  /**
   * Возвращает базовый путь URL из окружения.
   * @param {object} env - Окружение выполнения.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_base_url_path(env: Object): unknown;

  /**
   * Возвращает идентификаторы тегов BBCode в исходном тексте.
   * @param {string} messageSource - Исходный текст сообщения.
   * @param {Websoft.RegExp.RegExp} [objRegExp] - Объект регулярных выражений.
   * @returns {object} Результат выполнения.
   */
  function get_bbcode_tag_ids(messageSource: string, objRegExp?: Websoft.RegExp.RegExp): Object;

  /**
   * Возвращает данные, колонки и заголовки списка каталога.
   * @param {ReturnType<typeof get_collection_param>} collection - Параметры коллекции.
   * @param {Env} env - Окружение выполнения.
   * @param {Env["curLngWeb"]} envLngCommon - Языковые данные окружения.
   * @returns {object} Результат выполнения.
   */
  function get_catalog_list_arrays(collection: ReturnType<typeof get_collection_param>, env: Env, envLngCommon: Env["curLngWeb"]): {
    arrData: unknown[];
    arrColumns: unknown[];
    arrHeaders: unknown[];
    iDataTotalCount: number;
    iDispFieldIndex: number;
    iLinkFieldIndex: number;
    sSortDataFieldName: string;
    sQuery: string;
  };

  /**
   * Возвращает дочерний элемент по ключу с учетом значения по умолчанию.
   * @param {unknown} fldSource - Исходный элемент.
   * @param {string} key - Ключ кэша или имя ключевого поля.
   * @param {string} defaultValue - Значение по умолчанию.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_child_by_key_value(fldSource: unknown, key: string, defaultValue: string): unknown;

  /**
   * Возвращает класс оформления для указанного статуса.
   * @param {string} status - Статус.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_class_for_status(status: string): unknown;

  /**
   * Формирует человекочитаемый URL с исключением указанных параметров запроса.
   * @param {string} url - URL.
   * @param {string} excParams - Исключаемые параметры запроса.
   * @param {object} params - Параметры операции.
   * @returns {ReturnType<typeof get_mode_clean_url>} Результат выполнения.
   */
  function get_clean_url_exc_query(url: string, excParams: string, params: Object): ReturnType<typeof get_mode_clean_url>;

  /**
   * Возвращает параметры выборки и отображения коллекции.
   * @returns {object} Результат выполнения.
   */
  function get_collection_param(): {
    catalog_name: string;
    xquery_qual: string;
    view_type: string;
    external_eval: string;
    check_access: boolean;
    open_doc: boolean;
    disp_array: boolean;
    array: string;
    array_selected: string;
    list_columns: string;
    list_headers: string;
    col_headers: string;
    col_cells: string;
    disp_sort: boolean;
    sort_index: null;
    sort_direct: string;
    disp_link: string;
    link_field_index: number;
    link_object_field: string;
    link_action: string;
    link_mode: string;
    link_prop: string;
    disp_check_box: boolean;
    is_data_grid: boolean;
    filter_id: string;
    filter_conditions: string;
    search: string;
  };

  /**
   * Возвращает ширину колонки для указанного типа и режима.
   * @param {string} type - Тип или режим обработки.
   * @param {string} mode - Режим обработки или отображения.
   * @returns {string} Результат выполнения.
   */
  function get_column_width(type: string, mode: string): string;

  /**
   * Возвращает текущее окружение запроса.
   * @param {unknown} request - Объект запроса.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_cur_env(request: unknown): unknown;

  /**
   * Возвращает URL текущего окружения.
   * @param {unknown} env - Окружение выполнения.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_cur_env_url(env: unknown): unknown;

  /**
   * Возвращает текущий хост для запроса.
   * @param {object} request - Объект запроса.
   * @returns {HostDocumentTopElem | null} Результат выполнения.
   */
  function get_cur_host(request: Object): HostDocumentTopElem | null;

  /**
   * Возвращает имя текущего хоста в контексте запроса.
   * @param {XmlTopElem} hostTopElem - Корневой элемент хоста.
   * @param {Request} request - Объект запроса.
   * @returns {string} Результат выполнения.
   */
  function get_cur_host_name(hostTopElem: XmlTopElem, request: Request): string;

  /**
   * Возвращает путь текущего хоста в контексте запроса.
   * @param {XmlTopElem} hostTopElem - Корневой элемент хоста.
   * @param {Request} request - Объект запроса.
   * @returns {ReturnType<typeof get_cur_host_path_by_url>} Результат выполнения.
   */
  function get_cur_host_path(hostTopElem: XmlTopElem, request: Request): ReturnType<typeof get_cur_host_path_by_url>;

  /**
   * Возвращает путь текущего хоста для указанного URL.
   * @param {XmlTopElem} hostTopElem - Корневой элемент хоста.
   * @param {string} url - URL.
   * @returns {string} Результат выполнения.
   */
  function get_cur_host_path_by_url(hostTopElem: XmlTopElem, url: string): string;

  /**
   * Возвращает записи каталога хостов для запроса.
   * @param {object} request - Объект запроса.
   * @returns {HostCatalogDocumentTopElem[]} Результат выполнения.
   */
  function get_cur_hosts(request: Object): HostCatalogDocumentTopElem[];

  /**
   * Возвращает языковой вариант текста для указанного кода языка.
   * @param {string} text - Исходный текст.
   * @param {string} shortId - Краткий код языка.
   * @returns {string} Результат выполнения.
   */
  function get_cur_lng_name(text: string, shortId: string): string;

  /**
   * Возвращает объект текущего языка по указанному значению.
   * @param {object} id - Идентификатор.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_cur_lng_obj(id: Object): unknown;

  /**
   * Возвращает текущий объект по полю окружения.
   * @param {unknown} env - Окружение выполнения.
   * @param {string} field - Имя поля.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_cur_object_by_field(env: unknown, field: string): unknown;

  /**
   * Возвращает текущий сайт из окружения.
   * @param {unknown} env - Окружение выполнения.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_cur_site(env: unknown): unknown;

  /**
   * Возвращает текущий веб-дизайн из окружения.
   * @param {unknown} env - Окружение выполнения.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_cur_web_design(env: unknown): unknown;

  /**
   * Возвращает текущий веб-режим из окружения.
   * @param {unknown} env - Окружение выполнения.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_cur_web_mode(env: unknown): unknown;

  /**
   * Возвращает URL пользовательского веб-шаблона.
   * @param {number} templateId - Идентификатор веб-шаблона.
   * @returns {ReturnType<typeof get_object_source_url>} Результат выполнения.
   */
  function get_custom_web_template_url(templateId: number): ReturnType<typeof get_object_source_url>;

  // В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
  /**
   * Возвращает значение из кэша данных по ключу.
   * @param {string} key - Ключ кэша или имя ключевого поля.
   * @returns {T | null} Результат выполнения.
   */
  function get_data_cache<T>(key: string): T | null;

  // В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
  /**
   * Возвращает данные кэша по шаблону ключа.
   * @param {string} pattern - Шаблон ключа кэша.
   * @returns {unknown | null | []} Результат выполнения.
   */
  function get_data_cache_by_pattern(pattern: string): unknown | null | [];

  /**
   * Формирует локализованное описание времени, прошедшего с указанной даты.
   * @param {Date} date - Дата.
   * @param {string} curLngId - Идентификатор текущего языка.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_date_passed_string(date: Date, curLngId: string): unknown;

  /**
   * Формирует локализованное описание времени, оставшегося до указанной даты.
   * @param {Date} date - Дата.
   * @param {string} curLngId - Идентификатор текущего языка.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_date_remain_string(date: Date, curLngId: string): unknown;

  /**
   * Возвращает языковые данные веб-интерфейса для сотрудника.
   * @param {CollaboratorDocumentTopElem | number} user - Данные или идентификатор сотрудника.
   * @returns {IUiLng["items"]} Результат выполнения.
   */
  function get_default_lng_web(user: CollaboratorDocumentTopElem | number): IUiLng["items"];

  /**
   * Возвращает пустое окружение.
   * @returns {Env} Результат выполнения.
   */
  function get_empty_env(): Env;

  /**
   * Возвращает объект пустого запроса.
   * @returns {Session} Результат выполнения.
   */
  function get_empty_request(): Session;

  /**
   * Возвращает включенные веб-правила.
   * @returns {WebRuleCatalogDocumentTopElem[]} Результат выполнения.
   */
  function get_enabled_web_rules(): WebRuleCatalogDocumentTopElem[];

  /**
   * Возвращает игровой рейтинг сотрудников с учетом фильтров.
   * @param {CurUser} curUser - Текущий пользователь.
   * @param {boolean} checkLevel - Флаг учета уровня.
   * @param {string} currencyTypeId - Идентификатор типа валюты рейтинга.
   * @param {boolean} allLevel - Флаг обработки всех уровней.
   * @param {boolean} dispSub - Флаг учета подразделений.
   * @param {number} subDepth - Глубина обработки подразделений.
   * @param {number} grpColl - Параметр группировки сотрудников.
   * @param {object} paging - Параметры постраничного вывода.
   * @param {number} curUserId - Идентификатор текущего пользователя.
   * @param {boolean} range - Флаг диапазона выборки.
   * @param {number} amntCollsRating - Количество сотрудников в рейтинге.
   * @param {string} gap - Параметр интервала рейтинга.
   * @param {boolean} samePlace - Флаг учета одинаковых мест в рейтинге.
   * @param {boolean} showTopRating - Флаг отображения верхних позиций рейтинга.
   * @param {number} orgId - Идентификатор организации.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_game_rating(curUser: CurUser, checkLevel: boolean, currencyTypeId: string, allLevel: boolean, dispSub: boolean, subDepth: number, grpColl: number, paging: Object, curUserId: number, range: boolean, amntCollsRating: number, gap: string, samePlace: boolean, showTopRating: boolean, orgId: number): unknown;

  /**
   * Возвращает общий игровой рейтинг с учетом фильтров.
   * @param {boolean} allLevel - Флаг обработки всех уровней.
   * @param {boolean} checkLevel - Флаг учета уровня.
   * @param {number} levelId - Идентификатор уровня.
   * @param {boolean} dispSub - Флаг учета подразделений.
   * @param {number} subdivId - Идентификатор подразделения.
   * @param {number} subdivNum - Параметр количества подразделений.
   * @param {string} currencyTypeId - Идентификатор типа валюты рейтинга.
   * @param {number} grpColl - Параметр группировки сотрудников.
   * @param {object} paging - Параметры постраничного вывода.
   * @param {boolean} range - Флаг диапазона выборки.
   * @param {number} amntCollsRating - Количество сотрудников в рейтинге.
   * @param {boolean} samePlace - Флаг учета одинаковых мест в рейтинге.
   * @param {boolean} showTopRating - Флаг отображения верхних позиций рейтинга.
   * @param {number} orgId - Идентификатор организации.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_game_rating_all(allLevel: boolean, checkLevel: boolean, levelId: number, dispSub: boolean, subdivId: number, subdivNum: number, currencyTypeId: string, grpColl: number, paging: Object, range: boolean, amntCollsRating: number, samePlace: boolean, showTopRating: boolean, orgId: number): unknown;

  /**
   * Возвращает игровой рейтинг по наградам или значкам.
   * @param {XmlTopElem} personTopElem - Данные сотрудника.
   * @param {boolean} allLevel - Флаг обработки всех уровней.
   * @param {boolean} checkLevel - Флаг учета уровня.
   * @param {number} levelId - Идентификатор уровня.
   * @param {number} amntCollsRating - Количество сотрудников в рейтинге.
   * @param {boolean} dispSub - Флаг учета подразделений.
   * @param {number} subdivId - Идентификатор подразделения.
   * @param {number} subdivNum - Параметр количества подразделений.
   * @param {string} currencyTypeId - Идентификатор типа валюты рейтинга.
   * @param {number} grpColl - Параметр группировки сотрудников.
   * @param {object} paging - Параметры постраничного вывода.
   * @param {boolean} range - Флаг диапазона выборки.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_game_rating_awards_or_badges(personTopElem: XmlTopElem, allLevel: boolean, checkLevel: boolean, levelId: number, amntCollsRating: number, dispSub: boolean, subdivId: number, subdivNum: number, currencyTypeId: string, grpColl: number, paging: Object, range: boolean): unknown;

  /**
   * Разбирает строку заголовка в объектное представление.
   * @param {string} header - Строка заголовка.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_header_obj(header: string): unknown;

  /**
   * Возвращает имя хоста из URL.
   * @param {string} url - URL.
   * @returns {string} Результат выполнения.
   */
  function get_host_name(url: string): string;

  /**
   * Возвращает объект хоста для запроса.
   * @param {unknown} request - Объект запроса.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_host_obj(request: unknown): unknown;

  /**
   * Возвращает значение целей для указанного элемента.
   * @param {unknown} fldItem - Поле элемента с целями.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_item_objectives_value(fldItem: unknown): unknown;

  /**
   * Возвращает список ключевых должностей для сотрудника.
   * @param {number} personId - Идентификатор сотрудника.
   * @param {object} struct - Параметры структуры выборки.
   * @returns {unknown[]} Результат выполнения.
   */
  function get_key_positions_list(personId: number, struct: Object): unknown[];

  /**
   * Возвращает описание для языка текущего окружения.
   * @param {string} desc - Описание.
   * @param {object} env - Окружение выполнения.
   * @returns {string} Результат выполнения.
   */
  function get_language_desc(desc: string, env: Object): string;

  /**
   * Возвращает локализованное полное имя сотрудника.
   * @param {XmlTopElem} personTopElem - Данные сотрудника.
   * @param {unknown} fldLng - Языковые данные.
   * @returns {string} Результат выполнения.
   */
  function get_lng_fullname(personTopElem: XmlTopElem, fldLng: unknown): string;

  /**
   * Возвращает идентификатор на основе MD5.
   * @param {string} hashStr - Строка для вычисления MD5.
   * @returns {string} Результат выполнения.
   */
  function get_md5_id(hashStr: string): string;

  /**
   * Возвращает пункты меню с учетом глубины и параметров отображения.
   * @param {string} menuCode - Код меню.
   * @param {number} levelsToShow - Количество отображаемых уровней меню.
   * @param {boolean} showDesc - Флаг отображения описаний.
   * @param {number} cacheTime - Время хранения в кэше.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_menu_items(menuCode: string, levelsToShow: number, showDesc: boolean, cacheTime: number): unknown;

  /**
   * Формирует человекочитаемый URL для режима и объекта.
   * @param {string} mode - Режим обработки или отображения.
   * @param {number} [objectId] - Идентификатор объекта.
   * @param {object} [params] - Параметры операции.
   * @returns {string} Результат выполнения.
   */
  function get_mode_clean_url(mode: string, objectId?: number, params?: Object): string;

  /**
   * Возвращает части составного запроса.
   * @param {unknown} request - Объект запроса.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_multipart_array(request: unknown): unknown;

  /**
   * Возвращает карточку связи сотрудника с объектом указанного каталога.
   * @param {string} [catalog] - Название каталога.
   * @param {number} [userId] - Идентификатор пользователя.
   * @param {boolean} [docHimself] - Флаг выбора документа самого объекта.
   * @param {boolean} [makeNewOnAbsence] - Флаг создания карточки при ее отсутствии.
   * @returns {undefined | PersonObjectLinkDocument | PersonObjectLinkDocumentTopElem} Результат выполнения.
   */
  function get_my_person_object_link_card(catalog?: string, userId?: number, docHimself?: boolean, makeNewOnAbsence?: boolean): undefined | PersonObjectLinkDocument | PersonObjectLinkDocumentTopElem;

  /**
   * Cоздание новой заявки на основе входных параметров объекта Request.
   * @returns {RequestDocumentTopElem} Новый объект заявки.
   */
  function get_new_request_by_query(): RequestDocumentTopElem;

  /**
   * Возвращает URL изображения объекта.
   * @param {object} object - Обрабатываемый объект.
   * @param {boolean} dispDefault - Флаг использования представления по умолчанию.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_object_image_url(object: Object, dispDefault: boolean): unknown;

  /**
   * Формирует ссылку на объект по его каталогу и идентификаторам.
   * @param {string} objectName - Название каталога или типа объекта.
   * @param {number} objectId - Идентификатор объекта.
   * @param {XmlTopElem} objectTopElem - Корневой элемент объекта.
   * @param {number} docId - Идентификатор документа.
   * @returns {string} Результат выполнения.
   */
  function get_object_link(objectName: string, objectId: number, objectTopElem: XmlTopElem, docId: number): string;

  /**
   * Возвращает владельцев объекта и их права на изменение и удаление.
   * @param {number} objectId - Идентификатор объекта.
   * @param {string} catalog - Название каталога.
   * @returns {object[]} Результат выполнения.
   */
  function get_object_owners(objectId: number, catalog: string): {
    person_id: number;
    can_edit: boolean;
    can_delete: boolean;
  }[];

  /**
   * Получение url ссылки объекта по Id.
   * @param {string} catalogType - Каталог объекта.
   * @param {number} objectId - Id объекта.
   * @param {object | string} [params] - Параметры для определения хоста/сессии/etc.
   * @returns {string} Url.
   */
  function get_object_source_url(catalogType: string, objectId: number, params?: Object | string): string;

  /**
   * Возвращает код скрипта операции.
   * @param {number} operationId - Идентификатор операции.
   * @param {string} scriptType - Тип скрипта операции.
   * @param {object} [params] - Параметры операции.
   * @returns {string} Результат выполнения.
   */
  function get_operation_script(operationId: number, scriptType: string, params?: Object): string;

  /**
   * Возвращает переопределение веб-шаблона с учетом пользователя и окружения.
   * @param {number} overrideWebTemplateId - Идентификатор переопределенного веб-шаблона.
   * @param {Session} session - Сессия.
   * @param {number} curUserId - Идентификатор текущего пользователя.
   * @param {CurUser} curUser - Текущий пользователь.
   * @param {unknown} curAnonymousAccess - Параметры анонимного доступа.
   * @param {XmlTopElem} activeWebTemplateTopElem - Корневой элемент активного веб-шаблона.
   * @param {boolean} adding - Флаг добавления веб-шаблона.
   * @returns {OverrideWebTemplateDocument | undefined} Результат выполнения.
   */
  function get_override_web_template(overrideWebTemplateId: number, session: Session, curUserId: number, curUser: CurUser, curAnonymousAccess: unknown, activeWebTemplateTopElem: XmlTopElem, adding: boolean): OverrideWebTemplateDocument | undefined;

  /**
   * Возвращает DOTNETCORE-VFS=='1' из AppConfig.
   * @returns {boolean} DOTNETCORE-VFS=='1'.
   */
  let is_vfs: XmlElem<boolean | null>;

  /**
   * Возвращает переопределения веб-шаблонов для зоны и окружения.
   * @param {Session} session - Сессия.
   * @param {object} zone - Зона размещения веб-шаблонов.
   * @param {unknown} curActiveWebTemplate - Текущий активный веб-шаблон.
   * @param {boolean} addWebTemplate - Флаг добавления веб-шаблона.
   * @param {object} envObj - Объект окружения.
   * @returns {OverrideWebTemplateDocument[]} Результат выполнения.
   */
  function get_override_web_templates(session: Session, zone: Object, curActiveWebTemplate: unknown, addWebTemplate: boolean, envObj: Object): OverrideWebTemplateDocument[];

  /**
   * Возвращает права и ограничения на личные объекты сотрудника.
   * @param {string} catalog - Название каталога.
   * @param {number} userId - Идентификатор пользователя.
   * @param {CollaboratorDocumentTopElem} [userTopElem] - Корневой элемент пользователя.
   * @returns {object} Результат выполнения.
   */
  function get_person_object_info(catalog: string, userId: number, userTopElem?: CollaboratorDocumentTopElem): {
    can_create: boolean;
    can_edit: boolean;
    can_delete: boolean;
    max_amount: null | number;
    max_total_size: null | number;
    max_object_size: null | number;
  };

  /**
   * Возвращает параметры типа аутентификации портала.
   * @param {unknown} request - Объект запроса.
   * @param {unknown} curHost - Текущий хост.
   * @param {unknown[]} arrIdmClaims - Набор утверждений IDM.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_portal_auth_type_obj(request: unknown, curHost: unknown, arrIdmClaims: unknown[]): unknown;

  /**
   * Возвращает идентификатор записи статистики профилирования.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_profiling_statistic_rec_id(): unknown;

  /**
   * Формирует строку запроса с учетом переданных параметров.
   * @param {boolean} flag - Флаг режима обработки параметров запроса.
   * @param {unknown} params - Параметры операции.
   * @returns {ReturnType<typeof get_query_string_from_url>} Результат выполнения.
   */
  function get_query_string(flag: boolean, params: unknown): ReturnType<typeof get_query_string_from_url>;

  /**
   * Формирует строку запроса на основе указанного URL и параметров.
   * @param {string} url - URL.
   * @param {boolean} flag - Флаг режима обработки параметров запроса.
   * @param {string | string[]} params - Параметры операции.
   * @returns {string} Результат выполнения.
   */
  function get_query_string_from_url(url: string, flag: boolean, params: string | string[]): string;

  /**
   * Возвращает список рекомендованных сотруднику материалов.
   * @param {number} personId - Идентификатор сотрудника.
   * @param {string} searchList - Условия поиска списка.
   * @param {boolean} [catalogList] - Флаг представления в виде списка каталога.
   * @param {number} [rootId] - Идентификатор корневого раздела.
   * @returns {object[]} Результат выполнения.
   */
  function get_recommended_materials(personId: number, searchList: string, catalogList?: boolean, rootId?: number): {
    id: number;
    name: string;
    status: string;
    section_id: string;
    last_viewing_date: Date;
    base: string;
  }[];

  /**
   * Возвращает параметры удаленного действия по их именам.
   * @param {string[]} paramNames - Имена параметров.
   * @param {RemoteActionDocumentTopElem} topElem - Корневой элемент удаленного действия.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_remote_action_param(paramNames: string[], topElem: RemoteActionDocumentTopElem): unknown;

  /**
   * Возвращает URL ресурса с учетом сессии.
   * @param {number} objectId - Идентификатор объекта.
   * @param {Session} session - Сессия.
   * @returns {ReturnType<typeof get_object_source_url>} Результат выполнения.
   */
  function get_resource_url(objectId: number, session: Session): ReturnType<typeof get_object_source_url>;

  /**
   * Возвращает контрольный идентификатор сессии.
   * @param {number} sessionId - Идентификатор сессии.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_secid(sessionId: number): unknown;

  /**
   * Возвращает языковые данные сессии.
   * @param {Session} session - Сессия.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_session_lng(session: Session): unknown;

  /**
   * Получает или задает пользовательские данные.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {number} iDurationParam - Длительность хранения.
   * @returns {unknown} Тип результата не подтвержден исходной реализацией.
   */
  function get_set_user_data(iDurationParam: number): unknown;

  /**
   * Возвращает стандартные веб-правила.
   * @returns {ReturnType<typeof get_enabled_web_rules>} Результат выполнения.
   */
  function get_std_web_rules(): ReturnType<typeof get_enabled_web_rules>;

  /**
   * Складывает два `id`.
   * @param {string} id - Id объекта.
   * @param {number} sessionId - Id сессии.
   * @returns {number} Сумма Id объекта и Id сессии.
   */
  function get_sum_sid(id: string, sessionId: number): number;

  /**
   * Возвращает часовой пояс объекта.
   * @param {number} objectId - Идентификатор объекта.
   * @param {unknown} catObject - Запись каталога объекта.
   * @param {boolean} returnNull - Флаг возврата null.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_timezone(objectId: number, catObject: unknown, returnNull: boolean): unknown;

  /**
   * Преобразует дату между указанными часовыми поясами.
   * @param {Date} date - Дата.
   * @param {unknown} catTimeZone1 - Исходный часовой пояс.
   * @param {unknown} catTimeZone2 - Целевой часовой пояс.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_timezone_date(date: Date, catTimeZone1: unknown, catTimeZone2: unknown): unknown;

  /**
   * Возвращает URL отслеживания для указанного расположения.
   * @param {ExchangeListsBase["locations"]} fldLocation - Данные расположения.
   * @param {string} curHostPath - Путь текущего хоста.
   * @returns {string} Результат выполнения.
   */
  function get_tracking_url(fldLocation: ExchangeListsBase["locations"], curHostPath: string): string;

  /**
   * Возвращает протокол указанного URL.
   * @param {string} url - URL.
   * @returns {string} Результат выполнения.
   */
  function get_url_protocol(url: string): string;

  /**
   * Возвращает параметры запроса из URL.
   * @param {string} url - URL.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_url_query(url: string): unknown;

  /**
   * Получение кэша по коду.
   * @param {unknown[] | string} conditions - Код кэша.
   * @returns {T | null} Значение кэша.
   */
  // В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
  function get_user_data<T>(conditions: unknown[] | string): T | null;

  /**
   * Возвращает идентификатор пользователя по логину и параметрам аутентификации.
   * @param {string} authLogin - Логин для аутентификации.
   * @param {object} authParams - Параметры аутентификации.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_user_id_by_login(authLogin: string, authParams: Object): unknown;

  /**
   * Возвращает рекомендованное пользователю обучение.
   * @param {number} userId - Идентификатор пользователя.
   * @param {CollaboratorDocumentTopElem} [userTopElem] - Корневой элемент пользователя.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function get_user_recommended_learning(userId: number, userTopElem?: CollaboratorDocumentTopElem): unknown;

  /**
   * Возвращает статус пользователя.
   * @param {number} curUserId - Идентификатор текущего пользователя.
   * @returns {ReturnType<typeof get_user_data>} Результат выполнения.
   */
  function get_user_status(curUserId: number): ReturnType<typeof get_user_data>;

  /**
   * Обрабатывает URL для получения допустимого адреса.
   * @param {string} url - URL.
   * @returns {string} Результат выполнения.
   */
  function get_valid_url(url: string): string;

  /**
   * Возвращает вычисляемое значение переменной из указанного контекста.
   * @param {string} varNama - Имя переменной.
   * @param {unknown} curVars - Текущий набор переменных.
   * @param {object} eval - Параметры или режим вычисления.
   * @param {string} evalType - Тип вычисления.
   * @returns {ReturnType<typeof set_var_eval>} Результат выполнения.
   */
  function get_var_eval(varNama: string, curVars: unknown, eval: Object, evalType: string): ReturnType<typeof set_var_eval>;

  /**
   * Возвращает значение веб-константы из языковых данных.
   * @param {string} name - Имя параметра или константы.
   * @param {unknown} fldLng - Языковые данные.
   * @returns {string} Результат выполнения.
   */
  function get_web_const(name: string, fldLng: unknown): string;

  /**
   * Обрабатывает HTML-описание с учетом адреса и окружения.
   * @param {string} sourceHtml - Исходное HTML-описание.
   * @param {object} url - URL.
   * @param {unknown} [path] - Путь для обработки содержимого.
   * @param {unknown} [env] - Окружение выполнения.
   * @returns {string} Результат выполнения.
   */
  function get_web_desc(sourceHtml: string, url: Object, path?: unknown, env?: unknown): string;

  /**
   * Формирует человекочитаемый URL для веб-режима и объекта.
   * @param {object} webMode - Данные веб-режима.
   * @param {number} [objectId] - Идентификатор объекта.
   * @param {object} [params] - Параметры операции.
   * @returns {ReturnType<typeof get_mode_clean_url>} Результат выполнения.
   */
  function get_web_mode_clean_url(webMode: Object, objectId?: number, params?: Object): ReturnType<typeof get_mode_clean_url>;

  /**
   * Возвращает значение параметра веб-шаблона.
   * @param {unknown} listParamsTarget - Целевой набор параметров.
   * @param {string} paramName - Имя параметра.
   * @param {string} defaultValue - Значение по умолчанию.
   * @param {boolean} emptyFlag - Флаг обработки пустого значения.
   * @param {string} overrideWebTemplateId - Идентификатор переопределенного веб-шаблона.
   * @returns {string} Результат выполнения.
   */
  function get_web_param(listParamsTarget: unknown, paramName: string, defaultValue: string, emptyFlag: boolean, overrideWebTemplateId: string): string;

  /**
   * Получение текстового значения языкового параметра из curLngWeb.
   * @param {string} name - Название параметра.
   * @returns {string} Значение языкового параметра.
   */
  function get_web_str(name: string): string;

  /**
   * Возвращает объекты управления проектами для сотрудника с учетом фильтров.
   * @param {number} personId - Идентификатор сотрудника.
   * @param {unknown[]} arrCurLng - Текущие языковые данные.
   * @param {boolean} addFuncSubordinates - Флаг включения функциональных подчиненных.
   * @param {boolean} hIdeDissmissed - Флаг исключения уволенных сотрудников.
   * @param {boolean} showProjectManagers - Флаг включения руководителей проектов.
   * @param {boolean} overdue - Флаг отбора просроченных объектов.
   * @param {boolean} projectTree - Флаг представления дерева проектов.
   * @param {boolean} checkTaskSeeRights - Флаг проверки прав просмотра задач.
   * @param {unknown} vBossType - Параметры типа руководителя.
   * @param {object} struct - Параметры структуры выборки.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function GetProjectManagementObjectsList(personId: number, arrCurLng: unknown[], addFuncSubordinates: boolean, hIdeDissmissed: boolean, showProjectManagers: boolean, overdue: boolean, projectTree: boolean, checkTaskSeeRights: boolean, vBossType: unknown, struct: Object): unknown;

  let content_types: XmlElem<ToolsWebContentTypes>;

  /**
   * Возвращает список требуемых квалификаций сотрудника.
   * @param {number} personId - Идентификатор сотрудника.
   * @param {string} searchList - Условия поиска списка.
   * @param {boolean} [catalogList] - Флаг представления в виде списка каталога.
   * @returns {object[]} Результат выполнения.
   */
  function GetRequiredQualificationsList(personId: number, searchList: string, catalogList?: boolean): {
    id: number;
    name: string;
    status: string;
    expiration_date: Date;
    base: string;
  }[];

  /**
   * Возвращает объекты кадрового резерва для сотрудника.
   * @param {number} personId - Идентификатор сотрудника.
   * @param {boolean} addFuncSubordinates - Флаг включения функциональных подчиненных.
   * @param {boolean} hideDissmissed - Флаг исключения уволенных сотрудников.
   * @param {unknown} vBossType - Параметры типа руководителя.
   * @param {number} careerReserveType - Тип кадрового резерва.
   * @returns {PersonnelReserveCatalogDocumentTopElem[]} Результат выполнения.
   */
  function GetTalentPoolObjectsList(personId: number, addFuncSubordinates: boolean, hideDissmissed: boolean, vBossType: unknown, careerReserveType: number): PersonnelReserveCatalogDocumentTopElem[];

  /**
   * Возвращает представление статуса отклика на вакансию.
   * @param {unknown} obVacancyResponse - Данные отклика на вакансию.
   * @param {number} vacancyResponseId - Идентификатор отклика на вакансию.
   * @param {unknown} curLngCommon - Общие языковые данные.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function GetVacancyResponseStatus(obVacancyResponse: unknown, vacancyResponseId: number, curLngCommon: unknown): unknown;

  /**
   * Декодирует HTML-представление строки.
   * @param {string} s - Исходная строка.
   * @returns {string} Результат выполнения.
   */
  function html_decode(s: string): string;

  /**
   * Преобразует HTML-текст для значения поля ввода.
   * @param {string} s - Исходная строка.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function html_to_imput_value(s: string): unknown;

  /**
   * Инициализирует текущий активный веб-шаблон.
   * @param {Env} env - Окружение выполнения.
   * @param {boolean} create - Флаг создания активного веб-шаблона.
   * @returns {ActiveWebTemplateDocument} Результат выполнения.
   */
  function init_cur_active_web_template(env: Env, create: boolean): ActiveWebTemplateDocument;

  /**
   * Формирует содержимое пользовательского веб-шаблона с заданными параметрами.
   * @param {number} customWebTemplateId - Идентификатор пользовательского веб-шаблона.
   * @param {CustomWebTemplateDocumentTopElem | null} customWebTemplateTopElem - Корневой элемент пользовательского веб-шаблона.
   * @param {boolean} eval - Параметры или режим вычисления.
   * @param {boolean} naked - Флаг формирования содержимого без обрамления.
   * @param {number} depth - Глубина обработки.
   * @param {unknown[] | undefined} ofFldNativeParamsArr - Массив исходных параметров полей.
   * @param {boolean} externalEnvelope - Флаг внешнего обрамления.
   * @returns {string} Результат выполнения.
   */
  function insert_custom_code(customWebTemplateId: number, customWebTemplateTopElem: CustomWebTemplateDocumentTopElem | null, eval: boolean, naked: boolean, depth: number, ofFldNativeParamsArr: unknown[] | undefined, externalEnvelope: boolean): string;

  /**
   * Проверяет корректность вопроса элемента теста.
   * @param {unknown} fldquestion - Поле вопроса.
   * @param {XmlTopElem} itemTopElem - Корневой элемент тестового задания.
   * @returns {number | boolean | null} Результат выполнения.
   */
  function is_correct_question(fldquestion: unknown, itemTopElem: XmlTopElem): number | boolean | null;

  /**
   * Проверяет признак прочтения форума пользователем.
   * @param {number} forumId - Идентификатор форума.
   * @param {number} userId - Идентификатор пользователя.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function is_forum_readed(forumId: number, userId: number): boolean;

  /**
   * Проверяет, является ли строка представлением JSON.
   * @param {string} text - Исходный текст.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function is_json(text: string): boolean;

  /**
   * Проверяет, является ли пользователь модератором форума.
   * @param {number} forumId - Идентификатор форума.
   * @param {number} userId - Идентификатор пользователя.
   * @param {ForumDocumentTopElem} [forumTopElem] - Корневой элемент форума.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function is_moderator_forum(forumId: number, userId: number, forumTopElem?: ForumDocumentTopElem): boolean;

  /**
   * Проверяет привилегии сотрудника в отношении записи форума.
   * @param {number} forumEntryId - Идентификатор записи форума.
   * @param {CollaboratorDocumentTopElem} userTopElem - Корневой элемент пользователя.
   * @param {number} userId - Идентификатор пользователя.
   * @param {ForumEntryDocumentTopElem} [forumEntryTopElem] - Корневой элемент записи форума.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function is_privilege_collaborator(forumEntryId: number, userTopElem: CollaboratorDocumentTopElem, userId: number, forumEntryTopElem?: ForumEntryDocumentTopElem): boolean;

  /**
   * Возвращает значение true/false в завимости от передаваемого параметра.
   * @param {unknown} o - Параметр.
   * @returns {boolean} Значение аргумента в булевом представлении.
   */
  function is_true(o: unknown): boolean;

  /**
   * Записывает сведения о соединении с учебным объектом.
   * @param {string} type - Тип или режим обработки.
   * @param {object} connection - Сведения о соединении с учебным объектом.
   * @param {unknown} connection.id - Идентификатор соединения.
   * @param {unknown} connection.active_learning_id - Идентификатор назначенного электронного курса.
   * @param {unknown} connection.course_id - Идентификатор электронного курса.
   * @param {unknown} connection.user_id - Идентификатор пользователя.
   * @param {unknown} connection.user_code - Код пользователя.
   * @param {unknown} connection.user_fullname - Полное имя пользователя.
   * @param {unknown} connection.part_code - Код части учебного объекта.
   */
  function log_learning_connection(type: string, connection: {
    id: unknown;
    active_learning_id: unknown;
    course_id: unknown;
    user_id: unknown;
    user_code: unknown;
    user_fullname: unknown;
    part_code: unknown;
  }): void;

  /**
   * Инициализирует окружение объекта из сессии и параметров запроса.
   * @param {Request["Session"]} sessionTarget - Сессия запроса.
   * @param {Request["Query"]} query - Параметры запроса.
   * @param {boolean} objectEnvSave - Флаг сохранения окружения объекта.
   * @returns {Env} Результат выполнения.
   */
  function object_init(sessionTarget: Request["Session"], query: Request["Query"], objectEnvSave: boolean): Env;

  /**
   * Обрабатывает значение целей в целевом элементе.
   * @param {unknown} fldTarget - Целевой элемент.
   * @param {unknown} rValue - Обрабатываемое значение целей.
   * @param {string} action - Действие над значением.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function obtain_item_objectives_value(fldTarget: unknown, rValue: unknown, action: string): unknown;

  /**
   * Получает общий временный файл с указанным суффиксом.
   * @param {string} suffix - Суффикс временного файла.
   * @returns {string} Результат выполнения.
   */
  function obtain_shared_temp_file(suffix: string): string;

  /**
   * Получает текстовую область для указанного документа.
   * @param {number} docId - Идентификатор документа.
   * @param {XmlTopElem} docTargetTopElem - Корневой элемент целевого документа.
   * @returns {XmlTopElem} Результат выполнения.
   */
  function obtain_text_area(docId: number, docTargetTopElem: XmlTopElem): XmlTopElem;

  /**
   * Разбирает параметр, содержащий несколько значений.
   * @param {object | unknown[] | string} param - Параметр с одним или несколькими значениями.
   * @returns {unknown[]} Результат выполнения.
   */
  function parse_multiple_parameter(param: Object | unknown[] | string): unknown[];

  /**
   * Формирует содержимое переопределенного веб-шаблона.
   * @param {number} overrideWebTemplateId - Идентификатор переопределенного веб-шаблона.
   * @param {object} [insertCustomCodeParams] - Параметры вставки пользовательского кода.
   * @returns {ReturnType<typeof insert_custom_code>} Результат выполнения.
   */
  function place_override_web_template(overrideWebTemplateId: number, insertCustomCodeParams?: Object): ReturnType<typeof insert_custom_code>;

  /**
   * Формирует XAML-представление пользовательского веб-шаблона.
   * @param {number} customWebTemplateId - Идентификатор пользовательского веб-шаблона.
   * @param {CustomWebTemplateDocumentTopElem} [customWebTemplateTopElem] - Корневой элемент пользовательского веб-шаблона.
   * @param {object} [placeXamlParams] - Параметры размещения XAML.
   * @returns {ReturnType<typeof insert_custom_code>} Результат выполнения.
   */
  function place_xaml(customWebTemplateId: number, customWebTemplateTopElem?: CustomWebTemplateDocumentTopElem, placeXamlParams?: Object): ReturnType<typeof insert_custom_code>;

  /**
   * Размещает XAML-проигрыватель в контексте веб-запроса и дизайна.
   * @param {number} customWebTemplate - Пользовательский веб-шаблон.
   * @param {WebDesignDocumentTopElem} curWebDesign - Текущий веб-дизайн.
   * @param {Request} request - Объект запроса.
   * @param {object} placeXamlParams - Параметры размещения XAML.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function place_xaml_player(customWebTemplate: number, curWebDesign: WebDesignDocumentTopElem, request: Request, placeXamlParams: Object): unknown;

  /**
   * Формирует содержимое указанной зоны страницы.
   * @param {string} zone - Зона размещения веб-шаблонов.
   * @param {boolean} [createFCache] - Флаг создания кэша при формировании зоны.
   * @param {boolean} [lpePreview] - Флаг предварительного просмотра в редакторе.
   * @returns {string} Результат выполнения.
   */
  function place_zone(zone: string, createFCache?: boolean, lpePreview?: boolean): string;

  /**
   * Отправляет уведомление в рабочую область.
   *
   * В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
   * @param {object} oOptionsPARAM - Параметры уведомления.
   * @returns {string} Результат выполнения.
   */
  function push_notification_workspace(oOptionsPARAM: Object): string;
  /**
   * Формирует строку запроса для указанной страницы.
   * @param {string} str - Исходная строка запроса.
   * @param {string} pageName - Имя страницы.
   * @returns {string} Результат выполнения.
   */
  function put_query_string(str: string, pageName: string): string;

  /**
   * Возврат экземпляра библиотеки regexp
   * Global = true
   * IgnoreCase = true
   * MultiLine = true.
   * @returns {Websoft.RegExp.RegExp} Экземпляр библиотеки.
   */
  function reg_exp_init(): Websoft.RegExp.RegExp;

  // В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
  /**
   * Удаляет значение из кэша данных по ключу.
   * @param {string} key - Ключ кэша или имя ключевого поля.
   * @returns {unknown | null} Результат выполнения.
   */
  function remove_data_cache(key: string): unknown | null;

  /**
   * Удаляет запись форума.
   * @param {number} forumEntryId - Идентификатор записи форума.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function remove_forum_entry(forumEntryId: number): boolean;

  // В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
  /**
   * Удаляет пользовательские данные из кэша по ключу.
   * @param {string} key - Ключ кэша или имя ключевого поля.
   * @param {string} [listName] - Имя списка данных.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function remove_user_data(key: string, listName?: string): boolean;

  // В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
  /**
   * Удаляет пользовательские данные из кэша по префиксу ключа.
   * @param {string} key - Ключ кэша или имя ключевого поля.
   * @returns {true} Значение true согласно объявленному типу.
   */
  function remove_user_data_by_prefix(key: string): true;

  /**
   * Заменяет операторы в переданных условиях.
   * @param {object} conditions - Условия обработки или ключ пользовательских данных.
   * @param {number} value - Обрабатываемое значение.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function replace_condition_operators(conditions: Object, value: number): unknown;

  /**
   * Сохраняет текущий активный веб-шаблон.
   * @param {ActiveWebTemplateDocument} activeWebTemplateDocTopElem - Документ активного веб-шаблона.
   * @param {boolean} finishSave - Флаг завершения сохранения.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function save_cur_active_web_template(activeWebTemplateDocTopElem: ActiveWebTemplateDocument, finishSave: boolean): boolean;

  let web_rules_obj: XmlElem<unknown | null>;

  /**
   * Сохраняет документ текущего объекта в указанном окружении.
   * @param {XmlDocument} object - Обрабатываемый объект.
   * @param {Env} env - Окружение выполнения.
   */
  function save_cur_object_doc(object: XmlDocument, env: Env): void;

  /**
   * Отправляет сообщение через указанное приложение.
   * @param {unknown} vApplication - Приложение для отправки сообщения.
   * @param {string} message - Текст сообщения.
   * @param {string} domain - Домен отправки.
   * @param {unknown} aUser - Получатели сообщения.
   * @param {object} options - Параметры отправки.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function send_message(vApplication: unknown, message: string, domain: string, aUser: unknown, options: Object): unknown;

  /**
   * Устанавливает базовый путь URL в окружении.
   * @param {string} url - URL.
   * @param {object} env - Окружение выполнения.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function set_base_url_path(url: string, env: Object): unknown;

  /**
   * Устанавливает данные аутентификации через cookie.
   * @param {unknown} request - Объект запроса.
   * @param {unknown} curHost - Текущий хост.
   * @param {object} auth - Данные аутентификации.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function set_cookie_auth(request: unknown, curHost: unknown, auth: Object): unknown;

  // В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
  /**
   * Сохраняет значение в кэше данных.
   * @param {string} key - Ключ кэша или имя ключевого поля.
   * @param {object} value - Обрабатываемое значение.
   * @param {number} duration - Длительность хранения в кэше.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function set_data_cache(key: string, value: Object, duration: number): boolean;

  /**
   * Устанавливает статус ответа с учетом URL и даты изменения.
   * @param {Request} requestTarget - Запрос, для которого устанавливается статус ответа.
   * @param {string} url - URL.
   * @param {Date} [dtLastModified] - Дата последнего изменения.
   * @returns {object} Результат выполнения.
   */
  function set_modified_response_status(requestTarget: Request, url: string, dtLastModified?: Date): {
    FilePathExists: boolean | null;
    ResponseStatus: number;
  };

  /**
   * Устанавливает параметры переопределенного веб-шаблона.
   * @param {unknown} curParamsTarget - Целевой набор текущих параметров.
   * @param {unknown} catOverrIdeWebTemplate - Данные переопределенного веб-шаблона.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function set_override_web_params(curParamsTarget: unknown, catOverrIdeWebTemplate: unknown): boolean;

  /**
   * Устанавливает сведения о личных объектах сотрудника.
   * @param {string} catalog - Название каталога.
   * @param {number} userId - Идентификатор пользователя.
   * @param {CollaboratorDocumentTopElem | null} userTopElem - Корневой элемент пользователя.
   * @param {unknown[]} objectsMeta - Метаданные личных объектов.
   */
  function set_person_object_info(catalog: string, userId: number, userTopElem: CollaboratorDocumentTopElem | null, objectsMeta: unknown[]): void;

  /**
   * Устанавливает категорию в контексте текущего пользователя.
   * @param {CurUser} curUser - Текущий пользователь.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function set_st_category(curUser: CurUser): unknown;

  /**
   * Обрабатывает протокол указанного URL.
   * @param {string} url - URL.
   * @returns {string} Результат выполнения.
   */
  function set_url_protocol(url: string): string;

  /**
   * Создание кэша по коду.
   * @param {string} conditions - Код кэша.
   * @param {unknown} value - Данные для сохранения в кэше.
   * @param {number} duration - Время жизни кэша.
   * @param {string} [listName] - Данные.
   * @returns {true} Значение true согласно объявленному типу.
   */
  // В исходном коде объявлено `ALLOW-CALL-FROM-CLIENT="1"`.
  function set_user_data(conditions: string, value: unknown, duration: number, listName?: string): true;

  /**
   * Устанавливает статус пользователя.
   * @param {number} curUserId - Идентификатор текущего пользователя.
   * @param {T} status - Статус.
   * @returns {ReturnType<typeof get_user_data> | T} Результат выполнения.
   */
  function set_user_status<T>(curUserId: number, status: T): ReturnType<typeof get_user_data> | T;

  /**
   * Устанавливает вычисляемое значение переменной в указанном контексте.
   * @param {string} varNama - Имя переменной.
   * @param {unknown} curVars - Текущий набор переменных.
   * @param {object} eval - Параметры или режим вычисления.
   * @param {string} evalType - Тип вычисления.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function set_var_eval(varNama: string, curVars: unknown, eval: Object, evalType: string): unknown;

  /**
   * Устанавливает параметры веб-шаблона.
   * @param {unknown} listParamsTarget - Целевой набор параметров.
   * @param {unknown} listWvars - Набор веб-переменных.
   * @param {boolean} rewriteFlag - Флаг перезаписи параметров.
   * @param {number} overrideWebTemplateId - Идентификатор переопределенного веб-шаблона.
   */
  function set_web_params(listParamsTarget: unknown, listWvars: unknown, rewriteFlag: boolean, overrideWebTemplateId: number): void;

  /**
   * Устанавливает идентификатор аутентификации в контексте запроса.
   * @param {unknown} request - Объект запроса.
   * @param {CurUser} curUser - Текущий пользователь.
   * @param {unknown} curHost - Текущий хост.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function set_x_auth_id(request: unknown, curUser: CurUser, curHost: unknown): unknown;

  /**
   * Начинает запись данных профилирования.
   * @param {object} params - Параметры операции.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function start_profiling_record(params: Object): unknown;

  /**
   * Формирует текстовое представление размера файла.
   * @param {number} size - Размер файла.
   * @param {boolean} dispDefault - Флаг использования представления по умолчанию.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function str_file_size(size: number, dispDefault: boolean): unknown;

  /**
   * Формирует локализованное представление даты периода.
   * @param {Date} date - Дата.
   * @param {Env["curLngWeb"]} curLngWeb - Языковые данные веб-интерфейса.
   * @returns {string} Результат выполнения.
   */
  function str_period_date(date: Date, curLngWeb: Env["curLngWeb"]): string;

  /**
   * Форматирует дату в представление UTC для MIME.
   * @param {Date} date - Дата.
   * @returns {string} Результат выполнения.
   */
  function str_utc_mime_date(date: Date): string;

  /**
   * Завершает соединение с учебным объектом.
   * @param {number} objectId - Идентификатор объекта.
   * @returns {boolean} Результат проверки или выполнения операции.
   */
  function terminate_learning_connection(objectId: number): boolean;

  /**
   * Преобразует адрес в формате человекочитаемого URL.
   * @param {unknown} source - Исходные данные.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function transform_fancy_url(source: unknown): unknown;

  /**
   * Преобразует строку с использованием указанного индекса.
   * @param {string} txt - Исходная строка.
   * @param {number} idx - Индекс преобразования.
   * @returns {string} Результат выполнения.
   */
  function Unsqueeze(txt: string, idx: number): string;

  /**
   * Обновляет список авторов сообщества.
   * @param {number} objectId - Идентификатор объекта.
   * @param {number | number[]} vAuthors - Идентификатор автора или массив идентификаторов авторов.
   * @param {boolean} [nbDelete] - Флаг удаления авторов.
   * @returns {true} Значение true согласно объявленному типу.
   */
  function update_community_authors(objectId: number, vAuthors: number | number[], nbDelete?: boolean): true;

  /**
   * Обновляет поля документа значениями из переданного контекста.
   * @param {XmlDocument} object - Обрабатываемый объект.
   * @param {object} context - Контекст со значениями полей.
   * @param {unknown[]} arrFieldNames - Имена обрабатываемых полей.
   * @param {string} prefix - Префикс имен полей.
   */
  function update_object_from_context(object: XmlDocument, context: Object, arrFieldNames: unknown[], prefix: string): void;

  /**
   * Формирует content-type из Url файла.
   * @param {string} url - Url файла.
   * @returns {string} Content-Type значение.
   */
  function url_std_content_type(url: string): string;

  /**
   * Инициализаяция пользователя.
   * @param {Request} req - Объект Request.
   * @param {object} query - Параметры.
   * @returns {object} Результат инициализации пользователя из запроса.
   */
  function user_init(req: Request, query: Object): {
    auth_type: string | undefined;
    anonymous: boolean;
    auth_login: string | null | undefined;
    access_time_start: number;
    access_time_end: number;
    error_code: string;
    error_text: string;
    redirect: string;
    access: boolean;
  };

  /**
   * Заполняет пользовательские поля объекта данными веб-формы.
   * @param {string} catalog - Название каталога.
   * @param {number} topId - Идентификатор объекта, пользовательские поля которого заполняются.
   * @param {unknown} source - Исходные данные.
   * @param {unknown} requestForm - Данные формы запроса.
   * @param {boolean} [valueFlag] - Флаг обработки значений полей.
   * @param {string} [charset] - Кодировка.
   * @param {null | unknown[]} [arrFields] - Массив обрабатываемых полей.
   * @returns {true | ReturnType<typeof custom_elems_filling>} Результат выполнения.
   */
  function web_custom_elems_filling(catalog: string, topId: number, source: unknown, requestForm: unknown, valueFlag?: boolean, charset?: string, arrFields?: null | unknown[]): true | ReturnType<typeof custom_elems_filling>;

  /**
   * Обрабатывает файлы в контексте веб-запроса.
   * @param {XmlDocument} [sourceFiles] - Документ с исходными файлами.
   */
  function web_files_process(sourceFiles?: XmlDocument): void;

  /**
   * Записывает пользовательский веб-шаблон.
   * @param {object} customWebTemplate - Пользовательский веб-шаблон.
   * @returns {true} Значение true согласно объявленному типу.
   */
  function write_custom_web_template(customWebTemplate: Object): true;

  /**
   * Отправка файла в response stream.
   * @param {string} url - Url файла.
   * @param {object} request - Объект запроса Request.
   */
  function write_url_to_response(url: string, request: Object): void;

  /**
   * Возвращает внутренний код аутентификации мобильного приложения по URL.
   * @param {string} url - URL.
   * @returns {string} Результат выполнения.
   */
  function wtmobile_get_auth_inner_codename(url: string): string;

  /**
   * Возвращает конфигурацию мобильного приложения для указанной записи.
   * @param {unknown} entry - Запись конфигурации.
   * @returns {unknown} Результат выполнения; тип не уточнен.
   */
  function wtmobile_get_config(entry: unknown): unknown;

  /**
   * Обрабатывает текст для нейтрализации XSS-разметки.
   * @param {string} text - Исходный текст.
   * @returns {string} Результат выполнения.
   */
  function xss_neutralize(text: string): string;
}
