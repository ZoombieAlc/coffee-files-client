// import React from 'react';
// import { Folder as FolderType } from '../../../types';
// import { ChevronRightIcon, ChevronDownIcon, FolderIcon, FolderOpenIcon } from '@heroicons/react/24/outline';
// import { useFileContext } from '../../../contexts/FileContext';

// interface FolderProps {
//   folder: FolderType;
//   depth: number;
//   isExpanded: boolean;
// }

// const FolderComponent: React.FC<FolderProps> = ({ folder, depth, isExpanded }) => {
//     const { toggleFolder } = useFileContext();

//     return (
//       <div className={`ml-${depth * 4} cursor-pointer flex items-center`}>
//         <div onClick={() => toggleFolder(folder.path)} className="flex items-center">
//           {isExpanded ? (
//             <>
//               <ChevronDownIcon className="h-5 w-5 text-gray-400 mr-2" />
//               <FolderOpenIcon className="h-5 w-5 text-gray-400 mr-2" />
//             </>
//           ) : (
//             <>
//               <ChevronRightIcon className="h-5 w-5 text-gray-400 mr-2" />
//               <FolderIcon className="h-5 w-5 text-gray-400 mr-2" />
//             </>
//           )}
//         </div>
//         <span>{folder.name}</span>
//       </div>
//     );
//   };

// export default FolderComponent;

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
          {folder.is_root ? folder.path : folder.name}
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
