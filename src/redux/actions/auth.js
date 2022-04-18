import { URL_STRING } from '../../const/config';
import { ACTIONS } from '../types';

const headers = {
  'Content-type': 'application/json',
  // Authorization: 'Bearer ' + localStorage.getItem('lvkartmerchant'),
}

export const GET_LOGIN = ({email, password},success, error) => async (dispatch) => {
  try {
    const response = await  fetch(`${URL_STRING}/users`, {
      method : "GET",
      headers
    })
  
    const json = await response.json()
    const loginUser = json.find((e) => {
      return e.email === email && e.username === password;
    });
    var info = {
      token : loginUser.email,
      isLogin : true,
      message : "Logged In"
    }
    success(info)
    dispatch({type : ACTIONS.GET_LOGIN, payload : info})
    
  } catch (e) {
      error(e)
  }
}