import { fetchBrandsAC } from "../store/brandReducer";
import { $authHost, $host } from "./index";

export const createBrand = async (name) => {
  const { data } = await $authHost.post("/api/brand/", {name});
  return data;
};

export const fetchBrands = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await $host.get(`/api/brand/`, {
        params: {
          id,
        },
      });
      dispatch(fetchBrandsAC(data));
    } catch (error) {
      console.log(error);
    }
  };
};
