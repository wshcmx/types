/**
 * Объект для работы по протоколу SMTP.
 */
interface SmtpClient {
    /**
     * Свойство UseTLS можно установить в true, чтобы SmtpClient автоматически переключался на защищенное соединение через команду "STARTTLS".
     */
    UseTLS: boolean;

    /**
     * Свойство UseTLSPort можно установить в true, чтобы SmtpClient подключался к серверу через защищенное соединение (TLS).
     */
    UseTLSPort: boolean;

    /**
     * Проходит процедуру авторизации.
     * @param {string} login - Логин.
     * @param {string} password - Пароль.
     */
    Authenticate(login: string, password: string ): unknown;

    /**
     * Закрывает SMTP-сессию и соединение.
     */
    CloseSession(): unknown;

    /**
     * Устанавливает соединение по протоколу SMTP с выполнением необходимых инициализационных команд.
     * @param {string} server - Адрес сервера и порт.\
     * @example smtpClient.OpenSession("server:465");
     */
    OpenSession(server: string): unknown;

    /**
     * Отправляет сообщение, переданное в виде объекта MailMessage.
     * @param {string} message - Сообщение для передачи.
     * @example
     * ```
     * message = new MailMessage();
     * message.recipients.AddChild( email ).address = email;
     * message.subject = 'Test';
     * message.body = 'Test';
     *
     * smtpClient.SendMessage( message );
     * ```
     */
    SendMessage(message: string): unknown;

    /**
     * Отправляет сообщение, переданное в формате MIME.
     */
    SendMimeMessage(): unknown;
}

interface SmtpClientConstructor {
    new(): SmtpClient;
    (): SmtpClient;
}

 
declare const SmtpClient: SmtpClientConstructor;
