interface QtiItemDocumentItemAnswerCondition {
  grading_option_id: XmlElem<string, typeof common.grading_option_types>;
  sentence_option_id: XmlElem<string, typeof common.sentence_option_types>;
  value: XmlElem<string | null>;
  case_sensitive: XmlElem<boolean>;
}

interface QtiItemDocumentItemAnswerValue {
  id: XmlElem<string | null>;
  /** Ответ */
  text: XmlElem<string | null>;
  image: XmlElem<ImageBase | null>;
}

interface QtiItemDocumentItemAnswer {
  id: XmlElem<string | null>;
  /** Ответ */
  text: XmlElem<string | null>;
  image: XmlElem<ImageBase | null>;
  is_correct_answer: XmlElem<boolean>;
  conditions: XmlMultiElem<QtiItemDocumentItemAnswerCondition | null>;
  values: XmlMultiElem<QtiItemDocumentItemAnswerValue | null>;
  rows: XmlElem<number>;
  columns: XmlElem<number>;
  ws_score: XmlElem<number | null>;
}

interface QtiItemDocumentItem extends CustomElemsBase, KnowledgePartsBase, KnowledgePartsBaseOld, ClLocalizationsBase, AdminAccessBase {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Статус */
  status: XmlElem<string, typeof common.tutor_status_types>;
  type_id: XmlElem<string, typeof common.item_types>;
  /** Заголовок */
  title: XmlElem<string | null>;
  /** Вопрос */
  question_text: XmlElem<string | null>;
  question_points: XmlElem<number>;
  image: XmlElem<ImageBase | null>;
  comment: XmlElem<string | null>;
  expert_eval: XmlElem<boolean>;
  expert_eval_type: XmlElem<string, typeof common.expert_eval_types>;
  duration: XmlElem<number | null>;
  max_attempts_num: XmlElem<number | null>;
  maxnumber: XmlElem<number | null>;
  display_correct_answer: XmlElem<boolean>;
  not_disp_last_attempt: XmlElem<boolean>;
  use_layout: XmlElem<boolean>;
  layout_num: XmlElem<number | null>;
  order: XmlElem<string, typeof common.order_types>;
  objectives: XmlElem<ObjectivesBase | null>;
  /** Сообщение при ошибочном ответе */
  feedback_wrong: XmlElem<string | null>;
  /** Сообщение при верном ответе */
  feedback_correct: XmlElem<string | null>;
  answers_image_location: XmlElem<string | null, typeof common.material_locations>;
  answers: XmlMultiElem<QtiItemDocumentItemAnswer | null>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
}

type QtiItemDocumentTopElem = XmlTopElem & {
  Doc: QtiItemDocument;
};

type QtiItemDocument = XmlDocument & {
  TopElem: QtiItemDocumentTopElem;
  qti_item: QtiItemDocumentTopElem;
  item: XmlElem<QtiItemDocumentItem | null>;
  OnCreate(): void;
  DocDesc(): string;
};
