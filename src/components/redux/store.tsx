import { postReducer } from "./postReducer";
import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {fetchPost, sortPost} from './action-creater'

export const store = configureStore({
    reducer: {postReducer},
    middleware: [thunk],
})