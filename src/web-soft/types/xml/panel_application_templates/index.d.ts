type PanelApplicationTemplatesDocumentTopElem = XmlTopElem & {
  Doc: PanelApplicationTemplatesDocument;
  report_id: XmlElem<string | null>;
  report_template_id: XmlElem<number | null>;
  report_template_url: XmlElem<string | null>;
  report_template_type: XmlElem<string | null>;
  report_template_name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
};

type PanelApplicationTemplatesDocument = XmlDocument & {
  TopElem: PanelApplicationTemplatesDocumentTopElem;
  panel_application_templates: PanelApplicationTemplatesDocumentTopElem;
};
