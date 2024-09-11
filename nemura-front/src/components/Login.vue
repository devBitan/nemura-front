<template lang="pug">
    .login-seccion
      form(
              autocomplete="off",
              @submit.prevent="validate()")
        h3 Login
        input(
            type="text",
            placeholder="Nickname",
            v-model="userConfirm.nickName",
        )
        input(
            type="password",
            placeholder="your pasword",
            v-model="userConfirm.password",
            v-show="userConfirm.nickName != '' && userConfirm.nickName.length >= 5",
            @change="checkPassword",
        )
        input(
            type="password",
            placeholder="Repeat your password",
            v-model="passConfirm",
            v-show="userConfirm.password != '' && userConfirm.password.length > 8",
            @change="ConfirmPass", 
        )
        div
            button(
              type="submit",
              v-show="passValidate"
            ) Create user
        p if you dont have an account,
        strong(@click="$router.push({ path: '/register' })") please register.
    </template>
    
    <script setup>
    import { onMounted, ref, watchEffect } from "vue";
    import { useUserStore } from '@/stores/user'; //importar el store
    import { useCounterStore } from '@/stores/counter'; //importar el store prueba
    import { EMAIL_REGEX, PASSWORD_REGEX } from '@/libs/regex';
    import { authRegisterApi } from '@/assets/api/ApiAuth';
    import { useRouter } from "vue-router";
    
    const userStore = useUserStore(); // generar constante para usarlo
    const counterStore = useCounterStore();
    const { login } = authRegisterApi();
    
    const form = ref({
        nickName: "",
        Password: "",
    });
    
    const useUser = useUserStore();
    const passConfirm = ref("");
    const passValidate = ref(false);
    
    let userConfirm = ref({
        nickName: "",
        password:"",
    });
    
    // validando contraseña
    const checkPassword = () => {
      if (!PASSWORD_REGEX.test(userConfirm.value.password)) {
        alter(
          "the password must contain at least one capital letter, one number and one special character '(?=.*d)')"
        );
        userCreate.value.password = "";
        return;
      }
    };
    
    // confirmando contraseña
    const ConfirmPass = () => {
      if (passConfirm.value == userConfirm.value.password) {
        passValidate.value = true;
        alter("Passwords do match");
        return;
      } else {
        passValidate.value = false;
        alert("Passwords do not match");
        passConfirm.value = "";
        return;
      }
    };
    
    
   const validate = async () => {
  if (
    (userConfirm.value.nickName != "root" &&
      (userConfirm.value.nickName == "" ||
        userConfirm.value.nickName.length < 5)) ||
    userConfirm.value.password == "" ||
    userConfirm.value.password.length < 8
  ) {
    alert("usuario o pass incorrecto.");
    userConfirm.value.nickName = "";
    userConfirm.value.password = "";
    return;
  } else {
    // enviando información a la store
    let response = await login(userConfirm.value);
    if (response.access) {
    //   $q.cookies.set("token_nemura", response.token, { expires: "90d" }); enviar el token al local storage
      useUser.setUser(response.user);
      // router.push("/");
      location.replace("/dashboard");
    } else {
      alert("usuario o pass incorrecto.");
      userConfirm.value.nickName = "";
      userConfirm.value.password = "";
    }
  }
};
    </script>
    
    <style lang="scss" >
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
            box-shadow: 0 0 10px rgba(8, 8, 8, 0.432);
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
            strong {
                cursor: pointer;
            }
        }
    }
    </style>