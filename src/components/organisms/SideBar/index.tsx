import useSavFile from "../../../hooks/useSavFile";
import CloseSession from "../../molecules/closeSessionBtn";
import ExportSystemBtn from "../../molecules/exportSystemBtn";
import FolderComponent from "./FolderComponent";

import "./style.css";

function SideBar() {
  const { sav } = useSavFile();

  if (!sav) return null;

  return (
    <div className="w-full h-full flex flex-col items-center gap-2 p-2">
      <div className="w-full h-full flex flex-col items-center overflow-auto bg-glass py-2">
        <h2 className="text-white text-xl font-inter font-bold">
          Coffee Files
        </h2>
        <div className="flex-1 w-full overflow-auto pl-2">
          {sav.disks.map((disk) => (
            <FolderComponent key={disk.name} folder={disk.root} />
          ))}
        </div>
        <div className="h-14 flex gap-2 justify-between w-full px-4 pt-2">
          <CloseSession />
          <ExportSystemBtn />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
