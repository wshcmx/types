interface IFileStreamOptions {
  ReadCache: boolean;
}

interface FileStream {
  ReadLine(): string;
}

interface FileStreamConstructor {
  new(url: string, options?: IFileStreamOptions): FileStream;
}

 
declare const FileStream: FileStreamConstructor;
