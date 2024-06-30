import { useEffect, useRef, useState } from "react";

type TextEditorProps = {
  name: string;
  content: string;
  type: "txt" | "json";
  onSave: (FileName: string, FileContent: string) => void;
};

function TextEditor({ name, content, type, onSave }: TextEditorProps) {
  const [FileName, setFileName] = useState(name);
  const [FileContent, setFileContent] = useState(content);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);
  useEffect(() => {
    const lineCount = FileContent.split("\n").length;
    const newLineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);
    setLineNumbers(newLineNumbers);
  }, [FileContent]);

  const handleSave = () => {
    onSave(FileName, FileContent);
  };

  return (
    <div className="flex flex-col h-full p-4 bg-coffee_violet_dark rounded-xl">
      <div className="flex-grow flex bg-coffee_violet_darker rounded mb-2 overflow-y-auto">
        <div className="flex flex-col items-end pr-2 pt-2 h-full bg-coffee_violet_darker text-coffee_text_pale_blue">
          {lineNumbers.map((lineNumber) => (
            <span key={lineNumber} className="pr-2 text-right">
              {lineNumber}
            </span>
          ))}
        </div>
        <textarea
          ref={textAreaRef}
          className="flex-grow bg-coffee_violet_darker text-coffee_text_pale_blue rounded p-2 overflow-hidden"
          value={FileContent}
          onChange={(e) => setFileContent(e.target.value)}
          rows={20}
          style={{ resize: "none" }}
        />
      </div>
      <div className="flex items-center space-x-4">
        <select
          className="p-2 bg-coffee_violet_light text-white rounded"
          value={type}
          disabled
        >
          <option value="txt">Plain text</option>
          <option value="json">JSON</option>
        </select>
        <input
          className="flex-grow p-2 bg-coffee_violet_light/50 text-coffee_text_pale_blue"
          placeholder="Name of your file..."
          value={FileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <button
          className="p-2 bg-coffee_violet_light text-white rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default TextEditor;
