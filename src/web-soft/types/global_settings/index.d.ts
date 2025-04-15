// TODO: need ref
declare namespace global_settings {
  let first_install: boolean;
  let branch_code: unknown;
  let skk_code: string;
  let old_skk_code: string;
  let smtp_server: string;
  let default_exchange_server_id: number | null;
  let settings: {
    default_web_design_id: number,
    web_designs: unknown,
    portal_base_url: string,
    use_personal_chat_global_policy: boolean,
    personal_chat_confirmation_required: boolean,
    max_message_in_block_count: number,
    use_queue_in_chat: boolean,
    auth_check_eval: string,
    auth_site_access_failed_eval: string,
    login_case_sensitive: boolean,
    login_domen_sensitive: boolean,
    use_auth_session: boolean,
    auth_session_life_time: number,
    template_cache_type: unknown,
    use_web_rules: true,
    web_rules: {
      exclude_path_list: string
    },
    default_file_source_id: number,
    search_in_trash: boolean,
    check_sid: boolean,
    disp_wellcome_screen: boolean,
    disp_anonymous_polls: boolean,
    check_user_required_fields: boolean,
    required_fields: unknown,
    web_api_settings: {
      use_api: boolean,
      access_person_id: number,
      allowed_ip: string,
      filters: unknown
    },
    mobile: {
      document_reader: {
        menu_code: string,
        days_credentials_update: unknown,
        use_favorites: boolean,
        use_search: boolean,
        confirmation: string,
        use_update_stamp: boolean,
        cs_p: string
      }
    },
    default_contact_type_id: number,
    default_contact_result_id: number,
    allow_self_register: boolean,
    self_register_group_id: unknown,
    web_banned_self_register: boolean,
    self_register_disp_custom_elems: boolean,
    self_register_disp_subs: boolean,
    self_register_org_id: unknown,
    self_register_subdivision_id: unknown,
    self_register_position_name: string,
    self_register_use_position_commons: boolean,
    eval_post_registration_script: boolean,
    post_registration_script: string,
    eval_prev_registration_script: boolean,
    prev_registration_script: string,
    script_create_login: boolean,
    script_create_password: boolean,
    vclass_hosts: unknown,
    library: {
      options: {
        ignore_before_first: boolean
      },
      cut_markers: unknown
    },
    save_exchange_data_files: boolean,
    auto_exchange_data: boolean,
    exchange_period: number,
    url_exchange_results: string,
    password_format: string,
    password_auto_rebuild: boolean,
    pass_validation_formula: string,
    fill_path_subs: boolean,
    check_access_on_lists: boolean,
    save_deleted_in_trash: boolean,
    fill_path_places: boolean,
    show_creator_editor_name: boolean,
    show_creator_in_reports: boolean,
    save_person_change_log: boolean,
    script_evaluation_cutoff: number,
    max_report_visible_rows: number,
    default_currency: string,
    default_cost_center_id: number,
    default_expense_item_id: number,
    cost_center_priority: string,
    timezone_id: unknown,
    auto_select_status_edu_plan: boolean,
    soft_kill_before_regenerate: boolean,
    check_wf_access_assessment: boolean,
    own_org: {
      name: string,
      phone: string,
      email: XmlElem<string>,
      smtp_server: string,
      use_smtp_authenticate: boolean,
      smtp_login: string,
      smtp_password: string,
      after_send_action: string,
      sent_save_hours: number,
      send_attempt_num: number
    },
    default_lng: string,
    lngs: unknown,
    recruitment: {
      default_request_type_id: number,
      estaff_server_url: string,
      estaff_login: string,
      estaff_password: string,
      estaff_subdivisions_script: string
    },
    delete_unused_resource: boolean,
    admin_not_auth: boolean,
    default_event_result_type_id: unknown,
    disp_log_web_request: boolean,
    log_web_request_rec_unloged: boolean,
    web_request_logging_str: string,
    disp_log_debug: boolean,
    disp_log_mail_trans: boolean,
    declare_odbc_commant_timeout: number,
    event_settings: {
      send_type: string,
      send_collaborators: boolean,
      send_bosses: boolean,
      send_lectors: boolean,
      send_tutors: boolean,
      send_event_preparations: boolean,
      show_result_fields: boolean
    },
    not_use_doc_contains: boolean,
    email_empty_create_notification: boolean,
    show_all_persons: boolean,
    websoft_plugin_server: {
      url: string,
      login: string,
      password: string
    },
    disp_social_block: boolean,
    social_avatar_priority: string,
    portal_tracking_type: string,
    external_web_players: {
      ext_x_lite_grid: boolean,
      ext_hardcore_source: boolean,
      openurl_eq_openwindow: boolean
    },
    key_position_threat_script: string,
    ppm_matrix: {
      rows: unknown
    },
    statistics: {
      calculate_statistics: boolean,
      calculation_period: number
    },
    script_queues: {
      enable_queues: boolean,
      running_period: number,
      clear_period: number
    },
    digital_signature_control: string,
    use_time_stamp_server: boolean,
    time_stamp_server_address: string,
    use_profiling: boolean,
    default_tenancy_template_id: number,
    default_webinar_system_id: number,
    lds_url_pattern: string,
    outstaff: {
      periods: unknown,
      materials: unknown,
      outstaff_boss_types: unknown,
      boss_type_id: number
    },
    send_learning_additional_info: boolean,
    set_st_category: boolean,
    use_queue_learnings: boolean,
    project: {
      options: {
        use_custom_project_status: boolean,
        use_custom_project_icon: boolean
      },
      project_status_types: object,
      project_icon_script: string
    },
    project_task: {
      options: {
        use_custom_project_task_status: boolean,
        use_custom_project_task_icon: boolean
      },
      project_task_status_types: unknown,
      project_task_icon_script: string
    },
    server_agent_time_start: boolean,
    cl: {
      use_constants: boolean,
      use_cache: boolean,
      access_setting: string
    },
    knowlcntrl: {
      default_expert_id: unknown
    },
    brute_password_check: boolean,
    brute_password_count: unknown,
    brute_password_period: unknown,
    lds: {
      brute_password_check: boolean,
      brute_password_count: unknown,
      brute_password_period: unknown
    },
    design_vscode_save_default: string,
    design_vscode_access: string;
  };
  let interface_mode: string;
  let disp_pers: boolean;
  let disp_pers_settings: boolean;
  let disp_sub: boolean;
  let disp_outstaff: boolean;
  let disp_comp_ben: boolean;
  let disp_comp_ben_settings: boolean;
  let disp_dist: boolean;
  let disp_dist_settings: boolean;
  let disp_test: boolean;
  let disp_test_adv: boolean;
  let disp_test_settings: boolean;
  let disp_web: boolean;
  let disp_fin: boolean;
  let disp_edu: boolean;
  let disp_edu_settings: boolean;
  let disp_ass: boolean;
  let disp_prop: boolean;
  let disp_admin: boolean;
  let disp_exs: boolean;
  let disp_secur: boolean;
  let disp_recr: boolean;
  let disp_pwt: boolean;
  let disp_knowlcntrl: boolean;
  let disp_knowlcntrl_settings: boolean;
  let disp_career: boolean;
  let disp_dnoffice: boolean;
  let disp_vclass: boolean;
  let disp_courselab: boolean;
  let disp_library: boolean;
  let disp_crm: boolean;
  let disp_crm_settings: boolean;
  let disp_game: boolean;
  let disp_mtenancy: boolean;
  let disp_prize: boolean;
  let disp_chatbots: boolean;
  let disp_mobile: boolean;
  let disp_proctoring: boolean;
  let disp_crmsale: boolean;
  let disp_wiki: boolean;
  let disp_collaborator_schedule: boolean;
  let disp_calendar_items: boolean;
  let disp_project_management: boolean;
  let disp_continuity: boolean;
  let disp_courselab_server: boolean;
  let update_exist_package_obj: boolean;
  let customer: string;
  let courses_path: string;
  let web_path: string;
  let debug: boolean;
  let is_demo: boolean;
  let object_deleted_str: string;
  let curator_boss_type_id: string;
  let tutor_boss_type_id: string;
  let project_manager_type_id: string;
  let default_contact_type_id: string;
  let default_contact_result_id: string;
  let install_stamp: string;
}
