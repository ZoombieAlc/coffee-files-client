import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GlassButton from "../../atoms/glass_button";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

function LoadSavFile() {
  return (
    <GlassButton onClick={() => {}}>
      <div className="flex flex-col gap-8">
        <FontAwesomeIcon icon={faFileArrowUp} className="text-white text-6xl" />
        <span>Load .sav File</span>
      </div>
    </GlassButton>
  );
}

export default LoadSavFile;
