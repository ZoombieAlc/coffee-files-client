import { FileProvider, ClipboardProvider } from "./contexts";
import SelectedFileProvider from "./contexts/SelectedFile";
import ItemPanel from "./components/organisms/itemPanel";
import TextEditor from "./components/organisms/textEditor";
import ToolBar from "./components/organisms/toolBar";
import Sidebar from "./components/organisms/SideBar";
import MainRouter from "./routers";

function App() {
  return (
    <MainRouter>
      <SelectedFileProvider>
      <FileProvider>
        <ClipboardProvider>
        <div className="flex h-screen w-screen bg-wallpaper1">
          <div className="relative w-[18%] overflow-y-auto">
            <Sidebar />
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
          </ClipboardProvider>
        </FileProvider>
        </SelectedFileProvider>
    </MainRouter>
  );
}

export default App;
