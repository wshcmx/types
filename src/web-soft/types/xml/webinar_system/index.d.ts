interface WebinarSystemDocumentWebinarSystemFieldEntry {
  /** Значение */
  value: XmlElem<string | null>;
}

interface WebinarSystemDocumentWebinarSystemField {
  name: XmlElem<string | null>;
  /** @default string */
  type: XmlElem<string | null, typeof common.template_field_types>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  title: XmlElem<string | null>;
  tooltip: XmlElem<string | null>;
  /** Выборка */
  remote_collection_id: XmlElem<number | null, RemoteCollectionCatalogDocumentTopElem>;
  xquery_qual: XmlElem<string | null>;
  /** Список допустимых значений */
  entries: XmlMultiElem<WebinarSystemDocumentWebinarSystemFieldEntry | null>;
}

type WebinarSystemDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase &
WebVariablesBase & {
  Doc: WebinarSystemDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  library_url: XmlElem<string | null>;
  library_code: XmlElem<string | null>;
  admin_code_url: XmlElem<string | null>;
  admin_code: XmlElem<string | null>;
  web_code_url: XmlElem<string | null>;
  web_code: XmlElem<string | null>;
  web_edit_code_url: XmlElem<string | null>;
  web_edit_code: XmlElem<string | null>;
  web_save_code_url: XmlElem<string | null>;
  web_save_code: XmlElem<string | null>;
  webinar_system_fields: XmlMultiElem<WebinarSystemDocumentWebinarSystemField | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
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
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  get_setting(settingName: string): string;
  get_settings(): Object;
};

type WebinarSystemDocument = XmlDocument & {
  TopElem: WebinarSystemDocumentTopElem;
  webinar_system: WebinarSystemDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};
