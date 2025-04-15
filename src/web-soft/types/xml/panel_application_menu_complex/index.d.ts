interface PanelApplicationMenuComplexDocumentApplicationMenu {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  color: XmlElem<string | null>;
}

type PanelApplicationMenuComplexDocumentTopElem = XmlTopElem & {
  Doc: PanelApplicationMenuComplexDocument;
  application_menus: XmlMultiElem<PanelApplicationMenuComplexDocumentApplicationMenu | null>;
};

type PanelApplicationMenuComplexDocument = XmlDocument & {
  TopElem: PanelApplicationMenuComplexDocumentTopElem;
  panel_application_menu_complex: PanelApplicationMenuComplexDocumentTopElem;
};
