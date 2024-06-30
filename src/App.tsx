import ItemPanel from "./components/organisms/itemPanel";
import TextEditor from "./components/organisms/textEditor";
import ToolBar from "./components/organisms/toolBar";
import { testFile1 } from "./constants";
function App() {
  return (
    <>
      <div className="flex h-full w-screen bg-wallpaper1 my-4">
        <div className="bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-coffee_violet_dark h-screen w-96 mx-1 my-2"></div>
        <div className="flex flex-col w-full">
          <ToolBar />
          <div className="h-5/6 overflow-hidden">
            <TextEditor
              name={testFile1.name}
              content={testFile1.content}
              type="txt"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
