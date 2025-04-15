interface ApplicationDocumentAccessBlock {
  /** Модуль */
  id: XmlElem<string | null, typeof common.access_block_types>;
  /**
   * Чтение
   * @default true
   */
  can_read: XmlElem<boolean | null>;
  /**
   * Запись
   * @default true
   */
  can_write: XmlElem<boolean | null>;
  /**
   * Удаление
   * @default true
   */
  can_delete: XmlElem<boolean | null>;
  /** Уровень */
  access_level_id: XmlElem<number | null>;
}

interface ApplicationDocumentAccessLevel {
  /** Уровень */
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
}

interface ApplicationDocumentViewConfigurationAccessLevel {
  /** Уровень */
  access_level_id: XmlElem<number | null>;
  /** @default false */
  can_create_roles: XmlElem<boolean | null>;
  /** @default false */
  can_create_root_roles: XmlElem<boolean | null>;
  /** @default false */
  can_edit_roles: XmlElem<boolean | null>;
  /** @default false */
  can_delete_roles: XmlElem<boolean | null>;
  /** @default false */
  can_move_to_role: XmlElem<boolean | null>;
  /** @default false */
  can_exclude_from_role: XmlElem<boolean | null>;
}

interface ApplicationDocumentViewConfigurationRemoteAction {
  id: XmlElem<string | null>;
}

interface ApplicationDocumentViewConfigurationApplicationUnitItem {
  id: XmlElem<string | null>;
  parent_id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  list_object_id: XmlElem<string | null>;
  color: XmlElem<string | null>;
  image_url: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  is_dialog: XmlElem<boolean | null>;
  view_type: XmlElem<string | null>;
}

interface ApplicationDocumentViewConfigurationApplicationUnit {
  id: XmlElem<string | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  items: XmlMultiElem<ApplicationDocumentViewConfigurationApplicationUnitItem | null>;
}

interface ApplicationDocumentViewConfigurationApiFilter {
  id: XmlElem<string | null>;
  /** Заголовок */
  title: XmlElem<string | null>;
}

interface ApplicationDocumentViewConfiguration extends WebVariablesBase {
  id: XmlElem<string | null>;
  view_configuration_id: XmlElem<number | null, ViewConfigurationCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  /** @default false */
  disp_role_selector: XmlElem<boolean | null>;
  /** @default false */
  can_create_roles: XmlElem<boolean | null>;
  /** @default false */
  config_set: XmlElem<boolean | null>;
  /** Уровни доступа */
  access_levels: XmlMultiElem<ApplicationDocumentViewConfigurationAccessLevel | null>;
  /**
   * Свое меню
   * @default false
   */
  is_custom_menu: XmlElem<boolean | null>;
  /** Действия */
  remote_actions: XmlMultiElem<ApplicationDocumentViewConfigurationRemoteAction | null>;
  /**
   * Настраиваемая панель кнопок
   * @default false
   */
  is_custom_panel: XmlElem<boolean | null>;
  application_unit: XmlElem<ApplicationDocumentViewConfigurationApplicationUnit | null>;
  /**
   * Настраиваемые фмльтры из выборки
   * @default false
   */
  is_custom_filters: XmlElem<boolean | null>;
  /** Фильтры */
  api_filters: XmlMultiElem<ApplicationDocumentViewConfigurationApiFilter | null>;
}

interface ApplicationDocumentRemoteActionAccessLevel {
  /** Уровень */
  access_level_id: XmlElem<number | null>;
}

interface ApplicationDocumentRemoteAction extends WebVariablesBase {
  id: XmlElem<string | null>;
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  /** Уровни доступа */
  access_levels: XmlMultiElem<ApplicationDocumentRemoteActionAccessLevel | null>;
  menu_id: XmlElem<string | null>;
  /**
   * Все каталоги
   * @default false
   */
  ignore_catalog: XmlElem<boolean>;
}

interface ApplicationDocumentReportTemplateAccessLevel {
  /** Уровень */
  access_level_id: XmlElem<number | null>;
}

interface ApplicationDocumentReportTemplate extends WebVariablesBase {
  id: XmlElem<string | null>;
  report_template_id: XmlElem<number | null>;
  report_template_url: XmlElem<string | null>;
  /** @default system_report */
  report_template_type: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  /** Уровни доступа */
  access_levels: XmlMultiElem<ApplicationDocumentReportTemplateAccessLevel | null>;
}

interface ApplicationDocumentActionMenu {
  id: XmlElem<string | null>;
  title: XmlElem<string | null>;
  image_url: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
}

interface ApplicationDocumentApplicationMenu {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  color: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  image_url: XmlElem<string | null>;
  is_dialog: XmlElem<boolean | null>;
}

interface ApplicationDocumentApplicationUnitItem {
  id: XmlElem<string | null>;
  parent_id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  list_object_id: XmlElem<string | null>;
  color: XmlElem<string | null>;
  image_url: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  is_dialog: XmlElem<boolean | null>;
  view_type: XmlElem<string | null>;
}

interface ApplicationDocumentApplicationUnit {
  id: XmlElem<string | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  items: XmlMultiElem<ApplicationDocumentApplicationUnitItem | null>;
}

interface ApplicationDocumentLibraryAccessObjectClaim {
  /** Уровень */
  access_level_id: XmlElem<number | null>;
  /** Библиотека */
  object_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Метод */
  element_code: XmlElem<string | null>;
}

interface ApplicationDocumentLibraryAccess {
  object_claims: XmlMultiElem<ApplicationDocumentLibraryAccessObjectClaim | null>;
}

interface ApplicationDocumentView extends DescBase {
  file_url: XmlElem<string | null>;
  file_name: XmlElem<string | null>;
  file_size: XmlElem<number | null>;
  run_code: XmlElem<string | null>;
  unit_item_id: XmlElem<string | null>;
}

type ApplicationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebVariablesBase &
FuncManagersBase &
CatalogListBase & {
  Doc: ApplicationDocument;
  /**
   * Тип
   * @default universal
   */
  type: XmlElem<string, typeof common.application_types>;
  /** Тип отображения */
  disp_type: XmlElem<string | null>;
  /**
   * Использовать процессы
   * @default false
   */
  use_instances: XmlElem<boolean>;
  /** Версия */
  version: XmlElem<string | null>;
  /** Предыдущая версия */
  prev_version: XmlElem<string | null>;
  /** Версия */
  server_version: XmlElem<string | null>;
  /** Вендор */
  vendor: XmlElem<string | null>;
  /** Библиотека */
  vendor_library: XmlElem<string | null>;
  /** Дата релиза */
  release_date: XmlElem<Date | null>;
  /** Тип лицензии */
  lic_type: XmlElem<string | null>;
  /** Форма списка */
  list_xms_url: XmlElem<string | null>;
  /** Форма страницы по умолчанию */
  default_xms_url: XmlElem<string | null>;
  /** Ссылка на файл библиотеки функций */
  library_url: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  instance: XmlElem<WebVariablesBase | null>;
  /** Модули */
  access_blocks: XmlMultiElem<ApplicationDocumentAccessBlock | null>;
  /** Уровни доступа */
  access_levels: XmlMultiElem<ApplicationDocumentAccessLevel | null>;
  /** Представления */
  view_configurations: XmlMultiElem<ApplicationDocumentViewConfiguration | null>;
  /** Действия */
  remote_actions: XmlMultiElem<ApplicationDocumentRemoteAction | null>;
  /** Отчеты */
  report_templates: XmlMultiElem<ApplicationDocumentReportTemplate | null>;
  action_menus: XmlMultiElem<ApplicationDocumentActionMenu | null>;
  application_menus: XmlMultiElem<ApplicationDocumentApplicationMenu | null>;
  application_units: XmlMultiElem<ApplicationDocumentApplicationUnit | null>;
  library_access: XmlElem<ApplicationDocumentLibraryAccess | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Тип страницы */
  web_mode_id: XmlMultiElemObject<number | null, WebModeCatalogDocumentTopElem>;
  /** @temp */
  view: XmlElem<ApplicationDocumentView | null>;
};

type ApplicationDocument = XmlDocument & {
  TopElem: ApplicationDocumentTopElem;
  application: ApplicationDocumentTopElem;
  DocDesc(): string;
  OnSave(): void;
};
