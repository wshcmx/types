interface EstaffEventTypeDocumentPositionCommon {
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
}

interface EstaffEventTypeDocumentEventType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface EstaffEventTypeDocumentCompletionSign {
  id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
}

interface EstaffEventTypeDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type EstaffEventTypeDocumentTopElem = XmlTopElem &
WebVariablesBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: EstaffEventTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null>;
  /** Семействa должностей */
  position_commons: XmlMultiElem<EstaffEventTypeDocumentPositionCommon | null>;
  event_types: XmlMultiElem<EstaffEventTypeDocumentEventType | null>;
  completion_signs: XmlMultiElem<EstaffEventTypeDocumentCompletionSign | null>;
  /** Тип события E-Staff */
  event_type_estaff_id: XmlElem<string | null>;
  event_type_estaff_name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Система подбора персонала */
  recruitment_system_id: XmlElem<number | null, RecruitmentSystemCatalogDocumentTopElem>;
  /** Условие видимости */
  visibility_condition: XmlElem<string | null>;
  /** Условие видимости */
  run_visibility_condition_url: XmlElem<string | null>;
  /** Действие при наступлении события */
  action_event_occurs: XmlElem<string | null>;
  /** Действие при наступлении события */
  run_action_event_occurs_url: XmlElem<string | null>;
  /** Проверка при обработке события */
  check_event_processing: XmlElem<string | null>;
  /** Проверка при обработке события */
  run_check_event_processing_url: XmlElem<string | null>;
  eval_action_event_occurs(estaffEventId: number, personId: number, objectId: number, candIdateEId: number, vacancyEId: number, recruterId: number): unknown;
  eval_check_event_process(estaffEventId: number, personId: number, objectId: number, url: string, action: string, estaffEventStatus: string, source: unknown): unknown;
  eval_visibility_condition(estaffEventId: number, personId: number, curUserId: number, objectId: number): unknown;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<EstaffEventTypeDocumentView | null>;
};

type EstaffEventTypeDocument = XmlDocument & {
  TopElem: EstaffEventTypeDocumentTopElem;
  estaff_event_type: EstaffEventTypeDocumentTopElem;
  DocDesc(): string;
};
