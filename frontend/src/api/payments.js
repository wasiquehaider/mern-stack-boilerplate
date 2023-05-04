import dynamicAPI from "./dynamicAPI";
import { useQuery } from "react-query";

const url = "/api/auth/payments";

const queryKey = "payments";

export default function usePaymentsHook(props) {
  const { stdId = "", term = "" } = props;

  const getPayments = useQuery(
    queryKey,
    async () =>
      await dynamicAPI("post", `${url}`, { stdId: stdId, term: term }),
    { retry: 0 }
  );

  return {
    getPayments,
  };
}
