interface String {
  /**
   * Возвращает длину строки в байтах.
   * Рекомендуется использовать аналогичную функцию {@link StrLen}().
   */
  length: number;

  /**
   * Устанавливает длину строкового объекта. Если новая длина больше текущей,
   * содержимое добавленной части строки неопределено.
   * Метод обычно используется для передачи возвращаемых строковых аргументов
   * в методы DllWrapper.
   * @param {number} newLen - Новая длинна строки в байтах.
   */
  Allocate(newLen: number): void;

  /**
   * Возвращает символ с указанной позиции в виде односимвольной строки.
   * Если указать index превышающий количество символов в строке, возвратит пустую строку.
   * @param {number} index - Номер позиции в строке.
   */
  charAt(index: number): string;

  /**
   * Возвращает код указанного символа.
   * @param {number} index - Отсчитаваемый с нуля индекс для символа.
   */
  charCodeAt(index: number): number;

  /**
   * Создание строки из кода символа.
   * @param {number} code - Код символа.
   */
  fromCharCode(code: number): string;

  /**
   * Поиск первого месторасположения подстроки в пределах объекта String.
   * Если подстрока не найдена, возвращается -1.
   * @param {string} substring - Подстрока для поиска.
   * @param {number} startPosition - Целое значение, указывающее индекс начала поиска.
   * Необязательный аргумент.
   */
  indexOf(substring: string, startPosition?: number): number;

  /**
   * Поиск последнего местонахождения подстроки в пределах объекта String.
   * Если подстрока не найдена, возвращается -1.
   * @param {string} substring - Подстрока для поиска.
   * @param {number} startPosition - Целое число, указывающее на индекс для начала поиска.
   * Необязательный аргумент.
   */
  lastIndexOf(substring: string, startPosition?: number): number;

  /**
   * Возвращает фрагмент строки.
   * @param {number} start - Индекс начала указанной части строки.
   * @param {number} end - Индекс конца указанной части строки. Необязательный аргумент.
   * Рекомендуется использовать аналогичные функции {@link StrRangePos}() и {@link StrLeftRange}().
   */
  slice(start: number, end?: number): string;

  /**
   * Разделяет строку на массив строк.
   * @param {string} separator - Строка, которая показывает, где делить.
   */
  split(separator: string): string[];

  /**
   * Метод конструирует и возвращает новую строку, содержащую указанное количество
   * соединенных вместе копий строки, на которой он был вызван.
   * @param number - Целое число, определяющее число повторений строки во вновь
   * создаваемой и возвращаемой строке.
   */
  repeat(number: number): string;

  /**
   * Метод {@link replace}() возвращает новую строку с некоторыми или
   * всеми сопоставлениями с шаблоном, замененными на заменитель.
   * @param substr - Строка, заменяемая на newSubStr.
   * @param newSubstr - Строка, заменяющая подстроку из первого параметра.
   * @returns {string} Результирующая строка.
   */
  replace(substr: string, newSubstr: string): string;

  /**
   * Возвращает подстроку, начинающуюся с указанного месторасположения и имеющую указанную длину.
   * @param {number} start - Начальное положение в строке.
   * @param {number} length - Количество символов в возвращаемой строке. Необязательный аргумент.
   * Рекомендуется использовать аналогичную функцию {@link StrRightRangePos}().
   */
  substr(start: number, length?: number): string;

  /**
   * Перевод текста в нижний регистр
   * Рекомендуется использовать аналогичную функцию {@link StrLowerCase}().
   */
  toLowerCase(): string;
}

interface StringConstructor {
  new(value?: unknown): string;
  (value?: unknown): string;
  fromCharCode(charCode: number): string;
}

declare const String: StringConstructor;
