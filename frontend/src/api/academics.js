import dynamicAPI from "./dynamicAPI";
import { useMutation, useQuery, useQueryClient } from "react-query";

const url = "/api/auth/academics";

const queryKey = "academics";

export default function useAcademicsHook(props) {
  const { stdId = "" } = props;
  const queryClient = useQueryClient()
  const getAcademics = useQuery(
    queryKey,
    async () =>
    stdId.length >0 && await dynamicAPI("post", `${url}`, { stdId: stdId }),
    { retry: 0 }
  );
  const updateAcademic = useMutation(
    async (obj) => await dynamicAPI('put', `${url}`, obj),
    {
      retry: 0,
      onSuccess: () => queryClient.invalidateQueries([queryKey]),
    }
  )

  return {
    getAcademics,
    updateAcademic
  };
}
