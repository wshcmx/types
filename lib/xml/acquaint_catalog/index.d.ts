type AcquaintCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Требуемая дата ознакомления */
  normative_date: XmlElem<Date | null>;
  /** Количество сотрудников для ознакомления */
  acquaint_num: XmlElem<number | null>;
  /** Количество ознакомленных сотрудников */
  acquainted_num: XmlElem<number | null>;
  /** Сотрудники */
  collaborators: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<boolean | null>;
  /** Периодичность повторного обновления в днях */
  reacquaintance_period: XmlElem<number | null>;
  /** Тесты */
  assessments_id: XmlMultiElemObject<number | null, AssessmentCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
