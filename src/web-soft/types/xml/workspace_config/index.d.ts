interface WorkspaceConfigDocumentThemeBlockTheme {
  theme_id: XmlElem<string | null, typeof common.workspace_themes>;
}

interface WorkspaceConfigDocumentThemeBlock {
  /** Тема по умолчанию */
  default_theme_id: XmlElem<string | null, typeof common.workspace_themes>;
  themes: XmlMultiElem<WorkspaceConfigDocumentThemeBlockTheme | null>;
}

interface WorkspaceConfigDocumentConversationBlockCollaboratorInfo {
  /**
   * Телефон
   * @default false
   */
  phone: XmlElem<boolean>;
  /**
   * Электронная почта
   * @default false
   */
  email: XmlElem<boolean>;
  /**
   * Должность
   * @default false
   */
  position: XmlElem<boolean>;
  /**
   * Подразделение
   * @default false
   */
  subdivision: XmlElem<boolean>;
  /**
   * Дата рождения (без года)
   * @default false
   */
  birth_date: XmlElem<boolean>;
}

interface WorkspaceConfigDocumentConversationBlockGroupConversation {
  /**
   * Разрешить выходить из групповых разговоров
   * @default false
   */
  allow_exit: XmlElem<boolean>;
  /**
   * Разрешить управлять участниками в групповых разговорах
   * @default false
   */
  allow_change_participant: XmlElem<boolean>;
  /**
   * Разрешить менять названия групповых разговоров организатору
   * @default false
   */
  allow_change_name: XmlElem<boolean>;
  /**
   * Разрешить всегда менять названия групповых разговоров
   * @default false
   */
  allow_always_change_name: XmlElem<boolean>;
  /**
   * Разрешить менять иконки групповых разговоров организатору
   * @default false
   */
  allow_change_icon: XmlElem<boolean>;
  /**
   * Разрешить всегда менять иконки групповых разговоров
   * @default false
   */
  allow_always_change_icon: XmlElem<boolean>;
}

interface WorkspaceConfigDocumentConversationBlockChat {
  /**
   * Разрешить писать сообщения
   * @default false
   */
  allow_write_message: XmlElem<boolean>;
  /**
   * Разрешить реакции на сообщения
   * @default false
   */
  allow_reaction: XmlElem<boolean>;
  /**
   * Разрешить редактировать свои сообщения
   * @default false
   */
  allow_edit_message: XmlElem<boolean>;
  /**
   * Разрешить удалять свои сообщения у себя
   * @default false
   */
  allow_hide_message_for_yourself: XmlElem<boolean>;
  /**
   * Разрешить удалять свои сообщения у всех
   * @default false
   */
  allow_hide_message: XmlElem<boolean>;
  /**
   * Разрешить пересылать сообщения
   * @default false
   */
  allow_forward: XmlElem<boolean>;
  /**
   * Разрешить отправлять сообщения со сроком ознакомления
   * @default false
   */
  allow_write_message_with_aquaint: XmlElem<boolean>;
  /**
   * Разрешить отправлять аудиосообщения
   * @default false
   */
  allow_write_audio_message: XmlElem<boolean>;
  /**
   * Разрешить вставлять в чат картинки из буфера обмена
   * @default false
   */
  allow_insert_images_from_clipboard: XmlElem<boolean>;
  /**
   * Разрешить отправлять в чат картинки
   * @default false
   */
  allow_insert_images: XmlElem<boolean>;
  /**
   * Разрешить отправлять в чат файлы
   * @default false
   */
  allow_insert_files: XmlElem<boolean>;
  /**
   * Максимальная длина сообщения
   * @default 1000
   */
  max_message_length: XmlElem<number | null>;
}

interface WorkspaceConfigDocumentConversationBlockCall {
  /**
   * Разрешить микрофон
   * @default false
   */
  allow_microphone: XmlElem<boolean>;
  /**
   * Разрешить трансляцию экрана
   * @default false
   */
  allow_screen_broadcast: XmlElem<boolean>;
  /**
   * Разрешить камеру
   * @default false
   */
  allow_camera: XmlElem<boolean>;
  /**
   * Показывать сообщения о присоединении к групповому звонку
   * @default false
   */
  show_message_member_connect_call: XmlElem<boolean>;
  /** Максимально допустимое разрешение камеры */
  video_format_id: XmlElem<string | null, typeof common.video_formats>;
  /** Максимальное число участников в звонке */
  limit_participant: XmlElem<number | null>;
  /**
   * Резервировать полосу пропускания для звонка
   * @default false
   */
  reserve_bitrate: XmlElem<boolean | null>;
  /** Лимит входящего трафика для участника звонка */
  max_incoming_bitrate: XmlElem<number | null>;
  /** Лимит исходящего трафика для участника звонка */
  max_outgoing_bitrate: XmlElem<number | null>;
  /** Число участников на странице по умолчанию */
  pagesize: XmlElem<number | null>;
  /**
   * Выделять выступающего
   * @default false
   */
  use_audio_options: XmlElem<boolean | null>;
  /**
   * Максимальное число выступающих для выделения
   * @default 1
   */
  audio_max_entries: XmlElem<number | null>;
  /**
   * Порог для определения выступающих
   * @default 80
   */
  audio_min_threshold: XmlElem<number | null>;
  /**
   * Интервал между проверками выступающих (в мс)
   * @default 1000
   */
  audio_interval: XmlElem<number | null>;
  /**
   * Разрешить записывать звонки
   * @default false
   */
  allow_write: XmlElem<boolean>;
  /**
   * Разрешить расшифровывать звонки
   * @default false
   */
  allow_recognition: XmlElem<boolean>;
  /**
   * Разрешить автоматическое формирование резюме по звонку
   * @default false
   */
  allow_summary: XmlElem<boolean>;
}

interface WorkspaceConfigDocumentConversationBlockWebinar {
  /** Максимальное число ведущих вебинара */
  limit_tutor: XmlElem<number | null>;
  /** Максимальное число участников вебинара */
  limit_participant: XmlElem<number | null>;
  /**
   * Резервировать полосу пропускания для вебинара
   * @default false
   */
  reserve_bitrate: XmlElem<boolean | null>;
  /** Лимит входящего трафика для участника вебинара */
  max_incoming_bitrate: XmlElem<number | null>;
  /** Лимит исходящего трафика для участника вебинара */
  max_outgoing_bitrate: XmlElem<number | null>;
  /**
   * Выделять выступающего
   * @default false
   */
  use_audio_options: XmlElem<boolean | null>;
  /**
   * Максимальное число выступающих для выделения
   * @default 1
   */
  audio_max_entries: XmlElem<number | null>;
  /**
   * Порог для определения выступающих
   * @default 80
   */
  audio_min_threshold: XmlElem<number | null>;
  /**
   * Интервал между проверками выступающих (в мс)
   * @default 1000
   */
  audio_interval: XmlElem<number | null>;
  /** Максимально допустимое разрешение камеры */
  video_format_id: XmlElem<string | null, typeof common.video_formats>;
  /** Максимально допустимое разрешение трансляции экрана */
  screen_format_id: XmlElem<string | null, typeof common.video_formats>;
}

interface WorkspaceConfigDocumentConversationBlock {
  /**
   * Показывать раздел Разговоры
   * @default false
   */
  show_conversation: XmlElem<boolean>;
  /**
   * Разрешить создавать разговоры
   * @default false
   */
  allow_create_conversation: XmlElem<boolean>;
  /**
   * Разрешить создавать разговоры
   * @default false
   */
  allow_create_call: XmlElem<boolean>;
  /**
   * Разрешить расширенный поиск разговоров
   * @default false
   */
  allow_advanced_search: XmlElem<boolean>;
  /**
   * Выбор собеседников
   * @default participant
   */
  collaborator_visible_type_id: XmlElem<string | null, typeof common.conversation_visible_types>;
  collaborator_info: XmlElem<WorkspaceConfigDocumentConversationBlockCollaboratorInfo | null>;
  group_conversation: XmlElem<WorkspaceConfigDocumentConversationBlockGroupConversation | null>;
  chat: XmlElem<WorkspaceConfigDocumentConversationBlockChat | null>;
  call: XmlElem<WorkspaceConfigDocumentConversationBlockCall | null>;
  webinar: XmlElem<WorkspaceConfigDocumentConversationBlockWebinar | null>;
}

interface WorkspaceConfigDocumentCalendarBlock {
  /**
   * Показывать раздел Календарь
   * @default false
   */
  show_calendar: XmlElem<boolean>;
  /**
   * Показывать вебинары
   * @default false
   */
  show_event: XmlElem<boolean>;
  /**
   * Показывать звонки
   * @default false
   */
  show_call: XmlElem<boolean>;
  /**
   * Разрешить создавать вебинары
   * @default false
   */
  allow_create_event: XmlElem<boolean>;
  /**
   * Разрешить создавать звонки
   * @default false
   */
  allow_create_call: XmlElem<boolean>;
  /**
   * Разрешить удалять вебинары
   * @default false
   */
  allow_delete_event: XmlElem<boolean>;
  /**
   * Разрешить удалять звонки
   * @default false
   */
  allow_delete_call: XmlElem<boolean>;
}

interface WorkspaceConfigDocumentTaskBlockTaskType {
  task_type_id: XmlElem<number | null, TaskTypeCatalogDocumentTopElem>;
}

interface WorkspaceConfigDocumentTaskBlock {
  /**
   * Показывать раздел Задачи
   * @default false
   */
  show_task: XmlElem<boolean>;
  /**
   * Разрешить создавать задачи
   * @default false
   */
  allow_create_task: XmlElem<boolean>;
  /**
   * Разрешить редактировать задачи исполнителю
   * @default false
   */
  allow_edit_task_executor: XmlElem<boolean>;
  /**
   * Разрешить менять статус задачи исполнителю
   * @default false
   */
  allow_change_status_task_executor: XmlElem<boolean>;
  /**
   * Разрешить удалять задачи автору
   * @default false
   */
  allow_delete_task_assigner: XmlElem<boolean>;
  /**
   * Разрешить удалять задачи исполнителю
   * @default false
   */
  allow_delete_task_executor: XmlElem<boolean>;
  /**
   * Показывать email в списке сотрудников
   * @default false
   */
  show_email: XmlElem<boolean>;
  task_types: XmlMultiElem<WorkspaceConfigDocumentTaskBlockTaskType | null>;
}

interface WorkspaceConfigDocumentWikiBlock {
  /**
   * Показывать раздел Пространства знаний
   * @default false
   */
  show_wiki: XmlElem<boolean>;
  /**
   * Разрешить создавать пространства знаний
   * @default false
   */
  allow_create_wiki: XmlElem<boolean>;
  /** Название личного пространства */
  personal_wiki_name: XmlElem<string | null>;
  /** Текст при отсутствии личного пространства */
  personal_wiki_text: XmlElem<string | null>;
}

interface WorkspaceConfigDocumentServiceBlock {
  /**
   * Показывать Сервисы
   * @default false
   */
  show_service: XmlElem<boolean>;
}

interface WorkspaceConfigDocumentApplicationBlock {
  /**
   * Показывать Приложения
   * @default false
   */
  show_application: XmlElem<boolean>;
}

interface WorkspaceConfigDocumentTimeTrackerBlock {
  /**
   * Показывать Учет времени
   * @default false
   */
  show_time_tracker: XmlElem<boolean>;
}

type WorkspaceConfigDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: WorkspaceConfigDocument;
  /**
   * WorkSpace активен
   * @default false
   */
  is_enabled: XmlElem<boolean>;
  theme_block: XmlElem<WorkspaceConfigDocumentThemeBlock | null>;
  /** Файл с надписями */
  labels_file_url: XmlElem<string | null>;
  /** Заголовок портала */
  portal_title: XmlElem<string | null>;
  /** Значок веб-сайта (favicon) */
  favicon_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  conversation_block: XmlElem<WorkspaceConfigDocumentConversationBlock | null>;
  calendar_block: XmlElem<WorkspaceConfigDocumentCalendarBlock | null>;
  task_block: XmlElem<WorkspaceConfigDocumentTaskBlock | null>;
  wiki_block: XmlElem<WorkspaceConfigDocumentWikiBlock | null>;
  service_block: XmlElem<WorkspaceConfigDocumentServiceBlock | null>;
  application_block: XmlElem<WorkspaceConfigDocumentApplicationBlock | null>;
  time_tracker_block: XmlElem<WorkspaceConfigDocumentTimeTrackerBlock | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<unknown | null>;
};

type WorkspaceConfigDocument = XmlDocument & {
  TopElem: WorkspaceConfigDocumentTopElem;
  workspace_config: WorkspaceConfigDocumentTopElem;
  DocDesc(): string;
};
