type TalentPoolNominationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: TalentPoolNominationDocument;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type TalentPoolNominationDocument = XmlDocument & {
  TopElem: TalentPoolNominationDocumentTopElem;
  talent_pool_nomination: TalentPoolNominationDocumentTopElem;
  DocDesc(): string;
};
