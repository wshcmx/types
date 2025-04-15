interface LicenseDocumentLibraryMaterial {
  library_material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
}

interface LicenseDocumentCourse {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
}

interface LicenseDocumentCatalog {
  name: XmlElem<string | null, typeof common.exchange_object_types>;
  max_records_num: XmlElem<number | null>;
  /**
   * @temp
   * @default false
   */
  checked: XmlElem<boolean>;
}

interface LicenseDocumentAccessBlockType {
  id: XmlElem<string | null, typeof common.access_block_types>;
}

interface LicenseDocumentGenerate {
  /** Дата */
  date: XmlElem<Date | null>;
  /** Сотрудник */
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Сотрудник */
  user_fullname: XmlElem<string | null>;
}

interface LicenseDocumentAdditionalKey {
  id: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  /** Тип */
  type_id: XmlElem<string | null>;
  ident: XmlElem<string | null>;
  public_key: XmlElem<string | null>;
  private_key: XmlElem<string | null>;
}

type LicenseDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: LicenseDocument;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /**
   * Тип лицензии
   * @default domain
   */
  license_type: XmlElem<string | null>;
  /** Имя сервера */
  domain_name: XmlElem<string | null>;
  /** Имя сервера */
  domain_short_name: XmlElem<string | null>;
  /** Имя компьютера */
  computer_name: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  /**
   * Временная
   * @default false
   */
  is_temporary: XmlElem<boolean>;
  /**
   * Статус
   * @default project
   */
  status_id: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  /** @default false */
  inventory: XmlElem<boolean>;
  maintaince_date: XmlElem<Date | null>;
  /**
   * Дата окончания
   * @default 5
   */
  users_num: XmlElem<number | null>;
  library_materials: XmlMultiElem<LicenseDocumentLibraryMaterial | null>;
  courses: XmlMultiElem<LicenseDocumentCourse | null>;
  catalogs: XmlMultiElem<LicenseDocumentCatalog | null>;
  access_block_types: XmlMultiElem<LicenseDocumentAccessBlockType | null>;
  /** Генерации лицензии */
  generates: XmlMultiElem<LicenseDocumentGenerate | null>;
  /** Дополнительные ключи */
  additional_keys: XmlMultiElem<LicenseDocumentAdditionalKey | null>;
  /** Информация о лицензии */
  license_info: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  encryption_key: XmlElem<string | null>;
  decryption_key: XmlElem<string | null>;
  /** @default false */
  demo: XmlElem<boolean>;
};

type LicenseDocument = XmlDocument & {
  TopElem: LicenseDocumentTopElem;
  license: LicenseDocumentTopElem;
};
