type ConnectionCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  course_id: XmlElem<number | null>;
  part_code: XmlElem<string | null>;
  user_id: XmlElem<number | null>;
  user_code: XmlElem<string | null>;
  user_fullname: XmlElem<string | null>;
  active_learning_id: XmlElem<number | null>;
  learning_xml: XmlElem<string | null>;
  state: XmlElem<string | null>;
  creation_date: XmlElem<Date | null>;
  delete_date: XmlElem<Date | null>;
  terminate_date: XmlElem<Date | null>;
  unauthorized: XmlElem<boolean | null>;
  host_path: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
