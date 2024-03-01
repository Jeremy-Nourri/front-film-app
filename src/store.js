import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './components/features/Movie/MovieSlice';
import modalReducer from './components/features/Modal/ModalSlice';

export default configureStore({
    reducer: {
        movies: movieReducer,
        modal: modalReducer,
    },
});
