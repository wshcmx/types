type MessengerServiceDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase & {
  Doc: MessengerServiceDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type MessengerServiceDocument = XmlDocument & {
  TopElem: MessengerServiceDocumentTopElem;
  messenger_service: MessengerServiceDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
