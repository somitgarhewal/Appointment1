import { GET_ALL_SELLER, LOGIN_SELLER } from '../types'
 
const initialState = {
        activeUser: null,
        data: []  
        }
        
    
  const  sellerReducer  = (state = initialState, action) => {
        switch(action.type){ 
          case GET_ALL_SELLER :
            state.data=action.payload
           return{
            ...state
          }
          case LOGIN_SELLER :
            state.activeUser = action.payload.person
            action.payload.person ? state.success=true : state.success=false
            return{
              ...state
            }
          default: return state
        }
     
  }
  
  export default sellerReducer