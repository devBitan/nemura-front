<template>
  <div class="task-container">
    <p class="task-container-title">{{ item.title }}</p>
    <div class="task-container-items">
      <div class="task-container-items-id"> <span>id: </span> {{ item.id }}</div>
      <div class="task-container-items-priority"> {{ item.priority }}</div>
    </div>
    <!-- <div class="button-container">
        <button @click="emitDelete">Eliminar</button>
        <button @click="emitEdit">edit</button>
      </div> -->
  </div>
  <!-- <div v-model="showModal"></div> -->
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  boardId: { // Identificador del proyecto/tablero
    type: String,
    required: true
  }
});

let showModal = ref(false); 
const emit = defineEmits(['delete-task', 'update-task']); // Definir los eventos que se emitirán

const emitDelete = () => {
  emit('delete-task', { boardId: props.boardId, taskId: props.item.id });
};

const emitEdit = () => {

}

// Similarmente, puedes definir funciones para emitir actualizaciones
</script>


<style lang="scss" scoped>
.task-container {
  background-color: var(--color-azulito);
  width: 100%;
  max-width: 450px;
  height: 150px;
  border-radius: 12px;
  padding: 12px;
  margin: 2rem auto;
  box-shadow: 0 0 10px rgba(210, 207, 207, 0.327);
  color: white;
  cursor: pointer;

  // &:hover {
  //   background-color: lightblue;
  // }

  // &:active {
  //   background-color: darkblue;
  // }
  .task-container-title {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.655);
    text-align: start
  }

  .task-container-items {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    align-items: center;

    .task-container-items-priority {
      background-color: #FE654F;
      border-radius: 8px;
      padding: 0 17px;
      color: black;
      font-size: 17px;
    }

    .task-container-items-id {
      font-size: 17px;
      color: rgba(175, 170, 170, 0.655);
    }

    .task-container-items-priority {
      background-color: #FE654F;
      border-radius: 8px;
      padding: 0 17px;
      color: black;
      font-size: 17px;
    }
  }
}
</style>