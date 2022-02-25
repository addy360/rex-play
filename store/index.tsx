import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";

import userReducer from "./users/index";
import postReducer from "./posts/index"

const reducer = combineReducers({
    user: userReducer,
    post: postReducer
})

// const store = createStore(reducer)

const store = configureStore({ reducer })

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store