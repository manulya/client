let defaultState ={
    picture: [],
    found: false
  }

  const DELETE_PICTURE="DELETE_PICTURE"
  const FETCH_PICTURE = "FETCH_PICTURE"
  const ADD_PICTURE = "ADD_PICTURE"
  const SET_FOUND="SET_FOUND"
  
  export const pictureReducer = (state=defaultState, action)=>{
      switch(action.type){
        case FETCH_PICTURE:
            return{...state,picture:action.payload}
        case SET_FOUND:
            return{...state,found:action.payload}
        case ADD_PICTURE:
            return{
                ...state,
                picture:[...state.picture, action.payload]
            }
        case DELETE_PICTURE:    
          return{...state,picture: state.picture.filter(picture=>picture.id!==action.payload)}
        default:
          return state
      }
  }
  
  export const fetchPictureAC=(payload)=>({type:FETCH_PICTURE, payload})
  export const setFoundAC=(payload)=>({type:SET_FOUND, payload})
  export const addPictureAC=(payload)=>({type:ADD_PICTURE, payload})
  export const deletePictureAC=(payload)=>({type:DELETE_PICTURE, payload})
  