<template>
   <div class="dashboard-table">
      <h1>Title project</h1>
      <div class="board-container">
        <div class="board">
          <h4>To Do</h4>
          <div class="task-container">
            <p class="task-container-title">Title task</p>
            <div class="task-container-items">
              <p class="task-container-items-id">id</p>
              <button class="task-container-items-btn">low</button>
            </div>
          </div>
        </div>
        <div class="board">
          <h4>In progres</h4>
          <div class="task-container">
            <p class="task-container-title">Title task</p>
            <div class="task-container-items">
              <p class="task-container-items-id">id</p>
              <button class="task-container-items-btn">low</button>
            </div>
          </div>
        </div>
        <div class="board">
          <h4>Complete</h4>
          <div class="task-container">
            <p class="task-container-title">Title task</p>
            <div class="task-container-items">
              <p class="task-container-items-id">id</p>
              <button class="task-container-items-btn">low</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.dashboard-table {
  // border: 1px solid tomato;
  width: 100%;
  padding: 1rem;
  text-align: center;

  .board-container {
    // border: 1px solid tomato;
    height: 94%;
    display: flex;
    gap: 1rem;

    .board {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.95);
      width: 33%;
      height: 92%;
      border-radius: 12px;
      margin: 2rem;
      background-color: var(--color-blue);
      padding: 2rem;

      font-size: 2rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      // &:hover {
      //   background-color: lightblue;
      // }
      // &:active {
      //   background-color: darkblue;
      // }
    }
  }
}
</style>