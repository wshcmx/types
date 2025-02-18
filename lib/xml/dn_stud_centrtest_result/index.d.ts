interface DnStudCentrtestResultDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnStudCentrtestResultDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStudCentrtestResultDocument;
  subject: XmlElem<string | null>;
  /** Балл */
  mark: XmlElem<number | null>;
  /** Дата */
  result_date: XmlElem<Date | null>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  student_fullname: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnStudCentrtestResultDocumentView | null>;
};

type DnStudCentrtestResultDocument = XmlDocument & {
  TopElem: DnStudCentrtestResultDocumentTopElem;
  dn_stud_centrtest_result: DnStudCentrtestResultDocumentTopElem;
  DocDesc(): string;
};
