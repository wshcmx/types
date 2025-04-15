interface UnfoldedContentBaseContentContentContentContent {
  id(): string;
  number: XmlElem<number | null>;
  title: XmlElem<string | null>;
}

interface UnfoldedContentBaseContentContentContent {
  id(): string;
  number: XmlElem<number | null>;
  title: XmlElem<string | null>;
  contents: XmlMultiElem<UnfoldedContentBaseContentContentContentContent | null>;
}

interface UnfoldedContentBaseContentContent {
  id(): string;
  number: XmlElem<number | null>;
  title: XmlElem<string | null>;
  contents: XmlMultiElem<UnfoldedContentBaseContentContentContent | null>;
}

interface UnfoldedContentBaseContent {
  id(): string;
  number: XmlElem<number | null>;
  title: XmlElem<string | null>;
  contents: XmlMultiElem<UnfoldedContentBaseContentContent | null>;
}

interface UnfoldedContentBase {
  contents: XmlMultiElem<UnfoldedContentBaseContent | null>;
}

interface UnfoldedDocumentBaseUnfoldedDocumentPage {
  page_id: XmlElem<string | null>;
  url: XmlElem<string | null>;
  /** Имя */
  name: XmlElem<string | null>;
}

interface UnfoldedDocumentBaseUnfoldedDocument extends UnfoldedContentBase {
  title: XmlElem<string | null>;
  orientation: XmlElem<string | null>;
  width: XmlElem<number | null>;
  height: XmlElem<number | null>;
  show_contents: XmlElem<boolean>;
  base_url: XmlElem<string | null>;
  pages: XmlMultiElem<UnfoldedDocumentBaseUnfoldedDocumentPage | null>;
}

interface UnfoldedDocumentBase {
  unfolded_document: XmlElem<UnfoldedDocumentBaseUnfoldedDocument | null>;
}

interface UnfoldedDocumentBasePage {
  page_id: XmlElem<string | null>;
  url: XmlElem<string | null>;
  /** Имя */
  name: XmlElem<string | null>;
}

interface LibraryMaterialDocumentLibraryMaterialFormat {
  library_material_format_id: XmlElem<number | null, LibraryMaterialFormatCatalogDocumentTopElem>;
  number: XmlElem<number | null>;
}

interface LibraryMaterialDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
}

interface LibraryMaterialDocumentSubscribedPerson {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
}

interface LibraryMaterialDocumentPathSection {
  id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
}

type LibraryMaterialDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
UnfoldedDocumentBase &
CatalogListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
GameBonusBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: LibraryMaterialDocument;
  access: XmlElem<AccessDocBase | null>;
  /** Автор */
  author: XmlElem<string | null>;
  publisher: XmlElem<string | null>;
  /** Раздел библиотеки */
  section_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  library_system_id: XmlElem<number | null, LibrarySystemCatalogDocumentTopElem>;
  /** Номер */
  number: XmlElem<string | null>;
  /** Вид */
  library_material_type_id: XmlElem<number | null, LibraryMaterialTypeCatalogDocumentTopElem>;
  library_material_formats: XmlMultiElem<LibraryMaterialDocumentLibraryMaterialFormat | null>;
  /** Год издания */
  year: XmlElem<number | null>;
  isbn: XmlElem<string | null>;
  /** Состояние */
  state_id: XmlElem<number, typeof common.library_states>;
  /** Файл */
  file_name: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Видео сконвертировано для просмотра онлайн */
  online_video_prepared: XmlElem<boolean>;
  /** Формат */
  use_old_format: XmlElem<boolean>;
  /** Качество видео */
  online_video_quality: XmlElem<string | null>;
  /** Разрешить скачивание файла */
  allow_download: XmlElem<boolean>;
  /** Разрешить самостоятельный просмотр материала */
  allow_self_viewing: XmlElem<boolean>;
  /** Разрешить самостоятельный просмотр материала */
  image: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Аннотация */
  description: XmlElem<string | null>;
  /** Содержание */
  contents: XmlElem<string | null>;
  /** Новым отзывам требуется подтверждение администратора */
  is_need_admin_approval: XmlElem<boolean>;
  /** Закрыт для новых отзывов */
  is_closed: XmlElem<boolean>;
  groups: XmlMultiElem<LibraryMaterialDocumentGroup | null>;
  external_id: XmlElem<string | null>;
  subscribed_persons: XmlMultiElem<LibraryMaterialDocumentSubscribedPerson | null>;
  /** Тип отзыва по умолчанию */
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  /** Обязательное заполнение отзыва */
  mandatory_fill_response: XmlElem<boolean>;
  old_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  path_sections: XmlMultiElem<LibraryMaterialDocumentPathSection | null>;
  filling_path_sections(): unknown;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type LibraryMaterialDocument = XmlDocument & {
  TopElem: LibraryMaterialDocumentTopElem;
  library_material: LibraryMaterialDocumentTopElem;
  DocDesc(): string;
};
