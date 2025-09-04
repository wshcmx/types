type EducationOrgCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Условное название */
  disp_name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Является основным */
  contact_main: XmlElem<string | null>;
  /** Рабочий телефон */
  telephone_work: XmlElem<string | null>;
  /** Мобильный телефон */
  telephone_mobile: XmlElem<string | null>;
  /** Факс */
  fax: XmlElem<string | null>;
  /** E-mail */
  email: XmlElem<string | null>;
  /**
   * Является поставщиком электронных курсов
   * @default 0
   */
  is_provider_courses: XmlElem<boolean>;
  /** Тип провайдера курсов */
  provider_course_type_id: XmlElem<number | null, ProviderCourseTypeCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
