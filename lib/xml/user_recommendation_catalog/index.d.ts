type UserRecommendationCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Объект контекста */
  context_object_id: XmlElem<number | null>;
  /** Тип объекта контекста */
  context_object_type: XmlElem<string | null>;
  /** Объект контекста */
  context_object_name: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
