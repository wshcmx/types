type EventTypeDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: EventTypeDocument;
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
  /** @default false */
  can_use_camera: XmlElem<boolean | null>;
  /** @default false */
  can_use_microphone: XmlElem<boolean | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
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
};

type EventTypeDocument = XmlDocument & {
  TopElem: EventTypeDocumentTopElem;
  event_type: EventTypeDocumentTopElem;
  DocDesc(): string;
};
