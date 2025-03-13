interface Math {
  /**
   * Округление значения числового выражения к ближайшему целому.
   * @param number - Число, округляемое до ближайшего целого (Real).
   */
  round(number: number): number;

  /**
   * Возвращает квадратный корень числа .
   * @param number - Числовое выражение (Real).
   */
  sqrt(number: number): number;

  /**
   * Округляет аргумент до ближайшего большего целого.
   * @param number - Числовое выражение (Real).
   */
  ceil(number: number): number;

  /**
   * Возвращает абсолютное значение числа.
   * @param number - Числовое выражение (Real).
   */
  abs(number: number): number;
}

 
declare const Math: Math;
