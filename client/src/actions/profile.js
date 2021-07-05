import { AUTH, UPDATE, FETCH_ONE, SIGNIN, SIGNUP } from "../constants/actiontypes";
import * as api from "../api/index";

export const signin = (inputData, history) => async (dispatch) => {
    try {
        const { data } = await api.signin(inputData);
        dispatch({ type: SIGNIN, data });    // dispatch an action (reducer)
        history.push("/");
    } catch (error) {
        console.log(JSON.stringify(error));
        console.log(error.message)
        if (error.message.includes("404")) return "No user found, please try to sign up instead.";
        else if (error.message.includes("403")) return "Wrong password entered, please try again.";
        else if (error.message.includes("422")) return "You have not verify your account, please check your email."
    }
}

export const signup = (inputData) => async (dispatch) => {
    try {
        const { data } = await api.signup(inputData);
        dispatch({ type: SIGNUP, data });
        // history.push("/profile/authenticate");
    } catch (error) {
        console.log(error);
    }
}

export const googleSignin = (inputData, history) => async (dispatch) => {
    try {
        const { data } = await api.googleSignin(inputData);
        dispatch({type: AUTH, data});
        history.push("/");
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}

export const updateProfile = (id, inputData, history) => async (dispatch) => {
    try {
        const { data } = await api.updateProfile(id, inputData);
        dispatch({ type: UPDATE, data });
        history.push("/profile");
    } catch (error) {
        console.log(error);
    }
}

export const getProfile = (id) => async (dispatch) => {
    try {
        const { data } = await api.getProfile(id);
        dispatch({ type: FETCH_ONE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

