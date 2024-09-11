<template>
  <div class="task-container" @click="editSelectedAssignment(item)">
    <p class="task-container-title">{{ item.title }}</p>
    <div class="task-container-items">
      <div class="task-container-items-id"> <span>id: </span> {{ item.id }}</div>
      <div class="task-container-items-priority"> {{ item.priority }}</div>
    </div>
  </div>
  <div class="modal" v-if="showModal">
    <form @submit.prevent="saveEditAssignment">
      <div class="modal-container" >
        <div class="modal-container-title">
          <!-- <h3>{{ item.title }}</h3> -->
           <input type="text" v-model="selectedAssignment.title">
          <p>id: {{ item.id }}</p>
        </div>
        <div class="modal-container-priority">
          <p>Priority</p>
          <button>{{ selectedAssignment.priority }}</button>
          <button>{{ selectedAssignment.priority }}</button>
          <button>{{ selectedAssignment.priority }}</button>
        </div>
      </div>

      <textarea name="" id="" placeholder="escribe " class="modal-container-textarea"></textarea>
      <div class="modal-container-btns">
        <button @click="changeModal()" class="close">Close</button>
        <button type="submit" class="save">Save</button>
        <button @click="emitDelete" class="delete">Delete</button>
      </div>
    </form>
  </div>
  <!-- <div v-model="showModal"></div> -->
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { ref } from 'vue';
import { assignmentApi } from '@/assets/api/ApiAssigment';

const { getAssignment, postAssignment, putAssignment, deleteAssignment } = assignmentApi

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


const changeModal = () => {
  showModal.value = !showModal.value;
  return showModal.value;
}

const emit = defineEmits(['delete-task', 'update-task']); // Definir los eventos que se emitirán

const emitDelete = () => {
  emit('delete-task', { boardId: props.boardId, taskId: props.item.id });
};

const emitEdit = () => {
  emit('update-task', { boardId: props.boardId, taskId: props.item.id });
}
const selectedAssignment = ref({
  id: "",
  title: "",
  description: "",
  status: "",
  priority: "",
  // idProject: "",
  // idUser: ""
});

const editSelectedAssignment = (assignment) => {
  selectedAssignment.value = {
    id: assignment.id,
    title: assignment.title,
    description: assignment.description,
    status: assignment.status,
    priority: assignment.priority,
    idProject: assignment.idProject,
    idUser: assignment.idUser
  };
  showModal.value = true;
  console.log(selectedAssignment.value)
};

const updateAssignment = async () => {
  // cargar datos actualizados sin actualizar la pagina
  let response = await getColors();// mirar como obtengo las task
  catalogueColors.value = response;
};

const saveEditAssignment = async () => {
  let response = await putAssignment(selectedAssignment.id.value, selectedAssignment.value);
  showModal.value = false;
  await updateColors(); // cargar datos nuevo actualizados
  alert("assignment updated successfully");
};
</script>


<style lang="scss" scoped>
.task-container {
  background-color: var(--color-azulito);
  width: 100%;
  max-width: 450px;
  height: 120px;
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
    text-align: start;
  }

  .task-container-items {
    display: flex;
    justify-content: space-between;
    margin-top: 2.4rem;
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

.modal {
  background-color: var(--color-azulito);
  position: absolute;
  z-index: 10;
  // border: 1px solid tomato;
  width: 100%;
  max-width: 450px;
  min-width: 290px;
  height: 370px;
  border-radius: 12px;
  padding: 12px;
  margin: 2rem auto;
  box-shadow: 0 0 10px rgba(8, 8, 8, 0.925);
  color: white;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .modal-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
      margin-left: 5px;
      color: rgba(175, 170, 170, 0.655);
    }

    .modal-container-title {
      text-align: start;
      input {
        padding: 5px;
        border-radius: 9px;
        border: none;
      }
    }

    .modal-container-priority {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      button {
        padding: 5px 13px;
        border-radius: 10px;
        border-style: none;
        box-shadow: 0 0 10px rgba(8, 8, 8, 0.514);
        margin: 5px;
        cursor: pointer;
      }

    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      .modal-container-priority{
        flex-wrap: nowrap;
      }
    }

  }

  .modal-container-textarea {
    width: 90%;
    height: 200px;
    padding: 12px;
    margin: .5rem;
    border-radius: 12px;
  }

  .modal-container-btns {
    display: flex;
    justify-content: center;
    button {
      padding: 5px 13px;
      border-radius: 10px;
      margin: 0px 7px;
      border-style: none;
      color: rgb(48, 46, 46);
      box-shadow: 0 0 10px rgba(8, 8, 8, 0.541);
      cursor: pointer;

      &.close {
        background-color: var(--color-amarillo);
      }

      &.save {
        background-color: var(--color-verde);

      }

      &.delete {
        background-color: var(--color-naranja);
      }
    }
  }

  @media (max-width: 768px) {
    margin: 0 0 0 0;
    max-width: 290px;
    height: 400px;
  }
}
</style>