interface RemoteSecurityProfileDocumentMethodAccessListMethodAccess {
  access_block_id: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  library_profile: XmlElem<string | null>;
}

interface RemoteSecurityProfileDocumentMethodAccessList {
  method_access: XmlMultiElemObject<RemoteSecurityProfileDocumentMethodAccessListMethodAccess | null>;
}

interface RemoteSecurityProfileDocumentLibAccessListLibAccess {
  library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  library_code: XmlElem<string | null>;
  filter: XmlElem<string | null>;
}

interface RemoteSecurityProfileDocumentLibAccessList {
  lib_access: XmlMultiElemObject<RemoteSecurityProfileDocumentLibAccessListLibAccess | null>;
}

interface RemoteSecurityProfileDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type RemoteSecurityProfileDocumentTopElem = XmlTopElem & {
  Doc: RemoteSecurityProfileDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** @default 0 */
  source: XmlElem<number>;
  method_access_list: XmlElem<RemoteSecurityProfileDocumentMethodAccessList | null>;
  lib_access_list: XmlElem<RemoteSecurityProfileDocumentLibAccessList | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
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
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<RemoteSecurityProfileDocumentView | null>;
};

type RemoteSecurityProfileDocument = XmlDocument & {
  TopElem: RemoteSecurityProfileDocumentTopElem;
  remote_security_profile: RemoteSecurityProfileDocumentTopElem;
  DocDesc(): string;
};
