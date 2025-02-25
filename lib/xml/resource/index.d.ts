interface ResourceDocumentLink {
  object_id: XmlElem<number | null>;
  object_catalog: XmlElem<string | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Дата модификации */
  date_modify: XmlElem<Date | null>;
}

interface ResourceDocumentPresentationSlideShapePoint {
  /** @default com.websoft.vclass.vo.graphics.shapes.Point */
  class: XmlElem<string | null>;
  x: XmlElem<string | null>;
  y: XmlElem<string | null>;
}

interface ResourceDocumentPresentationSlideShape {
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
  points: XmlMultiElem<ResourceDocumentPresentationSlideShapePoint | null>;
}

interface ResourceDocumentPresentationSlide {
  /** @default com.websoft.vclass.vo.presentation.Slide */
  class: XmlElem<string | null>;
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  number: XmlElem<number | null>;
  shapes: XmlMultiElem<ResourceDocumentPresentationSlideShape | null>;
}

interface ResourceDocumentPresentation {
  /** @default com.websoft.vclass.vo.presentation.Presentation */
  class: XmlElem<string | null>;
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  file_id: XmlElem<number | null>;
  current_slide_id: XmlElem<number | null>;
  slides: XmlMultiElem<ResourceDocumentPresentationSlide | null>;
}

interface ResourceDocumentFileUrl {
  id: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Путь ресурса */
  url: XmlElem<string | null>;
}

interface ResourceDocumentLastData {
  /** Имя файла */
  file_name: XmlElem<string | null>;
  /** Размер */
  size: XmlElem<number | null>;
}

interface ResourceDocumentViewEdit {
  /**
   * @temp
   * @default false
   */
  update_resource: XmlElem<boolean>;
  /**
   * @temp
   * @default true
   */
  can_edit_pict: XmlElem<boolean>;
  pic_path: XmlElem<string | null>;
  /** @temp */
  new_width: XmlElem<number | null>;
  /** @temp */
  new_height: XmlElem<number | null>;
  /**
   * @temp
   * @default true
   */
  proportional: XmlElem<boolean>;
}

interface ResourceDocumentView {
  /** @temp */
  edit: XmlElem<ResourceDocumentViewEdit | null>;
}

type ResourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CustomElemsBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
GameBonusBase & {
  Doc: ResourceDocument;
  /**
   * Тип ресурса
   * @default file
   */
  type: XmlElem<string, typeof common.resource_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.course_test_states>;
  /** Имя файла */
  file_name: XmlElem<string | null>;
  /**
   * Разрешить доступ с портала
   * @default true
   */
  allow_download: XmlElem<boolean | null>;
  /**
   * Разрешить скачивание файла без авторизации
   * @default false
   */
  allow_unauthorized_download: XmlElem<boolean | null>;
  /**
   * Разрешить поиск
   * @default false
   */
  allow_search: XmlElem<boolean | null>;
  data: XmlElem<Binary | null>;
  /** Путь ресурса */
  file_url: XmlElem<string | null>;
  /** Размер */
  size: XmlElem<number | null>;
  /**
   * Ссылок на ресурс
   * @default 0
   */
  use_count: XmlElem<number>;
  /** Владелец ресурса */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Источник */
  file_source: XmlElem<number | null, FileSourceCatalogDocumentTopElem>;
  /** Тип ресурса базы */
  resource_type_id: XmlElem<number | null, ResourceTypeCatalogDocumentTopElem>;
  file_path: XmlElem<string | null>;
  checksum: XmlElem<string | null>;
  /** Ссылки на ресурс в объектах */
  links: XmlMultiElem<ResourceDocumentLink | null>;
  presentation: XmlElem<ResourceDocumentPresentation | null>;
  /** Проигрыватель файлов */
  library_player_id: XmlElem<number | null, LibraryPlayerCatalogDocumentTopElem>;
  /** Дополнительные файлы */
  file_urls: XmlMultiElem<ResourceDocumentFileUrl | null>;
  /** Сохраненные данные */
  last_data: XmlElem<ResourceDocumentLastData | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ResourceDocumentView | null>;
  save_data(): unknown;
  get_temp_data(url: string): unknown;
  get_data(url: string): unknown;
  get_data_add(id: string, url: string): unknown;
  download(request: Object, response: Object): unknown;
  download_add(id: string, request: Object, response: Object): unknown;
  check_resource_double(fileName: string, size: number): unknown;
  put_data(url: string, source: unknown, filename: unknown): unknown;
  put_data_add(url: string, code: string): unknown;
  del_data_add(id: string): unknown;
  put_str(data: string, filename: unknown, source: unknown): unknown;
  add_counter(source: unknown): unknown;
  del_counter(source: unknown, sourceId: number): unknown;
  obtain_link(source: unknown): unknown;
  guess_type(fileUrl: string): unknown;
  set_data(): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type ResourceDocument = XmlDocument & {
  TopElem: ResourceDocumentTopElem;
  resource: ResourceDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
