type EventCollaboratorCatalogDocumentTopElem = XmlTopElem &
EventCatalogBase & {
  id: XmlElem<number | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Является публичным */
  is_public: XmlElem<boolean | null>;
  /** Является открытым */
  is_open: XmlElem<boolean | null>;
  is_model: XmlElem<boolean>;
  /** Фактическое количество часов */
  duration_fact: XmlElem<number | null>;
  /** Сотрудник */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Учебная программа */
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  /** Набор программ */
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Имя сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Является сотрудником */
  is_collaborator: XmlElem<boolean | null>;
  /** Ответственные за проведение */
  is_tutor: XmlElem<boolean | null>;
  /** Является ответственным за подготовку */
  is_preparation: XmlElem<boolean | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
