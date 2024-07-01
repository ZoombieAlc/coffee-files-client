export function formatDate(timeSeconds: number): string {
  const date = new Date(timeSeconds * 1000);

  return date.toLocaleTimeString() + " " + date.toLocaleDateString();
}

export function formatSize(size: number): string {
  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 ** 2) {
    return `${(size / 1024).toFixed(2)} KB`;
  }

  if (size < 1024 ** 3) {
    return `${(size / 1024 ** 2).toFixed(2)} MB`;
  }

  return `${(size / 1024 ** 3).toFixed(2)} GB`;
}
