type WorkingConditionCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Эталонное условие работы */
  is_model: XmlElem<boolean | null>;
  /**
   * Состояние
   * @default 0
   */
  state_id: XmlElem<string, typeof common.working_condition_states>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  /** Длительность испытательного срока (месяцев) */
  probationary_duration: XmlElem<number | null>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Место работы */
  place_name: XmlElem<string | null>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Тип условиий труда */
  working_condition_type_id: XmlElem<number | null, WorkingConditionTypeCatalogDocumentTopElem>;
  /** Тип графика выплат заработной платы */
  salary_payment_type_id: XmlElem<number | null, SalaryPaymentTypeCatalogDocumentTopElem>;
  /** Форма работы */
  work_form_id: XmlElem<number | null, WorkFormCatalogDocumentTopElem>;
  /**
   * Выплата вознаграждения
   * @default salary
   */
  payment_remuneration: XmlElem<string | null>;
  /** Оклад */
  salary: XmlElem<number | null>;
  /**
   * Валюта
   * @default RUB
   */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Тип графика работы */
  work_schedule_type_id: XmlElem<number | null, WorkScheduleTypeCatalogDocumentTopElem>;
  /** Продолжительность ежедневной работы (смены) в часах */
  daily_duration: XmlElem<number | null>;
  /** Продолжительность рабочей недели (в часах) */
  weekly_duration: XmlElem<number | null>;
  /** Время начала работы */
  start_work_type: XmlElem<string | null>;
  /**
   * Время начала работы
   * @default 09:00
   */
  start_work_time: XmlElem<string | null>;
  /**
   * Время окончания работы
   * @default 18:00
   */
  end_work_time: XmlElem<string | null>;
  /** Длительность обеденного перерыва */
  lunch_break_duration: XmlElem<number | null>;
  /** Тип обеденного перерыва */
  lunch_break_type: XmlElem<string | null>;
  /**
   * Время начала обеденного перерыва
   * @default 09:00
   */
  start_lunch_break_time: XmlElem<string | null>;
  /**
   * Время окончания обеденного перерыва
   * @default 18:00
   */
  end_lunch_break_time: XmlElem<string | null>;
  /** Число смен в сутки */
  shifts_number: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
