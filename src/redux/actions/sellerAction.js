import { GET_ALL_SELLER, LOGIN_SELLER } from '../types'
import axios from 'axios'

export const fetchSeller  = () => {
  return function (dispatch) {
    axios.get('http://localhost:5000/api/getSeller')
    .then(response => {
      const data = response.data.map(user => user)
      dispatch(getAllSeller(data))
    })
  }
}
export const getAllSeller = (data) => ({
  type: GET_ALL_SELLER,
  payload: data
})


export const loginSeller = (payload) => ({
  type: LOGIN_SELLER,
  payload
})
