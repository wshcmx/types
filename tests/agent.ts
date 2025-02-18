import { Param } from "../lib/server_agent_env";

function getArray<T extends Object = {}>(
  param: T,
  name: string,
  isRequired = false,
  itemType: "number" | "string" | "date" | "boolean" = "string"
) {
  const val = getInput(param, name, isRequired);

  const arr = tools.read_object<{ __value: unknown; }[]>(val as string);

  if (!IsArray(arr)) {
    throw new Error(`Параметр ${name} не является массивом`);
  }

  if (arr.length === 0 && isRequired) {
    throw new Error(`Параметр ${name} является пустым массивом`);
  }

  const values = [];
  let originValue;
  let convertedValue;

  for (let i = 0; i < arr.length; i++) {
    originValue = arr[i].__value;

    if (originValue === null) {
      continue;
    }

    if (itemType == "number") {
      convertedValue = OptInt(originValue, null);
    } else if (itemType == "boolean") {
      convertedValue = tools_web.is_true(originValue);
    } else if (itemType == "date") {
      convertedValue = OptDate(originValue, null);
    } else {
      if (convertedValue !== null) {
        convertedValue = String(originValue);
      }
    }

    values.push(convertedValue);
  }

  return values;
}

function getBoolean<T extends Object = {}>(
  param: T,
  name: string,
  isRequired = false
) {
  return tools_web.is_true(getInput(param, name, isRequired));
}

function getDate<T extends Object = {}>(
  param: T,
  name: string,
  isRequired = false
) {
  const val = getInput(param, name, isRequired);

  if (IsEmptyValue(val)) {
    return null;
  }

  return OptDate(val as string, null);
}

function getDocument<T extends Object = {}>(
  param: T,
  name: string,
  isRequired = false,
  catalog?: string
) {
  const val = getNumber(param, name, isRequired);

  const doc = tools.open_doc(val as number);

  if (isRequired && IsEmptyValue(doc)) {
    throw new Error("Документ не найден в базе данных");
  }

  if (IsEmptyValue(doc)) {
    return null;
  }

  if (!IsEmptyValue(catalog) && doc.TopElem.Name != catalog) {
    throw new Error(`Документ, найденный по id ${val} находится в каталоге ${doc.TopElem.name}, а не в ${catalog}`);
  }

  return doc;
}

function getInput<T extends Object = {}>(
  param: T,
  name: string,
  isRequired = false
) {
  const val = param.GetOptProperty(name, null);

  if (isRequired && IsEmptyValue(val)) {
    throw new Error("Параметр не определен");
  }

  return val;
}

function getList<T extends Object = {}>(
  param: T,
  name: string,
  isRequired = false
) {
  const val = String(getInput(param, name, isRequired));
  const values = val.split(";");

  const result = [];
  let i;
  let _v;

  for (i = 0; i < values.length; i++) {
    _v = Trim(String(values[i]));

    if (IsEmptyValue(_v)) {
      continue;
    }

    result.push(_v);
  }

  return result;
}

function getNumber<T extends Object = {}>(
  param: T,
  name: string,
  isRequired = false
) {
  const val = getInput(param, name, isRequired);

  if (isRequired && IsEmptyValue(OptInt(val))) {
    throw new Error("Параметр не является числом");
  }

  const realVal = OptReal(val);
  const intVal = OptInt(realVal);

  if (realVal !== intVal) {
    return realVal;
  } else {
    return intVal;
  }
}

function getString<T extends Object = {}>(
  param: T,
  name: string,
  isRequired = false
) {
  const val = getInput(param, name, isRequired);

  if (val === null) {
    return null;
  }

  return String(val);
}

getArray(Param, "collaborators_ids", true, "number");

getBoolean(Param, "is_dismiss", true);

getDate(Param, "dismiss_date", true);

getDocument(Param, "collaborator_id", true, "collaborator");
getDocument(Param, "position_id", true, "collaborator");

getInput(Param, "id", true);
getInput(Param, "name");

getList(Param, "list_variable", true);

getNumber(Param, "number", true);

getString(Param, "string", true);

