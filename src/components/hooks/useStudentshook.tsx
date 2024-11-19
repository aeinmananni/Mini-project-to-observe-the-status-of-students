import { useEffect, useState } from "react";
import { StudentType } from "../models";
import useFetchApi from "./use-fetch";
import { useStoreManager } from "../store/store";
export const useGetStudents = () => {
  const { refresh } = useStoreManager();
  const { dataStatus, fetchDataFunction } = useFetchApi<StudentType[]>({
    apiUrl: "http://localhost:3000/api/statusStudent/GET/All",
    method: "GET",
  });
  useEffect(() => {
    fetchDataFunction();
  }, [refresh]);
  return { dataStatus };
};

export const useSaveStudents = (id?: number) => {
  const { dataStatus, fetchDataFunction } = useFetchApi<StudentType>({
    apiUrl:
      id && id !== 0
        ? `http://localhost:3000/api/statusStudent/PUT/Edite/${id}`
        : "http://localhost:3000/api/statusStudent/POST/Add",
    method: id ? "PUT" : "POST",
  });

  return { dataStatus, fetchDataFunction };
};

export const useRemoveStudents = () => {
  const { setRefresh, refresh } = useStoreManager();
  const [id, setID] = useState<number | null>(null);
  const deleteHandlers = (id: number) => {
    setID(id);
    setRefresh((c) => !c);
  };
  const { fetchDataFunction } = useFetchApi({
    apiUrl:
      id !== null
        ? `http://localhost:3000/api/statusStudent/DELETE/remove/${id}`
        : "",
    method: "DELETE",
  });
  useEffect(() => {
    if (id !== null) {
      fetchDataFunction();
    }
  }, [id, refresh]);
  return { deleteHandlers };
};
