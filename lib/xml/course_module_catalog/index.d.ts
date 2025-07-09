type CourseModuleCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  /** Электронный курс */
  id: XmlElem<number | null>;
  /** Код курса */
  code: XmlElem<string | null>;
  /** Внешний ID */
  eid: XmlElem<string | null>;
  /** Название курса */
  name: XmlElem<string | null>;
  /** Activations */
  activation_count: XmlElem<number | null>;
  /** Launches */
  launch_count: XmlElem<number | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
