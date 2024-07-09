import { http, httpError } from "@/lib/http";
import useSWR, { SWRConfiguration, SWRResponse } from "swr";

export const fetcher = (url: string) => http.get(url).then((res) => res.data);

export const useFetch = <T>(
  url: string,
  config?: SWRConfiguration,
): SWRResponse<T> => {
  return useSWR<T>(url, fetcher, {
    onError: httpError,
    ...config,
  });
};
