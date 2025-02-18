interface EducationMethodDocumentEventForm {
  form_id: XmlElem<string | null, typeof lists.event_forms>;
}

interface EducationMethodDocumentViewScale {
  /** @temp */
  id: XmlElem<string | null>;
  /** @temp */
  name: XmlElem<string | null>;
  /** @temp */
  percent: XmlElem<number | null>;
}

interface EducationMethodDocumentView extends DescBase {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  /**
   * @temp
   * @default false
   */
  is_future_events: XmlElem<boolean>;
  filter: XmlElem<AuFtFilter | null>;
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  /** @temp */
  flag_mark: XmlElem<boolean | null>;
  /** @temp */
  scales: XmlMultiElem<EducationMethodDocumentViewScale | null>;
  /**
   * @temp
   * Классификатор
   */
  knowledge_classifier_id: XmlElem<number | null>;
  /**
   * @temp
   * Сортировать по
   * @default name
   */
  knowledge_sort_type_id: XmlElem<string | null>;
  /** @default date */
  sort_type_id: XmlElem<string>;
}

interface EducationMethodDocumentCompetenceIndicator {
  indicator_id: XmlElem<number | null, IndicatorCatalogDocumentTopElem>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  required_mark: XmlElem<string | null>;
  /**
   * Вес
   * @default 0.0
   */
  weight: XmlElem<number>;
}

interface EducationMethodDocumentCompetence {
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  required_mark: XmlElem<string | null>;
  /**
   * Вес
   * @default 0.0
   */
  weight: XmlElem<number>;
  indicators: XmlMultiElem<EducationMethodDocumentCompetenceIndicator | null>;
}

interface EducationMethodDocumentSimilarEducationMethod {
  id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

type EducationMethodDocumentTopElem = XmlTopElem &
ProgramMethodBase &
LectorsBase &
CustomElemsBase &
AdminAccessBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
EduMethodTestingBase &
FileListBase &
ExpenseDistributionBase &
GameBonusBase & {
  Doc: EducationMethodDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Является открытой учебной программой
   * @default false
   */
  is_open: XmlElem<boolean>;
  /** Тип заявки по умолчанию */
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /** Тип отзыва по умолчанию */
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  /**
   * Обязательное заполнение отзыва
   * @default false
   */
  mandatory_fill_response: XmlElem<boolean>;
  /** Тип сертификата по результатам прохождения тестирования */
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  event_form: XmlElem<string | null, typeof lists.event_forms>;
  /** Тип мероприятия */
  event_type_id: XmlElem<number | null, EventTypeCatalogDocumentTopElem>;
  /** Формы проведения */
  event_forms: XmlMultiElem<EducationMethodDocumentEventForm | null>;
  /** @temp */
  view: XmlElem<EducationMethodDocumentView | null>;
  /** Компетенции */
  competences: XmlMultiElem<EducationMethodDocumentCompetence | null>;
  similar_education_methods: XmlMultiElem<EducationMethodDocumentSimilarEducationMethod | null>;
  get_workflow_id(): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type EducationMethodDocument = XmlDocument & {
  TopElem: EducationMethodDocumentTopElem;
  education_method: EducationMethodDocumentTopElem;
  DocDesc(): string;
};
