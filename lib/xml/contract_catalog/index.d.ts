type ContractCatalogDocumentTopElem = XmlTopElem &
CostCurrencyBase &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата договора */
  date: XmlElem<Date | null>;
  /** Номер договора */
  number: XmlElem<string | null>;
  /** Тип договора */
  contract_type_id: XmlElem<number | null, ContractTypeCatalogDocumentTopElem>;
  /** Дата начала действия */
  start_date: XmlElem<Date | null>;
  /** Дата завершения действия */
  finish_date: XmlElem<Date | null>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Количество прикрепленных файлов */
  files_count: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
