// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Date { }

interface DateConstructor {
  new(value?: unknown): Date;
  (value?: unknown): Date;
  (): Date;
}

 
declare let Date: DateConstructor;
/** Текущая дата системы время системы. */
declare let CurDate: Date;