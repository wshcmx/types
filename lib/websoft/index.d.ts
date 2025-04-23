declare namespace Websoft {
  type Interfaces = {
    "Authorization": Authorization.Authorization;
    "Crypto": Utils.Crypto,
    "CryptoPro": CryptoPro.CryptoProPrime;
    "CryptoStore": CryptoStore.CryptoStore;
    "Excel": Office.Excel.Document;
    // "FaceRecognition": OpenCV.FaceRecognition;
    "HttpRequest": {
      HttpRequest: HttpRequest.HttpRequest;
      HttpResponse: HttpRequest.HttpResponse;
    };
    "Image": Imaging.Image;
    "ImageUtils": Imaging.ImageUtils;
    // "MediaPostStreamHandler": MediaHandler.MediaPostStreamHandler;
    "Pdf": Office.Pdf.Document;
    "PdfGenerator": Office.Pdf.Generator;
    // "PKeyGenerator": PKeyGenerator.PKeyGenerator;
    "Powerpoint": Office.Powerpoint.Presentation;
    // "RecordingClient": Recording.Client;
    "RegExp": RegExp.RegExp;
    // "UniBridgeSettings": spxml.unibridge.UniBridgeSettings;
    // "VideoNeuralHandler": VideoNeuralHandler.VideoNeuralHandler;
    "Video": Video.Video;
    "Word": Office.Word.Document;
    "WebUtils": Utils.WebUtils;
    // "XHTTPMiddleware": XHTTP.Middleware;
    "Zip": Zip.Zip;
  };

  namespace Authorization {
    interface IObjectArray {
      GetNext(): boolean;
      GetName(): string;
      GetValue(name: string): object;
      IsEnabled(): boolean;
      GetStringValue(name: string): string;
      Token(): string;
    }
    class Authorization {
      ValidateLDAP(
        ldap_server: string,
        ldap_container: string,
        username: string,
        password: string,
        context_options: number,
        context_type: number
      ): boolean;
      ValidateLDAPRequestNovell(
        ldap_server: string,
        ldap_container: string,
        username: string,
        password: string,
        auth_type: number,
        ProtocolVersion: number,
        ssl: boolean
      ): boolean;
      ValidateLDAPRequest(
        ldap_server: string,
        ldap_container: string,
        username: string,
        password: string,
        auth_type: number,
        ProtocolVersion: number,
        ssl: boolean
      ): boolean;
      GetValidateLDAPWithAttributes(
        ldap_server: string,
        ldap_container: string,
        username: string,
        password: string,
        properties: string,
        context_options: number,
        context_type: number
      ): [string, object];
      ValidateLDAPWithAttributes(
        ldap_server: string,
        ldap_container: string,
        username: string,
        password: string,
        properties: string,
        context_options: number,
        context_type: number
      ): IObjectArray;
      GetValidateADALWithTokenAttributes(
        ad_server_tenant: string,
        ad_clientid: string,
        resourceId: string,
        token: string,
        properties: string,
        stsDiscoveryEndPoint: string
      ): [string, object];
      ValidateADALWithTokenAttributes(
        ad_server_tenant: string,
        ad_clientid: string,
        resourceId: string,
        token: string,
        properties: string,
        stsDiscoveryEndPoint: string
      ): IObjectArray;
    }
  }

  namespace Discharge {
    class Discharge {
      Init(connection_string: string, db_type: string, AppDirectory: string): boolean;
      SqlExecute(sql_string: string): boolean;
      GetEOF(): boolean;
      GetNext(): boolean;
      GetRowJson(): string;
      GetValue(field_name: string): string;
      Close(): number;
      CloseSqlResult(): number;
      GetError(): string;
    }
  }

  namespace Code {
    class BufferedConsoleStream { }
    class JsonExtensions { }
    class wsft { }
    class WTConsole { }
  }

  namespace CryptoPro {
    class CryptoProPrime {
      CloseStore(): boolean;
      GetX509CertificateByThumbprint(thumbprint: string, validOnly?: boolean, hasPrivateKey?: boolean): boolean;
      OpenStore(store?: number, flags?: number): boolean;
      ssl_cms_sign(messageData: string): string;
    }
  }


  namespace CryptoStore {
    class CryptoStore {
      Close(): boolean;
      DecryptString(message: string, fOAEP: boolean): string;
      DecryptStringAES(message: string, key: string, IV?: string): string;
      EmbedSignatureToSignedMsgData(message: string, mimeHeader: string): string;
      EmbedSignatureToSignedMsgDataWithEncrypt(message: string, recipCert: string, mimeHeader: string): string;
      EncryptString(message: string, fOAEP?: boolean): string;
      EncryptStringAES(message: string, key: string, IV?: string): string;
      ExtractAlternativeMimeDataFromSigned(message: string): [string, string, string, string];
      GenerateKey(): string;
      GetDecryptedMsgData(message: string): string;
      GetEncryptedMsgData(
        message: string,
        fileName: string,
        attachment: Binary,
        recipCert: string,
        mimeHeader: string
      ): string;
      GetLastError(): number;
      GetLastErrorMessage(): string;
      GetMsgData(message: string, fileName: string, attachment: Binary, mimeHeader: string): string;
      GetSelectedCertAttribute(name: string): string;
      GetSignedEncryptedMsgData(
        message: string,
        fileName: string,
        attachment: Binary,
        recipCert: string,
        mimeHeader: string
      ): string;
      GetSignedMsgData(message: string, fileName: string, attachment: Binary, mimeHeader: string): string;
      isCertificateSelected(): boolean;
      Open(store: number, storeName: string, flags: number): boolean;
      SelectCertificate(recipCert: string): boolean;
      SelectCertificateByThumbprint(thumbprint: string, validOnly?: boolean, hasPrivateKey?: boolean): boolean;
    }
  }

  namespace HttpRequest {
    class HttpRequest {
      readonly Error: number;
      readonly ErrorMessage: string;
      Open(url: string, method: string, body?: string, headers?: string, handler?: Object, client?: Object, timeout?: number): HttpResponse;
      CreateNewHttpClientHandler(ignoreClientCertficate: boolean): Object;
      CreateNewHttpClient(handler: Object): Object;
    }

    class HttpResponse {
      readonly RespCode: number;
      readonly Headers: string;
      readonly Url: string;
      readonly IsSuccessStatusCode: boolean;
      Body: string;
      BinaryBody: Binary;
    }
  }

  namespace Imaging {
    /** Класс для работы с изображениями. */
    class Image extends WebsoftBaseClass {
      /** Высота изображения. */
      Height: number;
      /** Ширина изображения. */
      Width: number;

      /**
       * Выгружает изображение из памяти и освобождает файл.
       */
      Close(): 1 | 0;

      /**
       * Отражает изображение.
       * @param {string} direction - Направление отражение. "x" - по горизонтали, "y" - по вертикали, "xy" - по горизотали и вертикали.
       */
      Flip(direction: string): 1 | 0;

      /**
       * Открывает изображение по указанному пути.
       * @param {string} filePath - Путь до изображения.
       */
      Open(filePath: string): 1 | 0;

      /**
       * Изменяет размер изображения согласно указанным параметрам.
       * @param {number} newWidth - Новая ширина.
       * @param {number} maxHeight - Новая высота.
       * @param {boolean} keepProportions - Соблюдать пропорции.
       * @param {boolean} onlyResizeIfWider - Изменять размер только если новая ширина больше текущей.
       */
      Resize(
        newWidth: number,
        maxHeight: number,
        keepProportions: boolean,
        onlyResizeIfWider: boolean
      ): 1 | 0;

      /**
       * Поворачивает изображение на указанный угол.
       * @param {number} degree - Угол поворота. Принимает одно из следующих значений: 90, 180, 270.
       */
      Rotate(degree: number): 1 | 0;

      /**
       * Сохраняет загруженное изображение.
       */
      Save(): 1 | 0;

      /**
       * Сохраняет изображение по указанному пути с указанным качеством (только для JPEG).
       * Формат определяется по расширению имени файла в пути сохранения.
       * @param {string} newFilePath - Путь сохранения, включая имя файла.
       * @param {number} [quality=80] - Качество сохранения JPEG. Значения от 1 до 100.
       */
      SaveAs(
        newFilePath: string,
        quality: number
      ): 1 | 0;
    }

    /** Класс для создания фотогалерей. Для работы с изображениями рекомендуется использовать класс Image. */
    class ImageUtils extends WebsoftBaseClass {
      /**
       * Подготавливает изображения для галереи.
       * @param {string} sourceFolderPath - Путь до папки с изображениями.
       * @param {string} outputPath - Путь для сохранения результатов обработки.
       * @param {number} newFileWidth - Новая ширина.
       * @param {number} newFileHeight - Новая высота.
       * @param {number} thumbnailWidth - Ширина изображений для препросмотра.
       * @param {number} thumbnailHeight - Высота изображений для препросмотра.
       * @param {number} quality - Качество сохранения JPEG. Значения от 1 до 100.
       * @param {boolean} onlyResizeIfWider - Изменять размер только если новая ширина больше текущей.
       */
      BuildGallery(
        sourceFolderPath: string,
        outputPath: string,
        newFileWidth: number,
        newFileHeight: number,
        thumbnailWidth: number,
        thumbnailHeight: number,
        quality: number,
        onlyResizeIfWider: boolean
      ): 1 | 0;

      /**
       * Изменяет размер изображения и сохраняет по указанному пути.
       * @param {string} originalFilePath - Путь до изображения.
       * @param {string} newFilePath - Путь для сохранения измененного изображения.
       * @param {number} newWidth - Новая ширина.
       * @param {number} maxHeight - Новая высота.
       * @param {number} quality - Качество сохранения JPEG. Значения от 1 до 100.
       * @param {boolean} onlyIfDoesntExists - Сохранять только если файл назначения не существует.
       * @param {boolean} onlyResizeIfWider - Изменять размер только если новая ширина больше текущей.
       */
      ResizeImage(
        originalFilePath: string,
        newFilePath: string,
        newWidth: number,
        maxHeight: number,
        quality: number,
        onlyIfDoesntExists: boolean,
        onlyResizeIfWider: boolean
      ): 1 | 0;

      /**
       * Изменяет размер набора изображений из указанной папки и сохраняет по указанному пути.
       * @param {string} folderPath - Путь до папки с изображениями.
       * @param {string} outputPath - Путь для сохранения измененных изображений.
       * @param {number} newFileWidth - Новая ширина.
       * @param {number} newFileHeight - Новая высота.
       * @param {number} quality - Качество сохранения JPEG. Значения от 1 до 100.
       * @param {boolean} includeSubFolder - Обрабатывать изображения в дочерних папках.
       * @param {boolean} onlyIfDoesntExists - Сохранять только если файл назначения не существует.
       * @param {boolean} onlyResizeIfWider - Изменять размер только если новая ширина больше текущей.
       */
      ResizeImages(
        folderPath: string,
        outputPath: string,
        newFileWidth: number,
        newFileHeight: number,
        quality: number,
        includeSubFolder: boolean,
        onlyIfDoesntExists: boolean,
        onlyResizeIfWider: boolean
      ): 1 | 0;
    }
  }

  namespace Office {
    /**
     * Библиотека для работы с документами Microsoft Office Excel.
     */
    namespace Excel {

      /**
       * Описание границы ячейки.
       */
      class Border extends WebsoftBaseClass {
        /**
         * Цвет границы.
         */
        Color: string;

        /**
         * Стиль границы.
         */
        LineStyle: "None"
        | "DashDot"
        | "DashDotDot"
        | "Dashed"
        | "Dotted"
        | "Double"
        | "Hair"
        | "Medium"
        | "MediumDashDot"
        | "MediumDashDotDot"
        | "MediumDashed"
        | "SlantedDashDot"
        | "Thick"
        | "Thin";
      }

      /**
       * Класс для работы с границами ячейки.
       */
      class Borders extends WebsoftBaseClass {
        /**
         * Получает описание границы указанного типа.
         * @param string - BorderType.
         */
        GetBorder(
          borderType: "LeftBorder"
          | "RightBorder"
          | "TopBorder"
          | "BottomBorder"
          | "DiagonalDown"
          | "DiagonalUp"
          | "Vertical"
          | "Horizontal"
        ): Border;

        /**
         * Устанавливает стиль границ ячейки.
         */
        SetColor(color: string): void;

        /**
         * Устанавливает стиль границ ячейки.
         */
        SetStyle(
          borderType: "None"
          | "DashDot"
          | "DashDotDot"
          | "Dashed"
          | "Dotted"
          | "Double"
          | "Hair"
          | "Medium"
          | "MediumDashDot"
          | "MediumDashDotDot"
          | "MediumDashed"
          | "SlantedDashDot"
          | "Thick"
          | "Thin"
        ): void;
      }

      class Cell extends WebsoftBaseClass {
        /**
         * Формула.
         */
        Formula: string;
        /**
         * Значение в формате HTML.
         */
        HtmlString: string;
        /**
         * Является ли ячейка объединенной с другими.
         */
        readonly IsMerged: boolean;
        /**
         * Количество картинок в ячейке.
         */
        readonly PicturesCount: number;
        /**
         * Стиль ячейки.
         */
        readonly Style: Style;
        /**
         * Значение ячейки.
         */
        Value: string | number | boolean | Date | null;

        /**
         * Получить картинку.
         * @param System.Int32 - Порядковый номер изображения.
         * @returns Изображение.
         */
        GetPicture(index: number): Drawing.Picture;
      }

      class Cells extends WebsoftBaseClass {
        /**
         * Колонки.
         */
        Columns: Columns;
        /**
         * Настройка потребления памяти. Принимает значения "MemoryPreference" или "Normal".
         * Значение "MemoryPreference" применяется при записи в документ большого количества данных.
         */
        MemorySetting: "MemoryPreference" | "Normal";
        /**
         * Строки.
         */
        Rows: Rows;

        /**
         * Выбирает диапазон ячеек для массового управления.
         * @param rangeCells - Диапазон ячеек в формате "A1:B9".
         */
        CreateRange(rangeCells: string): Range;

        /**
         * Получает ячейку по указанному расположению.
         * @param cellName - Расположение.
         */
        GetCell(cellName: string): Cell;

        /**
         * Скрывает колонку.
         * @param number - Номер колонки.
         */
        HideColumn(number: number): void;

        /**
         * Скрывает строку.
         * @param number - Номер строки.
         */
        HideRow(number: number): void;

        /**
         * Объединяет указанные ячейки.
         * @param firstRow - Номер строки.
         * @param firstColumn - Номер колонки.
         * @param totalRows - Количество строк.
         * @param totalColumns - Количество колонок.
         */
        Merge(firstRow: number, firstColumn: number, totalRows: number, totalColumns: number): 1 | 0;

        /**
         * Устанавливает ширину колонки.
         * @param columnNum - Номер колонки.
         * @param width - Ширина (Double).
         */
        SetColumnWidth(columnNum: number, width: number): 1 | 0;

        /**
         * Устанавливает ширину строки.
         * @param rowNum - Номер строки.
         * @param width - Ширина (Double).
         */
        SetRowHeight(rowNum: number, width: number): 1 | 0;

        /**
         * Разъединяет указанные ячейки.
         * @param firstRow - Номер строки.
         * @param firstColumn - Номер колонки.
         * @param totalRows - Количество строк.
         * @param totalColumns - Количество колонок.
         */
        UnMerge(firstRow: number, firstColumn: number, totalRows: number, totalColumns: number): 1 | 0;
      }

      class Column extends WebsoftBaseClass {
        /**
         * Ширина колонки.
         */
        Width: number;
      }

      class Columns extends WebsoftBaseClass {
        /**
         * Получает {@link Columns | колонку} по указанному номеру.
         * @param index - Номер колонки.
         */
        GetColumn(index: number): Column;
      }

      /**
       * Класс для работы с документом Microsoft Excel.
       */
      class Document extends WebsoftBaseClass {
        /**
         * Количество страниц.
         */
        readonly WorkSheetsCount: number;

        /**
         * Создает новый лист.
         */
        AddWorksheet(): Worksheet;

        /**
         * Закрывает документ.
         */
        Close(): 0 | 1;

        /**
         * Создает книгу Excel.
         */
        CreateWorkBook(): 0 | 1;

        /**
         * Получает значение листа по номеру.
         * @param index - Порядковый номер листа.
         */
        GetWorksheet(index: number): Worksheet;

        /**
         * Загружает данные в формате HTML из указанного файла.
         * @param filePath - Путь до файла в формате HTML.
         * @param resourcesDirectoryName - Название папки с ресурсами (изображения, стили и т.д.).
         */
        LoadHtmlFile(filePath: string, resourcesDirectoryName: string): 0 | 1;

        /**
         * Загружает данные в формате HTML из строки.
         * @param htmlText - Переменная, содержащаю строку в формате HTML.
         * @param resourcesDirectoryName - Название папки с ресурсами (изображения, стили и т.д.).
         */
        LoadHtmlString(htmlText: string, resourcesDirectoryName: string): 0 | 1;

        /**
         * Открывает файл Microsoft Excel.
         * @param filePath - Путь до файла.
         */
        Open(filePath: string): 1 | 0;

        /**
         * Сохраняет текущий документ.
         */
        Save(): 1 | 0;

        /**
         * Сохраняет документ по указанному пути.
         * Формат определяется по расширению имени файла в пути сохранения.
         * Доступные форматы: CSV, ODS, TIFF, SVG, PDF, MHTML, HTML.
         * @param newPath - Путь сохранения, включая имя файла.
         */
        SaveAs(newPath: string): 1 | 0;
      }

      class Font extends WebsoftBaseClass {
        Color: string;
        IsBold: boolean;
        IsItalic: boolean;
        Name: string;
        Size: number;
      }

      class PageSetup extends WebsoftBaseClass {
        /**
         * Адаптировать содержимое по высоте под указанное количество страниц.
         */
        FitToPagesTall: number;

        /**
         * Адаптировать содержимое по ширине под указанное количество страниц.
         */
        FitToPagesWide: number;

        /**
         * Ориентация страницы. Допустимые значения: "Landscape" или "Portrait".
         */
        Orientation: "Landscape" | "Portrait";

        /**
         * Размер страницы для печати.
         */
        PaperSize: "PaperLetter"
        | "PaperLetterSmall"
        | "PaperTabloid"
        | "PaperLedger"
        | "PaperLegal"
        | "PaperStatement"
        | "PaperExecutive"
        | "PaperA3"
        | "PaperA4"
        | "PaperA4Small"
        | "PaperA5"
        | "PaperB4"
        | "PaperB5"
        | "PaperFolio"
        | "PaperQuarto"
        | "Paper10x14"
        | "Paper11x17"
        | "PaperNote"
        | "PaperEnvelope9"
        | "PaperEnvelope10"
        | "PaperEnvelope11"
        | "PaperEnvelope12"
        | "PaperEnvelope14"
        | "PaperCSheet"
        | "PaperDSheet"
        | "PaperESheet"
        | "PaperEnvelopeDL"
        | "PaperEnvelopeC5"
        | "PaperEnvelopeC3"
        | "PaperEnvelopeC4"
        | "PaperEnvelopeC6"
        | "PaperEnvelopeC65"
        | "PaperEnvelopeB4"
        | "PaperEnvelopeB5"
        | "PaperEnvelopeB6"
        | "PaperEnvelopeItaly"
        | "PaperEnvelopeMonarch"
        | "PaperEnvelopePersonal"
        | "PaperFanfoldUS"
        | "PaperFanfoldStdGerman"
        | "PaperFanfoldLegalGerman"
        | "PaperISOB4"
        | "PaperJapanesePostcard"
        | "Paper9x11"
        | "Paper10x11"
        | "Paper15x11"
        | "PaperEnvelopeInvite"
        | "PaperLetterExtra"
        | "PaperLegalExtra"
        | "PaperTabloidExtra"
        | "PaperA4Extra"
        | "PaperLetterTransverse"
        | "PaperA4Transverse"
        | "PaperLetterExtraTransverse"
        | "PaperSuperA"
        | "PaperSuperB"
        | "PaperLetterPlus"
        | "PaperA4Plus"
        | "PaperA5Transverse"
        | "PaperJISB5Transverse"
        | "PaperA3Extra"
        | "PaperA5Extra"
        | "PaperISOB5Extra"
        | "PaperA2"
        | "PaperA3Transverse"
        | "PaperA3ExtraTransverse"
        | "PaperJapaneseDoublePostcard"
        | "PaperA6"
        | "PaperJapaneseEnvelopeKaku2"
        | "PaperJapaneseEnvelopeKaku3"
        | "PaperJapaneseEnvelopeChou3"
        | "PaperJapaneseEnvelopeChou4"
        | "PaperLetterRotated"
        | "PaperA3Rotated"
        | "PaperA4Rotated"
        | "PaperA5Rotated"
        | "PaperJISB4Rotated"
        | "PaperJISB5Rotated"
        | "PaperJapanesePostcardRotated"
        | "PaperJapaneseDoublePostcardRotated"
        | "PaperA6Rotated"
        | "PaperJapaneseEnvelopeKaku2Rotated"
        | "PaperJapaneseEnvelopeKaku3Rotated"
        | "PaperJapaneseEnvelopeChou3Rotated"
        | "PaperJapaneseEnvelopeChou4Rotated"
        | "PaperJISB6"
        | "PaperJISB6Rotated"
        | "Paper12x11"
        | "PaperJapaneseEnvelopeYou4"
        | "PaperJapaneseEnvelopeYou4Rotated"
        | "PaperPRC16K"
        | "PaperPRC32K"
        | "PaperPRCBig32K"
        | "PaperPRCEnvelope1"
        | "PaperPRCEnvelope2"
        | "PaperPRCEnvelope3"
        | "PaperPRCEnvelope4"
        | "PaperPRCEnvelope5"
        | "PaperPRCEnvelope6"
        | "PaperPRCEnvelope7"
        | "PaperPRCEnvelope8"
        | "PaperPRCEnvelope9"
        | "PaperPRCEnvelope10"
        | "PaperPRC16KRotated"
        | "PaperPRC32KRotated"
        | "PaperPRCBig32KRotated"
        | "PaperPRCEnvelope1Rotated"
        | "PaperPRCEnvelope2Rotated"
        | "PaperPRCEnvelope3Rotated"
        | "PaperPRCEnvelope4Rotated"
        | "PaperPRCEnvelope5Rotated"
        | "PaperPRCEnvelope6Rotated"
        | "PaperPRCEnvelope7Rotated"
        | "PaperPRCEnvelope8Rotated"
        | "PaperPRCEnvelope9Rotated"
        | "PaperPRCEnvelope10Rotated"
        | "PaperB3"
        | "PaperBusinessCard";
      }

      class Range extends WebsoftBaseClass {
        CopyDataTo(str: string): Range;
        CopyStyleTo(str: string): Range;
        CopyTo(str: string): Range;
        CopyValueTo(str: string): Range;
      }

      class Row extends WebsoftBaseClass {
        Height: number;
      }

      class Rows extends WebsoftBaseClass {
        GetRow(index: number): Row;
      }

      class Style extends WebsoftBaseClass {
        /**
         * Границы ячейки.
         */
        Borders: Borders;

        /**
         * Свой шаблон формата данных ячейки.
         */
        Custom: string;

        /**
         * Цвет шрифта.
         */
        FontColor: string;

        /**
         * Название шрифта.
         */
        FontName: string;

        /**
         * Размер шрифта.
         */
        FontSize: number;

        /**
         * Цвет заливки.
         */
        ForegroundColor: string;

        /**
         * Выравнивание по горизонтали. Принимает значения "Left", "Right", "Center", "Justify".
         */
        HorizontalAlignment: "Left" | "Right" | "Center" | "Justify";

        /**
         * Ширность шрифта.
         */
        IsBold: boolean;

        /**
         * Курсив.
         */
        IsItalic: boolean;

        /**
         * Автоперенос текста.
         */
        IsTextWrapped: boolean;

        /**
         * Номер стиля и формата в таблице.
         * Описание: http://www.aspose.com/docs/display/cellsnet/Setting+Display+Formats+of+Numbers+and+Dates.
         */
        Number: number;

        /**
         * Выравнивание по вертикали. Принимает значения "Top", "Bottom", "Center".
         */
        VerticalAlignment: "Top" | "Bottom" | "Center";
      }

      /**
       * Лист книги Excel.
       */
      class Worksheet extends WebsoftBaseClass {
        /**
         * Свойство для управления ячейками листа.
         */
        Cells: Cells;

        /**
         * Наборы графиков.
         */
        Charts: Websoft.Office.Excel.Charts.ChartsCollection;


        /**
         * Название листа.
         */
        Name: string;

        /**
         * Параметры страницы.
         */
        PageSetup: PageSetup;

        /**
         * Набор изображений листа.
         */
        Pictures: Websoft.Office.Excel.Drawing.Pictures;

        /**
         * Создает новый набор графиков.
         * @deprecated
         * @param chartType - Тип графика.
         * @param left - Позиция по горизонтали.
         * @param top - Позиция по вертикали.
         * @param width - Ширинf.
         * @param height - Высота.
         */
        AddChart(
          chartType: string,
          left: number,
          top: number,
          width: number,
          height: number
        ): Websoft.Office.Excel.Charts.Chart;

        /**
         * Получает ячейку по указанному расположению
         * (устаревшее, вместо данной функции нужно использовать Cells.GetCell()).
         * @param cellName - Расположение.
         */
        GetCell(cellName: string): Cell;
      }

      namespace Charts {
        class Axis extends WebsoftBaseClass {
          /**
           * Область.
           */
          readonly Area: Websoft.Office.Excel.Drawing.Area;

          /**
           * Положение вертикальной оси между делениями.
           */
          AxisBetweenCategories: boolean;

          /**
           * Линия.
           */
          readonly AxisLine: Websoft.Office.Excel.Drawing.Line;

          /**
           * Номер категории пересечения вертикальной оси.
           */
          CrossAtt: number;

          /**
           * Тип пересечения вертикальной оси. Принимает значения "Automatic", "Maximum", "Custom".
           */
          CrossType: "Automatic" | "Maximum" | "Custom";

          /**
           * Основные деления.
           */
          MajorUnit: number;

          /**
           * Максимальное значение.
           */
          MaxValue: Object;

          /**
           * Промежуточные деления.
           */
          MinorUnit: number;

          /**
           * Минимальное значение.
           */
          MinValue: Object;

          /**
           * Положение подписей. Принимает значения "High", "Low", "NextToAxis", "None".
           */
          TickLabelPosition: "High" | "Low" | "NextToAxis" | "None";

          /**
           * Подписи к координатам.
           */
          readonly TickLabels: TickLabels;

          /**
           * Заголовок оси.
           */
          readonly Title: Websoft.Office.Excel.Charts.Title;
        }

        class Chart extends WebsoftBaseClass {
          /**
           * @deprecated
           * Цвет фона.
           * Рекомендуется использовать поля ChartArea.Area.BackgroundColor и PlotArea.Area.BackgroundColor.
           */
          BackgroundColor: string;

          /**
           * Ось X.
           */
          readonly CategoryAxis: Axis;

          /**
           * Данные категории (оси X для некоторых графиков).
           * Может устанавливаться в виде диапазона ячеек ("A1:B4") или набора данных ("{10,40,80}").
           * Важно! Этот параметр должен выставляться после добавления всех необходимых графиков к набору.
           */
          CategoryData: string;

          /**
           * Область диаграммы.
           */
          readonly ChartArea: ChartArea;

          /**
           * Таблица с данными.
           */
          readonly ChartDataTable: ChartDataTable;

          /**
           * Цвет фона области графика.
           */
          GridBackgroundColor: string;

          /**
           * Расположение легенды. Принимает значения "Top", "Left", "Right", "Bottom".
           */
          LegendPosition: "Top" | "Left" | "Right" | "Botton";

          /**
           * Область построения.
           */
          readonly PlotArea: PlotArea;

          /**
           * Показывать линии категории.
           */
          ShowCategoryGriglines: boolean;

          /**
           * Показывать таблицу с данными.
           */
          ShowDataTable: boolean;

          /**
           * Показывать легенду.
           */
          ShowLegend: boolean;

          /**
           * Показывать линии значений.
           */
          ShowValuesGriglines: boolean;
          /**
           * Заголовок.
           */
          readonly Title: Title;

          /**
           * Ось Y.
           */
          readonly ValueAxis: Axis;

          /**
           * Добавляет график.
           * @param chartType - Тип графика.
           * @param source - Источник данных.
           * @param isVertical - Следует ли строить график из диапазона значений ячеек по строкам или по столбцам.
           */
          AddSeries(
            chartType: string,
            source: string,
            isVertical: boolean
          ): Series;

          /**
           * Возвращает данные картинки в формате Base64.
           * @param imageFormat - Формат изображения (png, jpg и т.д.).
           */
          GetImageInBase64String(imageFormat: string): string;

          /**
           * Сохраняет набор графиков в виде изображения.
           * Формат изображения определяется по расширению в имени файла.
           */
          ToImage(path: string): 1 | 0;
        }

        class ChartArea extends WebsoftBaseClass {
          /**
           * Область.
           */
          readonly Area: Websoft.Office.Excel.Drawing.Area;
          /**
           * Граница.
           */
          readonly Border: Websoft.Office.Excel.Drawing.Line;
          /**
           * Высота.
           */
          Height: number;
          /**
           * Ширина.
           */
          Width: number;
        }

        class ChartDataTable extends WebsoftBaseClass {
          /**
           * Показывать горизонтальные границы.
           */
          HasBorderHorizontal: boolean;

          /**
           * Показывать внешние границы.
           */
          HasBorderOutline: boolean;

          /**
           * Показывать вертикальные границы.
           */
          HasBorderVertical: boolean;

          /**
           * Показывать значения легенды.
           */
          ShowLegendKey: boolean;
        }

        class ChartsCollection extends WebsoftBaseClass {
          /**
           * Количество наборов графиков в документе.
           */
          readonly Count: number;

          /**
           * Создает новый набор графиков.
           * @param chartType - Тип графика.
           * @param upperLeftRow - Номер левой верхней строки.
           * @param upperLeftColumn - Номер левой верхней колонки.
           * @param lowerRightRow - Номер нижней правой строки.
           * @param lowerRightColumn - Номер нижней правой колонки.
           */
          Add(
            chartType: string,
            upperLeftRow: number,
            upperLeftColumn: number,
            lowerRightRow: number,
            lowerRightColumn: number
          ): Chart;

          /**
           * Создает новый набор графиков.
           * @param chartType - Тип графика.
           * @param left - Позиция по горизонтали.
           * @param top - Позиция по вертикали.
           * @param width - Ширина.
           * @param height - Высота.
           */
          AddFloatingChart(
            chartType: string,
            left: number,
            top: number,
            width: number,
            height: number
          ): Chart;
        }

        class DataLabels extends WebsoftBaseClass {
          /**
           * Шрифт подписей значений.
           */
          readonly Font: Font;

          /**
           * Формат данных. Например, "0.00%" для указания значения в процентах.
           */
          NumberFormat: string;

          /**
           * Расположение. Разные значения доступны для разных типов графиков.
           */
          Position: "Center" | "InsideBase" | "OutsideEnd" | "Above" | "Below" | "Left" | "Right" | "BestFit" | "Moved";

          /**
           * Показывать название.
           */
          ShowSeriesName: boolean;

          /**
           * Показывать значение.
           */
          ShowValue: boolean;
        }

        class PlotArea extends WebsoftBaseClass {
          /**
           * Область.
           */
          readonly Area: Websoft.Office.Excel.Drawing.Area;

          /**
           * Граница.
           */
          readonly Border: Websoft.Office.Excel.Drawing.Line;

          /**
           * Высота.
           */
          Height: number;

          /**
           * Ширина.
           */
          Width: number;
        }

        class Series extends WebsoftBaseClass {
          /**
           * Область.
           */
          readonly Area: Websoft.Office.Excel.Drawing.Area;

          /**
           * Граница.
           */
          readonly Border: Websoft.Office.Excel.Drawing.Line;

          /**
           * Линии графика.
           */
          readonly DataLabels: DataLabels;

          /**
           * @deprecated
           * Цвет графика. Устаревшее. Рекомендуется использовать {@link Area.ForegroundColor}.
           */
          ForegroundColor: string;

          /**
           * Название графика.
           */
          Name: string;

          /**
           * Использовать сглаживание графика (только для линейного типа).
           */
          Smooth: boolean;

          /**
           * Значения по оси X.
           */
          XValues: string;

          /**
           * Добавляет линию тренда.
           * @param type - Тип линии тренда.
           */
          AddTrendLine(type: string): Trendline;
        }

        class TickLabels extends WebsoftBaseClass {
          /**
           * Шрифт подписей.
           */
          readonly Font: Font;

          /**
           * Формат данных. Например, "0.00%" для указания значения в процентах.
           */
          NumberFormat: string;

          /**
           * Угол поворота.
           */
          RotationAngle: number;

          /**
           * Направление текста. Принимает значения "Context", "LeftToRight", "RightToLeft".
           */
          TextDirection: "Context" | "LeftToRight" | "RightToLeft";
        }

        class Title extends WebsoftBaseClass {
          /**
           * Размер текста заголовка.
           */
          FontSize: number;

          /**
           * Является ли заголовок жирным.
           */
          IsBold: boolean;

          /**
           * Видимость заголовка.
           */
          IsVisible: boolean;

          /**
           * Угол поворота.
           */
          RotationAngle: number;

          /**
           * Текст заголовка.
           */
          Text: string;
        }

        class Trendline extends WebsoftBaseClass {
          /**
           * Прогноз назад (количество периодов).
           */
          Backward: number;

          /**
           * Цвет линии.
           */
          Color: string;

          /**
           * Показывать уравнение на диаграмме.
           */
          DisplayEquation: boolean;

          /**
           * Поместить на диаграмму величину достоверности аппроксимации (R^2).
           */
          DisplayRSquared: boolean;

          /**
           * Прогноз вперед (количество периодов).
           */
          Forward: number;

          /**
           * Название графика.
           */
          Name: string;

          /**
           * Толщина линии в point.
           */
          WeightPt: number;

          /**
           * Толщина линии в пикселях.
           */
          WeightPx: number;
        }
      }

      namespace Drawing {
        class Area extends WebsoftBaseClass {
          /**
           * Цвет фона.
           */
          BackgroundColor: string;

          /**
           * Стиль заливки заливки.
           */
          readonly FillFormat: FillFormat;

          /**
           * Цвет заливки.
           */
          ForegroundColor: string;

          /**
           * Прозрачность. Принимает значения от 0.0 до 1.0.
           */
          Transparency: number;
        }

        class FillFormat extends WebsoftBaseClass {
          /**
           * Цвет заливки 1.
           */
          readonly GradientColor1: string;

          /**
           * Цвет заливки 2.
           */
          readonly GradientColor2: string;

          /**
           * Угол градиента.
           */
          readonly GradientDegree: number;

          /**
           * Стиль градиента.
           */
          GradientStyle: "DiagonalDown"
          | "DiagonalUp"
          | "FromCenter"
          | "FromCorner"
          | "Horizontal"
          | "Vertical"
          | "Unknown";

          /**
           * Тип заливки.
           */
          Type: string;

          /**
           * Устанавливает градиентную заливку с одним цветом.
           * @param color - Цвет.
           * @param degree - Угол.
           * @param style - Стиль градиента.
           * @param variant - Вариации градиента.
           */
          SetOneColorGradient(
            color: string,
            degree: number,
            style: "FromCorner",
            variant: 1 | 2
          ): 1 | 0;

          /**
           * Устанавливает градиентную заливку с одним цветом.
           * @param color - Цвет.
           * @param degree - Угол.
           * @param style - Стиль градиента.
           * @param variant - Вариации градиента.
           */
          SetOneColorGradient(
            color: string,
            degree: number,
            style: "DiagonalDown" | "DiagonalUp" | "FromCorner" | "Horizontal" | "Vertical" | "Unknown",
            variant: 1 | 2 | 3 | 4
          ): 1 | 0;

          /**
           * Устанавливает градиентную заливку с двумя цветами.
           * @param color1 - Первый цвет.
           * @param transparency1 - Прозрачность первого цвета.
           * @param color2 - Второй цвет.
           * @param transparency2 - Прозрачность второго цвета.
           * @param style - Стиль градиента.
           * @param variant - Вариации градиента.
           */
          SetTwoColorGradient(
            color1: string,
            transparency1: number,
            color2: string,
            transparency2: number,
            style: "FromCenter",
            variant: 1 | 2
          ): 1 | 0;

          /**
           * Устанавливает градиентную заливку с двумя цветами.
           * @param color1 - Первый цвет.
           * @param transparency1 - Прозрачность первого цвета.
           * @param color2 - Второй цвет.
           * @param transparency2 - Прозрачность второго цвета.
           * @param style - Стиль градиента.
           * @param variant - Вариации градиента.
           */
          SetTwoColorGradient(
            color1: string,
            transparency1: number,
            color2: string,
            transparency2: number,
            style: "DiagonalDown" | "DiagonalUp" | "FromCorner" | "Horizontal" | "Vertical" | "Unknown",
            variant: 1 | 2 | 3 | 4
          ): 1 | 0;
        }

        class Line extends WebsoftBaseClass {
          /**
           * Цвет.
           */
          Color: string;

          /**
           * Видимость.
           */
          IsVisible: boolean;

          /**
           * Стиль линии.
           */
          Style: "Solid" | "Dash" | "Dot" | "DashDot" | "DashDotDot" | "DarkGray" | "MediumGray" | "LightGray";

          /**
           * Уровень прозрачности линии. Принимает значение от 0 (непрозрачная) до 1 (полностью прозрачная).
           */
          Transparency: number;

          /**
           * Толщина в поинтах.
           */
          WeightPt: number;

          /**
           * Толщина в пикселях.
           */
          WeightPx: number;
        }

        class Picture extends WebsoftBaseClass {
          /**
           * Высота картинки.
           */
          Height: number;

          /**
           * Ширина картинки.
           */
          Width: number;

          /**
           * Возвращает данные картинки в формате Base64.
           * @param imageFormat - Формат изображения (png, jpg и т.д.).
           */
          GetBase64String(imageFormat: string): string;

          /**
           * Сохраняет изображение по указанному пути.
           * @param filePath - Путь сохранения.
           */
          SaveAs(filePath: string): 1 | 0;
        }

        class Pictures extends WebsoftBaseClass {
          /**
           * Добавляет в документ изображение без привязки размеров к ячейкам.
           * @param filePath - Путь до файла.
           * @param upperLeftRow - Номер верхней левой строки.
           * @param upperLeftColumn - Номер верхней левой колонки.
           * @param widthScale - Масштабирование по ширине (в процентах).
           * @param heightScale - Масштабирование по высоте (в процентах).
           */
          AddAbsolute(
            filePath: string,
            upperLeftRow: number,
            upperLeftColumn: number,
            widthScale: number,
            heightScale: number
          ): Picture;

          /**
           * Добавляет в документ изображение с привязкой размеров к ячейкам.
           * @param filePath - Путь до файла.
           * @param upperLeftRow - Номер верхней левой строки.
           * @param upperLeftColumn - Номер верхней левой колонки.
           * @param lowerRightRow - Номер нижней правой строки.
           * @param lowerRightColumn - Номер нижней правой колонки.
           */
          AddRelative(
            filePath: string,
            upperLeftRow: number,
            upperLeftColumn: number,
            lowerRightRow: number,
            lowerRightColumn: number
          ): Picture;

          /**
           * Получает изображение по индексу.
           * @param index - Индекс в наборе изображений листа.
           */
          Get(index: number): Picture;
        }
      }
    }

    /** Библиотека для работы с документами в формате PDF. */
    namespace Pdf {
      /** Информация о параграфе. */
      class BaseParagraph extends WebsoftBaseClass { }

      /** Класс для работы с документом в формате PDF */
      class Document extends WebsoftBaseClass {
        /** Параметры страниц документа. Используется только при генерации. */
        PageInfo: PageInfo;
        /** Параметры страниц документа. Используется только при генерации. */
        Pages: PageCollection;

        /** Закрывает документ, освобождает используемые ресурсы. */
        Close(): 1 | 0;

        /**
         * Сохраняет страницы документа в виде изображений.
         * @param {string} path - Путь до папки сохранения.
         * @param {string} format - Формат сохранения ("jpeg","png","optimized").
         * @param {number} newWidth - Ширина изображений.
         * @param {number} maxHeight - Высота изображений.
         * @param {number} resolution - Разрешение изображений (dpi).
         * @param {number} quality - Качество в процентах (применяется только для формата jpeg).
         * @param {boolean} keepProportions - Сохранять пропорции изображений.
         * @returns {string[]} - Массив имен экспортированных файлов.
         */
        ExportPages(
          path: string,
          format: string,
          newWidth: number,
          maxHeight: number,
          resolution: number,
          quality: number,
          keepProportions: boolean
        ): string[];

        /**
         * Используется для получения оглавления из текста документа
         * @returns {string} - Структура оглавления в виде XML.
         */
        GetContents(): string;

        /**
         * Открывает файл в формате PDF.
         * @param {string} filePath - Путь до файла.
         * @param {LoadOptions} [loadOptions] - Параметры загрузки.
         */
        Open(
          filePath: string,
          loadOptions?: LoadOptions
        ): 1 | 0;

        /**
         * Сохраняет текущий документ.
         * @param {string} newPath - Путь сохранения, включая имя файла.
         * @param {SaveOptions} saveOptions - Параметры сохранения файла.
         */
        Save(
          newPath?: string,
          saveOptions?: SaveOptions
        ): 1 | 0;

        /**
         * Сохраняет документ по указанному пути.
         * Формат определяется по расширению имени файла в пути сохранения.
         * Доступные форматы: DOC, DOC, XPS, XML, SVG, EPUB, HTML, MHTML.
         * @param {string} newPath - Путь сохранения, включая имя файла.
         */
        SaveAs(newPath: string): 1 | 0;

        /**
         * Используется для сохранения в формате HTML с расширенными настройками.
         * @param {string} newPath - Путь сохранения, включая имя файла.
         * @param {boolean} useFixedLayout - Фиксированное или "резиновое" расположение элементов.
         * @param {boolean} splitIntoPages - Разбивать документ на страницы.
         */
        SaveAsHtml(newPath: string, useFixedLayout: boolean, splitIntoPages: boolean): 1 | 0;
      }

      /** Класс для создания документов в формате PDF. */
      class Generator extends WebsoftBaseClass {
        /**
         * Альбомная ориентация.
         */
        IsLandscape: boolean;

        /**
         * Путь до папки с ресурсами (изображения, стили и т.д.).
         */
        ResourcesDirectoryPath: string;

        /**
         * Создает новую страницу и размещает в ней текст в формате HTML.
         * @param {string} htmlText - Строка с HTML-данными.
         */
        AddHtmlPage(htmlText: string): 1 | 0;

        /**
         * Создает новый экзпемпляр документа.
         */
        CreateDocument(): 1 | 0;

        /**
         * Загружает данные в формате HTML из указанного файла.
         * @param {string} filePath - Путь до файла в формате HTML.
         */
        LoadHtmlFile(filePath: string): 1 | 0;

        /**
         * Загружает данные в формате HTML из строки.
         * Стили, изображения и прочие ресурсы должны хранится в указанной папке либо рядом с файлом HTML.
         * В документе ссылки на эти ресурсы должны быть указаны без учета папок.
         * Название папки указывается без пути до нее.
         * @param {string} htmlText - Переменная, содержащаю строку в формате HTML.
         */
        LoadHtmlString(htmlText: string): 1 | 0;

        /**
         * Сохраняет документ в формате PDF по указанному пути.
         * @param {string} filePath - Путь сохранения.
         */
        Save(filePath: string): 1 | 0;
      }

      /** Информация о фрагменте HTML. */
      class HtmlFragment extends BaseParagraph { }

      /** Параметры загрузки HTML. */
      class HtmlLoadOptions extends WebsoftBaseClass {
        /** Путь до папки с ресурсами (изображения, стили и т.д.). */
        BasePath: string;
        /** Кодировка. */
        InputEncoding: string;
        /** Информация о странице. */
        PageInfo: PageInfo;
      }

      /** Параметры сохранения HTML. */
      class HtmlSaveOptions extends WebsoftBaseClass {
        /**
         * Фиксированный макет.
         */
        FixedLayout: boolean;

        /**
         * Файл может содержать растровые изображения.
         * Этот параметр определяет, как они должны обрабатываться при конвертации PDF в HTML.
         * Принимает значения "AsPngImagesEmbeddedIntoSvg", "AsExternalPngFilesReferencedViaSvg", "AsEmbeddedPartsOfPngPageBackground".
         */
        RasterImagesSavingMode: string;

        /**
         * Разбивать документ на страницы.
         */
        SplitIntoPages: boolean;
      }

      /** Параметры загрузки документа. */
      class LoadOptions extends WebsoftBaseClass { }

      /** Информация о странице. */
      class Page extends WebsoftBaseClass {
        /** Горизонтальная ориентация. */
        Paragraphs: Paragraphs;
      }

      /** Информация о странице. */
      class PageCollection extends WebsoftBaseClass {
        /** Добавление страницы. */
        Add(): Page;
      }

      /** Информация о странице. */
      class PageInfo extends WebsoftBaseClass {
        /** Высота. */
        Height: number;
        /** Горизонтальная ориентация. */
        IsLandscape: boolean;
        /** Ширина. */
        Width: number;
      }

      /** Информация о параграфах. */
      class Paragraphs extends WebsoftBaseClass {
        /** Добавляет параграф. */
        Add(): Page;
      }

      /** Параметры сохранения документа. */
      class SaveOptions extends WebsoftBaseClass { }
    }

    /** Библиотека для работы с документами в формате Microsoft PowerPoint. */
    namespace Powerpoint {
      /** Класс для работы с документом в формате Microsoft PowerPoint */
      class Presentation extends WebsoftBaseClass {
        /** Высота презентации. */
        Height: number;

        /** Ширина презентации. */
        Width: number;

        /**
         * Используется для закрытия документа.
         */
        Close(): void;

        /**
         * Используется для экспорта слайдов презентации в изображения.
         * @param {string} outputPath - Путь до директории сохранения.
         * @param {string} format - Формат экспорта. Принимает значения "png", "jpg", "optimized".
         * @param {number} width - Ширина изображений.
         * @param {number} height - Высота изображений.
         * @returns {string} - Текст со структурой документа в формате XML.
         */
        Export(
          outputPath: string,
          format: string,
          width: boolean,
          height: boolean
        ): string;

        /**
         * Открывает файл в формате PDF.
         * @param {string} filePath - Путь до файла.
         */
        Open(filePath: string): 1 | 0;

        /**
         * Сохраняет документ по указанному пути.
         * Формат определяется по расширению имени файла в пути сохранения.
         * Доступные форматы: PDF, XPS, ODP, TIFF, PNG, HTML.
         * @param {string} filePath - Путь сохранения, включая имя файла.
         */
        SaveAs(filePath: string): 1 | 0;

        /**
         * Используется для сохранения в формате PNG с расширенными настройками.
         * @param {string} outputPath - Путь до директории сохранения.
         * @param {number} width - Ширина изображений.
         * @param {number} height - Высота изображений.
         * @returns {string} - Текст со структурой документа в формате XML.
         */
        SaveAsPng(): string;
      }

      /** Типы презентаций. */
      enum PresentationTypes {
        Ppt = 0,
        Pptx = 1
      }
    }

    /** Библиотека для работы с документами в формате Microsoft Word. */
    namespace Word {
      class Document extends WebsoftBaseClass {
        /**
         * Получить список закладок.
         * @returns {string} Имена закладок разделенные символом ";".
         */
        GetBookmarks(): string;

        /**
         * Получить текст закладки по ее имени.
         * @param {string} bookmark - Имя закладки.
         * @returns {string} Текст закладки.
         */
        GetBookmarkText(bookmark: string): string;

        /**
         * Открывает файл в формате Microsoft Word.
         * @param {string} filepath - Путь до файла.
         * @returns {number} 1 - успешно, 0 - ошибка.
         */
        Open(filepath: string): 0 | 1;

        /**
         * Сохраняет текущий документ.
         * @returns {number} 1 - успешно, 0 - ошибка.
         */
        Save(): 0 | 1;

        /**
         * Сохраняет документ по указанному пути.
         * Формат определяется по расширению имени файла в пути сохранения.
         * Доступные форматы: DOC, DOCX, PDF, XPS, JPEG, PNG, SVG, BMP, ODT, MHTML, HTML, RTF, WML, TXT, EPUB.
         * @param {string} filepath - Путь до файла.
         * @returns {number} 1 - успешно, 0 - ошибка.
         */
        SaveAs(filepath: string): 0 | 1;

        /**
         * Установить текст закладки в формате HTML.
         * @param {string} bookmark - Имя закладки.
         * @param {string} value - Устанавливаемое значение.
         * @returns {number} 1 - успешно, 0 - ошибка.
         */
        SetBookmarkHtml(bookmark: string, value: string): 0 | 1;

        /**
         * Установить текст закладки.
         * @param {string} bookmark - Имя закладки.
         * @param {string} value - Устанавливаемое значение.
         * @returns {number} 1 - успешно, 0 - ошибка.
         */
        SetBookmarkText(bookmark: string, value: string): string;
      }
    }
  }

  namespace RegExp {
    class Match {
      Default: string;
      FirstIndex: number;
      Length: number;
      Value: string;
      SubMatches(): SubMatches;
      SubMatches(index: number): string;
      ToString(): string;
    }

    class MatchCollection {
      Count: number;
      Item(index: number): Match;
    }

    class RegExp extends WebsoftBaseClass {
      Global: boolean;
      IgnoreCase: boolean;
      MultiLine: boolean;
      Pattern: string;
      Execute(source: string): MatchCollection;
      Execute(source: string, pattern: string): MatchCollection;
      IsMatch(source: string): boolean;
      Replace(source: string, repl: string): string;
    }

    class SubMatches {
      Count: number;
      Item(index: number): string;
    }
  }

  namespace Utils {
    class Crypto {
      /**
       * Используется для получения последней произошедшей ошибки.
       * @returns Текст последней произошедшей ошибки.
       */
      GetError(): string;

      HMAC_SHA1(message: string, secret: string): string;
      HMAC_SHA256(message: string, secret: string): string;
    }

    class FileUtils {
      /**
       * Используется для получения последней произошедшей ошибки.
       * @returns Текст последней произошедшей ошибки.
       */
      GetError(): string;

      GetEncoding(filePath: string): string;
    }

    class ServiceData {
      Data: {
        [key: string]: string;
      };

      Keys: string[];
      Name: string;
      Values: string[];
    }

    class UUID {
      getUUID(): string;
    }

    class WebUtils {
      IsError: boolean;

      /**
       * Используется для получения последней произошедшей ошибки.
       * @returns Текст последней произошедшей ошибки.
       */
      GetError(): string;

      QrGen(text: string, filePath: string): string;
      ResolveUrlDns(url: string, allowIPV6?: boolean, defaultValue?: string, mask?: string): string;
      WildCardToRegular(value: string): string;
    }
  }

  namespace Video {
    class Video extends WebsoftBaseClass {
      /**
       * Список доступных форматов, разделенных символом ";".
       */
      readonly AvailableFormats: string;
      /**
       * Высота исходного видео.
       */
      readonly Height: number;
      /**
       * Устанавливает путь до директории с утилитами ffmpeg и ffprobe.
       */
      UtilsDirectory: string;
      /**
       * Ширина исходного видео.
       */
      readonly Width: number;

      /**
       * Добавляет формат и настройки для пакетной конвертации.
       * @param {string} sizeName - Название формата (например, 720p).
       * @param {string} format - Формат - разрешение файла в результате конвертации (например flv).
       * @param {number} width - Ширина видео.
       * @param {number} height - Высота видео.
       * @param {number} bitrate - Битрейт видео.
       * @param {number} bitrateTolerance - Максимально допустимы битрейт видео.
       * @param {number} fps - Количество кадров в секунду (на данный момент не используется, но параметр передавать необходимо).
       * @param {number} audioSamplingRate - Частота дискретизации аудио (например, 44100).
       * @param {number} audioBitrate - Битрейт аудио.
       */
      AddConvertFormat(
        sizeName: string,
        format: string,
        width: number,
        height: number,
        bitrate: number,
        bitrateTolerance: number,
        fps: number,
        audioSamplingRate: number,
        audioBitrate: number
      ): 1 | 0;

      /**
       * Конвертация загруженного видео. Формат определяется из разрешения выходного файла.
       * @param {string} outFilePath - Путь до выходного файла.
       * @param {number} width - Ширина видео.
       * @param {number} height - Высота видео.
       * @param {number} bitrate - Битрейт видео.
       * @param {number} bitrateTolerance - Максимально допустимы битрейт видео.
       * @param {number} fps - Количество кадров в секунду (на данный момент не используется, но параметр передавать необходимо).
       * @param {number} audioSamplingRate - Частота дискретизации аудио (например, 44100).
       * @param {number} audioBitrate - Битрейт аудио.
       */
      Convert(
        outFilePath: string,
        width: number,
        height: number,
        bitrate: number,
        bitrateTolerance: number,
        fps: number,
        audioSamplingRate: number,
        audioBitrate: number
      ): 1 | 0;

      /**
       * Конвертирует видео в указанный формат с заданными заранее форматами и параметрами.
       * @param {string} outputPath - Путь до директории для сохранения сконвертированных файлов.
       * @param {string} fileName - Префикс результирующего файла. Сконвертированные файлы будут иметь название [fileName]_[название формата].[тип]. Например видео_720p.flv
       */
      ConvertAll(
        outputPath: string,
        fileName: string
      ): 1 | 0;

      /**
       * Сохраняет скришнот с указанного времени на видео.
       * @param {string} thumbnailPath - Путь до выходного файла.
       * @param {number} time - Секунда видео.
       * @param {number} width - Ширина скриншота.
       * @param {number} height - Высота скриншота.
       */
      GetThumbnail(
        thumbnailPath: string,
        time: number,
        width: number,
        height: number
      ): 1 | 0;

      /**
       * Загружает файл видео.
       * @param {string} filePath - Путь до файла.
       */
      LoadFile(filePath: string): 1 | 0;

      /**
       * Устанавливает путь до директории с утилитами ffmpeg и ffprobe.
       * @param {string} directoryPath - Путь до директории с утилитами ffmpeg и ffprobe.
       */
      SetUtilsDirectory(directoryPath: string): 1 | 0;
    }
  }

  class WebsoftBaseClass {
    /**
     * Используется для получения последней произошедшей ошибки.
     * @returns Текст последней произошедшей ошибки.
     */
    GetError(): string;

    /**
     * Используется для получения версии компонента.
     * @returns Версия компонента.
     */
    GetVersion(): string;
  }

  namespace Zip {
    class Zip {
      CharSet: string;

      Compression: number;

      /**
       * Уровень сжатия. Принимает значения от 0 до 9.
       */
      CompressionLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

      /**
       * Добавляет в архив содержимое указанной директории.
       * @param path - Путь до директории с файлами.
       */
      AddDirectory(path: string): 1 | 0;

      /**
       * Добавляет содержимое указанной директории в директорию внутри архива.
       * @param path - Путь до директории с файлами.
       * @param pathInArchive - Путь до директории внутри архива.
       */
      AddDirectoryToPath(path: string, pathInArchive: string): 1 | 0;

      /**
       * Добавляет в архив файл, расположенный по указанному пути.
       * @param path - Путь до файла.
       */
      AddFile(path: string): 1 | 0;

      /**
       * Добавляет в архив файлы, расположенные по указанной маске пути.
       * @param path - Путь до файлов, добавляемых в архив. Представляет собой путь до папки и маску имени файлов.
       */
      AddFiles(path: string): 1 | 0;

      /**
       * Добавляет указанные файлы в директорию внутри архива.
       * @param path - Путь до файлов, добавляемых в архив. Может использовать путь до директории с файлами либо маску.
       * @param pathInArchive - Директория внутри архива, куда будут добавлены файлы.
       */
      AddFilesToPath(path: string, pathInArchive: string): 1 | 0;

      /**
       * Закрывает архив и обнуляет все ссылки на файл.
       */
      Close(): void;

      /**
       * Создает новый Zip-архив по указанному пути.
       * @param filePath - Путь до файла.
       */
      CreateArchive(filePath: string): 1 | 0;

      /**
       * Извлекает данные из архива по указанному пути.
       * @param outputPath - Путь до директории для распаковки.
       */
      Extract(outputPath: string): 1 | 0;

      /**
       * Извлекает указанные файлы из архива.
       * @param filesPath - Маска имени файлов.
       * @param directoryInArchive - Директория внутри архива, из которой следует извлекать файлы.
       * Для извлечения даных из корня выставляется пустой строкой.
       * @param outputPath - Путь до директории для распаковки.
       */
      ExtractFiles(
        filesPath: string,
        directoryInArchive: string,
        outputPath: string
      ): 1 | 0;

      /**
       * Открывает Zip-архив по указанному пути.
       * @param filePath - Путь до файла.
       */
      OpenArchive(filePath: string): 1 | 0;

      OpenArchive(filePath: string, access: System.IO.FileAccess): number;

      /**
       * Открывает Zip-архив по указанному пути. Если файл не существует, создается новый файл.
       * @param filePath - Путь до файла.
       */
      OpenOrCreate(filePath: string): 1 | 0;

      /**
       * Формирует и сохраняет архив.
       */
      Save(): 1 | 0;

      /**
       * Устанавливает уровень сжатия.
       * @param compressionLevel
       */
      SetCompressionLevel(compressionLevel: number): 1 | 0;
    }
  }
}

declare namespace System {
  namespace IO {
    enum FileAccess {
      Read = 1,
      ReadWrite = 3,
      Write = 2
    }
  }

  const ComputerName: string;
}
