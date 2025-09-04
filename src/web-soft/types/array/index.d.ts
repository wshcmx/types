/**
 * Тип массив в системе WebTutor HCM.
 */
interface Array<T> {
  [index: number]: T;
  /**
   * Возвращает количество элементов массива.
   */
  readonly length: number;

  /**
   * Возвращает индекс передаваемого элемента в массиве.
   * @param {any} element
   */
  indexOf<T>(element: T): number;

  /**
   * Преобразование всех элементов массива в объект String и соединяет их.
   * @param {string} [delimeter] - Разделитель между элементами.
   * @returns {string}
   * @example arrayobj.join(delimeter)
   */
  join(delimeter: string): string;

  /**
   * Добавляет элементы в конец массива.
   * Добавляет элементы, начиная с текущей длинны length и возвращает новую, увеличенную длунну массива.
   * @param {unknown[]} args - Аргументы, которые следует добавить в массив.
   * @returns {number}
   */
  push(...args: T[]): number;

  /**
   * Удаляет часть массива.
   * @param index - Индекс в массив, с которого нужно начинать удаление.
   * @param number - Количество элементов, которое нужно удалить, начиная с индеса arg1.
   */
  splice(index: number, number: number): void;
}

interface ArrayConstructor {
  new(...arg: unknown[]): unknown[];
  (...arg: unknown[]): unknown[];
}


declare const Array: ArrayConstructor;
