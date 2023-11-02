import { combineReducers } from "redux";

import getDetailReducer from "./getDetail";
import getAllReducer from "./getAll"


const appReducers = combineReducers({
    getAllReducer,
    getDetailReducer,
})

export default appReducers