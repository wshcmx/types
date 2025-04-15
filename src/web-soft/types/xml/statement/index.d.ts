interface StatementObjectBaseDocumentVerbDisplay {
  "en-US": XmlElem<string | null>;
}

interface StatementObjectBaseDocumentVerb {
  id: XmlElem<string | null>;
  display: XmlElem<StatementObjectBaseDocumentVerbDisplay | null>;
}

type StatementObjectBaseDocumentTopElem = XmlTopElem & {
  Doc: StatementObjectBaseDocument;
  /** Агент */
  actor: XmlElem<ActorBase | null>;
  verb: XmlElem<StatementObjectBaseDocumentVerb | null>;
};

type StatementObjectBaseDocument = XmlDocument & {
  TopElem: StatementObjectBaseDocumentTopElem;
  statement_object_base: StatementObjectBaseDocumentTopElem;
  statement: XmlElem<unknown | null>;
  DocDesc(): string;
};
