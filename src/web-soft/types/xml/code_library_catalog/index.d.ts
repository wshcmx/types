type CodeLibraryCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  /** Тип программного кода */
  code_type: XmlElem<string | null>;
  /** Ссылка на шаблон */
  code_url: XmlElem<string | null>;
  /** Приложения */
  associated_applications_id: XmlMultiElemObject<number | null, ApplicationCatalogDocumentTopElem>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
