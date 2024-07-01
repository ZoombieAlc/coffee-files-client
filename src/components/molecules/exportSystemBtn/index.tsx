import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { exportSystem } from "../../../client/System";

function ExportSystemBtn() {
  const handleClick = () => {
    exportSystem().then((data) => {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "CupsOfCoffee.sav");
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <div
      className="grow bg-cyan-400/50 flex justify-center items-center cursor-pointer hover:scale-105 active:scale-95 transition-all rounded-md"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={faFileExport}
        className="w-6 h-6 text-theme_text_primary"
      />
      <span className="text-theme_text_primary">Export</span>
    </div>
  );
}

export default ExportSystemBtn;
