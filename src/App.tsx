import ToolBar from "./components/organisms/toolBar";

function App() {
  return (
    <>
      <div className="flex">
        <div className="bg-black h-screen w-96"></div>
        <ToolBar />
      </div>
      <p className="font-inter font-medium">Hola</p>
    </>
  );
}

export default App;
