type ContractDocumentTopElem = XmlTopElem &
CostCurrencyBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ContractDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  number: XmlElem<string | null>;
  contract_type_id: XmlElem<number | null, ContractTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Название юридического лица */
  legal_entity_name: XmlElem<string | null>;
  /** Название юридического лица из списка */
  legal_entity_code: XmlElem<string | null>;
  /** Количество прикрепленных файлов */
  files_count(): number;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type ContractDocument = XmlDocument & {
  TopElem: ContractDocumentTopElem;
  contract: ContractDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
