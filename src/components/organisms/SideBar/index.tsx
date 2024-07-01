import useSavFile from "../../../hooks/useSavFile";
import FolderComponent from "./FolderComponent";

import "./style.css";

function SideBar() {
  const { sav } = useSavFile();

  console.log(sav);

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
      </div>
    </div>
  );
}

export default SideBar;
