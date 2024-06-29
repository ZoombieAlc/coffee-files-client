import ItemPanel from "./components/organisms/itemPanel";
import ToolBar from "./components/organisms/toolBar";

function App() {
  return (
    <>
      <div className="flex h-screen bg-wallpaper1">
        <div className="isolate aspect-video rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 h-screen w-96"></div>
        <div className="flex flex-col w-full">
          <ToolBar />
          <ItemPanel />
        </div>
      </div>
    </>
  );
}

export default App;
