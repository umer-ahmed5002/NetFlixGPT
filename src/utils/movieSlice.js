import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies:null,
    trailerVideo:null,
    popularMovies:null,
    topRatedMovies:null,
    upcommingMovies:null
  },
  reducers:{
    addNowPlayingMovies:(state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload
    },
    addUpcommingMovies: (state, action) => {
      state.upcommingMovies = action.payload
    },
    addTraillerVideo:(state,action) => {
      state.trailerVideo = action.payload
    }
  }
})

export const { addNowPlayingMovies, addTraillerVideo, addPopularMovies, addTopRatedMovies, addUpcommingMovies } = movieSlice.actions
export default movieSlice.reducer