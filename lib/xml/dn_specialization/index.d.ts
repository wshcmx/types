interface DnSpecializationDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnSpecializationDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: DnSpecializationDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  speciality_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnSpecializationDocumentView | null>;
};

type DnSpecializationDocument = XmlDocument & {
  TopElem: DnSpecializationDocumentTopElem;
  dn_specialization: DnSpecializationDocumentTopElem;
  DocDesc(): string;
};
