interface Error {
  message: string;
  code: number;
}

interface ErrorConstructor {
  new(message?: string): Error;
  (message?: string): Error;
}

/**
 * @param {string} str - Строка с текстом ошибки.
 * @returns String
 */

declare let Error: ErrorConstructor;
