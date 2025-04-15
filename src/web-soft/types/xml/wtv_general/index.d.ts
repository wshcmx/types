type WtvGeneralDocumentTopElem = XmlTopElem & { Doc: WtvGeneralDocument } & {
};

type WtvGeneralDocument = XmlDocument & {
  TopElem: WtvGeneralDocumentTopElem;
};
