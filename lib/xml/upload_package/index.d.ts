type UploadPackageDocumentTopElem = XmlTopElem & {
  Doc: UploadPackageDocument;
  id: XmlElem<number | null>;
  /** ID пакета */
  code: XmlElem<string | null>;
  /** Тип пакета */
  type: XmlElem<string | null, typeof common.package_types>;
  /** Файл пакета */
  file_url: XmlElem<string | null>;
  /** Дата пакета */
  package_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type UploadPackageDocument = XmlDocument & {
  TopElem: UploadPackageDocumentTopElem;
  upload_package: UploadPackageDocumentTopElem;
  DocDesc(): string;
};
