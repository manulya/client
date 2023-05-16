let defaultState ={
    basket: [ ],
    order: [],
  }

  const DELETE_BASKET="DELETE_BASKET"
  const FETCH_BASKET = "FETCH_BASKET"
  const FETCH_ORDER = "FETCH_ORDER"


  export const basketReducer = (state=defaultState, action)=>{
      switch(action.type){

        case FETCH_BASKET:
              return{...state,basket:action.payload}     
          case DELETE_BASKET:    
          return{...state,basket: state.basket.filter(request=>request.id!==action.payload)}
          case FETCH_ORDER:
              return{...state,order:action.payload}     
              
          default:
                return state

      }
  }
  
  export const fetchBasketAC=(payload)=>({type:FETCH_BASKET, payload})
  export const deleteBasketAC=(payload)=>({type:DELETE_BASKET, payload})
  export const fetchOrderAC=(payload)=>({type:FETCH_ORDER, payload})
 