import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { Folder, Sav } from "../types";
import { getDiskFrom } from "../utils";

interface FileContextType {
  currentFolder: Folder | null;
  sav: Sav | null;
  setSav: Dispatch<SetStateAction<Sav | null>>;
  navigateTo: (path: string) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sav, setSav] = useState<Sav | null>(null);
  const [currentFolder, setCurrentFolder] = useState<Folder | null>(null);

  const navigateTo = (path: string) => {
    if (!sav) return;

    const folderRoute = path.split("\\");
    if (folderRoute.length < 1) return;

    const disk = getDiskFrom(folderRoute.shift() ?? "", sav);
    if (!disk) return;

    let focusedFolder = disk.root;
    while (folderRoute.length > 0) {
      const folderName = folderRoute.shift() ?? "";
      const nextFolder = focusedFolder.folders.find((folder) => folder.name === folderName);
      if (!nextFolder) {
        setCurrentFolder(focusedFolder);
        return;
      }
      focusedFolder = nextFolder;
    }

    setCurrentFolder(focusedFolder);
  };

  return (
    <FileContext.Provider value={{ currentFolder, sav, setSav, navigateTo }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
};