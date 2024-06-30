import {
  DocumentIcon,
  DocumentTextIcon,
  PhotoIcon,
} from "@heroicons/react/16/solid";
import {  GenericFile, TypeFile } from "../../../types";

type ItemFileProps = {
  item: GenericFile;
  isSelected: boolean;
  onClick: (e: React.MouseEvent, path: string) => void;
};

const fileIcons = {
  [TypeFile.TXT]: DocumentTextIcon,
  [TypeFile.JPG]: PhotoIcon,
  [TypeFile.JSON]: DocumentIcon,
};

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};

function ItemFile({ item, isSelected, onClick }: ItemFileProps) {
  const IconComponent = fileIcons[item.type];

  return (
    <div
      className={`grid grid-cols-4 items-center p-2 rounded-md m-1 hover:bg-coffee_violet_light/70 ${
        isSelected ? "bg-coffee_violet_light/30" : ""
      } selectable`}
      data-id={item.path}
      onClick={(e) => onClick(e, item.path)}
    >
      <div className="flex items-center">
        <IconComponent className="w-6 h-6 text-coffee_text_pale_blue select-none" />
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

export default ItemFile;
