import { FileStructure, TypeFile } from "../../../types";
import { DocumentTextIcon, DocumentIcon } from "@heroicons/react/24/outline";

const FileComponent = ({ file }: { file: FileStructure }) => {
  function handleSelect() {
    console.log("Selected");
  }

  function RenderIcon() {
    switch (file.type) {
      case TypeFile.TXT:
        return (
          <DocumentTextIcon className="h-5 w-5 text-theme_text_secundary" />
        );
      default:
        return <DocumentIcon className="h-5 w-5 text-theme_text_secundary" />;
    }
  }

  return (
    <div className="flex gap-1 cursor-pointer" onClick={handleSelect}>
      <RenderIcon />
      <span className="text-theme_text_primary">{file.name}</span>
    </div>
  );
};

export default FileComponent;
