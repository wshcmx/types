type ChatbotStageCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  chatbot_id: XmlElem<number | null, ChatbotCatalogDocumentTopElem>;
  action_type: XmlElem<string | null>;
  keyboard_type: XmlElem<string | null, typeof common.keyboard_types>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
