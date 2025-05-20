interface WikiArticleDocumentAuthor extends PersonFillingBase {
  /** Автор */
  author_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface WikiArticleDocumentAddingObjectsWikiArticleCommunication {
  /** ID */
  id: XmlElem<string>;
  /** Связь wiki статьи */
  wiki_article_communication_id: XmlElem<number | null, WikiArticleCommunicationCatalogDocumentTopElem>;
  /** Тип связи wiki статьи */
  wiki_article_comm_type_id: XmlElem<number | null, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  /** Родительская wiki статья */
  base_wiki_article_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  /** Дочерняя wiki статья */
  child_wiki_article_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  /** Позиция в списке */
  position: XmlElem<number | null>;
}

interface WikiArticleDocumentAddingObjects {
  /**
   * Необходимо добавлять/удалять объекты
   * @default false
   */
  need_adding: XmlElem<boolean | null>;
  /** Связи wiki статей */
  wiki_article_communications: XmlMultiElem<WikiArticleDocumentAddingObjectsWikiArticleCommunication | null>;
}

interface WikiArticleDocumentQuestionCondition {
  /** @default = */
  grading_option_id: XmlElem<string, typeof common.grading_option_types>;
  /** @default equal */
  sentence_option_id: XmlElem<string, typeof common.sentence_option_types>;
  value: XmlElem<string | null>;
}

interface WikiArticleDocumentQuestionEntry {
  id: XmlElem<string | null>;
  /** Значение */
  value: XmlElem<string | null>;
  /**
   * Правильный ответ
   * @default false
   */
  is_correct: XmlElem<boolean | null>;
}

interface WikiArticleDocumentQuestion {
  /** Вопрос */
  id: XmlElem<string | null>;
  /** @default false */
  is_custom: XmlElem<boolean | null>;
  /** Вопрос */
  item_id: XmlElem<number | null, ItemCatalogDocumentTopElem>;
  /** Тип вопроса */
  type_id: XmlElem<string | null, typeof common.acquaint_question_types>;
  /** Заголовок */
  title: XmlElem<string | null>;
  /** Правильный ответ */
  correct_answer: XmlElem<string | null>;
  conditions: XmlMultiElem<WikiArticleDocumentQuestionCondition | null>;
  /** Варианты ответов */
  entries: XmlMultiElem<WikiArticleDocumentQuestionEntry | null>;
}

interface WikiArticleDocumentAcquaintGroup {
  /** Группы для ознакомления */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface WikiArticleDocumentView extends DescBase {
  set_article: XmlElem<string | null>;
}

type WikiArticleDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
CatalogListBase &
KnowledgePartsBase &
ChangeHashBase & {
  Doc: WikiArticleDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Wiki база */
  wiki_base_id: XmlElem<number | null, WikiBaseCatalogDocumentTopElem>;
  /** Тип wiki статьи */
  wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  /**
   * Тип контента
   * @default html
   */
  content_type: XmlElem<string | null>;
  /**
   * Статус
   * @default active
   */
  status_id: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  /**
   * Тип ознакомления
   * @default none
   */
  acquaint_type_id: XmlElem<string | null, typeof common.acquaint_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата публикации */
  publicate_date: XmlElem<Date | null>;
  /** Дата публикации критичных изменений */
  critical_publicate_date: XmlElem<Date | null>;
  /**
   * Критичное изменение
   * @default false
   */
  critical_change: XmlElem<boolean | null>;
  /** Авторы */
  authors: XmlMultiElem<WikiArticleDocumentAuthor | null>;
  /** Добавляемые объекты */
  adding_objects: XmlElem<WikiArticleDocumentAddingObjects | null>;
  /** Вопросы */
  questions: XmlMultiElem<WikiArticleDocumentQuestion | null>;
  /** Группы для ознакомления */
  acquaint_groups: XmlMultiElem<WikiArticleDocumentAcquaintGroup | null>;
  /** Аннотация */
  annotation: XmlElem<string | null>;
  /** Лонгрид */
  longread: XmlElem<string | null>;
  /** Описание */
  text_area: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<WikiArticleDocumentView | null>;
};

type WikiArticleDocument = XmlDocument & {
  TopElem: WikiArticleDocumentTopElem;
  wiki_article: WikiArticleDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};
