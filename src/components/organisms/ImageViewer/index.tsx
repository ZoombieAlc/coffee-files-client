import { File, TypeFile } from "../../../types";

function ImageViewer({ file }: { file: File }) {
  if (file.type !== TypeFile.JPG) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        This is not a image.
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <img src={`data:image/jpg;base64,${file.content}`} alt={file.name} />
    </div>
  );
}

export default ImageViewer;
