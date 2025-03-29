declare namespace tools_web {
  function put_query_string(str: string, pageName: string): string;

  /**
   * Путь до wt/web директории сервера.
   * @returns {string} Путь.
   */
  let web_url: XmlElem<string | null>;

  /**
   * Ссылка на раздел портала.
   * @param {object} attributes - Параметры.
   * @returns {string} Ссылка на документ.
   */
  function doc_link(attributes: DocumentDocumentTopElem["attributes"]): string;

  function get_object_link(objectName: string, objectId: number, objectTopElem: XmlTopElem, docId: number): string;

  /**
   * Получение текстового значения языкового параметра из curLngWeb.
   * @param {string} name - Название параметра.
   * @returns {string} Значение языкового параметра.
   */
  function get_web_str(name: string): string;

  function get_web_const(name: string, fldLng: unknown): string;

  function eval_web_column_const(name: string, fldLng: unknown): unknown;

  function get_web_desc(sourceHtml: string, url: Object, path?: unknown, env?: unknown): string;

  /**
   * Складывает два `id`.
   * @param {number} id - Id объекта.
   * @param {number} sessionId - Id сессии.
   * @returns {number} Сумма Id объекта и Id сессии.
   */
  function get_sum_sid(id: string, sessionId: number): number;

  function check_sum_sid(id: string, sum: string, sessionId: number): boolean;

  function custom_elems_filling(fldTarget: unknown, source: Object, arrCustomElems: null | unknown[], params: Object): {
    error: 0 | 1;
    error_text: string;
    title: string;
    mandatory_fields: unknown[];
    condition_fields: unknown[]
  };

  function web_custom_elems_filling(catalog: string, topId: number, source: unknown, requestForm: unknown, valueFlag?: boolean, charset?: string, arrFields?: null | unknown[]): true | ReturnType<typeof custom_elems_filling>;

  function update_object_from_context(object: XmlDocument, context: Object, arrFieldNames: unknown[], prefix: string): void;

  function get_query_string_from_url(url: string, flag: boolean, params: string | string[]): string;

  function get_query_string(flag: boolean, params: unknown): ReturnType<typeof get_query_string_from_url>;

  function get_url_protocol(url: string): string;

  function set_url_protocol(url: string): string;

  function get_cur_lng_name(text: string, shortId: string): string;

  function check_access(source: XmlTopElem, personDocId: number, personDoc?: CollaboratorDocumentTopElem, session?: Session): boolean;

  function get_web_param(listParamsTarget: unknown, paramName: string, defaultValue: string, emptyFlag: boolean, overrideWebTemplateId: string): string;

  function set_web_params(listParamsTarget: unknown, listWvars: unknown, rewriteFlag: boolean, overrideWebTemplateId: number): void;

  function write_custom_web_template(customWebTemplate: Object): true;

  function get_override_web_template(overrideWebTemplateId: number, session: Session, curUserId: number, curUser: CurUser, curAnonymousAccess: unknown, activeWebTemplateTopElem: XmlTopElem, adding: boolean): OverrideWebTemplateDocument | undefined;

  function get_override_web_templates(session: Session, zone: Object, curActiveWebTemplate: unknown, addWebTemplate: boolean, envObj: Object): OverrideWebTemplateDocument[];

  function place_zone(zone: string, createFCache?: boolean, lpePreview?: boolean): string;

  function place_override_web_template(overrideWebTemplateId: number, insertCustomCodeParams?: Object): ReturnType<typeof insert_custom_code>;

  function get_operation_script(operationId: number, scriptType: string, params?: Object): string;

  function eval_operation_script(operationId: number, scriptType: string, params: Object): unknown;

  function is_moderator_forum(forumId: number, userId: number, forumTopElem?: ForumDocumentTopElem): boolean;

  function is_privilege_collaborator(forumEntryId: number, userTopElem: CollaboratorDocumentTopElem, userId: number, forumEntryTopElem?: ForumEntryDocumentTopElem): boolean;

  function is_forum_readed(forumId: number, userId: number): boolean;

  function check_forum_entry_access(formEntryTopElem: ForumEntryDocumentTopElem, userTopElem: CollaboratorDocumentTopElem, userId: number, forumTopElem?: ForumDocumentTopElem): ReturnType<typeof is_moderator_forum>;

  function remove_forum_entry(forumEntryId: number): boolean;

  function close_forum_entry(forumEntryId: number, forumEntryTopElem?: ForumEntryDocumentTopElem): boolean;

  function draw_calendar(objectName: string, objectValue: unknown, format: string): string;

  function web_files_process(sourceFiles?: XmlDocument): void;

  function convert_xhttp_res(textArea: string, sourceDesc: string): string;

  function get_my_person_object_link_card(catalog?: string, userId?: number, docHimself?: boolean, makeNewOnAbsence?: boolean): undefined | PersonObjectLinkDocument | PersonObjectLinkDocumentTopElem;

  function get_person_object_info(catalog: string, userId: number, userTopElem?: CollaboratorDocumentTopElem): {
    can_create: boolean;
    can_edit: boolean;
    can_delete: boolean;
    max_amount: null | number;
    max_total_size: null | number;
    max_object_size: null | number;
  };

  function set_person_object_info(catalog: string, userId: number, userTopElem: CollaboratorDocumentTopElem | null, objectsMeta: unknown[]): void;

  function get_object_owners(objectId: number, catalog: string): {
    person_id: number;
    can_edit: boolean;
    can_delete: boolean;
  }[];

  function insert_custom_code(customWebTemplateId: number, customWebTemplateTopElem: CustomWebTemplateDocumentTopElem | null, eval: boolean, naked: boolean, depth: number, ofFldNativeParamsArr: unknown[] | undefined, externalEnvelope: boolean): string;

  function place_xaml(customWebTemplateId: number, customWebTemplateTopElem?: CustomWebTemplateDocumentTopElem, placeXamlParams?: Object): ReturnType<typeof insert_custom_code>;

  function place_xaml_player(customWebTemplate: number, curWebDesign: WebDesignDocumentTopElem, request: Request, placeXamlParams: Object): unknown;

  function convert_xss(text: string, type?: string): string;

  function xss_neutralize(text: string): string;

  /**
   * Возврат экземпляра библиотеки regexp
   * Global = true
   * IgnoreCase = true
   * MultiLine = true.
   * @returns {Websoft.RegExp.RegExp} Экземпляр библиотеки.
   */
  function reg_exp_init(): Websoft.RegExp.RegExp;

  function convert_bbcode_to_html(messageSource: string, objRegExp?: Websoft.RegExp.RegExp): string;

  function convert_html_to_bbcode(messageSource: string, objRegExp?: Websoft.RegExp.RegExp): string;

  function convert_bbtags_to_html(messageSource: string, objRegExp?: Websoft.RegExp.RegExp): string;

  function get_bbcode_tag_ids(messageSource: string, objRegExp?: Websoft.RegExp.RegExp): Object;

  function clear_bbcode_from_html(messageSource: string, objRegExp?: Websoft.RegExp.RegExp): string;

  /**
   * Cоздание новой заявки на основе входных параметров объекта Request.
   * @returns {RequestDocumentTopElem} Новый объект заявки.
   */
  function get_new_request_by_query(): RequestDocumentTopElem;

  function update_community_authors(objectId: number, vAuthors: number | number[], nbDelete?: boolean): true;

  function evaluate_remote_action(vRemoteActionDoc: number | RemoteActionCatalogDocumentTopElem, request: Request): ReturnType<RemoteActionDocumentTopElem["evaluate"]>;

  function Unsqueeze(txt: string, idx: number): string;

  function get_collection_param(): {
    catalog_name: string;
    xquery_qual: string;
    view_type: string;
    external_eval: string;
    check_access: boolean;
    open_doc : boolean;
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

  function external_eval(command: string, params: Object, env: Env): unknown;

  function env_to_script(env: Env): string;

  function object_init(sessionTarget: Request["Session"], query: Request["Query"], objectEnvSave: boolean): Env;

  function get_column_width(type: string, mode: string): string;

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

  function check_session_user(request: Request, userId: number): boolean;

  /**
   * Возвращает значение true/false в завимости от передаваемого параметра.
   * @param {unknown} o - Параметр.
   * @returns {boolean} Значение аргумента в булевом представлении.
   */
  function is_true(o: unknown): boolean;

  function init_cur_active_web_template(env: Env, create: boolean): ActiveWebTemplateDocument;

  function save_cur_active_web_template(activeWebTemplateDocTopElem: ActiveWebTemplateDocument, finishSave: boolean): boolean;

  function drop_active_web_templates(): number;

  function get_session_lng(session: Session): unknown;

  function check_site_access(personTopElem: CollaboratorDocument, site: SiteDocumentTopElem | number): boolean;

  function get_resource_url(objectId: number, session: Session): ReturnType<typeof get_object_source_url>;

  function get_custom_web_template_url(templateId: number): ReturnType<typeof get_object_source_url>;

  /**
   * Получение url ссылки объекта по Id.
   * @param {string} catalogType - Каталог объекта.
   * @param {number} objectId - Id объекта.
   * @param {unknown} params - Параметры для определения хоста/сессии/etc.
   * @returns {string} Url.
   */
  function get_object_source_url(catalogType: string, objectId: number, params?: Object | string): string;

  function GetTalentPoolObjectsList(personId: number, addFuncSubordinates: boolean, hideDissmissed: boolean, vBossType: unknown, careerReserveType: number): PersonnelReserveCatalogDocumentTopElem[];

  function GetRequiredQualificationsList(personId: number, searchList: string, catalogList?: boolean): {
    id: number;
    name: string;
    status: string;
    expiration_date: Date;
    base: string;
  }[];

  function get_recommended_materials(personId: number, searchList: string, catalogList?: boolean, rootId?: number): {
    id: number;
    name: string;
    status: string;
    section_id: string;
    last_viewing_date: Date;
    base: string;
  }[];

  function set_var_eval(varNama: string, curVars: unknown, eval: Object, evalType: string): unknown;

  function get_var_eval(varNama: string, curVars: unknown, eval: Object, evalType: string): ReturnType<typeof set_var_eval>;

  function convert_desc_to_html(desc: string): string;

  function get_user_recommended_learning(userId: number, userTopElem?: CollaboratorDocumentTopElem): unknown;

  /**
   * Создание кэша по коду.
   * @param {string} conditions - Код кэша.
   * @param {unknown} value - Payload.
   * @param {number} duration - Время жизни кэша.
   * @param {string} listName - Данные.
   * @returns {unknown} -
   */
  function set_user_data(conditions: string, value: unknown, duration: number, listName?: string): true;

  /**
   * Получение кэша по коду.
   * @param {string} conditions - Код кэша.
   * @returns {T | null} Значение кэша.
   */
  function get_user_data<T>(conditions: unknown[] | string): T | null;

  function remove_user_data(key: string, listName?: string): boolean;

  function remove_user_data_by_prefix(key: string): true;

  function obtain_text_area(docId: number, docTargetTopElem: XmlTopElem): XmlTopElem;

  function get_host_name(url: string): string;

  function get_cur_host_name(hostTopElem: XmlTopElem, request: Request): string;

  function get_cur_host_path(hostTopElem: XmlTopElem, request: Request): ReturnType<typeof get_cur_host_path_by_url>;

  function get_cur_host_path_by_url(hostTopElem: XmlTopElem, url: string): string;

  function get_cur_hosts(request: Object): HostCatalogDocumentTopElem[];

  function get_cur_host(request: Object): HostDocumentTopElem | null;

  function is_correct_question(fldquestion: unknown, itemTopElem: XmlTopElem): number | boolean | null;

  function save_cur_object_doc(object: XmlDocument, env: Env): void;

  function build_query_url(url: string, hostAndPath: string): string;

  function build_relative_url(url: string): string;

  function set_modified_response_status(requestTarget: Request, url: string, dtLastModified?: Date): {
    FilePathExists: boolean | null;
    ResponseStatus: number;
  };

  function str_utc_mime_date(date: Date): string;

  function get_tracking_url(fldLocation: ExchangeListsBase["locations"], curHostPath: string): string;

  function create_resource_from_attacment(attachment: Object, personId: number, personTopElem: XmlTopElem): ResourceDocument;

  function get_key_positions_list(personId: number, struct: Object): unknown[];

  /**
   * Формирует content-type из Url файла.
   * @param {string} url - Url файла.
   * @returns {string} Content-Type значение.
   */
  function url_std_content_type(url: string): string;

  /**
   * Возвращает DOTNETCORE-VFS=='1' из AppConfig.
   * @returns {boolean} DOTNETCORE-VFS=='1'.
   */
  let is_vfs: XmlElem<boolean | null>;

  /**
   * Отправка файла в response stream.
   * @param {string} url - Url файла.
   * @param {Request} request - Объект запроса Request.
   */
  function write_url_to_response(url: string, request: Object): void;

  /**
   * Декоратор для простого шифрования функцией StrSimpleEncrypt({objectId}_{date}).
   * @param {string} launchId - Id объекта.
   * @param {Date} endDate - Дата.
   * @returns {string} Значение StrSimpleEncrypt({objectId}_{date}).
   */
  function encrypt_launch_id(launchId: string, endDate: Date): string;

  function decrypt_launch_id(launchId: string): unknown;

  function get_valid_url(url: string): string;

  function get_active_web_template_hash(mode: string, accessLevel: string, accessRole: string, siteId: string, webDesignId: string): string;

  function build_submatched_string(sourceString: string, realString: string, destString: string): unknown;

  function get_auth_hash(source: string): unknown;

  function get_user_id_by_login(authLogin: string, authParams: Object): unknown;

  function set_cookie_auth(request: unknown, curHost: unknown, auth: Object): unknown;

  function set_x_auth_id(request: unknown, curUser: CurUser, curHost: unknown): unknown;

  function get_portal_auth_type_obj(request: unknown, curHost: unknown, arrIdmClaims: unknown[]): unknown;

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

  function GetProjectManagementObjectsList(personId: number, arrCurLng: unknown[], addFuncSubordinates: boolean, hIdeDissmissed: boolean, showProjectManagers: boolean, overdue: boolean, projectTree: boolean, checkTaskSeeRights: boolean, vBossType: unknown, struct: Object): unknown;

  function CheckRelativeFileVisibility(fldFile: unknown, userId: number, objectId: number, objectTopElem: XmlTopElem): unknown;

  function get_date_passed_string(date: Date, curLngId: string): unknown;

  function get_date_remain_string(date: Date, curLngId: string): unknown;

  function get_host_obj(request: unknown): unknown;

  function get_cur_lng_obj(id: Object): unknown;

  function get_cur_object_by_field(env: unknown, field: string): unknown;

  function get_cur_web_design(env: unknown): unknown;

  function get_cur_site(env: unknown): unknown;

  function get_cur_web_mode(env: unknown): unknown;

  function get_cur_env(request: unknown): unknown;

  function get_cur_env_url(env: unknown): unknown;

  function get_default_lng_web(user: Object): unknown;

  function get_profiling_statistic_rec_id(): unknown;

  function start_profiling_record(params: Object): unknown;

  function finish_profiling_record(id: string): unknown;

  function GetVacancyResponseStatus(obVacancyResponse: unknown, vacancyResponseId: number, curLngCommon: unknown): unknown;

  function html_decode(s: string): string;

  function html_to_imput_value(s: string): unknown;

  let content_types: XmlElem<ToolsWebContentTypes>;

  function get_app_ui(): unknown;

  function set_st_category(curUser: CurUser): unknown;

  function get_child_by_key_value(fldSource: unknown, key: string, defaultValue: string): unknown;

  function get_object_image_url(object: Object, dispDefault: boolean): unknown;

  function str_file_size(size: number, dispDefault: boolean): unknown;

  function get_base_url_path(env: Object): unknown;

  function set_base_url_path(url: string, env: Object): unknown;

  function get_menu_items(menuCode: string, levelsToShow: number, showDesc: boolean, cacheTime: number): unknown;

  function get_secid(sessionId: number): unknown;

  function check_secid(sum: string, sessionId: number): unknown;

  function clear_person_pict_cache(personId: number): unknown;

  function get_item_objectives_value(fldItem: unknown): unknown;

  function obtain_item_objectives_value(fldTarget: unknown, rValue: unknown, action: string): unknown;

  function send_message(vApplication: unknown, message: string, domain: string, aUser: unknown, options: Object): unknown;

  function wtmobile_get_auth_inner_codename(url: string): string;

  function wtmobile_get_config(entry: unknown): unknown;

  function replace_condition_operators(conditions: Object, value: number): unknown;

  function get_header_obj(header: string): unknown;

  function get_multipart_array(request: unknown): unknown;

  function get_game_rating(curUser: CurUser, checkLevel: boolean, currencyTypeId: string, allLevel: boolean, dispSub: boolean, subDepth: number, grpColl: number, paging: Object, curUserId: number, range: boolean, amntCollsRating: number, gap: string, samePlace: boolean, showTopRating: boolean, orgId: number): unknown;

  function get_game_rating_awards_or_badges(personTopElem: XmlTopElem, allLevel: boolean, checkLevel: boolean, levelId: number, amntCollsRating: number, dispSub: boolean, subdivId: number, subdivNum: number, currencyTypeId: string, grpColl: number, paging: Object, range: boolean): unknown;

  function get_game_rating_all(allLevel: boolean, checkLevel: boolean, levelId: number, dispSub: boolean, subdivId: number, subdivNum: number, currencyTypeId: string, grpColl: number, paging: Object, range: boolean, amntCollsRating: number, samePlace: boolean, showTopRating: boolean, orgId: number): unknown;

  function get_timezone(objectId: number, catObject: unknown, returnNull: boolean): unknown;

  function get_timezone_date(date: Date, catTimeZone1: unknown, catTimeZone2: unknown): unknown;

  function get_class_for_status(status: string): unknown;

  function get_url_query(url: string): unknown;

  function transform_fancy_url(source: unknown): unknown;

  function get_lng_fullname(personTopElem: XmlTopElem, fldLng: unknown): string;

  function get_language_desc(desc: string, env: Object): string;

  function set_override_web_params(curParamsTarget: unknown, catOverrIdeWebTemplate: unknown): boolean;

  function access_exists(fldAccess: unknown): boolean;

  function str_period_date(date: Date, curLngWeb: Env["curLngWeb"]): string;

  let web_rules_obj: XmlElem<unknown | null>;

  function get_enabled_web_rules(): WebRuleCatalogDocumentTopElem[];

  function get_std_web_rules(): ReturnType<typeof get_enabled_web_rules>;

  function clear_std_web_rules(): true;

  function get_mode_clean_url(mode: string, objectId?: number, params?: Object): string;

  function get_web_mode_clean_url(webMode: Object, objectId?: number, params?: Object): ReturnType<typeof get_mode_clean_url>;

  function convert_mode_clean_url(url: string): ReturnType<typeof get_mode_clean_url>;

  function get_clean_url_exc_query(url: string, excParams: string, params: Object): ReturnType<typeof get_mode_clean_url>;

  function obtain_shared_temp_file(suffix: string): string;

  function encode_url_reserved(url: string): string;

  function decode_url_reserved(url: string): string;

  function get_remote_action_param(paramNames: string[], topElem: RemoteActionDocumentTopElem): unknown;

  function check_collection_access(curUser: Object, object: Object, personAccessType: string): boolean;

  function get_empty_env(): Env;

  function get_empty_request(): Session;

  function get_admin_request(): Request;

  function parse_multiple_parameter(param: Object | unknown[] | string): unknown[];

  function get_md5_id(hashStr: string): string;

  function check_object(xmCurObject: XmlElem<unknown>, type: string): boolean;

  function check_redirect_url(url: string, requestUrl: string): boolean;

  function check_web_rule_by_url(url: string, request: Request): boolean;

  function check_learning_schedule(learning: number | XmlTopElem, objectTopElem?: XmlTopElem): {
    error: 0 | 1;
    error_text: string;
  };

  function set_user_status<T>(curUserId: number, status: T): ReturnType<typeof get_user_data> | T;

  function get_user_status(curUserId: number): ReturnType<typeof get_user_data>;

  function terminate_learning_connection(objectId: number): boolean;

  function create_learning_connection(objectTopElem: XmlTopElem, userTopElem: XmlTopElem, partCode: string | null | undefined): number;

  function log_learning_connection(type: string, connection: {
    id: unknown;
    active_learning_id: unknown;
    course_id: unknown;
    user_id: unknown;
    user_code: unknown;
    user_fullname: unknown;
    part_code: unknown;
  }): void;

  function set_data_cache(key: string, value: Object, duration: number): boolean;

  function get_data_cache<T>(key: string): T | null;

  function get_data_cache_by_pattern(pattern: string): unknown | null | [];

  function remove_data_cache(key: string): unknown | null;

  function is_json(text: string): boolean;
}
