import { fetchPictureAC, setFoundAC } from "../store/pictureReducer";
import { $authHost, $host } from "./index";

export const createPicture = async(formData)=>{
    const {data} = await $authHost.post('/api/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        }
      });return data
}


export const getOnePicture = async()=>{
    const {data} = await $host.get('/api/picture/', )
    return data
}

export const fetchPicture = (name, price, typeID, brandID, sortOrder) => {
    return async (dispatch) => {
      try {
          const {data} = await $host.get(`/api/picture/`, {params: {
            name, price, typeID, brandID, sortOrder
        }
    })
          dispatch(fetchPictureAC(data.pictures))
          dispatch(setFoundAC(data.found))
      } catch (error) {
          console.log(error)
      }
    };
  };