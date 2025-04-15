interface AiccCrsDocumentCourse {
  course_id: XmlElem<string | null>;
  course_title: XmlElem<string | null>;
  version: XmlElem<string | null>;
}

interface AiccCrsDocumentCourseWindow {
  width: XmlElem<number | null>;
  height: XmlElem<number | null>;
}

type AiccCrCatalogDocumentTopElem = XmlTopElem & {
  course: XmlElem<AiccCrsDocumentCourse | null>;
  course_description: XmlElem<string | null>;
  course_window: XmlElem<AiccCrsDocumentCourseWindow | null>;
};
