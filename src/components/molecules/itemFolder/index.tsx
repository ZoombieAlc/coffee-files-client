import { FolderIcon } from "@heroicons/react/16/solid";
import { Folder } from "../../../types";
import { useDroppable } from "@dnd-kit/core";
import { formatDate, formatSize, joinPath } from "../../../utils";
import useSavFile from "../../../hooks/useSavFile";

type ItemFolderProps = {
  item: Folder;
  isSelected: boolean;
  onClick: (e: React.MouseEvent, path: string) => void;
};

function ItemFolder({ item, isSelected, onClick }: ItemFolderProps) {
  const { navigateTo } = useSavFile();

  const { isOver, setNodeRef } = useDroppable({
    id: joinPath(item.path, item.name),
  });

  const handleNavigate = () => {
    navigateTo(item.path);
  };

  return (
    <div
      ref={setNodeRef}
      className={`grid grid-cols-4 items-center p-2 rounded-md m-1 hover:bg-coffee_violet_light/70 ${
        isSelected ? "bg-coffee_violet_light/30" : ""
      } ${isOver ? "bg-coffee_text_pale_blue/30" : ""} selectable`}
      data-id={joinPath(item.path, item.name)}
      onClick={(e) => onClick(e, item.path)}
    >
      <div className="flex items-center" onClick={handleNavigate}>
        <FolderIcon className="w-6 h-6 text-coffee_text_pale_blue select-none" />
        <p className="ml-2 text-coffee_text_pale_blue select-none">
          {item.name}
        </p>
      </div>
      <p className="text-sm text-coffee_text_pale_blue">
        {formatDate(item.last_modified_at)}
      </p>
      <p className="text-sm text-coffee_text_pale_blue">
        {formatDate(item.created_at)}
      </p>
      <p className="text-sm text-coffee_text_pale_blue">
        {formatSize(item.size)}
      </p>
    </div>
  );
}

export default ItemFolder;
