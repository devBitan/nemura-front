<template>
    <aside :class="`${isExpanded && 'is-expanded'}`">
        <div class="logo">
            <img src="../assets/img/logoNemura.png" alt="">
        </div>
        <div class="menu-toggle-wrap">
            <div class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </div>

        </div>
        <h3>Menu</h3>
        <div class="menu" v-for="project in objetoProjectos" :key="project.name">

            <router-link class="button">
                <span class="material-icons" @click="goProject(project.name)">home</span>
                <span class="text">{{ project.name }}</span>
            </router-link>

        </div>
        <div class="flex"></div>
        <div class="menu">
            <router-link class="button" >
                <span class="material-icons" @click="$router.push({ path: '/' })"  >logout</span>
                <span class="text">Logout</span>
                
            </router-link>
        </div>
    </aside>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
let project = "riwi"

const objetoProjectos = [
    {
        name: "Riwi",
        id:1,
        logo: "../assets/img/logo.png",
        color: "#2196F3",
    },
    {
        name: "CodigoR",
        id:2,
        logo: "../assets/img/logo.png",
        color: "#2196F3",
    },
    {
        name: "CoWorkig",
        id:3,
        logo: "../assets/img/logo.png",
        color: "#2196F3",
    },
    {
        name: "Gamificacion",
        id:4,
        logo: "../assets/img/logo.png",
        color: "#2196F3",
    },
]

const isExpanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
    isExpanded.value =!isExpanded.value;
    localStorage.setItem("is_expanded", isExpanded.value);
}

const goProject = (project) => {
    router.push({ path: "/dashboard/" + `${project}` });
}
</script>
