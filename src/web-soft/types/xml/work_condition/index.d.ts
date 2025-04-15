type WorkConditionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WorkConditionDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type WorkConditionDocument = XmlDocument & {
  TopElem: WorkConditionDocumentTopElem;
  work_condition: WorkConditionDocumentTopElem;
  DocDesc(): string;
};
