declare namespace tools_soc {
  function get_like_arrs(objectId: number, userId: number): unknown;
  function get_social_object(env: unknown, comments: number): unknown;
  function get_social_object_access(objectId: number, objectName: string): unknown;
  function create_like(env: unknown, weight: number): unknown;
  function obtain_individual_blog(objectId: number, objectTopElem: XmlTopElem): unknown;
  function create_individual_blog_entry(type: string, objectId: number, userId: number, text: string, targetId: number, objectTopElem: XmlTopElem, userTopElem: XmlTopElem, targetTopElem: XmlTopElem, arrAccessGroups: unknown[]): unknown;
  function get_user_soc_groups(curUserId: number, curUser: CurUser): unknown;
  function set_social_wall_item(formTargetTopElem: XmlTopElem, env: unknown, arrItems: unknown[], arrLikes: unknown[]): unknown;
  function get_social_wall_arrs(session: Session, arrItemList: unknown[], blogObjectId: number, blogObjectName: string, dtMaxDate: unknown, arrGroups: unknown[], arrFilters: unknown[]): unknown;
  function get_social_wall_object(session: Session, arrItemList: unknown[], blogObjectId: number, blogObjectName: string, arrGroups: unknown[], arrFilters: unknown[]): unknown;
  function get_social_item_object(session: Session, wallItemId: number, objectTopElem: XmlTopElem): unknown;
  function obtain_files_from_request(request: unknown, targetDoc: Object): unknown;
  function obtain_tags_from_request(request: unknown, targetDoc: Object): unknown;
}
