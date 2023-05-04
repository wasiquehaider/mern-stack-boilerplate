import dynamicAPI from "./dynamicAPI";
import { useQuery } from "react-query";

const url = "/api/auth/academics";

const queryKey = "academics";

export default function useAcademicsHook(props) {
  const { stdId = "" } = props;
  const getAcademics = useQuery(
    queryKey,
    async () =>
    stdId.length >0 && await dynamicAPI("post", `${url}`, { stdId: stdId }),
    { retry: 0 }
  );

  return {
    getAcademics,
  };
}
