type ChannelProviderDocumentTopElem = XmlTopElem &
AdminAccessBase &
WebVariablesBase & {
  Doc: ChannelProviderDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Библиотека программного кода */
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Имя функции получения ленты */
  root_function_name: XmlElem<string>;
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
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  provider_do(channelWVars: unknown): unknown;
};

type ChannelProviderDocument = XmlDocument & {
  TopElem: ChannelProviderDocumentTopElem;
  channel_provider: ChannelProviderDocumentTopElem;
  DocDesc(): string;
};
