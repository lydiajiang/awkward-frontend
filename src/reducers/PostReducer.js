import {ADD_POST, FETCH_POST, TOGGLE_FAVORITE} from "../action/posts";
import {updateRecordOnCollection, normalizeById, addItemToCollection} from "./helpers";

const initialState = {
    allIds: [],
    byId: {},
}

export const posts = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return addItemToCollection(state, action.post);
        case TOGGLE_FAVORITE:
            return updateRecordOnCollection(state, action.post);
        case FETCH_POST:
            return normalizeById(action.posts);
        default:
            return state
    }
}

export function getAllPostIds(state) {
    return state.posts.allIds
}

export function getPostById(state, id) {
    return state.posts.byId[id]
}
