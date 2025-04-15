/**
 * Объект Session доступен на сервере xHttp.exe при вызове кода веб-страницы
 * через одноименную переменную. Обозначает сессию, сохраняемую через куки.
 * Используется для хранения общих данных пользователя Web-сайта между разными запросами.
 * Session наследуется от стандартного объекта javascript Object, то есть позволяет
 * хранить внутри себя произвольное количество именованных атрибутов, но,
 * в отличие от последнего, является thread-safe. Кроме этого, объект
 * Session содержит несколько собственных атрибутов.
 */
interface Session extends Object {
  sid: number;
  Env: Env;
  cur_user_id: number;
  cur_user_fullname: string;
  cur_user_login: string;
  cur_useragent: string;
  auth_type: string;
}
