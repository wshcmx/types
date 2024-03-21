type EducationPlanCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  program_id: XmlElem<number>;
  parent_progpam_id: XmlElem<number>;
  position: XmlElem<number>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  compound_program_id: XmlElem<number, CompoundProgramCatalogDocumentTopElem>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  development_plan_id: XmlElem<number, DevelopmentPlanCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  object_code: XmlElem<string>;
  object_start_date: XmlElem<Date>;
  state_id: XmlElem<number, typeof common.learning_states>;
  plan_date: XmlElem<Date>;
  result_type: XmlElem<string, typeof common.exchange_object_types>;
  result_object_id: XmlElem<number>;
  result_object_name: XmlElem<string>;
  result_object_code: XmlElem<string>;
  result_object_start_date: XmlElem<Date>;
  result_object_finish_date: XmlElem<Date>;
  weight: XmlElem<number>;
  create_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  readiness_percent: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position: XmlElem<string>;
  person_org_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  is_collaborator: XmlElem<boolean>;
  is_tutor: XmlElem<boolean>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};