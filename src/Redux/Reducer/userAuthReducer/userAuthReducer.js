import { LOGIN, LOGOUT } from "../../Action/ActionTypes";

const initialState = {
  userAuth: {},
};

export const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload);
      return { userAuth: action.payload };
    case LOGOUT:
      return state;
    default:
      return state;
  }
};
