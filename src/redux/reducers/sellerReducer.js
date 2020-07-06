import { GET_ALL_SELLER, LOGIN_SELLER } from '../types'
 
const initialState = {
        activeUser: null,
        data: [],
        searchText: null    
        }
        
    
  const  sellerReducer  = (state = initialState, action) => {
        switch(action.type){ 
          case GET_ALL_SELLER :
            state.data=action.payload
           return{
            ...state
          }
          case LOGIN_SELLER :
            state.data=action.payload
            state.activeUser = action.payload.name
            return{
              ...state
            }
          default: return state
        }
     
  }
  
  export default sellerReducer