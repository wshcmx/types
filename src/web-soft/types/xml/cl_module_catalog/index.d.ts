type ClModuleCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Курс CourseLab */
  cl_course_id: XmlElem<number | null, ClCourseCatalogDocumentTopElem>;
  /** Ссылка на файлы ресурсов объекта */
  resource_url: XmlElem<string | null>;
  /** Папка */
  category: XmlElem<string | null>;
  /** Категория */
  category_label: XmlElem<string | null>;
  /** Ширина слайда */
  slide_width: XmlElem<number | null>;
  /** Высота слайда */
  slide_height: XmlElem<number | null>;
  /** Является шаблоном */
  is_template: XmlElem<boolean | null>;
  /** Stamp */
  stamp: XmlElem<number | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
