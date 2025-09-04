type PluginCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Блок */
  block: XmlElem<string | null, typeof common.access_block_types>;
  /** Плагин */
  plugin_id: XmlElem<string | null>;
  /** Версия */
  version: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
