import {configureStore} from "@reduxjs/toolkit";
import userSlicereducer from "./userSlice";
import moviesSlice from "./moviesSlice";
const appStore=configureStore({
    reducer:{
        user:userSlicereducer,
        movie:moviesSlice
    }
});

export default appStore;