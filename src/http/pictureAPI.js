import { deletePictureAC, fetchPictureAC, setFoundAC, updateAC } from "../store/pictureReducer";
import { $authHost, $host } from "./index";

export const createPicture = async(formData)=>{
    const {data} = await $authHost.post('/api/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        }
      });return data
 }

export const fetchPicture = (name, typeId, brandId, sortOrder) => {
  console.log(name, typeId, brandId, sortOrder)
    return async (dispatch) => {
      try {
          const {data} = await $host.get(`/api/picture/`, {params: {
            name, typeId, brandId, sortOrder
        }
    })
          dispatch(fetchPictureAC(data.pictures))
          dispatch(setFoundAC(data.found))
      } catch (error) {
          console.log(error)
      }
    };
  };
  export const updatePicture = ( id, price ) => {
    return async (dispatch) => {
      try {
        const {data} = await $authHost.put(`/api/picture/`,{ id, price });
        dispatch(updateAC(data));
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const deletePicture = (id) => {
    return async (dispatch) => {
      try {
        await $authHost.delete(`/api/picture/${id}`);
        dispatch(deletePictureAC(id));
      } catch (error) {
        console.log(error);
      }
    };
  };