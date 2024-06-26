import { Folder, Sav, TextFile, TypeFile } from "../types";

export const testTheme = {
  name: "Golden Sunrise",
  colors: {
    primary: "#f1c40f",
    secondary: "#f39c12",
    background: "#f9e79f",
    text: "#000000",
  },
  opacity: 0.8,
  background_gradient: "linear-gradient(135deg, #f1c40f, #f39c12)",
  background_image: "../golden_sunrise.jpg",
  background_size: "cover",
  background_opacity: 1,
};

/*
Themes Names:
Frosted Silk - Midnight Blue
Snow Serenity - Onyx Black
Raven Lux - Emerald Green
Garnet Flame - Misty Rose
Golden Sunrise - Deep Teal
Honey Glow - Forest Green
Emerald Luxe - Ivory White
Amethyst Whisper - Light gray
Violet Dream - Midnight Blue
*/

export const testFile1: TextFile = {
  name: "testFile1.txt",
  content: "This is a test file.",
  created: 1719375076000,
  last_modified: 1719375076000,
  size: 20,
  type: TypeFile.TXT,
  path: "A:/Documents/testFile1.txt",
};

export const testFile2: TextFile = {
  name: "testFile2.txt",
  content: "This is a test file.",
  created: 1719375076000,
  last_modified: 1719375076000,
  size: 20,
  type: TypeFile.TXT,
  path: "A:/Documents/testFile2.txt",
};

export const testFile3: TextFile = {
  name: "testFile3.txt",
  content: "This is a test file.",
  created: 1719375076000,
  last_modified: 1719375076000,
  size: 20,
  type: TypeFile.TXT,
  path: "A:/Desktop/testFile3.txt",
};

export const testFile4: TextFile = {
  name: "testFile4.txt",
  content: "This is a test file.",
  created: 1719375076000,
  last_modified: 1719375076000,
  size: 20,
  type: TypeFile.TXT,
  path: "A:/testFile4.txt",
};

export const testDirectory1: Folder = {
  name: "Documents",
  files: [testFile1, testFile2],
  folders: [],
  created: 1719375076000,
  last_modified: 1719375076000,
  size: 40,
  path: "A:/",
  isRoot: false,
};

export const testDirectory2: Folder = {
  name: "Desktop",
  files: [testFile3],
  folders: [],
  created: 1719375076000,
  last_modified: 1719375076000,
  size: 20,
  path: "A:/",
  isRoot: false,
};

export const testSav: Sav = {
  settings: {
    theme: "A:/themes/golden_sunrise.json",
  },
  disks: [
    {
      name: "A", // A-Z
      limitSize: 1000000000000, // 1TB
      occupiedSize: 32000000000, // 32GB
      root: {
        name: "root",
        created: 1719375076000, // Milliseconds epoch
        last_modified: 1719375076000, // Milliseconds epoch
        size: 0, // 0 bytes
        path: "A:/",
        isRoot: true,
        folders: [testDirectory1, testDirectory2],
        files: [testFile4],
      },
    },
  ],
};
