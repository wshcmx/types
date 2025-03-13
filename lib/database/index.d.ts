/**
 * Объект, обозначающий базу данных приложения.
 * Обычно доступен в единственном экземпляре через глобальную переменную {@link DefaultDb}.
 */
interface Database {
    Name: string;
    UseObjectTypes: boolean;
    UseSqlStorage: boolean;
    UseFtV2: boolean;
    SqlConnection: never;
    IsShared: boolean;
    /** /WebsoftServer/wt_data. */
    StorageDirectory: string;
    ObjectForms: unknown[];
    SharedDocs: Object;
    // HostDir: T;
    RegisterObjectType(urlScheme: string, object: Object): void;
    RegisterCatalog(urlScheme: string): never | undefined;
    OpenObjectDoc<T extends XmlDocument>(catalogName: string, id: number): T;
    OpenNewObjectDoc<T extends XmlDocument>(objectName: string): T;
    DeleteObjectDoc(objectName: string, objectId: number, bool?: boolean): void;
    ChangeObjectFields(arg: object): object;
    UpdateObjectSecondaryData(arg: object): object;

    /**
     * Возвращает объект типа XmlForm с формой данных объекта базы с заданным именем.
     * @param {string} objectName - Имя объекта.
     * @example DefaultDb.GetObjectForm("vacancy");
     * @see {@link GetOptObjectForm}
     */
    GetObjectForm<T>(objectName: string): T;

    /**
     * Возвращает url формы данных объекта базы с заданным именем.
     * @param {string} objectName - Имя объекта.
     * @example DefaultDb.GetObjectFormUrl("vacancy");
     * @see {@link GetObjectForm}
     */
    GetObjectFormUrl<T>(objectName: string): T;

    /**
     * Возвращает объект типа XmlForm с формой данных объекта базы с заданным именем.
     * Если объект с данным именем не зарегистрирован в структуре базы данных, возвращает undefined.
     * @param {string} objectName - Имя объекта.
     * @example DefaultDb.GetObjectForm("vacancy");
     * @see {@link GetObjectForm}
     */
    GetOptObjectForm<T>(objectName: string): T;

    GetOptCatalog<T>(catalogName: string): T;
    GetRecordPrimaryObjectUrl(object: object): string;
    RunSql(cmd: string): unknown;
}

 
declare const Database: Database;

declare const DefaultDb: Database;