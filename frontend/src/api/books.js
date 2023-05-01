import dynamicAPI from "./dynamicAPI";
import { useQuery } from "react-query";

const url = "/api/auth/books";

const queryKey = "books";

export default function useBooksJournalsHook() {
  const getBooks = useQuery(
    queryKey,
    async () => await dynamicAPI("get", `${url}`),
    { retry: 0 }
  );

  return {
    getBooks,
  };
}
