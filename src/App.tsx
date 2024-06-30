import ItemPanel from "./components/organisms/itemPanel";
import ToolBar from "./components/organisms/toolBar";
import MainRouter from "./routers";

function App() {
  return (
    <>
      <MainRouter>
        {/* <div className="flex h-screen w-screen bg-wallpaper1">
        <div className="bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-coffee_violet_dark h-screen w-96 mx-1 my-2"></div>
        <div className="flex flex-col w-full">
          <ToolBar />
          <ItemPanel />
        </div>
      </div> */}
        <div></div>
      </MainRouter>
    </>
  );
}

export default App;
