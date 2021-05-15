import { FETCH_SHARED } from "../constants/actiontypes";

const sharedFgtbReducer = (posts = [], action) => {
    switch(action.type) {
        case FETCH_SHARED:
            return action.payload;
        default:
            return posts;
    }
}

export default sharedFgtbReducer
