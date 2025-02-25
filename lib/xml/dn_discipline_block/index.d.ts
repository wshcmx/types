interface DnDisciplineBlockDocumentDiscipline {
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
}

interface DnDisciplineBlockDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnDisciplineBlockDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnDisciplineBlockDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  disciplines: XmlMultiElem<DnDisciplineBlockDocumentDiscipline | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnDisciplineBlockDocumentView | null>;
};

type DnDisciplineBlockDocument = XmlDocument & {
  TopElem: DnDisciplineBlockDocumentTopElem;
  dn_discipline_block: DnDisciplineBlockDocumentTopElem;
  DocDesc(): string;
};
