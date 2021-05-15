import { POST, FETCH_ALL_SHARED } from "../constants/actiontypes";

const forgettableReducer = (posts = [], action) => {
    switch(action.type) {
        case POST:
            return [...posts, action.payload];
        case FETCH_ALL_SHARED:
            return action.payload;
        default:
            return posts;
    }
}

export default forgettableReducer;
