import isEmpty from "../../utils/is-empty";
import { SET_CURRENT_USER, GET_ERRORS } from "../types";



const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case GET_ERRORS:
      return {
        ...state,
        type: "alert-danger",
        message: action.payload
      };

    default:
      return state;
  }
}
