import { LOGIN, LOGOUT } from "./ActionTypes";

export const loginUser = (payload) => {
  return { type: LOGIN, payload };
};

export const logoutUser = () => {
  return { type: LOGOUT };
};
