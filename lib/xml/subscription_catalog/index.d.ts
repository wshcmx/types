type SubscriptionCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /**
   * Тип объекта
   * @default document
   */
  type: XmlElem<string, typeof common.exchange_object_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Действует до */
  date_to: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Название организации */
  person_org_name: XmlElem<string | null>;
  /** Объект */
  document_id: XmlElem<number | null>;
  /**
   * Включает дочерние элементы
   * @default false
   */
  include_subdocs: XmlElem<boolean>;
  /** Дата последнего действия */
  date_last_action: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
