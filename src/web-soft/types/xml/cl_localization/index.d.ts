type ClLocalizationDocumentTopElem = XmlTopElem & {
  Doc: ClLocalizationDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ClLocalizationDocument = XmlDocument & {
  TopElem: ClLocalizationDocumentTopElem;
  cl_localization: ClLocalizationDocumentTopElem;
  DocDesc(): string;
};
