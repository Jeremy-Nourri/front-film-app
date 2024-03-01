import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addMovieAsync = createAsyncThunk(
    'movie/addMovie',
    async (movie) => {
       try {
        const response = await fetch('http://localhost:3000/add-movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        const data = await response.json();
        return data;
       } catch (error) {
              console.error("Erreur lors de l'ajout du film", error);
         }
    }
);

const moiveSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: []
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        updateMovie: (state, action) => {
            const index = state.movies.findIndex(movie => movie.id === action.payload.id);
            state.movies[index] = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addMovieAsync.fulfilled, (state, action) => {
          state.movies.push(action.payload);
        });
    }
})

export const { setMovies, updateMovie } = moiveSlice.actions;
export default moiveSlice.reducer;