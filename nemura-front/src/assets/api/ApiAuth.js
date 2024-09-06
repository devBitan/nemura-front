// Register
import { httpService } from "@/libs/https";

const { httpPost } = httpService();

const apiUrl = "api/Auth/"; // como van a ser los endopints

export function authRegisterApi() {
  
  const register = async (userCreate) => {
    let response = await httpPost(apiUrl + "Register", userCreate);
    return response;
  };

  const login = async (userConfirm) => {
    let response = await httpPost(apiUrl + "login", userConfirm);
    return response;
  };
  // const availableEmail = async (userCreate) => {
  //   let data = {
  //     email: userCreate,
  //   };
  //   let response = await httpPost(apiUrl + "AvailableEmail", data);
  //   return response;
  // };

  return {
    register,
    login
  };
}
