interface UiLngItem {
  id: XmlElem<string | null>;
  val: XmlElem<string | null>;
  /** @default false */
  web: XmlElem<boolean | null>;
}

interface IUiLng {
  id: XmlElem<string>;
  short_id: XmlElem<string>;
  name: XmlElem<string>;
  lng_file_url: XmlElem<string>;
  common_url: XmlElem<string>;
  startup_page_document_id: XmlElem<number, DocumentCatalogDocumentTopElem>;
  /** @default false */
  ui_disp: XmlElem<boolean>;
  recovery_date: XmlElem<Date>;
  fullname_sequence: XmlElem<string>;
  items: XmlMultiElem<UiLngItem>;
}

declare const ui_lng: XmlElem<IUiLng>;
