type ListItem = {
  /**
   * Возвращает колонку (объект типа ScreenItem), по которой в данный момент осуществляется сортировка.
   */
  CurSortColumn: Object;

  /**
   * Возвращает true если в списке выделен хотя бы один элемент.
   */
  HasSel: boolean;

  /**
   * Возвращает true если в списке выделен только один элемент.
   */
  HasSingleSel: boolean;

  /**
   * Возвращает массив всех подэлементов типа ROW.
   */
  Rows: ScreenItem[];

  /**
   * Возвращает выделенный элемент.
   */
  SelRow: ScreenItem;

  /**
   * Возвращает массив выделенных объектов.
   */
  SelRows: ScreenItem[];

  /**
   * Сбрасывает все выделения строк в списке.
   */
  ClearSel(): unknown;

  GetCurCodeSortInfo(): undefined;

  /**
   * Возвращает номер колонки (нумерация начинается с нуля), по которой в данный момент осуществляется сортировка.
   * @returns {number}
   */
  GetCurSortColumnIndex(): number;

  GetCurSortDir(): undefined;

  GetCurXQuerySortInfo(): undefined;

  /**
   * Возвращает имя переменной в сокращенной записи LIST.
   * По умолчанию - "ListElem".
   * Для остальных списков возвращает undefined.
   * @returns {string | undefined}
   */
  LoopVarName(): string | undefined;

  /**
   * Сдвигает выделение в списке на величину переданного аргумента.
   * Если в списке нет выделенных строк, считает, что была выделена первая строка.
   * Обычно используется, чтобы переместить выделения на следующую либо предыдущую строку (значение delta 1 или -1).
   */
  MoveSel(delta: number): unknown;
};

 
declare const ListItem: ListItem;
