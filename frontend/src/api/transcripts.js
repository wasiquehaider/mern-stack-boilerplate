import dynamicAPI from "./dynamicAPI";
import { useQuery } from "react-query";

const url = "/api/auth/transcripts";

const queryKey = "transcripts";

export default function useTranscriptsHook() {
  const getTranscripts = useQuery(
    queryKey,
    async () => await dynamicAPI("get", `${url}`),
    { retry: 0 }
  );

  return {
    getTranscripts,
  };
}
