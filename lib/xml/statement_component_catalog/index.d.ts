type StatementComponentCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Путь */
  path: XmlElem<string | null>;
  /** Название свойства */
  property_name: XmlElem<string | null, typeof common.statement_component_propertys>;
  /** ID компоненты */
  component_id: XmlElem<string | null>;
  /** Сообщение учебной активности */
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
