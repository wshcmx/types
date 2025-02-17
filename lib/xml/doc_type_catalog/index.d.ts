type DocTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Категория */
  category: XmlElem<string | null>;
  /** Имя объекта */
  object_name: XmlElem<string | null>;
  /** Поле для отображения */
  disp_name: XmlElem<string | null>;
  /** Форма требует перезагрузки сервера */
  is_crave_for_reboot: XmlElem<boolean | null>;
  /** Web шаблон */
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** UI шаблон */
  custom_admin_template_id: XmlElem<number | null, CustomAdminTemplateCatalogDocumentTopElem>;
  /** Блок, в котором отображается */
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
