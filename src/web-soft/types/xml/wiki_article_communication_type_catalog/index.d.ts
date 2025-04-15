type WikiArticleCommunicationTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Способ связи
   * @default one_one
   */
  wiki_communication_type_id: XmlElem<string, typeof common.wiki_communication_types>;
  /** Тип родительской wiki статьи */
  base_wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  /** Тип дочерней wiki статьи */
  child_wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  /**
   * Обязательный
   * @default false
   */
  is_mandatory: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
