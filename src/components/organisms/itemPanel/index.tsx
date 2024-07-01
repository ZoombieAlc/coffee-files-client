import { useSelectionContainer } from "@air/react-drag-to-select";
import { useState } from "react";

import ItemFolder from "../../molecules/itemFolder";
import ItemFile from "../../molecules/itemFile";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import useSavFile from "../../../hooks/useSavFile";

function ItemPanel() {
  const { currentFolder } = useSavFile();

  const folders = currentFolder?.folders || [];
  const files = currentFolder?.files || [];

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingItems, setDraggingItems] = useState<string[]>([]);

  const { DragSelection } = useSelectionContainer({
    onSelectionChange: (box) => {
      const selectedIds = Array.from(document.querySelectorAll(".selectable"))
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          return (
            rect.left < box.left + box.width &&
            rect.right > box.left &&
            rect.top < box.top + box.height &&
            rect.bottom > box.top
          );
        })
        .map((element) => element.getAttribute("data-id") || "");

      setSelectedItems(selectedIds);
    },
    isEnabled: !isDragging,
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

  const handleDragStart = (event: DragStartEvent) => {
    const draggedItemId = event.active.id.toString();
    setIsDragging(true);
    if (!selectedItems.includes(draggedItemId)) {
      setSelectedItems([draggedItemId]);
      setDraggingItems([draggedItemId]);
    } else {
      setDraggingItems(selectedItems);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    if (over) {
      const overId = over.id.toString();

      console.log(`Mover ${draggingItems.join(", ")} a ${overId}`);
    }
    setIsDragging(false);
    setDraggingItems([]);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
      <DragOverlay>
        {isDragging && draggingItems.length > 0 && (
          <div className="p-2 rounded-md bg-coffee_violet_light text-coffee_text_pale_blue">
            {draggingItems.length} items
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
}

export default ItemPanel;
