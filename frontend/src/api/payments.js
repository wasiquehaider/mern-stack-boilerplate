import dynamicAPI from "./dynamicAPI";
import { useMutation, useQuery, useQueryClient } from "react-query";

const url = "/api/auth/payments";
const posturl = "/api/auth/addpayment";

const queryKey = "payments";

export default function usePaymentsHook(props) {
  const { stdId = "", term = "" } = props;
  const queryClient = useQueryClient()
  
  const getPayments = useQuery(
    queryKey,
    async () =>
      await dynamicAPI("post", `${url}`, { stdId: stdId, term: term }),
    { retry: 0 }
  );

  const postPayments = useMutation(
    async (obj) => await dynamicAPI('post', posturl, obj),
    {
      retry: 0,
      onSuccess: () => queryClient.invalidateQueries([queryKey]),
    }
  )

  return {
    getPayments,
    postPayments
  };
}

