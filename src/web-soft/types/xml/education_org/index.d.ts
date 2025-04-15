interface EducationOrgDocumentContact {
  contact_id: XmlElem<number | null>;
  /**
   * Является основным
   * @default false
   */
  main: XmlElem<boolean | null>;
  /** ФИО */
  contact_fullname: XmlElem<string | null>;
  /** Должность */
  contact_position: XmlElem<string | null>;
  /** Рабочий телефон */
  telephone_work: XmlElem<string | null>;
  /** Мобильный телефон */
  telephone_mobile: XmlElem<string | null>;
  /** Факс */
  fax: XmlElem<string | null>;
  email: XmlElem<string | null>;
  web: XmlElem<string | null>;
  /** Фото */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
}

interface EducationOrgDocumentPlace {
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Название */
  place_name: XmlElem<string | null>;
  place_parent_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Родительское расположение */
  place_parent_name: XmlElem<string | null>;
  /** Адрес */
  address: XmlElem<string | null>;
}

interface EducationOrgDocumentEducationOrg {
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
}

interface EducationOrgDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type EducationOrgDocumentTopElem = XmlTopElem &
OrgBase &
LectorsBase &
CustomElemsBase &
AdminAccessBase &
FuncManagersBase & {
  Doc: EducationOrgDocument;
  /**
   * Является поставщиком электронных курсов
   * @default 0
   */
  is_provider_courses: XmlElem<boolean>;
  /** Тип провайдера курсов */
  provider_course_type_id: XmlElem<number | null, ProviderCourseTypeCatalogDocumentTopElem>;
  /** Ссылка на файл библиотеки функций */
  library_url: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  /** Контактные лица */
  contacts: XmlMultiElem<EducationOrgDocumentContact | null>;
  /** Группы */
  places: XmlMultiElem<EducationOrgDocumentPlace | null>;
  /** Обучающие организации */
  education_orgs: XmlMultiElem<EducationOrgDocumentEducationOrg | null>;
  /** @temp */
  view: XmlElem<EducationOrgDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type EducationOrgDocument = XmlDocument & {
  TopElem: EducationOrgDocumentTopElem;
  education_org: EducationOrgDocumentTopElem;
  DocDesc(): string;
};
