interface SystemEventDocumentSectionAction {
  id: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.system_event_operation_types>;
  eval_str: XmlElem<string | null>;
  notification_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  print_form_id: XmlElem<number | null, PrintFormCatalogDocumentTopElem>;
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  log_eval_str: XmlElem<string | null>;
  operation_id: XmlElem<number | null, OperationCatalogDocumentTopElem> & MsParametersBase;
}

interface SystemEventDocumentSection {
  id: XmlElem<string | null>;
  /** Название блока */
  name: XmlElem<string | null>;
  /** Условия выполнения */
  perfom_condition: XmlElem<string | null>;
  actions: XmlMultiElem<SystemEventDocumentSectionAction | null>;
}

interface SystemEventDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type SystemEventDocumentTopElem = XmlTopElem &
MsVariablesBase & {
  Doc: SystemEventDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Связанное системное событие */
  linked_system_event_id: XmlElem<number | null, SystemEventCatalogDocumentTopElem>;
  /** Условия выполнения */
  perfom_condition: XmlElem<string | null>;
  /**
   * Активное событие
   * @default true
   */
  is_active: XmlElem<boolean>;
  /** Блоки операций */
  sections: XmlMultiElem<SystemEventDocumentSection | null>;
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
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<SystemEventDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type SystemEventDocument = XmlDocument & {
  TopElem: SystemEventDocumentTopElem;
  system_event: SystemEventDocumentTopElem;
  DocDesc(): string;
};
