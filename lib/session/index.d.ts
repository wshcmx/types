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
  Env: Env;
  sid: number;
}
