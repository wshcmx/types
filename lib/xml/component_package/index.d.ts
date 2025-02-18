type ComponentPackageDocumentTopElem = XmlTopElem &
FileListBase &
KnowledgePartsBase &
CustomElemsBase & {
  Doc: ComponentPackageDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Дата загрузки */
  download_date: XmlElem<Date | null>;
  /** @default false */
  is_download: XmlElem<boolean | null>;
  /** @default false */
  is_install: XmlElem<boolean | null>;
  type_id: XmlElem<string | null, typeof common.access_block_types>;
  component_modification_date: XmlElem<Date | null>;
  /** @default false */
  is_std: XmlElem<boolean | null>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Пакет (*.zip) */
  download_package_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Тело статьи */
  text_area: XmlElem<string | null>;
  load_file(tData: unknown, source: unknown, needInstall: unknown): number | undefined;
};

type ComponentPackageDocument = XmlDocument & {
  TopElem: ComponentPackageDocumentTopElem;
  component_package: ComponentPackageDocumentTopElem;
};
