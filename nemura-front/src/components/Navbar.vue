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

<<style lang="scss" scoped>
/*sidebar*/
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  background-color: var(--color-blue);
  color: var(--color-white-soft);
  padding: 1rem;
  transition: 0.2s ease-out;

  .flex{
    flex: 1 1 0;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }

  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      cursor: pointer;

      .material-icons {
        font-size: 2rem;
        color: var(--color-white-soft);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--color-verde);
          transform: translateX(0.5rem);

        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }
  h3 {
    color: var(--color-verde);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--color-white-soft);
        transition: 0.3s ease-out;
      }

      .text {
        color: var(--color-white-soft);
        transition: 0.3s ease-out;
      }
      &:hover ~&.router-link-exact-active{
        background-color: var(--color-azulito);
        transition: 0.3s ease-out;
        .material-icons, .text {
          color: var(--color-verde);
        }

      }
      &.router-link-exact-active {
        border-right: 5px solid var(--color-verde);
      }
    }

  }

  &.is-expanded {
    width: 300px;

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }

    }

    h3,
    .button .text {
      opacity: 1;

    }
    .button {
      .material-icons {

        margin-right: 1rem;
      }
    }
  }


  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
    
</style>>