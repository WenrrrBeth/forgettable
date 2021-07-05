import { POST, FETCH_UNSHARED, FETCH_SHARED, FETCH_ALL_SHARED, SAVE, FETCH_SAVED } from "../constants/actiontypes";
import * as api from "../api/index";

export const postEvent = (inputData, history) => async (dispatch) => {
    console.log(inputData)
    try {
        const { data } = await api.postevent(inputData);
        console.log(data)
        dispatch({ type: POST, data });
        history.push("/profile");
    } catch (error) {
        console.log(error);
    }
}

export const getUnsharedPosts = (id) => async (dispatch) => {
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

export const getAllSharedPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getAllSharedPosts();
        dispatch({ type: FETCH_ALL_SHARED, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (pid, updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(pid, updatedData);
        dispatch({ type: SAVE, data });
    } catch (error) {
        console.log(error);
    }
}

export const getSavedPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.getSavedPost(id);
        dispatch({ type: FETCH_SAVED, payload: data });
    } catch (error) {
        console.log(error);
    }
}

