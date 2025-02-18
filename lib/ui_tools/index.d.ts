declare namespace ui_tools {
  function eval_entry_action(entry: Object): unknown;
  function set_clipboard(value: string, title: string, showMessage: boolean): unknown;
  function get_richtext_editor_source(item: Object): unknown;
  function list_elem_delete_action(screen: unknown, listElem: unknown, topElem: unknown): unknown;
  function list_elem_open_action(screen: unknown): unknown;
  function generate_qr(screen: unknown, objectId: number, forWhat: unknown): unknown;
}
