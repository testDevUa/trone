import { combineReducers, createStore } from "redux";
import postsReducer from './postsReducer';


let reducers = combineReducers({
    postsReducer
})

let store = createStore(reducers);

window.store = store.getState();

export default store;