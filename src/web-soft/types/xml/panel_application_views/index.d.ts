type PanelApplicationViewsDocumentTopElem = XmlTopElem & {
  Doc: PanelApplicationViewsDocument;
  view_configuration_id: XmlElem<number | null, ViewConfigurationCatalogDocumentTopElem>;
};

type PanelApplicationViewsDocument = XmlDocument & {
  TopElem: PanelApplicationViewsDocumentTopElem;
  panel_application_views: PanelApplicationViewsDocumentTopElem;
};
