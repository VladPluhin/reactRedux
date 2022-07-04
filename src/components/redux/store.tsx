import { postReducer } from "./postReducer";
import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";


export const store = configureStore({
    reducer: {postReducer},
    middleware: [thunk],
});