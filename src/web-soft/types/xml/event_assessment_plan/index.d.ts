interface EventAssessmentPlanDocumentCompetenceExercise {
  /** Упражнение */
  exercise_id: XmlElem<number | null, ExerciseCatalogDocumentTopElem>;
  /** Оценка */
  mark: XmlElem<string | null>;
}

interface EventAssessmentPlanDocumentCompetenceIndicator extends WorkflowFieldsAssessmentBase {
  /** Индикатор */
  indicator_id: XmlElem<number | null, IndicatorCatalogDocumentTopElem>;
  /** Плановое значение */
  plan: XmlElem<string | null>;
  /** Оценка */
  mark: XmlElem<string | null>;
  /**
   * Вес
   * @default 0.0
   */
  weight: XmlElem<number>;
}

interface EventAssessmentPlanDocumentCompetence extends WorkflowFieldsAssessmentBase {
  /** Компетенция */
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  /** Оценка */
  mark: XmlElem<string | null>;
  /**
   * Вес
   * @default 0.0
   */
  weight: XmlElem<number>;
  /** Упражнения */
  exercises: XmlMultiElem<EventAssessmentPlanDocumentCompetenceExercise | null>;
  /** Индикаторы */
  indicators: XmlMultiElem<EventAssessmentPlanDocumentCompetenceIndicator | null>;
}

interface EventAssessmentPlanDocumentViewScale {
  /** @temp */
  id: XmlElem<string | null>;
  /** @temp */
  name: XmlElem<string | null>;
  /** @temp */
  percent: XmlElem<number | null>;
}

interface EventAssessmentPlanDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  /** @temp */
  temp_id: XmlElem<number | null>;
  /** @temp */
  flag_mark: XmlElem<boolean | null>;
  /** @temp */
  scales: XmlMultiElem<EventAssessmentPlanDocumentViewScale | null>;
}

type EventAssessmentPlanDocumentTopElem = XmlTopElem &
MsPersonSdBase &
SupplementaryQuestionsBase &
CustomElemsBase & {
  Doc: EventAssessmentPlanDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Оценивающий */
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  date_start: XmlElem<Date | null>;
  /** Тип оценки */
  assessment_type: XmlElem<string | null>;
  /**
   * Код типа оценки
   * @default comp;add
   */
  assessment_type_id: XmlElem<string>;
  /** Статус оценивающего */
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /**
   * Признак завершенности
   * @default false
   */
  is_done: XmlElem<boolean>;
  /** Компетенции */
  competences: XmlMultiElem<EventAssessmentPlanDocumentCompetence | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  temp: XmlElem<string | null>;
  file_name: XmlElem<string | null>;
  file_url: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<EventAssessmentPlanDocumentView | null>;
  event_result_type_id: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
};

type EventAssessmentPlanDocument = XmlDocument & {
  TopElem: EventAssessmentPlanDocumentTopElem;
  event_assessment_plan: EventAssessmentPlanDocumentTopElem;
  DocDesc(): string;
};
