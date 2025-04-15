interface CustomResultDocumentInstPack {
  id: XmlElem<string | null>;
}

interface CustomResultDocumentInstCustomPack {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  lng_id: XmlElem<string | null>;
  url: XmlElem<string | null>;
}

type CustomResultDocumentTopElem = XmlTopElem &
SelectServerBase & {
  Doc: CustomResultDocument;
  inst_packs_ref: XmlElem<unknown | null>;
  inst_packs: XmlMultiElem<CustomResultDocumentInstPack | null>;
  inst_custom_packs: XmlMultiElem<CustomResultDocumentInstCustomPack | null>;
  server_custom_url: XmlElem<string | null>;
};

type CustomResultDocument = XmlDocument & {
  TopElem: CustomResultDocumentTopElem;
  custom_result: CustomResultDocumentTopElem;
  OnInit(): void;
};
