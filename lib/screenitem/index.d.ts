type ScreenItem = {
  ActiveElem: ScreenItem;
  Env: XmlElem<unknown>;
  HasSetValueAction: boolean;
  ImageUrl: string;
  IsEnabled: boolean;
  LoopArray: unknown[];
  Name: string;
  Parent: ScreenItem | typeof Screen;
  Ps: XmElem<unknown>;
  Screen: typeof Screen;
  Source: unknown;
  SourceDesc: string;
  Title: string;
  Type: string;

  /**
   * Вызывает изменение значение источника (SOURCE) у элемента.
   * @param value - Новое заначение источника
   * @example
   * ```
   * GetSampleItem().SetSourceValue(newValue);
   * ```
   */
  SetSourceValue(value: unknown): void;
};

/* eslint-disable @typescript-eslint/no-redeclare */
declare const ScreenItem: ScreenItem;
