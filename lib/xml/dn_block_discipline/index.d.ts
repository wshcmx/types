interface DnBlockDisciplineDocumentDiscipline {
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
}

interface DnBlockDisciplineDocumentView {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnBlockDisciplineDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnBlockDisciplineDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  disciplines: XmlMultiElem<DnBlockDisciplineDocumentDiscipline | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnBlockDisciplineDocumentView | null>;
};

type DnBlockDisciplineDocument = XmlDocument & {
  TopElem: DnBlockDisciplineDocumentTopElem;
  dn_block_discipline: DnBlockDisciplineDocumentTopElem;
  DocDesc(): string;
};
