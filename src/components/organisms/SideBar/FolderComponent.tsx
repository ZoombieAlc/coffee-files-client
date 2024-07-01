import { useEffect, useState } from "react";
import { Folder } from "../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderClosed,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import FileComponent from "./FileComponent";
import { joinPath } from "../../../utils";
import useSavFile from "../../../hooks/useSavFile";

function FolderComponent({ folder }: { folder: Folder }) {
  const { navigateTo, currentFolder } = useSavFile();
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    currentFolder?.path.includes(folder.path) && setExpanded(true);
  }, [currentFolder]);

  const handleSelect = () => {
    navigateTo(folder.path);
    console.log(folder.path);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1 hover:bg-[rgba(255,255,255,.1)] rounded-sm px-[1px] transition-colors">
        <div onClick={handleExpand}>
          <FontAwesomeIcon
            icon={expanded ? faFolderOpen : faFolderClosed}
            className="w-4 h-4 text-theme_text_secundary"
          />
        </div>
        <div
          className="font-bold text-theme_text_primary cursor-pointer"
          onClick={handleSelect}
        >
          {folder.root ? folder.path : folder.name}
        </div>
      </div>
      <div className="flex flex-col pl-4">
        {expanded && (
          <div className="flex flex-col">
            {folder.folders.map((folderIn) => (
              <FolderComponent
                folder={folderIn}
                key={joinPath(folderIn.path, folderIn.name)}
              />
            ))}
            {folder.files.map((file) => (
              <FileComponent file={file} key={file.path} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FolderComponent;
