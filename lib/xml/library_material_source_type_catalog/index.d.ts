type LibraryMaterialSourceTypeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип ресурса */
  type: XmlElem<string | null, typeof common.resource_types>;
  /** Включен */
  is_active: XmlElem<boolean | null>;
  /** Фильтр имен файлов */
  filenamemask: XmlElem<string | null>;
  library_player_id: XmlElem<number | null, LibraryPlayerCatalogDocumentTopElem>;
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
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
