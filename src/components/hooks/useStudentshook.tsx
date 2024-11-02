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

export const useSaveStudents = () => {
  const { dataStatus, fetchDataFunction } = useFetchApi<StudentType>({
    apiUrl: "http://localhost:5000/api/statusStudent/POST/Add",
    method: "POST",
  });

  return { dataStatus, fetchDataFunction };
};
