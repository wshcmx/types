type RecruitmentSystemDocumentTopElem = XmlTopElem &
I18nBase &
AdminAccessBase &
WebVariablesBase & {
  Doc: RecruitmentSystemDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  library_url: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
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
  /** @temp */
  view: XmlElem<DescBase | null>;
  get_setting(settingName: string): unknown;
  get_settings(): unknown;
};

type RecruitmentSystemDocument = XmlDocument & {
  TopElem: RecruitmentSystemDocumentTopElem;
  recruitment_system: RecruitmentSystemDocumentTopElem;
  DocDesc(): string;
};
