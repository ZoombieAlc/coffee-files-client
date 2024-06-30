import React, { createContext, useContext, useState } from 'react';
import { testSav } from '../constants';
import { Folder, Disk } from '../types';

interface FileContextType {
    currentFolder: Folder | null;
    selectedDisk: Disk | null;
    navigateTo: (path: string) => void;
    expandedFolders: string[];
    toggleFolder: (path: string) => void;
  }

const FileContext = createContext<FileContextType | undefined>(undefined);

interface FileProviderProps {
    children: React.ReactNode;
}

export const FileProvider: React.FC<FileProviderProps> = ({ children }) => {
    const [currentFolder, setCurrentFolder] = useState<Folder | null>(testSav.disks[0].root); 
    const [selectedDisk, setSelectedDisk] = useState<Disk | null>(testSav.disks[0]);
    const [expandedFolders, setExpandedFolders] = useState<string[]>([]);

    const navigateTo = (path: string) => {
        const parts = path.split(':');
        const diskName = parts[0];
        const folderPath = parts[1];
    
        const disk = selectedDisk;
        if (disk) {
          const findFolder = (folder: Folder, path: string): Folder | null => {
            if (folder.path === path) {
              return folder;
            }
            for (const subFolder of folder.folders) {
              const result = findFolder(subFolder, path);
              if (result) {
                return result;
              }
            }
            return null;
          };
    
          const newFolder = findFolder(disk.root, folderPath);
          if (newFolder) {
            setCurrentFolder(newFolder);
          }
        }
      };

      const toggleFolder = (path: string) => {
        setExpandedFolders(prevExpandedFolders => {
          if (prevExpandedFolders.includes(path)) {
            return prevExpandedFolders.filter(p => p !== path);
          } else {
            return [...prevExpandedFolders, path];
          }
        });
      };
            
    
      return (
        <FileContext.Provider value={{ currentFolder, selectedDisk, navigateTo, expandedFolders, toggleFolder }}>
            {children}
        </FileContext.Provider>
      );
    };

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFileContext must be used within a FileProvider');
  }
  return context;
};