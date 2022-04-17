import { URL_STRING } from '../../const/config';
import { ACTIONS } from '../types';

const headers = {
  'Content-type': 'application/json',
  // Authorization: 'Bearer ' + localStorage.getItem('lvkartmerchant'),
}

export const GET_COMMENT =  (success, error) => async (dispatch) => {
  try {
    const response = await  fetch(`${URL_STRING}/comments`, {
      method : "GET",
      headers
    })
  
    const json = await response.json()
    success(json)
    dispatch({type : ACTIONS.GET_COMMENT, payload : json})
    
  } catch (e) {
      error(e)
  }
}

export const GET_POST =  (success, error) => async (dispatch) => {
  try {
    const response = await  fetch(`${URL_STRING}/posts`, {
      method : "GET",
      headers
    })
  
    const json = await response.json()
    success(json)
    dispatch({type : ACTIONS.GET_POST, payload : json})
    
  } catch (e) {
      error(e)
  }
}