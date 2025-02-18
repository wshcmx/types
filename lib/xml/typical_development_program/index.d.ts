interface TypicalDevelopmentProgramDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface TypicalDevelopmentProgramDocumentTask extends CustomElemsBase {
  id: XmlElem<string | null>;
  /**
   * Позиция
   * @default 0
   */
  position: XmlElem<number>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default task
   */
  type: XmlElem<string, typeof common.career_reserve_tasks_types>;
  due_date: XmlElem<number | null>;
  start_edit_days: XmlElem<number | null>;
  /** Родительская задача */
  parent_task_id: XmlElem<string | null>;
  /** Продолжительность (дн.) */
  duration_days: XmlElem<number | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /**
   * Тип объекта
   * @default course
   */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /**
   * Назначать заново при создании плана
   * @default true
   */
  auto_appoint_learning: XmlElem<boolean | null>;
  /**
   * Назначать заново при создании плана
   * @default true
   */
  auto_appoint_task: XmlElem<boolean | null>;
  /**
   * Назначать заново при создании плана
   * @default true
   */
  auto_appoint_appraise: XmlElem<boolean | null>;
  /**
   * Добавлять в существующую процедуру
   * @default true
   */
  add_exist_appraise: XmlElem<boolean | null>;
  /**
   * Назначать заново при создании плана
   * @default true
   */
  auto_appoint_poll: XmlElem<boolean | null>;
  /** @default portal_doc */
  type_document: XmlElem<string | null, typeof common.career_reserve_material_types>;
  /**
   * Ссылка на документ
   * @default http://
   */
  link_document: XmlElem<string | null>;
  /**
   * Запретить редактирование задачи на портале
   * @default false
   */
  forbid_task_portal_edit: XmlElem<boolean>;
  commission_persons: XmlMultiElem<TypicalDevelopmentProgramDocumentTaskCommissionPerson | null>;
}

interface TypicalDevelopmentProgramDocumentTutorsBySubTutor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface TypicalDevelopmentProgramDocumentTutorsBySub {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string | null>;
  /** @default true */
  flag_expanded: XmlElem<boolean>;
  tutors: XmlMultiElem<TypicalDevelopmentProgramDocumentTutorsBySubTutor | null>;
}

interface TypicalDevelopmentProgramDocumentView extends DescBase {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  filter: XmlElem<AuFtFilter | null>;
}

type TypicalDevelopmentProgramDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: TypicalDevelopmentProgramDocument;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string | null, typeof common.typical_development_program_statuss>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Задания */
  tasks: XmlMultiElem<TypicalDevelopmentProgramDocumentTask | null>;
  tutors_by_subs: XmlMultiElem<TypicalDevelopmentProgramDocumentTutorsBySub | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<TypicalDevelopmentProgramDocumentView | null>;
  /** @temp */
  position_expr: XmlElem<boolean | null>;
  calc_position(task: unknown): void;
  filling_empty_position_field(): void;
};

type TypicalDevelopmentProgramDocument = XmlDocument & {
  TopElem: TypicalDevelopmentProgramDocumentTopElem;
  typical_development_program: TypicalDevelopmentProgramDocumentTopElem;
  DocDesc(): string;
};
