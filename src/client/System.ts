import Client from "./Client";

export function loadFile(file: File) {
  const api = new Client();

  const formData = new FormData();
  formData.append("file", new Blob([file], { type: "text/plain" }), file.name);

  return api.uploadFile({
    url: "/api/system/import",
    data: formData,
  });
}

export function createSystem() {
  const api = new Client();
  return api.post({
    url: "/api/system/create",
  });
}
