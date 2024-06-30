import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { apiURL } from "../configs";

type RequestOptions = {
  url: string;
  params?: Record<string, any>;
  data?: any;
};

type Options = {
  url: string;
  data?: any;
};

class Client {
  private api: AxiosInstance;
  private basePath: string;
  private timeout: number;

  constructor() {
    this.basePath = apiURL;
    this.api = axios.create({
      baseURL: this.basePath,
      withCredentials: true,
    });
    this.timeout = 180000;
  }

  private createRequestConfig(headers: Record<string, string> = {}) {
    return {
      baseURL: this.basePath,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    }
  }
  

  private handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  private handleError(error: AxiosError): never {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error("Request setup error: " + error.message);
    }
  }

  async get<T>({ url, params }: RequestOptions): Promise<T> {
    try {
      const response = await this.api.get<T>(url, {
        ...this.createRequestConfig(),
        params,
      });
      return this.handleResponse<T>(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async post<T>({ url, data }: RequestOptions): Promise<T> {
    try {
      const response = await this.api.post<T>(url, data, this.createRequestConfig());
      return this.handleResponse<T>(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async put<T>({ url, data }: RequestOptions): Promise<T> {
    try {
      const response = await this.api.put<T>(url, data, this.createRequestConfig());
      return this.handleResponse<T>(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async delete<T>({ url, params }: RequestOptions): Promise<T> {
    try {
      const response = await this.api.delete<T>(url, {
        ...this.createRequestConfig(),
        params,
      });
      return this.handleResponse<T>(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async patch<T>({ url, data }: RequestOptions): Promise<T> {
    try {
      const response = await this.api.patch<T>(url, data, this.createRequestConfig());
      return this.handleResponse<T>(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }
  

  postFile(options: Options) {
    let configOptions = {
      ...options,
      baseUrl: this.basePath,
      timeout: this.timeout,
    };

    let path = this.basePath + options.url;

    let headers = {
      "Content-type": "application/json",
    };

    let config = {
      ...configOptions,
      headers: headers,
      withCredentials: true,
    };

    return this.api.post(path, config.data, config);
  }

  uploadFile(options: Options) {
    let configOptions = {
      ...options,
      baseUrl: this.basePath,
      timeout: this.timeout,
    };

    let path = this.basePath + options.url;

    let headers = {
      "Content-type": "multipart/form-data",
    };

    let config = {
      ...configOptions,
      headers: headers,
      withCredentials: true,
    };

    return this.api.post(path, config.data, config);
  }
}

export default Client;