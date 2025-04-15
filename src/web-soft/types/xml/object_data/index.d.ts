interface ObjectDataDocumentView extends DescBase {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type ObjectDataDocumentTopElem = XmlTopElem &
ObjectTypeBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: ObjectDataDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип данных объектов */
  object_data_type_id: XmlElem<number | null, ObjectDataTypeCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /**
   * Статус
   * @default active
   */
  status_id: XmlElem<string, typeof common.request_status_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Тип связанного объекта */
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Связанный объект */
  sec_object_id: XmlElem<number | null>;
  /** Название связанного объекта */
  sec_object_name: XmlElem<string | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Данные */
  data: XmlElem<string | null>;
  /** Данные в каталог */
  data_str: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<ObjectDataDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type ObjectDataDocument = XmlDocument & {
  TopElem: ObjectDataDocumentTopElem;
  object_data: ObjectDataDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
