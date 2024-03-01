import { createSlice } from '@reduxjs/toolkit';

const moiveSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: []
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        addMovie: (state, action) => {
            state.movies.push(action.payload);
        },
        updateMovie: (state, action) => {
            const index = state.movies.findIndex(movie => movie.id === action.payload.id);
            state.movies[index] = action.payload;
        }
    }
})

export const { setMovies, addMovie, updateMovie } = moiveSlice.actions;
export default moiveSlice.reducer;