interface SkillDocumentLevel {
  id: XmlElem<string>;
  /** Название */
  name: XmlElem<string | null>;
}

type SkillDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: SkillDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Родительский элемент */
  parent_id: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  /** Тип навыка */
  skill_type_id: XmlElem<number | null, SkillTypeCatalogDocumentTopElem>;
  /** Использовать уровни оценки родительского элемента */
  use_parent_levels: XmlElem<boolean | null>;
  /** Уровни владения навыком */
  levels: XmlMultiElem<SkillDocumentLevel | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type SkillDocument = XmlDocument & {
  TopElem: SkillDocumentTopElem;
  skill: SkillDocumentTopElem;
  DocDesc(): string;
};
