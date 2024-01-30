import { useAuth } from "../../../Context/useAuth";
import axios from "axios";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();
  console.log("YES");
  const refresh = async () => {
    const response = await axios.get("http://localhost:3001/refresh", {
      withCredentials: true,
    });

    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accesToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accesToken;
  };
  return refresh;
};
