type EventCollaboratorCatalogDocumentTopElem = XmlTopElem &
EventCatalogBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /**
   * Является публичным
   * @default false
   */
  is_public: XmlElem<boolean | null>;
  /**
   * Является открытым
   * @default false
   */
  is_open: XmlElem<boolean | null>;
  /** @default false */
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
  /**
   * Является сотрудником
   * @default false
   */
  is_collaborator: XmlElem<boolean | null>;
  /**
   * Ответственные за проведение
   * @default false
   */
  is_tutor: XmlElem<boolean | null>;
  /**
   * Является ответственным за подготовку
   * @default false
   */
  is_preparation: XmlElem<boolean | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
