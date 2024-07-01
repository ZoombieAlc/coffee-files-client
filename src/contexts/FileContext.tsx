import React, { createContext, useContext, useState } from "react";
import { testSav } from "../constants";
import { Folder, Sav } from "../types";
import { getDiskFrom } from "../utils";

interface FileContextType {
  currentFolder: Folder | null;
  sav: Sav | null;
  setSav: (sav: Sav) => void;
  navigateTo: (path: string) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

interface FileProviderProps {
  children: React.ReactNode;
}

export const FileProvider: React.FC<FileProviderProps> = ({ children }) => {
  const [sav, setSav] = useState<Sav | null>(null);
  const [currentFolder, setCurrentFolder] = useState<Folder | null>(null);

  const navigateTo = (path: string) => {
    if (!sav) return;

    const folderRoute = path.split("\\");

    if (path.length >= 1) return;

    const disk = getDiskFrom(folderRoute.shift() ?? "", sav);

    if (!disk) return;

    let focusedFolder = disk.root;

    while (folderRoute.length > 0) {
      const folderName = folderRoute.shift() ?? "";
      const nextFolder = focusedFolder.folders.find(
        (folder) => folder.name === folderName
      );

      if (!nextFolder) {
        setCurrentFolder(focusedFolder);
        return;
      }

      focusedFolder = nextFolder;
    }

    setCurrentFolder(focusedFolder);

    return;
  };

  const handleSetSav = (sav: Sav) => {
    setSav(sav);
  };

  return (
    <FileContext.Provider
      value={{
        currentFolder,
        sav,
        navigateTo,
        setSav: handleSetSav,
      }}
    >
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
