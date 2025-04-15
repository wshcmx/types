interface PollDocumentReportViewer extends PersonFillingBase {
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface PollDocumentQuestionEntry {
  id: XmlElem<number | null>;
  /** Значение */
  value: XmlElem<string | null>;
  /** Вес */
  weight: XmlElem<number | null>;
  /** Цвет фона */
  bg_color: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
}

interface PollDocumentQuestionRowColumn {
  id: XmlElem<number | null>;
  value: XmlElem<string | null>;
  bg_color: XmlElem<string | null>;
}

interface PollDocumentQuestionRow {
  id: XmlElem<number | null>;
  value: XmlElem<string | null>;
  bg_color: XmlElem<string | null>;
  columns: XmlMultiElem<PollDocumentQuestionRowColumn | null>;
}

interface PollDocumentQuestion extends CustomElemsBase {
  /** @default com.websoft.vclass.vo.poll.Question */
  class: XmlElem<string | null>;
  id: XmlElem<number | null>;
  /**
   * Тип вопроса
   * @default choice
   */
  type: XmlElem<string, typeof common.poll_types>;
  /** Заголовок */
  title: XmlElem<string | null>;
  /**
   * Вопрос используется в таблице
   * @default false
   */
  is_in_table: XmlElem<boolean | null>;
  /**
   * Показывать заголовок
   * @default true
   */
  show_header: XmlElem<boolean | null>;
  /** Требует заполнения */
  required: XmlElem<boolean | null>;
  /** Тип объекта */
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Добавить комментарий */
  add_comment: XmlElem<boolean | null>;
  /** @default 0 */
  subtype: XmlElem<number>;
  /** Множественный выбор */
  is_multiple: XmlElem<boolean | null>;
  value_condition: XmlElem<string | null>;
  /**
   * Вопрос завершен
   * @default false
   */
  completed: XmlElem<boolean>;
  /** Картинка */
  image_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Варианты ответов */
  entries: XmlMultiElem<PollDocumentQuestionEntry | null>;
  rows: XmlMultiElem<PollDocumentQuestionRow | null>;
  /** @default false */
  is_current: XmlElem<boolean>;
  catalog_entry_id: XmlElem<number | null>;
}

interface PollDocumentItemRowColumn {
  id: XmlElem<string | null>;
  bg_color: XmlElem<string | null>;
  question_id: XmlElem<number | null>;
  value: XmlElem<string | null>;
  is_title: XmlElem<boolean | null>;
}

interface PollDocumentItemRow {
  id: XmlElem<string | null>;
  bg_color: XmlElem<string | null>;
  question_id: XmlElem<number | null>;
  value: XmlElem<string | null>;
  columns: XmlMultiElem<PollDocumentItemRowColumn | null>;
  is_title(): boolean;
}

interface PollDocumentItemCondition {
  id: XmlElem<string | null>;
  question_id: XmlElem<number | null>;
  entry_id: XmlElem<number | null>;
  /** @default || */
  and_or: XmlElem<string>;
}

interface PollDocumentItem {
  id: XmlElem<string | null>;
  /**
   * Тип представления
   * @default question
   */
  type: XmlElem<string, typeof common.poll_item_types>;
  title: XmlElem<string | null>;
  question_id: XmlElem<number | null>;
  /**
   * Требует заполнения
   * @default false
   */
  required: XmlElem<boolean>;
  /** Тип ресурса */
  resource_type: XmlElem<string | null, typeof common.resource_types>;
  /** Продолжительность (сек.) */
  max_duration: XmlElem<number | null>;
  /** Время на подготовку (сек.) */
  preparation_time: XmlElem<number | null>;
  /** Запретить просмотр своего ответа */
  prohibit_viewing: XmlElem<boolean | null>;
  /** Запретить перезапись */
  prohibit_overwriting: XmlElem<boolean | null>;
  rows: XmlMultiElem<PollDocumentItemRow | null>;
  conditions: XmlMultiElem<PollDocumentItemCondition | null>;
}

interface PollDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type PollDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CourseExpertsBase &
CustomElemsBase &
AdminAccessBase &
ProctoringBase &
GameBonusBase &
KnowledgePartsBase & {
  Doc: PollDocument;
  /** @default com.websoft.vclass.vo.poll.Poll */
  class: XmlElem<string | null>;
  poll_id: XmlElem<number | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  end_date: XmlElem<Date | null>;
  /**
   * Опрос завершен
   * @default false
   */
  completed: XmlElem<boolean>;
  /**
   * Основной опрос
   * @default false
   */
  is_main: XmlElem<boolean>;
  /**
   * Возможность голосовать только один раз
   * @default false
   */
  is_one_time: XmlElem<boolean>;
  /**
   * Анонимный опрос
   * @default false
   */
  is_anonymous: XmlElem<boolean>;
  /**
   * Показывать отчет по итогам опроса
   * @default false
   */
  show_report: XmlElem<boolean>;
  /** @default false */
  show_comments_in_report: XmlElem<boolean>;
  report_viewers: XmlMultiElem<PollDocumentReportViewer | null>;
  /** @default false */
  is_multiple_select: XmlElem<boolean>;
  /**
   * Количество колонок
   * @default 1
   */
  columns_num: XmlElem<number>;
  /** Вопросы */
  questions: XmlMultiElem<PollDocumentQuestion | null>;
  items: XmlMultiElem<PollDocumentItem | null>;
  /** Разрешить пользователям удалять свои результаты опросов */
  allow_delete_poll_result: XmlElem<boolean | null>;
  /** Сообщение при завершении */
  complete_message: XmlElem<string | null>;
  /** Шаблоны визуальных настроек */
  view_templates: XmlElem<MsViewTemplatesBase | null>;
  adaptive_mode(): unknown;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  complete_massege: XmlElem<string | null>;
  /** Программный код обработки результатов опроса */
  processing_code: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<PollDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  get_report_data(): unknown;
  set_question_id(fldQuestionIdTarget: unknown, fldItem: unknown, itemType: string, isNew: boolean): unknown;
  set_value(fldValueTarget: unknown): boolean;
};

type PollDocument = XmlDocument & {
  TopElem: PollDocumentTopElem;
  poll: PollDocumentTopElem;
  OnInit(): void;
  OnCreate(): void;
  DocDesc(): string;
};
