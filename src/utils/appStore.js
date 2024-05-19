import {configureStore} from "@reduxjs/toolkit";
import userSlicereducer from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";
const appStore=configureStore({
    reducer:{
        user:userSlicereducer,
        movie:moviesSlice,
        gpt:gptSlice,
        config:configSlice
    }
});

export default appStore;