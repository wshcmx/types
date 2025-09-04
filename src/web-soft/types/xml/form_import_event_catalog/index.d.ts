interface FormImportEventsDocumentCollaborator {
  collaborator_id: XmlElem<string | null>;
  lastname: XmlElem<string | null>;
  firstname: XmlElem<string | null>;
  middlename: XmlElem<string | null>;
  birth_date: XmlElem<Date | null>;
  sex: XmlElem<string | null>;
  email: XmlElem<string | null>;
  person_position_name: XmlElem<string | null>;
  person_org_name: XmlElem<string | null>;
}

interface FormImportEventsTest {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  qti_text: XmlElem<string | null>;
}

type FormImportEventCatalogDocumentTopElem = XmlTopElem & {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  education_org_name: XmlElem<string | null>;
  /** @default plan */
  status_id: XmlElem<string | null, typeof common.event_status_types>;
  collaborators: XmlMultiElem<FormImportEventsDocumentCollaborator | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  test: XmlElem<FormImportEventsTest | null>;
};
