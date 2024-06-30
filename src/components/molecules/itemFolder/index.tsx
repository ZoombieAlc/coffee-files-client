import { FolderIcon } from "@heroicons/react/16/solid";
import { Folder } from "../../../types";
import { useDroppable } from "@dnd-kit/core";
import { joinPath } from "../../../utils";

type ItemFolderProps = {
  item: Folder;
  isSelected: boolean;
  onClick: (e: React.MouseEvent, path: string) => void;
};

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};

function ItemFolder({ item, isSelected, onClick }: ItemFolderProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: joinPath(item.path, item.name),
  });

  return (
    <div
      ref={setNodeRef}
      className={`grid grid-cols-4 items-center p-2 rounded-md m-1 hover:bg-coffee_violet_light/70 ${
        isSelected ? "bg-coffee_violet_light/30" : ""
      } ${isOver ? "bg-coffee_text_pale_blue/30" : ""} selectable`}
      data-id={joinPath(item.path, item.name)}
      onClick={(e) => onClick(e, item.path)}
    >
      <div className="flex items-center">
        <FolderIcon className="w-6 h-6 text-coffee_text_pale_blue select-none" />
        <p className="ml-2 text-coffee_text_pale_blue select-none">
          {item.name}
        </p>
      </div>
      <p className="text-sm text-coffee_text_pale_blue">
        {formatDate(item.last_modified)}
      </p>
      <p className="text-sm text-coffee_text_pale_blue">
        {formatDate(item.created)}
      </p>
      <p className="text-sm text-coffee_text_pale_blue">{item.size} bytes</p>
    </div>
  );
}

export default ItemFolder;
