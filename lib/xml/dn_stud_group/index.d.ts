interface DnStudGroupDocumentSubfaculty {
  subfac_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
}

interface DnStudGroupDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnStudGroupDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStudGroupDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  /**
   * Статус договора
   * @default activ
   */
  status_id: XmlElem<string | null, typeof common.stud_group_states>;
  academ_year_id: XmlElem<number | null, DnAcademYearCatalogDocumentTopElem>;
  special_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number | null, DnSpecializationCatalogDocumentTopElem>;
  /** Квалификация */
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  /** Факультет */
  faculty: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subfacultys: XmlMultiElem<DnStudGroupDocumentSubfaculty | null>;
  group_size: XmlElem<number | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnStudGroupDocumentView | null>;
};

type DnStudGroupDocument = XmlDocument & {
  TopElem: DnStudGroupDocumentTopElem;
  dn_stud_group: DnStudGroupDocumentTopElem;
  DocDesc(): string;
};
