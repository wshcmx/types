type LibraryMaterialItemCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Материал библиотеки */
  material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  /** Номер */
  number: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Формат материала */
  format_id: XmlElem<number | null, LibraryMaterialFormatCatalogDocumentTopElem>;
  /** Статус */
  state_id: XmlElem<string | null, typeof common.availability_states>;
  /** Дата выдачи */
  issue_date: XmlElem<Date | null>;
  /** Дата планируемого возврата */
  return_plan_date: XmlElem<Date | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Пользователь */
  creation_user_id: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Пользователь */
  modification_user_id: XmlElem<number | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
