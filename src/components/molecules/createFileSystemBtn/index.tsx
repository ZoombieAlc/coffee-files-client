import GlassButton from "../../atoms/glass_button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CreateFileSystemBtn() {
  return (
    <GlassButton onClick={() => {}}>
      <div className="flex flex-col gap-8">
        <FontAwesomeIcon icon={faPlus} className="text-white text-6xl" />
        <span>Create File System</span>
      </div>
    </GlassButton>
  );
}

export default CreateFileSystemBtn;
