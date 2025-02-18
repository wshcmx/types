interface BossTypeDocumentObjectType {
  id: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface BossTypeDocumentOperation {
  operation_id: XmlElem<number | null, OperationCatalogDocumentTopElem>;
}

interface BossTypeDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type BossTypeDocumentTopElem = XmlTopElem & {
  Doc: BossTypeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  object_types: XmlMultiElem<BossTypeDocumentObjectType | null>;
  /** Операции */
  operations: XmlMultiElem<BossTypeDocumentOperation | null>;
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
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<BossTypeDocumentView | null>;
};

type BossTypeDocument = XmlDocument & {
  TopElem: BossTypeDocumentTopElem;
  boss_type: BossTypeDocumentTopElem;
  DocDesc(): string;
};
