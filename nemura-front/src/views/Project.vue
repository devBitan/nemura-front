<template lang="pug">
main.dashboard
  Navbar
  .dashboard-table
    h3.title  Title project
    .board-container
      div.board(@drop="onDrop($event, board)" @dragover.prevent @dragenter.prevent v-for="board in boards" :key="board.id")
        div {{ board.name }}
        InputNew(@on-new-item="(text) => handleNewItem(text, board)")
        .item(draggable="true" @dragstart="startDrag($event, board, item)" v-for="item in board.items" :key="item.id")
          Task(:item="item" :boardId="board.id" @delete-task="deleteItem(board, item)" @update-task="updateItem(board, item)")

</template>
<script setup>
import { reactive } from "vue";
import Navbar from '@/components/Navbar.vue';
import Task from '@/components/Task.vue';
import InputNew from "./InputNew.vue";

  let boards = reactive([
    {
      id: 1,
      name: "Board ToDo´s",
      items: [
        {
          id: 1,
          title: "probando ando",
          description: "lorem pic",
          status: "do to",
          priority: "low",
          idProject: 1,
          idUser:1
        },
        {
          id: 2,
          title: "ASP .NET",
          description: "lorem pic",
          status: "do to",
          priority: "low"
        },
        {
          id: 3,
          title: "Api Rest",
          description: "lorem pic",
          status: "do to",
          priority: "low"
        },
        {
          id: 4,
          title: "Azure devops",
          description: "lorem pic",
          status: "do to",
          priority: "low"
        },
        {
          id: 5,
          title: "Git flow",
          description: "lorem pic",
          status: "do to",
          priority: "low"
        },
      ],
    },
    {
      id: 2,
      name: "In progres",
      items: [
      ],
    },
    {
      id: 3,
      name: "Complete",
      items: [
      ],
    },
  ]);

  function deleteItem(board, item) {
    board.items = board.items.filter((i) => i !== item);
    //enviar al back para eliminar
  }

  //-   // function updateItem({ boardId, task }) {
//-   //   const board = boards.find(b => b.id === boardId);
//-   //   if (board) {
//-   //     const index = board.items.findIndex(item => item.id === task.id);
//-   //     if (index !== -1) {
//-   //       board.items[index] = task;
//-   //       // Lógica para actualizar en el backend
//-   //     }
//-   //   }
//-   // }


  function handleNewItem(text, board) {
    board.items.push({
      id: crypto.randomUUID(),
      priority:"low",
      title: text.value,
    });
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
  // PENDIENTE CREAR FUNCIONAIDAD DE ENVIDAR LOS ELIMINADOS A UNA LISTA  - QUE SE VEA COMO UN HISTORIAL
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
  margin:2vh;
}
</style>
