import { useQuery } from "react-query";
import { fetchAPI } from "../../utils/common";

export function useFetchUser() {
  return useQuery(["user"], async () => {
    const data = await fetchAPI({
      url: "/users/getUser",
      method: "GET",
    });
    return data;
  });
}
