import { configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postsReducer from './postSlice';
const store = configureStore({
    reducer: {postsReducer},
    middleware: [thunk],
})

export  default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch