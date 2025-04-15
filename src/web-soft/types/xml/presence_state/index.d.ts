interface PresenceStateDocumentDisplayField {
  /** Значение */
  value: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface PresenceStateDocumentRequiredField {
  /** Значение */
  value: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type PresenceStateDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: PresenceStateDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof lists.person_states>;
  /** Состояние */
  state_name: XmlElem<string | null>;
  /**
   * Доступно для выбора пользователем
   * @default false
   */
  accessible: XmlElem<boolean>;
  /**
   * Отсутствие
   * @default false
   */
  is_absence: XmlElem<boolean>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /**
   * Можно отменить
   * @default false
   */
  can_cancel: XmlElem<boolean>;
  /**
   * Можно изменять
   * @default false
   */
  can_change: XmlElem<boolean>;
  /** Документооборот для отмены */
  cancel_workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Документооборот для изменения */
  change_workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Позиция в списке */
  position: XmlElem<number | null>;
  /** Стиль CSS */
  style_css: XmlElem<string | null>;
  /**
   * Весь день
   * @default false
   */
  all_day: XmlElem<boolean>;
  /**
   * Ограничено временем работы подразделения
   * @default false
   */
  is_sub_work_time: XmlElem<boolean>;
  /** Отображаемые поля графика сотрудника */
  display_fields: XmlMultiElem<PresenceStateDocumentDisplayField | null>;
  /** Обязательные поля графика сотрудника */
  required_fields: XmlMultiElem<PresenceStateDocumentRequiredField | null>;
  doc_info: XmlElem<DocInfoBase | null>;
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
};

type PresenceStateDocument = XmlDocument & {
  TopElem: PresenceStateDocumentTopElem;
  presence_state: PresenceStateDocumentTopElem;
  OnBeforeSave(): void;
};
