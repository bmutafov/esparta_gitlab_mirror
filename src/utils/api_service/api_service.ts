import axios, { AxiosResponse } from "axios";
import GlobalState from "state/GlobalState";
import { GetEndpoint, PostEndpoint } from "./endpoints.config";

type ExtractResponse<T extends GetEndpoint | PostEndpoint, U> = Extract<T, { url: U }>["response"];
type ExtractData<U> = Extract<PostEndpoint, { url: U }>["data"];
type ExtractQueryParams<U> = Extract<GetEndpoint, { url: U }>["queryParams"];
type GetMethod = Extract<GetEndpoint, { method: "GET" }>;
type PostMethod = Extract<PostEndpoint, { method: "POST" }>;

const getToken = () => {
  return GlobalState.authToken;
};

const getUrl = (url: string) => {
  return process.env.REACT_APP_API_URL + url;
};

const getCommonHeaders = () => {
  return {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  };
};

const unsafeGet = async <T = any, Q = any>(url: string, queryParams?: Q) => {
  return axios.get<T>(getUrl(url), {
    params: queryParams,
    headers: {
      ...getCommonHeaders(),
    },
  });
};

const get = async <U extends GetMethod["url"], Q extends ExtractQueryParams<U>>(
  url: U,
  queryParams?: Q,
): Promise<AxiosResponse<ExtractResponse<GetEndpoint, U>, any>> => {
  return axios.get<ExtractResponse<GetEndpoint, U>, any>(getUrl(url), {
    params: queryParams,
    headers: {
      ...getCommonHeaders(),
    },
  });
};

const unsafePost = async <T, U>(url: string, data: U) => {
  return axios.post<T, any>(getUrl(url), data, {
    headers: {
      ...getCommonHeaders(),
    },
  });
};

const post = async <U extends PostMethod["url"], K extends ExtractData<U>>(
  url: U,
  data: K,
): Promise<AxiosResponse<ExtractResponse<PostEndpoint, U>, any>> => {
  return axios.post<ExtractResponse<PostEndpoint, U>, any>(getUrl(url), data, {
    headers: {
      ...getCommonHeaders(),
    },
  });
};

const put = async <T = any, R = any>(url: string, data: T) => {
  return axios.put<R>(getUrl(url), data, {
    headers: {
      ...getCommonHeaders(),
    },
  });
};

const ApiService = {
  unsafeGet,
  unsafePost,
  get,
  post,
  put,
};

export default ApiService;
