import {
  DocumentIcon,
  DocumentTextIcon,
  PhotoIcon,
} from "@heroicons/react/16/solid";
import { FileStructure, TypeFile } from "../../../types";
import { useDraggable } from "@dnd-kit/core";
import { formatDate, formatSize } from "../../../utils";

type ItemFileProps = {
  item: FileStructure;
  isSelected: boolean;
  onClick: (e: React.MouseEvent, path: string) => void;
};

const fileIcons = {
  [TypeFile.TXT]: DocumentTextIcon,
  [TypeFile.JPG]: PhotoIcon,
  [TypeFile.JSON]: DocumentIcon,
};

function ItemFile({ item, isSelected, onClick }: ItemFileProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.path,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const IconComponent = fileIcons[item.type] ?? DocumentTextIcon;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`grid grid-cols-4 items-center p-2 rounded-md m-1 hover:bg-coffee_violet_light/70 ${
        isSelected ? "bg-coffee_violet_light/30" : ""
      } selectable`}
      data-id={item.path}
      onClick={(e) => onClick(e, item.path)}
      {...listeners}
      {...attributes}
    >
      <button>
        <div className="flex items-center">
          <IconComponent className="w-6 h-6 text-coffee_text_pale_blue select-none" />
          <p className="ml-2 text-coffee_text_pale_blue select-none">
            {item.name}
          </p>
        </div>
      </button>
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

export default ItemFile;
