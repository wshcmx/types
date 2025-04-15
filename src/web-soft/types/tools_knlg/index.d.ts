declare namespace tools_knlg {
  function alerd(text: string, debug: boolean): unknown;
  function update_acquaint_assign(acquaintId: number, acquaintTopElem: XmlTopElem, del: boolean, debug: boolean): unknown;
  function activate_learning_task(o: Object): unknown;
  function set_status_learning_task_result(o: Object): unknown;
  function http_request(url: string, s: string, onServer: boolean): unknown;
  function http_request_obj(url: string, method: string, s: string, header: string, onServer: boolean): unknown;
  function get_http_request_file_id(url: string, method: string, s: string, header: string, onServer: boolean, fileUrl: string, fileName: string): unknown;
  function base64_encode(str: string): string;
  function get_article_desc(desc: string, newUrl: string, query: string): string;
}
