import dynamicAPI from "./dynamicAPI";
import { useMutation, useQuery, useQueryClient } from "react-query";

const url = "/api/auth/transcripts";

const queryKey = "transcripts";

export default function useTranscriptsHook() {
  const queryClient = useQueryClient()
  
  const getTranscripts = useQuery(
    queryKey,
    async () => await dynamicAPI("get", `${url}`),
    { retry: 0 }
  );
  const updateTranscript = useMutation(
    async (obj) => await dynamicAPI('put', `${url}`, obj),
    {
      retry: 0,
      onSuccess: () => queryClient.invalidateQueries([queryKey]),
    }
  )

  return {
    getTranscripts,
    updateTranscript
  };
}
