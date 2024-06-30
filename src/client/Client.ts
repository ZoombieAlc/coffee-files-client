import api from "axios";
import { apiURL } from "../configs";

type Options = {
  url: string;
  data?: any;
};

class Client {
  authorization: string;
  basePath: string;
  api: any;
  timeout: number;

  constructor() {
    this.authorization = localStorage.getItem("token") || "";
    if (!this.authorization.startsWith("Bearer ")) {
      this.authorization = "Bearer " + this.authorization;
    }

    this.basePath = apiURL;

    this.api = api.create({
      baseURL: this.basePath,
    });

    this.timeout = 180000; // prettier-ignore
  }

  get(options: Options) {
    let configOptions = {
      ...options,
      baseUrl: this.basePath,
      timeout: this.timeout,
    };

    let path = this.basePath + options.url;

    let headers = {
      Authorization: this.authorization,
      "Content-type": "application/json",
    };

    let config = {
      ...configOptions,
      headers: headers,
      withCredentials: true,
    };

    return api.get(path, config);
  }

  post(options: Options) {
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

    return api.post(path, config.data, config);
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

    return api.post(path, config.data, config);
  }
}

export default Client;
