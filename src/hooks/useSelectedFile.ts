import { useContext } from "react";
import { SelectedFileContext } from "../contexts/SelectedFile";

export const useSelectedFileContext = () => {
  const context = useContext(SelectedFileContext);
  if (!context) {
    throw new Error(
      "useSelectedFileContext must be used within a SelectedFileProvider"
    );
  }
  return context;
};