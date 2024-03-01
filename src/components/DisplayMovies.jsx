/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const DisplayMovies = ({ movies }) => {
  
  return (
    <div className="flex flex-wrap justify-center items-center p-4"> 
      {movies &&
        movies.map((movie) => (
          <div key={movie._id} className="max-w-[400px] min-h-[370px] p-4 m-4 bg-slate-100 rounded-md shadow-md">
            <h2 className="text-2xl text-blue-800 font-semibold mb-3">{movie.title}</h2>
            <p className="text-sm mb-3">{movie.description}</p>
            <p className="text-sm mb-3">{movie.director}</p>
            <p className="text-sm mb-3">{movie.releaseDate}</p>
            <Link to={`/movie/${movie._id}?mode=Modifier`} className="btn">Modifier</Link>
            

          </div>
        ))}
    </div>
  );
};

export default DisplayMovies;
