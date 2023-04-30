import { useEffect } from "react";
import dynamicAPI from "./dynamicAPI";
import { useQuery } from "react-query";

const url = "/api/auth/payments";

const queryKey = "payments";

export default function usePaymentsHook(props) {
  const { stdId = "", term = "" } = props;

  useEffect(()=> {
    if(stdId.length > 0 && term.length > 0){
      getPayments.refetch()
    }
  },[stdId, term])
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
