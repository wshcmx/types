interface Math {
  /**
   * Округление значения числового выражения к ближайшему целому.
   * @param {number} number - Число, округляемое до ближайшего целого.
   */
  round(number: number): number;

  /**
   * Возвращает квадратный корень числа .
   * @param {number} number - Числовое выражение.
   */
  sqrt(number: number): number;

  /**
   * Округляет аргумент до ближайшего большего целого.
   * @param {number} number - Числовое выражение.
   */
  ceil(number: number): number;

  /**
   * Возвращает абсолютное значение числа.
   * @param {number} number - Числовое выражение.
   */
  abs(number: number): number;
}


declare const Math: Math;
