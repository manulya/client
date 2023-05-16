// import { fetchCompaniesAC } from "../store/companyReducer";
// import { deleteRequestAC, fetchRequestsAC } from "../store/requestReducer";
import { deleteBasketAC, fetchBasketAC } from "../store/basketReducer";
import { $authHost, $host } from "./index";


export const createBasketItem = async(userid, pictureid) => {
    const {data} = await $authHost.post('/api/basket', {userid,pictureid})
    return data;
  }

  export const fetchBasket = (userId) => {
    return async (dispatch) => {
      try {
        const { data } = await $authHost.get(`/api/basket/${userId}`);
        dispatch(fetchBasketAC(data));
      } catch (error) {
        console.log(error);
      }
    };
  };
 
  export const deleteBasketItem = (id) => {
    return async (dispatch) => {
      try {
        await $authHost.delete(`/api/basket/${id}`);
        dispatch(deleteBasketAC(id));
      } catch (error) {
        console.log(error);
      }
    };
  };