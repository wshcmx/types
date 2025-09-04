interface ProjectParticipantDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface ProjectParticipantDocumentCustomField {
  /** Название */
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface ProjectParticipantDocumentCurrentKnowledgePart {
  /** Значение карты знаний */
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  current_level_id: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

type ProjectParticipantDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
WorkflowDataBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsBase & {
  Doc: ProjectParticipantDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип объекта */
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Тип участника проекта */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /** Проект */
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  participant_roles_id: XmlMultiElemObject<number | null, ProjectParticipantRoleCatalogDocumentTopElem>;
  /** Состояние */
  status_id: XmlElem<string | null, typeof common.agreement_status_types>;
  workflow_matchings: XmlMultiElem<ProjectParticipantDocumentWorkflowMatching | null>;
  /** Тип выборки условий видимости */
  workflow_matching_type: XmlElem<string | null>;
  custom_fields: XmlMultiElem<ProjectParticipantDocumentCustomField | null>;
  current_knowledge_parts: XmlMultiElem<ProjectParticipantDocumentCurrentKnowledgePart | null>;
  is_excluded: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  plan_load: XmlElem<number | null>;
  percent_plan_load: XmlElem<number | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type ProjectParticipantDocument = XmlDocument & {
  TopElem: ProjectParticipantDocumentTopElem;
  project_participant: ProjectParticipantDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
