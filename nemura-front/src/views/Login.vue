<script setup>

import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import Task from '@/components/Task.vue';
// validar  para que se muestre el compoente de registro o el de login
</script>

<template>
  <main class="login">
    <div class="login-image">
      <img src="../assets/img/logoNemura.png" alt="logo-Nemura">
      <h2>Nemura</h2>
    </div>
    <Login />
  </main>
</template>
<!--  validar el loal stora si esta el toekn si no mandarlo al registro   mejor con un boton -->
<style lang="scss">
.login {
  width: 100vw;
  display: flex;
  justify-content: center;

  .login-image {
    background-color: var(--color-white-soft);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    img {
      max-width: 350px;
    }
  }

}
</style>