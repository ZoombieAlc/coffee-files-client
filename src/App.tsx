import { FileProvider } from "./contexts/FileContext";
import ItemPanel from "./components/organisms/itemPanel";
import ToolBar from "./components/organisms/toolBar";
import Sidebar from "./components/organisms/SideBar/SideBar";

function App() {
  return (
    <FileProvider>
      <div className="flex h-screen w-screen bg-wallpaper1">
        <div className="relative w-[18%] overflow-y-auto">
          <div className="absolute inset-0 backdrop-blur-md rounded-md"></div>
          <div className="relative z-10 p-4">
            <Sidebar />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <ToolBar />
          <ItemPanel />
        </div>
      </div>
    </FileProvider>
  );
}

export default App;
