type ResumeSkillCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** ID резюме */
  resume_id: XmlElem<number | null, ResumeCatalogDocumentTopElem>;
  /** Название */
  name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Организация сотрудника */
  person_org_name: XmlElem<string | null>;
  /** Должность сотрудника */
  person_position: XmlElem<string | null>;
  /** ID cотрудника, заполнившего резюме */
  creator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Сотрудник, заполнивший резюме */
  creator_person_fullname: XmlElem<string | null>;
  /** ID навыка */
  skill_id: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  /** Название навыка */
  skill_name: XmlElem<string | null>;
  /** ID заглавного навыка с уровнями */
  skill_id_with_levels: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  /** ID уровня */
  level_id: XmlElem<string | null>;
  /** Название уровня */
  level_name: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
