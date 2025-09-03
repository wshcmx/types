type DnStudentCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /**
   * Тип
   * @default stud
   */
  type: XmlElem<string, typeof common.stud_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Email */
  email: XmlElem<string | null>;
  /** Телефон */
  phone: XmlElem<string | null>;
  /** Регион */
  region: XmlElem<string | null>;
  adress_fact_live: XmlElem<string | null>;
  /** Специальность */
  special_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  /** Специализация */
  specialization_id: XmlElem<number | null, DnSpecializationCatalogDocumentTopElem>;
  /** Формы обучения */
  educat_form_id: XmlElem<string | null, DnEducatFormCatalogDocumentTopElem>;
  /** Условия обучения */
  edu_condition_id: XmlElem<string | null, DnEduConditionCatalogDocumentTopElem>;
  /** Квалификация */
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  /** Статус договора */
  status_id: XmlElem<string | null, typeof common.student_states>;
  /** Основная (академическая) группа */
  main_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  /** Учебная группа */
  educat_groups: XmlElem<string | null>;
  /** Тип документа */
  stud_dt_id: XmlElem<string | null, typeof common.stud_doc_types>;
  /** Учебное заведение */
  educat_institution: XmlElem<string | null>;
  /**
   * С отличием
   * @default false
   */
  is_excellent: XmlElem<boolean>;
  /** Факультет */
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  scient_adviser_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  subject: XmlElem<string | null>;
  /** Файл */
  file_name: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
