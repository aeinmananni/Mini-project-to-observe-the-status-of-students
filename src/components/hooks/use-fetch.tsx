import axios, { AxiosRequestConfig, Method } from "axios";
import { useState } from "react";

type FetchApiType = {
  apiUrl: string;
  method: Method;
};

type DataStatusType<T> = {
  data: T | null;
  isLoading: boolean;
  errors: string | null;
};

const useFetchApi = <T,>({ apiUrl, method = "GET" }: FetchApiType) => {
  const [dataStatus, setDatastatus] = useState<DataStatusType<T>>({
    data: null,
    isLoading: false,
    errors: "",
  });

  const fetchDataFunction = async <T,>(bodyData?: T | null) => {
    setDatastatus((prev) => ({ ...prev, isLoading: true, errors: null }));

    try {
      const options: AxiosRequestConfig = {
        method,
        url: apiUrl,
        headers: {
          "Content-Type": "application/json",
        },
        data: method === "POST" || method === "PUT" ? bodyData : null,
      };
      const response = await axios(options);
      setDatastatus((prev) => ({
        ...prev,
        data: response.data,
        isLoading: false,
      }));
    } catch (error: any) {
      setDatastatus((prev) => ({
        ...prev,
        errors: error?.response?.data?.message || error?.message,
        isLoading: false,
        data: null,
      }));
    } finally {
      setDatastatus((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return { dataStatus, fetchDataFunction };
};

export default useFetchApi;
