interface ScriptQueueElemDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type ScriptQueueElemDocumentTopElem = XmlTopElem & {
  Doc: ScriptQueueElemDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата для запуска скрипта */
  start_date: XmlElem<Date | null>;
  /** Время запуска */
  start_time: XmlElem<Date | null>;
  /** Время завершения */
  finish_time: XmlElem<Date | null>;
  /** Задержка между запусками */
  delay: XmlElem<number | null>;
  /**
   * Выполнено
   * @default false
   */
  completed: XmlElem<boolean>;
  /** Текст ошибки */
  error: XmlElem<string | null>;
  /** Результат */
  result: XmlElem<string | null>;
  /**
   * Удалять после выполнения
   * @default true
   */
  delete_automatically: XmlElem<boolean>;
  /** Объект */
  obj: XmlElem<unknown | null>;
  /** Выполняемый код */
  run_code: XmlElem<string | null>;
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
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ScriptQueueElemDocumentView | null>;
};

type ScriptQueueElemDocument = XmlDocument & {
  TopElem: ScriptQueueElemDocumentTopElem;
  script_queue_elem: ScriptQueueElemDocumentTopElem;
  DocDesc(): string;
};
