type ObjectiveTranslateCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Кто транслирует */
  translator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Имя транслирующего */
  translator_person_fullname: XmlElem<string | null>;
  /** Транслируемая цель */
  translator_objective_id: XmlElem<string | null>;
  /** Название транслируемой цели */
  translator_objective_name: XmlElem<string | null>;
  /** Анкета транслирующего */
  translator_pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  /** Кому транслируется */
  recipient_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Цель */
  recipient_objective_id: XmlElem<string | null>;
  /** Название цели */
  recipient_objective_name: XmlElem<string | null>;
  /** Анкета */
  recipient_pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  /** Имя получателя */
  recipient_person_fullname: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
