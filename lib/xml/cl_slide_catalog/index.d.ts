type ClSlideCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Курс CourseLab */
  cl_course_id: XmlElem<number | null, ClCourseCatalogDocumentTopElem>;
  /** Модуль Courselab */
  cl_module_id: XmlElem<number | null, ClModuleCatalogDocumentTopElem>;
  /** Слайд-хозяин */
  master_id: XmlElem<number | null, ClSlideCatalogDocumentTopElem>;
  /** Код слайда-хозяина */
  master_code: XmlElem<string | null>;
  /** Является хозяином */
  is_master: XmlElem<boolean | null>;
  /** Является выскакивающим экраном */
  is_splash: XmlElem<boolean | null>;
  sid: XmlElem<number | null>;
  /**
   * Заблокировано
   * @default false
   */
  flag_locked: XmlElem<unknown | null>;
  /** Владелец ресурса */
  greedy_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Имя владельца */
  greedy_person_fullname: XmlElem<string | null>;
  /** Слайд завершен */
  flag_completion: XmlElem<boolean | null>;
  /** Состояние разработки */
  approval_status: XmlElem<number | null, typeof common.cl_approval_states>;
  stamp: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
