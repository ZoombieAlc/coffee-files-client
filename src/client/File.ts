import Client from "./Client";
import { File, FileCreateRequest, FileEditRequest, Path, TypeFile} from "../types";

type MoveFileParams = {
    from: Path;
    to: Path;
};

class FileService {
  private client: Client;

  constructor() {
    this.client = new Client();
  }

  async uploadFile(path: Path, file: File, fileType: TypeFile): Promise<File> {
    const url = '/api/files/upload';
    const response = await this.client.patch<File>({
        url,
        data: {
          path,
          file,
          type: fileType,
        },
    });
    return response;
  }

  async createFile(request: FileCreateRequest): Promise<File> {
    const response = await this.client.post<File>({
        url: "/api/files/create",
        data: request,
    });
    return response;
  }

  async editFile(request: FileEditRequest): Promise<File> {
    const response = await this.client.patch<File>({
        url: "/api/files/edit",
        data: request,
    });
    return response;
  }

  async deleteFile(path: Path): Promise<void> {
    await this.client.delete<void>({
        url: "/api/files/delete",
        data: { path },
    });
  }

  async getFileContent(path: Path): Promise<string> {
    const response = await this.client.get<{ content: string }>({
        url: "/api/files/read",
        params: { path },
    });
    return response.content;
  }

  async moveFile(params: MoveFileParams): Promise<File> {
    const url = '/api/files/move';
    const response = await this.client.post<File>({
        url,
        data: params,
    });
    return response;
  }

}

export default FileService;