interface TutorDocumentPositionCommon {
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
}

interface TutorDocumentTypicalDevelopmentProgram {
  typical_development_program_id: XmlElem<number | null, TypicalDevelopmentProgramCatalogDocumentTopElem>;
}

interface TutorDocumentSubdivision {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
}

type TutorDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TutorDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип кадрового резерва */
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string, typeof common.tutor_status_types>;
  /** C даты */
  start_date: XmlElem<Date | null>;
  /** По дату */
  finish_date: XmlElem<Date | null>;
  /** Требуемые типы сертификатов */
  position_commons: XmlMultiElem<TutorDocumentPositionCommon | null>;
  /** Типовые программы развития */
  typical_development_programs: XmlMultiElem<TutorDocumentTypicalDevelopmentProgram | null>;
  /** Подразделения */
  subdivisions: XmlMultiElem<TutorDocumentSubdivision | null>;
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type TutorDocument = XmlDocument & {
  TopElem: TutorDocumentTopElem;
  tutor: TutorDocumentTopElem;
  DocDesc(): string;
};
