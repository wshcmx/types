interface ClassificationModelDocumentClassificationsBlockClassificationParamsBlock extends WebVariablesBase {
  /**
   * Использовать базовые переменные
   * @default true
   */
  use_default: XmlElem<boolean>;
}

interface ClassificationModelDocumentClassificationsBlockClassification extends MsCodeLibraryConditionBase {
  id: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Родительская классификация */
  parent_classification_id: XmlElem<string | null>;
  /** Способ обработки */
  processing_method: XmlElem<string | null, typeof common.processing_methods>;
  /**
   * Тип (роль/)
   * @default classification
   */
  type: XmlElem<string | null>;
  /** Функция обработки */
  processing_function: XmlElem<string | null>;
  /** Выражения */
  expressions_file_url: XmlElem<string | null>;
  /** Возможные ответы */
  answers_file_url: XmlElem<string | null>;
  params_block: XmlElem<ClassificationModelDocumentClassificationsBlockClassificationParamsBlock | null>;
  /** AI модель */
  ai_model_id: XmlElem<number | null, AiModelCatalogDocumentTopElem>;
  /** Модель токенизации */
  tokenize_model_id: XmlElem<number | null, AiModelCatalogDocumentTopElem>;
  /** @default false */
  is_std: XmlElem<boolean>;
}

interface ClassificationModelDocumentClassificationsBlock {
  /** Список классификаторов */
  classifications: XmlMultiElem<ClassificationModelDocumentClassificationsBlockClassification | null>;
}

interface ClassificationModelDocumentView {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  /** @temp */
  object_param_id: XmlElem<number | null>;
  /** @temp */
  base_object_type: XmlElem<string | null>;
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type ClassificationModelDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: ClassificationModelDocument;
  /** Требуемая вероятность классификации */
  required_probability: XmlElem<number | null>;
  /** Библиотека модели */
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Библиотека обработки классификаторов */
  processing_code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Модель токенизации */
  tokenize_model_id: XmlElem<number | null, AiModelCatalogDocumentTopElem>;
  classifications_block: XmlElem<ClassificationModelDocumentClassificationsBlock | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<ClassificationModelDocumentView | null>;
};

type ClassificationModelDocument = XmlDocument & {
  TopElem: ClassificationModelDocumentTopElem;
  classification_model: ClassificationModelDocumentTopElem;
  OnCreate(): void;
  DocDesc(): string;
};
