type ResponseCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /**
   * Статус
   * @default plan
   */
  status: XmlElem<string, typeof common.response_status_types>;
  /** Тип объекта */
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Тип отзыва */
  response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Организация объекта */
  person_org_name: XmlElem<string | null>;
  /** Инициатор */
  owner_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Оценка */
  basic_score: XmlElem<number | null>;
  /** Описание */
  basic_desc: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Планируемая дата */
  plan_date: XmlElem<Date | null>;
  /** Фактическая дата */
  done_date: XmlElem<Date | null>;
  /**
   * Публичный отзыв
   * @default false
   */
  is_public: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
