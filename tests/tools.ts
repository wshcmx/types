type ToolsTypesEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;

declare function assertToolsType<T extends true>(value: unknown): T;

const serverProtocol = tools.get_server_protocol();
assertToolsType<ToolsTypesEqual<typeof serverProtocol, "file" | "http" | "https" | "mailto" | "ftp" | "x-local">>(serverProtocol);

const sourceUrl = tools.file_source_url("course.xml");
assertToolsType<ToolsTypesEqual<typeof sourceUrl, string>>(sourceUrl);

const installedObjectCount = tools.create_inst_package("package.xml", 1, "source", "package-id", "mode", true);
assertToolsType<ToolsTypesEqual<typeof installedObjectCount, number>>(installedObjectCount);

declare const mergedTools: WtvTools;
const mergedSourceUrl = mergedTools.file_source_url("course.xml");
assertToolsType<ToolsTypesEqual<typeof mergedSourceUrl, string>>(mergedSourceUrl);

const shortPdfResult = tools.html_to_pdf("<p>Text</p>", "resources");
const fullPdfResult = tools.html_to_pdf("<p>Text</p>", "resources", "output.pdf", 0);
assertToolsType<ToolsTypesEqual<typeof shortPdfResult, boolean>>(shortPdfResult);
assertToolsType<ToolsTypesEqual<typeof fullPdfResult, boolean>>(fullPdfResult);

const inferredDocument = tools.open_doc(1);
assertToolsType<ToolsTypesEqual<typeof inferredDocument, XmlDocument | undefined>>(inferredDocument);

const originalPackageResult = tools.create_data_package(1, 2, "package-id", Date());
assertToolsType<ToolsTypesEqual<typeof originalPackageResult, string>>(originalPackageResult);
tools.create_data_package(1, 2, "package-id", Date(), 3, "primary-key");

// @ts-expect-error Путь к источнику должен быть строкой.
tools.file_source_url(1);
// @ts-expect-error Для создания установочного пакета требуются все аргументы.
tools.create_inst_package("package.xml", 1, "source", "package-id", "mode");
// @ts-expect-error Флаг стандартного пакета должен быть логическим значением.
tools.create_inst_package("package.xml", 1, "source", "package-id", "mode", "true");

const collaboratorId = UniqueID();
const collaborator = tools.open_doc<CollaboratorDocument>(collaboratorId);
const collaborator2 = tools.new_doc_by_name<CollaboratorDocument>("collaborator");

if (collaborator !== undefined) {
  if (collaborator.TopElem.position_id.OptForeignElem !== undefined) {
    const foreignName = tools.get_foreign_field(collaborator.TopElem.position_id, "basic_rate", "");
    alert(foreignName);
  }
}

tools.object_filling(null, collaborator2.TopElem, collaboratorId, null);

tools.common_filling("collaborator", collaborator2.TopElem, collaboratorId);
tools.common_filling("collaborator", collaborator2.TopElem, collaboratorId, collaborator?.TopElem, true);

const authorizationLibrary = tools.get_object_assembly("Authorization");
authorizationLibrary.GetValidateADALWithTokenAttributes(
  "ad_server_tenant",
  "ad_clientid",
  "resourceId",
  "token",
  "properties",
  "stsDiscoveryEndPoint"
);

const cryptoPro = tools.get_object_assembly("CryptoPro");
cryptoPro.CloseStore();

alert(tools.current_user_boss_type);

const careerReserveDocument = tools.new_doc_by_name<CareerReserveDocument>("career_reserve");

tools.common_filling("collaborator", careerReserveDocument.TopElem, careerReserveDocument.DocID);
tools.common_filling("collaborator", careerReserveDocument.TopElem.tutors, careerReserveDocument.DocID);

const assembly = tools.dotnet_host?.Object.GetAssembly("Rusal.Excel.Document");

type CreateReportResult = {
  data: string[]
};

type ExcelCell = {
  Column: number;
  Copy(cell: ExcelCell): void;
};

if (assembly) {
  const result = assembly.CallClassStaticMethod<CreateReportResult>(
    "Rusal.Excel.Document",
    "createReport",
    [collaborator]
  );

  IsArray(result.data);

  const classInstance = assembly.CreateClassObject<ExcelCell>("ExcelCell");

  const columnNumber = classInstance.Column;
  alert(columnNumber);

  classInstance.Copy(classInstance);
}
