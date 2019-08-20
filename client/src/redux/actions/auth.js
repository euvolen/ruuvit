import axios from "axios";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER, CLEAR_ERRORS } from "../types";

// LOGIN
export const authenticate = res => dispatch => {
      dispatch({type:CLEAR_ERRORS})
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      const decoded = jwt_decode(token);
      setCurrentUser(decoded);

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
  setCurrentUser({});
};


