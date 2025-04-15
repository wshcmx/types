interface ScaleDocumentScaleElement {
  id: XmlElem<string | null>;
  name: XmlElem<string>;
  /** @default linear */
  type: XmlElem<string>;
  /** @default 0 */
  min: XmlElem<number>;
  /** @default 0 */
  max: XmlElem<number>;
  result: XmlElem<number | null>;
  desc: XmlElem<string | null>;
  /** @default false */
  desc_required: XmlElem<boolean | null>;
}

type ScaleDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: ScaleDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ограничение */
  max_limit: XmlElem<number | null>;
  /** Ограничение */
  min_limit: XmlElem<number | null>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string | null, typeof common.kpi_states>;
  scale_elements: XmlMultiElem<ScaleDocumentScaleElement | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  checked(value: number): unknown;
};

type ScaleDocument = XmlDocument & {
  TopElem: ScaleDocumentTopElem;
  scale: ScaleDocumentTopElem;
};
