/**
 * Конструктор объекта javascript.
 *
 * Создает новый объект.
 *
 * По умолчанию для объекта определен атрибуты и методы:
 * - {@link HasProperty}
 * - {@link AddProperty}
 * - {@link SetProperty}
 * - {@link GetProperty}
 * - {@link GetOptProperty}
 */
interface Object {
  [key: string | number]: unknown;

  /**
   * Выдает true, если атрубут с заданным наименованием существует, и false - если не существует.
   * @param key - Наименование атрибута объекта.
   * @see {@link GetOptProperty}
   * @see {@link GetOptProperty}
   * @see {@link SetProperty}.
   */
  HasProperty(key: string | number): boolean;

  /**
   * Добавляет в объект новый атрибут, и присваивает ему значение.
   * @param {string} key - Наименование атрибута.
   * @param name - Значение атрибута.
   */
  AddProperty(key: string | number, name: unknown): void;

  /**
   * Возвращает значение атрибута объекта. Если атрубут отсутствует, выдает undefined.
   * @param {string} key - Наименование атрибута объекта.
   * @param {unknown} [defaultValue] - Значение по умолчанию, возращаемое в случае отсутствия атрибута.
   */
  GetOptProperty<O, K extends string, D = undefined>(
    this: O,
    key: K,
    defaultValue?: D
  ): K extends keyof O ? O[K] : D;

  /**
   * Выдает значение атрибута объекта. Если атрибут отсутствует, выдает ошибку.
   * @param {string} key - Наименование атрибута объекта.
   * @example AppConfig.GetProperty("alt-app-name");
   * @throws {Error}
   * @see {@link GetOptProperty}
   * @see {@link SetProperty}
   */
  GetProperty<O, K extends string>(
    this: O,
    key: K
  ): K extends keyof O ? O[K] : never;

  /**
   * Устанавливает значение атрибута объекта.
   * Если атрубут отсутствует, добавляет его.
   * @param key - Наименование атрибута объекта.
   * @param value - Значение атрибута объекта.
   * @see {@link GetOptProperty}
   * @see {@link SetProperty}
   */
  SetProperty<T>(key: string | number, value: T): void;
}

interface ObjectConstructor {
  new(value?: unknown): Object;
  (value?: unknown): Object;
  (): Object;
}

 
declare const Object: ObjectConstructor;
