type ToolsWebTypesEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;

declare function assertToolsWebType<T extends true>(value: unknown): T;

const collectionParams = tools_web.get_collection_param();
assertToolsWebType<ToolsWebTypesEqual<typeof collectionParams.catalog_name, string>>(collectionParams.catalog_name);

const cachedNumber = tools_web.get_data_cache<number>("key");
assertToolsWebType<ToolsWebTypesEqual<typeof cachedNumber, number | null>>(cachedNumber);

const userData = tools_web.get_user_data<{ name: string }>("condition");
assertToolsWebType<ToolsWebTypesEqual<typeof userData, { name: string } | null>>(userData);
assertToolsWebType<ToolsWebTypesEqual<ReturnType<typeof tools_web.get_user_data>, unknown>>(userData);

const sumSid = tools_web.get_sum_sid("object-id", 1);
assertToolsWebType<ToolsWebTypesEqual<typeof sumSid, number>>(sumSid);

const webString = tools_web.get_web_str("name");
assertToolsWebType<ToolsWebTypesEqual<typeof webString, string>>(webString);

// @ts-expect-error Требуются идентификатор объекта и идентификатор сессии.
tools_web.get_sum_sid(1);
// @ts-expect-error Идентификатор объекта объявлен строковым.
tools_web.get_sum_sid(1, 2);
// @ts-expect-error Требуются исходная строка и имя страницы.
tools_web.put_query_string("page.html");
// @ts-expect-error Требуются ключ, значение и длительность хранения.
tools_web.set_data_cache(60);

const regExp = tools_web.reg_exp_init();
regExp.Pattern = "pattern";
regExp.Execute("source string");

const type = tools_web.content_types.Object[107];
alert(type.ext.Value);

const auth = tools_web.user_init(Request, Request.Query);

alert(auth.access);
