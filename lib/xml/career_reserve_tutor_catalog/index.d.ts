type CareerReserveTutorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  career_reserve_id: XmlElem<number, CareerReserveCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  plan_readiness_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  readiness_percent: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  tutor_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  tutor_type: XmlElem<string>;
  is_responsible: XmlElem<boolean>;
  tutor_fullname: XmlElem<string>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};