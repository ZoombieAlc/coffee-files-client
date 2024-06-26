import "./App.css";
import {
  FolderIcon,
  FolderOpenIcon,
  ServerIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

function App() {
  return (
    <>
      <p className="font-inter font-medium">Hola</p>
      <TrashIcon className=" text-coffee_text_pale_blue" />
      <FolderOpenIcon className="text-coffee_violet_dark" />
      <FolderIcon className="text-coffee_violet_dark" />
      <ServerIcon className=" text-coffee_violet_dark" />
    </>
  );
}

export default App;
