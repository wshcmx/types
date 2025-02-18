type AttorneyCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата начала действия */
  start_date: XmlElem<Date | null>;
  /** Дата завершения действия */
  end_date: XmlElem<Date | null>;
  /**
   * Состояние
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.education_method_states>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Юридическое лицо */
  essential_id: XmlElem<string | null>;
  /** Юридическое лицо */
  essential_name: XmlElem<string | null>;
  /** Файл доверенности */
  attorney_url: XmlElem<string | null>;
  /** Файл с подписью */
  attorney_sig_file_url: XmlElem<string | null>;
  /**
   * Загружена
   * @default false
   */
  upload: XmlElem<boolean | null>;
  OnBuild(): void;
};
