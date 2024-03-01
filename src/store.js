import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './components/features/MovieSlice';

export default configureStore({
    reducer: {
        movies: movieReducer,
    },
});
