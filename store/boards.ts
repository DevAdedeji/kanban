import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {}, {
  persist: {
    storage: persistedState.localStorage,
  },
});
