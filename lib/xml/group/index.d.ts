interface GroupDocumentCollaborator extends PersonForeignBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname(): string;
  position_id: XmlMultiElemObject<number | null, PositionCatalogDocumentTopElem>;
  /** Должности */
  position_position_names(): unknown;
  desc: XmlElem<string | null>;
}

interface GroupDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /**
   * Обязательный
   * @default false
   */
  obligatory: XmlElem<boolean>;
}

interface GroupDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type GroupDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
EducGroupsBase &
FuncManagersBase &
CustomElemsBase &
DocumentPersonsBase &
RequirementsBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
ViewConditionsBase &
PersonObjectLinksBase & {
  Doc: GroupDocument;
  /**
   * Показывать подробную информациюна портале
   * @default false
   */
  show_detailed: XmlElem<boolean | null>;
  /**
   * Является динамической
   * @default false
   */
  is_dynamic: XmlElem<boolean>;
  /**
   * Является учебной
   * @default false
   */
  is_educ: XmlElem<boolean>;
  /**
   * Скрытая группа
   * @default false
   */
  is_hidden: XmlElem<boolean>;
  /**
   * Возможно оставлять сообщения на ленту
   * @default false
   */
  allow_social_post: XmlElem<boolean>;
  /**
   * По должности
   * @default false
   */
  is_position: XmlElem<boolean>;
  /** Сотрудники */
  collaborators: XmlMultiElem<GroupDocumentCollaborator | null>;
  person_num(): unknown;
  /** Форум */
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<GroupDocumentKpiProfile | null>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Тип графика */
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  /**
   * Тип вступления
   * @default close
   */
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  /** Тип заявки по умолчанию */
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<GroupDocumentView | null>;
  dynamic_select_person(clearList: unknown): unknown;
  /** @temp */
  rows: XmlElem<unknown | null>;
  /**
   * @temp
   * @default fullname
   */
  row_disp_elem: XmlElem<string>;
  /**
   * @temp
   * @default .Env.ListElem
   */
  row_list_field: XmlElem<string | null>;
  /**
   * @temp
   * @default .PrimaryKey
   */
  row_key_field: XmlElem<string | null>;
  /** @temp */
  list_variant: XmlElem<unknown | null>;
  remove_collaborator(personId: number): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type GroupDocument = XmlDocument & {
  TopElem: GroupDocumentTopElem;
  group: GroupDocumentTopElem;
  OnInit(): void;
  OnSave(): void;
  DocDesc(): string;
};
