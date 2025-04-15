interface ActivityDocumentRequest {
  json_str: XmlElem<string | null>;
}

type ActivityDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: ActivityDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Вычислять массив учебных активностей
   * @default false
   */
  is_eval: XmlElem<boolean>;
  /** Программный код */
  statements_eval: XmlElem<string | null>;
  /** Ссылка на файл выполняемого кода */
  statements_eval_url: XmlElem<string | null>;
  request: XmlElem<ActivityDocumentRequest | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ActivityDocument = XmlDocument & {
  TopElem: ActivityDocumentTopElem;
  activity: ActivityDocumentTopElem;
  DocDesc(): string;
};
