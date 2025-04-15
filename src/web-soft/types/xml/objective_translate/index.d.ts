interface ObjectiveTranslateDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type ObjectiveTranslateDocumentTopElem = XmlTopElem & {
  Doc: ObjectiveTranslateDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Транслирующий цель */
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
  /** Имя получателя */
  recipient_person_fullname: XmlElem<string | null>;
  /** Цель */
  recipient_objective_id: XmlElem<string | null>;
  /** Название цели */
  recipient_objective_name: XmlElem<string | null>;
  /** Анкета получателя */
  recipient_pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ObjectiveTranslateDocumentView | null>;
};

type ObjectiveTranslateDocument = XmlDocument & {
  TopElem: ObjectiveTranslateDocumentTopElem;
  objective_translate: ObjectiveTranslateDocumentTopElem;
  DocDesc(): string;
};
