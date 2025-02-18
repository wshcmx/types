interface PersonnelDocumentDocumentSignatureAttorney {
  /** Доверенность */
  attorney_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Файл доверенности */
  file_url: XmlElem<string | null>;
  /** Подпись файла доверенности */
  sig_file_url: XmlElem<string | null>;
}

interface PersonnelDocumentDocumentSignature extends PersonFillingBase {
  id: XmlElem<string | null>;
  serialnumber: XmlElem<string | null>;
  /** Подпись */
  signature: XmlElem<string | null>;
  /** Дата подписания */
  signature_date: XmlElem<Date | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** @default false */
  check_in_sig: XmlElem<boolean | null>;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Юридическое лицо */
  essential_id: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  signature_file_id: XmlElem<string | null>;
  /**
   * Тип подписания
   * @default person
   */
  signature_type: XmlElem<string | null>;
  /** Файлы */
  attorney: XmlElem<PersonnelDocumentDocumentSignatureAttorney | null>;
}

interface PersonnelDocumentDocumentSignatureFile {
  id: XmlElem<string | null>;
  /** Имя файла */
  file_name: XmlElem<string | null>;
  /** Путь ресурса */
  file_url: XmlElem<string | null>;
  /** Размер */
  size: XmlElem<number | null>;
  /** Файл с подписью */
  sig_file_url: XmlElem<string | null>;
}

type PersonnelDocumentDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: PersonnelDocumentDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Номер документа */
  number: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата ознакомления */
  acquaint_date: XmlElem<Date | null>;
  /** Дата подписания */
  sign_date: XmlElem<Date | null>;
  /**
   * Состояние
   * @default project
   */
  state_id: XmlElem<string | null, typeof common.personnel_document_states>;
  /** Тип кадрового документа */
  personnel_document_type_id: XmlElem<number | null, PersonnelDocumentTypeCatalogDocumentTopElem>;
  /** Подпись */
  signature: XmlElem<string | null>;
  /** Файл с sMime */
  smime_file_url: XmlElem<string | null>;
  /** ЭЦП */
  signatures: XmlMultiElem<PersonnelDocumentDocumentSignature | null>;
  /** Файлы */
  signature_files: XmlMultiElem<PersonnelDocumentDocumentSignatureFile | null>;
  /** Url файла со структурой */
  wredc_data_url: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type PersonnelDocumentDocument = XmlDocument & {
  TopElem: PersonnelDocumentDocumentTopElem;
  personnel_document: PersonnelDocumentDocumentTopElem;
  DocDesc(): string;
};
