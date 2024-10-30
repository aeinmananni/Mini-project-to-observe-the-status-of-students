import axios from "axios";
import { useEffect, useState } from "react";

type UseFetchType<T> = {
  apiUrl: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: T;
  refresh?: boolean;
};

export const useFetch = <T,>({
  apiUrl,
  method = "GET",
  refresh,
  data,
}: UseFetchType<T>) => {
  const [state, setState] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleFetch = async () => {
    setLoading(true);
    try {
      const response = await axios({ url: apiUrl, method, data });
      setState(response.data);
      setError(""); // Clear previous errors
    } catch (err) {
      if (axios.isAxiosError(err) && err.message) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  console.log(data);

  useEffect(() => {
    handleFetch();
  }, [apiUrl, method, data, refresh]);

  return { state, loading, error };
};
