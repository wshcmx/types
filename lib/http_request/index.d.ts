interface IRequestAuthObject {
  id: XmlElem<number>;
  login: XmlElem<string>;
  access_role_id: XmlElem<number, AccessRoleBase>;
}

/**
 * Объект Request доступен на сервере xHttp.exe при вызове кода веб-страницы.
 * Обозначает соответствующий HTTP-запрос к странице.
 */
interface Request {
  /**
   * Экспериментальный атрибут. Возвращает массив стандартный объектов типа Object,
   * содержащий копии данных всех действующих web-сессий (объектов Session).
   * Копируются только поля, содержащие скалярные значения, поля,
   * содержащие объекты, копируются как undefined.
   */
  AllSessions: Session[];

  /**
   * Возвращает логин пользователя авторизованного запроса.
   * Если запрос не авторизованный, или атрибут вызывается до авторизации,
   * возвращается пустая строка.
   */
  AuthLogin: string;

  /**
   * Возвращает объект, соответствующий пользователю авторизованного запроса
   * от клиентской части (SpXml.exe).
   */
  AuthObject: XmlElem<IRequestAuthObject>;

  /**
   * Возвращает пароль пользователя авторизованного запроса (для basic-авторизации).
   * Если запрос не авторизованный, или атрибут вызывается до авторизации,
   * или используется метод авторизации без передачи пароля в открытом виде,
   * возвращается пустая строка.
   */
  AuthPassword: string;

  /**
   * Возвращает Id пользователя авторизованного запроса.
   * Для запросов от клиентской части (SpXml.exe) переменная
   * устанавливается автоматически исходя из результата вызова {@link OnCheckAuth}().
   * Для запросов к Web-страницы переменная может быть установлена
   * вручную авторизационным кодом Web-страницы.
   *
   * При сохранении на сервере документа, содержащего элемент, содержимое переменной
   * автоматически записывается в поля creation.user_id и modification.user_id
   * структуры doc_info, если такие поля присутствуют в документе.
   */
  AuthUserID: number;

  /**
   * Возвращает тело HTTP-запроса в виде строки.
   */
  Body: string;

  /**
   * Возвращает содержимое web-формы запроса, передаваемого через метод POST,
   * разобранное по полям, в виде стандартного объекта javascript Object.
   * Если запрос не содержит web-форму, атрибут возвращает ошибку.
   */
  Form: Object;

  /**
   * Возвращает список полей заголовка HTTP-запроса в виде стандартного объекта
   * javascript Object.
   */
  Header: Object;

  /**
   * Возвращает метод ('GET' или 'POST') текущего HTTP-запроса.
   */
  Method: string;

  /**
   * Возвращает стандартный объект javascript Object, содержащий объединенный
   * набор полей из атрибутов Form и QueryString.
   */
  Query: Object;

  /**
   * Возвращает содержимое строки параметров url запроса, разобранное по полям,
   * в виде стандартного объекта javascript Object. Если url не содержит параметров,
   * возвращаемый пустой объект.
   */
  QueryString: Object;

  /**
   * Возвращает IP адрес, с которого отправлен запрос, в виде строки.
   */
  RemoteIP: string;

  /**
   * Более современный эквивалент атрибута ContentType объекта Response.
   * Атрибут доступен как на чтение так и на запись.
   * Содержит значение заголовка "Content-Type" ответа на текущий запрос. HTTP.
   * Если заголовок уже был отправлен, попытка изменения атрибута возвращает ошибку.
   */
  RespContentType: string;

  /**
   * Возвращает объект типа Stream, в который можно писать данные ответа HTTP.
   * Если заголовок ответа еще не был отправлен к моменту первого обращения
   * к атрибуту, отправляется ответ HTTP 200.
   */
  RespStream: Stream;

  /**
   * Возвращает объект Session, привязанный к текущему запросу.
   * Если в коде Web-страницы объект Session доступен через глобальную
   * переменную с таким же именем, то, например, внутри {@link OnWebRequest}()
   * единственный способ получить ссылку на этот объект - это обратиться
   * через Request.Session.
   */
  Session: Session;

  /**
   * Возвращает запрашиваемый url текущего HTTP-запроса.
   */
  Url: string;

  /**
   * Возвращает хост (адрес сервера и, если есть - порт) запрашиваемого
   * url текущего HTTP-запроса. Данный атрибут доступен также на запись,
   * что используется, как правило, внутри вызова {@link OnWebRequest}() для
   * внутреннего перенаправления старых url на новые.
   */
  UrlHost: string;

  /**
   * Возвращает строку параметров (param1=value1&param2=value2&...)
   * запрашиваемого url текущего HTTP-запроса. Данный атрибут доступен
   * также на запись, что используется, как правило, внутри вызова {@link OnWebRequest}()
   * для внутреннего перенаправления старых url на новые.
   */
  UrlParam: string;

  /**
   * Возвращает путь запрашиваемого url текущего HTTP-запроса.
   * Данный атрибут доступен также на запись, что используется,
   * как правило, внутри вызова {@link OnWebRequest}() для внутреннего
   * перенаправления старых url на новые.
   */
  UrlPath: string;

  /**
   * Добавляет или заменяет поле заголовка HTTP-ответа. Если заголовок уже был отправлен, метод возвращает ошибку.
   * @param {string} fieldName - Имя поля.
   * @param {string} fieldValue - Значение поля.
   * @param {boolean} replaceExisting - Заменить существующее.
   * Заменить значение существующего поля с таким же именем, если есть.
   * Необязательный аргумент, по умолчанию равен true.
   */
  AddRespHeader(fieldName: string, fieldValue: string, replaceExisting?: boolean): void;

  /**
   * Вызывает проверку авторизации запроса по стандартному методу авторизации
   * для рабочего места (через вызов OnCheckAuth).
   */
  CheckLdsAuth(): void;

  /**
   * Выполняет код указанного фрагмента Web-страницы с записью результата
   * в текущий HTTP-ответ. Метод используется для включений фрагментов,
   * общих для различных видов страниц.
   * @param {string} path - Путь к включаемому фрагменту.
   * Если указан относительный путь (что как правило и делается),
   * путь считается относительно родительской к текущей странице директории.
   * @param {boolean} allowSubCancel - Разрешать завершение код с отменой.
   * Если true, то в случае, если код фрагмента завершается исключением типа {@link Cancel}(),
   * метод все равно завершается успешно. Необязательный аргумент,
   * по умолчанию равен false. Используется, для удобства завершения фрагментов
   * кода через функцию {@link Cancel}(), поскольку использовать return непосредственно
   * в коде фрагмента страницы невозможно.
   */
  Execute(path: string, allowSubCancel?: boolean): void;

  /**
   * Вызывает отправку статуса HTTP 404 "Not found" (объект не найден).
   * Если заголовок уже был отправлен, метод возвращает ошибку.
   */
  HandleNotFound(): void;

  /**
   * Вызывает отправку статуса HTTP 301 "Object Moved" (постоянное перенаправление).
   * Если заголовок уже был отправлен, метод возвращает ошибку.
   * @param {string} redirectUrl - Url, на которое происходит перенаправление.
   */
  PermanentRedirect(redirectUrl: string): void;

  /**
   * Вызывает отправку статуса HTTP 302 "Object Moved" (перенаправление).
   * Если заголовок уже был отправлен, метод возвращает ошибку.
   * @param {string} redirectUrl - Url, на которое происходит перенаправление.
   */
  Redirect(redirectUrl: string): void;

  /**
   * Возвращает статус HTTP-ответа. Если заголовок уже был отправлен,
   * метод возвращает ошибку.
   * @param {number} statusCode - Трехзначный код статуса.
   * @param {string} statusDesc - Наименование статуса.
   * @example Request.SetRespStatus( 500, 'Invalid server state' );
   */
  SetRespStatus(statusCode: number, statusDesc: string): void;

  /**
   * Используется для проверки авторизации внутри Web-страницы.
   * Вызывает отправку статуса HTTP 401 "Authorization required".
   * Код Web-страницы обычно вызывает данный метод, если Request.AuthLogin
   * возвращает пустую строку, либо указаны неверные авторизационные данные.
   * Если заголовок уже был отправлен, метод возвращает ошибку.
   * @param {string} options - Список опций вида 'name1=value1;name2=value2;...'.
   * Допустимые значения: basic=1, ntlm=1 - разрешенные виды авторизации.
   */
  SetWrongAuth(options: string): void;
}


declare const Request: Request;
