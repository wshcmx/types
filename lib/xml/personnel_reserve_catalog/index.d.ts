type PersonnelReserveCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.personnel_reserve_status_types>;
  /** Тип кадрового резерва */
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  /** Основание для исключения */
  exclusion_reason_id: XmlElem<number | null, ExclusionReasonCatalogDocumentTopElem>;
  /** Способ выдвижения в резерв */
  nomination_id: XmlElem<number | null, TalentPoolNominationCatalogDocumentTopElem>;
  /** Потенциал развития */
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  /** Оценка эффективности */
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Текущая должность сотрудника */
  person_position_name: XmlElem<string | null>;
  /** Дата внесения */
  start_date: XmlElem<Date | null>;
  /** Дата включения в резерв */
  include_reserve_date: XmlElem<Date | null>;
  /** Дата закрытия */
  finish_date: XmlElem<Date | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
