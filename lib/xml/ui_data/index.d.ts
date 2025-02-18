type UiDataDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  Doc: UiDataDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Данные */
  data: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<unknown | null>;
};

type UiDataDocument = XmlDocument & {
  TopElem: UiDataDocumentTopElem;
  ui_data: UiDataDocumentTopElem;
  DocDesc(): string;
};
