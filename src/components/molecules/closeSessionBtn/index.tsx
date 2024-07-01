import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";

function CloseSession() {
  const cookies = useCookies(["JSESSIONID"]);
  const handleClick = () => {
    cookies[2]("JSESSIONID");
  };

  return (
    <div
      className="grow bg-red-400/50 flex justify-center items-center cursor-pointer hover:scale-105 active:scale-95 transition-all rounded-md"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={faClose}
        className="w-6 h-6 text-theme_text_primary"
      />
      <span className="text-theme_text_primary">Close</span>
    </div>
  );
}

export default CloseSession;
