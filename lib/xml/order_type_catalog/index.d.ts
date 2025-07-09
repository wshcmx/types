type OrderTypeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Текущий номер */
  number: XmlElem<string | null>;
  /** Префикс */
  prefix: XmlElem<string | null>;
  /** Суффикс приказа */
  suffix: XmlElem<string | null>;
  /** ФИО подписывающего по умолчанию */
  signing_person_fullname: XmlElem<string | null>;
  /** ФИО ответственного по умолчанию */
  responsible_person_fullname: XmlElem<string | null>;
  /** ФИО исполнителя по умолчанию */
  performer_person_fullname: XmlElem<string | null>;
  /**
   * Флаг использования установки во вновь формируемых приказах
   * @default false
   */
  default_flag: XmlElem<boolean | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
