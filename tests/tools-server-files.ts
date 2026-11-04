export {};

type TypesEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;

declare function assertType<T extends true>(value?: unknown): T;

const fileExists = tools.file_url_exists_server("x-local://share/report.txt");
assertType<TypesEqual<typeof fileExists, boolean>>(fileExists);
assertType<TypesEqual<ReturnType<typeof tools.file_url_exists_server>, boolean>>();

const fileText = tools.load_url_text_server("x-local://share/report.txt");
assertType<TypesEqual<typeof fileText, string>>(fileText);
assertType<TypesEqual<ReturnType<typeof tools.load_url_text_server>, string>>();

const fileData = tools.load_url_data_server("x-local://share/report.txt", 1024);
assertType<TypesEqual<typeof fileData, string>>(fileData);
assertType<TypesEqual<ReturnType<typeof tools.load_url_data_server>, string>>();

const files = tools.read_directory_server("x-local://share/", false);
const directories = tools.read_directory_server("x-local://share/", true);
assertType<TypesEqual<typeof files, string[]>>(files);
assertType<TypesEqual<typeof directories, string[]>>(directories);
assertType<TypesEqual<ReturnType<typeof tools.read_directory_server>, string[]>>();

const directoryDeleted = tools.delete_directory_server("x-local://trash/reports/");
assertType<TypesEqual<typeof directoryDeleted, boolean>>(directoryDeleted);
assertType<TypesEqual<ReturnType<typeof tools.delete_directory_server>, boolean>>();

const trashDeleted = tools.delete_trash_url_server("x-local://trash/report.txt");
assertType<TypesEqual<typeof trashDeleted, void>>(trashDeleted);
assertType<TypesEqual<ReturnType<typeof tools.delete_trash_url_server>, void>>();

const cacheReplaced = tools.replace_cached_doc_server("x-local://wtv/report.xml");
assertType<TypesEqual<typeof cacheReplaced, void>>(cacheReplaced);
assertType<TypesEqual<ReturnType<typeof tools.replace_cached_doc_server>, void>>();

const fileSize = tools.url_file_size_server("x-local://share/report.txt");
assertType<TypesEqual<typeof fileSize, number>>(fileSize);
assertType<TypesEqual<ReturnType<typeof tools.url_file_size_server>, number>>();

const archiveExtracted = tools.zip_extract_server("x-local://share/reports.zip", "x-local://trash/reports/");
assertType<TypesEqual<typeof archiveExtracted, void>>(archiveExtracted);
assertType<TypesEqual<ReturnType<typeof tools.zip_extract_server>, void>>();

// @ts-expect-error Путь к файлу должен быть строкой.
tools.file_url_exists_server(1);
// @ts-expect-error Для чтения текста нужен путь к файлу.
tools.load_url_text_server();
// @ts-expect-error Размер фрагмента задаётся числом байт.
tools.load_url_data_server("x-local://share/report.txt", "1024");
// @ts-expect-error Фильтр каталогов должен быть логическим значением.
tools.read_directory_server("x-local://share/", "true");
// @ts-expect-error Путь к каталогу должен быть строкой.
tools.delete_directory_server(false);
// @ts-expect-error Для удаления нужен URL файла.
tools.delete_trash_url_server();
// @ts-expect-error URL документа должен быть строкой.
tools.replace_cached_doc_server(1);
// @ts-expect-error URL файла должен быть строкой.
tools.url_file_size_server(1);
// @ts-expect-error Для распаковки нужен целевой URL.
tools.zip_extract_server("x-local://share/reports.zip");
