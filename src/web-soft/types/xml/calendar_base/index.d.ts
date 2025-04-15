type CalendarBaseDocumentTopElem = XmlTopElem & {
  Doc: CalendarBaseDocument;
  days_text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
  sel_day_bk_color: XmlElem<string | null>;
  weekdays_text_color: XmlElem<string | null>;
  sunday_text_color: XmlElem<string | null>;
  saturday_text_color: XmlElem<string | null>;
  sundays_text_color: XmlElem<string | null>;
  saturdays_text_color: XmlElem<string | null>;
  today_text_color: XmlElem<string | null>;
  today_bk_color: XmlElem<string | null>;
  month_text_color: XmlElem<string | null>;
  pointer_text_color: XmlElem<string | null>;
  months_name: XmlElem<unknown | null>;
  months_day_num: XmlElem<unknown | null>;
  is_double: XmlElem<boolean | null>;
  display_year: XmlElem<boolean | null>;
  sel_date: XmlElem<Date | null>;
  list_date: XmlElem<Date | null>;
};

type CalendarBaseDocument = XmlDocument & {
  TopElem: CalendarBaseDocumentTopElem;
  calendar_base: CalendarBaseDocumentTopElem;
};
