interface UiLngItem {
  id: XmlElem<string | null>;
  val: XmlElem<string | null>;
  /** @default false */
  web: XmlElem<boolean | null>;
}

interface IUiLng {
  id: XmlElem<string | null>;
  short_id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  lng_file_url: XmlElem<string | null>;
  common_url: XmlElem<string | null>;
  startup_page_document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  /** @default false */
  ui_disp: XmlElem<boolean>;
  recovery_date: XmlElem<Date | null>;
  fullname_sequence: XmlElem<string | null>;
  items: XmlMultiElem<UiLngItem | null>;
}

declare const ui_lng: XmlElem<IUiLng>;
