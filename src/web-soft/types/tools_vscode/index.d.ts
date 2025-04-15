declare namespace tools_vscode {
  function execute(objectId: number, jsonEnv: string): unknown;
  function add_in_application(catalogName: string, objectId: number, applicationId: number): unknown;
  function get_catalog_param(catalogName: string): unknown;
}
