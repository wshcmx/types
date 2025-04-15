interface QualificationAssignmentDocumentLearning {
  learning_id: XmlElem<number | null, LearningCatalogDocumentTopElem>;
}

interface QualificationAssignmentDocumentTestLearning {
  test_learning_id: XmlElem<number | null, TestLearningCatalogDocumentTopElem>;
}

interface QualificationAssignmentDocumentEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface QualificationAssignmentDocumentView extends DescBase {
  /**
   * @temp
   * @default false
   */
  never_saved: XmlElem<boolean>;
}

type QualificationAssignmentDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: QualificationAssignmentDocument;
  assignment_date: XmlElem<Date | null>;
  expiration_date: XmlElem<Date | null>;
  plan_end_date: XmlElem<Date | null>;
  reason: XmlElem<string | null>;
  /** @default in_process */
  status: XmlElem<string, typeof common.qualification_assignment_states>;
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Отправитель */
  sender_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Компетенция */
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  is_reward: XmlElem<boolean | null>;
  learnings: XmlMultiElem<QualificationAssignmentDocumentLearning | null>;
  test_learnings: XmlMultiElem<QualificationAssignmentDocumentTestLearning | null>;
  education_methods: XmlMultiElem<QualificationAssignmentDocumentEducationMethod | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<QualificationAssignmentDocumentView | null>;
};

type QualificationAssignmentDocument = XmlDocument & {
  TopElem: QualificationAssignmentDocumentTopElem;
  qualification_assignment: QualificationAssignmentDocumentTopElem;
  DocDesc(): string;
};
