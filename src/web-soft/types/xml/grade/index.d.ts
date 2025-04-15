type GradeDocumentTopElem = XmlTopElem & {
  Doc: GradeDocument;
  id: XmlElem<number | null>;
  /** Уровень */
  level: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Минимальная зарплата */
  min_salary: XmlElem<number | null>;
  /** Максимальная зарплата */
  max_salary: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type GradeDocument = XmlDocument & {
  TopElem: GradeDocumentTopElem;
  grade: GradeDocumentTopElem;
  DocDesc(): string;
};
