import { useAuth } from "../../../Context/useAuth";
import axios from "axios";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.get("http://localhost:3001/refresh", {
      withCredentials: true,
    });
    if (!response?.data) {
      return alert("Connection lost .");
    } else {
      setAuth((prev) => {
        return {
          ...prev,
          email: response.data.UserMail,
          accessToken: response.data.accessToken,
        };
      });
    }

    return response.data.accessToken;
  };
  return refresh;
};
