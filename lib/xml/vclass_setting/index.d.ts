interface VclassSettingDocumentProgramCompletedParentProgram {
  program_id: XmlElem<number | null>;
}

interface VclassSettingDocumentProgram {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Родительская учебная программа */
  parent_progpam_id: XmlElem<number | null>;
  /** Продолжительность */
  duration: XmlElem<number | null>;
  /** Количество участников */
  person_num: XmlElem<number | null>;
  /**
   * Тип
   * @default course
   */
  type: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Код */
  object_code: XmlElem<string | null>;
  catalog_name: XmlElem<string | null, typeof common.learning_catalogs>;
  /** Дней */
  delay_days: XmlElem<number | null>;
  /** Дней */
  days: XmlElem<number | null>;
  /** Вес, % */
  weight: XmlElem<number | null>;
  start_type: XmlElem<string | null>;
  /**
   * Обязательный раздел
   * @default true
   */
  required: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Доступ после завершения разделов */
  completed_parent_programs: XmlMultiElem<VclassSettingDocumentProgramCompletedParentProgram | null>;
}

interface VclassSettingDocumentView extends DescBase {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  filter: XmlElem<AuFtFilter | null>;
}

type VclassSettingDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: VclassSettingDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Разговор */
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /** Разделы учебной программы */
  programs: XmlMultiElem<VclassSettingDocumentProgram | null>;
  /** @temp */
  view: XmlElem<VclassSettingDocumentView | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type VclassSettingDocument = XmlDocument & {
  TopElem: VclassSettingDocumentTopElem;
  vclass_setting: VclassSettingDocumentTopElem;
  DocDesc(): string;
};
