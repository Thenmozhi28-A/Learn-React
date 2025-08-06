import { configureStore } from "@reduxjs/toolkit";
import useReducer from "..//redux/UserSlice";

const store= configureStore({
    reducer:{
        usersInfo: useReducer,
    },
});

export default store;