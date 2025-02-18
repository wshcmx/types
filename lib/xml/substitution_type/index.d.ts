interface SubstitutionTypeDocumentOperation {
  operation_id: XmlElem<number | null, OperationCatalogDocumentTopElem>;
  operation_code: XmlElem<string | null>;
}

interface SubstitutionTypeDocumentRemoteAction {
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  remote_action_code: XmlElem<string | null>;
}

type SubstitutionTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CustomElemsBase & {
  Doc: SubstitutionTypeDocument;
  /** Тип объекта */
  object_type: XmlElem<string | null>;
  /** Операции */
  operations: XmlMultiElem<SubstitutionTypeDocumentOperation | null>;
  /** Действия */
  remote_actions: XmlMultiElem<SubstitutionTypeDocumentRemoteAction | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Нестандартные права (строка или JSON с информацией о правах) */
  data_str: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /**
   * Действует
   * @default true
   */
  is_active: XmlElem<boolean>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type SubstitutionTypeDocument = XmlDocument & {
  TopElem: SubstitutionTypeDocumentTopElem;
  substitution_type: SubstitutionTypeDocumentTopElem;
  DocDesc(): string;
};
