import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {
        id: 0,
        name: "",
        lastName: "",
        email: "",
        nickName: "",
        password: ""
      },
      idProject:0,
      nameProject:"",
      isExpanded:false,
    };
  },
  actions: {
    async getUser() {
      return this.user;
    },
    
    setUser(user) {
      this.user = user;
    },

    async getProject() {
      return this.idProject;
    },
    
    setProject(idProject) {
      this.idProject = idProject;
    },
    async getNameProject() {
      return this.idProject;
    },
    
    setNameProject(idProject) {
      this.idProject = idProject;
    },

    async getExpanded() {
      return this.nameProject;
    },
    
    setExpanded(nameProject) {
      this.nameProject = nameProject;
    },
  },
  persist: true
});
