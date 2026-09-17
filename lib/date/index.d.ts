/* eslint-disable @typescript-eslint/no-misused-new */
interface Date {
  new(value?: string): Date;
  new(year: number, month: number, date: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
  (): Date;
}

declare let Date: Date;
/** Текущая дата системы время системы. */
declare let CurDate: Date;