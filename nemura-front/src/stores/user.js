import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {
        id: 0,
        nickName: "",
        firstName: "",
        lastName: "",
        password:"",
        email: "",
      },
      project:[],
      task:[]
    };
  },
  actions: {
    async getUser() {
      return this.user;
    },
    
    setUser(user) {
      this.user = user;
    },
  },
  persist: true
});
