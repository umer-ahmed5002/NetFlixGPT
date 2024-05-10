import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesResult: null,
    moviesName: null
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch
    },
    addGptMovieResult: (state, action) => {
      const { moviesName, moviesResult } = action.payload
      state.moviesResult = moviesResult
      state.moviesName = moviesName
    }
  }
})

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions
export default gptSlice.reducer;