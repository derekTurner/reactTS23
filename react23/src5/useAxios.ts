import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useEffect, useRef, useState } from 'react';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

/**
 * Generic T: represents the data returned from API request.
 *
 * Generic D: represents the body data of the Axios
 * request (usually does not exist in GET method).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAxios = <T, D = any>(axiosParams: AxiosRequestConfig<D>) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | unknown>();
  const [loading, setLoading] = useState(true);
  const controllerRef = useRef(new AbortController());
  const cancelRequest = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    const fetchData = async (params: AxiosRequestConfig<D>) => {
      try {
        const result = await axios.request<T>({
          ...params,
          signal: controllerRef.current.signal,
        });
        setResponse(result.data);
      } catch (err: AxiosError | unknown) {
        if (axios.isAxiosError(err)) {
          setError(err);
          // this will narrow the type :)
          // Access to config, request, and response
        } else {
          setError(err);
          // Just a stock error
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData(axiosParams);
  }, [axiosParams]);

  return { cancelRequest, response, error, loading };
};
