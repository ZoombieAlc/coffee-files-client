import React from 'react';
import { GenericFile, TypeFile } from '../../../types';
import { DocumentTextIcon, DocumentIcon } from '@heroicons/react/24/outline';

interface FileProps {
  file: GenericFile;
  depth: number; 
}

const File: React.FC<FileProps> = ({ file, depth }) => {
  return (
    <div className={`ml-8 flex items-center space-x-2 cursor-pointer`}>
      {file.type === TypeFile.TXT ? (
        <DocumentTextIcon className="h-5 w-5 text-gray-400" />
      ) : (
        <DocumentIcon className="h-5 w-5 text-gray-400" />
      )}
      <span>{file.name}</span>
    </div>
  );
};

export default File;
