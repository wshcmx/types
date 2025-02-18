declare namespace tools_web {
  function put_query_string(str: string, pageName: unknown): unknown;

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
  function doc_link(attributes: Object): unknown;
  function get_object_link(objectName: string, objectId: number, objectTopElem: XmlTopElem, docId: number): unknown;

  /**
   * Получение текстового значения языкового параметра из curLngWeb.
   * @param {string} name - Название параметра.
   * @returns {string} Значение языкового параметра.
   */
  function get_web_str(name: string): unknown;
  function get_web_const(name: string, fldLng: unknown): unknown;
  function eval_web_column_const(name: string, fldLng: unknown): unknown;
  function get_web_desc(sourceHtml: string, url: Object, path: unknown, env: unknown): string;

  /**
   * Складывает два `id`.
   * @param {number} id - Id объекта.
   * @param {number} sessionId - Id сессии.
   * @returns {number} Сумма Id объекта и Id сессии.
   */
  function get_sum_sid(id: string, sessionId: number): unknown;
  function check_sum_sid(id: string, sum: string, sessionId: number): unknown;
  function custom_elems_filling(fldTarget: unknown, source: Object, arrCustomElems: unknown[], params: Object): unknown;
  function web_custom_elems_filling(catalog: unknown, topId: number, source: unknown, requestForm: unknown, valueFlag: unknown, charset: string, arrFields: unknown[]): unknown;
  function update_object_from_context(object: unknown, context: Object, arrFieldNames: unknown[], prefix: string): unknown;
  function get_query_string_from_url(url: string, flag: unknown, params: unknown): unknown;
  function get_query_string(flag: unknown, params: unknown): unknown;
  function get_url_protocol(url: string): unknown;
  function set_url_protocol(url: string): unknown;
  function get_cur_lng_name(text: string, shortId: string): string;
  function check_access(source: unknown, personDocId: number, personDoc: CollaboratorDocument, session: Session): unknown;
  function get_web_param(listParamsTarget: unknown, paramName: string, defaultValue: string, emptyFlag: boolean, overrIdeWebTemplateId: string): unknown;
  function set_web_params(listParamsTarget: unknown, listWvars: unknown, rewriteFlag: boolean, overrIdeWebTemplateId: number): unknown;
  function write_custom_web_template(customWebTemplate: Object): unknown;
  function get_override_web_template(overrIdeWebTemplateId: number, session: Session, curUserId: number, curUser: CurUser, curAnonymousAccess: unknown, activeWebTemplateTopElem: XmlTopElem, adding: boolean): unknown;
  function get_override_web_templates(session: Session, zone: Object, curActiveWebTemplate: unknown, addWebTemplate: boolean, envObj: Object): unknown;
  function place_zone(zone: string, createFCache: boolean, lPEPreview: boolean): unknown;
  function place_override_web_template(overrIdeWebTemplateId: number, insertCustomCodeParams: Object): unknown;
  function get_operation_script(oPERATIONId: number, sSCRIPTTYPE: unknown, oPARAMS: unknown): unknown;
  function eval_operation_script(oPERATIONId: number, sSCRIPTTYPE: unknown, oPARAMS: unknown): unknown;
  function is_moderator_forum(forumId: number, userId: number, forumTopElem: XmlTopElem): unknown;
  function is_privilege_collaborator(forumEntryId: number, userTopElem: XmlTopElem, userId: number, forumEntryTopElem: XmlTopElem): unknown;
  function is_forum_readed(forumId: number, userId: number): unknown;
  function check_forum_entry_access(catForumEntry: unknown, userTopElem: XmlTopElem, userId: number, forumTopElem: XmlTopElem): unknown;
  function remove_forum_entry(forumEntryId: number): unknown;
  function close_forum_entry(forumEntryId: number, forumEntry: unknown): unknown;
  function draw_calendar(objectName: unknown, objectValue: unknown, format: unknown): unknown;
  function web_files_process(sourceFiles: unknown): unknown;
  function convert_xhttp_res(textArea: unknown, sourceDesc: unknown): unknown;
  function get_my_person_object_link_card(cATALOG: unknown, uSERId: number, dOCHIMSELF: XmlDocument, mAKENEWONABSENCE: unknown): unknown;
  function get_person_object_info(catalog: string, userId: number, userTopElem: XmlTopElem): unknown;
  function set_person_object_info(catalog: string, userId: number, userTopElem: XmlTopElem, aObjectsMeta: unknown): unknown;
  function get_object_owners(objectId: number, catalog: string): unknown;
  function insert_custom_code(customWebTemplateId: number, customWebTemplateTopElem: XmlTopElem, eval: boolean, naked: boolean, depth: number, aOfFldNativeParamsArr: unknown, externalEnvelope: boolean): string;
  function place_xaml(customWebTemplateId: number, cWebTemplateTopElem: XmlTopElem, placeXamlParams: Object): unknown;
  function place_xaml_player(customWebTemplate: number, curWebDesign: unknown, request: unknown, placeXamlParams: Object): unknown;
  function convert_xss(text: string, type: string): unknown;
  function xss_neutralize(text: string): unknown;

  /**
   * Возврат экземпляра библиотеки regexp
   * Global = true
   * IgnoreCase = true
   * MultiLine = true.
   * @returns {Websoft.RegExp.RegExp} Экземпляр библиотеки.
   */
  function reg_exp_init(): unknown;
  function convert_bbcode_to_html(messageSource: string, objRegExp: unknown): unknown;
  function convert_html_to_bbcode(messageSource: string, objRegExp: unknown): string;
  function convert_bbtags_to_html(messageSource: string, objRegExp: unknown): unknown;
  function get_bbcode_tag_ids(messageSource: string, objRegExp: unknown): unknown;
  function clear_bbcode_from_html(messageSource: string, objRegExp: unknown): unknown;
  function get_new_request_by_query(): unknown;
  function update_community_authors(objectId: number, vAuthors: unknown, nbDelete: unknown): unknown;
  function evaluate_remote_action(vRemoteActionDoc: unknown, request: unknown): unknown;
  function Unsqueeze(txt: string, idx: number): unknown;
  function get_collection_param(): unknown;
  function external_eval(command: string, params: Object, env: unknown): unknown;
  function env_to_script(env: Object): unknown;
  function object_init(sessionTarget: Object, query: Object, objectEnvSave: boolean): unknown;
  function get_column_width(type: string, mode: string): unknown;
  function get_catalog_list_arrays(collection: Object, env: unknown, envLngCommon: unknown): unknown;
  function check_session_user(request: unknown, userId: number): unknown;

  /**
   * Возвращает значение true/false в завимости от передаваемого параметра.
   * @param {T} o - Параметр.
   * @returns {boolean} Значение аргумента в булевом представлении.
   */
  function is_true(o: Object): unknown;
  function init_cur_active_web_template(env: unknown, create: boolean): unknown;
  function save_cur_active_web_template(activeWebTemplateDocTopElem: XmlTopElem, finishSave: boolean): unknown;
  function drop_active_web_templates(): unknown;
  function get_session_lng(session: Session): unknown;
  function check_site_access(personTopElem: XmlTopElem, site: Object): unknown;
  function get_resource_url(objectId: number, session: Session): unknown;
  function get_custom_web_template_url(templateId: number): unknown;

  /**
   * Получение url ссылки объекта по Id.
   * @param {string} catalogType - Каталог объекта.
   * @param {number} objectId - Id объекта.
   * @param {unknown} params - Параметры для определения хоста/сессии/etc.
   * @returns {string} Url.
   */
  function get_object_source_url(catalogType: string, objectId: number, params: Object): unknown;
  function GetTalentPoolObjectsList(personId: number, addFuncSubordinates: boolean, hIdeDissmissed: boolean, vBossType: unknown, careerReserveType: number): unknown;
  function GetRequiredQualificationsList(personId: number, searchList: string, catalogList: boolean): unknown;
  function get_recommended_materials(personId: number, searchList: string, catalogList: boolean, rootId: number): unknown;
  function set_var_eval(varNama: string, curVars: unknown, eval: Object, evalType: string): unknown;
  function get_var_eval(varNama: string, curVars: unknown, eval: Object, evalType: string): unknown;
  function convert_desc_to_html(desc: string): unknown;
  function get_user_recommended_learning(userId: number, userTopElem: XmlTopElem): unknown;

  /**
   * Создание кэша по коду.
   * @param {string} conditions - Код кэша.
   * @param {T} value - Payload.
   * @param {number} duration - Время жизни кэша.
   * @param {string} listName - Данные.
   * @returns {unknown}.
   */
  function set_user_data<T>(conditions: Object, value: T, duration: number, listName: string): unknown;

  /**
   * Получение кэша по коду.
   * @param {string} conditions - Код кэша.
   * @returns {string | null} Значение кэша.
   */
  function get_user_data(conditions: Object): string | null;
  function remove_user_data(key: string, listName: string): unknown;
  function remove_user_data_by_prefix(key: string): unknown;
  function obtain_text_area(docId: number, docTargetTopElem: XmlTopElem): unknown;
  function get_host_name(url: string): string;
  function get_cur_host_name(hostTopElem: XmlTopElem, request: Object): string;
  function get_cur_host_path(hostTopElem: XmlTopElem, request: Object): unknown;
  function get_cur_host_path_by_url(hostTopElem: XmlTopElem, url: string): unknown;
  function get_cur_hosts(request: Object): unknown;
  function get_cur_host(request: Object): unknown;
  function is_correct_question(fldquestion: unknown, itemTopElem: XmlTopElem): unknown;
  function save_cur_object_doc(object: unknown, env: Object): unknown;
  function build_query_url(url: string, hostAndPath: string): unknown;
  function build_relative_url(url: string): unknown;
  function set_modified_response_status(requestTarget: Object, url: string, dtLastModified: unknown): unknown;
  function str_utc_mime_date(dtDate: unknown): unknown;
  function get_tracking_url(fldLocation: unknown, curHostPath: unknown): unknown;
  function create_resource_from_attacment(attachment: Object, personId: number, personTopElem: XmlTopElem): unknown;
  function get_key_positions_list(personId: number, struct: Object): unknown;

  /**
   * Формирует content-type из Url файла.
   * @param {string} url - Url файла.
   * @returns {string} Content-Type значение.
   */
  function url_std_content_type(url: string): unknown;

  /**
   * Возвращает DOTNETCORE-VFS=='1' из AppConfig.
   * @returns {boolean} DOTNETCORE-VFS=='1'.
   */
  let is_vfs: XmlElem<boolean | null>;

  /**
   * Отправка файла в response stream.
   * @param {string} url - Url файла.
   * @param {Request} request - Объект запроса Request.
   * @returns {unknown}.
   */
  function write_url_to_response(url: string, request: Object): unknown;

  /**
   * Декоратор для простого шифрования функцией StrSimpleEncrypt({objectId}_{date}).
   * @param {string} launchId - Id объекта.
   * @param {Date} endDate - Дата.
   * @returns {string} Значение StrSimpleEncrypt({objectId}_{date}).
   */
  function encrypt_launch_id(launchId: string, endDate: Date): string;
  function decrypt_launch_id(launchId: string): unknown;
  function get_valid_url(url: string): unknown;
  function get_active_web_template_hash(mode: string, accessLevel: string, accessRole: string, siteId: string, webDesignId: string): unknown;
  function build_submatched_string(sourceString: string, realString: string, destString: string): unknown;
  function get_auth_hash(source: string): unknown;
  function get_user_id_by_login(authLogin: string, authParams: Object): unknown;
  function set_cookie_auth(request: unknown, curHost: unknown, auth: Object): unknown;
  function set_x_auth_id(request: unknown, curUser: CurUser, curHost: unknown): unknown;
  function get_portal_auth_type_obj(request: unknown, curHost: unknown, arrIdmClaims: unknown[]): unknown;

  /**
   * Инициализаяция пользователя.
   * @param {Request} request - Объект Request.
   * @param {object} o - Параметры.
   * @returns {IToolsWebUserInit} Результат инициализации пользователя из запроса.
   */
  function user_init(request: unknown, o: Object): unknown;
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
  let content_types: XmlElem<unknown | null>;
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
  function set_override_web_params(curParamsTarget: unknown, catOverrIdeWebTemplate: unknown): unknown;
  function access_exists(fldAccess: unknown): unknown;
  function str_period_date(dt: unknown, curLngWeb: unknown): unknown;
  let web_rules_obj: XmlElem<unknown | null>;
  function get_enabled_web_rules(): unknown;
  function get_std_web_rules(): unknown;
  function clear_std_web_rules(): unknown;
  function get_mode_clean_url(mode: string, objectId: number, params: Object): unknown;
  function get_web_mode_clean_url(webMode: Object, objectId: number, params: Object): unknown;
  function convert_mode_clean_url(url: string): unknown;
  function get_clean_url_exc_query(url: string, excParams: string, params: Object): unknown;
  function obtain_shared_temp_file(suffix: string): unknown;
  function encode_url_reserved(url: string): unknown;
  function decode_url_reserved(url: string): unknown;
  function get_remote_action_param(aNames: unknown, tOPELEM: unknown): unknown;
  function check_collection_access(curUser: Object, object: Object, personAccessType: string): unknown;
  function get_empty_env(): unknown;
  function get_empty_request(): unknown;
  function get_admin_request(): unknown;
  function parse_multiple_parameter(param: unknown): unknown;
  function get_md5_id(hashStr: string): unknown;
  function check_object(xmCurObject: unknown, type: string): unknown;
  function check_redirect_url(url: string, requestUrl: string): unknown;
  function check_web_rule_by_url(url: string, request: unknown): unknown;
  function check_learning_schedule(learning: Object, objectTopElem: XmlTopElem): unknown;
  function set_user_status(curUserId: number, status: Object): unknown;
  function get_user_status(curUserId: number): unknown;
  function terminate_learning_connection(objectId: number): unknown;
  function create_learning_connection(objectTopElem: XmlTopElem, userTopElem: XmlTopElem, partCode: string): unknown;
  function log_learning_connection(type: string, connection: Object): unknown;
  function set_data_cache(key: string, value: Object, duration: number): unknown;
  function get_data_cache(key: string): unknown;
  function get_data_cache_by_pattern(pattern: string): unknown;
  function remove_data_cache(key: string): unknown;
  function is_json(text: string): unknown;
}
