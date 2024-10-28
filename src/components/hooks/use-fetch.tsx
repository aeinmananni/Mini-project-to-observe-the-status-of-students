import axios from "axios";
import { useEffect, useState } from "react";
type UseFetchType = {
  apiUrl: string;
  method?: string;
  refresh?: boolean;
};

export const useFetch = <T,>({ apiUrl, method, refresh }: UseFetchType) => {
  const [state, setState] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handelFetch = async () => {
    setLoading(true);

    try {
      const response = await axios({ url: apiUrl, method });
      setState(response.data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handelFetch();
  }, [refresh]);

  return { state, loading, error };
};
