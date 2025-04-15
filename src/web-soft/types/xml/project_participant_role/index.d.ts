type ProjectParticipantRoleDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
KnowledgePartsBase & {
  Doc: ProjectParticipantRoleDocument;
  /** Проект */
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  /** Количество участников */
  participant_num: XmlElem<number | null>;
  /** Продукт/услуга(CRM) */
  provider_id: XmlElem<number | null, ProviderCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type ProjectParticipantRoleDocument = XmlDocument & {
  TopElem: ProjectParticipantRoleDocumentTopElem;
  project_participant_role: ProjectParticipantRoleDocumentTopElem;
  DocDesc(): string;
};
