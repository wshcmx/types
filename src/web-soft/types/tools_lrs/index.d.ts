declare namespace tools_lrs {
  function check_IRI(iRI: string): unknown;
  function get_person_id_from_actor(actor: Object): unknown;
  function create_statement(statement: Object, code: string, lRSId: number, arrMultipart: unknown[]): unknown;
  function id_to_uuid(id: string, secId: string): unknown;
  function uuid_to_id(id: string): unknown;
  function actor_from_person(user: Object): unknown;
  function launch_cmi5_learning(activeObject: Object, object: Object, user: Object, o: Object): unknown;
  function get_fetch_token(userId: number): unknown;
  function get_fetch_obj(params: Object): unknown;
  function get_agent_json_str(agent: Object): unknown;
}
