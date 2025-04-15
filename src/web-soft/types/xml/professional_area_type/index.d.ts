type ProfessionalAreaTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: ProfessionalAreaTypeDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type ProfessionalAreaTypeDocument = XmlDocument & {
  TopElem: ProfessionalAreaTypeDocumentTopElem;
  professional_area_type: ProfessionalAreaTypeDocumentTopElem;
  DocDesc(): string;
};
