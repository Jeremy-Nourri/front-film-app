import { useEffect } from 'react';
import { setMovies } from "./components/features/MovieSlice";
import { useDispatch, useSelector } from 'react-redux';

import DisplayMovies from './components/DisplayMovies'
import FormMovie from './components/FormMovie';

import './App.css'


function App() {

  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    (async () => {
        try {
            const response = await fetch('http://localhost:3000/movies');
            const data = await response.json();
            dispatch(setMovies(data));
        } catch (error) {
            console.error("Erreur lors de la récupération des films", error);
        }
    }
    )();
}, [dispatch]);


  return (
    <>
      <header>
      
      </header>
      <main>
        {
          movies.length === 0 ? (
          <span className="loader"></span>
          ) : (

            <>
              <FormMovie />
              <DisplayMovies movies={movies} />
            </>
          )
        }

      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
