interface PositionCommonInstructionDocumentPositionCommonIdSd {
  name: XmlElem<string | null>;
}

interface PositionCommonInstructionDocumentPositionCommonId {
  sd: XmlElem<PositionCommonInstructionDocumentPositionCommonIdSd | null> & XmlElem<number>;
}

interface PositionCommonInstructionDocumentSectionInstructionIdSd {
  name: XmlElem<string | null>;
}

interface PositionCommonInstructionDocumentSectionInstructionId {
  sd: XmlElem<PositionCommonInstructionDocumentSectionInstructionIdSd | null> & XmlElem<number>;
}

interface PositionCommonInstructionDocumentView extends DescBase {
  /**
   * @temp
   * @default hyper
   */
  text_selector: XmlElem<string>;
  /** @default true */
  view_desc_in_html: XmlElem<boolean>;
}

type PositionCommonInstructionDocumentTopElem = XmlTopElem & {
  Doc: PositionCommonInstructionDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Типовая должность */
  position_common_id: XmlElem<PositionCommonInstructionDocumentPositionCommonId | null, PositionCommonCatalogDocumentTopElem>;
  /** Раздел инструкции */
  section_instruction_id: XmlElem<PositionCommonInstructionDocumentSectionInstructionId | null, SectionInstructionCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<PositionCommonInstructionDocumentView | null>;
};

type PositionCommonInstructionDocument = XmlDocument & {
  TopElem: PositionCommonInstructionDocumentTopElem;
  position_common_instruction: PositionCommonInstructionDocumentTopElem;
  DocDesc(): string;
};
