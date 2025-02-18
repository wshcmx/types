type CheckScheduleDocumentTopElem = XmlTopElem &
AdminAccessBase &
WebVariablesBase & {
  Doc: CheckScheduleDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Включен
   * @default false
   */
  is_enabled: XmlElem<boolean>;
  /**
   * Тип
   * @default warning
   */
  type_id: XmlElem<string, typeof common.check_schedule_types>;
  library_url: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
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
  doc_info: XmlElem<DocInfoBase | null>;
};

type CheckScheduleDocument = XmlDocument & {
  TopElem: CheckScheduleDocumentTopElem;
  check_schedule: CheckScheduleDocumentTopElem;
  DocDesc(): string;
};
