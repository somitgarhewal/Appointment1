import { GET_ALL_SELLER, LOGIN_SELLER, LOGOUT_SELLER } from '../types'
import axios from 'axios'

export const fetchSeller = () => {
  return async dispatch => {
    try{
      const response = await axios.get('http://localhost:5000/api/getSeller')
      dispatch(getAllSeller(response.data))
    }
    catch(error) {
      console.log("error occured: ",error);
    }
  }
}
export const getAllSeller = (data) => ({
  type: GET_ALL_SELLER,
  payload: data
})

export const loginSellers = (data) => ({
  type: LOGIN_SELLER,
  payload: data
})

export const loginSeller = (loginData) => {
  return async dispatch => {
    try {
      const response = await axios.post(`http://www.localhost:5000/api/loginSeller`, loginData);
      dispatch(loginSellers(response.data));
    }
    catch(error) {
      console.log("error occured: ",error);
    }
  }
}

export const logout = () => ({
  type: LOGOUT_SELLER
})