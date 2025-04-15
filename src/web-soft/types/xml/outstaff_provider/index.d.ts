interface OutstaffProviderDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type OutstaffProviderDocumentTopElem = XmlTopElem &
OrgBase &
AdminAccessBase &
FileListBase &
DocumentPersonsBase &
CustomElemsBase & {
  Doc: OutstaffProviderDocument;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<OutstaffProviderDocumentView | null>;
};

type OutstaffProviderDocument = XmlDocument & {
  TopElem: OutstaffProviderDocumentTopElem;
  outstaff_provider: OutstaffProviderDocumentTopElem;
  DocDesc(): string;
};
