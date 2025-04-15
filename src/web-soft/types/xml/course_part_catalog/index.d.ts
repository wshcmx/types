type CoursePartCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код курса */
  code: XmlElem<string | null>;
  /** Название курса */
  name: XmlElem<string | null>;
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  part_code: XmlElem<string | null>;
  /** Родительский раздел */
  parent_part_code: XmlElem<string | null>;
  part_name: XmlElem<string | null>;
  /** Тип раздела */
  part_type: XmlElem<string, typeof common.course_part_types>;
  /** Учебный модуль */
  course_module_id: XmlElem<number | null, CourseModuleCatalogDocumentTopElem>;
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  /** Учебная активность */
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
