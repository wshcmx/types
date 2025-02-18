type ResponseDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ResponseDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /**
   * Статус
   * @default plan
   */
  status: XmlElem<string, typeof common.response_status_types>;
  /** Тип отзыва */
  response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  /** Тип объекта */
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Планируемая дата */
  plan_date: XmlElem<Date | null>;
  /** Фактическая дата */
  done_date: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Инициатор */
  owner_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Код объекта */
  object_code: XmlElem<string | null>;
  /** Дата */
  object_start_date: XmlElem<Date | null>;
  /** @default false */
  is_public: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Оценка */
  basic_score: XmlElem<number | null>;
  /** Описание */
  basic_desc: XmlElem<string | null>;
  calc_basic_values(): void;
};

type ResponseDocument = XmlDocument & {
  TopElem: ResponseDocumentTopElem;
  response: ResponseDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
