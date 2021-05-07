import { AUTH } from "../constants/actiontypes";
import * as api from "../api/index";

export const signin = (inputData, history) => async (dispatch) => {
    try {
        const { data } = await api.signin(inputData);
        dispatch({ type: AUTH, data });    // dispatch an action (reducer)
        history.push("/");
    } catch (error) {
        console.log(error);
    }
}

export const signup = (inputData, history) => async (dispatch) => {
    console.log(inputData);
    try {
        const { data } = await api.signup(inputData);
        dispatch({ type: AUTH, data });
        history.push("/");
    } catch (error) {
        console.log(error);
    }
}
