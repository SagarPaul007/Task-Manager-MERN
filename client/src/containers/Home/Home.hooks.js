import { useQuery } from "react-query";
import { fetchAPI } from "../../utils/common";

export function useFetchUser(token) {
  return useQuery(["user", token], async () => {
    const data = await fetchAPI({
      url: "/users/getUser",
      method: "GET",
    });
    return data;
  });
}
