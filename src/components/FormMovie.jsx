import { useRef } from "react";
import { addMovieAsync } from "./features/MovieSlice";
import { useDispatch } from 'react-redux';

const FormMovie = () => {

    const dispatch = useDispatch();

    const inputTitle = useRef();
    const inputDescription = useRef();
    const inputDirector = useRef();
    const inputReleaseDate = useRef();

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(addMovieAsync({
            title: inputTitle.current.value,
            description: inputDescription.current.value,
            director: inputDirector.current.value,
            releaseDate: inputReleaseDate.current.value
        }));

        inputTitle.current.value = '';
        inputDescription.current.value = '';
        inputDirector.current.value = '';
        inputReleaseDate.current.value = '';
    }



  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="title">Titre</label>
            <input type="text" className="form-control" id="title" name="title" ref={inputTitle} required />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" name="description" ref={inputDescription} required />
        </div>
        <div className="form-group">
            <label htmlFor="director">Réalisateur</label>
            <input type="text" className="form-control" id="director" name="director" ref={inputDirector} required />
        </div>
        <div className="form-group">
            <label htmlFor="releaseDate">Date de sortie</label>
            <input type="date" className="form-control" id="releaseDate" name="releaseDate" ref={inputReleaseDate} required />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
    </form>
  )
}

export default FormMovie