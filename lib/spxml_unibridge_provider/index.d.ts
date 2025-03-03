declare class SPXMLUnibridgeProvider {
  /**
   * @param {string} [db_name=prime]
   * @param {boolean} [is_mars=true]
   * @param {string} [config_filename=null]
   * @param {string} [module_directory=null]
   * @param {string} [mode=null]
   * @param {boolean} [to_connect=true]
   */
  Init(db_name?: string, is_mars?: boolean, config_filename?: string, module_directory?: string, mode?: string, to_connect?: boolean): void;
  /**
   * @param tenancy
   * @param form_url
   * @param {string} [form_url_data=null]
   * @param {boolean} [remove_object=true]
   */
  RegisterObjectType(tenancy: string, form_url: string, form_type: number, form_url_data?: string, remove_object?: boolean): boolean;
  BeginRegisterObjectTypeSecurity(): boolean;
  RegisterObjectTypeSecurity(form_url: string): boolean;
  FinishRegisterObjectTypeSecurity(): boolean;
  /**
   * @param db_name
   * @param tenancy
   * @param form_url
   * @param {string} [form_type=null]
   */
  RegisterCatalog(db_name: string, tenancy: string, form_url: string, form_url_data?: string): boolean;
  /**
   * @param tenancy
   * @param form_url
   * @param db_name
   * @param {string} [form_url_data=null]
   */
  ReCreateCatalog(tenancy: string, form_url: string, db_name: string, form_url_data?: string): boolean;
  /**
   * @param tenancy
   * @param form_url
   * @param db_name
   * @param {string} [form_url_data=null]
   */
  UpgradeCatalog(tenancy: string, form_url: string, db_name: string, form_url_data?: string): boolean;
  /**
   * @param form_url
   * @param UrlData
   * @param {string} [tenancy=null]
   */
  RegisterSharedObject(form_url: string, UrlData: string, tenancy?: string): boolean;
  /**
   * @param form_url
   * @param {number} [strategy=-1]
   */
  LoadUrl(form_url: string, strategy?: number): string[];
  LoadUrlPtr(form_url: string): [number, number];
  /**
   * @param form_url
   * @param {string} [filepath=null]
   */
  LoadUrlToDisk(form_url: string, filepath?: string): string;
  GetUrlsByPattern(form_url_pattern: string): object; // IObjectArray
  LoadObjectUrl(db_name: string, docID: number): string;
  /**
   * @param form_url
   * @param UrlData
   * @param {string} [path=null]
   * @param {number} [offset=-1.0]
   * @param {number} [count=-1]
   */
  PutUrl(form_url: string, UrlData: object, path?: string, offset?: number, count?: number): boolean;
  PutObjectUrl(db_name: string, docID: number, UrlData: object): boolean;
  PutObjectUrlAsString(db_name: string, form_type: number, docID: number, UrlData: string): boolean;
  /**
   * @param CatalogName
   * @param {number} [timeout=-1]
   */
  SyncCatalog(CatalogName: string, timeout?: number): boolean;
  /**
   * @param temp_object_type
   * @param docID
   * @param form_url
   * @param UrlData
   * @param {string} [form_url_data=null]
   */
  PutObjectUrlToTempObjectType(temp_object_type: string, docID: number, form_url: string, UrlData: string, form_url_data?: string): boolean;
  ZipExtractUrlToDataStorage(form_url: string, target_url: string): boolean;
  /**
   * @param tenancy
   * @param form_url
   * @param object_type
   * @param form_type
   * @param {string} [form_url_data=null]
   */
  ReInitObjectTypeWithNewSchema(tenancy: string, form_url: string, object_type: string, form_type: number, form_url_data?: string): boolean;
  /**
   * @param tenancy
   * @param form_url
   * @param object_type
   * @param temp_object_type
   * @param form_type
   * @param {string} [form_url_data=null]
   */
  ReInitObjectTypeFromTemp(tenancy: string, form_url: string, object_type: string, temp_object_type: string, form_type: number, form_url_data?: string): boolean;
  /**
   * @param tenancy
   * @param form_url
   * @param object_type
   * @param {string} [form_url_data=null]
   * @param {number} [form_type=0]
   */
  UpgradeWithStraightWay(tenancy: string, form_url: string, object_type: string, form_url_data?: string, form_type?: number): boolean;
  /**
   * @param db_name
   * @param tenancy
   * @param form_url
   * @param form_type
   * @param {string} [form_url_data=null]
   */
  RebuildIndexesIfModified(db_name: string, tenancy: string, form_url: string, form_type: number, form_url_data?: string): boolean;
  MigrateInit(): boolean;
  MigrateFinish(): boolean;
  MigrateObject(docID: number, FormUrl: string, UrlData: string): boolean;
  DeleteUrl(form_url: string): boolean;
  /**
   * @param db_name
   * @param docID
   * @param {boolean} [strictDelete=false]
   */
  DeleteObjectUrl(db_name: string, docID: number, strictDelete?: boolean): boolean;
  GetAllDocs(db_name: string, form: string): unknown; // IDocumentCollection;
  GetAllBlobs(): unknown; // IBlobCollection
  GetDocs(tenancy: string, object_type: string): unknown; // IDocumentCollection;
  InvalidateCatalog(db_name: string, CatalogName: string): boolean;
  BeginRebuildAllCatalogs(db_name: string, start_pos: number, records_num: number): boolean;
  FinishRebuildAllCatalogs(db_name: string): boolean;
  ProcessCatalogRecord(db_name: string, CatalogName: string, EntryData: string): boolean;
  DeleteCatalogRecordsByKey(db_name: string, CatalogName: string, KeyValue: number, KeyName: string): boolean;
  /**
   * @param db_name
   * @param tenancy
   * @param original_form_url
   * @param form_type
   * @param {string} [form_url_data=null]
   */
  CheckObjectTypeIsModified(db_name: string, tenancy: string, original_form_url: string, form_type: number, form_url_data?: string): unknown; // IObjectType;
  /**
   * @param original_form_url
   * @param form_type
   * @param {string} [form_url_data=null]
   */
  UpdateMetaInformationIfModified(original_form_url: string, form_type: number, form_url_data?: string): boolean;
  GetTempObjectType(object_type: string): string;
  XQuery(QueryStr: string, StartPos: number, PageSize: number, ExpectSingleRecord: boolean, PreloadForeignElems: boolean, UseCursor: boolean): unknown; // IDocumentCollection;
  CheckIsCompatibleDbVersion(db_name: string): boolean;
  GetProviderConfigNames(): string;
  GetProviderConfigValue(name: string): string;
  /**
   * @param name
   * @param value
   * @param is_persistent
   * @param {string} [uid=null]
   */
  SetProviderConfigValue(name: string, value: string, is_persistent: boolean, uid?: string): boolean;
  /**
   * @param {string} [filename=null]
   */
  SaveProviderConfigValues(filename?: string): boolean;
  InstallProcPacks(): boolean;
  log(sErrNum: string, ErrText: string): void;
  GetSession(id: number): string;
  UpdateSession(id: number, data: string): boolean;
  FetchUrlAttribute(form_url: string, name: string): object;
  /**
   * @param form_url
   * @param ResponseStream
   * @param {object} [Response=null]
   */
  WriteUrl(form_url: string, ResponseStream: object, Response?: object): boolean;
  /**
   * @param url
   * @param {number} [offset=0.0]
   * @param {number} [length=-1]
   */
  GetUrlChunk(url: string, offset?: number, length?: number): unknown; // IUrlChunk
  SetGlobalEnv(global_env: object): boolean;
  /**
   * @param info_name
   * @param {string[]} [uids=null]
   * @param {string} [host=null]
   * @param {string} [authorizationSchema=null]
   * @param {string} [roleType=null]
   */
  GetRunningInfo(info_name: string, uids: string[], host?: string, authorizationSchema?: string, roleType?: string): object;
  /**
   * @param {number} [ext=0]
   */
  GetProviderCapabilities(ext?: number): number;
  /**
   * @param queue_name
   * @param message
   * @param {number} [message_ttl=null]
   * @param {number} [message_initial_delay=null]
   */
  PutMessageInQueue(queue_name: string, message: string, message_ttl?: number, message_initial_delay?: number): boolean;
  GetMessageFromQueue(queue_name: string): string;
  ClearMessagesInQueue(queue_name: string): boolean;
  QueueIndexOf(queue_name: string, message: string): number;
  /**
   * @param queue_name
   * @param message
   * @param {number} [occurence=0]
   */
  QueueRemoveMessage(queue_name: string, message: string, occurence?: number): number;
  /**
   * @param queue_name
   * @param start
   * @param {number} [stop=0]
   */
  QueueTrim(queue_name: string, start: number, stop?: number): boolean;
  /**
   * @param queue_name
   * @param {number} [start=0]
   * @param {number} [stop=-1]
   */
  PeekMessagesFromQueue(queue_name: string, start?: number, stop?: number): string[];
  GetInMemoryQueue(queue_name: string): unknown; // IInMemoryQueue
  DropInMemoryQueue(queue_name: string): boolean;
  CreateAutomaticTenancy(host: string): string;
  CreateTenancy(name: string, host: string, username: string, password: string): boolean;
  /**
   * @param target_tenancy
   * @param {string} [source_tenancy=null]
   */
  CreateTenancyStructure(target_tenancy: string, source_tenancy?: string): boolean;
  /**
   * @param name
   * @param host
   * @param {string} [altkey=null]
   * @param {string} [pd_schema=null]
   * @param {string} [st_schema=null]
   */
  CreateTenancyEntry(name: string, host: string, altkey?: string, pd_schema?: string, st_schema?: string): boolean;
  GetTenancies(): object; // IObjectArray
  GetHostsByTenancy(name: string): object; // IObjectArray
  SetThreadTenancy(name: string): boolean;
  GetThreadTenancy(): string;
  GetTenancyByHost(host: string): string;
  GetTenancySize(name: string): unknown; // ITenancySize;
  ReleaseThreadTenancy(): boolean;
  DeleteTenancy(name: string): boolean;
  DeleteTenancyEntry(name: string, host: string): boolean;
  DisableTenancy(name: string): boolean;
  DisableTenancyEntry(name: string, host: string): boolean;
  EnableTenancy(name: string): boolean;
  EnableTenancyEntry(name: string, host: string): boolean;
  /**
   * @param source_tenancy
   * @param target_tenancy
   * @param {string} [source_conn_str=null]
   * @param {string} [source_account=null]
   * @param {string} [conditions=null]
   * @param {boolean} [source_use_federations=true]
   */
  CopyTenancy(source_tenancy: string, target_tenancy: string, source_conn_str?: string, source_account?: string, conditions?: string, source_use_federations?: boolean): boolean;
  /**
   * @param operation
   * @param {number} [days=0]
   */
  PurgeDeletedDocuments(operation: number, days?: number): unknown; // IPurgeResult
  FTIndexDatabase(operation: number): unknown; // IFTIndexResult
  CustomElemsInitialization(operation: number): unknown; // ICustomElemsInitializationResult
  /**
   * @param operation
   * @param {string} [backup_container=null]
   * @param {string} [storage_account=null]
   */
  BackupDatabase(operation: number, backup_container?: string, storage_account?: string): unknown; // IBackupResult
  /**
   * @param operation
   * @param restore_containers
   * @param {string} [storage_account=null]
   */
  RestoreDatabase(operation: number, restore_containers: string, storage_account?: string): unknown; // IRestoreResult
  /**
   * @param key
   * @param value
   * @param {number} [expire_time=0]
   */
  SetUserData(key: string, value: string, expire_time?: number): boolean;
  GetUserData(key: string): string;
  /**
   * @param key
   * @param value
   * @param {number} [expire_time=0]
   */
  GetSetUserData(key: string, value: string, expire_time?: number): string;
  RemoveUserData(key: string): boolean;
  GetUserDataContainsKey(key: string): boolean;
  ClearUserDataByPrefix(prefix: string): boolean;
  /**
   * @param {string} [region=null]
   */
  GetCacheKeys(region?: string): object; // IObjectArray
  /**
   * @param {string} [region=null]
   * @param {number} [db=0]
   */
  ClearCache(region?: string, db?: number): boolean;
  /**
   * @param prefix
   * @param {string} [region=null]
   * @param {number} [db=0]
   */
  ClearCacheByPrefix(prefix: string, region?: string, db?: number): boolean;
  /**
   * @param ldap_server
   * @param ldap_container
   * @param username
   * @param password
   * @param {number} [context_options=0]
   * @param {number} [context_type=0]
   */
  ValidateLDAP(ldap_server: string, ldap_container: string, username: string, password: string, context_options?: number, context_type?: number): boolean;
  /**
   * @param ldap_server
   * @param ldap_container
   * @param username
   * @param password
   * @param {number} [auth_type=0]
   */
  ValidateLDAPRequest(ldap_server: string, ldap_container: string, username: string, password: string, auth_type?: number): boolean;
  /**
   * @param ldap_server
   * @param ldap_container
   * @param username
   * @param password
   * @param properties
   * @param {number} [context_options=0]
   * @param {number} [context_type=0]
   */
  ValidateLDAPWithAttributes(ldap_server: string, ldap_container: string, username: string, password: string, properties: string, context_options?: number, context_type?: number): object; // IObjectArray
  ValidateADALWithAttributes(ad_server_tenant: string, ad_clientid: string, resourceId: string, username: string, password: string, properties: string): object; // IObjectArray
  /**
   * @param ad_server_tenant
   * @param ad_clientid
   * @param resourceId
   * @param token
   * @param properties
   * @param {string} [stsDiscoveryEndPoint=null]
   */
  ValidateADALWithTokenAttributes(ad_server_tenant: string, ad_clientid: string, resourceId: string, token: string, properties: string, stsDiscoveryEndPoint?: string): object; // IObjectArray
  /**
   * @param {number} [max_concurrent_connections=10]
   */
  BeginBulkTask(max_concurrent_connections: number): boolean;
  /**
   * @param {number} [wait_time_sec=0]
   */
  EndBulkTask(wait_time_sec: number): boolean;
  /**
   * @param token
   * @param container
   * @param {string} [storage_account=null]
   */
  EnumerateBackupFiles(token: string, container: string, storage_account?: string): object; // IObjectArray
  /**
   * @param backup_file
   * @param {boolean} [extract_data=false]
   * @param {string} [storage_account=null]
   */
  EnumerateBackupItems(backup_file: string, extract_data?: boolean, storage_account?: string): unknown; // IBackupItemEnumerator
  DeleteLocalBackupFile(backup_file: string): boolean;
  MigratePersonalDataObjectType(form: string): boolean;
  MigratePersonalDataCatalog(catalog: string): boolean;
  ConvertPersonalDataCatalog(catalog: string): boolean;
  ReIndexPersonalDataCatalog(catalog: string): boolean;
  PopulatePersonalData(tenancy: string): boolean;
  GetPersonalDataObjects(): object; // IObjectArray
  GetPersonalDataCatalogs(): object; // IObjectArray
  PersonalDataIntegration(on: boolean): boolean;
  /**
   * @param base_dir
   * @param filepath
   * @param target_url
   * @param {boolean} [delete_after=false]
   * @param {string} [mask="*"]
   */
  CopyFilesToDataStorage(base_dir: string, filepath: string, target_url: string, delete_after?: boolean, mask?: string): boolean;
  /**
   * @param base_dir
   * @param file_url
   * @param target_path
   * @param {boolean} [delete_after=false]
   * @param {string} [mask="*"]
   */
  CopyFilesFromDataStorage(base_dir: string, file_url: string, target_path: string, delete_after?: boolean, mask?: string): boolean;
  GetTempFileName(): string;
  GetTempPath(): string;
  ClearPersonalDataObjectType(form: string): boolean;
  ClearPersonalDataCatalog(catalog: string): boolean;
  SetCatalogsToRebuild(catalogs: string): void;
  /**
   * @param {number} [last_rows=1000]
   * @param {number} [execution_count=0]
   * @param {number} [day_lag=1]
   */
  OptimizeCatalogIndexesByStat(last_rows?: number, execution_count?: number, day_lag?: number): void;
  /**
   * @param {string} [catalog=null]
   */
  CreateUpdateHCCCatalog(catalog?: string): void;
  /**
   * @param evt_name
   * @param jcontext
   * @param {string} [jproperties=null]
   * @param {string} [jmetrics=null]
   */
  TrackEvent(evt_name: string, jcontext: string, jproperties?: string, jmetrics?: string): void;
  /**
   * @param req_name
   * @param url
   * @param duration
   * @param jcontext
   * @param {string} [jproperties=null]
   * @param {string} [jmetrics=null]
   */
  TrackRequest(req_name: string, url: string, duration: number, jcontext: string, jproperties?: string, jmetrics?: string): void;
  /**
   * @param page_name
   * @param url
   * @param duration
   * @param jcontext
   * @param {string} [jproperties=null]
   * @param {string} [jmetrics=null]
   */
  TrackPageView(page_name: string, url: string, duration: number, jcontext: string, jproperties?: string, jmetrics?: string): void;
  /**
   * @param type
   * @param name
   * @param duration
   * @param jcontext
   * @param {string} [jproperties=null]
   */
  TrackMetrics(type: string, name: string, duration: number, jcontext: string, jproperties?: string): void;
  TrackException(e: string): void;
  /**
   * @param license_doc
   * @param {string} [demo_license=null]
   */
  SetLicenseEntries(license_doc: string, demo_license: string): boolean;
  /**
   * @param {string} [tenancy="dbo"]
   */
  GetLicenseEntries(tenancy?: string): string;
  UpdateTenancyLicense(tenancy: string, license: string): boolean;
  CleanUpThreadResources(): boolean;
  ClearStackComments(): boolean;
  AddStackComments(type: number, comments: string): boolean;
  GetStackComments(): string;
  ClearThreadDictionary(): boolean;
  AddThreadDictionaryValue(key: string, value: object): boolean;
  GetThreadDictionaryValue(key: string): object;
  RemoveThreadDictionaryValue(key: string): boolean;
  GetThreadDictionaryValues(): object; // IObjectArray
  /**
   * @param table
   * @param {string} [timestamp=null]
   * @param {string} [exclude_tags=null]
   * @param {number} [cache_type=0]
   * @param {number} [cache_type=64]
   */
  BulkLoadIntoCache(table: string, timestamp?: string, exclude_tags?: string, cache_type?: number, capacity?: number): boolean;
  BulkClearCache(): void;
  /**
   * @param user_login
   * @param user_id
   * @param app_instance_id
   * @param {string} [roles=null]
   */
  SetSecurityContext(user_login: string, user_id: number, app_instance_id: string, roles?: string): boolean;
  GetSecurityContext(parameter: string): object;
  ReleaseSecurityContext(): boolean;
  SetCorrelationID(): void;
  GetCorrelationId(): string;
  GetCorrelationID(): string;
  ReleaseCorrelationID(): void;
  SetSTCategory(category: string): boolean;
  GetSTCategory(): string;
  ReleaseSTCategory(): boolean;
  SetRunMode(mode: number): void;
  /**
   * @param form_url
   * @param UrlData
   * @param {string} [max_commit_records=null]
   * @param {number} [offset=-1.0]
   * @param {number} [count=-1]
   */
  PutUrlToAlt(form_url: string, UrlData: object, path?: string, offset?: number, count?: number): boolean;
  GetTenancyHasAltKey(name: string): boolean;
  ResetCPUThreadUsage(): void;
  GetCPUThreadUsage(): void;
  TestRun(): void;
  BeginAtomicOperation(AtomicId: number): void;
  CommitAtomicOperation(AtomicId: number): void;
  /**
   * @param {number} [max_commit_records=0]
   */
  BeginBulkAtomicOperation(max_commit_records?: number): void;
  /**
   * @param {number} [wait_time_sec=0]
   */
  EndBulkAtomicOperation(wait_time_sec?: number): void;
  IsInBulkAtomicOperation(): boolean;
  CreateLuceneWordsDictionary(lang: string, dic_file: string): boolean;
  DecomposeRoleTypeTagsToNames(): string;
  // UpdateMetadataIfModified(dbname: string, tenancy: string, objectPtr: number, datexGlobal: DatexGlobal): boolean;
  /**
   * @param {boolean} [distributed=false]
   */
  GetDataCache(distributed: boolean): unknown; // IDataCache
  Dispose(): void;
}
