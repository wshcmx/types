type ScreenItem = {
  /**
   * Работает только для элементов типа SELECTOR, и возвращает элемент, который в этот SELECTOR сейчас загружен.
   */
  ActiveElem: ScreenItem;

  /**
   * Возвращает объект, содрежащий экранное окружение для данного элемента.
   * Экранное окружение содрежит переменные всех LOOP, внутри которых данный элемент не находится.
   * Используется, например, для определения, к какому элементу относится выделенная строка в списке.
   * @example curElem = List.SelRow.Env.ListElem;
   */
  Env: XmlElem<unknown>;

  /**
   * Узкоспециализированный, редко используемый атрибут.
   * Возвращает true, если у экранного элемента в форме описаны CHECK-VALUE-ACTION или SET-VALUE-ACTION, и false, если нет.
   * Используется для построения сложных элементов управления, например object_selector, где нужно решить,
   * делать или не делать обновление экрана.
   */
  HasSetValueAction: boolean;

  /**
   * Возвращает url картинки, определенной в том или ином элементе экрана.
   * @example <ROW IMAGE-URL-EXPR="ListElem.ImageUrl" DELETE-ACTION="">
   */
  ImageUrl: string;

  /**
   * Возвращает true, если ENABLE-EXPR возрващает true, и false - если нет.
   * Если атрибута ENABLE-EXPR нет у данного элемента, то IsEnabled всегда возвращает true.
   * @example
   * ```
   * <EDIT SOURCE="Ps" ENABLE-EXPR="GetSampleItem().IsEnabled" DIR-PATH="1"/>
   * <EDIT SOURCE="Ps.length" WIDTH="6zr" UPDATE-ACTION="Parent.ExecUpdateAction();" ENABLE-EXPR="Parent.IsEnabled"/>
   * ```
   */
  IsEnabled: boolean;

  /**
   * Работает только для элемента типа LOOP, и возвращает массив элементов, который используется для организации цикла.
   * Массив, который вычисляется в атрибуте EXPR.
   */
  LoopArray: unknown[];

  /**
   * Возвращает имя (NAME) элемента.
   */
  Name: string;

  /**
   * Родительский элемент данного элемента экрана.
   */
  Parent: ScreenItem | typeof Screen;

  /**
   * Возвращает корневой объект элемента экрана.
   */
  Ps: XmElem<unknown>;

  /**
   * Узкоспециализированный, редко используемый атрибут.
   */
  PsStrict: unknown;

  /**
   * Возвращает экран, к которому относится данный элемент.
   */
  Screen: typeof Screen;

  /**
   * Возвращает источник (SOURCE) элемента.
   */
  Source: unknown;

  /**
   * Возвращает описание местоположения элемента экранной формы данного элемента экрана в исходном коде, например "x-app://rcr/vacancy.xms, line 218".
   * Обычно используется в отладочных целях, либо для выдачи сообщения об ошибке.
   */
  SourceDesc: string;

  /**
   * Возвращает заголовок (LABEL-TITLE или LABEL-TITLE-EXPR) элемента.
   */
  Title: string;

  /**
   * Возваращает тип (TYPE) элемента.
   */
  Type: string;

  /**
   * Вызывает принудительное выполнение кода, описанного у элемента в атрибуте UPDATE-ACTION.
   */
  ExecUpdateAction(): unknown;

  /**
   * Находит вышестоящий элемент (любого уровня) с заданным типом. Если такого элемента нет - возвращется undefined.
   * @param {string} strType - Тип элемента.
   */
  FindOptUpperItemByType(strType: string): ScreenItem | undefined;

  /**
   * Возвращает подчиненный элемент (любого уровня вложенности) с указанным именем.
   * Если элемент не найден - возвращается ошибка.
   * @param {string} itemName - Наименование элемента.
   * @returns {ScreenItem} - Элемент экрана.
   */
  FindSubItem(itemName: string): ScreenItem | never;

  /**
   * @experimental
   * Экспериментальный метод.
   */
  FindSubItemByKey(): unknown;

  /**
   * Возвращает подчиненный элемент (любого уровня вложенности) с указанным значением атрибута SOURCE.
   * Если элемент не найден - возвращается ошибка.
   * @param {strig} strSoure - Значение атрибута SOURCE.
   */
  FindSubItemBySource(strSoure: string): unknown | never;

  /**
   * Возвращает подчиненный элемент (любого уровня вложенности) с указанным типом.
   * Если элемент не найден - возвращается ошибка.
   * @param {string} strType - Тип элемента.
   * @example var label = GetSampleItem().FindSubItemByType("LABEL");
   */
  FindSubItemByType(strType: string): ScreenItem | never;

  /**
   * Работает только у элементов типа HYPER, осуществляет вставку заданной строки текста в текущую позицию курсора.
   * @param {string} str - Строка для вставки.
   */
  InsertHtml(str: string): unknown;

  /**
   * Работает только у элементов типа EDIT, осуществляет вставку заданной строки текста в текущую позицию курсора.
   * @param {string} strTxt - Cтрока для вставки.
   * @example edit.InsertText("<%=" + ListElem.value + "%>");
   */
  InsertText(strTxt: string): unknown;

  /**
   * Возвращает true, если у элмента PASSIVE="1", и false - если нет.
   * Если атрибута PASSIVE нет у данного элемента, то IsPassive возвращает true.
   */
  IsPassive(): boolean;

  /**
   * Возвращает true, если READ-ONLY или READ-ONLY-EXPR возрващает true, и false - если нет.
   * Если атрибутов READ-ONLY и READ-ONLY-EXPR нет у данного элемента, то IsReadOnly всегда возвращает true.
   * @example
   * ```
   * <BUTTON IMAGE-URL="//base_pict/dots.ico" STD-MARGINS="0" ACTION="Ps = Screen.AskColor(Ps); Ps.Doc.SetChanged(true);" ENABLE-EXPR="! GetSampleItem().IsReadOnly"/>
   * ```
   */
  IsReadOnly(): boolean;

  /**
   * @experimental
   * Экспериментальный метод.
   */
  MakeReport(): unknown;

  /**
   * Работает только для элемента типа EDIT с атибутом RICH-EDIT, устанавливает флаг измененности.
   * @param {boolean} isChanged - Значение флага измененности.
   */
  SetChanged(isChanged: boolean): unknown;

  /**
   * Устанавливает экранный фокус на данный элемент экрана.
   * Работает на тех элементах, на которые можно ставить фокус.
   */
  SetFocus(): unknown;

  /**
   * Вызывает изменение значение источника (SOURCE) у элемента.
   * @param value - Новое заначение источника
   * @example GetSampleItem().SetSourceValue(newValue);
   */
  SetSourceValue(value: unknown): void;

  /**
   * @experimental
   * Экспериментальный метод.
   */
  UpdateStyle(): unknown;

  /**
   * @experimental
   * Экспериментальный метод.
   */
  UpdateText(): unknown;
};

declare const ScreenItem: ScreenItem;
