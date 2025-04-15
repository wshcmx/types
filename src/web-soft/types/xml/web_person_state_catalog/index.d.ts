type WebPersonStateCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default general
   */
  type_id: XmlElem<string | null, typeof common.web_person_state_types>;
  OnBuild(): void;
};
