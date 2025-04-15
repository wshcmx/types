interface QtiRoleDocumentRole extends ObjectCodeNameBase, KnowledgePartsBase {
  parent_role_id: XmlElem<number | null>;
  /** Тип объекта */
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
}

type QtiRoleDocumentTopElem = XmlTopElem & {
  Doc: QtiRoleDocument;
};

type QtiRoleDocument = XmlDocument & {
  TopElem: QtiRoleDocumentTopElem;
  qti_role: QtiRoleDocumentTopElem;
  role: XmlElem<QtiRoleDocumentRole | null>;
  DocDesc(): string;
  OnInit(): void;
};
