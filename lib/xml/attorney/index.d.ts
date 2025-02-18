type AttorneyDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase & {
  Doc: AttorneyDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата начала действия */
  start_date: XmlElem<Date | null>;
  /** Дата завершения действия */
  end_date: XmlElem<Date | null>;
  /**
   * Состояние
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.education_method_states>;
  /** Файл доверенности */
  attorney_url: XmlElem<string | null>;
  /** Файл с подписью */
  attorney_sig_file_url: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Юридическое лицо */
  essential_id: XmlElem<string | null>;
  /** Юридическое лицо */
  essential_name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type AttorneyDocument = XmlDocument & {
  TopElem: AttorneyDocumentTopElem;
  attorney: AttorneyDocumentTopElem;
  DocDesc(): string;
};
