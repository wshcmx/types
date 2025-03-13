type SampleObject = {
    value: number;
};

const obj: SampleObject = {
    "value": 1
};
const obj_func = Object();
const obj_instance = new Object();

const obj_value = obj.GetOptProperty("value");
alert(obj_value);

const obj_value_non_existed = (obj as Object).GetOptProperty("value1");
alert(obj_value_non_existed);

const obj_func_value = obj_func.GetOptProperty("value");
alert(obj_func_value);

const obj_instance_value = obj_instance.GetOptProperty("value");
alert(obj_instance_value);

const obj_value_with_string_default = obj.GetOptProperty("value1", "default value");
OpenDocFromStr(obj_value_with_string_default);

const obj_value_with_boolean_default = obj.GetOptProperty("value1", true);
DeleteDoc(UrlFromDocID(1), obj_value_with_boolean_default);

const obj_value_with_number_default = obj.GetOptProperty("value1", 0);
UrlFromDocID(obj_value_with_number_default);

