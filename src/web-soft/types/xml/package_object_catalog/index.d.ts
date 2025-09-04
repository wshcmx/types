interface PackageObjectsDocumentObject {
  id: XmlElem<number | null>;
  eid: XmlElem<number | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** @default true */
  modify: XmlElem<boolean>;
}

interface PackageObjectsDocumentFile {
  code: XmlElem<string | null>;
  url: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.package_types>;
  base_url: XmlElem<string | null>;
}

interface PackageObjectsDocumentCustomTemplate {
  catalog_name: XmlElem<string | null>;
}

type PackageObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  objects: XmlMultiElem<PackageObjectsDocumentObject | null>;
  /** @default false */
  add_deleted_objects: XmlElem<boolean>;
  /** @default false */
  process_custom_templates: XmlElem<boolean>;
  /** @default false */
  process_access_roles: XmlElem<boolean>;
  files: XmlMultiElem<PackageObjectsDocumentFile | null>;
  custom_templates: XmlMultiElem<PackageObjectsDocumentCustomTemplate | null>;
  /**
   * @temp
   * @default 10
   */
  id_disp_type: XmlElem<string>;
  /**
   * @temp
   * @default courses
   */
  pack_type: XmlElem<string, typeof common.package_types>;
  /**
   * @temp
   * @default objects
   */
  selector_type: XmlElem<string>;
  /** @temp */
  base_url: XmlElem<string | null>;
};
