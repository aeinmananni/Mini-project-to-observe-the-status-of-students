import { StudentType } from "../models";
import { useFetch } from "./use-fetch";

export const useGetStudents = () => {
  const { state, loading } = useFetch<StudentType[]>({
    apiUrl: "http://localhost:5000/api/statusStudent/GET/All",
    method: "get",
  });
  return { state, loading };
};
