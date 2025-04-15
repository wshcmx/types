type PanelImportExcelStateDocumentTopElem = XmlTopElem & {
  Doc: PanelImportExcelStateDocument;
};

type PanelImportExcelStateDocument = XmlDocument & {
  TopElem: PanelImportExcelStateDocumentTopElem;
  panel_import_excel_state: PanelImportExcelStateDocumentTopElem;
};
