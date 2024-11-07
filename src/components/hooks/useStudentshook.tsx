import { useEffect } from "react";
import { StudentType } from "../models";
import useFetchApi from "./use-fetch";

export const useGetStudents = () => {
  const { dataStatus, fetchDataFunction } = useFetchApi<StudentType[]>({
    apiUrl: "http://localhost:5000/api/statusStudent/GET/All",
    method: "GET",
  });
  useEffect(() => {
    fetchDataFunction();
  }, []);
  return { dataStatus };
};

export const useSaveStudents = (id?: number) => {
  const { dataStatus, fetchDataFunction } = useFetchApi<StudentType>({
    apiUrl:
      id && id !== 0
        ? `http://localhost:5000/api/statusStudent/PUT/Edite/${id}`
        : "http://localhost:5000/api/statusStudent/POST/Add",
    method: id ? "PUT" : "POST",
  });

  return { dataStatus, fetchDataFunction };
};
