import { Sav, Folder } from "../types";

export function joinPath(...paths: string[]): string {
  return paths.reduce((acc, path) => {
    if (acc.split("\\").length === 1 && path.startsWith("..")) return acc;
    while (path.startsWith("..")) {
      acc = acc.split("\\").slice(0, -1).join("\\");
      path = path.slice(3);
    }

    if (acc.endsWith("\\")) {
      return acc + path;
    } else {
      return acc + "\\" + path;
    }
  });
}

export function getDisk(path: string): string {
  return path.split(":")[0];
}

export function findFolderByPath(path: string, sav: Sav | null): Folder | null {
  if (!sav) return null;

  const [diskName, ...folderPath] = path.split("\\");
  const disk = sav.disks.find(d => d.name === diskName);

  if (!disk) return null;

  let currentFolder = disk.root;

  for (const folderName of folderPath) {
    const nextFolder = currentFolder.folders.find(f => f.name === folderName);
    if (!nextFolder) {
      return null;
    }
    currentFolder = nextFolder;
  }

  return currentFolder;
}