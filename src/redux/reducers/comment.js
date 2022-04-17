import { ACTIONS } from "../types"

const intitial_state = {
  "postId": "",
  "id"    : "",
  "name"  : "",
  "email" : "",
  "body"  : ""
}

export default (state = intitial_state, action) => {

  switch(action.type) {
    case ACTIONS.GET_COMMENT:
      return {...action.payload}
    default:
      return state  
  }

}