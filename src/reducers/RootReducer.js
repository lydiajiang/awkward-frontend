import {combineReducers} from 'redux'
import {posts} from "./PostReducer";

export const rootReducer = combineReducers({
    posts
})