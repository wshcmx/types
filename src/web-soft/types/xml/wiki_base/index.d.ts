interface WikiBaseDocumentBaseWikiArticleType {
  /** Название */
  name: XmlElem<string | null>;
  /** Тип wiki статьи */
  base_wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
}

interface WikiBaseDocumentWikiArticleType extends FuncManagersBase {
  /** Тип wiki статьи */
  wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  /**
   * Требует подтверждения
   * @default false
   */
  need_confirm: XmlElem<boolean>;
  /**
   * Разрешить создание/редактирование статей всем сотрудникам
   * @default false
   */
  free_access_edit: XmlElem<boolean>;
  /**
   * Исключить из иерархии
   * @default false
   */
  exclude_from_tree: XmlElem<boolean>;
  /**
   * Всем функциональным руководителям доступно редактирование
   * @default true
   */
  all_managers_can_confirm: XmlElem<boolean>;
}

interface WikiBaseDocumentWikiRagIndexesWikiRagIndex {
  /** Индекс поиска RAG */
  wiki_rag_index_id: XmlElem<number | null, WikiRagIndexCatalogDocumentTopElem>;
}

interface WikiBaseDocumentWikiRagIndexes {
  wiki_rag_index: XmlMultiElemObject<WikiBaseDocumentWikiRagIndexesWikiRagIndex | null>;
}

type WikiBaseDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
FuncManagersBase &
KnowledgePartsBase & {
  Doc: WikiBaseDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default public
   */
  wiki_base_type_id: XmlElem<string | null, typeof common.wiki_base_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.wiki_base_statuses>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Родительский тип wiki статьи */
  base_wiki_article_types: XmlMultiElem<WikiBaseDocumentBaseWikiArticleType | null>;
  /** Типы wiki статей */
  wiki_article_types: XmlMultiElem<WikiBaseDocumentWikiArticleType | null>;
  /** Репозиторий */
  repositorium_id: XmlElem<number | null, RepositoriumCatalogDocumentTopElem>;
  /**
   * Требуется заполнения комментария при создании/редактировании статьи
   * @default true
   */
  requires_comment: XmlElem<boolean>;
  /**
   * Разрешить создание/редактирование статей всем сотрудникам
   * @default false
   */
  free_access_edit: XmlElem<boolean>;
  /**
   * При создании новой статьи копировать права доступа из wiki базы
   * @default false
   */
  copy_access_in_new_article: XmlElem<boolean>;
  /** Описание */
  text_area: XmlElem<string | null>;
  /**
   * Обрабатывается семантическим поиском
   * @default false
   */
  process_embedding: XmlElem<boolean>;
  /** Индексы поиска RAG */
  wiki_rag_indexes: XmlElem<WikiBaseDocumentWikiRagIndexes | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type WikiBaseDocument = XmlDocument & {
  TopElem: WikiBaseDocumentTopElem;
  wiki_base: WikiBaseDocumentTopElem;
  DocDesc(): string;
};
