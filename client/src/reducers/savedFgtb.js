import { SAVE, FETCH_SAVED } from "../constants/actiontypes";

const savedReducer = (posts = [], action) => {
    switch(action.type) {
        case SAVE:
            return posts.map((post) => (post?._id===action?.payload?._id) ? action.payload : post);
        case FETCH_SAVED:
            return action.payload;
        default:
            return posts;
    }
}

export default savedReducer;
