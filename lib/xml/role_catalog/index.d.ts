type RoleCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  /** Родительская категория */
  parent_role_id: XmlElem<number | null, RoleCatalogDocumentTopElem>;
  /**
   * Тип объекта
   * @default item
   */
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
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
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** Тэги */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
