interface ObjectInnerBaseDocumentSettingsAuxAuxParam {
  id: XmlElem<string | null>;
  value: XmlElem<string | null>;
  tag: XmlElem<string | null>;
}

interface ObjectInnerBaseDocumentSettingsAux {
  aux_param: XmlMultiElemObject<ObjectInnerBaseDocumentSettingsAuxAuxParam | null>;
}

interface ObjectInnerBaseDocumentSettings extends WebVariablesBase {
  aux: XmlElem<ObjectInnerBaseDocumentSettingsAux | null>;
}

type ObjectInnerBaseDocumentTopElem = XmlTopElem & {
  Doc: ObjectInnerBaseDocument;
  id: XmlElem<number | null>;
  catalog: XmlElem<string | null>;
  uid: XmlElem<number | null>;
  title: XmlElem<string | null>;
  parent_section_id: XmlElem<number | null>;
  /** @default false */
  is_default: XmlElem<boolean>;
  /** @default false */
  is_menu: XmlElem<boolean>;
  /** @default false */
  is_offline: XmlElem<boolean>;
  /** @default false */
  hidden: XmlElem<boolean>;
  settings: XmlElem<ObjectInnerBaseDocumentSettings | null>;
};

type ObjectInnerBaseDocument = XmlDocument & {
  TopElem: ObjectInnerBaseDocumentTopElem;
  object_inner_base: ObjectInnerBaseDocumentTopElem;
  mobile_app_config: XmlElem<unknown | null>;
  DocDesc(): string;
};
