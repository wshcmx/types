/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * Конструктор объекта BufStream, позволяющего записывать данные в буфер в памяти как в поток.
 */
interface BufStream extends Omit<Stream, "ReadLine" | "WriteBinary" | "WriteStr"> { }

interface BufStreamConstructor {
  new(): BufStream;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare let BufStream: BufStreamConstructor;
