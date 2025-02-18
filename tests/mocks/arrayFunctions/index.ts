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
alert(doc.TempData);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
