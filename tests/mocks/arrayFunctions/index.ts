type TestObj = {
  option1: number;
  option2: number;
};

const testPrimitivesArray: number[] = [1, 2, 3, 4, 5];

const testArrayOfObjects: TestObj[] = [
  {
    option1: 1,
    option2: 2,
  },
  {
    option1: 1,
    option2: 2,
  },
];

const doc = tools.new_doc_by_name<CollaboratorDocument>("collaborator");
doc.BindToDb(DefaultDb);
alert(doc.TempData);

const xmlDocumentForTesting = tools.open_doc<CareerReserveDocument>(1)!;

const arrayFunctionsNegativeTestStringValue = "testString";
const arrayFunctionsNegativeTestNumberValue = 1234;


export {
  testPrimitivesArray,
  testArrayOfObjects,
  xmlDocumentForTesting,
  arrayFunctionsNegativeTestStringValue,
  arrayFunctionsNegativeTestNumberValue
};
