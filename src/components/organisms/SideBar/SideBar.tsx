import { useFileContext } from '../../../contexts/FileContext';
import { Disk, Folder, File } from '../../../types';
import { 
  ChevronRightIcon, 
  ChevronDownIcon, 
  CommandLineIcon
} from '@heroicons/react/24/outline';
import FolderComponent from './Folder';
import FileComponent from './File';

const Sidebar: React.FC = () => {
  const { currentFolder, navigateTo, selectedDisk, toggleFolder, expandedFolders} = useFileContext();
  
  const getDiskName = (path: string) => {
    return path.split(':')[0]; 
  };

  const renderFolderTree = (folder: Folder, depth = 0, isDiskRoot = false) => {
    const isExpanded = expandedFolders.includes(folder.path);
  
    return (
      <div key={folder.path}>
        {isDiskRoot ? (
          <div
            onClick={() => toggleFolder(folder.path)}
            className="cursor-pointer flex items-center"
          >
            {isExpanded ? (
              <ChevronDownIcon className="h-6 w-6 text-gray-400 mr-2" />
            ) : (
              <ChevronRightIcon className="h-6 w-6 text-gray-400 mr-2" />
            )}
            <CommandLineIcon className="h-6 w-6 text-gray-400 mr-2" />
            {getDiskName(currentFolder.path)}
          </div>
        ) : (
          <FolderComponent
            folder={folder}
            depth={depth}
            isExpanded={isExpanded}
          />
        )}
  
        {isExpanded && (
          <div className="ml-4">
            {folder.folders.map(subFolder => (
              <div key={subFolder.path}>
                {renderFolderTree(subFolder, depth + 1)}
              </div>
            ))}
            {folder.files.map(file => (
              <FileComponent key={file.path} file={file} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  
  return (
    <div className="w-64 h-full p-6 z-10 bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <h1 className="font-bold text-lg items-center text-center mb-8">Coffee Files</h1>
      {selectedDisk && currentFolder && renderFolderTree(currentFolder, 0, true)}
    </div>
  );
};

export default Sidebar;