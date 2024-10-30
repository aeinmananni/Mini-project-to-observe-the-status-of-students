import { StudentType } from "../models";
import { useFetch } from "./use-fetch";

export const useGetStudents = () => {
  const { state, loading } = useFetch<StudentType[]>({
    apiUrl: "http://localhost:5000/api/statusStudent/GET/All",
    method: "GET",
  });
  return { state, loading };
};

// export const useSaveStudents = (value?: { data?: StudentType }) => {
//   const { state } = useFetch<StudentType>({
//     apiUrl: "http://localhost:5000/api/statusStudent/POST/Add",
//     method: "POST",
//     data: value?.data,
//   });

//   return { state };
// };
