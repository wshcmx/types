interface OutstaffContractDocumentRegionPositionCommon extends CostCurrencyBase {
  /** Типовая должность */
  position_common_id: XmlElem<number | null>;
  preferable: XmlElem<boolean | null>;
}

interface OutstaffContractDocumentRegionMaterial extends CostCurrencyBase {
  /** Тип материала */
  material_type_id: XmlElem<number | null>;
}

interface OutstaffContractDocumentRegion {
  id: XmlElem<string | null>;
  /** Регион */
  region_id: XmlElem<number | null>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_name(): string;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  /** @default true */
  all_period: XmlElem<boolean>;
  position_commons: XmlMultiElem<OutstaffContractDocumentRegionPositionCommon | null>;
  materials: XmlMultiElem<OutstaffContractDocumentRegionMaterial | null>;
}

type OutstaffContractDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: OutstaffContractDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /**
   * Статус
   * @default forming
   */
  status: XmlElem<string, typeof common.order_status_types>;
  /**
   * Тип
   * @default outstaff_persons
   */
  type_id: XmlElem<string, typeof common.outstaff_contract_types>;
  date: XmlElem<Date | null>;
  number: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  /** Провайдер временного персонала */
  outstaff_provider_id: XmlElem<number | null, OutstaffProviderCatalogDocumentTopElem>;
  /** Условное название */
  disp_name(): string;
  regions: XmlMultiElem<OutstaffContractDocumentRegion | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type OutstaffContractDocument = XmlDocument & {
  TopElem: OutstaffContractDocumentTopElem;
  outstaff_contract: OutstaffContractDocumentTopElem;
  DocDesc(): string;
};
