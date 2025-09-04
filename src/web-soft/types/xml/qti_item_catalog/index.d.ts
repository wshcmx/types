type QtiItemCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type_id: XmlElem<string | null, typeof common.item_types>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string, typeof common.tutor_status_types>;
  /** Название */
  title: XmlElem<string | null>;
  /** Вопрос */
  question_text: XmlElem<string | null>;
  /** Баллы */
  question_points: XmlElem<number | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** Тэги */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
