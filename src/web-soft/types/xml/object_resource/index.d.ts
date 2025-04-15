type ObjectResourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ObjectResourceDocument;
  /** Тип ресурса */
  type: XmlElem<string | null, typeof lists.object_resource_types>;
  /**
   * Состояние
   * @default available
   */
  state_id: XmlElem<string | null, typeof common.object_resource_states>;
  /** Количество */
  count: XmlElem<number | null>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Сотрудник */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Краткое описание */
  small_desc: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type ObjectResourceDocument = XmlDocument & {
  TopElem: ObjectResourceDocumentTopElem;
  object_resource: ObjectResourceDocumentTopElem;
  DocDesc(): string;
};
