type PositionCommonInstructionCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Название типовой должности */
  position_common_name: XmlElem<string | null>;
  /** Раздел инструкции */
  section_instruction_id: XmlElem<number | null, SectionInstructionCatalogDocumentTopElem>;
  /** Название раздела инструкции */
  section_instruction_name: XmlElem<string | null>;
  /** Содержание инструкции */
  desc: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
