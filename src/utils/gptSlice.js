import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showSearch:false,
        gptMovies:null,
        movieNames:null
    },
    reducers:{
        toggleSearch:(state,action)=>{
            state.showSearch=!state.showSearch
        },
        addMovieResults:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.gptMovies=movieResults;
        }
    }
})
export const {toggleSearch,addMovieResults}=gptSlice.actions;
export default gptSlice.reducer;