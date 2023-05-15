import { fetchTypesAC } from "../store/typeReducer";
import { $authHost, $host } from "./index";

export const createType = async (name) => {
  const { data } = await $authHost.post("/api/type/", {name});
  return data;
};

export const fetchTypes = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await $host.get(`/api/type/`, {
        params: {
          id,
        },
      });
      dispatch(fetchTypesAC(data));
    } catch (error) {
      console.log(error);
    }
  };
};
