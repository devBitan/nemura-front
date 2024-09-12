import { httpService } from "@/libs/https";

const {httpGet, httpPost, httpDelete, httpPut } = httpService();

// const apiUrl = "api/Catalogue/";
const apiUrl = "/";

export function projectsApi() {

  async function getProject() {
    let response = await httpGet(apiUrl + "projects");
    console.log(response)
    return response;
  }

  const postProject = async (assignment) => {
    let response = await httpPost(apiUrl + "projects", project);
    return response;
  };

  const putProject = async (id, data) => {
    let response = await httpPut(apiUrl + "projects/" + id, data);
    return response; // organizar este 
  };

  const deleteProject = async (id, data) => {
    // let response = await httpPutHeaders(apiUrl + "deleteassignment/" + id, data);
    // return response;
  };

  return { getProject, postProject, putProject, deleteProject };
}
