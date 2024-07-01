export enum TypeFile {
  TXT,
  JPG,
  JSON,
}

export type Path = string;

export type GenericFile = {
  name: string;
  content: string;
  created_at: number;
  last_modified_at: number;
  size: number;
  type: TypeFile;
  path: Path;
};

export type FileImage = GenericFile & {
  type: TypeFile.JPG;
  src: string;
};

export type TextFile = GenericFile & {
  type: TypeFile.TXT;
};

export type File = GenericFile | FileImage | TextFile;

export type FileStructure = {
  name: string;
  created_at: number;
  last_modified_at: number;
  size: number;
  type: TypeFile;
  path: Path;
};

export type Folder = {
  name: string;
  files: FileStructure[];
  folders: Folder[];
  created_at: number;
  last_modified_at: number;
  size: number;
  path: Path;
  root: boolean;
};

export type Disk = {
  name: string;
  root: Folder;
  limit_size: number;
  occupied_size: number;
};

export type SavSettings = {
  theme: Path;
};

export type Sav = {
  settings: SavSettings;
  disks: Disk[];
};