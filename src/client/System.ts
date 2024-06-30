import Client from "./Client";

export function loadFile(file: File) {
  const api = new Client();

  const formData = new FormData();
  formData.append("file", file);
  return api.post({
    url: "/api/system/import",
    data: formData,
  });
}
