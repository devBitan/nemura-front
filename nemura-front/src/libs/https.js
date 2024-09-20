// import axios from "axios";
// import { useUserStore } from "@/stores/user";


// async function getData() {
//   const userStore = useUserStore();
//   const token = userStore.getToken();  // Aquí accedes al token correcto
//   console.log(token);

//   return token;
// }

// // MANDAR Y RECIBIR HTTTP REQUESTS
// export function httpService() {
//   let http = axios.create({
//     baseURL: "https://localhost:7107/api/",
//   });


//   async function hasToken() {
//     const userStore = useUserStore();
//     return userStore.getToken() ? true : false;
//   }

//   function backLogin() {
//     window.location = "/";
//   }


//   // Interceptor de solicitudes
//   http.interceptors.request.use(
//     async (config) => {
//       const tokenAvailable = await hasToken();
//       if (!tokenAvailable) {
//         backLogin();
//         return Promise.reject("No token available");
//       }

//       // Agregar el token al header Authorization si está disponible
//       const token = await getData();
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }

//       return config;
//     },
//     (error) => {
//       backLogin();
//       return Promise.reject(error);
//     }
//   );

//   // Interceptor de respuesta
//   http.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   const httpGet = async (url) => {
//     let response = await http.get(url);
//     return response.data;
//   };

//   const httpPost = async (url, data) => {
//     let response = await http.post(url, data);
//     return response.data;
//   };

//   const httpDelete = async (url, data) => {
//     let response = await http.delete(url, data);
//     return response.data;
//   };

//   const httpPut = async (url, data) => {
//     let response = await http.put(url, data);
//     return response.data;
//   };


//   const httpGetHeaders = async (url) => {
//     const token = await getData();  // Obtener el token desde la store
//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };
//     let response = await http.get(url, { headers });
//     return response.data;
//   };

//   // const httpPostHeaders = async (url, data) => {
//   //   let headers = {
//   //     Authorization: `Bearer ${Cookies.get("token_bikini")}`,
//   //   };
//   //   let response = await http.post(url, data, { headers });
//   //   return response.data;
//   // };

//   // const httpPutHeaders = async (url, data) => {
//   //   let headers = {
//   //     Authorization: `Bearer ${Cookies.get("token_bikini")}`,
//   //   };
//   //   let response = await http.put(url, data, { headers });
//   //   return response.data;
//   // };

//   // const httpDeleteHeaders = async (url, data) => {
//   //   let headers = {
//   //     Authorization: `Bearer ${Cookies.get("token_bikini")}`,
//   //   };
//   //   let response = await http.post(url, data, { headers });
//   //   return response.data;
//   //};

//   return {
//     httpGet,
//     httpPost,
//     httpDelete,
//     httpPut,
//     httpGetHeaders,
//     // httpPostHeaders,
//     // httpPutHeaders,
//     // httpDeleteHeaders,
//   };
// }

import axios from "axios";
import { useUserStore } from "@/stores/user";

// Función para obtener el token después de la inicialización de Pinia
async function getTokenFromStore() {
  // En lugar de acceder a la store globalmente, se accede dentro de una función
  const userStore = useUserStore();
  return userStore.getToken();
}

// Servicio HTTP con axios
export function httpService() {
  let http = axios.create({
    baseURL: "https://localhost:7107/api/",
  });

  // Verificar si hay un token
  async function hasToken() {
    const token = await getTokenFromStore();
    return token ? true : false;
  }

  function backLogin() {
    window.location = "/";
  }

  // Interceptor de solicitudes
  http.interceptors.request.use(
    async (config) => {
      const tokenAvailable = await hasToken();
      if (!tokenAvailable) {
        backLogin();
        return Promise.reject("No token available");
      }

      // Obtener el token desde la store y agregarlo a los headers
      const token = await getTokenFromStore();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      backLogin();
      return Promise.reject(error);
    }
  );

  // Interceptor de respuesta
  http.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const httpGet = async (url) => {
    let response = await http.get(url);
    return response.data;
  };

  const httpPost = async (url, data) => {
    let response = await http.post(url, data);
    return response.data;
  };

  const httpDelete = async (url, data) => {
    let response = await http.delete(url, data);
    return response.data;
  };

  const httpPut = async (url, data) => {
    let response = await http.put(url, data);
    return response.data;
  };

  const httpGetHeaders = async (url) => {
    const token = await getTokenFromStore();  // Obtener el token desde la store
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    let response = await http.get(url, { headers });
    return response.data;
  };

  const httpPostHeaders = async (url, data) => {
    const token = await getTokenFromStore(); 
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    let response = await http.post(url, data, { headers });
    return response.data;
  };

  const httpPutHeaders = async (url, data) => {
    const token = await getTokenFromStore(); 
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    let response = await http.patch(url, data, { headers });
    return response.data;
  };

  return {
    httpGet,
    httpPost,
    httpDelete,
    httpPut,
    httpGetHeaders,
    httpPostHeaders,
    httpPutHeaders
  };
}
