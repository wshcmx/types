/**
 * `Stream` - это абстрактный объект, поддерживаемый определенный набор функций,
 * типичный для файлового объекта.
 * Конкретный экземпляр объекта может быть привязан к файлу либо другому
 * абстрактному потоку, в зависимости от реализации.
 */
interface Stream {
  /**
   * Читает следующую строку из потока. Если данных для чтения не осталось,
   * возвращается `undefined`.
   * Строка может отделяться последовательностями `LF`, `CR` или `CRLF`.
   */
  ReadLine(): string;
  /**
   * Записывает содержимое бинарного объекта в поток.
   * @param binaryObj - Бинарный объект.
   */
  WriteBinary(binaryObj: Binary): string;
  /**
   * Записывает содержимое строки в поток.
   * @param str - Строка.
   */
  WriteStr(str: string): void;
  /**
   * Конструктор объекта BufStream, позволяющего записывать данные в буфер в
   * памяти как в поток.
   */
  BufStream(): BufStream;
  /**
   * Конструктор объекта FileStream, позволяющего читать данные из файла на диске.
   * @param filePath - Путь к файлу (или url).
   * @returns {FileStream}
   * @example
   * fileStream = new FileStream( 'C:\\Temp\\xxx.txt' );
   * while ( true )
   * {
   *     str = fileStream.ReadLine();
   *     if ( str == undefined )
   *         break;
   * }
   */
  FileStream(filePath: string): FileStream;
}

interface StreamConstructor {
  new(): Stream;
  (): Stream;
}

declare const Stream: StreamConstructor;
