import { httpService } from "@/libs/https";

const {httpGet, httpPost } = httpService();

const apiUrl = "api/Catalogue/";

export function assignmentApi() {

  async function getAssignment() {
    let response = await httpGet(apiUrl + "getassignment");
    return response;
  }

  const postAssignment = async (assignment) => {
    let response = await httpPost(apiUrl + "crearassignment", assignment);
    return response;
  };

  const putAssignment = async (id, data) => {
    let response = await httpPutHeaders(apiUrl + "updateassignment/" + id, data);
    return response; // organizar este 
  };

  const deleteAssignment = async (id, data) => {
    // let response = await httpPutHeaders(apiUrl + "deleteassignment/" + id, data);
    // return response;
  };

  return { getAssignment, postAssignment, putAssignment, deleteAssignment };
}
