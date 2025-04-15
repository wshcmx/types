// This file is based on @types/activex-adodb
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/activex-adodb
declare namespace ADODB {
  type ADCPROP_ASYNCTHREADPRIORITY_ENUM =
    // PriorityAboveNormal
    4 |
    // PriorityBelowNormal
    2 |
    // PriorityHighest
    5 |
    // PriorityLowest
    1 |
    // PriorityNormal
    3;

  type ADCPROP_AUTORECALC_ENUM =
    // RecalcAlways
    1 |
    // RecalcUpFront
    0;

  type ADCPROP_UPDATECRITERIA_ENUM =
    // CriteriaAllCols
    1 |
    // CriteriaKey
    0 |
    // CriteriaTimeStamp
    3 |
    // CriteriaUpdCols
    2;

  type ADCPROP_UPDATERESYNC_ENUM =
    // ResyncAll
    15 |
    // ResyncAutoIncrement
    1 |
    // ResyncConflicts
    2 |
    // ResyncInserts
    8 |
    // ResyncNone
    0 |
    // ResyncUpdates
    4;

  type AffectEnum =
    // AffectAll
    3 |
    // AffectAllChapters
    4 |
    // AffectCurrent
    1 |
    // AffectGroup
    2;

  type BookmarkEnum =
    // BookmarkCurrent
    0 |
    // BookmarkFirst
    1 |
    // BookmarkLast
    2;

  type CommandTypeEnum =
    // CmdFile
    256 |
    // CmdStoredProc
    4 |
    // CmdTable
    2 |
    // CmdTableDirect
    512 |
    // CmdText
    1 |
    // CmdUnknown
    8 |
    // CmdUnspecified
    -1;

  type CompareEnum =
    // CompareEqual
    1 |
    // CompareGreaterThan
    2 |
    // CompareLessThan
    0 |
    // CompareNotComparable
    4 |
    // CompareNotEqual
    3;

  type ConnectModeEnum =
    // ModeRead
    1 |
    // ModeReadWrite
    3 |
    // ModeRecursive
    4194304 |
    // ModeShareDenyNone
    16 |
    // ModeShareDenyRead
    4 |
    // ModeShareDenyWrite
    8 |
    // ModeShareExclusive
    12 |
    // ModeUnknown
    0 |
    // ModeWrite
    2;

  type ConnectOptionEnum =
    // AsyncConnect
    16 |
    // ConnectUnspecified
    -1;

  type ConnectPromptEnum =
    // PromptAlways
    1 |
    // PromptComplete
    2 |
    // PromptCompleteRequired
    3 |
    // PromptNever
    4;

  type CopyRecordOptionsEnum =
    // CopyAllowEmulation
    4 |
    // CopyNonRecursive
    2 |
    // CopyOverWrite
    1 |
    // CopyUnspecified
    -1;

  type CursorLocationEnum =
    // UseClient
    3 |
    // UseClientBatch
    3 |
    // UseNone
    1 |
    // UseServer
    2;

  type CursorOptionEnum =
    // AddNew
    16778240 |
    // ApproxPosition
    16384 |
    // Bookmark
    8192 |
    // Delete
    16779264 |
    // Find
    524288 |
    // HoldRecords
    256 |
    // Index
    8388608 |
    // MovePrevious
    512 |
    // Notify
    262144 |
    // Resync
    131072 |
    // Seek
    4194304 |
    // Update
    16809984 |
    // UpdateBatch
    65536;

  type CursorTypeEnum =
    // OpenDynamic
    2 |
    // OpenForwardOnly
    0 |
    // OpenKeyset
    1 |
    // OpenStatic
    3 |
    // OpenUnspecified
    -1;

  type DataTypeEnum =
    // Array
    8192 |
    // BigInt
    20 |
    // Binary
    128 |
    // Boolean
    11 |
    // BSTR
    8 |
    // Chapter
    136 |
    // Char
    129 |
    // Currency
    6 |
    // Date
    7 |
    // DBDate
    133 |
    // DBTime
    134 |
    // DBTimeStamp
    135 |
    // Decimal
    14 |
    // Double
    5 |
    // Empty
    0 |
    // Error
    10 |
    // FileTime
    64 |
    // GUID
    72 |
    // IDispatch
    9 |
    // Integer
    3 |
    // IUnknown
    13 |
    // LongVarBinary
    205 |
    // LongVarChar
    201 |
    // LongVarWChar
    203 |
    // Numeric
    131 |
    // PropVariant
    138 |
    // Single
    4 |
    // SmallInt
    2 |
    // TinyInt
    16 |
    // UnsignedBigInt
    21 |
    // UnsignedInt
    19 |
    // UnsignedSmallInt
    18 |
    // UnsignedTinyInt
    17 |
    // UserDefined
    132 |
    // VarBinary
    204 |
    // VarChar
    200 |
    // Variant
    12 |
    // VarNumeric
    139 |
    // VarWChar
    202 |
    // WChar
    130;

  type EditModeEnum =
    // EditAdd
    2 |
    // EditDelete
    4 |
    // EditInProgress
    1 |
    // EditNone
    0;

  type ErrorValueEnum =
    // ErrBoundToCommand
    3707 |
    // ErrCannotComplete
    3732 |
    // ErrCantChangeConnection
    3748 |
    // ErrCantChangeProvider
    3220 |
    // ErrCantConvertvalue
    3724 |
    // ErrCantCreate
    3725 |
    // ErrCatalogNotSet
    3747 |
    // ErrColumnNotOnThisRow
    3726 |
    // ErrConnectionStringTooLong
    3754 |
    // ErrDataConversion
    3421 |
    // ErrDataOverflow
    3721 |
    // ErrDelResOutOfScope
    3738 |
    // ErrDenyNotSupported
    3750 |
    // ErrDenyTypeNotSupported
    3751 |
    // ErrFeatureNotAvailable
    3251 |
    // ErrFieldsUpdateFailed
    3749 |
    // ErrIllegalOperation
    3219 |
    // ErrIntegrityViolation
    3719 |
    // ErrInTransaction
    3246 |
    // ErrInvalidArgument
    3001 |
    // ErrInvalidConnection
    3709 |
    // ErrInvalidParamInfo
    3708 |
    // ErrInvalidTransaction
    3714 |
    // ErrInvalidURL
    3729 |
    // ErrItemNotFound
    3265 |
    // ErrNoCurrentRecord
    3021 |
    // ErrNotExecuting
    3715 |
    // ErrNotReentrant
    3710 |
    // ErrObjectClosed
    3704 |
    // ErrObjectInCollection
    3367 |
    // ErrObjectNotSet
    3420 |
    // ErrObjectOpen
    3705 |
    // ErrOpeningFile
    3002 |
    // ErrOperationCancelled
    3712 |
    // ErrOutOfSpace
    3734 |
    // ErrPermissionDenied
    3720 |
    // ErrPropConflicting
    3742 |
    // ErrPropInvalidColumn
    3739 |
    // ErrPropInvalidOption
    3740 |
    // ErrPropInvalidValue
    3741 |
    // ErrPropNotAllSettable
    3743 |
    // ErrPropNotSet
    3744 |
    // ErrPropNotSettable
    3745 |
    // ErrPropNotSupported
    3746 |
    // ErrProviderFailed
    3000 |
    // ErrProviderNotFound
    3706 |
    // ErrProviderNotSpecified
    3753 |
    // ErrReadFile
    3003 |
    // ErrResourceExists
    3731 |
    // ErrResourceLocked
    3730 |
    // ErrResourceOutOfScope
    3735 |
    // ErrSchemaViolation
    3722 |
    // ErrSignMismatch
    3723 |
    // ErrStillConnecting
    3713 |
    // ErrStillExecuting
    3711 |
    // ErrTreePermissionDenied
    3728 |
    // ErrUnavailable
    3736 |
    // ErrUnsafeOperation
    3716 |
    // ErrURLDoesNotExist
    3727 |
    // ErrURLNamedRowDoesNotExist
    3737 |
    // ErrVolumeNotFound
    3733 |
    // ErrWriteFile
    3004 |
    // wrnSecurityDialog
    3717 |
    // wrnSecurityDialogHeader
    3718;

  type EventReasonEnum =
    // RsnAddNew
    1 |
    // RsnClose
    9 |
    // RsnDelete
    2 |
    // RsnFirstChange
    11 |
    // RsnMove
    10 |
    // RsnMoveFirst
    12 |
    // RsnMoveLast
    15 |
    // RsnMoveNext
    13 |
    // RsnMovePrevious
    14 |
    // RsnRequery
    7 |
    // RsnResynch
    8 |
    // RsnUndoAddNew
    5 |
    // RsnUndoDelete
    6 |
    // RsnUndoUpdate
    4 |
    // RsnUpdate
    3;

  type EventStatusEnum =
    // StatusCancel
    4 |
    // StatusCantDeny
    3 |
    // StatusErrorsOccurred
    2 |
    // StatusOK
    1 |
    // StatusUnwantedEvent
    5;

  type ExecuteOptionEnum =
    // AsyncExecute
    16 |
    // AsyncFetch
    32 |
    // AsyncFetchNonBlocking
    64 |
    // ExecuteNoRecords
    128 |
    // ExecuteRecord
    2048 |
    // ExecuteStream
    1024 |
    // OptionUnspecified
    -1;

  type FieldAttributeEnum =
    // FldCacheDeferred
    4096 |
    // FldFixed
    16 |
    // FldIsChapter
    8192 |
    // FldIsCollection
    262144 |
    // FldIsDefaultStream
    131072 |
    // FldIsNullable
    32 |
    // FldIsRowURL
    65536 |
    // FldKeyColumn
    32768 |
    // FldLong
    128 |
    // FldMayBeNull
    64 |
    // FldMayDefer
    2 |
    // FldNegativeScale
    16384 |
    // FldRowID
    256 |
    // FldRowVersion
    512 |
    // FldUnknownUpdatable
    8 |
    // FldUnspecified
    -1 |
    // FldUpdatable
    4;

  type FieldEnum =
    // DefaultStream
    -1 |
    // RecordURL
    -2;

  type FieldStatusEnum =
    // FieldAlreadyExists
    26 |
    // FieldBadStatus
    12 |
    // FieldCannotComplete
    20 |
    // FieldCannotDeleteSource
    23 |
    // FieldCantConvertValue
    2 |
    // FieldCantCreate
    7 |
    // FieldDataOverflow
    6 |
    // FieldDefault
    13 |
    // FieldDoesNotExist
    16 |
    // FieldIgnore
    15 |
    // FieldIntegrityViolation
    10 |
    // FieldInvalidURL
    17 |
    // FieldIsNull
    3 |
    // FieldOK
    0 |
    // FieldOutOfSpace
    22 |
    // FieldPendingChange
    262144 |
    // FieldPendingDelete
    131072 |
    // FieldPendingInsert
    65536 |
    // FieldPendingUnknown
    524288 |
    // FieldPendingUnknownDelete
    1048576 |
    // FieldPermissionDenied
    9 |
    // FieldReadOnly
    24 |
    // FieldResourceExists
    19 |
    // FieldResourceLocked
    18 |
    // FieldResourceOutOfScope
    25 |
    // FieldSchemaViolation
    11 |
    // FieldSignMismatch
    5 |
    // FieldTruncated
    4 |
    // FieldUnavailable
    8 |
    // FieldVolumeNotFound
    21;

  type FilterGroupEnum =
    // FilterAffectedRecords
    2 |
    // FilterConflictingRecords
    5 |
    // FilterFetchedRecords
    3 |
    // FilterNone
    0 |
    // FilterPendingRecords
    1 |
    // FilterPredicate
    4;

  type GetRowsOptionEnum =
    // GetRowsRest
    -1;

  type IsolationLevelEnum =
    // XactBrowse
    256 |
    // XactChaos
    16 |
    // XactCursorStability
    4096 |
    // XactIsolated
    1048576 |
    // XactReadCommitted
    4096 |
    // XactReadUncommitted
    256 |
    // XactRepeatableRead
    65536 |
    // XactSerializable
    1048576 |
    // XactUnspecified
    -1;

  type LineSeparatorEnum =
    // CR
    13 |
    // CRLF
    -1 |
    // LF
    10;

  type LockTypeEnum =
    // LockBatchOptimistic
    4 |
    // LockOptimistic
    3 |
    // LockPessimistic
    2 |
    // LockReadOnly
    1 |
    // LockUnspecified
    -1;

  type MarshalOptionsEnum =
    // MarshalAll
    0 |
    // MarshalModifiedOnly
    1;

  type MoveRecordOptionsEnum =
    // MoveAllowEmulation
    4 |
    // MoveDontUpdateLinks
    2 |
    // MoveOverWrite
    1 |
    // MoveUnspecified
    -1;

  type ObjectStateEnum =
    // StateClosed
    0 |
    // StateConnecting
    2 |
    // StateExecuting
    4 |
    // StateFetching
    8 |
    // StateOpen
    1;

  type ParameterAttributesEnum =
    // ParamLong
    128 |
    // ParamNullable
    64 |
    // ParamSigned
    16;

  type ParameterDirectionEnum =
    // ParamInput
    1 |
    // ParamInputOutput
    3 |
    // ParamOutput
    2 |
    // ParamReturnValue
    4 |
    // ParamUnknown
    0;

  type PersistFormatEnum =
    // PersistADTG
    0 |
    // PersistXML
    1;

  type PositionEnum =
    // PosBOF
    -2 |
    // PosEOF
    -3 |
    // PosUnknown
    -1;

  type PositionEnum_Param =
    // PosBOF
    -2 |
    // PosEOF
    -3 |
    // PosUnknown
    -1;

  type PropertyAttributesEnum =
    // PropNotSupported
    0 |
    // PropOptional
    2 |
    // PropRead
    512 |
    // PropRequired
    1 |
    // PropWrite
    1024;

  type RecordCreateOptionsEnum =
    // CreateCollection
    8192 |
    // CreateNonCollection
    0 |
    // CreateOverwrite
    67108864 |
    // CreateStructDoc
    -2147483648 |
    // FailIfNotExists
    -1 |
    // OpenIfExists
    33554432;

  type RecordOpenOptionsEnum =
    // DelayFetchFields
    32768 |
    // DelayFetchStream
    16384 |
    // OpenAsync
    4096 |
    // OpenExecuteCommand
    65536 |
    // OpenOutput
    8388608 |
    // OpenRecordUnspecified
    -1 |
    // OpenSource
    8388608;

  type RecordStatusEnum =
    // RecCanceled
    256 |
    // RecCantRelease
    1024 |
    // RecConcurrencyViolation
    2048 |
    // RecDBDeleted
    262144 |
    // RecDeleted
    4 |
    // RecIntegrityViolation
    4096 |
    // RecInvalid
    16 |
    // RecMaxChangesExceeded
    8192 |
    // RecModified
    2 |
    // RecMultipleChanges
    64 |
    // RecNew
    1 |
    // RecObjectOpen
    16384 |
    // RecOK
    0 |
    // RecOutOfMemory
    32768 |
    // RecPendingChanges
    128 |
    // RecPermissionDenied
    65536 |
    // RecSchemaViolation
    131072 |
    // RecUnmodified
    8;

  type RecordTypeEnum =
    // CollectionRecord
    1 |
    // SimpleRecord
    0 |
    // StructDoc
    2;

  type ResyncEnum =
    // ResyncAllValues
    2 |
    // ResyncUnderlyingValues
    1;

  type SaveOptionsEnum =
    // SaveCreateNotExist
    1 |
    // SaveCreateOverWrite
    2;

  type SchemaEnum =
    // SchemaActions
    41 |
    // SchemaAsserts
    0 |
    // SchemaCatalogs
    1 |
    // SchemaCharacterSets
    2 |
    // SchemaCheckConstraints
    5 |
    // SchemaCollations
    3 |
    // SchemaColumnPrivileges
    13 |
    // SchemaColumns
    4 |
    // SchemaColumnsDomainUsage
    11 |
    // SchemaCommands
    42 |
    // SchemaConstraintColumnUsage
    6 |
    // SchemaConstraintTableUsage
    7 |
    // SchemaCubes
    32 |
    // SchemaDBInfoKeywords
    30 |
    // SchemaDBInfoLiterals
    31 |
    // SchemaDimensions
    33 |
    // SchemaForeignKeys
    27 |
    // SchemaFunctions
    40 |
    // SchemaHierarchies
    34 |
    // SchemaIndexes
    12 |
    // SchemaKeyColumnUsage
    8 |
    // SchemaLevels
    35 |
    // SchemaMeasures
    36 |
    // SchemaMembers
    38 |
    // SchemaPrimaryKeys
    28 |
    // SchemaProcedureColumns
    29 |
    // SchemaProcedureParameters
    26 |
    // SchemaProcedures
    16 |
    // SchemaProperties
    37 |
    // SchemaProviderSpecific
    -1 |
    // SchemaProviderTypes
    22 |
    // SchemaReferentialConstraints
    9 |
    // SchemaReferentialContraints
    9 |
    // SchemaSchemata
    17 |
    // SchemaSets
    43 |
    // SchemaSQLLanguages
    18 |
    // SchemaStatistics
    19 |
    // SchemaTableConstraints
    10 |
    // SchemaTablePrivileges
    14 |
    // SchemaTables
    20 |
    // SchemaTranslations
    21 |
    // SchemaTrustees
    39 |
    // SchemaUsagePrivileges
    15 |
    // SchemaViewColumnUsage
    24 |
    // SchemaViews
    23 |
    // SchemaViewTableUsage
    25;

  type SearchDirection =
    // SearchBackward
    -1 |
    // SearchForward
    1;

  type SearchDirectionEnum =
    // SearchBackward
    -1 |
    // SearchForward
    1;

  type SeekEnum =
    // SeekAfter
    8 |
    // SeekAfterEQ
    4 |
    // SeekBefore
    32 |
    // SeekBeforeEQ
    16 |
    // SeekFirstEQ
    1 |
    // SeekLastEQ
    2;

  type StreamOpenOptionsEnum =
    // OpenStreamAsync
    1 |
    // OpenStreamFromRecord
    4 |
    // OpenStreamUnspecified
    -1;

  type StreamReadEnum =
    // ReadAll
    -1 |
    // ReadLine
    -2;

  type StreamTypeEnum =
    // TypeBinary
    1 |
    // TypeText
    2;

  type StreamWriteEnum =
    // WriteChar
    0 |
    // WriteLine
    1 |
    // stWriteChar
    0 |
    // stWriteLine
    1;

  type StringFormatEnum =
    // ClipString
    2;

  type XactAttributeEnum =
    // XactAbortRetaining
    262144 |
    // XactAsyncPhaseOne
    524288 |
    // XactCommitRetaining
    131072 |
    // XactSyncPhaseOne
    1048576;

  class Bookmark {
    //
  }

  class Command {
    ActiveConnection: string | Connection | null;
    Cancel(): void;
    CommandStream: unknown;
    CommandText: string;
    CommandTimeout: number;
    CommandType: CommandTypeEnum;

    CreateParameter(
      Name?: string,
      Type?: DataTypeEnum,
      Direction?: ParameterDirectionEnum,
      Size?: number,
      Value?: unknown,
    ): Parameter;
    Dialect: string;
    Execute(RecordsAffected?: undefined, Parameters?: unknown[], Options?: number): Recordset | null;
    Name: string;
    NamedParameters: boolean;
    readonly Parameters: Parameters;
    Prepared: boolean;
    readonly Properties: Properties;
    readonly State: ObjectStateEnum;
  }

  class Connection {
    Attributes: XactAttributeEnum;
    BeginTrans(): number;
    Cancel(): void;
    Close(): void;
    CommandTimeout: number;
    CommitTrans(): void;
    ConnectionString: string;
    ConnectionTimeout: number;
    CursorLocation: CursorLocationEnum;
    DefaultDatabase: string;
    readonly Errors: Errors;
    Execute(
      CommandText: string,
      RecordsAffected?: undefined,
      Options?: CommandTypeEnum | ExecuteOptionEnum,
    ): Recordset | null;
    IsolationLevel: IsolationLevelEnum;
    Mode: ConnectModeEnum;
    Open(ConnectionString?: string, UserID?: string, Password?: string, Options?: number): void;
    OpenSchema(Schema: SchemaEnum, Restrictions?: string[]): Recordset;
    OpenSchema(
      Schema: -1,
      Restrictions: string[],
      SchemaID: string,
    ): Recordset;
    readonly Properties: Properties;
    Provider: string;
    RollbackTrans(): void;
    readonly State: ObjectStateEnum;
    readonly Version: string;
  }

  class Error {
    readonly HelpContext: number;
    readonly HelpFile: string;
    readonly NativeError: number;
    readonly Number: number;
    readonly Source: string;
    readonly SQLState: string;
  }

  interface Errors {
    Clear(): void;
    readonly Count: number;
    Item(Index: unknown): Error;
    Refresh(): void;
    (Index: unknown): Error;
  }

  class Field {
    AppendChunk(Data: unknown): void;
    Attributes: FieldAttributeEnum;
    DataFormat: unknown;
    DefinedSize: number;
    GetChunk(Length: number): unknown;
    readonly Name: string;
    NumericScale: number;
    readonly OriginalValue: unknown;
    Precision: number;
    readonly Properties: Properties;
    readonly Status: number;
    Type: DataTypeEnum;
    readonly UnderlyingValue: unknown;
    Value: unknown;
  }

  interface Fields {
    _Append(Name: string, Type: DataTypeEnum, DefinedSize?: number, Attrib?: FieldAttributeEnum): void;
    Append(
      Name: string,
      Type: DataTypeEnum,
      DefinedSize?: number,
      Attrib?: FieldAttributeEnum,
      FieldValue?: unknown,
    ): void;
    CancelUpdate(): void;
    readonly Count: number;
    Delete(Index: string | number): void;
    Item(Index: string | number): Field;
    Refresh(): void;
    Resync(ResyncValues?: ResyncEnum): void;
    Update(): void;
    (Index: string | number): Field;
  }

  class Parameter {
    Attributes: ParameterAttributesEnum;
    Direction: ParameterDirectionEnum;
    Name: string;
    NumericScale: number;
    Precision: number;
    readonly Properties: Properties;
    Size: number;
    Type: DataTypeEnum;
    Value: unknown;
  }

  interface Parameters {
    Append(Object: unknown): void;
    readonly Count: number;
    Delete(Index: string | number): void;
    Item(Index: string | number): Parameter;
    Refresh(): void;
    (Index: string | number): Parameter;
  }

  interface Properties {
    readonly Count: number;
    Item(Index: string | number): Property;
    Refresh(): void;
    (Index: string | number): Property;
  }

  class Property {
    Attributes: PropertyAttributesEnum;
    readonly Name: string;
    readonly Type: DataTypeEnum;
    Value: unknown;
  }

  class Record {
    ActiveConnection: string | Connection | null;
    Cancel(): void;
    Close(): void;
    CopyRecord(
      Source?: string,
      Destination?: string,
      UserName?: string,
      Password?: string,
      Options?: CopyRecordOptionsEnum,
      Async?: boolean,
    ): string;
    DeleteRecord(Source?: string, Async?: boolean): void;
    readonly Fields: Fields;
    GetChildren(): Recordset;
    Mode: ConnectModeEnum;
    MoveRecord(
      Source?: string,
      Destination?: string,
      UserName?: string,
      Password?: string,
      Options?: MoveRecordOptionsEnum,
      Async?: boolean,
    ): string;

    Open(
      Source?: string | Record | Recordset | Command,
      ActiveConnection?: string | Connection,
      Mode?: ConnectModeEnum,
      CreateOptions?: RecordCreateOptionsEnum,
      Options?: RecordOpenOptionsEnum,
      UserName?: string,
      Password?: string,
    ): void;
    readonly ParentURL: string;
    readonly Properties: Properties;
    readonly RecordType: RecordTypeEnum;
    Source: string | Recordset | Command;
    readonly State: ObjectStateEnum;
  }

  interface Recordset {
    _xClone(): Recordset;
    _xResync(AffectRecords?: AffectEnum): void;
    _xSave(FileName?: string, PersistFormat?: PersistFormatEnum): void;
    AbsolutePage: PositionEnum | number;
    AbsolutePosition: PositionEnum;
    readonly ActiveCommand?: Command | undefined;
    ActiveConnection: string | Connection | null;
    AddNew(): void;
    AddNew(Fields: (string| number)[], Values: unknown[]): void;
    AddNew(Field: string, Value: unknown): void;
    readonly BOF: boolean;
    Bookmark: Bookmark;
    CacheSize: number;
    Cancel(): void;
    CancelBatch(AffectRecords?: AffectEnum): void;
    CancelUpdate(): void;
    Clone(LockType?: LockTypeEnum): Recordset;
    Close(): void;
    Collect(Index: unknown): unknown;
    CompareBookmarks(Bookmark1: Bookmark, Bookmark2: Bookmark): CompareEnum;
    CursorLocation: CursorLocationEnum;
    CursorType: CursorTypeEnum;
    DataMember: string;
    DataSource: unknown;

    Delete(AffectRecords?: AffectEnum): void;
    readonly EditMode: EditModeEnum;
    readonly EOF: boolean;
    readonly Fields: Fields;

    Filter: string | Bookmark[] | FilterGroupEnum;

    Find(Criteria: string, SkipRecords?: number, SearchDirection?: SearchDirectionEnum, Start?: Bookmark): void;

    GetRows(
      Rows?: number,
      Start?: string | Bookmark | BookmarkEnum,
      Fields?: string | (string | number)[],
    ): unknown[];

    GetString(
      StringFormat?: StringFormatEnum,
      NumRows?: number,
      ColumnDelimeter?: string,
      RowDelimeter?: string,
      NullExpr?: string,
    ): string;
    Index: string;
    LockType: LockTypeEnum;
    MarshalOptions: MarshalOptionsEnum;
    MaxRecords: number;
    Move(NumRecords: number, Start?: string | Bookmark | BookmarkEnum): void;
    MoveFirst(): void;
    MoveLast(): void;
    MoveNext(): void;
    MovePrevious(): void;
    NextRecordset(): Recordset;

    Open(
      Source: Command,
      ActiveConnection: null,
      CursorType?: CursorTypeEnum,
      LockType?: LockTypeEnum,
      Options?: CommandTypeEnum | ExecuteOptionEnum,
    ): void;
    Open(Source?: Stream): void;

    Open(
      Source: string,
      ActiveConnection: string | Connection,
      CursorType?: CursorTypeEnum,
      LockType?: LockTypeEnum,
      Options?: CommandTypeEnum | ExecuteOptionEnum,
    ): void;
    readonly PageCount: number;
    PageSize: number;
    readonly Properties: Properties;
    readonly RecordCount: number;

    Requery(Options?: number): void;

    Resync(AffectRecords?: AffectEnum, ResyncValues?: ResyncEnum): void;

    Save(Destination: string | Stream, PersistFormat?: PersistFormatEnum): void;

    Seek(KeyValues: unknown, SeekOption?: SeekEnum): void;
    Sort: string;
    Source: string | Command;
    readonly State: ObjectStateEnum;
    readonly Status: number;
    StayInSync: boolean;
    Supports(CursorOptions: CursorOptionEnum): boolean;
    Update(): void;
    Update(Fields: (string | number)[], Values: unknown[]): void;
    Update(Field: string, Value: unknown): void;

    UpdateBatch(AffectRecords?: AffectEnum): void;
    (FieldIndex: string | number): Field;
  }

  class Stream {
    Charset: string;
    Close(): void;

    CopyTo(DestStream: Stream, CharNumber?: number): void;
    readonly EOS: boolean;
    Flush(): void;
    LineSeparator: LineSeparatorEnum;
    LoadFromFile(FileName: string): void;
    Mode: ConnectModeEnum;

    Open(
      Source?: string | Record,
      Mode?: ConnectModeEnum,
      Options?: StreamOpenOptionsEnum,
      UserName?: string,
      Password?: string,
    ): void;
    Position: number;
    Read(NumBytes?: number): unknown;
    ReadText(NumChars?: number): string;
    SaveToFile(FileName: string, Options?: SaveOptionsEnum): void;
    SetEOS(): void;
    readonly Size: number;
    SkipLine(): void;
    readonly State: ObjectStateEnum;
    Type: StreamTypeEnum;
    Write(Buffer: unknown): void;
    WriteText(Data: string, Options?: StreamWriteEnum): void;
  }
}
