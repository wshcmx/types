type QualificationCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип вступления
   * @default close
   */
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  /** Родительская квалификация */
  parent_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string, typeof common.qualification_statuss>;
  /**
   * Разрешить самостоятельное назначение испытаний по квалификации
   * @default true
   */
  yourself_start: XmlElem<boolean>;
  /** Требуемые квалификации */
  qualification_id: XmlMultiElemObject<number | null>;
  /** Уровень */
  level_id: XmlElem<number | null, LevelCatalogDocumentTopElem>;
  is_reward: XmlElem<boolean | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
