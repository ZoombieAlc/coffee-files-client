import { createContext, useContext, useState, ReactNode } from "react";
import { File, Folder } from "../types";
import useSavFile from "../hooks/useSavFile";

type ClipboardContextType = {
  clipboardFiles: File[];
  clipboardFolders: Folder[];
  isCut: boolean;
  copyFilesAndFolders: (files: File[], folders: Folder[]) => void;
  cutFilesAndFolders: (files: File[], folders: Folder[]) => void;
  pasteFilesAndFolders: () => void;
};

const ClipboardContext = createContext<ClipboardContextType | undefined>(undefined);

export const ClipboardProvider = ({ children }: { children: ReactNode }) => {
  const [clipboardFiles, setClipboardFiles] = useState<File[]>([]);
  const [clipboardFolders, setClipboardFolders] = useState<Folder[]>([]);
  const [isCut, setIsCut] = useState<boolean>(false);
  const { pasteFilesAndFolders } = useSavFile();

  const copyFilesAndFolders = (files: File[], folders: Folder[]) => {
    setClipboardFiles(files);
    setClipboardFolders(folders);
    setIsCut(false);
  };

  const cutFilesAndFolders = (files: File[], folders: Folder[]) => {
    setClipboardFiles(files);
    setClipboardFolders(folders);
    setIsCut(true);
  };

  const handlePaste = () => {
    pasteFilesAndFolders(clipboardFiles, clipboardFolders, isCut);
  };

  return (
    <ClipboardContext.Provider
      value={{
        clipboardFiles,
        clipboardFolders,
        isCut,
        copyFilesAndFolders,
        cutFilesAndFolders,
        pasteFilesAndFolders: handlePaste,
      }}
    >
      {children}
    </ClipboardContext.Provider>
  );
};

export const useClipboardContext = () => {
  const context = useContext(ClipboardContext);
  if (!context) {
    throw new Error("useClipboardContext must be used within a ClipboardProvider");
  }
  return context;
};

