interface ClConstDocumentLocalization {
  id: XmlElem<number | null, ClLocalizationCatalogDocumentTopElem>;
  text: XmlElem<string | null>;
  imprint: XmlElem<string | null>;
}

interface ClConstDocumentObjectTypeObject {
  id: XmlElem<number | null>;
}

interface ClConstDocumentObjectType {
  id: XmlElem<string | null, typeof common.exchange_object_types>;
  objects: XmlMultiElem<ClConstDocumentObjectTypeObject | null>;
}

interface ClConstDocumentFlag {
  id: XmlElem<string | null>;
}

type ClConstDocumentTopElem = XmlTopElem & {
  Doc: ClConstDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  localizations: XmlMultiElem<ClConstDocumentLocalization | null>;
  object_types: XmlMultiElem<ClConstDocumentObjectType | null>;
  flags: XmlMultiElem<ClConstDocumentFlag | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  set_value(locId: number, value: unknown): boolean;
};

type ClConstDocument = XmlDocument & {
  TopElem: ClConstDocumentTopElem;
  cl_const: ClConstDocumentTopElem;
  DocDesc(): string;
};
