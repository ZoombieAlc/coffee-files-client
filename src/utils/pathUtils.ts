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
