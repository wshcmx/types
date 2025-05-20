interface ExportOdbcSourceBase {
  db_path: XmlElem<string | null>;
  db_server: XmlElem<string | null>;
  db_login: XmlElem<string | null>;
  db_password: XmlElem<string | null>;
  source_name: XmlElem<string | null>;
  /** @default file */
  source_type: XmlElem<string>;
  form: XmlElem<string | null>;
  delim: XmlElem<string>;
  /** @default windows-1251 */
  encoding: XmlElem<string>;
  lotus_id_path: XmlElem<string | null>;
  lotus_undefined_name: XmlElem<string | null>;
  use_unibridge: XmlElem<boolean>;
  db_type: XmlElem<string, typeof common.discharge_db_types>;
}

interface DischargeDocumentTableField {
  /** Источник */
  object_field: XmlElem<string | null>;
  /** Приемник */
  table_field: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null>;
  /** Длина */
  length: XmlElem<number | null>;
  /** Ключ */
  is_primary_key: XmlElem<boolean>;
}

interface DischargeDocumentTableBind {
  fake_id: XmlElem<string | null>;
  current_field: XmlElem<string | null>;
  remote_field: XmlElem<string | null>;
  remote_form: XmlElem<string | null>;
  update_remote_doc: XmlElem<boolean>;
  search_field: XmlElem<string | null>;
  search_field_type: XmlElem<string | null>;
  equal_field: XmlElem<string | null>;
}

interface DischargeDocumentTable extends ExportOdbcSourceBase {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Активная выгрузка */
  is_active: XmlElem<boolean>;
  /** Объект источник */
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Таблица (вид) */
  table_name: XmlElem<string | null>;
  /** Условия */
  condition_text: XmlElem<string | null>;
  select_query: XmlElem<string | null>;
  /** Предварительно выполняемый код */
  prev_eval_text: XmlElem<string | null>;
  /** Заключительно выполняемый код */
  post_eval_text: XmlElem<string | null>;
  /** Регулярно выполняемый код */
  reg_eval_text: XmlElem<string | null>;
  /** Использовать каталог */
  use_catalog: XmlElem<boolean>;
  /** Только обновлять данные уже существующие в целевой БД */
  only_update_data: XmlElem<boolean>;
  miss_first_row: XmlElem<boolean>;
  /** Поля */
  fields: XmlMultiElem<DischargeDocumentTableField | null>;
  binds: XmlMultiElem<DischargeDocumentTableBind | null>;
}

type DischargeDocumentTopElem = XmlTopElem &
ExportOdbcSourceBase & {
  Doc: DischargeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип выгрузки */
  type: XmlElem<string | null, typeof common.discharge_types>;
  /** Использовать общий источник для этапов выгрузки */
  use_common_db: XmlElem<boolean>;
  /** Использовать общую форму для этапов выгрузки */
  use_common_form: XmlElem<boolean>;
  /** Этапы выгрузки */
  tables: XmlMultiElem<DischargeDocumentTable | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DischargeDocument = XmlDocument & {
  TopElem: DischargeDocumentTopElem;
  discharge: DischargeDocumentTopElem;
  DocDesc(): string;
};
