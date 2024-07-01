import { useEffect } from "react";
import { useFileContext } from "../contexts";
import { Folder, Sav, File, FileStructure } from "../types";
import { syncSystem } from "../client/System";
import { findFolderByPath } from "../utils";

type SavFileHook = {
  currentFolder: Folder | null;
  sav: Sav | null;
  navigateTo: (path: string) => void;
  setSav: (sav: Sav) => void;
  syncSystem: () => void;
  pasteFilesAndFolders: (clipboardFiles: File[] | undefined, clipboardFolders: Folder[] | undefined, isCut: boolean) => void;
};

export default function useSavFile(): SavFileHook {
  const { sav, setSav, currentFolder, navigateTo } = useFileContext();

  useEffect(() => {
    handleSyncSystem();
  }, []);

  function handleSetSav(sav: Sav) {
    setSav(sav);
  }

  function handleSyncSystem() {
    syncSystem().then((data) => {
      data && setSav(data.system);
    });
  }

  function pasteFilesAndFolders(clipboardFiles: File[] | undefined, clipboardFolders: Folder[] | undefined, isCut: boolean) {
    console.log("Clipboard Files:", clipboardFiles);
    console.log("Clipboard Folders:", clipboardFolders);
    console.log("isCut:", isCut);

    if (!currentFolder || !sav) {
      console.error("Current folder or sav is null or undefined.");
      return;
    }

    console.log("Current Folder:", currentFolder);
    console.log("Sav:", sav);
    
    if (!currentFolder || !sav) {
      console.error("Current folder or sav is null or undefined.");
      return;
    }

    const updatedSav = { ...sav };

    if (!clipboardFiles || !clipboardFolders) {
      console.error("Clipboard files or folders are undefined.");
      return;
    }

    if (isCut) {
      clipboardFiles.forEach(file => {
        const originalFolder = findFolderByPath(file.path, updatedSav);
        if (originalFolder) {
          originalFolder.files = originalFolder.files.filter(f => f.path !== file.path);
        }
        const updatedFile: FileStructure = {
          name: file.name,
          created_at: file.created_at,
          last_modified_at: file.last_modified_at,
          size: file.size,
          type: file.type,
          path: `${currentFolder.path}\\${file.name}`,
        };
        currentFolder.files.push(updatedFile);
      });

      clipboardFolders.forEach(folder => {
        const originalParentFolder = findFolderByPath(folder.path, updatedSav);
        if (originalParentFolder) {
          originalParentFolder.folders = originalParentFolder.folders.filter(f => f.path !== folder.path);
        }
        const updatedFolder = { ...folder, path: `${currentFolder.path}\\${folder.name}` };
        currentFolder.folders.push(updatedFolder);
      });
    } else {
      clipboardFiles.forEach(file => {
        const copiedFile: FileStructure = {
          name: file.name,
          created_at: file.created_at,
          last_modified_at: file.last_modified_at,
          size: file.size,
          type: file.type,
          path: `${currentFolder.path}\\${file.name}`,
        };
        currentFolder.files.push(copiedFile);
      });

      clipboardFolders.forEach(folder => {
        const copiedFolder = { ...folder, path: `${currentFolder.path}\\${folder.name}` };
        currentFolder.folders.push(copiedFolder);
      });
    }

    setSav(updatedSav);
  }

  return {
    sav,
    setSav: handleSetSav,
    currentFolder,
    navigateTo,
    syncSystem: handleSyncSystem,
    pasteFilesAndFolders,
  };
}