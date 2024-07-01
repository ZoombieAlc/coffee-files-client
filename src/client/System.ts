import Client from "./Client";
import { Sav } from "../types";

export function loadFile(file: File) {
  const api = new Client();

  const formData = new FormData();
  formData.append("file", new Blob([file], { type: "text/plain" }), file.name);

  return api.uploadFile({
    url: "/api/system/import",
    data: formData,
  });
}

export function createSystem(): Promise<{ system: Sav }> {
  const api = new Client();
  return api.post({
    url: "/api/system/create",
  });
}

export function syncSystem(): Promise<{ system: Sav }> {
  const api = new Client();
  return api.get({
    url: "/api/system/sync",
  });
}
