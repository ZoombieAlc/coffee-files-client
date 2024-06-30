import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GlassButton from "../../atoms/glass_button";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

function LoadSavFileBtn() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles[0]) return;

    console.log(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDrop,
    accept: {
      "application/octet-stream": [".sav"],
    },
    maxFiles: 1,
  });

  return (
    <GlassButton
      onClick={() => {}}
      className={`${
        isDragActive ? "border-dashed border-cyan-500 border-2" : ""
      }`}
      otherProps={getRootProps()}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col gap-8">
        <FontAwesomeIcon icon={faFileArrowUp} className="text-white text-6xl" />
        <span className={`${isDragActive ? "text-cyan-300" : ""}`}>
          Load .sav File
        </span>
      </div>
    </GlassButton>
  );
}

export default LoadSavFileBtn;
