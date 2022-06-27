import { useQuery } from "react-query";
import axios from "axios";

export function useFetchUser(token) {
  return useQuery(["user", token], async () => {
    const { data } = await axios.get("http://localhost:4000/users/getUser", {
      headers: { authorization: `Bearer ${token}` },
    });
    return data;
  });
}
