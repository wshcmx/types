declare namespace tools_library {
  function string_is_null_or_empty(string: string): unknown;
  function get_source_types(fileUrl: string, commonFileType: string): unknown;
  function import_resource_by_source_type(sourceTypeId: number, resourceId: number, libraryMaterialId: number, auxName: string): unknown;
  function import_file_by_source_type(sourceTypeId: number, fileUrl: string, libraryMaterialId: number, auxName: string): unknown;
  function word_to_html(fileUrl: string, useCutter: boolean, setTags: boolean): unknown;
  function pdf_to_html(fileUrl: string, useCutter: boolean, setTags: boolean): unknown;
  function convert_to_simple_html(htmlText: string, sourceFile: string, applyGlobalCutter: boolean, setTags: boolean): unknown;
  function get_article_html(articleId: number, articleTopElem: XmlTopElem, flush: boolean): unknown;
  function heal_html(partProcess: string, objRegExpRef: unknown): unknown;
  function slice_pages(symbolLength: number, fatText: string): unknown;
  function slice_by_global_cutter(fatHtml: string): unknown;
  function get_styles(html: string, path: string): unknown;
  function unravel_class(className: string, tagName: string, classes: string): unknown;
  function preprocess_html(aHtmlParts: unknown): unknown;
  function ui_pack_import(): unknown;
  function old_import_book_from_word(bookId: number, fileUrl: string): unknown;
  function GetLibraryObjectsList(rootId: number, personId: number, session: Session, sectionSortField: string, curLngId: string, addAll: unknown, extrafields: unknown): unknown;
  function convert_pdf_libratry_material(materialId: number): unknown;
  function check_cmi5_support(objectId: number): unknown;
  function append_path(folder: string, path: string): unknown;
  function convert_mp4_to_m3u(srcResId: number): unknown;
  let KurentoClient: XmlElem<unknown | null>;
}
