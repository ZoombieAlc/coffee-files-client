import {
  ArrowTopRightOnSquareIcon,
  DocumentIcon,
  DocumentTextIcon,
  FolderIcon,
  PhotoIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";
import { Folder, GenericFile, TypeFile } from "../../../types";

type ItemProps = {
  item: GenericFile | Folder;
};

const icons = {
  [TypeFile.TXT]: DocumentTextIcon,
  [TypeFile.JPG]: PhotoIcon,
  [TypeFile.JSON]: DocumentIcon,
  folder: FolderIcon,
  disk: ServerIcon,
  directAcces: ArrowTopRightOnSquareIcon,
};
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};

function Item({ item }: ItemProps) {
  const iconType = (item as Folder).folders
    ? "folder"
    : (item as GenericFile).type;
  const IconComponent = icons[iconType];

  return (
    <div className="grid grid-cols-4 items-center p-2 rounded-md ">
      <div className="flex items-center">
        <IconComponent className="w-6 h-6 text-coffee_text_pale_blue" />
        <p className="ml-2 text-coffee_text_pale_blue">{item.name}</p>
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

export default Item;
