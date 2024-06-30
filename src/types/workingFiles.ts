import { Path, TypeFile } from "./system";

export interface FileCreateRequest {
    path: Path;
    name: string;
    content: string;
    type: TypeFile;
}
  
export interface FileEditRequest {
    path: Path;
    content: string;
    type: TypeFile;
}