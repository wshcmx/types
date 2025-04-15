type ActiveXObjectType = {
  "ADODB.Command": ADODB.Command;
  "ADODB.Connection": ADODB.Connection;
  "ADODB.Parameter": ADODB.Parameter;
  "ADODB.Record": ADODB.Record;
  "ADODB.Recordset": ADODB.Recordset;
  "ADODB.Stream": ADODB.Stream;
};

interface ActiveXObjectConstructor {
  new<T extends keyof ActiveXObjectType>(name: T): ActiveXObjectType[T];
  <T extends keyof ActiveXObjectType>(name: T): ActiveXObjectType[T];
}

declare const ActiveXObject: ActiveXObjectConstructor;
