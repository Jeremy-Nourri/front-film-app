import { useRef } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { addMovieAsync, updateMovieAsync } from "./MovieSlice";
import { useDispatch, useSelector } from 'react-redux';

const FormMovie = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const mode = searchParams.get("mode") ?? "Ajouter";

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);

    const movieFound = movies.find((movie) => movie._id === id);

    const dateEn = movieFound?.releaseDate.split('/').reverse().join('-');

    const inputTitle = useRef();
    const inputDescription = useRef();
    const inputDirector = useRef();
    const inputReleaseDate = useRef();

    const handleSubmit = (e) => {

        e.preventDefault();

        const dateMovie = new Date(inputReleaseDate.current.value);
        const formatedDate = dateMovie.toLocaleDateString('fr-FR');

        if (mode === "Modifier") {

            dispatch(updateMovieAsync({
                _id: id,
                title: inputTitle.current.value,
                description: inputDescription.current.value,
                director: inputDirector.current.value,
                releaseDate: formatedDate
            }));
            navigate('/');
        } else {
            dispatch(addMovieAsync({
                title: inputTitle.current.value,
                description: inputDescription.current.value,
                director: inputDirector.current.value,
                releaseDate: formatedDate
            }));
            navigate('/');
        }

        inputTitle.current.value = '';
        inputDescription.current.value = '';
        inputDirector.current.value = '';
        inputReleaseDate.current.value = '';

        
    }

  return (
    <form onSubmit={handleSubmit} className="text-sm text-center">
        <h2 className="text-lg font-bold text-blue-700 mb-4">{mode} un film</h2>
        <div>
            <label htmlFor="title" className="label">Titre</label>
            <input 
                type="text"
                id="title"
                name="title" 
                ref={inputTitle}
                defaultValue={movieFound?.title ?? ''}
                maxLength={50}
                required 
                className="input-form "
            />
        </div>
        <div>
            <label htmlFor="description" className="label">Description</label>
            <textarea 
                id="description" 
                name="description" 
                ref={inputDescription}
                defaultValue={movieFound?.description ?? ''}
                maxLength={400}
                required
                className="input-form h-[200px]"
            />
        </div>
        <div>
            <label htmlFor="director" className="label">Réalisateur</label>
            <input 
                type="text" 
                id="director" 
                name="director" 
                ref={inputDirector} 
                defaultValue={movieFound?.director ?? ''}
                required 
                className="input-form" 
            />
        </div>
        <div>
            <label htmlFor="releaseDate" className="label">Date de sortie</label>
            <input 
                type="date"
                id="releaseDate"
                name="releaseDate" 
                ref={inputReleaseDate} 
                defaultValue={dateEn ?? ''}
                required 
                className="input-form cursor-pointer"
            />
        </div>
        <button type="submit" className="btn">{mode}</button>
    </form>
  )
}

export default FormMovie