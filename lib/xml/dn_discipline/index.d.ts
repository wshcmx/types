interface DnDisciplineDocumentDiscBlock {
  block_id: XmlElem<number | null, DnDisciplineBlockCatalogDocumentTopElem>;
}

interface DnDisciplineDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnDisciplineDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnDisciplineDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Факультет */
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  disc_blocks: XmlMultiElem<DnDisciplineDocumentDiscBlock | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnDisciplineDocumentView | null>;
};

type DnDisciplineDocument = XmlDocument & {
  TopElem: DnDisciplineDocumentTopElem;
  dn_discipline: DnDisciplineDocumentTopElem;
  DocDesc(): string;
};
