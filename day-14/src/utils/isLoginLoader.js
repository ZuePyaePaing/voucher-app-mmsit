// src/loaders/tokenLoader.js
import { redirect } from "react-router-dom";
import useTokenStore from "../stores/useTokenStore"; 
import fetcher from "../utils/fetcher"; 

export async function isLoginLoader() {
  const { token } = useTokenStore.getState(); 
  if (!token) {
    return redirect("/");
  }
  try {    
const response = await fetcher(
      `${import.meta.env.VITE_BASE_URL}/verify-token`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.valid) {
      throw new Error("Invalid token");
    }
    return null;
  } catch (error) {
    useTokenStore.getState().setToken(null); 
    return redirect("/");
  }
}
