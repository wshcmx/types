interface PriceDocumentServiceProvider {
  /** Код */
  code: XmlElem<string | null>;
  provider_id: XmlElem<number | null, ProviderCatalogDocumentTopElem>;
  /** @default 0 */
  cost_value: XmlElem<number | null>;
  type_id: XmlElem<string | null, typeof common.service_provider_types>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type PriceDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: PriceDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  state_id: XmlElem<string | null, typeof common.successor_status_types>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  service_providers: XmlMultiElem<PriceDocumentServiceProvider | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type PriceDocument = XmlDocument & {
  TopElem: PriceDocumentTopElem;
  price: PriceDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
