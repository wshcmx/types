interface SubstitutionDocumentTargetObject {
  target_object_id: XmlElem<number | null>;
}

type SubstitutionDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase &
CustomElemsBase & {
  Doc: SubstitutionDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** @default active */
  status: XmlElem<string, typeof common.substitution_status_types>;
  /** Тип замещения */
  substitution_type_id: XmlElem<number | null, SubstitutionTypeCatalogDocumentTopElem>;
  /** Тип целевого объекта */
  target_object_type: XmlElem<string | null>;
  /** Список целевых объектов */
  target_object_selector: XmlElem<string | null>;
  /** Целевые объекты */
  target_objects: XmlMultiElem<SubstitutionDocumentTargetObject | null>;
  /** Нестандартные права (строка или JSON с информацией о правах) */
  data_str: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /**
   * Выбор сотрудников
   * @default person
   */
  person_selector: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type SubstitutionDocument = XmlDocument & {
  TopElem: SubstitutionDocumentTopElem;
  substitution: SubstitutionDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
