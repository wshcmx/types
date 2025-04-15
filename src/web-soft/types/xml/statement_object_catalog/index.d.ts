type StatementObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Путь */
  path: XmlElem<string | null>;
  /** ID объекта */
  object_id: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null>;
  /** Сообщение учебной активности */
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  /** Тип активности */
  definition_type: XmlElem<string | null>;
  /** Информация об активности */
  definition_more_info: XmlElem<string | null>;
  /** Тип взаимодействия */
  definition_interaction_type: XmlElem<string | null>;
  /** Тип активности в контексте */
  context_activity_type: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
