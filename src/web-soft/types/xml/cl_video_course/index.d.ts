interface ClVideoCourseDocumentAuthor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface ClVideoCourseDocumentTempMediaFileLowresMediaFile {
  lowres_media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  size: XmlElem<string | null>;
}

interface ClVideoCourseDocumentTempMediaFile {
  media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Временный массив файлов */
  lowres_media_files: XmlMultiElem<ClVideoCourseDocumentTempMediaFileLowresMediaFile | null>;
}

interface ClVideoCourseDocumentFragmentLayerCoordinate {
  /** Верхний левый угол ( координата по X ) */
  top_left_x: XmlElem<number | null>;
  /** Верхний левый угол ( координата по Y ) */
  top_left_y: XmlElem<number | null>;
  /** Ширина */
  box_width: XmlElem<number | null>;
  /** Высота */
  box_height: XmlElem<number | null>;
}

interface ClVideoCourseDocumentFragmentLayerVideoScreenshot {
  video_screenshot_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Время */
  time: XmlElem<number | null>;
  /** Время (строка) */
  time_str: XmlElem<string | null>;
}

interface ClVideoCourseDocumentFragmentLayerSprite {
  /** Sprite для видео */
  sprite_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Количество столбцов */
  cells_count: XmlElem<number | null>;
  /** Количество строк */
  rows_count: XmlElem<number | null>;
  /** Ширина ячейки */
  cell_width: XmlElem<number | null>;
  /** Высота ячейки */
  cell_height: XmlElem<number | null>;
  /**
   * Шаг (сек)
   * @default 1
   */
  step: XmlElem<number | null>;
}

interface ClVideoCourseDocumentFragmentLayerTextBlock {
  /** Текст */
  text: XmlElem<string | null>;
  /** Текст в обертке для конвертера */
  text_html: XmlElem<string | null>;
  /** Шрифт */
  font: XmlElem<string | null>;
  /**
   * Размер шрифта
   * @default 18
   */
  font_size: XmlElem<number | null>;
  /** Выравнивание */
  align: XmlElem<string | null>;
  /** Верт. выравнивание */
  valign: XmlElem<string | null>;
  /** Цвет текста */
  color: XmlElem<string | null>;
  /** Цвет текста HEX+Opacity */
  color_html: XmlElem<string | null>;
  /**
   * Отбивка
   * @default 0
   */
  padding: XmlElem<number | null>;
}

interface ClVideoCourseDocumentFragmentLayer {
  id: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type_id: XmlElem<string | null, typeof common.layer_types>;
  /**
   * Начало (сек)
   * @default 0
   */
  start_second: XmlElem<number | null>;
  /** Конец (сек) */
  end_second: XmlElem<number | null>;
  /** Продолжительность */
  duration: XmlElem<number | null>;
  /**
   * Обрезать сначала (сек)
   * @default 0
   */
  crop_start: XmlElem<number | null>;
  /** Отрезать в конце (сек) */
  crop_end: XmlElem<number | null>;
  /** Координаты */
  coordinate: XmlElem<ClVideoCourseDocumentFragmentLayerCoordinate | null>;
  /** Временный массив файлов */
  video_screenshots: XmlMultiElem<ClVideoCourseDocumentFragmentLayerVideoScreenshot | null>;
  sprite: XmlElem<ClVideoCourseDocumentFragmentLayerSprite | null>;
  /** Исходная ширина */
  original_width: XmlElem<number | null>;
  /** Исходная высота */
  original_height: XmlElem<number | null>;
  /** Цвет фона */
  background_color: XmlElem<string | null>;
  /** Цвет фона HEX+Opacity */
  background_color_html: XmlElem<string | null>;
  /** Включить аудио */
  mute_audio: XmlElem<boolean | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Название ресурса */
  resource_name: XmlElem<string | null>;
  /** Рабочая копия */
  resource_draft_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Картинка-заставка */
  layer_poster_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Угол поворота
   * @default 0
   */
  angle_rotation: XmlElem<number | null>;
  /** Коэффициент сжатия */
  compression_ratio: XmlElem<number | null>;
  /** Цвет границы */
  border_color: XmlElem<string | null>;
  /** Цвет границы HEX+Opacity */
  border_color_html: XmlElem<string | null>;
  /** Толщина границы */
  border_width: XmlElem<number | null>;
  /** Текстовый блок */
  text_block: XmlElem<ClVideoCourseDocumentFragmentLayerTextBlock | null>;
}

interface ClVideoCourseDocumentFragment {
  id: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ширина */
  width: XmlElem<number | null>;
  /** Высота */
  height: XmlElem<number | null>;
  /** Картинка-заставка */
  poster_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Продолжительность */
  duration: XmlElem<number | null>;
  /** Время начала (сек) */
  start_time: XmlElem<number | null>;
  /** Тип перехода к следующему фрагменту */
  transition_type: XmlElem<string | null>;
  /** Слои */
  layers: XmlMultiElem<ClVideoCourseDocumentFragmentLayer | null>;
}

type ClVideoCourseDocumentTopElem = XmlTopElem & {
  Doc: ClVideoCourseDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Ширина рабочей области */
  course_width: XmlElem<number | null>;
  /** Высота рабочей области */
  course_height: XmlElem<number | null>;
  /** Max bitrate (kbps) */
  max_bitrate: XmlElem<number | null>;
  /** Формат вывода */
  output_format: XmlElem<string | null>;
  /** Авторы */
  authors: XmlMultiElem<ClVideoCourseDocumentAuthor | null>;
  /** Дата последней компиляции курса */
  last_compile_date: XmlElem<Date | null>;
  /** Результирующий медиа-файл */
  media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Упрощенный результирующий медиа-файл */
  lowres_media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Временный массив файлов */
  temp_media_files: XmlMultiElem<ClVideoCourseDocumentTempMediaFile | null>;
  /**
   * Фрагмент в работе
   * @default 0
   */
  current_fragment: XmlElem<number>;
  /**
   * Слой в работе
   * @default 0
   */
  current_layer: XmlElem<number>;
  /**
   * Позиция (сек)
   * @default 0
   */
  current_position: XmlElem<number>;
  /** Фрагменты */
  fragments: XmlMultiElem<ClVideoCourseDocumentFragment | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type ClVideoCourseDocument = XmlDocument & {
  TopElem: ClVideoCourseDocumentTopElem;
  cl_video_course: ClVideoCourseDocumentTopElem;
  DocDesc(): string;
};
