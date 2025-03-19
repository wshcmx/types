//#region Функции для работы с объектами

/**
 * Функция ядра, которая удаленно (на сервере) вызывает метод с параметрами для конкретного объекта.
 * Примечание - По существу, оператор oResult = CallObjectMethod(oLib, ‘some_function’, [param1, param2])
 * выполняет почти то же самое, что и oResult = oLib.some_function(param1, param2),
 * с той разницей, что второй вариант выполнится там, где он вызван (на клиенте или на сервере),
 * а первый вариант – всегда выполняется на сервере (но результат выполнения возвращается в место вызова).
 * См. Также tools.call_code_library_method.
 * @param {object} object - Тип: Объект без задания структуры (variant). Объект, для которого производится вызов метода.
 * @param {string} method - Тип: Строка. Название вызываемого метода объекта.
 * @param {T} [params] - (необязательный). Тип: Массив без описания структуры элементов. Массив параметров.
 * В качестве элементов массива могут быть объекты разного типа – строки, числа, объекты, массивы…
 * Порядок следования элементов в массиве должен соответствовать порядку параметров метода.
 * Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.
 * В случае, если параметры метода не предусмотрены, указывается пустой массив ([]).
 * @returns {unknown} Result.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare function CallObjectMethod<O, M extends keyof O = keyof O>(object: O, method: M, params?: O[M] extends (...args: any) => any ? Parameters<O[M]> : never): O[M] extends (...args: any) => any ? ReturnType<O[M]> : unknown;

/**
 * Функция работает аналогично функции {@link CallObjectMethod}, но с блокировкой доступа через переданный lock.
 * То есть, если во время работы функции, из другого потока будет вызвана другая функция с этим же lock,
 * то выполнение в другом потоке не начнется, пока не завершится вызов в первом потоке.
 * {@link GetObjectPropertyWithLock}
 * {@link Lock}
 * {@link SetObjectPropertyWithLock}
 * @param {T} object - Объект произвольного типа
 * @param {string} methodName - Имя метода.
 * @param {unknown[]} argsArray - Стандартный массив аргументов.
 * @param {Lock} lock - Объект типа Lock
 * @returns {unknown} Result.
 */
declare function CallObjectMethodWithLock<T>(object: T, methodName: string, argsArray: unknown[], lock: Lock): unknown;

/**
 * Возвращает список имен всех свойств объектов класса.
 * Возвращается полный список имен, описанных в деларации класса, независио от того,
 * было ли конкретное свойтсо установлено в данном объекте.
 * @param {T} object - Объект класса.
 * @returns {unknown} -
 */
declare function GetClassObjectPropertyNames<T>(object: T): unknown;

/**
 * Функция позволяет получить значение свойства абстрактного объекта по имени динамическим способом.
 * Таким образом, вызов GetObjectProperty( object, 'xxx' ) эквивалентен выражению object.xxx.
 * Для стандартного объекта вызов GetObjectProperty( object, propName ) эквивалентен вызову object[propName].
 * В зависимости от типа объекта при попытке получить свойство, которое отсутствует в объекте,
 * возможно как срабатывание исключения, так и возращение результата undefined.
 * @param {T} object - Объект.
 * @param {string} propertyName - Имя свойства.
 * @returns {unknown} Результат.
 */
declare function GetObjectProperty<T, K extends keyof T>(object: T, propertyName: K | string): T[K] | never;

/**
 * Функция  эквивалентна {@link GetObjectProperty} за одним исключением:
 * если в качестве propertyName передано имя 'This', функция вернет ссылку на переданный объект.
 * @param {T} object - Объект.
 * @param {string} propertyName - Имя свойства либо This.
 * @returns {unknown} Результат.
 */
declare function GetObjectPropertyOrSelf<T, K extends keyof T>(object: T, propertyName: K | string): T[K] | T;

/**
 * Функция работает аналогично функции {@link GetObjectProperty}, но с блокировкой доступа через переданный lock.
 * То есть, если во время работы функции, из другого потока будет вызвана другая функция с этим же lock,
 * то выполнение в другом потоке не начнется, пока не завершится вызов в первом потоке.
 * @param {T} object - Объект произвольного типа.
 * @param {string} propertyName - Имя свойства.
 * @param {Lock} lock - Объект типа {@link Lock}.
 * @returns {unknown} Результат.
 */
declare function GetObjectPropertyWithLock<T, K extends keyof T>(object: T, propertyName: K | string, lock: Lock): T[K] | never;

/**
 * Функция эквивалентна {@link GetObjectProperty} за одним исключением:
 * если в объекте отсутствует данное свойство, то функция возвращает undefined.
 * @param {T} object - Объект произвольного типа.
 * @param {string} propertyName - Имя свойства.
 * @returns {unknown} Результат.
 */
declare function GetOptObjectProperty<T, K extends keyof T>(object: T, propertyName: K | string): T[K] | undefined;

/**
 * Функция позволяет установить значение свойства абстрактного объекта по имени динамическим способом.
 * Таким образом, вызов SetObjectProperty(object, "xxx", value) эквивалентен выражению object.xxx = value.
 * Для стандартного объекта вызов SetObjectProperty(object, propName, value) эквивалентен вызову object[propName] = value.
 * В зависимости от типа объекта при попытке установить свойство, которое отсутствует в объекте, возможно срабатывание исключения.
 * @param {T} object - Объект произвольного типа.
 * @param {string} propertyName - Имя свойства.
 * @param {string} propertyValue - Значение свойства
 * @returns {void | never} - Результат.
 */
declare function SetObjectProperty<T, K extends keyof T, V>(object: T, propertyName: K | string, propertyValue: V): void | never;

/**
 * Функция SetObjectPropertyWithLock() работает аналогично функции SetObjectProperty(), но с блокировкой доступа через переданный lock.
 * То есть, если во время работы функции, из другого потока будет вызвана другая функция с этим же lock,
 * то выполнение в другом потоке не начнется, пока не завершится вызов в первом потоке.
 * @param {T} object - Объект произвольного типа.
 * @param {string} propertyName - Имя свойства.
 * @param {string} propertyValue - Значение свойства
 * @param {Lock} lock - Объект типа {@link Lock}.
 * @returns {void | never} - Результат.
 */
declare function SetObjectPropertyWithLock<T, K extends keyof T, V>(object: T, propertyName: K | string, propertyValue: V, lock: Lock): void | never;

//#endregion

//#region Преобразование типов данных

/**
 * Функция Compare() сравнивает два произвольных значения.
 * Возращает 0, если значения равны, положительное число,
 * если первое значение больше второго, и отрицательное число,
 * если первое значение меньше второго.
 * @param {T} value1 - Значение 1.
 * @param {K} value2 - Значение 2.
 * @returns {number} Результат.
 */
declare function Compare<T, K>(value1: T, value2: K): -1 | 0 | 1;

/**
 * Возвращает тип переданного значения.
 * @param {T} entity - Проверяемое значение.
 * @returns {string} Результат.
 */
declare function DataType<T>(entity: T): string;

/**
 * Проверяет, является ли значение `undefined`, `null` либо пустой строкой.
 * Позволяет писать универсальный код, не зная точный тип данных переданного аргумента.
 * @param {any} arg - Любое значение.
 * @returns {boolean} Результат.
 * @example
 * ```
 * IsEmptyValue(123) === false
 * IsEmptyValue("123") === false
 * IsEmptyValue(null) === true
 * IsEmptyValue("") === true
 * ```
 */
declare function IsEmptyValue(arg: Object): false;

/**
 * Проверяет, является ли значение `undefined`, `null` либо пустой строкой.
 * Позволяет писать универсальный код, не зная точный тип данных переданного аргумента.
 * @param {any} arg - Любое значение.
 * @returns {boolean} Результат.
 * @example
 * ```
 * IsEmptyValue(123) === false
 * IsEmptyValue("123") === false
 * IsEmptyValue(null) === true
 * IsEmptyValue("") === true
 * ```
 */
declare function IsEmptyValue(arg: unknown): arg is undefined | null | "";

/**
 * Возвращает тип переданного значения.
 * @param {T} entity - Проверяемое значение.
 * @returns {string} Результат.
 */
declare function ObjectType<T>(entity: T): string;

/**
 * Преобразует значение аргумента к вещественному числу.
 * Если аргумент не может быть преобразован к вещественному числу,
 * функция возвращает undefined либо defaultVal, если оно указано.
 * @param {T} value - Целое число, вещественное число или строка, содержащая вещественное число.
 * @param {K} [defaultValue] - Значение по умолчанию.
 * @returns {number | K} Результат.
 */
declare function OptReal<T, K = undefined>(value: T, defaultValue?: K): number | K;

/**
 * Преобразует значение аргумента к вещественному числу.
 * @param {string | number} value - Целое число, вещественное число или строка, содержащая вещественное число.
 * @returns {number} Результат.
 * @example
 * ```
 * Real(12.6);
 * Real("12.6");
 * ```
 */
declare function Real(value: string | number): number;

/**
 * Преобразует значение аргумента к целому числу.
 * @param {number} value - Целое число, вещественное число или строка, содержащая число.
 * @returns {number} Результат.
 * @example
 * ```
 * Int(123);
 * Int("123");
 * Int(123.45);
 * ```
 */
declare function Int(value: string | number): number;

/**
 * Преобразует значение аргумента к целому числу.
 * Если преобразование выполнить невозможно, возвращает undefined либо defaultVal, если оно указано.
 * @param {T} value - Целое число, вещественное число или строка, содержащая число.
 * @param {K} [defaultValue] - Значение по умолчанию.
 * @returns {number | K} Результат.
 */
declare function OptInt<T, K = undefined>(value: T, defaultValue?: K): number | K;

/**
 * Возвращает скалярное значение аргумента, если в качестве аргумента передан объект.
 * Если передано скалярное значение, возвращается оно же.
 * @param {XmlElem<T> | T} value - Аргумент (Any).
 * @returns {T} Результат.
 */
declare function RValue<T>(value: XmlElem<T> | T): T;

/**
 * Преобразует 10 обозначение цвета (RGB) в  шестнадцатеричное, принятое в формате html.
 * @param {string} color - 10 обозначение цвета .
 * @returns {string} Результат.
 * @example StrHexColor("128,128,128"); // "808080"
 */
declare function StrHexColor(color: string): string;

/**
 * Возвращает строку, содержащую аргумент в шестнадцатеричном виде (64 бита).
 * @param {number} num - Число, которую нужно преобразовать.
 * @returns {string} Строка.
 * @example StrHexInt(1000); // "00000000000003E8"
 */
declare function StrHexInt(num: number): string;

/**
 * Преобразует целочисленный аргумент в строку.
 * @param {number} arg - Целочисленный аргумент.
 * @param {number} [digitsNum] - Минимальное число символов в строке.
 * Недостающие символы компенсируются нулями перед числом.
 * @param {boolean} [addGroupDelim] - Разделять тысячные разряды пробелами.
 * @returns {string} Результат.
 * @example
 * ```
 * StrInt(11500) == '11500'
 * StrInt(11500, 6) == '011500'
 * StrInt(11500, 0, true) == '11 500'
 * ```
 */
declare function StrInt(arg: number, digitsNum?: number, addGroupDelim?: boolean): string;

/**
 * Преобразует целочисленный аргумент в строку.
 * Используется в том числе для того что бы вывести отрицательное число.
 * @param {number} value - Целочисленный аргумент.
 * @param {number} [digitsNum] - Минимальное число символов в строке. Необязательный аргумент.
 * Недостающие символы компенсируются нулями перед числом.
 * @param {boolean} [addGroupDelim] - Флаг, разделять тысячные разряды пробелами или нет.
 * @returns {string} Результат преобразования.
 */
declare function StrSignedInt(value: number, digitsNum?: number, addGroupDelim?: boolean): string;

/**
 * Если значение целочисленного аргумента = 0 преобразует его в "-",
 * иначе в строку (аналогично функции {@link StrInt}).
 * @param {number} arg - Целочисленный аргумент.
 * @param {number} [digitsNum] - Минимальное число символов в строке.
 * @param {boolean} addGroupDelim - Разделять тысячные разряды пробелами.
 * @returns {string} Результат.
 */
declare function StrIntZero(arg: number, digitsNum: number, addGroupDelim: boolean): string;

/**
 * Преобразует вещественный аргумент в строку.
 * @param {number} value - Вещественный аргумент.
 * @param {number} [precision=6] - Максимальное число знаков после запятой. По умолчанию 6.
 * @param {boolean} [addGroupDelim] - Разделять тысячные разряды пробелами.
 * @returns {string} Результат.
 * @example
 * ```
 * StrReal(90154.249); // "90154.249"
 * StrReal(90154.249, 2); // "90154.25"
 * StrReal(90154.249, 2, true); // "90 154.25"
 * ```
 */
declare function StrReal(value: number, precision?: number, addGroupDelim?: boolean): string;

/**
 * Преобразует вещественный аргумент в строку.
 * @param {number} arg - Вещественный аргумент.
 * @param {number} [precision] - Число символов в дробной части числа. Недостающие символы компенсируются нулями.
 * @param {boolean} [addGroupDelim] - Разделять тысячные разряды пробелами.
 * @returns {string} Результат.
 * @example
 * ```
 * StrRealFixed(90154.2) == "90154.20";
 * StrRealFixed(90154.2, 2, true) == "90 154.20";
 * ```
 */
declare function StrRealFixed(arg: number, precision?: number, addGroupDelim?: boolean): string;

/**
 * Преобразует целое число в словесное строковое представление.
 * Только для русского языка.
 * @param {number} arg - Числовой аргумент.
 * @param {0 | 1} [gender] - Род (0 - мужской, 1] - женский).
 * @returns {string} Результат.
 * @example
 * ```
 * TextInt(121) == "сто двадцать один"
 * TextInt(121, 1) == "сто двадцать одна"
 * ```
 */
declare function TextInt(arg: number, gender: 0 | 1): string;

//#endregion

//#region Преобразование форматов и кодировок

/**
 * Проверяет строку в UTF-8 на валидность.
 * Если в строке обнаруживается некорректная для UTF-8 последовательность байт, она заменяется на символ '?'.
 * @param {string} str - Исходная строка.
 * @returns {string} Возвращается исходная либо измененная строка.
 */
declare function AdjustUtf8(str: string): string;

/**
 * Функция проверяет, является ли строка валидной строкой в кодировке UTF-8.
 * Если да, возвращает саму строку.
 * Если нет, декодирует строку, как если бы она была в однобайтовой кодировке, установленной по умолчанию (обычно windows-1251).
 * Если приложение работает не в кодировке UTF-8, функция возвращает исходную строку без изменений.
 * Функция поддерживается только на сервере или десктопном клиенте.
 * @returns {string} Возвращается исходная либо измененная строка.
 */
declare function AutoDecodeCharset(): string;

/**
 * Функция кодирует строку, которая будет использоваться внутри MIME-заголовка,
 * при условии что содержимое труебует кодирование (наппример, содержит не ASCII символы).
 * Результат имеет вид "=?utf-8?B?<base64data>".
 * @param {string} str - Исходная строка.
 * @returns {string} Возвращается исходная либо измененная строка.
 */
declare function EncodeMimeHeaderValue(str: string): unknown;

/**
 * Функция преобразует строку в формате конфигурационного файла (.ini) в стандартный объект.
 * @param {string} configData - Данные конфигурационного файла.
 * @returns {{[key: string]: unknown}} Результат.
 */
declare function ParseConfig(configData: string): {[key: string]: unknown};

/**
 * Функция преобразует строку со значением поля MIME заголовка в стандартный объект,
 * содержащий список вспомогательных параметров.
 * @param {string} string - Строка со значением поля MIME заголовка.
 * @returns {{[key: string]: string}} Результат.
 */
declare function ParseHeaderPairs(string: string): {[key: string]: string};

/**
 * Проверяет строку на некорректную кодировку, вызванную одним из типовых случаев неправильной двойной конвертации.
 * @param {string} str - Исходная строка.
 * @returns {string} Возвращает новую в правильной кодировку, если ее удалось восстановить. В противном случае возвращается исходная строка.
 */
declare function RestoreBrokenCharsetEncoding(str: string): string;

/**
 * Преобразует строку из формата UTF-16 в UTF-8.
 * @param {string} str - Исходная строка.
 * @returns {string} Результат.
 */
declare function Utf16ToUtf8(str: string): string;

/**
 * Маскирует определенные символы в строке, чтобы результат мог быть использован в XML - между тегами либо внутри атрибута.
 * @param {string} str - Исходная строка.
 * @example XmlEscape("aaa < bbb & ccc > ddd"); // "aaa &lt; bbb &amp; ccc &gt; ddd"
 * @returns {string} Результат.
 */
declare function XmlEscape(str: string): string;

/**
 * Переводит строку из заданной кодировки в кодировку, используемой в программе по умолчанию.
 * @param {string} str - Строка, которую нужно перевести.
 * @param {string} charset - Название кодировки, в которую нужно перевести строку.
 * @returns {string} Результат.
 */
declare function DecodeCharset(str: string, charset: WebtutorCharsets): string;

/**
 * Декодирует данные из формата Base64. Данные возвращаются в виде строки, которая может содержать бинарные данные.
 * @param {string} str - Строка в Base64.
 * @returns {string} Результат.
 */
declare function Base64Decode(str: string): string;

/**
 * Переводит строку из кодировки, используемой  в программе по умолчанию, в заданную кодировку.
 * @param {string} str - Строка.
 * @param {string} charset - Имя кодировки, в которую нужно перевести строку.
 * @returns {string} Результат.
 */
declare function EncodeCharset(str: string, charset: WebtutorCharsets): string;

/**
 * Кодирует строку в формат Base64.
 * @param {string} str - Строка. Может содержать бинарные данные.
 * @returns {string} Результат.
 */
declare function Base64Encode(str: string): string;

/**
 * Преобразует 16-ричное представление в строку из байт.
 * @param {string} str - Строка в 16-ричном представлении.
 * @returns {string} Результат.
 * @see {@link HexData}
 */
declare function DataFromHex(str: string): string;

/**
 * Преобразует массив байт в 16-ое представление.
 * @param {string} arg - Строка, содержащая массив байт.
 * @example HexData("апрол"); // "E0EFF0EEEB"
 * @returns {string} Результат.
 */
declare function HexData(arg: string): string;

/**
 * Кодирует обычный текст в формат rtf.
 * @param {string} str - Строка, которую нужно преобразовать.
 * @returns {string} Результат.
 */
declare function RtfEncode(str: string): string;

/**
 * Переводит текст в формате rtf в обычный текст.
 * @param {string} str - Текст в формате rtf.
 * @returns {string} Результат.
 */
declare function RtfToPlainText(str: string): string;

/**
 * Кодирует значение как константу (литерал) языка SQL.
 * Функция используется при генерировании выражений на SQL из программы.
 * @param {any} arg - Аргумент произвольного типа.
 * @returns {string}
 * Значение типа string заключается в кавычки, при этом существующие кавычки внутри строки маскируются по правилам SQL.
 * Значение типа integer переводится в соответствующее строковое значение.
 * Значение типа date переводится в строку, содержащую дату в формате SQL.
 */
declare function SqlLiteral(arg: string | number | Date | null): string;

/**
 * Дешифрует строку, зашифрованную встроенным алгоритмом шифрования.
 * @param {string} str - Зашифрованная строка.
 * @returns {string} Расшифрованная строка.
 */
declare function StrStdDecrypt(str: string): string;

/**
 * Шифрует строку встроенным алгоритмом шифрования
 * @param {string} str - Шифруемая строка.
 * @returns {string} Зашифрованная строка.
 */
declare function StrStdDecrypt(str: string): string;

/**
 * Декодирует строчку по стандартным правилам декодирования url, т.е. Заменяет знак "%код" на соответствующий символ.
 * @param {string} url - Url.
 * @example UrlDecode("qwerty%2D%E0%EF%F0%EE%EB%2Ehtm"); // "qwerty-апрол.htm"
 * @returns {string} Результат.
 */
declare function UrlDecode(url: string): string;

/**
 * Кодирует строку символов для использования в качестве параметра url.
 * @param {string} str - Строка.
 * @example UrlEncode("qwerty-апрол.htm"); // "qwerty%2D%E0%EF%F0%EE%EB%2Ehtm"
 * @returns {string} Результат.
 */
declare function UrlEncode(str: string): string;

/**
 * Кодирует строку символов для использования в качестве параметра url, используя UTF-16.
 * @param {string} str - Строка.
 * @example UrlEncode("qwerty-апрол.htm"); // "qwerty%2D%u0430%u043F%u0440%u043E%u043B%2Ehtm"
 * @returns {string} Результат.
 */
declare function UrlEncode16(str: string): string;

/**
 * Преобразует объект типа Object в строку вида "name1=value1&name2=value2&..."
 * для использования в качестве запроса в url.
 * @param {object} obj - Объект, содержащий список значений.
 * @returns {string} Результат.
 */
declare function UrlEncodeQuery(obj: Object): string;

/**
 * Преобразует объект типа Object в строку вида "name1=value1&name2=value2&..."
 * для использования в качестве запроса в url.
 * @param {object} obj - Объект, содержащий список значений.
 * @param {string} [charset] - Целевая кодировка.
 * @returns {string} Результат.
 */
declare function UrlEncodeQueryExt(obj: Object, charset: string): string;

/**
 * Формирует тело http запроса для последующей отправки методом POST в формате multipart/form-data.
 * @param {object} obj - Объект, содержащий атрибуты и их значения (Object).
 * @returns {string} Результат.
 */
declare function MultipartFormEncode(obj: Object): string;

/**
 * Маскирует аргумент для вставки в xml в качестве значения атрибута.
 * В результате действия функции символы перевода строки, табуляции,
 * символы & и < и двойные кавычки маскируются последовательностями &#10;, &#09;, &lt;, &amp; и &quot;.
 * @param {string} str - Аргумент.
 * @returns {string} Результат.
 */
declare function XmlAttrEncode(str: string): string;

/**
 * Формирует строку с xml тегом.
 * @param {string} name - Имя тега.
 * @param {string} text - Значение тега.
 * @returns {string} - Результат.
 * @example XmlStr("text", "Hotel \"Ariana\""); // <text>Hotel &quot;Ariana&quot;</text>
 */
declare function XmlStr(name: string, text: string): string;

/**
 * Кодирует аргумент как константу XQuery. Функция используется при генерировании выражений XQuery из программы.
 * @param {string | number| Date} arg - Аргумент.
 * @returns {string}
 * Значение типа string заключается в одинарные кавычки,
 * при этом существующие кавычки внутри строки маскируются по правилам XQuery.
 * Значение типа integer или real переводится в соответствующее строковое значение
 * Значение типа bool переводится в строку 'true()' или 'false()'.
 * Значение типа date переводится в строку вида date( '2011-01-30T10:30:00' ).
 */
declare function XQueryLiteral(arg: string | number | Date): string;

//#endregion

//#region Работа со строками

/**
 * Возвращает фрагмент сроки по заданным позициям (в символах).
 * @param {number} startPosition - Начальная позиция.
 * @param {number} endPosition - Конечная позиция.
 * @returns {string} Результат.
 */
declare function StrCharRangePos(startPosition: number, endPosition: number): string;

/**
 * Проверяет две строки на равенство, в том числе без учета регистра.
 * @param {string} str1 - Строка 1.
 * @param {string} str2 - Строка 2.
 * @param {boolean} ignoreCase - Не учитывать регистр.
 * @returns {boolean} Результат.
 */
declare function StrEqual(str1: string, str2: string, ignoreCase?: boolean): boolean;

/**
 * Функция StrFromCharCode преобразует код символа (число) в строку, содержащую этот символ.
 * @param {number} code - Код символа.
 * @returns {string} Результат.
 */
declare function StrFromCharCode(code: number): string;

/**
 * Собирает строку из массива кодов каждого символа в UTF-16.
 * @param {string[]} array - Массив кодов символов
 * @returns {string} Результат.
 */
declare function StrFromCharCodesArray(array: string[]): string;

/**
 * Возвращает позицию (в байтах) подстроки внутри строки.
 * Если подстрока не найдена, возвращает undefined.
 * @param {string} str - Строка.
 * @param {string} subStr - Подстрока.
 * @param {boolean} ignoreCase - Без учета регистра.
 * @param {number} startPos - Позиция (в байтах), с которой должен начинаться поиск подстроки.
 * @returns {number | undefined} Результат.
 * @see {@link StrOptSubStrRightPos}
 */
declare function StrOptSubStrPos(str: string, subStr: string, ignoreCase?: boolean, startPos?: number): number | undefined;

/**
 * Возвращает позицию (в байтах) подстроки внутри строки с бинарным режимом поиска
 * (строки могут содержать любые данные, включая символ \0).
 * Если подстрока не найдена, возвращает undefined.
 * @param {string} str - Строка.
 * @param {string} subStr - Подстрока.
 * @param {boolean} ignoreCase - Без учета регистра.
 * @param {number} startPos - Позиция (в байтах), с которой должен начинаться поиск подстроки.
 * @returns {number | undefined} Результат.
 * @see {@link StrOptSubStrRightPos}
 */
declare function StrOptSubStrPosB(str: string, subStr: string, ignoreCase?: boolean, startPos?: number): number | undefined;

/**
 * Возвращает позицию (в байтах) подстроки внутри строки, при этом поиск осуществяется справа налево.
 * Если подстрока не найдена, возвращает undefined.
 * @param {string} str - Строка.
 * @param {string} subStr - Подстрока.
 * @param {boolean} ignoreCase - Без учета регистра.
 * @param {number} startPos - Позиция (в байтах), с которой должен начинаться поиск подстроки.
 * @returns {number | undefined} Результат.
 * @see {@link StrOptSubStrPos}
 */
declare function StrOptSubStrRightPos(str: string, subStr: string, ignoreCase?: boolean, startPos?: number): number | undefined;

/**
 * Разбивает сроку на две подстроки, использую заданный разделитель.
 * Возвращает массив из двух подстрок.
 * Если разделитель отсутствует, возвращает массив из исходной строки и пустой строки.
 * @param {string} str - Строка.
 * @param {boolean} useQuotes - Если true, и значение слева или справа от разделителя обернуто в кавычки, то кавычки удаляются из результата.
 * @returns {string[]} Результат.
 */
declare function StrSplit2(str: string, useQuotes?: boolean): string[];

type StrSplitToLinesOptions = {
  LineFolding: boolean;
};

/**
 * Разбивает сроку на подстроки, использую разделители LF либо CRLF.
 * @param {string} str - Строка.
 * @param {object} options - Объект, содержащий набор опций вызова.
 * @returns {string[]} - Массив подстрок.
 */
declare function StrSplitToLines(str: string, options?: StrSplitToLinesOptions): string[];

/**
 * Разбивает сроку на одиночные символы.
 * Возвращает массив строк, каждая из которых содержит одиночный символ.
 * @param {string} str - Строка.
 * @returns {string[]} Массив символов.
 */
declare function StrToCharArray(str: string): string[];

/**
 * Разбивает сроку на одиночные символы.
 * Возвращает массив кодов каждого символа в UTF-16.
 * @param {string} str - Строка.
 * @returns {number[]} Массив кодов символов.
 */
declare function StrToCharCodesArray(str: string): number[];

/**
 * Проверяет, начинается ли строка на другую строку.
 * @param {string} str - Строка, в которой ищут.
 * @param {string} subStr - Подстрока, которую ищут.
 * @param {boolean} [ignoreCase] - Не учитывать регистр.
 * @returns {boolean} Результат.
 */
declare function StrBegins(str: string, subStr: string, ignoreCase?: boolean): boolean;

/**
 * Проверяет, содержит ли строка другую строку в качестве подстроки.
 * @param {string} str - Строка, в которой ищут.
 * @param {string} subStr - Подстрока, которую ищут.
 * @param {boolean} [ignoreCase] - Не учитывать регистр.
 * @returns {boolean} Результат.
 */
declare function StrContains(str: string, subStr: string, ignoreCase?: boolean): boolean;

/**
 * Проверяет, оканчивается ли строка на другую строку.
 * @param {string} str - Строка, в которой ищут.
 * @param {string} subStr - Подстрока, которую ищут.
 * @param {boolean} [ignoreCase] - Не учитывать регистр.
 * @returns {boolean} Результат.
 */
declare function StrEnds(str: string, subStr: string, ignoreCase?: boolean): boolean;

/**
 * Проверяет состоит ли строка только из цифр или латинских символов.
 * @param {string} str - Проверяемая строка.
 * @returns {boolean} Результат.
 */
declare function StrIsAlphaNum(str: string): boolean;

/**
 * Возвращает часть строки str, длиной length, начиная с первого символа переданной строки.
 * Если второй аргумент больше длины передаваемой строки, возвращается str.
 * В отличие от StrLeftRange возвращает не биты, а именно символы.
 * @param {string} str - Строка.
 * @param {number} length - Длина строки.
 * @returns {string} Результат.
 */
declare function StrLeftCharRange(str: string, length: number): string;

/**
 * Возвращает часть строки str, длиной length, начиная с первого символа переданной строки.
 * Если второй аргумент больше длины передаваемой строки, возвращается str.
 * @param {string} str - Строка.
 * @param {number} length - Длина строки.
 * @returns {string} Результат.
 */
declare function StrLeftRange(str: string, length: number): string;

/**
 * Возвращает длину строки в байтах.
 * Данная длина может быть больше количества символов, если приложение использует кодировку UTF-8.
 * Для определения количества символов в строке необходимо использовать функцию StrCharCount.
 * @param {string} str - Строка.
 * @returns {number} Результат.
 */
declare function StrLen(str: string): number;

/**
 * Переводит все символы строки в нижний регистр.
 * @param {string} str - Строка, которую необходимо преобразовать.
 * @returns {string} Результат.
 */
declare function StrLowerCase(str: string): string;

/**
 * Проверяет, удовлетворяет ли строка одной из масок. Маски перечисляются через запятую вторым аргументом.
 * @param {string} str - Строка, в которой ищут.
 * @param {string} pattern - Шаблоны поиска, разделенные запятой.
 * @returns {boolean} Результат.
 * @example StrMatchesMultiPattern(str, "aaa*bbb,ccc*ddd*eee");
 */
declare function StrMatchesMultiPattern(str: string, pattern: string): boolean;

/**
 * Проверяет, удовлетворяет ли строка маске поиска, использующей символ "*".
 * @param {string} str - Строка.
 * @param {string} mask - Маска.
 * @returns {boolean} Результат.
 * @example StrMatchesPattern(str, "aaa*bbb");
 */
declare function StrMatchesPattern(str: string, mask: string): boolean;

/**
 * Переводит первую букву строки в нижний регистр.
 * @param {string} str - Строка.
 * @returns {string} Результат.
 */
declare function StrNonTitleCase(str: string): string;

/**
 * Возвращает часть строки по заданным позициям.
 * @param {string} str - Строка.
 * @param {number} pos1 - Начальная позиция.
 * @param {number} pos2 - Конечная позиция.
 * @returns {string} Результат.
 */
declare function StrRangePos(str: string, pos1: number, pos2: number): string;

/**
 * Заменяет все вхождения одной подстроки на другую в заданной строке, если такие имеются. Возвращает измененную строку.
 * @param {string} str - Исходная строка.
 * @param {string} subStr - Исходная подстрока.
 * @param {string} newSubStr - Новая подстрока.
 * @returns {string} Результат.
 */
declare function StrReplace(str: string, subStr: string, newSubStr: string): string;

/**
 * Заменяет первое вхождение строки на указанную подстроку.
 * @param {string} str - Исходная строка.
 * @param {string} subStr - Исходная подстрока.
 * @param {string} newSubStr - Новая подстрока.
 * @returns {string} Результат.
 */
declare function StrReplaceOne(str: string, subStr: string, newSubStr: string): string;

/**
 * Возвращает часть строки, начиная с указанной позиции до конца строки.
 * @param {string} str - Строка.
 * @param {number} pos - Позиция.
 * @returns {string} Результат.
 */
declare function StrRightRangePos(str: string, pos: number): string;

/**
 * Извлекает из строки фрагменты в соответствии с заданным шаблоном. Если строка не соответствует шаблону, возвращается undefined.
 * Шаблоны могут содержать элементы: %s - вхождение подстроки (возвращаемое) %*s - вхождение подстроки (невозвращаемое).
 * @param {string} str - Строка.
 * @param {any} pattern - Шаблон.
 * @returns {string[] | undefined} Результат.
 * @example
 * ```
 * const obj = StrOptScan("x-local://wtv/tools.xml", "x-local://%*s/%s.xml");
 * const fileName = obj[0]; // "tools"
 * ```
 */
declare function StrOptScan(str: string, pattern: string): string[] | undefined;

/**
 * Извлекает из строки фрагменты в соответствии с заданным шаблоном.
 * Шаблоны могут содержать элементы: %s - вхождение подстроки (возвращаемое) %*s - вхождение подстроки (невозвращаемое).
 * @param {string} str - Строка.
 * @param {any} arg - Шаблон.
 * @returns {Array} Результат.
 * @example
 * ```
 * const obj = StrScan(str, "%*s/vacancy/%s.htm");
 * vacancyID = obj[0];
 * ```
 */
declare function StrScan(str: string, arg: string): string[];

/**
 * Преобразует первую букву строки в заглавную.
 * @param {string} str - Строка, которую нужно преобразовать.
 * @returns {string} Результат.
 */
declare function StrTitleCase(str: string): string;

/**
 * Преобразует строку в нижний регистр.
 * @param {string} str - Строка, которую нужно преобразовать.
 * @returns {string} Результат.
 */
declare function StrUpperCase(str: string): string;

/**
 * Экспериментальная.
 * @returns {undefined}
 */
declare function StrWordMatchRating(): undefined;

/**
 * Удаляет символы пробела, перевода строк и табуляции в начале и конце строки.
 * @param {string} str - Исходная строка.
 * @returns {string} Результат.
 */
declare function Trim(str: string): string;

/**
 * Заменяет повторяющиеся последовательности символов пробела,
 * перевода строк и табуляции в строке на одиночные пробелы.
 * @param {string} str - Исходная строка.
 * @returns {string} Результат.
 */
declare function UnifySpaces(str: string): string;

/**
 * Возвращает количество символов в строке.
 * @param {string} str - Строка.
 * @returns {number} Результат.
 */
declare function StrCharCount(str: string): number;

//#endregion

//#region Работа с датами

/**
 * Меняет значение часового пояса внутри даты, оставляя значение времени суток без изменений.
 * Функция обычно используется в локальных вычислениях.
 * При сохранении даты в базе данных или передачи ее по сети информация
 * о хранимом часовом поясе внутри даты может потеряться.
 * @param {Date} date - Дата.
 * @param {number} timezone - Дата.
 * @returns {Date} Дата.
 */
declare function DateNewTimeZone(date: Date, timezone: number): Date;

/**
 * Преобразует дату к местному часовому поясу, оставляя глобальное значение даты без изменений.
 * Функция обычно используется в локальных вычислениях.
 * При сохранении даты в базе данных или передачи ее по сети информация
 * о хранимом часовом поясе внутри даты может потеряться.
 * @param {Date} date - Дата.
 * @returns {Date} Дата.
 */
declare function DateToLocalDate(date: Date): Date;

/**
 * Преобразует дату к другому часовому поясу, оставляя глобальное значение даты без изменений.
 * Функция обычно используется в локальных вычислениях.
 * При сохранении даты в базе данных или передачи ее по сети информация
 * о хранимом часовом поясе внутри даты может потеряться.
 * @param {Date} date - Дата.
 * @param {number} timezone - Дата.
 * @returns {Date} Дата.
 */
declare function DateToTimeZoneDate(date: Date, timezone: number): Date;

/**
 * Возвращает местный часовой пояс.
 * @param {Date} date - Дата.
 * @returns {number} Часовой пояс.
 */
declare function GetLocalTimeZone(date: Date): number;

/**
 * Проверяет валидность даты по календарю.
 * Возвращает true или false.
 * Функция {@link IsValidDate} может потребоваться, поскольку не все функции,
 * работающие с датами, имеют встроенную проверку на валидность.
 * @param {Date} date - Дата.
 * @example IsValidDate(date);
 * @returns {boolean} Флаг валидности даты.
 */
declare function IsValidDate(date: Date): boolean;

/**
 * Преобразует строку, содержащую дату в формате MIME, в дату.
 * @param {string} str - Строка с датой в формате MIME, например "Wed, 21 Oct 2015 07:28:00 GMT".
 * @returns {Date} Дата.
 */
declare function ParseMimeDate(str: string): Date;

/**
 * Возвращает часовой пояс, хранимый внтури даты.
 * Если дата не содержит внутри себя часовой пояс, возвращает undefined.
 * @param {Date} date - Дата.
 * @returns {number | undefined} Часовой пояс или undefined.
 */
declare function TimeZone(date: Date): number | undefined;

/**
 * Конструирует значение типа Date. Возвращает undefined в случае, если указаны недопустимые аргументы.
 * Функция {@link OptDate} рекомендуется для использования,
 * если необходимо проверить корректность даты (например 29 февраля),
 * где обычная функция {@link Date} будет вести себя по-разному на десктопной и web-версиях.
 * @param {Date} date - Дата.
 * @example
 * ```
 * OptDate("2019-04-20");
 * OptDate("2019-04-20T12:30");
 * OptDate("2019-04-20T12:30:00");
 * ```
 * @returns {Date} Дата.
 */
declare function OptDate(date: unknown): Date | undefined;

/**
 * Конструирует значение типа Date. Возвращает undefined в случае, если указаны недопустимые аргументы.
 * Функция {@link OptDate} рекомендуется для использования,
 * если необходимо проверить корректность даты (например 29 февраля),
 * где обычная функция {@link Date} будет вести себя по-разному на десктопной и web-версиях.
 * @param {Date} date - Дата.
 * @param {T} defaultDate - Дата по умолчанию.
 * @example
 * ```
 * OptDate("2019-04-20", CurDate);
 * OptDate("2019-04-20T12:30", CurDate);
 * OptDate("2019-04-20T12:30:00", CurDate);
 * ```
 * @returns {Date | T} Дата.
 */
declare function OptDate<T>(date: unknown, defaultDate: T): Date | T;

/**
 * Конструирует значение типа Date. Возвращает undefined в случае, если указаны недопустимые аргументы.
 * Функция {@link OptDate} рекомендуется для использования,
 * если необходимо проверить корректность даты (например 29 февраля),
 * где обычная функция {@link Date} будет вести себя по-разному на десктопной и web-версиях.
 * @param {number} year - Год.
 * @param {number} month - Месяц.
 * @param {number} day - День.
 * @example OptDate(2019, 04, 20, 12, 30, 0);
 * @returns {Date | T} Дата.
 */
declare function OptDate(year: number, month: number, day: number): Date;

/**
 * Конструирует значение типа Date. Возвращает undefined в случае, если указаны недопустимые аргументы.
 * Функция {@link OptDate} рекомендуется для использования,
 * если необходимо проверить корректность даты (например 29 февраля),
 * где обычная функция {@link Date} будет вести себя по-разному на десктопной и web-версиях.
 * @param {number} year - Год.
 * @param {number} month - Месяц.
 * @param {number} day - День.
 * @param {number} hours - Часы.
 * @param {number} minutes - Минуты.
 * @example OptDate(2019, 04, 20, 12, 30);
 * @returns {Date | T} Дата.
 */
declare function OptDate(year: number, month: number, day: number, hours: number, minutes: number): Date;

/**
 * Конструирует значение типа Date. Возвращает undefined в случае, если указаны недопустимые аргументы.
 * Функция {@link OptDate} рекомендуется для использования,
 * если необходимо проверить корректность даты (например 29 февраля),
 * где обычная функция {@link Date} будет вести себя по-разному на десктопной и web-версиях.
 * @param {number} year - Год.
 * @param {number} month - Месяц.
 * @param {number} day - День.
 * @param {number} hours - Часы.
 * @param {number} minutes - Минуты.
 * @param {number} seconds - Секунды.
 * @example OptDate(2019, 04, 20, 12, 30, 0);
 * @returns {Date | T} Дата.
 */
declare function OptDate(year: number, month: number, day: number, hours: number, minutes: number, seconds: number): Date;

/**
 * Возвращает разницу между 2-мя датами в секундах. Если первая дата меньше второй, разница будет отрицательным числом.
 * @param {Date} date1 - Дата 1.
 * @param {Date} date2 - Дата 2.
 * @returns {number} Результат.
 */
declare function DateDiff(date1: Date, date2: Date): number;

/**
 * Изменяет значение времени в заданной дате. Возвращает измененную дату.
 * Если указан только первый аргумент, функция возвращает дату без времени.
 * @param {Date} date - Дата.
 * @param {number} [hour] - Час.
 * @param {number} [minute] - Минута.
 * @param {number} [second] - Секунда.
 * @returns {Date} Дата.
 */
declare function DateNewTime(date: Date, hour?: number, minute?: number, second?: number): Date;

/**
 * Сдвигает дату на указанное число секунд. Если значение второго аргумента отрицательное, дата сдвигается назад.
 * @param {Date} date - Заданная дата.
 * @param {number} seconds - Сдвиг в секундах.
 * @returns {Date} Дата.
 */
declare function DateOffset(date: Date, seconds: number): Date;

/**
 * Возвращает количество секунд, прошедших с 1970 года до заданной даты.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function DateToRawSeconds(date: Date): number;
/**
 * Возвращает значение дня (1-31) для заданной даты.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function Day(date: Date): number;

/**
 * Преобразует количество секунд, прошедших с 1970 года в дату.
 * @param {number} seconds - Количество секунд.
 * @returns {Date} Дата.
 */
declare function RawSecondsToDate(seconds: number): Date;

/**
 * Возвращает значение секунд для заданной даты. Если дата не содержит значения секунд, возвращается undefined.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function Second(date: Date): number;

/**
 * Возвращает значение минуты для заданной даты. Если дата не содержит времени, возвращается undefined.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function Minute(date: Date): number;

/**
 * Преобразует строку с датой в большинство известных форматов в дату.
 * В отличие от функции {@link Date} понимает дату со словесным указанием месяца, например '1 ноября 2011 года'.
 * @param {string} date - Строка с датой.
 * @returns {Date} Дата.
 */
declare function ParseDate(date: string): Date;

/**
 * Преобразует дату в строку в формате, используемом по умолчанию в операционной системе.
 * Если в качестве аргумента передается null или пустая строка, функция возвращает пустую строку.
 * @param {Date} date - Объект даты.
 * @param {boolean} [showTime] - Включать время. По умолчанию true.
 * @param {boolean} [showSeconds] - Включать секунды во времени. По умолчанию true.
 * @returns {string} Строка с датой.
 */
declare function StrDate(date: Date, showTime?: boolean, showSeconds?: boolean): string;

/**
 * Возвращает время в миллисекундах, прошедшее с момента запуска операционной системы.
 * @returns {number} Результат.
 */
declare function GetCurTicks(): number;

/**
 * Преобразует дату в строку в "длинном" формате (со словесным написанием месяца).
 * Если в качестве аргумента передается null или пустая строка, функция возвращает пустую строку.
 * @param {Date} date - Дата.
 * @returns {string} Результат.
 * @example StrLongDate(Date("26.12.2011")) == "26 декабря 2011 г."
 */
declare function StrLongDate(date: Date): string;

/**
 * Возвращает значение часа для заданной даты. Если дата не содержит времени, возвращается undefined.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function Hour(date: Date): number;

/**
 * Преобразует дату в формат MIME.
 * @param {Date} Date - Дата.
 * @returns {string} Результат.
 * @example StrMimeDate(Date("26.12.2011 10:45")) == 'Mon, 26 Dec 2011 10:45:00 +0400'
 */
declare function StrMimeDate(Date: Date): string;

/**
 * Преобразует дату в строку, с двухсимвольным форматом года.
 * @param {Date} date - Дата, которую преобразуется.
 * @param {boolean} [showTime] - Включать время. По умолчанию true.
 * @param {boolean} [showSeconds] - Включать секунды во времени. По умолчанию true.
 * @returns {string} Строка с датой.
 */
declare function StrShortDate(date: Date, showTime?: boolean, showSeconds?: boolean): string;

/**
 * Возвращает номер месяца (1-12) для заданной даты.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function Month(date: Date): number;

/**
 * Преобразует значение времени внутри даты в строку. Если время не содержится внутри даты, возвращается пустая строка.
 * @param {Date} date - Дата.
 * @returns {string} Дата.
 * @example StrTime(Date("26.12.2011 10:45")) == "10:45"
 */
declare function StrTime(date: Date): string;

/**
 * Преобразует дату в строку в формате, используемом в XML. Данный формат не зависит от региональных настроек в системе.
 * @param {Date} date - Объект даты.
 * @param {boolean} [showTime] - Включать время.
 * @param {boolean} [showSeconds] - Включать секунды во времени.
 * @returns {string} Строка с датой.
 * @example
 * ```
 * StrXmlDate(Date("26.12.2011")) == "2011-12-26"
 * StrXmlDate(Date("26.12.2011 10:45")) == "2011-12-26T10:45"
 * ```
 */
declare function StrXmlDate(date: Date, showTime?: boolean, showSeconds?: boolean): string;

/**
 * Возвращает номер дня недели для заданной даты. (0 - Воскресенье, 1 - Понедельник и т.д.).
 * @param {Date} date - Дата.
 * @returns {number} День недели.
 */
declare function WeekDay(date: Date): number;

/**
 * Возвращает значение года для заданной даты.
 * @param {Date} date - Дата.
 * @returns {number} Год.
 */
declare function Year(date: Date): number;

/**
 * Преобразует дату из универсального часового пояса в текущий часовой пояс.
 * @param {Date} date - Дата.
 * @returns {Date} Дата.
 */
declare function UtcToLocalDate(date: Date): Date;

//#endregion

//#region Работа с массивами

/**
 * Возвращает число элементов массива. Для массивов прямого доступа функция срабатывает мгновенно,
 * для сложных массивов (например результатов XQuery) вызов этой функции может повлечь за собой обращение к серверу
 * либо другую длительную по времени операцию, поэтому не следует использовать данную функцию внутри циклов.
 * @param {T[]} array - Массив.
 * @returns {number} Результат.
 */
declare function ArrayCount<T>(array: T[]): number;

/**
 * Возвращает число элементов массива. Для массивов прямого доступа функция срабатывает мгновенно,
 * для сложных массивов (например результатов XQuery) вызов этой функции может повлечь за собой обращение к серверу
 * либо другую длительную по времени операцию, поэтому не следует использовать данную функцию внутри циклов.
 * @param {XmlMultiElem<T>} array - Массив.
 * @returns {number} Результат.
 */
declare function ArrayCount<T>(array: XmlMultiElem<T>): number;

/**
 * Преобразует заданный массив к массиву с прямым индексированием.
 * Если заданный массив и так поддерживает прямое индексирование, функция возвращает сам исходный массив.
 * В противном случае функция работает аналогично {@link ArraySelectAll} и возвращает массив типа Array,
 * содержащий копию исходного массива.
 * @param {Array} array - Исходный массив.
 * @returns {Array} Результат.
 */
declare function ArrayDirect<T>(array: T[]): T[];

/**
 * Преобразует заданный массив к массиву с прямым индексированием.
 * Если заданный массив и так поддерживает прямое индексирование, функция возвращает сам исходный массив.
 * В противном случае функция работает аналогично {@link ArraySelectAll} и возвращает массив типа Array,
 * содержащий копию исходного массива.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @returns {Array} Результат.
 */
declare function ArrayDirect<T>(array: XmlMultiElem<T>): T[];

/**
 * Функция получает на входе массив, содержащий в одном из полей подмассивы, в плоский массив.
 * @param {T[]} array - Исходный массив.
 * @param {string} elemCode - Выражение, вычисляющее поле элемента исходного массива, содержащего подмассив.
 * @returns {unknown[]} Результат.
 */
declare function ArrayExpand<T>(array: T[], elemCode: string): unknown[];

/**
 * Выбирает определенное значение из каждого элемента массива.
 * Возвращает новый массив той же длинны, содержащий выбранные элементы.
 * @param {Array} array - Исходный массив.
 * @param {string} fieldExpr - Выражение, вычисляемое относительно каждого элемента исходного массива.
 * @returns {Array} Результат.
 */
declare function ArrayExtract<T, K>(array: T[], fieldExpr: string | null): K[];

/**
 * Выбирает определенное значение из каждого элемента массива.
 * Возвращает новый массив той же длинны, содержащий выбранные элементы.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @param {string} fieldExpr - Выражение, вычисляемое относительно каждого элемента исходного массива.
 * @returns {Array} Результат.
 */
declare function ArrayExtract<T, K>(array: XmlMultiElem<T>, fieldExpr: string | null): K[];

/**
 * Выбирает определенное поле (атрибут) из каждого элемента массива.
 * Возвращает новый массив той же длинны, содержащий выбранные элементы.
 * Функция аналогична более универсальной функции {@link ArrayExtract}, но работает быстрее.
 * @param {Array} array - Исходный массив.
 * @param {string} field - Имя поля.
 * @returns {unknown[]} Результат.
 */
declare function ArrayExtractKeys<T, K>(array: T[], field: string): K[];

/**
 * Выбирает определенное поле (атрибут) из каждого элемента массива.
 * Возвращает новый массив той же длинны, содержащий выбранные элементы.
 * Функция аналогична более универсальной функции {@link ArrayExtract}, но работает быстрее.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @param {string} field - Имя поля.
 * @returns {unknown[]} Результат.
 */
declare function ArrayExtractKeys<T, K>(array: XmlMultiElem<T>, field: string): K[];

/**
 * Находит первый элемент массива, удовлетворяющий заданному условию.
 * Если элемент, удовлетворяющий условию, не найден, функция завершается с исключением.
 * @param {T[]} array - Массив.
 * @param {string} qualExpr - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {T[] | never} Результат.
 */
declare function ArrayFind<T>(array: T[], qualExpr: string): T | never;

/**
 * Находит первый элемент массива, удовлетворяющий заданному условию.
 * Если элемент, удовлетворяющий условию, не найден, функция завершается с исключением.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} qualExpr - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {XmlElem<T> | never} Результат.
 */
declare function ArrayFind<T>(array: XmlMultiElem<T>, qualExpr: string): XmlElem<T> | never;

/**
 * Возвращает первый элемент заданного массива. Если массив не содержит ни одного элемента,
 * функция завершается с исключением.
 * @param {Array} array - Массив.
 * @returns {T | never} Результат.
 */
declare function ArrayFirstElem<T extends unknown[]>(array: T): T[0] | never;
/**
 * Возвращает первый элемент заданного массива. Если массив не содержит ни одного элемента,
 * функция завершается с исключением.
 * @param {XmlMultiElem<unknown>} array - Массив.
 * @returns {XmlElem<T> | never} Результат.
 */
declare function ArrayFirstElem<T extends XmlMultiElem<unknown>>(array: T): T[0] | never;

/**
 * Возвращает массив, содержащий элементы массива 1,
 * у которых значение ключевого поля совпадает хотя бы в с одним элементом массива 2.
 * @param {Array} array1 - Массив 1.
 * @param {Array} array2 - Массив 2.
 * @param {string} [fieldExpr1] - Выражение, вычисляемое относительно каждого элемента массива 1
 * и возвращающее значение ключа для сравнения. Необязательный аргумент.
 * Если аргумент не указан, используется значение самого элемента (This).
 * @param {string} [fieldExpr2] - Выражение, вычисляемое относительно каждого элемента массива 2
 * и возвращающее значение ключа для сравнения. Необязательный аргумент.
 * Если аргумент не указан, используется значение самого элемента (This).
 * @returns {T[]} Результат.
 */
declare function ArrayIntersect<T, K>(
  array1: T[],
  array2: K[],
  fieldExpr1?: string,
  fieldExpr2?: string
): T[];

/**
 * Возвращает массив, содержащий элементы массива 1,
 * у которых значение ключевого поля совпадает хотя бы в с одним элементом массива 2.
 * @param {Array} array1 - Массив 1.
 * @param {Array} array2 - Массив 2.
 * @param {string} [fieldExpr1] - Выражение, вычисляемое относительно каждого элемента массива 1
 * и возвращающее значение ключа для сравнения. Необязательный аргумент.
 * Если аргумент не указан, используется значение самого элемента (This).
 * @param {string} [fieldExpr2] - Выражение, вычисляемое относительно каждого элемента массива 2
 * и возвращающее значение ключа для сравнения. Необязательный аргумент.
 * Если аргумент не указан, используется значение самого элемента (This).
 * @returns {XmlElem<T>[]} Результат.
 */
declare function ArrayIntersect<T, K>(
  array1: XmlMultiElem<T>,
  array2: XmlMultiElem<K>,
  fieldExpr1?: string,
  fieldExpr2?: string
): XmlElem<T>[];

/**
 * Возвращает элемент заданного массива, содержащий максимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция завершается с исключением.
 * @param {Array} array - Массив.
 * @param {string} expression - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {T} Результат.
 */
declare function ArrayMax<T>(array: T[], expression: string): T;
/**
 * Возвращает элемент заданного массива, содержащий максимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция завершается с исключением.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} expression - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {XmlElem<T>} Результат.
 */
declare function ArrayMax<T>(array: XmlMultiElem<T>, expression: string): XmlElem<T>;

/**
 * Возвращает строку, полученную путем склеивания данных из элементов массива.
 * @param {Array} array - Массив.
 * @param {string} elemExpr - Выражение, вычисляющее значение, используемое для склейки, относительно элемента массива.
 * @param {string} [delim=""] - Строка-разделитель.
 * @returns {string} Результат.
 */
declare function ArrayMerge<T>(array: T[], elemExpr: string, delim?: string): string;

/**
 * Возвращает строку, полученную путем склеивания данных из элементов массива.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} elemExpr - Выражение, вычисляющее значение, используемое для склейки, относительно элемента массива.
 * @param {string} [delim=""] - Строка-разделитель.
 * @returns {string} Результат.
 */
declare function ArrayMerge<T>(array: XmlMultiElem<T>, elemExpr: string, delim?: string): string;

/**
 * Возвращает элемент заданного массива, содержащий минимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция завершается с исключением.
 * @template {Array} T
 * @param {T} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {T} Результат.
 */
declare function ArrayMin<T>(array: T[], elemExpr: string): T;

/**
 * Возвращает элемент заданного массива, содержащий минимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция завершается с исключением.
 * @template {XmlMultiElem<T>} T
 * @param {T} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {XmlElem<T>} Результат.
 */
declare function ArrayMin<T>(array: XmlMultiElem<T>, elemExpr: string): XmlElem<T>;

/**
 * Находит первый элемент массива, удовлетворяющий заданному условию.
 * Если элемент, удовлетворяющий условию, не найден, возвращается undefined.
 * @param {Array} array - Массив.
 * @param {string} qualExpr - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptFind<T>(array: T[], qualExpr: string): T | undefined;

/**
 * Находит первый элемент массива, удовлетворяющий заданному условию.
 * Если элемент, удовлетворяющий условию, не найден, возвращается undefined.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} qualExpr - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptFind<T>(array: XmlMultiElem<T>, qualExpr: string): XmlElem<T> | undefined;

/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * @param {Array} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом. Если имя ключа не указано, используется первичный ключ.
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptFindByKey<T, K>(array: T[], value: K, name?: string): T | undefined;
/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом. Если имя ключа не указано, используется первичный ключ.
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptFindByKey<T, K>(array: XmlMultiElem<T>, value: K, name?: string): XmlElem<T> | undefined;

/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * Предполагается, что массив предварительно отсортирован по ключевому полю по возрастанию,
 * что значительно повышает скорость поиска по сравнению с функцией {@link ArrayOptFindByKey}.
 * Функцию имеет смысл использовать для частого поиска в каком-либо фиксированном справочнике большого размера,
 * который необходимо заранее отсортировать.
 * @param {T} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом, если имя ключа не указано, то используется первичный ключ.
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptFindBySortedKey<T, K>(array: T[], value: K, name?: string): T | undefined;

/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * Предполагается, что массив предварительно отсортирован по ключевому полю по возрастанию,
 * что значительно повышает скорость поиска по сравнению с функцией {@link ArrayOptFindByKey}.
 * Функцию имеет смысл использовать для частого поиска в каком-либо фиксированном справочнике большого размера,
 * который необходимо заранее отсортировать.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом, если имя ключа не указано, то используется первичный ключ.
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptFindBySortedKey<T, K>(array: XmlMultiElem<T>, value: K, name?: string): XmlElem<T> | undefined;

/**
 * Возвращает первый элемент заданного массива.
 * Если массив не содержит ни одного элемента, функция возвращает второй аргумент.
 * @param {Array} array - Массив.
 * @param {K} defaultValue - Значение по умолчанию.
 * @returns {T | K} Результат.
 */
declare function ArrayOptFirstElem<T, K = undefined>(array: T[], defaultValue?: K): T | K;

/**
 * Возвращает первый элемент заданного массива.
 * Если массив не содержит ни одного элемента, функция возвращает второй аргумент.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {K} defaultValue - Значение по умолчанию.
 * @returns {XmlElem<T> | K} Результат.
 */
declare function ArrayOptFirstElem<T, K = undefined>(array: XmlMultiElem<T>, defaultValue?: K): XmlElem<T> | K;

/**
 * Находит первый элемент массива, удовлетворяющий заданному условию.
 * Если элемент, удовлетворяющий условию, не найден, возвращается undefined.
 * @param {Array} array - Массив.
 * @param {string} qualExpr - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptFind<T>(array: T[], qualExpr: string): T | undefined;

/**
 * Находит первый элемент массива, удовлетворяющий заданному условию.
 * Если элемент, удовлетворяющий условию, не найден, возвращается undefined.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} qualExpr - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptFind<T>(array: XmlMultiElem<T>, qualExpr: string): XmlElem<T> | undefined;

/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * @param {Array} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом. Если имя ключа не указано, используется первичный ключ.
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptFindByKey<T, K>(array: T[], value: K, name?: string): T | undefined;

/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом. Если имя ключа не указано, используется первичный ключ.
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptFindByKey<T, K>(array: XmlMultiElem<T>, value: K, name?: string): XmlElem<T> | undefined;

/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * Предполагается, что массив предварительно отсортирован по ключевому полю по возрастанию,
 * что значительно повышает скорость поиска по сравнению с функцией {@link ArrayOptFindByKey}.
 * Функцию имеет смысл использовать для частого поиска в каком-либо фиксированном справочнике большого размера,
 * который необходимо заранее отсортировать.
 * @param {T} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом, если имя ключа не указано, то используется первичный ключ.
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptFindBySortedKey<T, K>(array: T[], value: K, name?: string): T | undefined;

/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * Предполагается, что массив предварительно отсортирован по ключевому полю по возрастанию,
 * что значительно повышает скорость поиска по сравнению с функцией {@link ArrayOptFindByKey}.
 * Функцию имеет смысл использовать для частого поиска в каком-либо фиксированном справочнике большого размера,
 * который необходимо заранее отсортировать.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом, если имя ключа не указано, то используется первичный ключ.
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptFindBySortedKey<T, K>(array: XmlMultiElem<T>, value: K, name?: string): XmlElem<T> | undefined;

/**
 * Возвращает первый элемент заданного массива.
 * Если массив не содержит ни одного элемента, функция возвращает второй аргумент.
 * @param {Array} array - Массив.
 * @param {K} defaultValue - Значение по умолчанию.
 * @returns {T | K} Результат.
 */
declare function ArrayOptFirstElem<T, K = undefined>(array: T[], defaultValue?: K): T | K;

/**
 * Возвращает первый элемент заданного массива.
 * Если массив не содержит ни одного элемента, функция возвращает второй аргумент.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {K} defaultValue - Значение по умолчанию.
 * @returns {XmlElem<T> | K} Результат.
 */
declare function ArrayOptFirstElem<T, K = undefined>(array: XmlMultiElem<T>, defaultValue?: K): XmlElem<T> | K;

/**
 * Возвращает элемент заданного массива, содержащий максимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция возвращает undefined.
 * @param {Array} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptMax<T>(array: T[], elemExpr: string): T | undefined;

/**
 * Возвращает элемент заданного массива, содержащий максимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция возвращает undefined.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptMax<T>(array: XmlMultiElem<T>, elemExpr: string): XmlElem<T> | undefined;

/**
 * Возвращает элемент заданного массива, содержащий минимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция возвращает undefined.
 * @param {T[]} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptMin<T>(array: T[], elemExpr: string): T | undefined;

/**
 * Возвращает элемент заданного массива, содержащий минимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция возвращает undefined.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptMin<T>(array: XmlMultiElem<T>, elemExpr: string): XmlElem<T> | undefined;

/**
 * Функция возвращает размер массива, при условии, что он известен заранее. В противном случае возвращает undefined.
 * @param {T[]} array - Массив.
 * @returns {number | undefined} Результат.
 */
declare function ArrayOptSize<T>(array: T[]): number | undefined;

/**
 * Возвращает фрагмент массива с определенной позиции. Данная функция как правило используется
 * для реализации постраничного просмотра (paging) результатов запроса XQuery.
 * @param {T[]} array - Исходный массив.
 * @param {number} pos - Начальная позиция.
 * @param {number} [elemsNum] - Количество элементов нового массива.
 * Если количество не указано, возвращаются все элементы с начальной позиции.
 * @returns {T[]} Результат.
 */
declare function ArrayRange<T>(array: T[], pos: number, elemsNum?: number): T[];

/**
 * Возвращает фрагмент массива с определенной позиции. Данная функция как правило используется
 * для реализации постраничного просмотра (paging) результатов запроса XQuery.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @param {number} pos - Начальная позиция.
 * @param {number} [elemsNum] - Количество элементов нового массива.
 * Если количество не указано, возвращаются все элементы с начальной позиции.
 * @returns {XmlElem<T>[]} Результат.
 */
declare function ArrayRange<T>(array: XmlMultiElem<T>, pos: number, elemsNum?: number): XmlElem<T>[];

/**
 * Выбирает элементы массива, удовлетворяющие заданному критерию.
 * @param {T[]} array - Массив.
 * @param {string} expression - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {T[]} Результат.
 */
declare function ArraySelect<T>(array: T[], expression: string): T[];

/**
 * Выбирает элементы массива, удовлетворяющие заданному критерию.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} expression - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {XmlElem<T>[]} Результат.
 */
declare function ArraySelect<T>(array: XmlMultiElem<T>, expression: string): XmlElem<T>[];

/**
 * Возвращает массив, содержащий все элементы исходного массива в виде стандартного массива Array.
 * Функция, как правило, используется в двух случаях: 1.
 * Для сложной либо многократной обработки (особенно с прямым индексированием) "медленных" массивов,
 * таких как результаты XQuery 2.
 * Когда в цикле, осуществляющем проход по массиву, происходит выборочное удаление его элементов.
 * @param {T} array - Исходный массив.
 * @returns {Array} Результат.
 */
declare function ArraySelectAll<T>(array: T[]): T[];

/**
 * Возвращает массив, содержащий все элементы исходного массива в виде стандартного массива Array.
 * Функция, как правило, используется в двух случаях:
 * 1. Для сложной либо многократной обработки (особенно с прямым индексированием) медленных массивов,
 * таких как результаты {@link XQuery}
 * 2. Когда в цикле, осуществляющем проход по массиву, происходит выборочное удаление его элементов.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @returns {XmlElem<T>[]} Результат.
 */
declare function ArraySelectAll<T>(array: XmlMultiElem<T>): XmlElem<T>[];

/**
 * Выбирает элементы массива, с определенным значением заданного поля (ключа) внутри элемента.
 * Функция аналогична более универсальной функции {@link ArraySelect}, но работает быстрее.
 * @param {T[]} array - Массив.
 * @param {boolean | string | number} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом. Если имя ключа не указано, используется первичный ключ.
 * @returns {T[]} Результат.
 */
declare function ArraySelectByKey<T>(
  array: T[],
  value: boolean | string | number,
  name?: string
): T[];

/**
 * Выбирает элементы массива, с определенным значением заданного поля (ключа) внутри элемента.
 * Функция аналогична более универсальной функции {@link ArraySelect}, но работает быстрее.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {boolean | string | number} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом. Если имя ключа не указано, используется первичный ключ.
 * @returns {XmlElem<T>[]} Результат.
 */
declare function ArraySelectByKey<T>(
  array: XmlMultiElem<T>,
  value: boolean | string | number,
  name?: string
): XmlElem<T>[];

/**
 * Выбирает элементы массива, с определенным значением  заданного поля (ключа) внутри элемента.
 * Массив должен быть предварительно отсортирован по возрастанию значения ключа,
 * что делает эту функцию существенно быстрее по сравнению с {@link ArraySelectByKey}.
 * @param {T[]} array - Массив.
 * @param {string | number} value - Значение ключа.
 * @param {string} name - Имя элемента, являющегося ключом.
 * @param {boolean} [ignoreCase] - Игнорировать регистр (для массивов, содержащих строки).
 * @returns {T[]} Результат.
 */
declare function ArraySelectBySortedKey<T>(array: T[], value: string | number, name: string, ignoreCase?: boolean): T[];

/**
 * Выбирает элементы массива, с определенным значением  заданного поля (ключа) внутри элемента.
 * Массив должен быть предварительно отсортирован по возрастанию значения ключа,
 * что делает эту функцию существенно быстрее по сравнению с {@link ArraySelectByKey}.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string | number} value - Значение ключа.
 * @param {string} name - Имя элемента, являющегося ключом.
 * @param {boolean} [ignoreCase] - Игнорировать регистр (для массивов, содержащих строки).
 * @returns {XmlElem<T>[]} Результат.
 */
declare function ArraySelectBySortedKey<T>(
  array: XmlMultiElem<T>,
  value: string | number,
  name: string,
  ignoreCase?: boolean
): XmlElem<T>[];

/**
 * Выбирает элементы массива, со значением заданного поля (ключа) внутри элемента, начинающегося на заданные префикс.
 * Массив должен быть предварительно отсортирован по возрастанию значения ключа, что делает эту функцию существенно более эффективной по сравнению с простым перебором.
 * Порядок сортировки возвращаемых элементов не определен.
 * @param {T[]} array - Произвольный массив, поддерживающий прямой доступ по порядковому индексу.
 * @param {string | number} prefixStr - Префикс.
 * @param {string} keyName - Имя элемента, являющегося ключом.
 * @param {boolean} [ignoreCase] - Игнорировать регистр (для массивов, содержащих строки).
 * @returns {T[]} Результат.
 */
declare function ArraySelectBySortedKeyPrefix<T>(array: T[], prefixStr: string | number, keyName: string, ignoreCase?: boolean): T[];

/**
 * Возвращает массив уникальных значений элементов заданного массива.
 * @param {T[]} array - Исходный массив.
 * @param {string} [fieldExpr] - Выражение, вычисляемое относительно каждого элемента исходного массива,
 * Если аргумент не указан, используется значение самого элемента `This`.
 * @returns {T[]} Результат.
 */
declare function ArraySelectDistinct<T>(array: T[], fieldExpr?: string): T[];

/**
 * Возвращает массив уникальных значений элементов заданного массива.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @param {string} [fieldExpr] - Выражение, вычисляемое относительно каждого элемента исходного массива,
 * Если аргумент не указан, используется значение самого элемента `This`.
 * @returns {XmlElem<T>[]} Результат.
 */
declare function ArraySelectDistinct<T>(array: XmlMultiElem<T>, fieldExpr?: string): XmlElem<T>[];

/**
 * Возвращает массив уникальных значений определенного поля элементов заданного массива.
 * @param {T[]} array - Исходный массив.
 * @param {string} [fieldExpr] - Выражение, вычисляемое относительно каждого элемента исходного массива и возвращающее значение поля, массив уникальных значений которого необходимо вернуть.
 * @returns {T[]} Результат.
 * @see {@link ArraySelectDistinct}
 */
declare function ArraySelectDistinctKeys<T>(array: T[], fieldExpr?: string): T[];

/**
 * Возвращает массив уникальных значений определенного поля элементов заданного массива.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @param {string} [fieldExpr] - Выражение, вычисляемое относительно каждого элемента исходного массива и возвращающее значение поля, массив уникальных значений которого необходимо вернуть.
 * @returns {XmlElem<T>[]} Результат.
 * @see {@link ArraySelectDistinct}
 */
declare function ArraySelectDistinctKeys<T>(array: XmlMultiElem<T>, fieldExpr?: string): XmlElem<T>[];

/**
 * Производит выборку из массива, содержащего элементы id и parent_id (как правило каталога), иерархического подмножества по заданному parent_id (не сключая головной элемент).
 * @param {T[]} array - Массив.
 * @param {string} keyVal - Значение родительского элемента.
 * @param {string} parentKeyName - Имя родительского элемента (для калогов обычно 'parent_id').
 * @returns {T[]} Результат.
 */
declare function ArraySelectDistinctKeys<T>(array: T[], keyVal: string, parentKeyName: string): T[];

/**
 * Производит выборку из массива, содержащего элементы id и parent_id (как правило каталога), иерархического подмножества по заданному parent_id (не сключая головной элемент).
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} keyVal - Значение родительского элемента.
 * @param {string} parentKeyName - Имя родительского элемента (для калогов обычно 'parent_id').
 * @returns {XmlMultiElem<T>} Результат.
 */
declare function ArraySelectDistinctKeys<T>(array: XmlMultiElem<T>, keyVal: string, parentKeyName: string): XmlMultiElem<T>;

/**
 * Производит выборку из массива, содержащего элементы id и parent_id (как правило каталога), иерархического подмножества по заданному parent_id (не сключая головной элемент).
 * @param {T[]} array - Массив.
 * @param {K} keyValue - Значение родительского элемента.
 * @param {string} parentKeyName - Имя родительского элемента (для калогов обычно 'parent_id').
 * @returns {T[]} Результат.
 */
declare function ArraySelectHierSubset<T, K>(array: T[], keyValue: K, parentKeyName: string): T[];

/**
 * Сортирует массив по заданным полям. Возвращает новый массив отсортированных значений.
 * Функция требует нечетного числа аргументов (не менее 3-х),
 * для каждого нового уровня сортировки добавляется 2 новых аргумента.
 * @param {T[]} array - Массив.
 * @param {string} expression - Выражение, вычисляющее значение полей относительно элемента массива,
 * по которым осуществляется сортировка.
 * @param {string} [direction] - Направление сортировки ('+' или '-').
 * @param {string} args - Набор дополнительных аргументов для сортировки.
 * @returns {T[]} Результат.
 * @example ArraySort(array, "name", "+", "date", "-");
 */
declare function ArraySort<T>(
  array: T[],
  expression: string,
  direction?: string,
  ...args: string[]
): T[];

/**
 * Сортирует массив по заданным полям. Возвращает новый массив отсортированных значений.
 * Функция требует нечетного числа аргументов (не менее 3-х),
 * для каждого нового уровня сортировки добавляется 2 новых аргумента.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} expression - Выражение, вычисляющее значение полей относительно элемента массива,
 * по которым осуществляется сортировка.
 * @param {string} [direction] - Направление сортировки ('+' или '-').
 * @param {string} args - Набор дополнительных аргументов для сортировки.
 * @returns {XmlElem<T>[]} Результат.
 * @example ArraySort(array, "name", "+", "date", "-");
 */
declare function ArraySort<T>(
  array: XmlMultiElem<T>,
  expression: string,
  direction?: string,
  ...args: string[]
): XmlElem<T>[];

/**
 * Возвращает сумму значений определенного поля по всем элементам массива.
 * Внимание! При использовании с массивом примитивов функция будет работать возвращать 0.
 * @example
 * ```
 * var a = [1, 2, 3];
 * ArraySum(a, "This"); // --> 0
 * ```
 * @param {T} array - Массив.
 * @param {string} expression - Выражение, вычисляющее поле, по которому происходит суммирование.
 * @returns {number} Результат.
 */
declare function ArraySum<T>(array: T[], expression: string): number;

/**
 * Возвращает сумму значений определенного поля по всем элементам массива.
 * Внимание! При использовании с массивом примитивов функция будет работать возвращать 0.
 * @example
 * ```
 * var a = [1, 2, 3];
 * ArraySum(a, "This"); // --> 0
 * ```
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} expression - Выражение, вычисляющее поле, по которому происходит суммирование.
 * @returns {number} Результат.
 */
declare function ArraySum<T>(array: XmlMultiElem<T>, expression: string): number;

/**
 * Последовательное объединение нескольких массивов в один.
 * @param {T[]} args - Массивы.
 * @returns {T[]} Результат.
 */
declare function ArrayUnion<T>(...args: T[]): T;

/**
 * Последовательное объединение нескольких массивов в один.
 * @param {unknown[]} args - Массивы.
 * @returns {unknown[]} Результат.
 */
declare function ArrayUnion(...args: unknown[]): unknown;

/**
 * Проверяет, является ли аргумент массивом.
 * @param {unknown} value - Аргумент.
 * @returns {boolean} Результат.
 */
declare function IsArray(value: unknown): value is unknown[] | XmlMultiElem<unknown>;

//#endregion

//#region Работа с файловой системой

/**
 * Сохраняет содержимое строки в файл с заданном путем с использованием UTF-8 BOM.
 */
declare function PutFileText(): void;

/**
 * Возвращает путь к директории, из которой запущено приложение.
 * @returns {string} Результат.
 */
declare function AppDirectoryPath(): string;

/**
 * Копирует файл внутри файловой системы.
 * @param {string} srcFilePath - Путь к исходному файлу.
 * @param {string} destFilePath - Путь к файлу назначения.
 */
declare function CopyFile(srcFilePath: string, destFilePath: string): void;

/**
 * Создает новую директорию внутри существующей директории.
 * @param {string} path - Путь до новой директории, или url.
 * @returns {undefined}
 */
declare function CreateDirectory(path: string): undefined;

/**
 * Создает ярлык на указанный файл.
 * @param {string} linkPath - Путь (или url) к создаваемому ярлыку.
 * @param {string} targetPath - Путь (или url) к файлу, на который будет указывать ярлык.
 * @returns {undefined}
 */
declare function CreateShellLink(linkPath: string, targetPath: string): undefined;

/**
 * Удаляет директорию, включая все вложенные файлы и директории.
 * @param {string} path - Путь (или url) до удаляемой директории.
 * @returns {undefined}
 */
declare function DeleteDirectory(path: string): undefined;

/**
 * Удаляет файл.
 * @param {string} path - Путь (или url) к удаляемому файлу.
 * @returns {undefined}
 */
declare function DeleteFile(path: string): undefined;

/**
 * Проверяет открыт ли файл в другом приложении.
 * @param {string} path - Путь (или url) к файлу.
 * @returns {boolean} Результат.
 */
declare function FileIsBusy(path: string): boolean;

/**
 * Извлекает имя файла из пути, переданного в качестве аргумента.
 * @param {string} url - Путь к файлу.
 * @returns {string}
 * FileName( 'work\data\doc.pdf' ) вернет 'doc.pdf' FileName( 'work\data\' ) вернет 'data'.
 */
declare function FileName(url: string): string;

/**
 * Проверяет, существует ли файл с заданным url либо путем в файловой системе.
 * @param {string} pathOrUrl - URL либо путь к файлу.
 * @returns {boolean} Результат.
 */
declare function FileExists(pathOrUrl: string): boolean;

/**
 * Склеивает абсолютный и относительный файловые пути.
 * Если в качестве относительного пути передан абсолютный путь, вернется он же, а первый аргумент проигнорируется.
 * Функция унифицирует разделители в относительном пути ("/" и "\") под файловую систему текущей операционной системы.
 * @param {string} basePath - Базовый абсолютный путь
 * @param {string} addPath - Добавляемый относительный путь
 * @returns {string} Результат.
 */
declare function FilePath(basePath: string, addPath: string): boolean;

/**
 * Проверяет существует ли файл (или директория) по указанному пути.
 * @param {string} path - Путь к файлу.
 * @returns {boolean} Результат.
 */
declare function FilePathExists(path: string): boolean;

/**
 * Возвращает дату создания файла с заданным путем либо url в файловой системе.
 * @param {string} pathOrUrl - Путь к файлу либо URL, отображаемый в файловую систему
 * @returns {Date} - Результат.
 */
declare function GetFileCreationDate(pathOrUrl: string): Date;

/**
 * Возвращает дату модификации файла.
 * @param {string} path - Путь (или url) к файлу.
 * @returns {Date} Дата.
 */
declare function GetFileModDate(path: string): Date;

/**
 * Возвращает путь к одной из стандартных директорий Shell.
 * @returns {string}
 * AppData - директория для хранения данных пользователя, например "C:\Documents and Settings\User\Application Data".
 */
declare function GetShellFolderPath(): string;

/**
 * Проверяет является ли путь к файлу, переданный в качестве аргумента.
 * Существование файла по данному пути не проверяется.
 * @param {string} path - Путь к файлу.
 * @returns {boolean} Результат.
 * IsAbsoluteFilePath( 'c:\temp\1.ddd' ) вернет true IsAbsoluteFilePath( 'temp\1.ddd' ) вернет false.
 */
declare function IsAbsoluteFilePath(path: string): boolean;

/**
 * Проверяет, является ли указанный путь (или url) директорией.
 * @param {string} path - Путь (или url).
 * @returns {boolean} Результат.
 */
declare function IsDirectory(path: string): boolean;

/**
 * Загружает содержимое файла по заданному пути, результат возвращается в виде строки, содержащей бинарные данные.
 * @param {string} path - Путь к файлу.
 * @returns {string} Результат.
 */
declare function LoadFileData(path: string): string;

/**
 * Загружает содержимое фрагмента файла. Возвращает результат в виде бинарной строки.
 * Если конечная позиция превышает фактический размер файла, возвращается фрагмент до фактической верхней границы.
 * @param {string} path - Путь к файлу.
 * @param {number} startPosition - Начальная позиция.
 * @param {number} endPosition - Конечная позиция.
 * @returns {string} Результат.
 */
declare function LoadFileDataRange(path: string, startPosition: number, endPosition: number): string;

/**
 * Загружает содержимое файла с заданным путем с учетом наличия BOM.
 * Если файл начинается на UTF-16 BOM, происходи конвертация из UTF-16 в текущую кодировку (UTF-8).
 * Если файл начинается на UTF-8 BOM, возвращается содержимое файла после BOM.
 * Если BOM в файле отсутствует, происходит конвертация из однобайтовой кодировки по умолчанию
 * (например Windows-1251) в текущую (UTF-8).
 * @param {string} filepath - Путь до файла.
 * @returns {string} Содержимое файла.
 */
declare function LoadFileText(filepath: string): string;

/**
 * Перемещает или переименовывает файл.
 * @param {string} path1 - Исходный путь к файлу.
 * @param {string} path2 - Новый путь к файлу.
 * @returns {undefined}
 */
declare function MoveFile(path1: string, path2: string): undefined;

/**
 * Проверяет, существует ли указанная директория, если нет - создает ее.
 * @param {string} path - Путь (или url) к директории.
 * @param {boolean} [isRecursive] - Создавать всю цепочку родительских директорий, если они не существуют.
 * @returns {undefined}
 */
declare function ObtainDirectory(path: string, isRecursive?: boolean): undefined;

/**
 * Возвращает url для временного файла, который будет автоматически удален при следующем запуске приложения.
 * @param {string} [suffix] - Требуемый суффикс имени файла.
 * @returns {string} Результат.
 */
declare function ObtainSessionTempFile(suffix?: string): string;

/**
 * Создает директорию с уникальным именем внутри директории для временных файлов.
 * Возвращает путь к созданной директории.
 * @see {@link ObtainTempFile}.
 * @returns {string} Путь к созданной директории.
 */
declare function ObtainTempDirectoryPath(): string;

/**
 * Возвращает url для временного файла.
 * @param {string} [suffix] - Требуемый суффикс имени файла.
 * @returns {string} Результат.
 */
declare function ObtainTempFile(suffix?: string): string;

/**
 * Возвращает путь к родительской директории. Фактическое существование директорий не проверяется.
 * @param {string} path - Путь к исходной директории.
 * @returns {string} Результат.
 */
declare function ParentDirectory(path: string): string;

/**
 * Проверяет, существует ли директория по указанному пути.
 * @param {string} path - Путь до директории.
 * @returns {boolean} Результат.
 */
declare function PathIsDirectory(path: string): boolean;

/**
 * Сохраняет содержимое строки в файл. Содержимое строки интерпретируется как бинарные данные.
 * @param {string} path - Путь к файлу.
 * @param {string} str - Данные.
 * @returns {undefined}
 */
declare function PutFileData(path: string, str: string): undefined;

/**
 * Записывает фрагмент файла.
 * Если длина строки не равна endPos - startPos, возвращается ошибка.
 * @param {string} path - Путь к файлу.
 * @param {number} startPosition - Начальная позиция.
 * @param {number} endPosition - Конечная позиция.
 * @param {string} data - Строка, содержащая бинарные данные.
 * @returns {string} Результат.
 */
declare function PutFileDataRange(path: string, startPosition: number, endPosition: number, data: string): string;

/**
 * Возвращает массив, содержащий список файлов и вложенных директорий внутри указанной директории.
 * Каждый элемент массива будет содержать `URL` вложенного файла или директории.
 * @param {string} dirUrl - Url директории.
 * @returns {Array} Результат.
 */
declare function ReadDirectory(dirUrl: string): string[];

/**
 * Возвращает массив, содержащий список файлов и вложенных директорий внутри указанной директории.
 * Каждый элемент массива будет содержать полный путь ко вложенному файлу или директории.
 * @param {string} path - Путь до директории.
 * @returns {Array} Результат.
 */
declare function ReadDirectoryByPath(path: string): string[];

/**
 * Возвращает путь к директории для хранении данных пользователя.
 * По умолчанию директория совпадает с установочной, если специальными настройками не установлено иное.
 * @returns {string} Результат.
 */
declare function UserDataDirectoryPath(): string;

//#endregion

//#region Работа с Url

/**
 * Возвращает список всех существующих url, начинающихся с заданного базового url.
 * @param {string} baseUrl - Базовый url.
 * @returns {unknown} - Результат.
 */
declare function EnumerateUrls(baseUrl: string): unknown;

/**
 * Сохраняет содержимое строки в файл с заданном url, с использованием UTF-8 BOM.
 * @param {string} url - Url файла.
 * @param {string} data - Данные.
 * @returns {unknown} - Результат.
 */
declare function PutUrlText(url: string, data: string): unknown;

/**
 * Проверяет существует ли файл (или директория) по указанному url.
 * @param {string} url - Url файла.
 * @returns {boolean} Результат.
 */
declare function UrlExists(url: string): boolean;

/**
 * Функция принимает на вход строку, содержащую MIME Content type, и возвращает рекомендуемое расширение имени файла для данного типа.
 * Если тип не входит во встроенный список, возвращается пустая строка.
 * Если в качестве аргумента уже передано расширение (строка, начинающаяся на точку), возвращается оно же.
 * @param {string} contentType - MIME content type.
 * @returns {string} - Результат.
 */
declare function ContentTypeToFileNameSuffix(contentType: string): string;

type LoadUrlTextOptions = {
  DetectContentCharset: boolean;
};

/**
 * Загружает содержимое файла с заданным url с учетом наличия BOM. Если файл начинается на UTF-16 BOM, происходи конвертация из UTF-16 в текущую кодировку (UTF-8).
 * Если файл начинается на UTF-8 BOM, возвращается содержимое файла после BOM.
 * Если BOM в файле отсутствует, и не задана опция DetectContentCharset, происходит конвертация из однобайтовой кодировки по умолчанию (например Windows-1251) в текущую (UTF-8).
 * Если задана опция DetectContentCharset, то функция предварительно пытается определить, не содержит ли файл данные в UTF-8, и, если да, возвращает содержимое файла без изменений.
 * @see {@link LoadFileText}
 * @param {string} url - Url файла.
 * @param {object} options - Стандартный объект, содержащий опции.
 * @returns {string} - Результат.
 */
declare function LoadUrlText(url: string, options: LoadUrlTextOptions): string;

/**
 * Функция принимает на вход строку, содержащую абсолютный или относительный uri, и возвращает MIME Content type, определяемый по расширении имени файла в этом uri.
 * Если расширение не входит во встроенный список известных расширений, возвращается пустая строка.
 * @param {string} url - URI, URI path, либо имя файла.
 * @returns {string} - Результат.
 * @example UrlStdContentType("File.txt"); // text/plain
 * @see {@link ContentTypeToFileNameSuffix}
 */
declare function UrlStdContentType(url: string): string;

/**
 * Копирует содержимое под заданным url в новый url.
 * @param {string} destUrl - Url, в который производиться копирования.
 * @param {string} srcUrl - Url, содержимое которого копируется.
 * @returns {undefined}
 */
declare function CopyUrl(destUrl: string, srcUrl: string): undefined;

/**
 * Удаляет объект с заданным url.
 * @param {string} url - Url.
 * @returns {undefined}
 */
declare function DeleteUrl(url: string): undefined;

/**
 * Преобразует заданный url в абсолютный. Если заданный url и так является абсолютным, возвращается он же.
 * @param {string} url - Относительный url.
 * @param {string} [baseUrl] - Базовый абсолютный url, относительно которого считается относительный url.
 * Если аргумент не указан, в качестве базового url используется родительский url файла, содержащий выполняемый код.
 * @returns {string} Результат.
 * @example
 * ```
 * AbsoluteUrl("zz/1.htm", "x-local://data/static") == "x-local://data/static/zz/1.htm"
 * AbsoluteUrl("zz/1.htm") == "x-app://rcr/zz/1.htm" // вызванный в библиотеке x-app://rcr/rcr_lib_recruit.js
 * ```
 */
declare function AbsoluteUrl(url: string, baseUrl: string): string;

/**
 * Преобразует заданный url (схемы "x-app") в url, пригодный для использования во встроенном браузере (элемент HYPER).
 * Для десктоп-версии осуществляется преобразование в url схемы "file",
 * а для веб-версии - в специальный серверный запрос.
 * @param {string} url - Url.
 * @returns {string} Результат.
 */
declare function WebAppUrl(url: string): string;

/**
 * Регистрирует автоматическую подмену одного url другим.
 * После вызова функции при попытке любого обращения к url, являющегося дочерним,
 * по отношению к исходному базовому, будет происходить обращение к новому url,
 * полученному путем замены исходной базовой части на новую базовую часть.
 * Функция как правило используется для конвертации данных из предыдущих версий программ в новую,
 * при которой старые формы .xmd более не существуют и заменяются на новые.
 * @param {string} baseUrl - Базовый url, который нужно подменить.
 * @param {string} newBaseUrl - Базовый url, на который нужно подменить.
 * @returns {undefined}
 */
declare function AddUrlMapping(baseUrl: string, newBaseUrl: string): undefined;

/**
 * Преобразует путь файловой системы в локальный `URL` типа `file:` или `x-local:`.
 * @param {string} path - Путь файловой системы.
 * @param {string} [baseUrl] - Базовый `URL`, к схеме которого будет приводиться путь.
 * @returns {string} Результат.
 * @example FilePathToUrl("C:\\Temp\\1.htm") == "file:///C:/Temp/1.htm"
 */
declare function FilePathToUrl(path: string, baseUrl?: string): string;

/**
 * Заменяет суффикс (расширение) имени файла в заданном url.
 * Если заданный url имеет другой суффикс в имени файла, возвращается исходный url.
 * Функция не осуществляет фактического обращения к файловой системе.
 * @param {string} url - Url.
 * @param {string} suffix1 - Расширение, которое нужно заменить.
 * @param {string} suffix2 - Расширение, на которое нужно заменить.
 * @returns {string} Результат.
 * @example ReplaceUrlPathSuffix("http://news.websoft.ru/tree.html?query", "html", "asp"); // "http://news.websoft.ru/tree.asp?query"
 */
declare function ReplaceUrlPathSuffix(url: string, suffix1: string, suffix2: string): string;

/**
 * Загружает содержимое заданного url
 * и возвращает его в виде строки,
 * содержащей бинарные данные.
 * @param {string} url - Url.
 * @returns {string} Результат.
 */
declare function LoadUrlData(url: string): string;

/**
 * Сохраняет содержимое строки, содержащей бинарные данные, в заданном `URL`.
 * @param {string} url - `URL`.
 * @param {string} dataStr - Строка.
 * @returns {undefined}
 */
declare function PutUrlData(url: string, dataStr: string): undefined;

/**
 * Проверяет является ли строка абсолютным URL.
 * Существование объекта под указанным url не проверяется.
 * @param {string} url - Строка с URL.
 * @returns {boolean} Результат.
 * @example IsAbsoluteUrlStr("http://www.ya.ru/search.htm") === true;
 * @example IsAbsoluteUrlStr("search.htm") === false;
 */
declare function IsAbsoluteUrlStr(url: string): boolean;

/**
 * Добавляет фрагмент пути к заданному url.
 * @param {string} url - Url.
 * @param {string} addPath - Добавляемый путь.
 * @returns {string} Результат.
 * @example UrlAppendPath("http://www.lin.ru/service", "z/1.htm") == "http://www.lin.ru/service/z/1.htm"
 */
declare function UrlAppendPath(url: string, addPath: string): string;

/**
 * Возвращает хост из переданного в качестве аргумента URL.
 * @param {string} url - Url.
 * @returns {string} Результат.
 * @example
 * ```
 * UrlHost("http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx"); // "news.websoft.ru"
 * ```
 */
declare function UrlHost(url: string): string;

/**
 * Извлекает имя файла из заданного url.
 * @param {string} url - Url.
 * @returns {string} Результат.
 * @example UrlHost("http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx") == "tree.html"
 */
declare function UrlFileName(url: string): string;

/**
 * Определяет размер файла в байтах по локальному url, переданному в качестве аргумента.
 * @param {string} url - Локальный url типа file: или x-local:.
 * @returns {number} Результат.
 */
declare function UrlFileSize(url: string): number;

/**
 * Возвращает дату изменения файла, находящегося по локальному пути типа file: или x-local:.
 * @param {string} url - Url.
 * @returns {Date} Дата.
 */
declare function UrlModDate(url: string): Date;

/**
 * Извлекает из url, переданного в качестве аргумента, строку запроса в исходном виде.
 * @param {string} url - Url.
 * @returns {string} Результат.
 * @example UrlHost("http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx") == "query=xxx"
 */
declare function UrlParam(url: string): string;

/**
 * Извлекает url родительской директории из заданного url.
 * @param {string} url - Url.
 * @returns {string} Результат.
 * @example
 * ```
 * UrlParent("http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx");
 * // "http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/"
 */
declare function UrlParent(url: string): string;

/**
 * Извлекает из URL, переданного в качестве аргумента, путь.
 * @param {string} url - Url.
 * @returns {string} Результат.
 * @example
 * ```
 * UrlPath("http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html");
 * // "/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html"
 * ```
 */
declare function UrlPath(url: string): string;

/**
 * Возвращает расширение файла, указанного через url.
 * @param {string} url - Url.
 * @returns {string}
 * UrlPathSuffix( 'http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html' ) вернет '.html'.
 */
declare function UrlPathSuffix(url: string): string;

/**
 * Извлекает из URL, переданного в качестве аргумента, параметры запроса с разбивкой их на пары "имя - значение".
 * @param {string} url - Url.
 * @returns {object} Результат.
 * @example
 * ```
 * const obj = UrlQuery("http://news.websoft.ru/en?x=1&y=2&z=3");
 * alert(obj.x);
 * alert(obj.y);
 * ```
 */
declare function UrlQuery(url: string): Object;

/**
 * Возвращает схему URL (file, http, mailto, ftp, x-local).
 * @param {string} url - Url.
 * @returns {string}
 * UrlSchema( 'http://news.websoft.ru/' ) вернет 'http'.
 */
declare function UrlScheme(url: string): string;

/**
 * Функция UrlOrFilePathToFilePath() проверяет, является ли строка урлом либо путем в файловой системе.
 * В первом случае функция преобразовывает переданный url вида file:, x-app: или x-local: в путь файловой системы.
 * Во втором случае вернет переданный путь в исходном виде.
 * @param {string} str - Url файла либо путь к файлу.
 * @returns {string} - Результат.
 * @example UrlOrFilePathToFilePath("file:///d:/work/Temp.rar"); // d:\\work\\Temp.rar
 * @see {@link UrlToFilePath}
 */
declare function UrlOrFilePathToFilePath(str: string): string;

/**
 * Преобразует локальный url типа file: или x-local: в путь файловой системы..
 * @param {string} url - Локальный url.
 * @returns {string}
 * UrlToFilePath( 'file:///d:/work/Temp.rar' ) вернет 'd:\\work\\Temp.rar'.
 */
declare function UrlToFilePath(url: string): string;

/**
 * Преобразует локальный url типа file:, x-app: или x-local: в путь файловой системы.
 * Если преобразование совершить не удалось (например передан url другого типа, или база располагается не в локальной файловой системе), функция возвращает undefined.
 * @param {string} url - Url файла.
 * @returns {string} - Результат.
 * @example UrlToOptFilePath("file:///d:/work/Temp.rar"); // d:\\work\\Temp.rar
 * @see {@link FilePathToUrl}
 * @see {@link UrlOrFilePathToFilePath}
 */
declare function UrlToOptFilePath(url: string): string;

//#endregion

//#region Обработка HTML

/**
 * Извлекает содержимое составного документа html
 * (с вложенными файлами в формате <compound-attc/>) в файл,
 * сохраняя все вложенные файлы относительно него.
 * @param {any} html - Составной html.
 * @param {string} fileUrl - Url файла.
 */
declare function ExtractCompoundHtml(html: string, fileUrl: string): undefined;

/**
 * Кодирует строку, содержащую текст, для использования внутри HTML.
 * В результате символы & и < заменяются на &amp; и &lt;, соответственно, а переводы строк - на <br/>.
 * @param {string} str - Строка.
 * @returns {string} Результат.
 */
declare function HtmlEncode(str: string): string;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} - Результат.
 */
declare function HtmlNewCharset(): unknown;

/**
 * Преобразует строку, содержащую HTML, в простой текст.
 * @param {string} html - Строка, содержащая HTML.
 * @returns {string} Результат.
 */
declare function HtmlToPlainText(html: string): string;

/**
 * Преобразует строку, содержащую обычный текст в полный HTML-документ.
 * Действие функции аналогично действию функции {@link HtmlEncode}, но,
 * в отличие от последней, {@link HtmlEncodeDoc} формирует завершенный HTML-документ,
 * содержащий теги <html>, <body> и др.
 * @param {string} str - Str.
 * @returns {string} Результат.
 */
declare function HtmlEncodeDoc(str: string): string;

//#endregion

//#region Работа с формами данных

/**
 * Создает форму из строки, содержащей описание в формате XMD. Возвращает объект типа XmlForm.
 * @param {string} formStr - Строка, содержащая описание формы в формате XMD.
 * @example var form = CreateFormFromStr("<SPXML-FORM><generic_view></generic_view></SPXML-FORM>");
 * @returns {unknown} - Результат.
 * @see {@link RegisterFormFromStr}
 */
declare function CreateFormFromStr(formStr: string): unknown;

/**
 * Создает новый элемент формы. Созданный элемент формы не имеет родительского элемента.
 * Функция используется в редких случаях, например для динамической генерации форм данных.
 * @param {string} name - Имя поля `XMD`-формы.
 * @param {string} type - Тип данных `XMD`-формы.
 * @returns {XmlForm} XmlForm.
 */
declare function CreateFormElem(name: string, type: string): XmlFormElem;

/**
 * Если форма с данным `URL` уже находится в кэше, возвращается уже загруженный вариант.
 * @param {string} formUrl - `URL` формы.
 */
declare function FetchForm(formUrl: string): undefined;

/**
 * Регистрирует XML-форму, описанную в строке. Используется для программной генерации форм "на лету".
 * @param {string} formUrl - `URL`, по которому будет зарегистрирована форма.
 * @param {string} formData - Строка с описанием формы.
 * @returns {XmlForm} XmlForm.
 */
declare function RegisterFormFromStr(formUrl: string, formData: string): XmlForm;

/**
 * Редко используемая функция.
 * Регистрирует фрагмент/элемент существующий формы под новым `URL`.
 * Новый `URL` состоит из `URL` формы и полного наименования элемента формы,
 * которое включает в себя путь внутри формы от корня до этого элемента.
 * Возвращает `URL` новой формы.
 * @param {string} formUrl - `URL` формы.
 * @param {string} formPath - Полное наименование элемента формы,
 * включающее в себя путь внутри формы от корня до этого элемента.
 * @returns {string} Результат.
 * @example RegisterSubForm("base3_events.xmd", "events.event");
 */
declare function RegisterSubForm(formUrl: string, formPath: string): string;

/**
 * Регистрирует пару (`URL` документа) - (`URL` формы) для автоматически создаваемого документа.
 * Если где-то из программы будет обращение к этому документу с попыткой его открыть,
 * а документ еще не создан, то он будет создан по форме и открыт.
 * Если документ на момент обращения уже будет существовать, то он будет открыт по той же форме.
 * Используется для регистрации в программе каких-либо файлов, содержащих настройки,
 * которых изначально нет, но при первой попытки обращения к ним она фактически создаются в базе данных.
 * @param {string} documentUrl - Url документа.
 * @param {string} formUrl - Url формы.
 * @returns {undefined}
 * @example RegisterAutoDoc("x-local://static/global-settings.xml", "x-app://rcr/rcr_global_settings.xmd");
 */
declare function RegisterAutoDoc(documentUrl: string, formUrl: string): undefined;

/**
 * Находит зарегистрированный AutoDoc (т.е пару URL документа - URL формы,
 * смотри так же функцию RegisterAutoDoc) в списке зарегистрированных автоматически документов,
 * и возвращает ссылку на форму.
 * Если соответствующая пара в списке отсутствует, возвращает undefined.
 * @param {string} documentUrl - URL документа.
 * @returns {XmlForm} XmlForm.
 */
declare function GetOptAutoDocForm(documentUrl: string): XmlForm;

/**
 * Регистрирует отображение (mapping) одной формы в другую.
 * Mapping - это таблица, в которой содержит соответствия между старыми и новыми формами документов.
 * При попытке открыть документ по старой форме, будет автоматически вызвана новая форма,
 * на которую указывает элемент таблицы. Функция используется в редких случаях,
 * обычно при конвертации данных из предыдущих версий программы.
 * @param {string} formUrl - URL старой формы.
 * @param {string} newForm - URL новой формы.
 */
declare function RegisterFormMapping(formUrl: string, newForm: string): undefined;

/**
 * Удаляет все зарегистрированные при помощи функции {@link RegisterFormMapping} перенаправления форм.
 * Функция обычно используется при конвертации баз данных из предыдущих версий программы.
 */
declare function DeleteAllFormMappings(): undefined;

/**
 * Удаляет определенные форму из кэша. Функция используется в редких случаях при изменении структур данных на лету.
 * @param {string} urlPattern - Маска URL формы (т.е. XMD-файла).
 * @example DropFormsCache("*candidate*")
 */
declare function DropFormsCache(urlPattern: string): undefined;

//#endregion

//#region Работа с базой данных приложения

/**
 * Функция получает на вход массив каталожных записей (например результат XQuery),
 * и для каждого поля с FOREIGN-ARRAY каждой записи, заносит foreign elem в кэш каталога, при условии, что каталог, на который ссылается FOREIGN-ARRAY, имеет модель кэширования discrete.
 * Это ровно то же самое, что делает функция {@link XQuery} с опцией preload-foreign-data на клиентской части приложения.
 * Но, если {@link XQuery} была вызвана на сервере, а результат был передан на клиентскую часть отдельным способом, опция preload-foreign-data не сработает,
 * и в этом случае на клиентской части может потребоваться вызов PreloadXQueryResultForeignRecords.
 * Будучи вызванной на сервере со встроенной СУБД, функция PreloadXQueryResultForeignRecords не производит никаких действий,
 * поскольку встроенная СУБД имеет собственное кэширование.
 * @param {unknown[]} recordsArray - Массив каталожных записей
 * @returns {unknown} - Результат.
 */
declare function PreloadXQueryResultForeignRecords(recordsArray: unknown[]): unknown;

/**
 * Функция получает на вход массив каталожных записей (например результат XQuery), и для каждой записивыполняет проверку прав доступа текущего пользователя на чтение.
 * Если для записи отстутвуют права доступа, поля записи проходят через обфускацию.
 * Это ровно то же самое, что делает функция {@link XQuery} на сервере, будучи вызванной с клиента.
 * Но, если {@link XQuery} была вызвана на сервере, а результат будет передан на клиентскую часть отдельным способом, встроенная проверка не сработает,
 * и в этом случае перед отправкой данных на клиентскую часть может потребоваться вызов {@link PreprocessRecordsByReadAccess}.
 * Будучи вызванной на сервере со встроенной СУБД, функция {@link PreloadXQueryResultForeignRecords} не производит никаких действий, поскольку встроенная СУБД имеет собственное кэширование.
 * @param {unknown[]} recordsArray - Массив каталожных записей
 * @returns {unknown} - Результат.
 */
declare function PreprocessRecordsByReadAccess(recordsArray: unknown[]): unknown;

/**
 * Выполняет заданный запрос XQuery.
 * В сетевой версии приложения запрос выполняется на сервере.
 * `lds-server` - явный адрес сервера приложения, на который будет отправлен запрос.
 * Используется для обмена данных между серверами.
 * `preload-foreign-data` - заранее кэшировать связанные данные {@link Boolean}.
 * Обычно используется при показе списков в пользовательском интерфейсе сетевой версии,
 * в которых будет использовать связанные данные (ForeignElem).
 * @param {string} query - Строка, содержащая запрос.
 * @param {string} [options] - Набор опций.
 * @returns {Array} Результат.
 * @example XQuery("for $elem in candidates order by $elem/fullname return $elem", "preload-foreign-data=1");
 */
declare function XQuery<T>(query: string, options?: string): T[];

/**
 * Выполняет заданный запрос XQuery на клиентской машине.
 * Используется для запроса данных из каталогов локальных баз данных.
 * @param {string} query - Строка, содержащая запрос.
 * @returns {Array} Результат.
 */
declare function XQueryLocal<T>(query: string): T;

/**
 * Открывает базу данных и помещает ее в список открытых баз.
 * Если база уже открыта, возвращается ссылка на открытую базу из списка.
 * @param {string} name - Наименование базы данных.
 * @returns {Database} XmlDatabase.
 */
declare function FetchDb(name: string): Database;

/**
 * На основании наименования зашифрованной базы данных (модуля)
 * выдает полный путь до зашифрованного модуля базы данных (XFP - файл).
 * Функция не проверяет фактическое существование файла по указанному пути.
 * @param {string} moduleName - Наименование базы данных.
 * @returns {string} Результат.
 * @example GetDbFilePath("app2") == "С:\Program files\EStaff\app2.xfp";
 */
declare function GetDbFilePath(moduleName: string): string;

/**
 * Преобразует имя каталога в имя объекта.
 * Фактически функция преобразует имя существительное множественного числа
 * в имя существительное единственного числа по правилам английского языка.
 * @param {string} catalogName - Название каталога.
 * @returns {string} Результат.
 * @example CatalogNameToObjectName("candidates") == "candidate";
 */
declare function CatalogNameToObjectName(catalogName: string): string;

/**
 * Аналог функции {@link LoadUrlData}, позволяющий явно указать адрес сервера приложения,
 * с которого будут загружаться данные.
 * Используется как правило для синхронизации данных
 * или обмена данными между несколькими серверами приложений.
 * @param {string} url - Url.
 * @param {string} [options] - Опции.
 * @returns {string} Результат.
 * @example LoadUrlData("x-local://shared/xxx.xml", "lds-server=test2.datex.ru:9000");
 */
declare function LoadLdsUrlData(url: string, options?: string): string;

/**
 * Устанавливает директорию, которую программа будет считать
 * местом расположения базы данных. По умолчанию директория называется так же,
 * как и база И располагается в программной директории.
 * Функция используется, если нужно поместить базу в другую директорию.
 * @param {string} dbName - Наименование базы данных.
 * @param {string} dirUrl - Url директории.
 * @returns {undefined}
 */
declare function SetDbHostDir(dbName: string, dirUrl: string): undefined;

/**
 * Выдает true, если указанная база данных находится
 * в зашифрованном модуле (XFP - файл), и false, если не содержит.
 * @param {string} dbName - Наименование базы данных.
 * @returns {boolean} Результат.
 * @example IsPackageDb("app2")
 */
declare function IsPackageDb(dbName: string): boolean;

/**
 * Осуществляет загрузку в указанную зашифрованную базу данных
 * (модуль) информации из объекта. Используется, например,
 * при подгрузке интернет-модулей в E-Staff c сайта производителя.
 * Объект, информация из которого может быть загружена в базу данных,
 * создается специальной командой new FilePackage,
 * после чего в объект помещается информация, например,
 * при помощи метода {@link LoadFromStr}.
 * @param {string} dbName - Имя базы данных.
 * @param {object} filePackage - Объект типа FilePackage, информация из которого загружается в базу данных.
 * @returns {undefined}
 */
declare function SetDbFilePackage(dbName: string, filePackage: Object): undefined;

/**
 * Ищет каталог по имени во всех используемых базах данных.
 * Если не находит - возвращает undefined.
 * @param {string} catalogName - Наименование каталога базы данных.
 * @returns {object} Результат.
 * @example var catalog = FindOptCatalog("events");
 */
declare function FindOptCatalog(catalogName: string): Object;

//#endregion

//#region Работа с документами XML

/**
 * Опции открытия XML-документа используются в функциях OpenDoc(), OpenDocFromStr() и др.
 * Опции имеют вид "param1='value1';param2='value2';..."
 * * form - url формы, используемой при открытии (String). Форма, указанная в самом документе, будет игнорироваться
 * * ignore-top-elem-name - игнорировать имя корневого элемента. Позволяет использовать одну общую форму для документов  с разыми именами корневых элементов.
 * * drop-namespaces - удалять названия пространсв имен в названиях элементов (Bool)
 * * ui-text - поддерживать загрузку документов с многоязычными данными, загружая данные с языком текущего пользоваетльского интерфейса
 * * format - формат встроенного конвертора для открытия данных в других форматах в виде Xml. Поддерживаются следующие форматы: "sv" (separated values), "win.ini", "excel", "smml".
 * * delim - разделитель, используемый для формата "csv". Можно задать симво явно либо использовать значения tab или sem.
 * * header-line - считать, что первая строка для формата "csv" содержит названия полей (Bool)
 * * lower-case-names  - приводить названия полей для формата "csv" к нижнему регистру (Bool)
 */
type XMLOpenOptions = string;

/**
 * Опции экспорта XML-документа используются в функциях SaveToUrl(), SaveToStream() и др.
 * Опции имеют вид "param1='value1';param2='value2';..."
 * * inline-ext-objects - включать объекты с внешним хранением в экспорт. Позволяет экспортировать в один файл полное содержимое документа, включая объекты внешнего хранения, например прикрепленные файлы.
 * * tabs - форматировать XML с использованеим символов табуляции и превода строк для удобсьва чтение человеком. Значение по умолчанию определяется глобальной настройкой в ini-файле приложения.
 */
type XMLExportOptions = string;

/**
 * Возвращает список всех XML-документов из кэша.
 * @returns {unknown} - Результат.
 */
declare function GetAllCachedDocs(): unknown;

/**
 * Заменяет документ с заданным url в кэше документов на новый документ.
 * Функция используется для серверных документов, к которым может идти обращение их нескольких потоков одновременно (например, глобальных настроек).
 * Поскольку объект XmlDoc не является thread-safe, менять содержимое глобальных документов нельзя, однако можно заменить документ целиком, соблюдая thread-safety.
 * @returns {unknown} - Результат.
 */
declare function ReplaceCachedDoc(): unknown;

/**
 * Удаляет документ с заданным url.
 * @param {string} url - Url документа.
 * @param {boolean} [permanent] - Удалить мимо корзины. По умолчанию - false.
 * @example DeleteDoc("x-db-obj://data/candidate/0x4DF75B9F13FE5160.xml");
 */
declare function DeleteDoc(url: string, permanent?: boolean): undefined;

/**
 * Открывает XML-документ и помещает его в кэш документов.
 * Если документ с заданным url уже находится в кэше, возвращается уже загруженный в кэш документ.
 * @param {string} url - Url документа.
 * @param {XMLOpenOptions} [options] - Опции открытия документа.
 * @returns {XmlDocument} XmlDocument.
 */
declare function FetchDoc(url: string, options?: XMLOpenOptions): XmlDocument;

/**
 * Возвращает документ с заданным url из кэша.
 * Если документ с заданным url в кэше отсутствует, функция завершается с ошибкой.
 * @param {string} url - Url документа.
 * @returns {WTXmlDocument} XmlDocument.
 */
declare function GetCachedDoc(url: string): XmlDocument;

/**
 * Пытается найти форму в кэше загруженных форм по заданному `URL`.
 * Если такая форма была загружена в кэш, возвращает объект ссылка на форму, если нет - возвращает undefined.
 * @param {string} url - `URL` формы.
 * @returns {XmlForm} XmlForm.
 */
declare function GetOptCachedForm(url: string): XmlForm;

/**
 * Загружает xml документ в кэш документов и делает его корневой элемент видимым в списке глобальных имен.
 * @param {string} docUrl - Url документа.
 * @returns {XmlDocument} XmlDocument.
 */
declare function RegisterSharedDoc(docUrl: string): XmlDocument;

/**
 * Открывает XML-документ, содержащийся к строке.
 * @param {string} dataStr - Строка, содержащая данные открываемого документа.
 * @param {XMLOpenOptions} [options] - Опции открытия документа в виде "param1='value1';param2='value2';...".
 * @returns {XmlDocument} XmlDocument.
 */
declare function OpenDocFromStr<T extends XmlDocument>(dataStr: string, options?: XMLOpenOptions): T;

/**
 * Создает новый XML-документ по заданной форме.
 * @param {string} formUrl - Url формы.
 * @returns {XmlDocument} XmlDocument.
 */
declare function OpenNewDoc<T = XmlDocument>(formUrl: string): T;

/**
 * Открывает XML-документ. Возвращает объект типа XmlDoc.
 * @param {string} url - Url документа.
 * @param {string} [options] - Опции открытия документа в виде "param1='value1';param2='value2';...".
 * См. Опции открытия документа XML.
 * @returns {XmlDocument} XmlDocument.
 */
declare function OpenDoc<T = XmlDocument>(url: string, options?: string): T;

/**
 * Перемещает XML-документ из одного url в другой url.
 * В отличие от обычного перемещения файла, действие этой функции сопровождается
 * выполнением стандартных свойств OnSave, OnBeforeSave и т.д.
 * Документ сначала пересохраняется по новому url, затем удаляется из предыдущей.
 * Редко используемая функция.
 * @param {string} url - Url существующего документа.
 * @param {string} newUrl - Новый url документа.
 */
declare function MoveDoc(url: string, newUrl: string): undefined;

/**
 * Пытается найти открытую в пользовательском интерфейсе карточку XML-документа.
 * Если таковая карточка найдена, функция возвращает ссылку на документ из этой карточки.
 * В противном случае действие функции аналогично {@link OpenDoc}.
 * Чтобы сохранить измененный документ, необходимо использовать
 * функцию {@link UpdateUiDoc} (а не вызвать метод Doc.Save, как при открытии документа при помощи {@link OpenDoc}).
 * Если документ был открыт пользователем на экране, то при выполнении функции {@link UpdateUiDoc}
 * документ будет изменен прямо на экране, если открытого документа не было - то документ будет просто сохранен.
 * @param {string} docUrl - Url XML-документа.
 * @returns {XmlDocument} XmlDocument.
 */
declare function ObtainUiDoc(docUrl: string): XmlDocument;

/**
 * Сохраняет изменения в документе, открытом при помощи функции ObtainUiDoc.
 * Если это был документ, открытый пользователем на экране,
 * то функция устанавливает аргумент метода Doc.SetChanged(true),
 * и больше ничего не делает. Установка этого аргумента необходима,
 * чтобы при закрытии документа пользователю было предложено сохранить изменения.
 * Если это был документ, открытый программой без участия пользователя,
 * действие функции аналогично действию метода Doc.Save().
 * @param {XmlDocument} doc - Открытый документ.
 */
declare function UpdateUiDoc(doc: XmlDocument): undefined;

/**
 * Возвращает url объектного документа по имени базы, типа объекта и Id документа.
 * @param {string} dbName - Наименование базы данных.
 * @param {string} objectType - Наименование типа объекта.
 * @param {string | number} objectID - Id документа.
 * @returns {string} Результат.
 * @example
 * ```
 * ObjectDocUrl("data", "person", 1238461"); // "x-db-obj://data/person/0x000000000012E5BD.xml"
 * ObjectDocUrl("data", "event_type", "interview"); // "x-db-obj://data/event_type/interview.xml"
 * ```
 */
declare function ObjectDocUrl(dbName: string, objectType: string, objectID: string | number): string;

/**
 * Выдает наименование типа объекта по его url.
 * @param {string} url - Url объекта.
 * @returns {string} Результат.
 * @example
 * ```
 * ObjectNameFromUrl("x-db-obj://data/person/0x000000000012E5BD.xml"); // 'person'
 * ObjectNameFromUrl("x-db-obj://data/event_type/interview.xml"); // 'event_type'
 * ```
 * @see {@link ObjectDocUrl}
 * @see {@link ObjectIDFromUrl}
 */
declare function ObjectNameFromUrl(url: string): string;

/**
 * Выдает Id объектного документа по его url.
 * @param {string} url - Url объекта.
 * @returns {number} Результат.
 * @see {@link ObjectDocUrl}
 */
declare function ObjectIDFromUrl(url: string): number;

/**
 * Удаляет на сервере приложения документ с заданным url.
 * Используется в специализированном коде, предназначенном для синхронизации баз данных или обмена данными между базами.
 * @param {string} docUrl - Url документа.
 * @param {string} [options] - Опции.
 * @example LdsDeleteDoc("x-db-obj://data/candidate/042D8A4596B679/E0.xml", "lds-server=test2.datex.ru:9000");
 */
declare function LdsDeleteDoc(docUrl: string, options?: string): undefined;

//#endregion

//#region Работа с элементами XML

/**
 * Создает XML-элемент по заданному элементу формы.
 * Созданный элемент не имеет родительского элемента.
 * Редко используемая функция.
 * @param {XmlFormElem} formElem - Объект вида {@link XmlFormElem}
 * @returns {XmlFormElem} - Результат.
 * @example
 * ```
 * attachment = CreateElemByFormElem(candidate.attachments.FormElem[0]);
 * candidate.attachments.AddChildElem(attachment);
 * // эквивалентно
 * attachment = candidate.attachments.AddChild();
 * ```
 */
declare function CreateElemByFormElem(formElem: XmlFormElem): XmlFormElem;

/**
 * Узкоспециализированная функция.
 * Может использоваться в генераторах интерфейсов.
 * Функция находит шаблонный элемент формы в списке глобальных шаблонных элементов (описанных с атрибутом SAMPLE="1").
 * Если шаблонный элемент с данным именем не найден, возвращает undefined.
 * @param {string} sampleName - Имя шаблонного элемента
 * @returns {unknown} - Результат.
 */
declare function FindSampleFormElem(sampleName: string): unknown;

/**
 * Создает XML-элемент заданному по фрагменту формы. Созданный элемент не имеет родительского элемента.
 * Функция используется для управления сложными структурами в оперативной памяти компьютера
 * (как альтернатива javascript object), а так же для формирования XML для внешнего использования.
 * @param {string} formUrl - Url xmd-файла, в котором находится форма.
 * @param {string} elemPath - Пусть к фрагменту формы.
 * @returns {XmlElem<unknown>} Элемент.
 * @example CreateElem("//base2/base2_user.xmd", "user");
 */
declare function CreateElem(formUrl: string, elemPath: string): XmlElem<unknown>;

/**
 * Создает динамический (без привязки к форме) XML-элемент. Созданный элемент не имеет родительского элемента.
 * @param {string} name - Имя элемента.
 * @param {string} type - Тип данных XML-элемента.
 * @returns {XmlElem<unknown>} Динамический элемент.
 * @example CreateDynamicElem("elem_count", "integer");
 */
declare function CreateDynamicElem(name: string, type: string): XmlElem<unknown>;

/**
 * Выдает целевой элемент массива по значению первичного ключа.
 * Смотри так же {@link GetOptForeignElem}.
 * Действие функции несколько отличается от функции {@link ArrayOptFindByKey}
 * за счет поддержки рекурсивных массивов XML-элементов.
 * Кроме этого, в новой объектной модели функция никогда не завершается с ошибкой,
 * если соответствующий элемент не найден, а возвращает пустой псевдо-элемент
 * (режим терпимости к незаполненным и битым ссылкам).
 * @param {T} array - Массив объектов.
 * @param {K} value - Значение ключевого элемента.
 * @returns {XmlElem<unknown>} - Результат.
 * @example GetForeignElem(event_types, "interview");
 */
declare function GetForeignElem<T, K>(array: T, value: K): XmlElem<unknown>;

/**
 * Выдает целевой элемент массива по значению первичного ключа.
 * Если соответствующей элемент не найден, возвращается undefined.
 * Смотри так же {@link GetForeignElem}.
 * Действие функции несколько отличается от функции {@link ArrayOptFindByKey}
 * за счет поддержки рекурсивных массивов XML-элементов.
 * @param {T} array - Массив объектов.
 * @param {K} value - Значение ключевого элемента.
 * @returns {unknown} Результат.
 * @example GetOptForeignElem(event_types, "interview");
 */
declare function GetOptForeignElem<T, K>(array: T, value: K): unknown;

/**
 * Создает новый пустой элемент массива, не добавляя его в в сам массив.
 * Используется для отработки "битых ссылок" на элементы массива и
 * ссылок на удаленные элементы массива.
 * Смотри так же {@link GetOptForeignElem} и {@link GetForeignElem}.
 * В текущей реализации массив может быть только каталогом.
 * @param {T} array - Массив элементов.
 * @returns {XmlElem<unknown>} Результат.
 */
declare function GetFailedForeignElem<T>(array: T): XmlElem<unknown>;

/**
 * Загружает строку в массив XML-элементов.
 * Используется при обработке параметров,
 * полученных от внешних процедур и плагинов.
 * @see {@link declareElemsToStr}
 * @param {string} arg1 - Строка.
 * @returns {Array} Результат.
 */
declare function LoadElemsFromStr(arg1: string): unknown[];

/**
 * Загружает массив XML-элементов в строку.
 * Используется для передачи параметров в плагины и другие внешние процедуры.
 * @see {@link LoadElemsFromStr}
 * @param {string} arg1 - Строка.
 * @returns {Array} Результат.
 */
declare function ExportElemsToStr(arg1: string): unknown[];

/**
 * Загружает массив XML-элементов в строку.
 * Используется для передачи параметров в плагины и
 * другие внешние процедуры.
 * @param {T} arg1 - Массив XML-элементов (array of objects).
 * @returns {string} Результат.
 * @see {@link LoadElemsFromStr}
 */
declare function declareElemsToStr<T>(arg1: T): string;

//#endregion

//#region Работа с экранами

/**
 * Возвращает одну из встроенных метрик UI.
 * Метрики UI обычно используются при создании собственных сложных элементов UI.
 * Поддерживаются следующие метрики:
 * * TextLineHeight - высота текстовой строки в шрифте по умолчанию.
 * * ListRowCoreHeight - высота строки списка по умолчанию (не включая разделитель).
 * @param {"TextLineHeight" | "ListRowCoreHeight"} metricType - Тип метрики.
 * @returns {unknown} - Результат.
 */
declare function GetUiMetric(metricType: "TextLineHeight" | "ListRowCoreHeight"): unknown;

declare function GetSampleParamRec(): unknown;

/**
 * Вычисляет ширину текста при расположении его в одну строку в шрифте по умолчанию.
 * @param {string} text - Текст.
 * @returns {unknown} - Результат.
 */
declare function CalcTextScreenWidth(text: string): unknown;

/**
 * Закрывает все активные выпадающие элементы экрана.
 * Функция используется как правило при разработке собственных выпадающих элементов.
 * @returns {unknown} - Результат.
 */
declare function CloseAllDropDownItems(): unknown;

/**
 * Проверяет наличие зарегистрированной экранной формы с заданным url.
 * @param {string} url - URL экранной формы.
 * @returns {boolean} - Результат.
 */
declare function IsScreenFormRegistered(url: string): boolean;

/**
 * Динамически регистрирует экранную форму, содержащую набор типовых элементов,
 * по аналогии с <sample_screen_form> в описании модуля.
 * @param {string} url - URL формы.
 * @returns {unknown} - Результат.
 */
declare function RegisterSharedSampleScreenForm(url: string): unknown;

/**
 * Для сложных составных элементов, описанных в виде шаблона (SAMPLE ="1"), таких как, например, object_setector, voc_elem_selector, date_selector,
 * возвращает сам этот элемент из любого места кода внутри экземпляра этого элемента.
 * Функция используется для написания сложных составных элементов.
 * @returns {unknown} - Результат.
 * @example <IF EXPR="GetSampleItem().IsEnabled">
 */
declare function GetSampleItem(): unknown;

/**
 * Для сложных составных элементов, описанных в виде шаблона (SAMPLE ="1"), таких как, например, object_setector, voc_elem_selector, date_selector,
 * возвращает сам этот элемент из любого места кода внутри экземпляра этого элемента.
 * Функция используется для написания сложных составных элементов.
 * @param {string} paramName - Наименование параметра.
 * @returns {unknown} - Результат.
 * @example <LABEL TITLE-EXPR="lib_voc.foreign_voc_title( Ps, GetSampleParam( 'usage' ) )" READ-ONLY="1"  WIDTH="100%" HEIGHT="100"/>
 */
declare function GetOptSampleParam(paramName: string): unknown;

/**
 * Вычисляет (относительно самого элемента) значение параметра, если у этого параметра стоит атрибут EXPR.
 * @returns {unknown} - Результат.
 */
declare function EvalSampleParam(): unknown;

/**
 * Вычисляет (относительно самого элемента) значение параметра, если у этого параметра стоит атрибут EXPR.
 * @deprecated
 * @param {string} paramName - Наименование параметра.
 * @returns {unknown} - Результат.
 */
declare function EvalSampleParamRec(paramName: string): unknown;

/**
 * Редко используемая функция.
 * Используется в комбининованных формах *.xmc для добавления новых элементов списка.
 * @param {XmlElem<unknown>[]} addElems - Добавляемый элемент.
 * @returns {unknown} - Результат.
 */
declare function OpenInnerPage(...addElems: XmlElem<unknown>[]): unknown;

/**
 * Отображает на экране указанное почтовое сообщение, с использование выбранного способа отображения.
 * @param {MailMessage} msg - Почтовое сообщение.
 * @param {string} [methodId] - Способ отображения почтового сообщения.
 * @example ShowMailMessage(message, local_settings.mail_method_id);
 * @returns {unknown} - Результат.
 */
declare function ShowMailMessage(msg: MailMessage, methodId?: string): unknown;

/**
 * Создает экран для заданного документа.
 * @param {XmlDocument} xmlDocument - Документ, который будет отображен на экране.
 * @param {string} xmsUrl - Url формы, при помощи которой документ будет открыт.
 * @example var screen = CreateDocScreen(doc, "base1_csd.xms");
 * @returns {Screen} - Объект {@link Screen}.
 */
declare function CreateDocScreen(xmlDocument: XmlDocument, xmsUrl: string): typeof Screen;

/**
 * Если есть какой-либо большой глобальный документ (как правило - это общие настройки или персональные настройки),
 * и требуется, чтобы он редактировался не в одном гигинтском окне, а в нескольких маленьких разделах,
 * в этом случае открывает один большой документ, но в окне показыватся его маленький кусочек.
 * Редко используемая функция.
 * @see {@link ObtainSubDocScreen}
 * @param {XmlElem<unknown>} docElem - Раздел документа.
 * @param {string} xmsUrl - Url экранной формы.
 * @returns {unknown} - Результат.
 */
declare function CreateSubDocScreen(docElem: XmlElem<unknown>, xmsUrl: string): unknown;

/**
 * Находит экран по url документа, открытого в этом экране.
 * Проверяет, не открыт ли экран с заданным url, если открыт, то поднимает его на верх, если не открыт, то создает экран и открывает документ.
 * Обычно эта фукнция вызывается, когда пользователь открывает из списка что-либо двойным щелчком.
 * @param {string} docUrl - Url документа.
 * @example
 * ```
 * screen = ObtainDocScreen(ObjectDocUrl('trash', 'trash_object', ListElem.id));
 * screen = ObtainDocScreen(event.candidate_id.ForeignObjectUrl);
 * ```
 * @returns {Screen} - Объект {@link Screen}.
 */
declare function ObtainDocScreen(docUrl: string): typeof Screen;

/**
 * Вызывает открытие экрана для объектого документа.
 * Редко используемая функция.
 * @param {DataBase} base - База данных.
 * @param {string} catalog - Наименование каталога.
 * @param {number} documentId - Url документа.
 * @example ObtainObjectDocScreen(DefaultDb, "vacancy", ListElem.vacancy_id);
 * @returns {unknown} - Результат.
 */
declare function ObtainObjectDocScreen(base: Database, catalog: string, documentId: number): unknown;

/**
 * Если есть какой-либо большой глобальный документ (как правило - это общие настройки или персональные настройки),
 * и требуется, чтобы он редактировался не в одном гигинтском окне, а в нескольких маленьких разделах,
 * в этом случае открывает один большой документ, но в окне показыватся его маленький кусочек.
 * @param {XmlElem<unknown>} xmlElem - Раздел документа.
 * @param {string} xmsUrl - Url экранной формы.
 * @example ObtainSubDocScreen(ListElem.site_settings, "imod_settings_site.xms");
 * @see {@link CreateSubDocScreen}
 * @returns {unknown} - Результат.
 */
declare function ObtainSubDocScreen(xmlElem: XmlElem<unknown>, xmsUrl: string): unknown;

/**
 * Ищет экран с заданным именем среди всех существующих экранов.
 * Если экран не найден возвращает undefined.
 * @param {string} screenName - Имя экрана.
 * @returns {typeof Screen | undefined} - Результат.
 */
declare function FindOptScreen(screenName: string): typeof Screen | undefined;

/**
 * Ищет экран с заданным именем среди всех существующих экранов.
 * Если экран не найден возвращает ошибку.
 * @param {string} screenName - Имя экрана.
 * @returns {typeof Screen | never} - Результат.
 * @see {@link FindOptScreen}
 */
declare function FindScreen(screenName: string): typeof Screen | never;

/**
 * Ищет экран с заданным url документа, если экран не найден, возвращает исключение.
 * @param {string} docUrl - Url документа.
 * @see {@link FindOptScreenByDocUrl}
 * @see {@link ObtainDocScreen}
 * @returns {typeof Screen | never} - Результат.
 */
declare function FindScreenByDocUrl(docUrl: string): typeof Screen | never;

/**
 * Ищет экран с заданным url документа, если экран не найден, возвращает undefined.
 * @param {string} docUrl - Url документа.
 * @see {@link FindScreenByDocUrl}
 * @see {@link ObtainDocScreen}
 * @returns {typeof Screen | undefined} - Результат.
 */
declare function FindOptScreenByDocUrl(docUrl: string): typeof Screen | undefined;

/**
 * Вызывает обновление экрана с заданными параметрами.
 * Эту функцию можно вызывать из других потоков, она безопасная.
 * @param {string} maskScreen - Маска выбора имени экрана.
 * @param {string} maskForm - Маска выбора имени экранной формы.
 * @example
 * ```
 * UpdateScreens("*", "*view*"); // Обновление всех экранов, наименование файла экранной формы которых содержит 'view'
 * UpdateScreens("*", "*"); // Обновление всех экранов
 * ```
 * @returns {unknown} - Результат.
 */
declare function UpdateScreens(maskScreen: string, maskForm: string): unknown;

/**
 * Редко используемая фукнция.
 * Сбрасыает данные из кэша.
 * Используется, когда программа сама модифицирует какие-то формы, и чтобы обновления вступили в силу необходимо сбросить данные из кэша.
 * @returns {unknown} - Результат.
 */
declare function DropScreenFormsCache(): unknown;

/**
 * Регистрирует экранную форму, переданную в виде строки.
 * @param {string} xmsUrl - Url, по которому будет зарегистрирована форма.
 * @param {string} xmsForm - Экранная форма.
 * @example
 * ```
 * RegisterScreenFormFromStr(ReplaceUrlPathSuffix(formUrl, ".xmd", ".xms"), screenFormData);
 * RegisterScreenFormFromStr(vocInfo.object_screen_form_url, LoadUrlData("base1_voc_object.xms"));
 * ```
 * @returns {unknown} - Результат.
 */
declare function RegisterScreenFormFromStr(xmsUrl: string, xmsForm: string): unknown;

/**
 * Делает объединение двух экранных форм.
 * Используется для регистрации дополнительных (пользовательских) полей, открываемых дополнительной (пользовательской) экранной формой.
 * Редко используемая функция.
 * @see {@link MergeScreenForm}
 * @returns {unknown} - Результат.
 */
declare function AppendScreenForm(): unknown;

/**
 * Объединяет две формы.
 * @see {@link AppendScreenForm}
 * @param {string} mainFormUrl - Url основной формы.
 * @param {string} addFormUrl - Url дополнительной формы.
 * @param {string} elemName - Наименование элемента основной формы, после которого будет присоединена дополнительная форма.
 * @returns {unknown} - Результат.
 * @example MergeScreenForm("//base2/base2_access_role.xms", "rcr_fields_access_role.xms", "AccessFieldsAnchor");
 */
declare function MergeScreenForm(mainFormUrl: string, addFormUrl: string, elemName: string): unknown;

//#endregion

//#region Работа с реестром Windows

/**
 * Опции при вызове функций работы с реестром Windows
 * Большинство функций работы с реестром Windows принимают в качестве последнего необязятельного аргумента список опций.
 * Опции задаются в двойственном формате - либо объект типа Object, как праивло описываемый конструкцией JSON, либо строкой вида namr1=value1;name2=value2;...
 * Список допустимыйх опций:
 * * Prefer32View - для 64-битной ОС использовать 32-битную альтернативную ветку реестра, независимо от типа приложения
 * * Prefer64View - для 64-битной ОС использовать 64-битную основную ветку реестра, независимо от типа приложения
 */
type SystemRegistryOptions = string | {
    Prefer32View?: boolean;
    Prefer64View?: boolean;
};

/**
 * Возвращает массив имен дочерних ключей заданного ключа реестра Windows.
 * @param {string} path - Полный путь к ключу реестра.
 * @param {SystemRegistryOptions} [options] - Опции.
 * @returns {unknown[]} - Результат.
 */
declare function GetSysRegKeyChildNames(path: string, options?: SystemRegistryOptions): unknown[];

/**
 * Возвращает значение строкового из реестра Windows.
 * Если элемент не существует, возвращается пустая строка.
 * @param {string} path - Полный путь к ключу реестра.
 * @param {string} [name] - Имя элемента. Если указано пустоое имя элемента, используется элемент по умолчанию.
 * @example GetSysRegStrValue("HKEY_CURRENT_USER\\Software\\Clients\\Mail\\", "");
 */
declare function GetSysRegStrValue(path: string, name?: string): undefined;

/**
 * Удаляет ключ реестра Windows, если он пустой.
 * Если ключ содержит другие ключи, функция завершается с ошибкой.
 * @param {string} path - Путь к ключу реестра.
 * @example RemoveEmptySysRegKey("HKEY_CURRENT_USER\\Software\\Datex\\");
 */
declare function RemoveEmptySysRegKey(path: string): undefined;

/**
 * Удаляет ключ реестра Windows, включая все вложенные ключи.
 * @param {string} path - Путь к ключу реестра.
 * @example RemoveSysRegKey("HKEY_LOCAL_MACHINE\\Software\\Datex\\EStaff");
 */
declare function RemoveSysRegKey(path: string): undefined;

/**
 * Устанавливает целочисленное значение ключа реестра Windows.
 * @param {string} path - Полный путь к ключу реестра.
 * @param {string} name - Имя элемента.
 * @param {number} value - Целочисленное значение элемента.
 * @returns {undefined} - Результат.
 * @example SetSysRegIntegerValue("HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\EStaff", "NoModify", 1);
 */
declare function SetSysRegIntegerValue(path: string, name: string, value: number): undefined;

/**
 * Устанавливает строковое значение ключа реестра Windows.
 * @param {string} path - Полный путь к ключу реестра.
 * @param {string} name - Имя элемента.
 * @param {number} value - Целочисленное значение элемента.
 * @returns {undefined} - Результат.
 * @example SetSysRegStrValue("HKEY_LOCAL_MACHINE\\Software\\Datex\\EStaff", "Sn", "AHYC-52DG-87RT");
 */
declare function SetSysRegStrValue(path: string, name: string, value: number): undefined;

/**
 * Проверяет существует ли ключ реестра Windows.
 * @param {string} path - Путь к ключу реестра.
 * @example SysRegKeyExists("HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Office\\Word");
 * @returns {boolean} - Результат.
 */
declare function SysRegKeyExists(path: string): boolean;

//#endregion

//#region Выполнение кода

/**
 * Открывает файл, содержащий код и вызывает описанную внутри функцию.
 * Загруженный код никак не кэшируется, при повторном вызове загрузка файла произойдет заново.
 * @deprecated Рекомендуется использовать {@link OpenCodeLib}
 * @param {string} url - Url, содержщий код.
 * @param {string} functionName - Имя функции.
 * @param {unknown[]} [arguments] - Аргументы функции.
 * @returns {unknown} - Результат.
 */
declare function CallCodeUrlFunction(url: string, functionName: string, ...arguments: unknown[]): unknown;

/**
 * Вызывает метод (функцию) библиотеки на сервере приложения.
 * У метода должна быть установлена мета-директива "META:ALLOW-CALL-FROM-CLIENT:1".
 * Значения аргументов могут быть переданы либо через массив, либо через стандартный объект, содержащий пары "имя аргумента" - "значения аргумента".
 * Не все типы значений могут быть переданы в серверный метод и возвращены обратно.
 * Поддерживаются все скалярные типы, стандартные массивы, стандартные объекты, а также объекты {@link XmlElem} и {@link XmlDoc}.
 * @param {string} libName - Имя библиотеки либо url библиотеки.
 * @param {string} methodName - Имя метода.
 * @param {unknown[]} argumentsArray - Стандартный массив значений аргументов, либо стандартный объект, содержащий значения аргументов.
 * @returns {unknown} - Результат.
 */
declare function CallServerMethod(libName: string, methodName: string, argumentsArray?: unknown[]): unknown;

/**
 * Проверяет синтаксис страницы со вставками кода по правилам ASP.
 * В случае неверного синтаксиса вызывает исключение с описанием ошибки.
 * @param {string} codeStr - Строка, содержащая вставки кода.
 * @see {@link EvalCodePage}
 * @see {@link EvalCodePageUrl}
 * @returns {unknown} - Результат.
 */
declare function CheckCodePageSyntax(codeStr: string): unknown;

/**
 * Проверяет синтаксис кода на SP-XML Script.
 * В случае неверного синтаксиса вызывает исключение с описанием ошибки.
 * @param {string} codeStr - Строка, содержащая код.
 * @see {@link EvalCodePage}
 * @see {@link EvalCodePageUrl}
 * @returns {unknown} - Результат.
 */
declare function CheckCodePageSyntax(codeStr: string): unknown;

/**
 * Проверяет наличие метода с определенным именем в v2-библиотеке.
 * @param {XmlDocument | object} lib - Библиотека.
 * @param {string} methodName - Имя метода.
 * @returns {boolean} - Результат.
 */
declare function CodeLibraryMethodExists(lib: XmlDocument | Object, methodName: string): boolean;

/**
 * Выполняет код спустя заданный временной интервал.
 * Доступно только на клиентской части приложения.
 * Код выполняется всегда в главном потоке, независимо от того, в каком потоке была вызвана функция {@link EvalAfterDelay}.
 * @param {string} codeStr - Строка, содержащая выполняемый код.
 * @param {number} delay - Интервал в миллисекундах.
 * @param {object} [envObject] - Дополнительный объект, поля которого будут доступны в выполняемом окружении
 * @returns {unknown} - Результат.
 */
declare function EvalAfterDelay(codeStr: string, delay: number, envObject?: Object): unknown;

/**
 * Выполняет код в заданном окружении.
 * @param {string} codeStr - Строка, содержащая выполняемый код.
 * @param {"Global" | "Safe" | "Doc" | "ScreenItem"} [envType] - Тип окружения: "Global" либо undefined (по умолчанию), "Safe", "Doc", "ScreenItem".
 * @param {XmlDocument | ScreenItem} [baseObject] - Базовый объект окружения. XmlDoc для окружения типа "Doc", ScreenItem для окружения типа "ScreenItem". Для остальных типов окружения необходимо передавать undefined.
 * @param {unknown[]} [envObjects] - Массив дополнительных объектов окружения, видимых по аналогии с конструкцией with.
 * @returns {unknown} - Результат.
 */
declare function ExtEval(codeStr: string, envType?: "Global" | "Safe" | "Doc" | "ScreenItem", baseObject?: XmlDocument | ScreenItem, envObjects?: unknown[]): unknown;

/**
 * Находит зарегистрированную v2-библиотеку по имени и возвращает ссылку на нее.
 * Если библиотека с указанным именем не найдена, возвращает undefined.
 * @param {string} libName - Имя библиотеки.
 * @returns {unknown} - Результат.
 */
declare function GetOptCodeLibrary<T>(libName: string): T | undefined;

/**
 * Функция динамически загружает библиотеку v2.
 * У динамически загруженной библиотеки v2,
 * в отличие от статически описанной в модуле через <code_source_files>,
 * есть два ограничения:
 * 1. Namespace, указанный в файле, игнорируется.
 * 2. Библиотека должна быть описана в одном файле.
 * @param {string} url - Url файла .bs.
 * @returns {T} Объект namespace.
 */
declare function OpenCodeLibrary<T>(url: string): T;

/**
 * Выполняет код в безопасном окружении (без доступа к каким-либо глобальным данными приложения).
 * @param {string} codeStr - Строка, содержащая выполняемый код.
 * @param {unknown[]} envObjects - Стандартный массив, содержащий список дополнительных объектов, видимых (по аналогии с with {}) в окружении.
 * @see {@link ExtEval}
 * @returns {unknown} - Результат.
 */
declare function SafeEval(codeStr: string, envObjects: unknown[]): unknown;

/**
 * Кодирует аргумент как константу JScript. Используется для генерации выражений.
 * @param {any} value - Аргумент (Any).
 * @param {any} quoteChar - Символ, используемый в качестве кавычки
 * (допустимые значения: одинарная или двойная кавычка).
 * Необязательный аргумент. По умолчанию используется одинарная кавычка.
 * @returns {string} Результат.
 * Значение null Значение типа string заключается в кавычки,
 * при этом существующие кавычки внутри строки маскируются по правилам JScript.
 * Значение типа integer или real переводится в соответствующее строковое значение.
 * Значение типа bool переводится в строку 'true' или 'false'.
 * Значение типа date переводится в строку вида `Date("2011-01-30T10:30:00")`.
 */
declare function CodeLiteral(value: undefined | null | string | number | boolean | Date, quoteChar?: string): string;

/**
 * Выполняет код JScript в текущем окружении. Аналогична стандартной функции JScript с таким же именем, но,
 * в отличие от нее выполняет код на отдельном уровне (переменные, объявленные внутри кода, не будут видны снаружи).
 * @param {string} code - Выполняемый код JScript.
 * @returns {unknown} Результат.
 * @see {@link InPlaceEval}
 */
declare function eval(code: string): unknown;

/**
 * Выполняет код JScript в текущем окружении. В отличие от функции {@link eval} выполняет код на том же уровне
 * (переменные, объявленные внутри кода, будут видны снаружи), и не позволяет возвращать значение.
 * @param {string} code - Выполняемый код JScript.
 */
declare function InPlaceEval(code: string): undefined;

/**
 * Интерпретирует содержимое страницы по правилам ASP.
 * @param {string} pageData - Строка, содержащая текст страницы.
 * @param {boolean} [raiseErrors] - Завершать функцию с ошибкой, если таковая возникнет при обработке страницы.
 * По умолчанию, в случае возникновения ошибки ее текст добавляется к результату, а функция возвращается без ошибки.
 * @returns {string} Результат.
 */
declare function EvalCodePage(pageData: string, raiseErrors?: boolean): string;

/**
 * Интерпретирует содержимое страницы по правилам ASP.
 * @param {string} pageData - Строка, содержащая текст страницы.
 * @param {string} [options] - Строка, содержащая опции запуска в формате "name1=value1;name2=value2".
 * По умолчанию, в случае возникновения ошибки ее текст добавляется к результату, а функция возвращается без ошибки.
 * @returns {string} Результат.
 */
declare function EvalCodePage(pageData: string, options?: string): string;

/**
 * Интерпретирует содержимое страницы со вставками кода по правилам ASP.
 * @param {string} pageData - Строка, содержащая текст страницы.
 * @param {string} [options] - Строка, содержащая опции запуска в формате "name1=value1;name2=value2" либо флаг strictErrors.
 * Поддерживаемые опции:
 * * asp-style (bool) - поддерживать стиль <%=%>. Включена по умолчанию.
 * * bracket-style (bool) - поддерживать стиль [[]].
 * * webbinder-style (bool) - поддерживать стиль ::.
 * * strict-errors (bool) - при возникновении ошибки в какой-либо вставке, завершать выполнение всей страницы с этой же ошибкой. По умолчанию текст ошибки пишется в текст страницы, и выполнение продолжается.
 * * caller-env (bool) - выполнять в вызывающем окружении. Устаревшая опция, не рекомендуется использовать.
 * * content-type (string) - тип содержимого странцы. Поддерживается только "text/xml".
 * @param {"Global" | "Safe" | undefined} envType - Тип окружения.
 * @param {undefined} baseObject - Базовый объект окружения.
 * @param {unknown[]} [extraEnv] - Массив дополнительных объектов окружения, видимых по аналогии с конструкцией with.
 * Существует также старая нотация данной функции, когда вторым аргументом передается булево значение.
 * В этом случае второй аргумент содержит не опции запуска, а единственную опцию strictErrors.
 * @returns {string} Результат.
 */
declare function EvalCodePage(pageData: string, options: string, envType?: "Global" | "Safe", baseObject?: undefined, extraEnv?: unknown[]): string;

/**
 * Интерпретирует содержимое страницы со вставками кода по правилам ASP.
 * @param {string} pageData - Строка, содержащая текст страницы.
 * @param {string} [options] - Строка, содержащая опции запуска в формате "name1=value1;name2=value2" либо флаг strictErrors.
 * Поддерживаемые опции:
 * * asp-style (bool) - поддерживать стиль <%=%>. Включена по умолчанию.
 * * bracket-style (bool) - поддерживать стиль [[]].
 * * webbinder-style (bool) - поддерживать стиль ::.
 * * strict-errors (bool) - при возникновении ошибки в какой-либо вставке, завершать выполнение всей страницы с этой же ошибкой. По умолчанию текст ошибки пишется в текст страницы, и выполнение продолжается.
 * * caller-env (bool) - выполнять в вызывающем окружении. Устаревшая опция, не рекомендуется использовать.
 * * content-type (string) - тип содержимого странцы. Поддерживается только "text/xml".
 * @param {"Doc"} envType - Тип окружения.
 * @param {XmlDocument} baseObject - Базовый объект окружения.
 * @param {unknown[]} [extraEnv] - Массив дополнительных объектов окружения, видимых по аналогии с конструкцией with.
 * Существует также старая нотация данной функции, когда вторым аргументом передается булево значение.
 * В этом случае второй аргумент содержит не опции запуска, а единственную опцию strictErrors.
 * @returns {string} Результат.
 */
declare function EvalCodePage(pageData: string, options: string, envType: "Doc", baseObject: XmlDocument, extraEnv?: unknown[]): string;

/**
 * Интерпретирует содержимое страницы со вставками кода по правилам ASP.
 * @param {string} pageData - Строка, содержащая текст страницы.
 * @param {string} [options] - Строка, содержащая опции запуска в формате "name1=value1;name2=value2" либо флаг strictErrors.
 * Поддерживаемые опции:
 * * asp-style (bool) - поддерживать стиль <%=%>. Включена по умолчанию.
 * * bracket-style (bool) - поддерживать стиль [[]].
 * * webbinder-style (bool) - поддерживать стиль ::.
 * * strict-errors (bool) - при возникновении ошибки в какой-либо вставке, завершать выполнение всей страницы с этой же ошибкой. По умолчанию текст ошибки пишется в текст страницы, и выполнение продолжается.
 * * caller-env (bool) - выполнять в вызывающем окружении. Устаревшая опция, не рекомендуется использовать.
 * * content-type (string) - тип содержимого странцы. Поддерживается только "text/xml".
 * @param {"ScreenItem"} envType - Тип окружения.
 * @param {ScreenItem} baseObject - Базовый объект окружения
 * @param {unknown[]} [extraEnv] - Массив дополнительных объектов окружения, видимых по аналогии с конструкцией with.
 * Существует также старая нотация данной функции, когда вторым аргументом передается булево значение.
 * В этом случае второй аргумент содержит не опции запуска, а единственную опцию strictErrors.
 * @returns {string} Результат.
 */
declare function EvalCodePage(pageData: string, options: string, envType: "ScreenItem", baseObject: typeof ScreenItem, extraEnv?: unknown[]): string;

/**
 * Интерпретирует содержимое страницы по правилам ASP.
 * @param {string} pageUrl - Url, содержащий текст активной страницы.
 * @param {string} [options] - Опции.
 * @returns {string} Результат.
 * Значение strict-errors - завершать функцию с ошибкой, если таковая возникнет при обработке страницы.
 * По умолчанию, в случае возникновения ошибки ее текст добавляется к результату, а функция возвращается без ошибки.
 */
declare function EvalCodePageUrl(pageUrl: string, options?: string): string;

/**
 * Загружает код на JavaScript из заданного url и выполняет его.
 * @param {string} codeUrl - Url, содержащий код.
 * @param {string} subCode - Вспомогательный код, выполняемый после выполнения основного кода.
 * Необязательный аргумент. Как правило, содержит вызов функции, описанный в основном коде.
 * @returns {unknown}
 * EvalCodeUrl("rcr_lib_backup.js", "RunBackup()") Использование данной функции для вызова функций,
 * описанных в файле, не рекомендуется после появления функции {@link OpenCodeLib},
 * предлагающей более понятные правила области видимости переменных: `OpenCodeLib("rcr_lib_backup.js").RunBackup()`.
 */
declare function EvalCodeUrl(codeUrl: string, subCode: string): unknown;

/**
 * Выполняет код JScript аналогично функции {@link eval}, но внутри т.н. Критической секции,
 * что исключает одновременное выполнение кода из разных потоков.
 * Функция как правило используется для доступа к данным, не являющимся thread-safe,
 * например к глобальным XML-документам. Данной функцией следует пользоваться с осторожностью,
 * поскольку глобальная секция является общей для всего приложения.
 * Не следует выполнять внутри критической секции код, который может занять
 * продолжительное время (обращения к диску, сети и д.р.).
 * @param {string} codeString - Объект String, содержащий допустимый код JScript.
 * @returns {unknown} Результат.
 * @example EvalCs("global_agents.agent_completed = true");
 */
declare function EvalCs(codeString: string): unknown;

/**
 * Извлекает из объекта типа {@link Error} пользовательскую часть сообщения об ошибке.
 * Если объект не содержит пользовательской части, возвращается полное описание ошибки.
 * @param {Error | string} error - Ошибка.
 * @returns {string} Результат.
 * @example
 * ```
 * try {
 *   HttpRequest( .... );
 * } catch (error) {
 *   alert("Невозможно активировать программу: " + ExtractUserError(error));
 * }
 * ```
 */
declare function ExtractUserError(error: Error | string): string;

/**
 * Обозначает текущий статус выполнения фрагмент кода с упрощенной индикацией пользователю,
 * начатого путем вызова функции {@link StartModalTask}.
 * @param {string} msg - Строка статуса.
 * @returns {undefined}
 */
declare function ModalTaskMsg(msg: string): undefined;

/**
 * Выполняет код JS, который, возможно, завершится с ошибкой,
 * с возвратом заданного значения по умолчанию в случае ошибки.
 * @param {string} code - Код JScript.
 * @param {any} [defaultValue] - Значение, возвращаемое в случае ошибки
 * Если аргумент не указан, а код завершается с ошибкой, возвращается undefined.
 * @returns {T | undefined} Результат.
 * @example OptEval("doc.TopElem.xxx", "");
 */
declare function OptEval<T>(code: string, defaultValue?: T): T | undefined;

/**
 * Обозначает запуск длительного фрагмент кода с упрощенной индикацией пользователю.
 * Прогресс выполнения будет обозначаться путем периодического вызова функции {@link ModalTaskMsg}.
 * @param {string} taskTitle - Название задачи для пользователя.
 * @example
 * ```
 * ModalTaskMsg("Импорт данных");
 * for (i = 0; i < 3; i++) {
 *   ModalTaskMsg("Объект " + i);
 * }
 * FinishModalTask();
 * ```
 * В часто вызываемом коробочном коде данную функцию использовать не рекомендуется,
 * ввиду наличия более удобного для пользователя механизма методов с прогресс-индикаторами.
 * Функцию хорошо использовать в одноразовом или редко используемом коде ввиду его простоты.
 */
declare function StartModalTask(taskTitle: string): undefined;

/**
 * Проверяет, является ли заданный объект типа Error ошибкой отменой операции .
 * @param {any} e - Объект типа Error.
 * @returns {boolean} Результат.
 * @example
 * ```
 * try {
 *   HttpRequest( .... );
 * } catch(e) {
 *   if (!IsCancelError(e)) alert('Невозможно активировать программу: ' + ExtractUserError(e));
 * }
 * ```
 */
declare function IsCancelError<T>(e: T): boolean;

/**
 * Открывает документ либо с расширением XML, содержащий набор методов,
 * и возвращает его корневой элемент либо с расширением .JS,
 * содержащий функции, возвращает псевдо-документ (псевдо-форму),
 * содержащую те же функции. Действие этой функции похоже
 * на действие функции {@link EvalCodeUrl}, но не тождественны ей.
 * Если мы выполняем сторонние функции при помощи
 * {@link EvalCodeUrl}, то переменные из нашего кода видны внутри сторонних функций,
 * что может привести к разрушению кода при совпадении названий переменных.
 * {@link OpenCodeLib} Лишен этого недостатка, т.к. Приводит к загрузке функций
 * из внешнего источника как независимых методов, каждый из которых
 * выполняется в собственном окружении. Но в этом случае, в отличие от
 * {@link EvalCodeUrl}, загружаемый js-файл не может содержать глобальных
 * переменных, а только функции.
 * @param {string} url - Url загружаемого документа с расширением XML или JS.
 * @returns {XmlElem<unknown>} XmlDocument.
 */
declare function OpenCodeLib<T = XmlElem<unknown>>(url: string): T;

//#endregion

//#region Функции Web-сервера

/**
 * Сбрасывает авторизованную веб-сессию по логину.
 * Работает только на сервере приложения.
 * Обычно вызывается в случае смены пароля пользователя или блокировки пользователю доступа в систему.
 * @param {string} login - Логин пользователя.
 * @returns {unknown} -
 */
declare function DropWebSessionByLogin(login: string): unknown;

/**
 * Регистрирует обработчик HTTP-запросов на заданный url path.
 * Обработчик принимает единственный параметр - объект типа {@link Request}.
 * @param {string} urlPath - Абсолютный url path.
 * @param {XmlDocument} lib - Библиотека.
 * @param {string} methodName - Имя метода.
 * @example RegisterWebUrlHandler("/google_auth/oauth_redirect", oauth_lib, "ProcessWebOauthRedirect");
 * @returns {unknown} -
 */
declare function RegisterWebUrlHandler(urlPath: string, lib: XmlDocument, methodName: string): unknown;

//#endregion

//#region Управление сервером приложения

/**
 * Определяет статус зарегистрированного сервера приложения (службы Windows).
 * Значения статуса:
 * * 0 - сервер выключен
 * * 1 - сервер включен
 * * 2 - сервер начинает работу
 * * 3 - сервер завершает работу
 * @param {string} serverId - Идентификатор сервера.
 * @example DaemonGetState("EStaff_Server");
 * @returns {number} Результат.
 */
declare function DaemonGetState(serverId: string): number;

/**
 * Возвращает значение параметра, обозначающее текущй статус задачи, выполняемой при старте сервера,
 * например перестройки фалов каталога или конвертации данных из предыдущей версии программы.
 * @param {string} serverId - Идентификатор сервера.
 * @param {"CurTask" | "CurMsg"} paramName - Имя параметра.
 * Поддерживаемые значения: "CurTask" и "CurMsg", определяемые вызовами функций {@link StartModalTask} и {@link ModalTaskMsg} на сервере.
 * @example DaemonGetStateParam("EStaff_Server", "CurTask");
 * @returns {string} Результат.
 */
declare function DaemonGetStateParam(serverId: string, paramName: "CurTask" | "CurMsg"): string;

/**
 * Включает установленный сервер.
 * @param {string} id - Идентификатор сервера.
 */
declare function DaemonStart(id: string): undefined;

/**
 * Выключает установленный сервер.
 * @param {string} id - Идентификатор сервера.
 */
declare function DaemonStop(id: string): undefined;

/**
 * Регистрирует серверную службу (только Windows).
 * @param {string} daemonID - ID службы.
 * @param {string} daemonName - Имя службы.
 * @param {string} filePath - Путь к файлу xHttp_x64.exe.
 * @param {string} [cmdArgsStr] - Аргументы командной строки. По умолчанию "/s".
 * @param {boolean} [autoRestart=true] - Включить автоматический перезапуск службы в случае падение серверного процесса.
 * @returns {unknown} -
 */
declare function RegisterDaemon(daemonID: string, daemonName: string, filePath: string, cmdArgsStr?: string, autoRestart?: boolean): unknown;

/**
 * Удаляет зарегистрированную службу (только Windows).
 * @param {string} daemonID - ID службы.
 * @returns {unknown} -
 */
declare function UnregisterDaemon(daemonID: string): unknown;

//#endregion

//#region Системные функции

/**
 * Возвращает идентификатор (строка вида "en-US", "ru-RU" и т.п.) языка интерфейса,
 * установленного в операционной системе для текущего пользователя.
 * Функция доступна только в десктопном приложении.
 * @returns {string} Результат.
 */
declare function GetSysUserDefaultUiLanguage(): string;

//#endregion

//#region Прочие функции

/**
 * Выдает сообщение, содержащее значение параметра.
 * На сервере сообщение записывается в журнал 'xhttp',
 * на рабочем месте - в виде всплывающего окна {@link MsgBox}.
 * @param {T} val - Значение.
 * @returns {T} Значение.
 * @example LoadUrlData(alert(url));
 */
declare function alert<T>(val: T): T;

/**
 * Возвращает путь к базовой директории хранения данных приложения (серверной или клиентской части).
 * По умолчанию совпадает с установочной директорией, если иное не задано в app_config.xml.
 * @returns {string} - Путь к базовой директории хранения данных приложения (серверной или клиентской части)
 */
declare function AppDataDirectoryPath(): string;

/**
 * Выдает true, если модуль, наименование которого указано в качестве аргумента,
 * используется программой, и false, если указанный модуль программой не используется.
 * Наименования стандартных модулей считывается из файла описания структуры приложения,
 * наименование подключаемого модуля считывается из файла первичных настроек
 * при запуске исполнимого файла. Функция используется, например, в ядре программы,
 * если необходимо по-разному его настраивать для работы с различными подключаемыми модулями.
 * @param {string} moduleName - Наименование модуля.
 * @example AppModuleUsed("module_datex");
 * @returns {boolean} Результат.
 */
declare function AppModuleUsed(moduleName: string): boolean;

/**
 * Вызывает исключение специального типа, аналогичное нажатию кнопки "Cancel" пользователями.
 * Позволяет генерировать исключение, на которое не будет выдаваться сообщение об ошибке.
 */
declare function Cancel(): never;

/**
 * Проверяет не должен ли текущий поток завершиться (обычно после прерывания его пользователем).
 * Если да, вызывает исключение аналогично функции {@link Cancel}.
 * @returns {undefined} Если поток вызывает в цикле функцию {@link Sleep},
 * либо любую функцию, вызывающее сетевой запрос, то вызывать функцию
 * {@link CheckCurThread} нет необходимости, поскольку вышеназванные функции
 * сами проверяют запрос на отмену выполнения потока.
 */
declare function CheckCurThread(): undefined;

/**
 * Проверяет строку на соответствие контрольной сумме, вычисленной по алгоритму PamMd5.
 * @param {string} str - Проверяемая строка.
 * @param {string} arg - Контрольная сумма.
 * @returns {boolean} Результат.
 * @example CheckPamMd5(str, arg)
 */
declare function CheckPamMd5(str: string, arg: string): boolean;

/**
 * Возвращает true, если пользователем в буфер `Clipboard` скопировано нечто заданного формата.
 * Возвращает false, если нет (буфер пуст или его содержимое не того формата).
 * Обычно формат `text/plain` или `text/html`.
 * @param {string} format - Наименование формата.
 * @returns {boolean} Результат.
 */
declare function ClipboardFormatAvailable(format: string): boolean;

/**
 * Увеличивает яркость цвета, переданного в качестве аргумента.
 * @param {string} color - Цвет в формате RGB.
 * @param {number} ratio - Действительное число обозначающее на сколько увеличивается/уменьшается яркость.
 * @returns {string} Результат.
 */
declare function ColorNewBrightness(color: string, ratio: number): string;

/**
 * Вычисляет контрольную сумму по алгоритму CRC.
 * @param {string} arg - Строка, содержащая массив байт.
 * @returns {number} Контрольная сумма.
 */
declare function CRC(arg: string): number;

/**
 * Модификация функции {@link alert}, предназначенная для целей отладки.
 * В отличие от последней, {@link DebugMsg} может быть оставлена в релизном коде.
 * Если в SpXml.ini указан параметр SHOW-DEBUG-MSG, функция работает аналогично {@link alert}.
 * В остальных случаях она осуществляет запись значения в журнал по умолчанию.
 * @param {T} value - Произвольное значение.
 * @returns {T} Возвращает переданное значение.
 */
declare function DebugMsg<T>(value:T ): T;

/**
 * Включает/выключает заданный журнал.
 * @param {string} name - Название журнала.
 * @param {boolean} [enable=true] - Включить/выключить.
 * @example EnableLog("xquery", true);
 */
declare function EnableLog(name: string, enable?: boolean): undefined;

/**
 * Включает заданный журнал.
 * В отличие от функции {@link EnableLog} позволяет задать дополнительные опции ведения журнала.
 * Возможные опции: life-time - период, на который заводится новый файла журнала ("day", "month", "permanent").
 * По умолчанию свой файл журнала заводится на каждую дату ("day") `base-dir` - директория,
 * в которой будут заводиться журнал.
 * По умолчанию используется директория `Logs` в установочной директории `use-std-event-prefix` - включать в начало
 * каждой строки журнала стандартный префикс (дата, время, Id потока) `boolean`.
 * По умолчанию `true`.
 * `header-str` - строка заголовка, добавляемая в начало каждого нового файла журнала.
 * По умолчанию строка заголовка не добавляется.
 * @param {string} name - Название журнала.
 * @param {string} [options] - Набор опций вида 'param1=value1;param2=value2;...'.
 * @returns {undefined}
 * @example EnableLogExt("web-request", "header-str=date\turl\tquery;use-std-event-prefix=0");
 */
declare function EnableLogExt(name: string, options?: string): undefined;

type EncodeJsonOptions = {
  /** форматирование с отступами и переводами строк. */
  PrettyFormat: boolean;
  /** Экспортировать целые числа, значение которых больше 0x7FFFFFFF, в виде строковой константы в кавычках. */
  ExportLargeIntegersAsStrings: boolean;
};

/**
 * Преобразует базовый объект, массив либо скалярное значение в строку в формате JSON.
 * Функция работает аналогично функции JSON.stringify() в JavaScript,
 * однако второй аргумент представляет из себя набор опций.
 * @param {T} value - Значение.
 * @param {EncodeJsonOptions} [options] - Базовый объект, содержащий набор опций.
 * @returns {string} Сериализованный объект.
 */
declare function EncodeJson<T>(value: T, options?: EncodeJsonOptions): string;

/**
 * Выполняет заданный код в основном потоке на следующее системное событие.
 * Обычно, если код выполняется в отдельном потоке, из него нельзя обращаться к пользовательскому интерфейсу.
 * Если же нужно сделать, например, обновление экрана, то этот код нужно вызывать через {@link EvalAsync}.
 * Функция помещает этот код в очередь, и на следующем системном событии он выполняется.
 * Смотрите также {@link EvalSync}.
 * @param {string} code - Код, который необходимо выполнить.
 * @param {T} args - И последующие аргументы - передаются выполняемому коду. Необязательные аргументы.
 */
declare function EvalAsync<T>(code: string, args: T): void;

/**
 * Выполняет заданный код в основном потоке на следующее системное событие.
 * Функция помещает этот код в очередь, и на следующем системном событии он выполняется.
 * Эта функция блокирует поток, и дожидается окончания выполнения вызванного кода.
 * Смотрите также {@link EvalAsync}.
 * @param {string} code - Код, который необходимо выполнить.
 * @param {T} args - Последующие аргументы - передаются выполняемому коду.
 */
declare function EvalSync<T>(code: string, args: T): void;

/**
 * Сигнализирует о завершении длительного процесса с упрощенным индикатором,
 * начатым при помощи функции {@link StartModalTask}.
 */
declare function FinishModalTask(): undefined;

/**
 * Вычисялет контрольную сумму  по алгоритму FNV1a. Возвращает целое число (64 бита).
 * @param {string} data - Строка (интерпретируется как массив байт)
 * @returns {number} Результат.
 */
declare function FNV1a64(data: string): number;

/**
 * Возвращает данные заданого формата из буфера (Clipboard).
 * @param {string} [format] - Формат, в котором должны быть данные.
 * @returns {string} Результат.
 */
declare function GetClipboard(format?: string): string;


/**
 * Извлекает кодировку, явно указанную в HTML-строке в теге <meta>.
 * Если кодировка не указана, возвращает пустую строку.
 * @param {string} htmlStr - HTML строка.
 * @returns {string} Кодировка или пустая строка.
 */
declare function GetHtmlCharset(htmlStr: string): string;

/**
 * Возвращает значение системной переменной окружения.
 * @param {string} name - Имя переменной.
 * @returns {string} Значение.
 * GetSysEnvironmentVariable( 'windir' );.
 */
declare function GetSysEnvironmentVariable(name: string): string;

/**
 * Возвращает имя пользователя операционной системы под которым выполняется текущий процесс.
 * @returns {string} Результат.
 */
declare function GetSysUserName(): string;

/**
 * Выполняет HTTP-запрос.
 * @param {string} url - Url.
 * @param {string} [method="get"] - Метод `get` или `post`.
 * @param {string} [body] - Тело запроса.
 * @param {string} [headers] - Список дополнительных полей заголовка http-запроса
 * в соответствующем формате (имя:значение перевод строки).
 * Необязательный аргумент. Список также может содержать дополнительные опции.
 * Среди списка дополнительных полей заголовка возможно использование следующих опций,
 * которые обрабатываются отдельно и не попадают в передаваемый заголовок:
 * Ignore-Errors - Игнорировать наличие кода ошибки HTTP в ответе.
 * Если указана эта опция, код ошибки можно получить через атрибут RespCode возвращаемого объекта.
 * По умолчанию функция завершается с ошибкой в случае получения кода ошибки по HTTP.
 * Auto-Redirect - Автоматически следовать редиректам HTTP 303, HTTP 304. По умолчанию true.
 * @returns {HttpResponse} Объект ответа.
 * @example
 * ```
 * HttpRequest("http://reg.datex-soft.com/")
 * HttpRequest("http://reg.datex-soft.com/login.htm", "post", UrlEncodeQuery({ login: "xxx", password: "xxx" }))
 * HttpRequest(
 *   "http://reg.datex-soft.com/login.htm",
 *   "post",
 *   "<xxx>111</xxx>",
 *   "Content-type: text/xml\nIgnore-Errors: 1\n"
 * )
 * ```
 */
declare function HttpRequest(url: string, method?: string, body?: string, headers?: string): HttpResponse;

/**
 * Редко используемая функция.
 * @returns {unknown} unknown
 */
declare function InitAppConsole(): unknown;

/**
 * -
 * @param {number} num - Целое число
 * @param {string} optionsStr - Строка, содержащая три варианта фразы, разделенных символом "|"
 * @example yearsNum + ' ' + IntModSelector(yearsNum, "лет|год|года")
 * @returns {unknown} unknown
 */
declare function IntModSelector(num: number, optionsStr: string): unknown;

/**
 * Возвращает тип склонения существительного в русском языке для заданного числа.
 * @param {number} num - Число.
 * @returns {number} Возвращает тип склонения существительного в русском языке (0,1,2) для заданного числа:
 * 0 - "штук";
 * 1 - "штука";
 * 2 - "штуки".
 */
declare function IntModType(num: number): number;

/**
 * Проверяет, не нажата ли какая-либо клавиша в данный момент.
 * Обычно проверятся Ctrl или Shift.
 * @param {number} arg1 - Код клавиши.
 * @returns {boolean} Результат.
 */
declare function IsKeyPressed(arg1: number): boolean;

/**
 * Делает запись в файл лога определенного типа.
 * @param {string} type - Тип лога.
 * @param {string} text - Текст.
 * @example
 * ```
 * LogEvent(type, text).
 * ```
 */
declare function LogEvent(type: string, text: string): undefined;

/**
 * Конструктор объекта MailMessage, предназначенной для хранения E-mail - сообщения.
 * Объект строится по форме x-app://app/sx_mail_message.xmd и является обычным объектом типа XmlElem.
 * @returns {MailMessage} Результат.
 */
declare function MailMessage(): MailMessage;

/**
 * Создает объект типа MailMessage на основании почтового сообщения в формате MIME.
 * @param {string} mimeData - Почтовое сообщение в формате MIME.
 * @returns {MailMessage} Результат.
 */
declare function MailMessageFromMimeStr(mimeData: string): MailMessage;

/**
 * Максимальное значение из нескольких аргументов.
 * @param {number} number - Число 1.
 * @param {number[]} numbers - Числа.
 * @returns {number} Возвращает максимальное значение из нескольких аргументов.
 */
declare function Max(number: number, ...numbers: number[]): number;

/**
 * Вычисляет контрольную сумму по алгоритму Md5 и возвращает результат в бинарном формате (массив байт).
 * @param {string} data - Строка, содержащая массив байт.
 * @returns {string} Контрольная сумма.
 */
declare function Md5(data: string): string;

/**
 * Вычисляет контрольную сумму по алгоритму Md5 и возвращает результат в виде HEX-строки.
 * @param {string} data - Строка, содержащая массив байт.
 * @returns {string} Результат.
 */
declare function Md5Hex(data: string): string;

/**
 * Возвращает минимальное значение из нескольких аргументов.
 * @param {number} number - Число.
 * @param {number[]} numbers - Числа.
 * @returns {number} Результат.
 * @example
 * ```
 * Min(2, 5, 10, 15) === 2;
 * ```
 */
declare function Min(number: number, ...numbers: number[]): number;

/**
 * Смешивает два цвета в заданной пропорции.
 * @param {string} color1 - Цвет в формате RGB.
 * @param {string} color2 - Цвет в формате RGB.
 * @param {number} [arg] - Пропорции. В случае его отсутствия цвета будут смешаны в пропорции 1 к 1.
 * @returns {string} Результат.
 */
declare function MixColors(color1: string, color2: string, arg?: number): string;

/**
 * Вычисляет контрольную сумму по алгоритму PamMd5.
 * @param {string} arg - Строка, содержащая массив байт.
 * @returns {string} Результат.
 */
declare function PamMd5(arg: string): string;

type ParseJsonOptions = {
  StrictMode: boolean;
};

/**
 * Преобразует строку, содержащую JSON, в базовый объект, массив либо скалярное значение.
 * Функция работает аналогично функции JSON.parse() в JavaScript,
 * однако второй аргумент представляет из себя набор опций.
 * Также ParseJson() менее требовательна к формату,
 * и по умолчанию обрабатывает строки не только в формате JSON,
 * но и JavaScript literal, разрешая в том числе любые типы кавычек,
 * а также значения undefined.
 * @param {string} value - Строка.
 * @param {ParseJsonOptions} [options] - Опции.
 * @returns {T} JSON объект.
 */
declare function ParseJson<T>(value: string, options?: ParseJsonOptions): T;

/**
 * Вычисляет хэш заданной строки (обычно пароля) по встроенному алгоритму по умолчанию.
 * @param {string} str - Строка.
 * Смотрите также {@link PasswordVerify}.
 * @returns {unknown} -
 */
declare function PasswordHash(str: string): unknown;

/**
 * Проверяет соответствие заданной стоки (обычно пароля) и ее хэша.
 * @param {string} str - строка.
 * @param {string} hash - hash.
 * Смотрите также {@link PasswordHash}.
 * @returns {boolean} - Результат.
 */
declare function PasswordVerify(str: string, hash: string): boolean;

/**
 * Возвращает Полное имя человека в виде "Фамилия И.О.".
 * @param {string} lastname - Фамилия.
 * @param {string} firstname - Имя.
 * @param {string} [middlename] - Отчество.
 * @returns {string} Результат.
 */
declare function PersonShortName(lastname: string, firstname: string, middlename?: string): string;

/**
 * Функция PlaySound() проигрывает один из стандартных системных звуков.
 * Функция доступна только в десктопном клиенте.
 * @param {string} soundName - Наименование одного из стандартных звуков.
 * Примеры значений: "MailBeep", "SystemAsterisk", ""SystemExclamation".
 * @returns {unknown} -
 */
declare function PlaySound(soundName: string): unknown;

/**
 * Вызывает выполнение процесса.
 * `work-dir` - рабочая директория для процесса
 * `sys` - системный процесс `boolean`, в этом случае в качестве первого аргумента
 * функции можно указывать не путь до исполняемого файла,
 * а имя системного процесса `wait` - дожидаться завершения процесса `boolean`.
 * Если указана опция `wait=1`, функция вернет код завершения процесса (`0` - успешное завершение, иначе - ошибка).
 * В остальных случаях функция ничего не возвращает.
 * `hidden` - запуск без пользовательского интерфейса `boolean`
 * (рекомендуется включать, если функция вызывается с сервера).
 * @param {string} path - Путь к исполняемому файлу, или имя исполняемого файла.
 * @param {string} [cmdLine] - Аргументы командной строки.
 * @param {string} [options] - Набор опций через ";", в виде "имя опции=значение; ...".
 * @returns {number} Результат.
 * @example
 * ```
 * ProcessExecute(
 *   "C:\Temp\pkzipc.exe",
 *   " -add -rec -path=current xxx.zip 1.htm 2.htm",
 *   "wait=1;hidden=1;work-dir=C:\Temp"
 * );
 * ```
 */
declare function ProcessExecute(path: string, cmdLine?: string, options?: string): number;

/**
 * Вызывает завершение текущего приложения.
 * Редко используемая функция.
 * Используется в конвертерах, программах обновления.
 */
declare function QuitApp(): never;

/**
 * Возвращает случайное целое число в заданном диапазоне.
 * @param {number} minVal - Нижняя граница диапазона.
 * @param {number} maxVal - Верхняя граница диапазона.
 * @returns {number} Результат.
 */
declare function Random(minVal: number, maxVal: number): number;

/**
 * Регистрирует url файла в схеме (дистрибутиве) приложения, который будет заранее загружаться при запуске веб-интерфейса.
 * Такой файл будет загружен единым сжатым пакетом, что более эффективно по сравнению с загрузкой каждого файла по отдельности.
 * Функция обычно вызывается при старте сервера приложения.
 * @param {string} url - Url файла.
 * @returns {unknown} -
 */
declare function RegisterPreloadedDesignUrl(url: string): unknown;

/**
 * Вызывает отправку почтового сообщения через тот способ, который был выбран в настройках, как правило - Simple MAPI.
 * В качестве параметра передается объект, созданный функцией {@link MailMessage}.
 * @param {ReturnType<typeof MailMessage>} arg1 - Объект, созданный при помощи функции
 * {@link MailMessage} (Object SpXml).
 */
declare function SendMailMessage(arg1: ReturnType<typeof MailMessage>): void;

/**
 * Вызывает копирование указанной информации в буфер (Clipboard).
 * @param {string} value - Информация, которую необходимо скорировать в буфер.
 * @example SetClipboard("0x" + StrHexInt(objectID));
 * @returns {unknown} -
 */
declare function SetClipboard(value: string): unknown;

/**
 * Устанавливает описание текущей активности текущего потока.
 * Описание используется исключительно в отладочных целях (например показывается через страницу xhttp_info)
 * и не влияет на работу программы.
 * @param {string} desc - Строка с описанием.
 * Смотрите также {@link SetCurThreadDesc}.
 * @returns {unknown} -
 */
declare function SetCurThreadActivityName(desc: string): unknown;

/**
 * Устанавливает описание текущего потока.
 * Описание используется исключительно в отладочных целях (например показывается через страницу xhttp_info)
 * и не влияет на работу программы.
 * @param {string} desc - Строка с описанием.
 * @returns {unknown} -
 */
declare function SetCurThreadDesc(desc: string): unknown;

/**
 * Вычисляет hash функцию по алгоритму SHA1.
 * @param {string} str - Строка, содержащая массив байт.
 * @returns {string} Результат.
 */
declare function SHA1(str: string): string;

/**
 * Вычисляет hash функцию по алгоритму SHA1 и возвращает строку, закодированную в Base64.
 * @param {string} str - Строка, содержащая массив байт.
 * @returns {string} Результат.
 */
declare function SHA1Base64(str: string): string;

/**
 * Вычисляет контрольную сумму (64 бита) по алгоритму SHA256.
 * Возвращает бинарную строку длиной 32 байта.
 * @param {string} value - Строка (интерпретируется как массив байт).
 * @returns {string} Бинарная строка.
 */
declare function SHA256(value: string): string;

/**
 * Вычисляет контрольную сумму (64 бита) по алгоритму SHA256.
 * @param {string} value - Строка (интерпретируется как массив байт).
 * @returns {string} Возвращает hex-строку длиной 64 байта.
 */
declare function SHA256Hex(value: string): string;

/**
 * Вызывает действие для Windows Shell.
 * @param {string} action - Вызываемое действие (как правило, "open" или "print").
 * @param {string} target - Путь к вызываемому файлу, или url.
 * @param {string?} [args] - Аргументы для вызываемой программы (если url определяет исполняемый файл).
 * @returns {undefined}
 * @example
 * ```
 * ShellExecute("open", "calc.exe");
 * ShellExecute("print", "C:\\Temp\\xxx.doc");
 * ShellExecute("open", "http://www.e-staff.ru/");
 * ShellExecute("open", "mailto:support@e-staff.ru");
 * ```
 */
declare function ShellExecute(action: string, target: string, args?: string): undefined;

/**
 * Создает временную задержку, не загружая процессор.
 * @param {number} ticks - Величина задержки в миллисекундах.
 * @returns {undefined}
 */
declare function Sleep(ticks: number): undefined;

/**
 * Записывает текст в сроку состояния в главном окне программы.
 * Обычно используется для показа количества найденных объектов в списке.
 * @param {string} msg - Строка.
 * @example StatusMsg("Записей в списке: " + n);
 * @returns {undefined}
 */
declare function StatusMsg(msg: string): undefined;

/**
 * Создает объект типа Error, содержащий словесное описание ошибки, предназначенное для восприятия обычным пользователем.
 * Такая ошибка в пользовательском интерфейсе будет показана без какой-либо отладочной информации.
 * @param {string} desc - Текст ошибки
 * @example throw UiError("Permission denied");
 * @returns {unknown} -
 */
declare function UiError(desc: string): unknown;

/**
 * Возвращает уникальный Id.
 * @returns {number} Id.
 */
declare function UniqueID(): number;

/**
 * Генерирует уникальную строку заданной длины для использования в качестве идентификаторов, ключей и пр.
 * @param {number} [len=64] - Трубуемая длина строки.
 * @returns {string} Результат.
 */
declare function UniqueStrID(len?: number): string;

/**
 * Создает объект типа {@link Error}, содержащий словесное описание ошибки, пригодное для восприятия обычным пользователем.
 * Такая ошибка в пользовательском интерфейсе будет показана с изначально скрытой отладочной информацией,
 * но которую можно будет раскрыть. Если такая ошибка будет возвращена обработчиком веб-сервиса,
 * то в ответ запишется только словесное описание, без отладочной информации.
 * @param {string} desc - Текст ошибки
 * @param {string} [innerError] - Исходная ошибка, вызвавшая данную ошибку.
 */
declare function UserError(desc: string, innerError?: string): never;

/**
 * Создает zip архив.
 * @param {string} archivePath - Путь (или url) к создаваемому архиву.
 * @param {Array} filesArray - Массив, содержащий список файлов или папок, которые нужно заархивировать (Array).
 * @param {any} [options] - Объект с параметрами (Object).
 * @returns {undefined}
 * @example ZipCreate("C:\\Temp\1.zip", ["app", "base", "SpXml.exe"], { BaseDir: "C:\\Program Files\\EStaff" });
 */
declare function ZipCreate(archivePath: string, filesArray: string[], options: Object): undefined;

/**
 * Распаковывает архив.
 * @param {string} archivePath - Путь до архива.
 * @param {string} destPath - Путь до папки, в которую нужно распаковать.
 * @returns {undefined}
 */
declare function ZipExtract(archivePath: string, destPath: string): undefined;

//#endregion

//#region Эксперементальные и узкоспециализированные функции

/**
 * Экспериментальная функция.
 * @returns {unknown} -
 */
declare function CreateDocWebScreen(): unknown;

/**
 * Очишает кэш от загруженного зашифрованного модуля.
 * @param {string} url - Url модуля.
 * @returns {unknown} -
 */
declare function DropDbPackage(url: string): unknown;

/**
 * Экспериментальная функция.
 * @returns {unknown} -
 */
declare function EvalRichCodePageUrl(): unknown;

/**
 * Динамически подключает к программе дополнительный модуль.
 * Если модуль уже подключен, функция не производит никаких действий.
 * Редко используемая функция.
 * @param {string} moduleName - Наименование модуля.
 * @example FetchAppModule("app2");
 */
declare function FetchAppModule(moduleName: string): undefined;

/**
 * Редко используемая фукнция.
 * @returns {unknown} -
 */
declare function GetScreenFormTitle(): unknown;

/**
 * Узкоспециализированная функция.
 * @returns {boolean} - Возращает true, если вызов происходит в главном (UI) потоке в SpXml.exe.
 */
declare function IsMainThread(): boolean;

/**
 * Экспериментальная функция.
 * @returns {unknown} -
 */
declare function LdsGetModDeletedObjects(): unknown;

/**
 * Экспериментальная функция.
 * @returns {unknown} -
 */
declare function LdsGetModObjects(): unknown;

/**
 * Загружает приложение по имени корневого модуля, не открывая его главную страницу.
 * Функция используется в редких случаях, например для выбора запускаемого приложения при старте.
 * @param {string} mainModuleName - Имя корневого модуля.
 * @example LoadAppSpec("rcr");
 */
declare function LoadAppSpec(mainModuleName: string): undefined;

/**
 * Выдает наименование модуля, в котором находится файл, по заданному url со схемой x-app.
 * @param {string} url - Url.
 * @returns {string} Результат.
 */
declare function ModuleNameFromUrl(url: string): string;

/**
 * Возвращает обработанное условное наименование юридического лица, предназначенное для показа пользователю..
 * @param {string} orgName - Полное наименование юридического лица.
 * @param {string} [orgShortName] - Cокращенное наименование юридического лица.
 * @returns {string} - Результат.
 */
declare function OrgDispName(orgName: string, orgShortName?: string): string;

/**
 * Разбирает поле типа OLE объект, хранящееся в MS Access.
 * @param {string} str - Строка, содержащая поле.
 * @example
 * ```
 * // объект типа JS содержит следующие поля:
 * // Class FileName - имя файла
 * // Data - содержимое файла
 * ParseStoredOleObject(str);
 * ```
 * @returns {{[K: string]: unknown}} - Результат.
 */
declare function ParseStoredOleObject(str: string): {[K: string]: unknown};

/**
 * .
 */
declare function PersonGender(): undefined;

/**
 * Добавляет объект, содержащий набор методов или свойств, в список глобальных объектов окружения.
 * После вызова данной функции все свойства и метода объекта становятся доступны всему приложению
 * в качестве глобальных переменных и функций.
 * При совпадении имен свойств или методов с существующими приоритет будет за именами,
 * находящимися в объекте, добавленном последним.
 * Экспериментальная функция.
 * @param {{[K: string]: unknown}} obj - Объект.
 * @returns {unknown} -
 */
declare function RegisterGlobalEnvObject(obj: {[K: string]: unknown}): unknown;

/**
 * Экспериментальная функция.
 * @returns {unknown} -
 */
declare function ReportToHtml(): unknown;

/**
 * Экспериментальная функция.
 * @returns {unknown} -
 */
declare function ReportToRtf(): unknown;

/**
 * Включает режим приложения без показа сообщений через UI.
 * Доступна только в SpXml.exe.
 * Обычно используется для написания инсталляторов.
 * @returns {unknown} -
 */
declare function SetAppSilentMode(): unknown;

/**
 * Функция вызывает падение приложения.
 * Используется для тестирования целостности данных к падению сервера.
 */
declare function SimulateCrash(): never;

/**
 * Узкоспециализированная функция.
 * Работает аналогично {@link Sleep}, но с продолжением обработки очереди сообщений в главном потоке в SpXml.exe.
 * Будучи вызванной не в главном потоке либо не в SpXml.exe, работает в точности как {@link Sleep}.
 * @param {number} timeout - Таймаут в миллисекундах
 * @returns {unknown} -
 */
declare function UiSleep(timeout: number): unknown;

/**
 * Экспериментальная функция.
 * Приводит список телефонов к стандартному виду.
 * @param {string} str - Строка с номером телефона
 * @returns {string} - Результат.
 */
declare function UnifyPhones(str: string): string;

/**
 * Экспериментальная функция.
 * Очищает кэш от запроса {@link XQuery}.
 * При отсутствии аргумента очищает кэш от всех запросов {@link XQuery}.
 * Если функция вызывается с параметром (url документа), то из кеша будут удалены запросы, связанные с этим документом.
 * @param {string} [url] - Url документа
 * @returns {unknown} -
 */
declare function DropXQueryCache(url?: string): unknown;

//#endregion

//#region Устаревшие функции

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function SingleElemArray(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function AddCatalogEntry(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function AddOutlookEvent(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function AdjustHtml(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * Заменена на глобальную переменную {@link AppSn}.
 * @returns {unknown} -
 */
declare function AppSerialNumber(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function BuildCompoundHtml(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function BuildFullReport(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function BuildWebHtml(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function ChangeAppSn(): unknown;

/**
 * Устаревшее название функции {@link ParseJson}.
 * @deprecated
 * @returns {unknown} -
 */
declare function DecodeJson(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * Использовалась в старой объектной модели.
 * @returns {unknown} -
 */
declare function DeleteCatalogEntries(): unknown;

/**
 * Извлекает id из заданного url объектного документа типа x-local.
 * Используется только в старой объектной модели.
 * @deprecated
 * @param {string} url - Url документа.
 * @example DocIDFromUrl("x-app://data/objects/0x4DF75B9F13FE51/60.xml"); // Вернет 0x4DF75B9F13FE5160
 * @returns {number} - Результат.
 */
declare function DocIDFromUrl(url: string): number;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function EvalExtCodeLiteral(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function ExcelCodePageExecute(): unknown;

/**
 * Ищет каталог по имени во всех используемых базах данных.
 * Если не находит - выдает ошибку.
 * Функция по историческим причинам называется не совсем корректно.
 * Ее ближайший эквивалент - {@link FindOptCatalog} имеет правильное название.
 * @deprecated
 * @param {string} name - Наименование каталога базы данных.
 * @returns {object} Результат.
 * @example
 * ```
 * const catalog = FindSharedCatalog("events");
 * ```
 */
declare function FindSharedCatalog(name: string): Object;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function FontDescription(): unknown;

/**
 * Устаревшая функция.
 * Возвращает true на клиентской части приложения, если текущий пользователь зашел под техническим администратором.
 * Рекомендуется использовать LdsCurAuthObjectUrl != ''
 * @returns {boolean} - Результат.
 */
declare function IsLdsAdmin(): boolean;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function LoadUrlPlainText(): unknown;

/**
 * Загружает содержимое файла MS Word и возвращает его содержимое в виде HTML.
 * Устаревшая функция, не рекомендуется к использованию, с момента появления поддержки OLE.
 * @deprecated
 * @param {string} url - Url файла MS Word.
 * @returns {string} - Результат.
 */
declare function LoadWordHtml(url: string): string;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function PutWordHtml(): unknown;

/**
 * Устаревшая функция, используемая во времена, когда запросы XQuery по множественным ключевым значения выполнялись неэффективно.
 * В настоящий момент конструкция вида QueryCatalogByKeys("persons", "id", [12359841651, 8498132581, 68496313181]);
 * просто транслируется в XQuery("for $elem in persons where MatchSome($elem/id, (12359841651, 8498132581, 68496313181)) return $elem");
 * @deprecated
 * @param {string} catalogName - Название каталога.
 * @param {string} keyName - Название поля, по которому строится запрос.
 * @param {unknown[]} keyValues - Массив значений.
 * @returns {unknown[]} - Массив записей.
 */
declare function QueryCatalogByKeys<T>(catalogName: string, keyName: string, keyValues: string | unknown[]): T[];

/**
 * Вызывает принудительную перестройку каталога основных объектных файлов.
 * Устаревшая и редко используемая функция.
 * Современный способ принудительной перестройки каталога основных объектных файлов - удаление каталога 'secondary' при условии,
 * что программа (сервер или локальная) остановлена.
 * @deprecated
 * @returns {unknown} -
 */
declare function RebuildAllCatalogs(): unknown;

/**
 * Регистрирует новый каталог в базе данных.
 * Устаревшая функция, в новой объектной моделе базы данных не используется,
 * т.к. в новой объектной моделе каталог и форма жестко связаны.
 * @deprecated
 * @param {string} catalogUrl - Url каталога.
 * @param {string} formUrl - Url формы.
 */
declare function RegisterCatalog(catalogUrl: string, formUrl: string): undefined;

/**
 * Извлекает корневой элемент из url формы каталога базы данных, и создает и регистрирует аналогичную форму для объекта.
 * Устаревшая функция, не используемая в новой объектной модели.
 * @deprecated
 * @param {string} formUrl - Url формы каталога.
 * @returns {string} - Url формы объекта.
 */
declare function RegisterCatalogSubForm(formUrl: string): string;

/**
 * Используется для синхронизации (репликации) одной базы данных в другую, например автономного рабочего места и сервера, или двух серверов.
 * Устаревшая функция, в новой объектной модели не используется,
 * т.к. функция синхронизации (реплкации) в новой объектной модели реализована на javascript.
 * @deprecated
 * @returns {unknown} -
 */
declare function ReplicateDb(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function ReportCodePageExecute(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function RichCodePageExecute(): unknown;

/**
 * Устаревшая функция.
 * Выполняет заданный код на сервере, и возвращает результат.
 * Результат может быть только в виде строки.
 * Если эта функция вызывается на однопользовательской локальной версии программы, она полностью аналогична функции {@link eval}.
 * @deprecated
 * @param {string} code - Код, который будет выполняться на сервере.
 * @returns {string | undefined} - Результат.
 */
declare function ServerEval(code: string): string | undefined;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function SetDefaultPrintAlign(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function SetDefaultPrintFont(): unknown;

/**
 * Устанавливает авторизацию, используемую клиентом по умолчанию.
 * Можно использовать только на spxml т.к. он не делает одновременных запросов по разным адресам
 * Устаревшая функция. Рекомендуется передавать данные авторизации через опции в {@link HttpRequest}.
 * @deprecated
 * @param {string} login - Логин.
 * @param {string} password - Пароль.
 */
declare function SetHttpDefaultAuth(login: string, password: string): undefined;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function SetMultipageLayout(): unknown;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function StorageDateStr(): unknown;

/**
 * Предназначена для принудительной записи в каталоги.
 * Устаревшая функция.
 * В новой объктной модели не используется.
 * @deprecated
 * @returns {unknown} -
 */
declare function StoreCatalogEntry(): unknown;

/**
 * Дешифрует строку, зашифрованную простым встроенным алгоритмом.
 * Устаревшая функция. Рекомендуется использовать {@link StrStdDecrypt}.
 * @deprecated
 * @param {string} str - Дешифруемая строка.
 * @returns {string} - Результат.
 */
declare function StrSimpleDecrypt(str: string): string;

/**
 * Шифрует сроку встроенным алгоритмом шифрования.
 * Устаревшая функция. Рекомендуется использовать {@link StrStdEncrypt}.
 * @deprecated
 * @param {string} str - Шифруемая строка.
 * @returns {string} - Результат.
 */
declare function StrSimpleEncrypt(str: string): unknown;

/**
 * Устаревшая функция.
 * Выполняет синхронизацию базы данных. Использовалась в E-Staff 3.x.
 * @deprecated
 * @returns {unknown} -
 */
declare function SyncDb(): unknown;

/**
 * Устаревшая функция.
 * Рекомендуется использовать {@link UrlDecode}
 * @deprecated
 * @returns {unknown} -
 */
declare function UrlDecode16(): unknown;

/**
 * Возвращает `URL` объектного документа с заданным id.
 * @deprecated
 * Устаревшая функция, используемая в старой объектной модели.
 * @param {number} documentId - Id документа.
 * @param {string} databaseName - Имя базы.
 * @example UrlFromDocID(123502899940580); // Вернет "x-local://data/objects/00007053427ACC/E4.xml"
 * @returns {string} Результат.
 */
declare function UrlFromDocID(documentId: number, databaseName?: string): string;

/**
 * Устаревшая функция.
 * @deprecated
 * @returns {unknown} -
 */
declare function WordExecute(): unknown;

//#endregion
