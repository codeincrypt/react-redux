import { URL_STRING } from '../../const/config';
import { ACTIONS } from '../types';

const headers = {
  'Content-type': 'application/json',
  // Authorization: 'Bearer ' + localStorage.getItem('lvkartmerchant'),
}

const localSaved = localStorage.getItem('REDUXUSER')

export const GET_PROFILE =  (success, error) => async (dispatch) => {
  try {
    const response = await  fetch(`${URL_STRING}/users`, {
      method : "GET",
      headers
    })
    
    const json = await response.json()
    const loginUser = json.find((e) => {
      return e.email === localSaved;
    });
    success(loginUser)
    dispatch({type : ACTIONS.GET_PROFILE, payload : json})
    
  } catch (e) {
    error(e)
  }
}