interface Thread {
  /**
   * Проверяет, выполняется ли еще запущенный поток.
   */
  IsRunning: boolean;

  /**
   * Объект типа Object, используемый для хранения произвольных параметров.
   * Обычно параметры устанавливаются перед запуском потока, после чего код,
   * выполняемый в потоке, использует их.
   * Параметр не является thread-safe, поэтому код, запускающий поток,
   * не должен обращаться к ним после запуска потока.
   */
  Param: Object;

  /**
   * Запускает выполнения потока из заданного кода.
   * @param {string} code - Строка, содержащая код.
   * @example
   * ```
   * const thread = new Thread;
   * thread.EvalCode("lib_backup.run_backup()");
   * ```
   */
  EvalCode(code: string): void;

  /**
   * Запускает выполнения потока из кода, загруженного из заданного `URL`.
   * @param {string} url - `URL`, содержащий код.
   * @example
   * ```
   * const thread = new Thread;
   * thread.EvalCodeUrl("rcr_agent.js");
   * ```
   */
  EvalCodeUrl(url: string): unknown;

  /**
   * Запускает в потоке указанный код после завершения выполнения кода, запущенного методом {@link EvalCode}
   * @example 
   * ```
   * const thread = new Thread;
   * thread.EvalCode("lib_backup.run_backup()");
   * thread.SetPostCode("if ((tools.sys_db_capability & tools.UNI_CAP_BASIC) != 0) tools.spxml_unibridge.Object.provider.CleanUpThreadResources()");
   * ```
   */
  SetPostCode(code: string): void;
}

interface ThreadConstructor {
  new(): Thread;
  (): Thread;
}

/**
 * Объект, обозначающий отдельный запускаемый поток (thread).
 * На сегодняшний день создание потока через объект Thread не рекомендуется,
 * поскольку существует более удобный способ запyска потока через метод {@link EvalThread}()
 * объекта XmlDoc, предлагающий концепцию класса, содержажего атрибуты и методы.
 */
declare const Thread: ThreadConstructor;
