// TODO: need ref
declare namespace global_settings {
  let first_install: XmlElem<boolean>;
  let branch_code: XmlElem<unknown>;
  let skk_code: XmlElem<string>;
  let old_skk_code: XmlElem<string>;
  let smtp_server: XmlElem<string>;
  let default_exchange_server_id: XmlElem<number | null>;
  let settings: {
    default_web_design_id: XmlElem<number>;
    web_designs: XmlElem<unknown>;
    portal_base_url: XmlElem<string>;
    use_personal_chat_global_policy: XmlElem<boolean>;
    personal_chat_confirmation_required: XmlElem<boolean>;
    max_message_in_block_count: XmlElem<number>;
    use_queue_in_chat: XmlElem<boolean>;
    auth_check_eval: XmlElem<string>;
    auth_site_access_failed_eval: XmlElem<string>;
    login_case_sensitive: XmlElem<boolean>;
    login_domen_sensitive: XmlElem<boolean>;
    use_auth_session: XmlElem<boolean>;
    auth_session_life_time: XmlElem<number>;
    template_cache_type: XmlElem<unknown>;
    use_web_rules: XmlElem<true>;
    web_rules: {
      exclude_path_list: XmlElem<string>;
    };
    default_file_source_id: XmlElem<number>;
    search_in_trash: XmlElem<boolean>;
    check_sid: XmlElem<boolean>;
    disp_wellcome_screen: XmlElem<boolean>;
    disp_anonymous_polls: XmlElem<boolean>;
    check_user_required_fields: XmlElem<boolean>;
    required_fields: XmlMultiElem<GlobalSettingsBaseRequiredField>;
    web_api_settings: {
      use_api: XmlElem<boolean>;
      access_person_id: XmlElem<number>;
      allowed_ip: XmlElem<string>;
      filters: XmlElem<unknown>;
    };
    mobile: {
      document_reader: {
        menu_code: XmlElem<string>;
        days_credentials_update: XmlElem<unknown>;
        use_favorites: XmlElem<boolean>;
        use_search: XmlElem<boolean>;
        confirmation: XmlElem<string>;
        use_update_stamp: XmlElem<boolean>;
        cs_p: XmlElem<string>;
      };
    };
    default_contact_type_id: XmlElem<number>;
    default_contact_result_id: XmlElem<number>;
    allow_self_register: XmlElem<boolean>;
    self_register_group_id: XmlElem<unknown>;
    web_banned_self_register: XmlElem<boolean>;
    self_register_disp_custom_elems: XmlElem<boolean>;
    self_register_disp_subs: XmlElem<boolean>;
    self_register_org_id: XmlElem<unknown>;
    self_register_subdivision_id: XmlElem<unknown>;
    self_register_position_name: XmlElem<string>;
    self_register_use_position_commons: XmlElem<boolean>;
    eval_post_registration_script: XmlElem<boolean>;
    post_registration_script: XmlElem<string>;
    eval_prev_registration_script: XmlElem<boolean>;
    prev_registration_script: XmlElem<string>;
    script_create_login: XmlElem<boolean>;
    script_create_password: XmlElem<boolean>;
    vclass_hosts: XmlElem<unknown>;
    library: {
      options: {
        ignore_before_first: XmlElem<boolean>;
      };
      cut_markers: XmlElem<unknown>;
    };
    save_exchange_data_files: XmlElem<boolean>;
    auto_exchange_data: XmlElem<boolean>;
    exchange_period: XmlElem<number>;
    url_exchange_results: XmlElem<string>;
    password_format: XmlElem<string>;
    password_auto_rebuild: XmlElem<boolean>;
    pass_validation_formula: XmlElem<string>;
    fill_path_subs: XmlElem<boolean>;
    check_access_on_lists: XmlElem<boolean>;
    save_deleted_in_trash: XmlElem<boolean>;
    fill_path_places: XmlElem<boolean>;
    show_creator_editor_name: XmlElem<boolean>;
    show_creator_in_reports: XmlElem<boolean>;
    save_person_change_log: XmlElem<boolean>;
    script_evaluation_cutoff: XmlElem<number>;
    max_report_visible_rows: XmlElem<number>;
    default_currency: XmlElem<string>;
    default_cost_center_id: XmlElem<number>;
    default_expense_item_id: XmlElem<number>;
    cost_center_priority: XmlElem<string>;
    timezone_id: XmlElem<unknown>;
    auto_select_status_edu_plan: XmlElem<boolean>;
    soft_kill_before_regenerate: XmlElem<boolean>;
    check_wf_access_assessment: XmlElem<boolean>;
    own_org: {
      name: XmlElem<string>;
      phone: XmlElem<string>;
      email: XmlElem<string>;
      smtp_server: XmlElem<string>;
      use_smtp_authenticate: XmlElem<boolean>;
      smtp_login: XmlElem<string>;
      smtp_password: XmlElem<string>;
      after_send_action: XmlElem<string>;
      sent_save_hours: XmlElem<number>;
      send_attempt_num: XmlElem<number>;
    };
    default_lng: XmlElem<string>;
    lngs: XmlElem<unknown>;
    recruitment: {
      default_request_type_id: XmlElem<number>;
      estaff_server_url: XmlElem<string>;
      estaff_login: XmlElem<string>;
      estaff_password: XmlElem<string>;
      estaff_subdivisions_script: XmlElem<string>;
    };
    delete_unused_resource: XmlElem<boolean>;
    admin_not_auth: XmlElem<boolean>;
    default_event_result_type_id: XmlElem<unknown>;
    disp_log_web_request: XmlElem<boolean>;
    log_web_request_rec_unloged: XmlElem<boolean>;
    web_request_logging_str: XmlElem<string>;
    disp_log_debug: XmlElem<boolean>;
    disp_log_mail_trans: XmlElem<boolean>;
    declare_odbc_commant_timeout: XmlElem<number>;
    event_settings: {
      send_type: XmlElem<string>;
      send_collaborators: XmlElem<boolean>;
      send_bosses: XmlElem<boolean>;
      send_lectors: XmlElem<boolean>;
      send_tutors: XmlElem<boolean>;
      send_event_preparations: XmlElem<boolean>;
      show_result_fields: XmlElem<boolean>;
    };
    not_use_doc_contains: XmlElem<boolean>;
    email_empty_create_notification: XmlElem<boolean>;
    show_all_persons: XmlElem<boolean>;
    websoft_plugin_server: {
      url: XmlElem<string>;
      login: XmlElem<string>;
      password: XmlElem<string>;
    };
    disp_social_block: XmlElem<boolean>;
    social_avatar_priority: XmlElem<string>;
    portal_tracking_type: XmlElem<string>;
    external_web_players: {
      ext_x_lite_grid: XmlElem<boolean>;
      ext_hardcore_source: XmlElem<boolean>;
      openurl_eq_openwindow: XmlElem<boolean>;
    };
    key_position_threat_script: XmlElem<string>;
    ppm_matrix: {
      rows: unknown;
    };
    statistics: {
      calculate_statistics: XmlElem<boolean>;
      calculation_period: XmlElem<number>;
    };
    script_queues: {
      enable_queues: XmlElem<boolean>;
      running_period: XmlElem<number>;
      clear_period: XmlElem<number>;
    };
    digital_signature_control: XmlElem<string>;
    use_time_stamp_server: XmlElem<boolean>;
    time_stamp_server_address: XmlElem<string>;
    use_profiling: XmlElem<boolean>;
    default_tenancy_template_id: XmlElem<number>;
    default_webinar_system_id: XmlElem<number>;
    lds_url_pattern: XmlElem<string>;
    outstaff: {
      periods: unknown;
      materials: unknown;
      outstaff_boss_types: unknown;
      boss_type_id: number;
    };
    send_learning_additional_info: XmlElem<boolean>;
    set_st_category: XmlElem<boolean>;
    use_queue_learnings: XmlElem<boolean>;
    project: {
      options: {
        use_custom_project_status: XmlElem<boolean>;
        use_custom_project_icon: XmlElem<boolean>;
      };
      project_status_types: XmlElem<object>;
      project_icon_script: XmlElem<string>;
    };
    project_task: {
      options: {
        use_custom_project_task_status: XmlElem<boolean>;
        use_custom_project_task_icon: XmlElem<boolean>;
      };
      project_task_status_types: XmlElem<unknown>;
      project_task_icon_script: XmlElem<string>;
    };
    server_agent_time_start: XmlElem<boolean>;
    cl: {
      use_constants: XmlElem<boolean>;
      use_cache: XmlElem<boolean>;
      access_setting: XmlElem<string>;
    };
    knowlcntrl: {
      default_expert_id: unknown
    };
    brute_password_check: XmlElem<boolean>;
    brute_password_count: XmlElem<unknown>;
    brute_password_period: XmlElem<unknown>;
    lds: {
      brute_password_check: XmlElem<boolean>;
      brute_password_count: XmlElem<unknown>;
      brute_password_period: XmlElem<unknown>;
    };
    design_vscode_save_default: XmlElem<string>;
    design_vscode_access: XmlElem<string>;
  };
  let interface_mode: XmlElem<string>;
  let disp_pers: XmlElem<boolean>;
  let disp_pers_settings: XmlElem<boolean>;
  let disp_sub: XmlElem<boolean>;
  let disp_outstaff: XmlElem<boolean>;
  let disp_comp_ben: XmlElem<boolean>;
  let disp_comp_ben_settings: XmlElem<boolean>;
  let disp_dist: XmlElem<boolean>;
  let disp_dist_settings: XmlElem<boolean>;
  let disp_test: XmlElem<boolean>;
  let disp_test_adv: XmlElem<boolean>;
  let disp_test_settings: XmlElem<boolean>;
  let disp_web: XmlElem<boolean>;
  let disp_fin: XmlElem<boolean>;
  let disp_edu: XmlElem<boolean>;
  let disp_edu_settings: XmlElem<boolean>;
  let disp_ass: XmlElem<boolean>;
  let disp_prop: XmlElem<boolean>;
  let disp_admin: XmlElem<boolean>;
  let disp_exs: XmlElem<boolean>;
  let disp_secur: XmlElem<boolean>;
  let disp_recr: XmlElem<boolean>;
  let disp_pwt: XmlElem<boolean>;
  let disp_knowlcntrl: XmlElem<boolean>;
  let disp_knowlcntrl_settings: XmlElem<boolean>;
  let disp_career: XmlElem<boolean>;
  let disp_dnoffice: XmlElem<boolean>;
  let disp_vclass: XmlElem<boolean>;
  let disp_courselab: XmlElem<boolean>;
  let disp_library: XmlElem<boolean>;
  let disp_crm: XmlElem<boolean>;
  let disp_crm_settings: XmlElem<boolean>;
  let disp_game: XmlElem<boolean>;
  let disp_mtenancy: XmlElem<boolean>;
  let disp_prize: XmlElem<boolean>;
  let disp_chatbots: XmlElem<boolean>;
  let disp_mobile: XmlElem<boolean>;
  let disp_proctoring: XmlElem<boolean>;
  let disp_crmsale: XmlElem<boolean>;
  let disp_wiki: XmlElem<boolean>;
  let disp_collaborator_schedule: XmlElem<boolean>;
  let disp_calendar_items: XmlElem<boolean>;
  let disp_project_management: XmlElem<boolean>;
  let disp_continuity: XmlElem<boolean>;
  let disp_courselab_server: XmlElem<boolean>;
  let update_exist_package_obj: XmlElem<boolean>;
  let customer: XmlElem<string>;
  let courses_path: XmlElem<string>;
  let web_path: XmlElem<string>;
  let debug: XmlElem<boolean>;
  let is_demo: XmlElem<boolean>;
  let object_deleted_str: XmlElem<string>;
  let curator_boss_type_id: XmlElem<string>;
  let tutor_boss_type_id: XmlElem<string>;
  let project_manager_type_id: XmlElem<string>;
  let default_contact_type_id: XmlElem<string>;
  let default_contact_result_id: XmlElem<string>;
  let install_stamp: XmlElem<string>;
}
