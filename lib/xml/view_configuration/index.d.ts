type ViewConfigurationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ViewBase &
MsViewConfigurationBase & {
  Doc: ViewConfigurationDocument;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  link_name: XmlElem<string | null>;
  link_selector: XmlElem<string | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ViewConfigurationDocument = XmlDocument & {
  TopElem: ViewConfigurationDocumentTopElem;
  view_configuration: ViewConfigurationDocumentTopElem;
  DocDesc(): string;
  OnSave(): void;
};
