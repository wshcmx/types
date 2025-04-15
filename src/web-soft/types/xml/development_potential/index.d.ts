type DevelopmentPotentialDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DevelopmentPotentialDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean | null>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type DevelopmentPotentialDocument = XmlDocument & {
  TopElem: DevelopmentPotentialDocumentTopElem;
  development_potential: DevelopmentPotentialDocumentTopElem;
  DocDesc(): string;
};
