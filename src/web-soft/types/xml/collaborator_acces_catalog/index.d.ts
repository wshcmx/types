interface CollaboratorAccessDocumentPersonObjectProfile {
  person_object_profile_id: XmlElem<number | null, PersonObjectProfileCatalogDocumentTopElem>;
}

type CollaboratorAccesCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  login: XmlElem<string | null>;
  password: XmlElem<string | null>;
  person_object_profiles: XmlMultiElem<CollaboratorAccessDocumentPersonObjectProfile | null>;
  change_password: XmlElem<boolean>;
  access: XmlElem<AccessBase | null>;
};
