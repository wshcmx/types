interface ActivityStateDocumentRequest {
  content_type: XmlElem<string | null>;
  json_str: XmlElem<string | null>;
  agent_json_str: XmlElem<string | null>;
  /** Агент */
  agent: XmlElem<ActorBase | null>;
}

type ActivityStateDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: ActivityStateDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Тип учебной активности */
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  activity_code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  registration: XmlElem<string | null>;
  request: XmlElem<ActivityStateDocumentRequest | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ActivityStateDocument = XmlDocument & {
  TopElem: ActivityStateDocumentTopElem;
  activity_state: ActivityStateDocumentTopElem;
  DocDesc(): string;
};
