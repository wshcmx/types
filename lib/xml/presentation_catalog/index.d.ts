type PresentationCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  /** Файл */
  file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Виртуальный класс */
  vclass_setting_id: XmlElem<number | null, VclassSettingCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
