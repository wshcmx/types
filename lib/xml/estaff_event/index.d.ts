interface EstaffEventDocumentObject {
  object_id: XmlElem<number | null>;
}

interface EstaffEventDocumentMember extends PersonFillingBase {
  /** Ответственный за проведение */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface EstaffEventDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type EstaffEventDocumentTopElem = XmlTopElem &
MsPersonSdBase &
CatalogListBase &
WebVariablesBase &
DocumentPersonsBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: EstaffEventDocument;
  id: XmlElem<number | null>;
  /** Вакансия */
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  /** Название вакансии */
  vacancy_name: XmlElem<string | null>;
  /** Код вакансии */
  vacancy_code: XmlElem<string | null>;
  /** Заявка */
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  /** Код события */
  code_event: XmlElem<string | null>;
  event_name: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Тип события E-Staff */
  estaff_event_type_id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
  /** Тип события E-Staff */
  estaff_event_type_name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /**
   * Тип объекта
   * @default document
   */
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  objects: XmlMultiElem<EstaffEventDocumentObject | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  linked_object_url: XmlElem<string | null>;
  /**
   * Статус
   * @default start
   */
  event_status_id: XmlElem<string | null, typeof common.estaff_event_status_types>;
  estaff_event_eid: XmlElem<number | null>;
  /** Ответственные за проведение */
  members: XmlMultiElem<EstaffEventDocumentMember | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<EstaffEventDocumentView | null>;
};

type EstaffEventDocument = XmlDocument & {
  TopElem: EstaffEventDocumentTopElem;
  estaff_event: EstaffEventDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
