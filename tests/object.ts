type SampleObject = {
    value: number;
    some_property?: string | undefined;
};

const obj: SampleObject = {
    "value": 1
};
const obj_func = Object();
const obj_instance = new Object();

const obj_value = obj.GetOptProperty("value");
alert(obj_value);

obj.AddProperty("some_property", "new value");
obj.DeleteOptProperty("some_property");
alert(obj.GetOptProperty("some_property"));

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

type ObjectTypesEqual<A, B> =
    (<T>() => T extends A ? 1 : 2) extends
    (<T>() => T extends B ? 1 : 2) ? true : false;

declare function assertObjectType<T extends true>(value: unknown): T;

const obj_optional_with_default = obj.GetOptProperty("some_property", 0);
const obj_optional_without_default = obj.GetOptProperty("some_property");
const obj_optional_with_undefined_default = obj.GetOptProperty("some_property", undefined);
const obj_optional_with_nullable_default = obj.GetOptProperty("some_property", null);
const obj_required_with_default = obj.GetOptProperty("value", "default value");

assertObjectType<ObjectTypesEqual<typeof obj_optional_with_default, string | 0>>(obj_optional_with_default);
assertObjectType<ObjectTypesEqual<typeof obj_optional_without_default, string | undefined>>(obj_optional_without_default);
assertObjectType<ObjectTypesEqual<typeof obj_optional_with_undefined_default, string | undefined>>(obj_optional_with_undefined_default);
assertObjectType<ObjectTypesEqual<typeof obj_optional_with_nullable_default, string | null>>(obj_optional_with_nullable_default);
assertObjectType<ObjectTypesEqual<typeof obj_required_with_default, number | "default value">>(obj_required_with_default);
assertObjectType<ObjectTypesEqual<typeof obj_value, number>>(obj_value);
assertObjectType<ObjectTypesEqual<typeof obj_value_with_string_default, "default value">>(obj_value_with_string_default);
assertObjectType<ObjectTypesEqual<typeof obj_value_with_boolean_default, true>>(obj_value_with_boolean_default);
assertObjectType<ObjectTypesEqual<typeof obj_value_with_number_default, 0>>(obj_value_with_number_default);
