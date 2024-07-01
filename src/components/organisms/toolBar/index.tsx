import {
  ArrowPathIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  DocumentDuplicateIcon,
  PlusIcon,
  ScissorsIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { PencilIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import useSavFile from "../../../hooks/useSavFile";

function ToolBar() {
  const { currentFolder, syncSystem, navigateTo } = useSavFile();

  const handleSync = () => {
    syncSystem();
  };

  const handleUp = () => {
    if (currentFolder?.path.split("\\").length === 1) return;
    navigateTo(currentFolder?.path.split("\\").slice(0, -1).join("\\") ?? "");
  };

  return (
    <div className="m-2 p-2 bg-coffee_violet_darker w-full flex flex-col rounded-md gap-2 font-inter text-coffee_text_pale_blue">
      <div className="p-2 font-medium text-sm flex flex-row justify-start sm:justify-evenly gap-6 sm:w-3/5 overflow-x-auto">
        <button>
          <div className="flex flex-col items-center">
            <PlusIcon className="w-6" />
            <p>New</p>
          </div>
        </button>
        <button>
          <div className="flex flex-col items-center">
            <TrashIcon className="w-6" />
            <p>Delete</p>
          </div>
        </button>
        <button>
          <div className="flex flex-col items-center">
            <DocumentDuplicateIcon className="w-6" />
            <p>Copy</p>
          </div>
        </button>
        <button>
          <div className="flex flex-col items-center">
            <ScissorsIcon className="w-6" />
            <p>Cut</p>
          </div>
        </button>
        <button>
          <div className="flex flex-col items-center">
            <ClipboardDocumentIcon className="w-6" />
            <p>Paste</p>
          </div>
        </button>
        <button>
          <div className="flex flex-col items-center">
            <PencilIcon className="w-6" />
            <p>Edit</p>
          </div>
        </button>
      </div>

      <div className="flex flex-row justify-between items-center gap-4 px-2 mt-2">
        <div className="flex gap-2">
          <button
            className="p-1 rounded hover:bg-coffee_violet_light"
            onClick={handleUp}
          >
            <ArrowUpIcon className="w-6" />
          </button>
          <button
            className="p-1 rounded hover:bg-coffee_violet_light"
            onClick={handleSync}
          >
            <ArrowPathIcon className="w-6" />
          </button>
        </div>

        <div className="flex flex-grow items-center gap-4">
          <div className="flex-grow bg-coffee_violet_light rounded-md px-2 py-1 flex items-center">
            {currentFolder?.path}
          </div>
          <input
            placeholder="Search..."
            className="bg-coffee_violet_light rounded-md px-2 py-1 flex-shrink"
          />
        </div>
      </div>
    </div>
  );
}

export default ToolBar;
