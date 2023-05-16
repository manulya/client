
import { fetchOrderAC } from "../store/basketReducer";
import { $authHost} from "./index";


export const createOrder = async(userid,pictureid, address) => {
    const {data} = await $authHost.post('/api/order', {userid,pictureid, address})
    return data;
  }

  export const fetchOrders = (userid) => {
    return async (dispatch) => {
      try {
          const {data} = await $authHost.get(`/api/order/`, {params: {
            userid
        }
    })
          dispatch(fetchOrderAC(data))
      } catch (error) {
          console.log(error)
      }
    };
  };
 
