interface AvailabilityPlanDocumentPeriod {
  id: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface AvailabilityPlanDocumentViewPeriodHour {
  hour: XmlElem<number | null>;
  /** @default false */
  checked: XmlElem<boolean>;
}

interface AvailabilityPlanDocumentViewPeriod {
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  hours: XmlMultiElem<AvailabilityPlanDocumentViewPeriodHour | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @default false */
  checked: XmlElem<boolean>;
}

interface AvailabilityPlanDocumentView extends DescBase {
  /** Периоды */
  periods: XmlMultiElem<AvailabilityPlanDocumentViewPeriod | null>;
  obtain_peroids(): unknown;
  init_periods(): unknown;
  save_periods(): unknown;
}

type AvailabilityPlanDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: AvailabilityPlanDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** @default 8 */
  start_hour: XmlElem<number>;
  /** @default 21 */
  finish_hour: XmlElem<number>;
  /** Периоды */
  periods: XmlMultiElem<AvailabilityPlanDocumentPeriod | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<AvailabilityPlanDocumentView | null>;
};

type AvailabilityPlanDocument = XmlDocument & {
  TopElem: AvailabilityPlanDocumentTopElem;
  availability_plan: AvailabilityPlanDocumentTopElem;
  DocDesc(): string;
};
