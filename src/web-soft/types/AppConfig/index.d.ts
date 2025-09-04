interface AppConfig extends Object {
    /**
     * Идентификатор (имя) приложения
     * @default "WebSoft HCM"
     */
    "APP-NAME": "WebSoft HCM";

    /**
     * Название службы WebSoft HCM (при запуске в соответствующем режиме)
     * @default WebSoft HCMCorpServer
     */
    "DAEMON-ID": string;

    /**
     * Сценарий запуска/работы сервера
     * @default x-local://wtv/wtv_view_main.xml
     */
    "LOAD-DOC": string;

    /**
     * Папка для XML базы. Подставляется в глобальную переменную DefaultDb
     * @default wt_data
     */
    "DEFAULT-DATABASE": string;

    /**
     * Папка для корзины
     * @default wt_data trash
     */
    "USE-TRASH": string;

    /**
     * Папка для полнотекстовых индексов
     * @default wt_data
     */
    "FTI": string;

    /**
     * Порт WebSoft HCM при запуске в режиме службы или приложения
     * @default 80
     */
    "PORT": string;

    /**
     * Дополнительный порт при запуске WebSoft HCM в режиме службы или приложения
     */
    "WEB-PORT": string;

    /**
     * Использование библиотеки WinInet и настроек Windows при выполнении команды HttpRequest
     * @default 1
     */
    "HTTP-USE-WININET": string;

    /**
     * Включает журналирование всех запросов к серверу с детализацией
     * @default 0
     */
    "LOG-REQUEST": string;

    /**
     * Включение журнала действий в админке
     * @default 0
     */
    "LOG-ACTIONS": string;

    /**
     * Сжатие запросов/ответов при обмене данными
     * @default 0
     */
    "LDS-FORCE-COMPRESS": string;

    /**
     * Включение режима keep-alive для HTTP-запросов
     * @default 1
     */
    "USE-KEEP-ALIVE": string;

    /**
     * Включение использования NTLM аутентификации
     * @default 0
     */
    "LDS-NTLM-AUTH": string;

    /**
     * Таймаут ожидания ответа на HTTP-запрос
     * @default 3600000
     */
    "TCP-CONN-TIMEOUT": string;

    /**
     * Таймаут ожидания сервера при ответе HTTP-запроса
     * @default 3600000
     */
    "TCP-SRV-TIMEOUT": string;

    /**
     * Параметр переключения на работу с БД SQL
     * @default 0
     */
    "FORCE-DECIMAL": string;

    /**
     * Использование атрибута поясного времени при работе с датами
     * @default 1
     */
    "XML-WRITE-TIMEZONE": string;

    /**
     * Сервисный параметр. Не изменять.
     * @default 1
     */
    "REVERT-TO-SELF": string;

    /**
     * Дополнительные библиотеки при старте сервера
     */
    "PACKAGE-DB": string[];

    /**
     * Тип структуры каталогов при локальном хранилище (XML)
     * @default xdb
     */
    "CATALOG-STORAGE": string;

    /**
     * Корневая директория веб-сервера
     * @default wt/web
     */
    "WEB-DIR": string;

    /**
     * Основная кодировка
     * @default utf-8
     */
    "CHARSET": string;

    /**
     * Сервисный параметр. Не изменять.
     * @default windows-1251
     */
    "DEFAULT-TEXT-FILE-CHARSET": string;

    /**
     * Игнорировать блокировку объектов при открытии документов
     * @default 1
     */
    "IGNORE-READ-ONLY-ERRORS": string;

    /**
     * Игнорировать отсутствие признака часового пояса
     * @default 1
     */
    "IGNORE-LEGACY-TIME-ZONE": string;

    /**
     * Устанавливать часовой пояс по умолчанию, если отсутствует в данных
     * @default 1
     */
    "XML-LEGACY-TIME-ZONE": string;

    /**
     * Часовой пояс
     */
    "TIME-ZONE": string;

    /**
     * Поиск без учета регистра
     */
    "SORT-IGNORE-CASE": string;

    /**
     * Таймаут реакции сервера на обновление списков
     * @default 0
     */
    "LDS-CURSOR-KEEP-TIMEOUT": string;

    /**
     * Принудительное выставление TIME зоны для полей типа дата
     * @default 1
     */
    "FORCE-LOCAL-DATE": string;

    /**
     * Декодировать веб URL из UTF-8
     * @default 1
     */
    "URL-PATH-UTF8": string;

    /**
     * Количество знаков после запятой для real
     * @default 6
     */
    "REAL-PRECISION": string;

    /**
     * Включение использования DOTNETCORE
     * @default 1
     */
    "DOTNETCORE": string;

    /**
     * Путь к директории DOTNETCORE
     * @default dotnetcore/core
     */
    "DOTNETCORE-PATH": string;

    /**
     * Путь к директории с библиотеками DOTNETCORE
     */
    "DOTNETLIBS-PATH": string[];

    /**
     * Включение режима отладки DOTNETCORE
     * @default 0
     */
    "DOTNETCORE-DEBUG": string;

    /**
     * Включение X-SHELL
     * @default 1
     */
    "X-SHELL": string;

    /**
     * Функция запуска X-SHELL
     * @default tools_xshell.xshell
     */
    "X-SHELL-COMMAND": string;

    /**
     * Переключение на работу с БД SQL хранилище
     */
    /**
     * Включение хранения BLOB из папки WebSoftServer
     */
    "DB-STORE-HOOK": string[];

    /**
     * Параметр хранения пользовательских сессий в кластере
     */
    "WEB-SESSION-STORE-HOOK": string;

    /**
     * Запрещает изменения при открытой карточке
     * @default 0
     */
    "URL-LOCKS": string;

    /**
     * Разрешить выполнение ServerEval
     * @default 0
     */
    "ALLOW-SERVER-EVAL": string;

    /**
     * Максимальное количество пользовательских сессий
     * @default 3000
     */
    "MAX-SESSIONS": string;

    /**
     * Определяет директории для шаблонов
     */
    "DESIGN-DB": string[];

    /**
     * EHLO домен для SMTP
     */
    "SMTP-EHLO-DOMAIN": string;

    /**
     * Включение сжатия контента HTTP
     * @default 1
     */
    "DYN-OBJECT-COMPRESSION": string;

    /**
     * Принудительное освобождение памяти DOTNETCORE
     * @default 0
     */
    "DOTNETCORE-MEMORY-CONTROL": string;

    /**
     * Предел превышения памяти
     * @default 8589934592
     */
    "DOTNETCORE-MEMORY-THRESHOLD": string;

    /**
     * Интервал проверки памяти
     * @default 60
     */
    "DOTNETCORE-MEMORY-LONG-COLLECTION-INTERVAL": string;

    /**
     * Интервал между сборками памяти
     * @default 5
     */
    "DOTNETCORE-MEMORY-INTER-COLLECTION-INTERVAL": string;

    /**
     * Отключает сбор статистики по количеству записей
     * @default 0
     */
    "SKIP-CATALOG-STAT": string;

    /**
     * Отключает вывод ошибок работы с базой
     * @default 0
     */
    "DB-STORE-HOOK-DEBUG": string;

    /**
     * Отключает доступ к web-интерфейсу консоли администратора
     * @default 0
     */
    "disable-spxml-web": string;

    /**
     * Включает вывод ошибок в поток
     * @default 0
     */
    "ALLOW-HTTP-DEVELOPER-OUTPUT": string;

    /**
     * Формат id сессии
     * @default 0
     */
    "SESSION-EXT-MODE": string;

    /**
     * Определяет директории для чтения и записи данных
     */
    "DATA-DB": string[];

    /**
     * Включает очередь прокторинга на сервере
     * @default 1
     */
    "PROCTOR-UPDATE-SESSIONS-HANDLER": string;

    /**
     * Частота запуска обработки очереди прокторинга
     * @default 10000
     */
    "PROCTOR-UPDATE-SESSIONS-SLEEP-SLICE": string;

    /**
     * Включает очередь для медиа handler
     * @default 1
     */
    "DOTNETCORE-MEDIA-QUEUE-HANDLER": string;

    /**
     * Включает обработку очереди видео-редактора
     * @default 1
     */
    "CL-COURSE-ONLINE-QUEUE": string;

    /**
     * Разрешает запуск очереди на сокет сервере
     * @default 0
     */
    "BLOCK-MESSAGE-QUEUE-ON-SOCKET-SERVER": string;

    /**
     * Включает проверку по хосту при авторизации администратора
     * @default 0
     */
    "LDS-AUTH-HOSTS": string;

    /**
     * Атрибут SameSite для Session cookie
     */
    "SESSION-COOKIE-SAME-SITE": string;

    /**
     * Включает прямые SQL-запросы
     * @default 0
     */
    "ALLOW-SQL-REMOTE-QUERIES": string;

    /**
     * Параметр кэширования JS кода
     * @default 0
     */
    "CODE-CACHE": string;

    /**
     * Минимальный размер кода для кэширования
     * @default 64
     */
    "CODE-CACHE-MIN-SIZE": string;

    /**
     * Включает очередь обновления активности пользователей
     * @default 1
     */
    "PERSON-ACTIVITY-INFO-ACTIVE": string;

    /**
     * Время полного обновления данных
     * @default 01:00
     */
    "PERSON-ACTIVITY-INFO-FULL-UPDATE-TIME": string;

    /**
     * Частота частичного обновления данных
     * @default 3600
     */
    "PERSON-ACTIVITY-INFO-UPDATE-FREQUENCY": string;

    /**
     * Частота актуализации каталога
     */
    "PERSON-HIERARCHY-UPDATE-FREQUENCY": string;
}

declare const AppConfig: AppConfig;