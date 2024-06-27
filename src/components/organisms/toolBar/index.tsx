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
    <div className="m-2 p-2 bg-coffee_violet_darker w-full flex flex-col rounded-md gap-1 font-inter text-coffee_text_pale_blue">
      <div className="ml-4 p-2 font-medium text-sm flex flex-row justify-start w-4/5 gap-20">
        <div className="flex flex-col items-center px-2">
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

      <div className="flex px-2 flex-row justify-start gap-4">
        <div className="flex gap-1">
          <button>
            <ArrowLeftIcon className="w-6" />
          </button>
          <button>
            <ArrowRightIcon className="w-6" />
          </button>
          <button>
            <ArrowPathIcon className="w-6" />
          </button>
        </div>

        <div className="flex flex-row justify-around w-full items-center gap-4">
          <div className="w-full bg-coffee_violet_light rounded-md px-2 py-1 items-center flex">
            C:/Folder1/Subfolder1/
          </div>
          <input
            placeholder="Search.."
            className=" bg-coffee_violet_light rounded-md px-2 py-1 items-center flex"
          ></input>
        </div>
      </div>
    </div>
  );
}
export default ToolBar;
