import {
  testDirectory1,
  testDirectory2,
  testFile1,
  testFile2,
  testFile3,
  testFile4,
} from "../../../constants";
import { Folder, GenericFile } from "../../../types";
import Item from "../../molecules/item";

function ItemPanel() {
  const files: GenericFile[] = [testFile1, testFile2, testFile3, testFile4];
  const folders: Folder[] = [testDirectory1, testDirectory2];

  return (
    <div className="bg-coffee_violet_dark flex-grow m-4 overflow-auto flex flex-col p-4 rounded-xl">
      <div className="grid grid-cols-4 text-coffee_violet_light border-b border-coffee_green_aqua pb-2 mb-2">
        <span>Name</span>
        <span>Date modified</span>
        <span>Created date</span>
        <span>Size</span>
      </div>
      {folders.map((folder) => (
        <Item key={folder.path} item={folder} />
      ))}
      {files.map((file) => (
        <Item key={file.path} item={file} />
      ))}
    </div>
  );
}

export default ItemPanel;
