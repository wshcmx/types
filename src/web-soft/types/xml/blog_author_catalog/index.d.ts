type BlogAuthorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  blog_id: XmlElem<number | null, BlogCatalogDocumentTopElem>;
  /** Название блога */
  name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Автор */
  person_id: XmlElem<string | null>;
  /** ФИО автора */
  person_fullname: XmlElem<string | null>;
  /** Является модератором */
  is_full_moderator: XmlElem<boolean | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
