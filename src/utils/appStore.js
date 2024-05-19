import {configureStore} from "@reduxjs/toolkit";
import userSlicereducer from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
const appStore=configureStore({
    reducer:{
        user:userSlicereducer,
        movie:moviesSlice,
        gpt:gptSlice
    }
});

export default appStore;