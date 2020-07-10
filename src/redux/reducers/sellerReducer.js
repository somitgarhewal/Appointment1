import { GET_ALL_SELLER, LOGIN_SELLER, LOGOUT_SELLER } from '../types'
 
const initialState = {
        activeUser: "none",
        data: []  
        }
        
    
  const  sellerReducer  = (state = initialState, action) => {
        switch(action.type){ 
          case GET_ALL_SELLER :
           return{
            ...state,
            data: action.payload
          }

          case LOGIN_SELLER :
            return{
              ...state,
            activeUser : action.payload.person
            }

          case LOGOUT_SELLER:
            return{
              ...state,
              activeUser:"none"
            }  
          default: return state
        }
     
  }
  
  export default sellerReducer