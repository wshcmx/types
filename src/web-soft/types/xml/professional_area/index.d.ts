type ProfessionalAreaDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProfessionalAreaDocument;
  /** Корневой элемент */
  parent_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  /** Тип профессиональной области */
  professional_area_type_id: XmlElem<number | null, ProfessionalAreaTypeCatalogDocumentTopElem>;
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
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type ProfessionalAreaDocument = XmlDocument & {
  TopElem: ProfessionalAreaDocumentTopElem;
  professional_area: ProfessionalAreaDocumentTopElem;
  DocDesc(): string;
};
