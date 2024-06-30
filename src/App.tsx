import { FileProvider } from "./contexts/FileContext";
import ItemPanel from "./components/organisms/itemPanel";
import TextEditor from "./components/organisms/textEditor";
import ToolBar from "./components/organisms/toolBar";
import Sidebar from "./components/organisms/SideBar";
import MainRouter from "./routers";
import { testSav } from "./constants";

function App() {
  return (
    <MainRouter>
      <FileProvider>
        <div className="flex h-screen w-screen bg-wallpaper1">
          <div className="relative w-[18%] overflow-y-auto">
            <Sidebar savSystem={testSav} />
          </div>

          <div className="flex-1 flex flex-col">
            <ToolBar />
            <ItemPanel />
            {/* <div className="h-5/6 overflow-hidden">
              <TextEditor
                name={testFile1.name}
                content={testFile1.content}
                type="txt"
              />
            </div> */}
          </div>
        </div>
      </FileProvider>
    </MainRouter>
  );
}

export default App;
