interface LibraryMaterialViewingDocumentPage {
  page_id: XmlElem<string | null>;
  /** @default false */
  viewed: XmlElem<boolean | null>;
}

type LibraryMaterialViewingDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: LibraryMaterialViewingDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Материал библиотеки */
  material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  /** Название материала */
  material_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Продолжительность просмотра
   * @default 0
   */
  duration: XmlElem<number | null>;
  /** @default 0 */
  location: XmlElem<number | null>;
  pages: XmlMultiElem<LibraryMaterialViewingDocumentPage | null>;
  /**
   * Состояние
   * @default plan
   */
  state_id: XmlElem<string | null, typeof common.viewing_states>;
  /** Текущая страница */
  current_page_id: XmlElem<string | null>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Начало просмотра */
  start_viewing_date: XmlElem<Date | null>;
  /** Время последнего просмотра */
  last_viewing_date: XmlElem<Date | null>;
  /** Время полного просмотра */
  finish_viewing_date: XmlElem<Date | null>;
};

type LibraryMaterialViewingDocument = XmlDocument & {
  TopElem: LibraryMaterialViewingDocumentTopElem;
  library_material_viewing: LibraryMaterialViewingDocumentTopElem;
};
