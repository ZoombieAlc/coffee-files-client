import { useSelectionContainer } from "@air/react-drag-to-select";
import { useState } from "react";
import {
  testDirectory1,
  testDirectory2,
  testFile1,
  testFile2,
  testFile3,
  testFile4,
} from "../../../constants";
import { Folder, GenericFile } from "../../../types";

import ItemFolder from "../../molecules/itemFolder";
import ItemFile from "../../molecules/itemFile";

function ItemPanel() {
  const files: GenericFile[] = [testFile1, testFile2, testFile3, testFile4];
  const folders: Folder[] = [testDirectory1, testDirectory2];
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const { DragSelection } = useSelectionContainer({
    onSelectionChange: ({ top, left, width, height }) => {
      const selectedIds = [...document.querySelectorAll(".selectable")]
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          return (
            rect.left < left + width &&
            rect.right > left &&
            rect.top < top + height &&
            rect.bottom > top
          );
        })
        .map((element) => element.getAttribute("data-id") || "");

      setSelectedItems(selectedIds);
    },
  });

  const handleItemClick = (e: React.MouseEvent, path: string) => {
    if (e.ctrlKey) {
      setSelectedItems((prevSelectedItems) => {
        if (prevSelectedItems.includes(path)) {
          return prevSelectedItems.filter((item) => item !== path);
        } else {
          return [...prevSelectedItems, path];
        }
      });
    } else {
      setSelectedItems([path]);
    }
  };

  return (
    <div className="bg-coffee_violet_dark flex-grow m-4 overflow-auto flex flex-col p-4 rounded-xl relative">
      <DragSelection />
      <div className="grid grid-cols-4 text-coffee_violet_light border-b border-coffee_green_aqua pb-2 mb-2">
        <span>Name</span>
        <span>Date modified</span>
        <span>Created date</span>
        <span>Size</span>
      </div>
      {folders.map((folder) => (
        <ItemFolder
          key={folder.path}
          item={folder}
          isSelected={selectedItems.includes(folder.path)}
          onClick={handleItemClick}
        />
      ))}
      {files.map((file) => (
        <ItemFile
          key={file.path}
          item={file}
          isSelected={selectedItems.includes(file.path)}
          onClick={handleItemClick}
        />
      ))}
    </div>
  );
}

export default ItemPanel;
