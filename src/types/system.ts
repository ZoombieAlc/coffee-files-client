export enum TypeFile {
  TXT,
  IMG,
  JSON,
}

export type Path = string;

export type GenericFile = {
  name: string;
  content: string;
  created: number;
  last_modified: number;
  size: number;
  type: TypeFile;
  path: Path;
};

export type FileImage = GenericFile & {
  type: TypeFile.IMG;
  src: string;
};

export type TextFile = GenericFile & {
  type: TypeFile.TXT;
};

export type File = GenericFile | FileImage | TextFile;

export type Folder = {
  name: string;
  files: File[];
  folders: Folder[];
  created: number;
  last_modified: number;
  size: number;
  path: Path;
  isRoot: boolean;
};

export type disk = {
  name: string;
  root: Folder;
  limitSize: number;
  occupiedSize: number;
};

export type SavSettings = {
  theme: Path;
};

export type Sav = {
  settings: SavSettings;
  disks: disk[];
};
