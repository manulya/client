let defaultState ={
    brand: [],
    selectedBrandID:null
  }



  const SELECT_BRAND="SELECT_BRAND"
  const FETCH_BRAND="FETCH_BRAND"

  
  export const brandReducer = (state=defaultState, action)=>{
      switch(action.type){
            case SELECT_BRAND:
                return {
                  ...state,
                  selectedBrand: action.payload
                };

            case FETCH_BRAND:
                return {
                    ...state,
                    brand:action.payload
                };
          default:
              return state
      }
  }

  
  export const selectBrandAC=(payload)=>({type:SELECT_BRAND, payload})
  export const fetchBrandsAC=(payload)=>({type:FETCH_BRAND, payload})
  