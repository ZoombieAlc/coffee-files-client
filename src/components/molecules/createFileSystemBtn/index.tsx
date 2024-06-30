import GlassButton from "../../atoms/glass_button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { createSystem } from "../../../client/System";
import { useState } from "react";
import Loader from "../../atoms/loader";

function CreateFileSystemBtn() {
  const [creating, setCreating] = useState(false);

  const handleClick = () => {
    setCreating(true);

    createSystem()
      .then(() => {
        setCreating(false);
      })
      .catch(() => {
        setCreating(false);
      });
  };

  return (
    <GlassButton onClick={handleClick} className="">
      {creating ? (
        <Loader text="Creating File System" />
      ) : (
        <div className="flex flex-col gap-8">
          <FontAwesomeIcon icon={faPlus} className="text-white text-6xl" />
          <span>Create File System</span>
        </div>
      )}
    </GlassButton>
  );
}

export default CreateFileSystemBtn;
