export enum TypeFile {
  TXT,
  JPG,
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
  type: TypeFile.JPG;
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
  is_root: boolean;
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
