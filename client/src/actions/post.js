import { POST, FETCH_UNSHARED, FETCH_SHARED } from "../constants/actiontypes";
import * as api from "../api/index";

export const postEvent = (inputData, history) => async (dispatch) => {
    try {
        const { data } = await api.postevent(inputData);
        dispatch({ type: POST, data });
        history.push("/profile");
    } catch (error) {
        console.log(error);
    }
}

export const getUnsharedPosts = (id) => async (dispatch) => {
    console.log("actions");
    try {
        const { data } = await api.getUnsharedPosts(id);
        dispatch({ type: FETCH_UNSHARED, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getSharedPosts = (id) => async (dispatch) => {
    try {
        const { data } = await api.getSharedPosts(id);
        dispatch({ type: FETCH_SHARED, payload: data });
    } catch (error) {
        console.log(error);
    }
}
