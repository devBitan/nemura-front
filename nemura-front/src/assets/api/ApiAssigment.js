import { httpService } from "@/libs/https";

const {httpGet, httpPost, httpDelete, httpPut, httpGetHeaders, httpPostHeaders, httpPutHeaders } = httpService();

// const apiUrl = "api/Catalogue/";
const apiUrl = "v1/";

export function assignmentApi() {

  async function getAssignment() {
    let response = await httpGet(apiUrl + "assignments");
    return response;
  }

  async function getAssignmentByProjectId(id) {
    let response = await httpGetHeaders(apiUrl + "assignments/ByProjectId/" + id);
    return response;
  }

  const postAssignment = async (data) => {
    let response = await httpPostHeaders(apiUrl + "assignments", data);
    return response;
  };

  const putAssignment = async (id, data) => {
    let response = await httpPutHeaders(apiUrl + "assignments/status/" + id, data);
    return response; // organizar este 
  };

  const deleteAssignment = async (id, data) => {
    // let response = await httpPutHeaders(apiUrl + "deleteassignment/" + id, data);
    // return response;
  };

  return { getAssignment, postAssignment, putAssignment, deleteAssignment, getAssignmentByProjectId };
}
