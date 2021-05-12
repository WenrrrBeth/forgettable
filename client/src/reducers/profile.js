import { AUTH, LOGOUT, UPDATE, FETCH_ONE } from "../constants/actiontypes";

const authenticateReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, data: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case UPDATE:
      return { ...state, data: action?.data };
    case FETCH_ONE:
      return action.payload;
    default:
      return state;
  }
};

export default authenticateReducer;
