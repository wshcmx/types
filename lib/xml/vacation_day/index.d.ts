type VacationDayDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  Doc: VacationDayDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Юридическое лицо */
  org_code: XmlElem<string | null>;
  /** Дата изменения */
  update_date: XmlElem<Date | null>;
  /** Остаток */
  balance: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type VacationDayDocument = XmlDocument & {
  TopElem: VacationDayDocumentTopElem;
  vacation_day: VacationDayDocumentTopElem;
};
