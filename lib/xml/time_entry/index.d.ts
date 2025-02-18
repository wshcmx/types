type TimeEntryDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: TimeEntryDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Задача */
  task_id: XmlElem<number | null, TaskCatalogDocumentTopElem>;
  /** Название задачи */
  task_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** Продолжительность */
  duration: XmlElem<number | null>;
  /** Описание */
  description: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type TimeEntryDocument = XmlDocument & {
  TopElem: TimeEntryDocumentTopElem;
  time_entry: TimeEntryDocumentTopElem;
  DocDesc(): string;
};
