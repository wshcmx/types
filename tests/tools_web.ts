const regExp = tools_web.reg_exp_init();
regExp.Pattern = "pattern";
regExp.Execute("source string");

const type = tools_web.content_types.Object[107];
alert(type.ext.Value);

const auth = tools_web.user_init(Request, Request.Query);

alert(auth.access);
