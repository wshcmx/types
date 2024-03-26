type StatementCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  create_ticks: XmlElem<number>;
  timestamp: XmlElem<Date>;
  statement_ref_id: XmlElem<string>;
  voided: XmlElem<boolean>;
  processed: XmlElem<boolean>;
  learning_storage_id: XmlElem<number, LearningStorageCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  activity_id: XmlElem<number, ActivityCatalogDocumentTopElem>;
  activity_code: XmlElem<string>;
  verb_id: XmlElem<string>;
  verb_name: XmlElem<string>;
  agent_json_str: XmlElem<string>;
  registration: XmlElem<string>;
  context_registration: XmlElem<string>;
  context_instructor: XmlElem<string>;
  context_team: XmlElem<string>;
  context_revision: XmlElem<string>;
  context_platform: XmlElem<string>;
  context_language: XmlElem<string>;
  context_statement: XmlElem<string>;
  result_score_max: XmlElem<number>;
  result_score_min: XmlElem<number>;
  result_score_raw: XmlElem<number>;
  result_score_scaled: XmlElem<number>;
  result_success: XmlElem<boolean>;
  result_completion: XmlElem<boolean>;
  result_response: XmlElem<string>;
  result_duration: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
