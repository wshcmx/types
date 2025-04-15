type AuthTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase & {
  Doc: AuthTypeDocument;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type AuthTypeDocument = XmlDocument & {
  TopElem: AuthTypeDocumentTopElem;
  auth_type: AuthTypeDocumentTopElem;
  DocDesc(): string;
};
