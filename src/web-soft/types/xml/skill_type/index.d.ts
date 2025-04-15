type SkillTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: SkillTypeDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type SkillTypeDocument = XmlDocument & {
  TopElem: SkillTypeDocumentTopElem;
  skill_type: SkillTypeDocumentTopElem;
  DocDesc(): string;
};
