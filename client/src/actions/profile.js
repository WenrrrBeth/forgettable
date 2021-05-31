import { AUTH, UPDATE, FETCH_ONE } from "../constants/actiontypes";
import * as api from "../api/index";

export const signin = (inputData, history) => async (dispatch) => {
    try {
        const { data } = await api.signin(inputData);
        dispatch({ type: AUTH, data });    // dispatch an action (reducer)
        history.push("/");
    } catch (error) {
        console.log(error);
        return "No user found, please try to sign up instead."
    }
}

export const signup = (inputData, history) => async (dispatch) => {
    try {
        const { data } = await api.signup(inputData);
        dispatch({ type: AUTH, data });
        history.push("/");
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

