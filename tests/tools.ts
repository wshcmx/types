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
