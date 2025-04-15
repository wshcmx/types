interface PackageObjectsDocumentObject {
  id: XmlElem<number | null>;
  eid: XmlElem<number | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.exchange_object_types>;
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
  add_deleted_objects: XmlElem<boolean>;
  process_custom_templates: XmlElem<boolean>;
  process_access_roles: XmlElem<boolean>;
  files: XmlMultiElem<PackageObjectsDocumentFile | null>;
  custom_templates: XmlMultiElem<PackageObjectsDocumentCustomTemplate | null>;
};
