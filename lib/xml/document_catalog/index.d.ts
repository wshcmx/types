type DocumentCatalogDocumentTopElem = XmlTopElem &
DocumentAttributesBase &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Родительский раздел портала */
  parent_document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Настраиваемый web шаблон */
  custom_template_type: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Установлены права доступа */
  access_exists: XmlElem<boolean | null>;
  /** Прикрепленные объекты */
  catalog_list_desc: XmlElem<string | null>;
  /** Тип объекта */
  parent_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  parent_object_id: XmlElem<number | null>;
  /** Название объекта */
  parent_object_name: XmlElem<string | null>;
  /** Статус */
  status_in_knowledge_map: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  /** Дата начала действия */
  kp_start_date: XmlElem<Date | null>;
  /** Дата окончания действия */
  kp_end_date: XmlElem<Date | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Является нередактируемым */
  invariable: XmlElem<boolean | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
