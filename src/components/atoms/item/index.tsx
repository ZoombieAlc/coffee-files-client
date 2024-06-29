import {
  ArrowTopRightOnSquareIcon,
  DocumentIcon,
  FolderIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";

type ItemProps = {
  type: "folder" | "file" | "disk" | "directAcces";
  name: string;
};

const icons = {
  folder: FolderIcon,
  file: DocumentIcon,
  disk: ServerIcon,
  directAcces: ArrowTopRightOnSquareIcon,
};

const Item = ({ type, name }: ItemProps) => {
  const IconComponent = icons[type];
  return (
    <div className="flex items-center p-2 rounded-md">
      <IconComponent className="w-6 h-6 text-coffee_text_pale_blue" />
      <p className="ml-2 text-coffee_text_pale_blue">{name}</p>
    </div>
  );
};
export default Item;
