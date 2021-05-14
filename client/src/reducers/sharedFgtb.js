import { FETCH_SHARED } from "../constants/actiontypes";

const sharedFgtbReducer = (posts = [], action) => {
    switch(action.type) {
        case FETCH_SHARED:
            console.log(action);
            return action.payload;
        default:
            return posts;
    }
}

export default sharedFgtbReducer
