<template>
    <div class="login-seccion">
        <form @submit.prevent="handleSubmit">
            <h3>Login</h3>
            <input type="email" v-model="form.email" placeholder="Correo electrónico">
            <input type="password" v-model="form.name" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    name: '',
    email: '',
});

const handleSubmit = () => {
    // Aquí puedes realizar la lógica para enviar los datos del formulario,
    // por ejemplo, a una API
    console.log('Formulario enviado:', form.value);
};
</script>

<style lang="scss">
.login-seccion {
    //  display: flex;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;


    form {
        // border: 1px solid black;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 450px;
        
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: auto auto;
        padding: 22px;
        text-align: center;

        input {
            width: 100%;
            padding: 12px;
            min-width: 250px;
            border-radius: 5px;
            border: 1px solid #ccc;
            outline: none;
        }

        button {
            width: 50%;
            padding: 10px;
            border-radius: 5px;
            background-color: #333;
            color: #fff;
            cursor: pointer;
            margin: 0 auto;
        }
    }

}
</style>