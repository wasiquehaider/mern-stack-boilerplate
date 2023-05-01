import dynamicAPI from "./dynamicAPI";
import { useQuery } from "react-query";

const url = "/api/auth/faculties";

const queryKey = "faculties";

export default function useFacultiesHook() {
  const getFaculties = useQuery(
    queryKey,
    async () => await dynamicAPI("get", `${url}`),
    { retry: 0 }
  );

  return {
    getFaculties,
  };
}
