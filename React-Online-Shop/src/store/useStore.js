import { create } from "zustand";

const useStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: async (url) => {
    set({ loading: true, error: null });
    try {
      const responce = await fetch(url);
      const result = await responce.json();
      set({ data: result, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useStore;