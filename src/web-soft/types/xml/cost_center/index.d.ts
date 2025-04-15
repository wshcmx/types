interface CostCenterDocumentSubdivision {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
}

type CostCenterDocumentTopElem = XmlTopElem &
FuncManagersBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CostCenterDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Актуальный
   * @default true
   */
  is_active: XmlElem<boolean>;
  /** Родительский центр затрат */
  parent_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  subdivisions: XmlMultiElem<CostCenterDocumentSubdivision | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type CostCenterDocument = XmlDocument & {
  TopElem: CostCenterDocumentTopElem;
  cost_center: CostCenterDocumentTopElem;
  DocDesc(): string;
};
