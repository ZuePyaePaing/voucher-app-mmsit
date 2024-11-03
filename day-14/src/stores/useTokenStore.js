import { create } from "zustand";

const useTokenStore = create((set) => ({
  token: localStorage.getItem("token") || "",
  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ token: "" });
  },
}));

export default useTokenStore;
