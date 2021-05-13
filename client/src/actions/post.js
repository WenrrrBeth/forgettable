import { POST } from "../constants/actiontypes";
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
