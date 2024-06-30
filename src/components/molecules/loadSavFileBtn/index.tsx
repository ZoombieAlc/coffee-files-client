import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GlassButton from "../../atoms/glass_button";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { loadFile } from "../../../client/System";
import Loader from "../../atoms/loader";

function LoadSavFileBtn() {
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles[0]) return;

    setUploading(true);

    loadFile(acceptedFiles[0])
      .then((res) => {
        setUploading((prev) => !prev);
      })
      .catch((err) => {
        console.error(err);
        setUploading((prev) => !prev);
      });
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
      {uploading ? (
        <Loader text="Creating File System" />
      ) : (
        <div className="flex flex-col gap-8">
          <FontAwesomeIcon
            icon={faFileArrowUp}
            className={`text-6xl ${
              isDragActive ? "text-cyan-300" : "text-white"
            }`}
          />
          <span className={`${isDragActive ? "text-cyan-300" : ""}`}>
            Load .sav File
          </span>
        </div>
      )}
    </GlassButton>
  );
}

export default LoadSavFileBtn;
