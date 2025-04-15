interface DnStudentDocumentEducatGroup {
  /** Учебная группа */
  edu_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
}

interface DnStudentDocumentViewEducatGroup {
  /** Учебная группа */
  edu_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
}

interface DnStudentDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
  /** Учебные группы */
  educat_groups: XmlMultiElem<DnStudentDocumentViewEducatGroup | null>;
}

type DnStudentDocumentTopElem = XmlTopElem &
PersonBase &
PassportDataBase &
InsertFileBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStudentDocument;
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
  /** ФИО в родительном падеже */
  mod_name: XmlElem<PersonNameBase | null>;
  /** Регион */
  region: XmlElem<string | null>;
  adress_fact_live: XmlElem<string | null>;
  /** @default false */
  need_conduct: XmlElem<boolean>;
  /** @default false */
  is_conduct: XmlElem<boolean>;
  /** @default false */
  is_benefits: XmlElem<boolean>;
  special_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number | null, DnSpecializationCatalogDocumentTopElem>;
  educat_form_id: XmlElem<string | null, DnEducatFormCatalogDocumentTopElem>;
  edu_condition_id: XmlElem<string | null, DnEduConditionCatalogDocumentTopElem>;
  /** Квалификация */
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  /**
   * Статус договора
   * @default active
   */
  status_id: XmlElem<string | null, typeof common.student_states>;
  main_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  /** Учебные группы */
  educat_groups: XmlMultiElem<DnStudentDocumentEducatGroup | null>;
  /** Тип документа */
  stud_dt_id: XmlElem<string | null, typeof common.stud_doc_types>;
  educat_institution: XmlElem<string | null>;
  /** Серия */
  doc_series: XmlElem<string | null>;
  /** Номер */
  doc_number: XmlElem<string | null>;
  doc_year: XmlElem<string | null>;
  /** @default false */
  is_excellent: XmlElem<boolean>;
  /** Язык веб интерфейса */
  lng_id: XmlElem<string | null, LngCatalogDocumentTopElem>;
  /** Расположение файлов учебных материалов */
  location_id: XmlElem<string | null, typeof lists.locations>;
  /** Дизайн портала */
  web_design_id: XmlElem<string | null, GlobalSettingsBase["web_designs"]>;
  /** URL к файлу фотографии */
  pict_url: XmlElem<string | null>;
  /** Дата первого входа на портал */
  web_enter_date: XmlElem<Date | null>;
  /** Факультет */
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  scient_adviser_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  subject: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnStudentDocumentView | null>;
  dn_student_fullname(): string;
};

type DnStudentDocument = XmlDocument & {
  TopElem: DnStudentDocumentTopElem;
  dn_student: DnStudentDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
