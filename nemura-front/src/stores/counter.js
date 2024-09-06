import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: ()=>{ //funcion anonima que retorna los diferentes valores
    return {
      count: 1, //valor por defecto
    }
  },
  getters: {
    times2: (state) => state.count *2
    
  },
  actions:{
    increment(val =1){
      this.count += val
    }

  }

})
