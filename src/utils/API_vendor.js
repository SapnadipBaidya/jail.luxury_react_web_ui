import axios from "axios";

export async function makePostAPIcall (url,payload){
    try {
        const response = await axios.post(url, {
        ...payload,
        });
        return response;
      } catch (error) {
        return error;
      }
}

export async function makeGetAPIcall (url){
  try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      return error;
    }
}
