import {applyMiddleware, combineReducers, createStore} from "redux";
import platformReducer from "./platformsReducer";
import browsersReducer from "./browsersReducer";
import OSReducer from "./OSReducer";
import groupsReducer from "./groupsReducer";
import dataReducer from "./dataReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    platforms: platformReducer,
    browsers: browsersReducer,
    operatingSystems: OSReducer,
    groups: groupsReducer,
    data: dataReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;