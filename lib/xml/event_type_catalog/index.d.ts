type EventTypeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Шаблон карточки на портале */
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Шаблон упрощенной карточки на портале */
  simpl_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /**
   * Мероприятие online
   * @default false
   */
  online: XmlElem<boolean>;
  /**
   * Автоматический запуск мероприятия при входе
   * @default false
   */
  auto_start: XmlElem<boolean>;
  /**
   * Разрешено использовать камеру по умолчанию
   * @default false
   */
  can_use_camera: XmlElem<boolean | null>;
  /**
   * Разрешено использовать микрофон по умолчанию
   * @default false
   */
  can_use_microphone: XmlElem<boolean | null>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
