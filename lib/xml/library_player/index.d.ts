interface LibraryPlayerDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type LibraryPlayerDocumentTopElem = XmlTopElem & {
  Doc: LibraryPlayerDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  player_url: XmlElem<string | null>;
  /** Хранилище учебных записей */
  learning_storage_id: XmlElem<number | null, LearningStorageCatalogDocumentTopElem>;
  /** Учебная активность */
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  /** @default false */
  cmi5: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
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
  /** @temp */
  view: XmlElem<LibraryPlayerDocumentView | null>;
};

type LibraryPlayerDocument = XmlDocument & {
  TopElem: LibraryPlayerDocumentTopElem;
  library_player: LibraryPlayerDocumentTopElem;
  DocDesc(): string;
};
