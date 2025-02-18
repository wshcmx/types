interface CareerReserveTypeDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface CareerReserveTypeDocumentTask {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default test_learning
   */
  type: XmlElem<string, typeof common.career_reserve_type_tasks_types>;
  due_date: XmlElem<number | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /**
   * Тип объекта
   * @default assessment
   */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /**
   * Назначать заново при создании плана
   * @default true
   */
  auto_appoint_learning: XmlElem<boolean | null>;
  /** @default false */
  add_exist_appraise: XmlElem<boolean | null>;
  commission_persons: XmlMultiElem<CareerReserveTypeDocumentTaskCommissionPerson | null>;
}

interface CareerReserveTypeDocumentView extends DescBase {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  filter: XmlElem<AuFtFilter | null>;
}

type CareerReserveTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
TalentPoolFuncManagersBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CareerReserveTypeDocument;
  /** Задания */
  tasks: XmlMultiElem<CareerReserveTypeDocumentTask | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<CareerReserveTypeDocumentView | null>;
};

type CareerReserveTypeDocument = XmlDocument & {
  TopElem: CareerReserveTypeDocumentTopElem;
  career_reserve_type: CareerReserveTypeDocumentTopElem;
  DocDesc(): string;
};
