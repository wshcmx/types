type ProfessionCategoryDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProfessionCategoryDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type ProfessionCategoryDocument = XmlDocument & {
  TopElem: ProfessionCategoryDocumentTopElem;
  profession_category: ProfessionCategoryDocumentTopElem;
  DocDesc(): string;
};
