import { useState } from "react";
import { Folder } from "../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderClosed,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import FileComponent from "./FileComponent";
import { joinPath } from "../../../utils";

function FolderComponent({ folder }: { folder: Folder }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    console.log("Selected ");
  };

  return (
    <div className="flex gap-1 group">
      <div onClick={handleExpand}>
        <FontAwesomeIcon
          icon={expanded ? faFolderOpen : faFolderClosed}
          className="w-4 h-4 text-theme_text_secundary"
        />
      </div>
      <div className="flex flex-col cursor-pointer" onClick={handleSelect}>
        <div className="font-bold text-theme_text_primary">
          {folder.root ? folder.path : folder.name}
        </div>
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
