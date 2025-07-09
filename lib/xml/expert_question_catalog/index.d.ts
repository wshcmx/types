type ExpertQuestionCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Нормативная дата */
  normative_date: XmlElem<Date | null>;
  answer_date: XmlElem<Date | null>;
  /** Вопрос */
  question: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Эксперт */
  expert_id: XmlElem<number | null, ExpertCatalogDocumentTopElem>;
  /** Статус */
  status: XmlElem<boolean | null>;
  /** Является часто задаваемым вопросом */
  is_faq: XmlElem<boolean | null>;
  /** Отобразить вопрос в общем списке */
  is_disclosed: XmlElem<boolean | null>;
  /** Файл */
  question_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Файл */
  answer_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
