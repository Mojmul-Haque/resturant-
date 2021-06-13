const initialState = {
  userInfo: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      return { userInfo: action.payload };

    default:
      return state;
  }
};
