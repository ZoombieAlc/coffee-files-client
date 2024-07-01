import { Disk, Sav } from "../types";
import { getDisk } from "./pathUtils";

export function getDiskFrom(path: string, sav: Sav): Disk | null {
  const diskName = getDisk(path);
  return sav.disks.find((disk) => disk.name === diskName) || null;
}
