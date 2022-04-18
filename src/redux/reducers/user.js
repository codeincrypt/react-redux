import { ACTIONS } from "../types";

const intitial_state = {
  token   : "",
  isLogin : false,
  message : ""
};

export default (state = intitial_state, action) => {
  switch (action.type) {
    case ACTIONS.GET_LOGIN:
      return { ...action.payload };
    default:
      return state;
  }
};
