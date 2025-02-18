interface PresentationDocumentSlideShapePoint {
  /** @default com.websoft.vclass.vo.graphics.shapes.Point */
  class: XmlElem<string | null>;
  x: XmlElem<string | null>;
  y: XmlElem<string | null>;
}

interface PresentationDocumentSlideShape {
  /** @default com.websoft.vclass.vo.graphics.shapes.Shape */
  class: XmlElem<string | null>;
  shapeClassName: XmlElem<string | null>;
  id: XmlElem<string | null>;
  roomID: XmlElem<string | null>;
  presentationId: XmlElem<string | null>;
  pageID: XmlElem<string | null>;
  ownerId: XmlElem<string | null>;
  ownerName: XmlElem<string | null>;
  type: XmlElem<string | null>;
  x: XmlElem<string | null>;
  y: XmlElem<string | null>;
  width: XmlElem<string | null>;
  height: XmlElem<string | null>;
  lineWidth: XmlElem<number | null>;
  fillStartColor: XmlElem<number | null>;
  fillEndColor: XmlElem<number | null>;
  useGradient: XmlElem<boolean | null>;
  lineColor: XmlElem<number | null>;
  opacity: XmlElem<string | null>;
  rotation: XmlElem<string | null>;
  text: XmlElem<string | null>;
  source: XmlElem<string | null>;
  fileID: XmlElem<string | null>;
  resourceID: XmlElem<string | null>;
  quality: XmlElem<string | null>;
  position: XmlElem<number | null>;
  playing: XmlElem<boolean | null>;
  lastPlayingTime: XmlElem<number | null>;
  points: XmlMultiElem<PresentationDocumentSlideShapePoint | null>;
}

interface PresentationDocumentSlide {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  number: XmlElem<string | null>;
  shapes: XmlMultiElem<PresentationDocumentSlideShape | null>;
}

type PresentationDocumentTopElem = XmlTopElem & {
  Doc: PresentationDocument;
  /** @default com.websoft.vclass.vo.presentation.Presentation */
  class: XmlElem<string | null>;
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  current_slide_id: XmlElem<string | null>;
  file_id: XmlElem<number | null>;
  roomID: XmlElem<string | null>;
  slides: XmlMultiElem<PresentationDocumentSlide | null>;
};

type PresentationDocument = XmlDocument & {
  TopElem: PresentationDocumentTopElem;
  presentation: PresentationDocumentTopElem;
};
