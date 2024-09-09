import { create } from "zustand";

const useTaskStore = create((set) => ({
  data: [],
  isLoding: false,
  error: null,
  fetchData: async (url) => {
    set({ isLoding: true, error: null });
    try {
      const response = await fetch(url);
      const result = await response.json();
      set({ data: result, isLoding: false });
    } catch (error) {
      set({ error: "Fail to fetch data", isLoding: false });
    }
  },
}));

export default useTaskStore;
