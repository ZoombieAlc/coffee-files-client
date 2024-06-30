import React from 'react';
import { Folder as FolderType } from '../../../types';
import { ChevronRightIcon, ChevronDownIcon, FolderIcon, FolderOpenIcon } from '@heroicons/react/24/outline';
import { useFileContext } from '../../../contexts/FileContext';

interface FolderProps {
  folder: FolderType;
  depth: number;
  isExpanded: boolean;
}

const FolderComponent: React.FC<FolderProps> = ({ folder, depth, isExpanded }) => {
    const { toggleFolder } = useFileContext();
  
    return (
      <div className={`ml-${depth * 4} cursor-pointer flex items-center`}>
        <div onClick={() => toggleFolder(folder.path)} className="flex items-center">
          {isExpanded ? (
            <>
              <ChevronDownIcon className="h-5 w-5 text-gray-400 mr-2" />
              <FolderOpenIcon className="h-5 w-5 text-gray-400 mr-2" />
            </>
          ) : (
            <>
              <ChevronRightIcon className="h-5 w-5 text-gray-400 mr-2" />
              <FolderIcon className="h-5 w-5 text-gray-400 mr-2" />
            </>
          )}
        </div>
        <span>{folder.name}</span>
      </div>
    );
  };
  
export default FolderComponent;

