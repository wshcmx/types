interface SupplementaryQuestionDocumentSectionInstruction {
  section_instruction_id: XmlElem<number | null, SectionInstructionCatalogDocumentTopElem>;
}

interface SupplementaryQuestionDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type SupplementaryQuestionDocumentTopElem = XmlTopElem &
CompetenceScaleBase &
AdminAccessBase & {
  Doc: SupplementaryQuestionDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Раздел */
  section: XmlElem<string | null>;
  /**
   * Тип вопроса
   * @default 1
   */
  type: XmlElem<string, typeof common.supplementary_question_types>;
  /**
   * Использовать для оценки должностей
   * @default false
   */
  is_assessment_position_common: XmlElem<boolean>;
  /** Разделы инструкции */
  section_instructions: XmlMultiElem<SupplementaryQuestionDocumentSectionInstruction | null>;
  /**
   * Обязательно для заполнения
   * @default false
   */
  is_requered: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<SupplementaryQuestionDocumentView | null>;
};

type SupplementaryQuestionDocument = XmlDocument & {
  TopElem: SupplementaryQuestionDocumentTopElem;
  supplementary_question: SupplementaryQuestionDocumentTopElem;
  DocDesc(): string;
};
