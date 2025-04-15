type WorkingConditionTypeDocumentTopElem = XmlTopElem & {
  Doc: WorkingConditionTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type WorkingConditionTypeDocument = XmlDocument & {
  TopElem: WorkingConditionTypeDocumentTopElem;
  working_condition_type: WorkingConditionTypeDocumentTopElem;
};
