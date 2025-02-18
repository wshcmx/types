type ClCourseCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  author_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  localization_id: XmlMultiElemObject<number | null, ClLocalizationCatalogDocumentTopElem>;
  /** Тэги */
  tag_id: XmlMultiElemObject<number | null, TagCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Платформа */
  platform: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
