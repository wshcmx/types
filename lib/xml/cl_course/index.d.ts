interface ClCourseDocumentModule {
  id: XmlElem<number | null, ClModuleCatalogDocumentTopElem>;
  /** @default 0 */
  path_id: XmlElem<string>;
  folder_id: XmlElem<number | null>;
}

interface ClCourseDocumentWindow {
  module_id: XmlElem<number | null, ClModuleCatalogDocumentTopElem>;
  zoom: XmlElem<number | null>;
  /** @default false */
  active: XmlElem<boolean>;
  slide_id: XmlElem<number | null, ClSlideCatalogDocumentTopElem>;
}

interface ClCourseDocumentFolder {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null>;
}

interface ClCourseDocumentAuthorType {
  type_id: XmlElem<number | null, typeof common.cl_author_types>;
}

interface ClCourseDocumentAuthor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  typecode(): number;
  types: XmlMultiElem<ClCourseDocumentAuthorType | null>;
  types_display(): boolean;
}

interface ClCourseDocumentRepositorium {
  repositorium_id: XmlElem<number | null, RepositoriumCatalogDocumentTopElem>;
}

interface ClCourseDocumentPlanTablePlanRow {
  id: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  plan_date: XmlElem<Date | null>;
  fact_date: XmlElem<Date | null>;
  /** @default 0 */
  completion: XmlElem<number>;
  name: XmlElem<string | null>;
  responsible_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  responsible_fullname: XmlElem<string | null>;
  description: XmlElem<string | null>;
  req_plan_row_id: XmlElem<string | null>;
}

interface ClCourseDocumentPlanTable {
  plan_row: XmlMultiElemObject<ClCourseDocumentPlanTablePlanRow | null>;
}

interface ClCourseDocumentAuxConst {
  code: XmlElem<string | null>;
  cl_const_id: XmlElem<number | null, ClConstCatalogDocumentTopElem>;
}

interface ClCourseDocumentViewNewAuthors {
  id: XmlMultiElemObject<number | null>;
}

interface ClCourseDocumentView extends DescBase {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  /** @temp */
  view_part_selector: XmlElem<number | null>;
  /** @temp */
  module_href: XmlElem<string | null>;
  /** @temp */
  module_view_selector: XmlElem<number | null>;
  /** @temp */
  new_authors: XmlElem<ClCourseDocumentViewNewAuthors | null>;
}

type ClCourseDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ClLocalizationsBase &
KnowledgePartsBase &
CustomElemsBase & {
  Doc: ClCourseDocument;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** @default 0 */
  state_id: XmlElem<number, typeof common.cl_states>;
  platform: XmlElem<string | null>;
  modules: XmlMultiElem<ClCourseDocumentModule | null>;
  windows: XmlMultiElem<ClCourseDocumentWindow | null>;
  folders: XmlMultiElem<ClCourseDocumentFolder | null>;
  authors: XmlMultiElem<ClCourseDocumentAuthor | null>;
  repositoriums: XmlMultiElem<ClCourseDocumentRepositorium | null>;
  plan_table: XmlElem<ClCourseDocumentPlanTable | null>;
  aux_consts: XmlMultiElem<ClCourseDocumentAuxConst | null>;
  /** Комментарий */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  module_href_get(): false | void;
  export_2_scorm(): false | void;
  fix_new_authors(): void;
};

type ClCourseDocument = XmlDocument & {
  TopElem: ClCourseDocumentTopElem;
  cl_course: ClCourseDocumentTopElem;
  DocDesc(): string;
};
