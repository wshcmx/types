type ProfessionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProfessionDocument;
  /** Профессиональная область */
  professional_area_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type ProfessionDocument = XmlDocument & {
  TopElem: ProfessionDocumentTopElem;
  profession: ProfessionDocumentTopElem;
  DocDesc(): string;
};
