interface ItemDocumentAnswerCondition {
  grading_option_id: XmlElem<string, typeof common.grading_option_types>;
  sentence_option_id: XmlElem<string, typeof common.sentence_option_types>;
  value: XmlElem<string>;
  case_sensitive: XmlElem<boolean>;
}

interface ItemDocumentAnswerValue {
  id: XmlElem<string>;
  text: XmlElem<string>;
  image: XmlElem<ImageBase>;
}

interface ItemDocumentAnswer {
  id: XmlElem<string>;
  text: XmlElem<string>;
  image: XmlElem<ImageBase>;
  is_correct_answer: XmlElem<boolean>;
  conditions: XmlMultiElem<ItemDocumentAnswerCondition>;
  values: XmlMultiElem<ItemDocumentAnswerValue>;
  rows: XmlElem<number>;
  columns: XmlElem<number>;
  ws_score: XmlElem<number>;
}

type ItemDocumentTopElem = XmlTopElem &
CustomElemsBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
ClLocalizationsBase &
AdminAccessBase & {
  Doc: ItemDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): unknown;
  status: XmlElem<string, typeof common.tutor_status_types>;
  type_id: XmlElem<string, typeof common.item_types>;
  title: XmlElem<string>;
  question_text: XmlElem<string>;
  question_points: XmlElem<number>;
  image: XmlElem<ImageBase>;
  comment: XmlElem<string>;
  expert_eval: XmlElem<boolean>;
  expert_eval_type: XmlElem<string, typeof common.expert_eval_types>;
  duration: XmlElem<number>;
  max_attempts_num: XmlElem<number>;
  maxnumber: XmlElem<number>;
  display_correct_answer: XmlElem<boolean>;
  not_disp_last_attempt: XmlElem<boolean>;
  use_layout: XmlElem<boolean>;
  layout_num: XmlElem<number>;
  order: XmlElem<string, typeof common.order_types>;
  objectives: XmlElem<ObjectivesBase>;
  feedback_wrong: XmlElem<string>;
  feedback_correct: XmlElem<string>;
  answers_image_location: XmlElem<string, typeof common.material_locations>;
  answers: XmlMultiElem<ItemDocumentAnswer>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type ItemDocument = XmlDocument & {
  TopElem: ItemDocumentTopElem;
};
