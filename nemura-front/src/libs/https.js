import axios from "axios";
// import { Cookies } from "quasar";
// import { authValidateTokenApi } from "src/api/auth/authValidateToken";

// const { postValidateToken } = authValidateTokenApi();

// async function getData() {
//   const token = Cookies.get("token_nemura");
//   const data = {
//     token: token,
//   };
//   return data;
// }

// MANDAR Y RECIBIR HTTTP REQUESTS
export function httpService() {
  let http = axios.create({
    // baseURL: import.meta.env.BASE_URL,
    baseURL: "http://localhost:3000",
  });

  // async function hasCookie() {
  //   if (Cookies.has("token_bikini")) {
  //     const fromData = await getData();
  //     const response = await postValidateToken(fromData);
  //     if (!response) {
  //       Cookies.remove("token_bikini");
  //       localStorage.removeItem("user");
  //       window.location = "/login";
  //     }
  //     return response;
  //   } else {
  //     return false;
  //   }
  // }

  function backLogin() {
    window.location = "/";
  }

  // // interceptor solicitudes
  // http.interceptors.request.use(
  //   (config) => {
  //     if (config.url.includes("/") || config.url.includes("/")) {
  //       return config;
  //     }
  //     if (!hasCookie()) backLogin();
  //     return config;
  //   },
  //   (error) => {
  //     backLogin();
  //     return Promise.reject(error);
  //   }
  // );

  // // interceptor de respuesta
  // http.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

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

  // const httpGetHeaders = async (url) => {
  //   let headers = {
  //     Authorization: `Bearer ${Cookies.get("token_bikini")}`,
  //   };
  //   let response = await http.get(url, { headers });
  //   return response.data;
  // };

  // const httpPostHeaders = async (url, data) => {
  //   let headers = {
  //     Authorization: `Bearer ${Cookies.get("token_bikini")}`,
  //   };
  //   let response = await http.post(url, data, { headers });
  //   return response.data;
  // };

  // const httpPutHeaders = async (url, data) => {
  //   let headers = {
  //     Authorization: `Bearer ${Cookies.get("token_bikini")}`,
  //   };
  //   let response = await http.put(url, data, { headers });
  //   return response.data;
  // };

  // const httpDeleteHeaders = async (url, data) => {
  //   let headers = {
  //     Authorization: `Bearer ${Cookies.get("token_bikini")}`,
  //   };
  //   let response = await http.post(url, data, { headers });
  //   return response.data;
  //};

  return {
    httpGet,
    httpPost,
    httpDelete,
    httpPut
    // httpGetHeaders,
    // httpPostHeaders,
    // httpPutHeaders,
    // httpDeleteHeaders,
  };
}
