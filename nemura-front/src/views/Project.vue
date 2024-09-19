<template lang="pug">
main.dashboard
  Navbar
  .dashboard-table
    h3.title {{nameProject}}
    .board-container
      div.board(@drop="onDrop($event, board)" @dragover.prevent @dragenter.prevent v-for="board in boards" :key="board.id")
        div {{ board.name }}
        InputNew(@on-new-item="(text) => handleNewItem(text)")
        .item(draggable="true" @dragstart="startDrag($event, board, item)" 
          v-for="item in filteredAssignments(board)" 
          :key="item?.id")
          Task(:item="item" :boardId="board.id" @delete-task="deleteItem(board, item)" @update-task="updateItem(board, item)")
</template>

<script setup>
import { onMounted, reactive, ref, watchEffect, computed, onUpdated } from "vue";
import Navbar from '@/components/Navbar.vue';
import Task from '@/components/Task.vue';
import InputNew from "./InputNew.vue";
import { assignmentApi } from "@/assets/api/ApiAssigment";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const { getAssignment, postAssignment, putAssignment, deleteAssignment, getAssignmentByProjectId } = assignmentApi();
const idProject = computed(() => userStore.idProject);
const nameProject = computed(() => userStore.nameProject);
let assignments = ref([]);
let boards = reactive([
  {
    id: 1,
    name: "To Dos",
    enumValue: 0,
    items: [
    ],
  },
  {
    id: 2,
    name: "In progres",
    enumValue: 1,
    items: [
    ],
  },
  {
    id: 3,
    name: "Complete",
    enumValue: 2,
    items: [
    ],
  },
]);

watchEffect(async () => {
  let responseAssignment = await getAssignmentByProjectId(idProject.value);
  console.log("Tareas recibidas del proyecto:", responseAssignment);
  assignments.value = responseAssignment;
  console.log("Id porjecto:",idProject.value)
  console.log("nombre porjecto:",nameProject.value)
});

async function handleNewItem(text) {
  let newAssignment = {
    name: text.value,
    description: "",
    status: 0,
    priority: 0,
    projectId: idProject.value // Usar el idProject del store
  };
  // Asegúrate de esperar la respuesta de la API
  try {
    let responseAddAssignment = await postAssignment(newAssignment);
    // console.log("Respuesta de la API:", responseAddAssignment);
    // Refrescar las tareas después de agregar una nueva
    let responseAssignment = await getAssignmentByProjectId(idProject.value);
    assignments.value = responseAssignment;
  } catch (error) {
    console.error("Error creando la nueva tarea:", error);
  }
}

function startDrag(evt, board, item) {
  evt.dataTransfer.setData(
    "text/plain",
    JSON.stringify({ boardId: board.id, itemId: item.id })
  );
}

function onDrop(evt, dest) {
  const { boardId, itemId } = JSON.parse(
    evt.dataTransfer.getData("text/plain")
  );
  const originBoard = boards.find((item) => item.id == boardId);
  const originItem = originBoard.items.find((item) => item.id == itemId);
  dest.items.push({ ...originItem });
  originBoard.items = originBoard.items.filter((item) => item != originItem);
}

function filteredAssignments(board) {
  console.log('Filtrando tareas para el board:', board.name);
  return assignments.value.filter((assignment) => {
    console.log('Tarea status:', assignment.status, 'Enum del board:', board.enumValue, board.id);
    return assignment.status === board.enumValue;
  });
}

// function deleteItem(board, item) {
//   board.items = board.items.filter((i) => i !== item);
// }

</script>

<style lang="scss" scoped>
.dashboard-table {
  width: 100%;
  text-align: center;

  .board-container {
    // border: 1px solid tomato;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
    margin: 0 2.5rem;

    .board {
      color: rgba(255, 255, 255, 0.893);
      // color: black;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.735);
      width: 30%;
      min-width: 300px;
      min-height: 35vh;
      max-height: 85vh;
      height: 100%;
      border-radius: 12px;
      background-color: var(--color-blue);
      // background-color: #F2F3F5;
      padding: 1rem;
      font-size: 2rem;
      overflow: auto;
    }

    @media (max-width: 768px) {
      margin: 0 0 0 4rem;
      justify-content: center;
    }
  }
}

.title {
  margin: 2vh;
}
</style>
