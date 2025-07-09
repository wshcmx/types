type LikeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /**
   * Тип реакции
   * @default like
   */
  type_id: XmlElem<string | null, typeof common.reaction_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Объект */
  sec_object_id: XmlElem<number | null>;
  /** Тип объекта */
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Реакция */
  reaction: XmlElem<string | null>;
  /** Сообщение */
  message_id: XmlElem<string | null>;
  /** Вес */
  weight: XmlElem<number | null>;
  /** Дата */
  create_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
