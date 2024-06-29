import {
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  DocumentDuplicateIcon,
  PlusIcon,
  ScissorsIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { PencilIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

function ToolBar() {
  return (
    <div className="m-2 p-2 bg-coffee_violet_darker  w-full flex flex-col rounded-md gap-1 font-inter h-1/6 text-coffee_text_pale_blue">
      <div className="p-2 font-medium text-sm flex flex-row justify-around overflow-x-auto w-3/5">
        <div className="flex flex-col items-center">
          <PlusIcon className="w-6" />
          <p>New</p>
        </div>
        <div className="flex flex-col items-center">
          <TrashIcon className="w-6" />
          <p>Delete</p>
        </div>
        <div className="flex flex-col items-center">
          <DocumentDuplicateIcon className="w-6" />
          <p>Copy</p>
        </div>
        <div className="flex flex-col items-center">
          <ScissorsIcon className="w-6" />
          <p>Cut</p>
        </div>
        <div className="flex flex-col items-center">
          <ClipboardDocumentIcon className="w-6" />
          <p>Paste</p>
        </div>
        <div className="flex flex-col items-center">
          <PencilIcon className="w-6" />
          <p>Edit</p>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center gap-4 px-2 mt-2">
        <div className="flex gap-2">
          <button className="p-1 rounded hover:bg-coffee_violet_light">
            <ArrowLeftIcon className="w-6" />
          </button>
          <button className="p-1 rounded hover:bg-coffee_violet_light">
            <ArrowRightIcon className="w-6" />
          </button>
          <button className="p-1 rounded hover:bg-coffee_violet_light">
            <ArrowPathIcon className="w-6" />
          </button>
        </div>

        <div className="flex flex-grow items-center gap-7">
          <div className="flex-grow bg-coffee_violet_light rounded-md px-2 py-1 flex items-center">
            C:/Folder1/SubFolder1/
          </div>
          <input
            placeholder="Search..."
            className="bg-coffee_violet_light rounded-md px-2 py-1 w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default ToolBar;
