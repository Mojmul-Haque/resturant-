export const userLogin = (payload) => {
  return { type: "LOGIN", payload: payload };
};

export const userLogout = (payload) => {
  return { type: "LOG_OUT", payload };
};
