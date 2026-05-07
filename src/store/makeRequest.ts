import { HELP_CENTER_CLIENT_URL } from "@/config/constants";
import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:3000";
const HELP_CENTER_BASE_URL = "https://help.ecomminds.co.uk/api";

const api = axios.create({
  baseURL: BASE_URL,
});

const helpCenterApi = axios.create({
  baseURL: HELP_CENTER_BASE_URL,
});

export async function makeRequest<T>(url: string, options?: AxiosRequestConfig) {
  return api(url, options)
    .then((response) => ok(response.data as T))
    .catch((error) => err(error.response.data));
}

export async function makeHelpCenterRequest<T>(url: string, options?: AxiosRequestConfig) {
  return helpCenterApi(url, {
    ...options,
    headers: {
      ...options?.headers,
      "x-client": HELP_CENTER_CLIENT_URL,
    },
  })
    .then((response) => ok(response.data as T))
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        return err({ reason: "axiosError", details: error.response?.data?.details });
      }

      return err({ reason: "serverError", details: error });
    });
}

type ApiResponse<S, E extends { reason: string }> = [E, null] | [null, S];

export function ok<S>(data: S): ApiResponse<S, never> {
  return [null, data];
}

export function err<const R extends string, E extends { reason: R }>(
  error: E,
): ApiResponse<never, E> {
  return [error, null];
}
