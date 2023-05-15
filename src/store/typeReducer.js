let defaultState ={
    type: [],
    selectedTypeID:null
  }



  const SELECT_TYPE="SELECT_TYPE"
  const FETCH_TYPE="FETCH_TYPE"
  
  export const typeReducer = (state=defaultState, action)=>{
      switch(action.type){
            case SELECT_TYPE:
                return {
                  ...state,
                  selectedType: action.payload
                };
            case FETCH_TYPE:
                return {
                    ...state,
                    type:action.payload
                };
            default:
              return state
      }
  }

  
  export const selectTypeAC=(payload)=>({type:SELECT_TYPE, payload})
  export const fetchTypesAC=(payload)=>({type:FETCH_TYPE, payload})
  