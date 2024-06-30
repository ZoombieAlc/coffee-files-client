export function joinPath(...paths: string[]): string {
  return paths.reduce((acc, path) => {
    if (acc.endsWith("\\")) {
      return acc + path;
    } else {
      return acc + "\\" + path;
    }
  });
}
