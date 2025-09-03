type DnStudCentrtestResultCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  subject: XmlElem<string | null>;
  mark: XmlElem<number | null>;
  result_date: XmlElem<Date | null>;
  /** Студент */
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  student_fullname: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
