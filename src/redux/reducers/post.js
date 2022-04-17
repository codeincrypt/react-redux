import { ACTIONS } from "../types"

const intitial_state = {
  "userId": "",
  "id"    : "",
  "title" : "",
  "body"  : ""
}

export default (state = intitial_state, action) => {

  switch(action.type) {
    case ACTIONS.GET_POST:
      return {...action.payload}
    default:
      return state  
  }
     

}