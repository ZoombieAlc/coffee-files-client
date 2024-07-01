import { useEffect } from "react";
import { useFileContext } from "../contexts";
import { Folder, Sav } from "../types";
import { syncSystem } from "../client/System";

type SavFileHook = {
  currentFolder: Folder | null;
  sav: Sav | null;
  navigateTo: (path: string) => void;
  setSav: (sav: Sav) => void;
  syncSystem: () => void;
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

  return {
    sav,
    setSav: handleSetSav,
    currentFolder,
    navigateTo,
    syncSystem: handleSyncSystem,
  };
}
