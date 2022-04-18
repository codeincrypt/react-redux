import { URL_STRING } from '../../const/config';
import { ACTIONS } from '../types';

const headers = {
  'Content-type': 'application/json',
}

const localSaved = localStorage.getItem('REDUXUSER')

export const GET_PROFILE = (success, error) => async (dispatch) => {
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
    dispatch({type : ACTIONS.GET_PROFILE, payload : loginUser})
    
  } catch (e) {
    error(e)
  }
}