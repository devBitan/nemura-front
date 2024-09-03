<template>
    <aside :class="`${isExpanded && 'is-expanded'}`">
        <div class="logo">
            <img src="../assets/img/logo.png" alt="">
        </div>
        <div class="menu-toggle-wrap">
            <div class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </div>

        </div>
        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="`${id}`">
                <span class="material-icons">home</span>
                <span class="text">Riwi</span>
            </router-link>
            <router-link class="button" to="`${id}`">
                <span class="material-icons">home</span>
                <span class="text">Riwi</span>
            </router-link>
            <router-link class="button" to="`${id}`">
                <span class="material-icons">home</span>
                <span class="text">Riwi</span>
            </router-link>
        </div>
        <div class="flex"></div>
        <div class="menu">
            <router-link class="button" to="`${id}`">
                <span class="material-icons">settings</span>
                <span class="text">settings</span>
            </router-link>
        </div>
    </aside>
</template>
<script setup>
import { ref } from 'vue';

const isExpanded = ref(localStorage.getItem("is_expanded") == "true");

const ToggleMenu = () => {
    isExpanded.value =!isExpanded.value;
    localStorage.setItem("is_expanded", isExpanded.value);
}
</script>