import { ACTIONS } from "../types";

const intitial_state = {
  id: "",
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

export default (state = intitial_state, action) => {
  switch (action.type) {
    case ACTIONS.GET_PROFILE:
      return { ...action.payload };
    default:
      return state;
  }
};
