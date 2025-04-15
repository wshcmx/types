interface EducationProgramDocumentEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface EducationProgramDocumentView extends DescBase {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type EducationProgramDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationProgramDocument;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Учебные программы */
  education_methods: XmlMultiElem<EducationProgramDocumentEducationMethod | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<EducationProgramDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type EducationProgramDocument = XmlDocument & {
  TopElem: EducationProgramDocumentTopElem;
  education_program: EducationProgramDocumentTopElem;
  DocDesc(): string;
};
