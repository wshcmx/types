interface LibraryMaterialItemDocumentChangeLog {
  id: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof common.availability_states>;
  /** Дата выдачи */
  issue_date: XmlElem<Date | null>;
  /** Планируемая дата возврата */
  return_plan_date: XmlElem<Date | null>;
  /** Дата возврата */
  return_date: XmlElem<Date | null>;
  /** Дата */
  date: XmlElem<Date | null>;
}

type LibraryMaterialItemDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: LibraryMaterialItemDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Материал библиотеки */
  material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Номер */
  number: XmlElem<string | null>;
  /** Положение */
  location: XmlElem<string | null>;
  /** Формат материала */
  format_id: XmlElem<string | null, typeof common.material_format_types>;
  /**
   * Статус
   * @default available
   */
  state_id: XmlElem<string | null, typeof common.availability_states>;
  /** Текущая страница */
  current_page_id: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Дата выдачи */
  issue_date: XmlElem<Date | null>;
  /** Планируемая дата возврата */
  return_plan_date: XmlElem<Date | null>;
  /** Дата возврата */
  return_date: XmlElem<Date | null>;
  change_logs: XmlMultiElem<LibraryMaterialItemDocumentChangeLog | null>;
  clear_data(sourceTopElem: XmlTopElem): unknown;
  add_log_record(materialItemTopElem: XmlTopElem): unknown;
};

type LibraryMaterialItemDocument = XmlDocument & {
  TopElem: LibraryMaterialItemDocumentTopElem;
  library_material_item: LibraryMaterialItemDocumentTopElem;
  OnBeforeSave(): void;
};
