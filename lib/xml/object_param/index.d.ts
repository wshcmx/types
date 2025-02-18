interface ObjectParamDocumentView {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
}

type ObjectParamDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  Doc: ObjectParamDocument;
  id: XmlElem<number | null>;
  /**
   * Активное уведомление
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  /** Начало */
  start_date: XmlElem<Date | null>;
  /** Дополнительный идентификатор */
  sec_object_code: XmlElem<string | null>;
  /** Базовый объект */
  base_object: XmlElem<ObjectTypeBase | null>;
  params_block: XmlElem<WebVariablesBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
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
  /** @temp */
  view: XmlElem<ObjectParamDocumentView | null>;
};

type ObjectParamDocument = XmlDocument & {
  TopElem: ObjectParamDocumentTopElem;
  object_param: ObjectParamDocumentTopElem;
  OnBeforeSave(): void;
  OnCreate(): void;
  DocDesc(): string;
};
