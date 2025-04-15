interface TransactionDocumentView {
  /**
   * @temp
   * @default false
   */
  is_create: XmlElem<boolean>;
}

type TransactionDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TransactionDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /**
   * Приход расход
   * @default 2
   */
  direction: XmlElem<number>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Биллинговый счет */
  account_id: XmlElem<number | null, AccountCatalogDocumentTopElem>;
  /** Сумма */
  amount: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Категория */
  objects: XmlMultiElemObject<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<TransactionDocumentView | null>;
};

type TransactionDocument = XmlDocument & {
  TopElem: TransactionDocumentTopElem;
  transaction: TransactionDocumentTopElem;
  OnCreate(): void;
  DocDesc(): string;
};
