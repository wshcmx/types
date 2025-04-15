interface DnAuditoriumDocumentObjectResource {
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
}

interface DnAuditoriumDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnAuditoriumDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnAuditoriumDocument;
  /** Код */
  code: XmlElem<string | null>;
  number_places: XmlElem<string | null>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  object_resources: XmlMultiElem<DnAuditoriumDocumentObjectResource | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnAuditoriumDocumentView | null>;
};

type DnAuditoriumDocument = XmlDocument & {
  TopElem: DnAuditoriumDocumentTopElem;
  dn_auditorium: DnAuditoriumDocumentTopElem;
  DocDesc(): string;
};
