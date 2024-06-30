import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loader({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-8">
      <FontAwesomeIcon icon={faSpinner} className="loader" />
      <span>{text}</span>
    </div>
  );
}

export default Loader;
