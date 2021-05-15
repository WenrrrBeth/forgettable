import { FETCH_UNSHARED } from "../constants/actiontypes";

const unsharedFgtbReducer = (posts = [], action) => {
    switch(action.type) {
        case FETCH_UNSHARED:
            return action.payload;
        default:
            return posts;
    }
}

export default unsharedFgtbReducer;
