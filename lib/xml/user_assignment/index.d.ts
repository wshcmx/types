interface UserAssignmentDocumentXRowHeaderYColXRowEssentialValue {
  x_row_essential_value_id: XmlElem<number | null>;
  x_row_essential_value_name: XmlElem<string | null>;
}

interface UserAssignmentDocumentXRowHeaderYCol {
  y_col_id: XmlElem<string | null>;
  x_row_value: XmlElem<string | null>;
  /** @default false */
  flag_once: XmlElem<boolean | null>;
  x_row_essential_values: XmlMultiElem<UserAssignmentDocumentXRowHeaderYColXRowEssentialValue | null>;
}

interface UserAssignmentDocumentXRowHeader {
  x_row_header_id: XmlElem<string | null>;
  x_row_header_value: XmlElem<string | null>;
  /** @default false */
  x_row_header_hierarchy: XmlElem<boolean>;
  /** @default eq */
  x_row_option_type: XmlElem<string, typeof common.all_option_types>;
  y_cols: XmlMultiElem<UserAssignmentDocumentXRowHeaderYCol | null>;
}

interface UserAssignmentDocumentYColHeader {
  y_col_header_id: XmlElem<string | null>;
  y_col_header_value: XmlElem<string | null>;
  /** @default eq */
  y_row_option_type: XmlElem<string, typeof common.all_option_types>;
}

interface UserAssignmentDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  log: XmlElem<string | null>;
}

type UserAssignmentDocumentTopElem = XmlTopElem &
ViewConditionsBase & {
  Doc: UserAssignmentDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Название объекта
   * @default collaborator
   */
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Строки */
  x_type: XmlElem<string | null>;
  x_type_name: XmlElem<string | null>;
  /** Тип строки */
  x_type_type: XmlElem<string | null>;
  /** @default false */
  x_is_custom: XmlElem<boolean | null>;
  /** Каталог */
  x_foreign_catalog: XmlElem<string | null>;
  /** Столбцы */
  y_type: XmlElem<string | null>;
  y_type_name: XmlElem<string | null>;
  /** Тип столбца */
  y_type_type: XmlElem<string | null>;
  /** @default false */
  y_is_custom: XmlElem<boolean | null>;
  /** Каталог */
  y_foreign_catalog: XmlElem<string | null>;
  /** @default false */
  disp_edit: XmlElem<boolean>;
  /** Действие */
  cell_action: XmlElem<string | null>;
  /** Строки */
  x_row_headers: XmlMultiElem<UserAssignmentDocumentXRowHeader | null>;
  /** Столбцы */
  y_col_headers: XmlMultiElem<UserAssignmentDocumentYColHeader | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<UserAssignmentDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type UserAssignmentDocument = XmlDocument & {
  TopElem: UserAssignmentDocumentTopElem;
  user_assignment: UserAssignmentDocumentTopElem;
  DocDesc(): string;
};
