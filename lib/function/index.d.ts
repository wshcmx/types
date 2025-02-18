/* eslint-disable @typescript-eslint/no-empty-object-type */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Function { }
interface FunctionConstructor { }

declare interface CallableFunction extends Function { }
declare interface NewableFunction extends Function { }

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare let Function: FunctionConstructor;
