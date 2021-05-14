import { POST } from "../constants/actiontypes";

const forgettableReducer = (posts = [], action) => {
    switch(action.type) {
        case POST:
            return [...posts, action.payload];
        default:
            return posts;
    }
}

export default forgettableReducer;
