import axios from "axios";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER, CLEAR_ERRORS } from "../types";

// LOGIN
export const authenticate = (res,history) => dispatch => {
      dispatch({type:CLEAR_ERRORS})
      const { token } = res;
      localStorage.setItem("jwtToken", token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      history.push('/dashboard')

};


export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logout = ()=>dispatch => {
  dispatch({type:CLEAR_ERRORS})
  localStorage.removeItem("jwtToken");
  dispatch(setCurrentUser({}))
};


