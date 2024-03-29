import { useEffect } from "react";
import { setMovies } from "./components/features/Movie/MovieSlice";
import { openModal } from "./components/features/Modal/ModalSlice";
import { useDispatch, useSelector } from "react-redux";

import DisplayMovies from "./components/DisplayMovies";
import FormMovie from "./components/features/Movie/FormMovie";
import Modal from "./components/features/Modal/Modal";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.movies);
  const isModalOpen = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/movies");
        const data = await response.json();
        dispatch(setMovies(data));
      } catch (error) {
        console.error("Erreur lors de la récupération des films", error);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <header>
        <button className="btn" onClick={() => dispatch(openModal())}>
          Ajouter un film
        </button>
      </header>
      <main>
        {movies.length === 0 ? (
          <span className="loader"></span>
        ) : (
          <>
            <DisplayMovies movies={movies} />
            {isModalOpen && (
              <Modal>
                <FormMovie />
              </Modal>
            )}
          </>
        )}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
