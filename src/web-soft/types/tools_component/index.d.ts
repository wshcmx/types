declare namespace tools_component {
  function init_object_types(path: string): unknown;
  function init_tools(path: string): unknown;
  function init_commons(path: string): unknown;
  function init_generals(path: string): unknown;
  function init_main(component: unknown): unknown;
  function get_conponents_init_urls_obj(arrUrlTypes: unknown): unknown;
  function call_method(libName: string, methodName: string, arrParams: unknown): unknown;
  function update_component(libName: string, methodName: string, arrParams: unknown): unknown;
}
