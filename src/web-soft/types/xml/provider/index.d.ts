type ProviderDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase & {
  Doc: ProviderDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** @default false */
  provider_product: XmlElem<boolean | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Размерность */
  dimension_id: XmlElem<number | null, DimensionCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type ProviderDocument = XmlDocument & {
  TopElem: ProviderDocumentTopElem;
  provider: ProviderDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
