<script setup>
</script>
<template>
    <div class="general-container">
        <div class="general-container-nav">
            <div class="general-container-nav-image">
                <img src="https://picsum.photos/200" alt="">
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button>logut</button>
        </div>
        <div class="general-container-table">
            <h1>title porject</h1>
            <div class="general-container-table-board">
                <p>title board</p>
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

<style lang="scss">

.general-container{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: var(--color-white);
    padding: 12px;

}

.general-container-nav {
    background-color: var(--color-blue);
    width: 150px;
    display: flex;
    /* height: 90vh; */
    height: 100vh;
    max-height: 640px;

    /* border: 1px solid tomato; */
    border-radius: 12px;
    display: flex;
    gap:1rem;
    flex-direction: column;
}

.general-container-nav-image {
    max-width: 100px;
    margin-bottom: 12px;
    border-radius: 50%;
}

.general-container-nav-image img {
   border-radius: 100%;
    width: 100%;
}

.general-container-table {
    border:1px solid tomato;
    width: 100vw;
    max-width: 1150px;
    padding: 12px;
    margin: 12px;

}

.general-container-table-board {
    border:1px solid;
    width: 30%;
}

.task-container {
    background-color: var(--color-azulito);
    width: 100%;
    max-width: 250px;
    border-radius: 12px;
    padding: 12px;
}
</style>