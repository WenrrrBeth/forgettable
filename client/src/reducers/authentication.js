import { AUTH } from "../constants/actiontypes";

const authenticateReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { ...state, data: action?.data };
        default:
            return state;
    }
}

export default authenticateReducer;
