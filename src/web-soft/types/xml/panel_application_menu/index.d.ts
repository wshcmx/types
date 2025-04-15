interface PanelApplicationMenuDocumentApplicationMenu {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  color: XmlElem<string | null>;
}

type PanelApplicationMenuDocumentTopElem = XmlTopElem & {
  Doc: PanelApplicationMenuDocument;
  application_menus: XmlMultiElem<PanelApplicationMenuDocumentApplicationMenu | null>;
};

type PanelApplicationMenuDocument = XmlDocument & {
  TopElem: PanelApplicationMenuDocumentTopElem;
  panel_application_menu: PanelApplicationMenuDocumentTopElem;
};
