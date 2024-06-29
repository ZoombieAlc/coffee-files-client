import { createContext, useState } from "react";
import { File, Folder } from "../types";

type SelectedFileType = {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  folders: Folder[];
  setFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
};

const SelectedFileContext = createContext<SelectedFileType | null>(null);

function SelectedFileProvider({ children }: { children: React.ReactNode }) {
  const [files, setFiles] = useState<File[]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);

  const defaultValues: SelectedFileType = {
    files,
    setFiles,
    folders,
    setFolders,
  };

  return (
    <SelectedFileContext.Provider value={defaultValues}>
      {children}
    </SelectedFileContext.Provider>
  );
}

export default {
  SelectedFileContext,
  SelectedFileProvider,
};
