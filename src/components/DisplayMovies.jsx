/* eslint-disable react/prop-types */

const DisplayMovies = ({ movies }) => {
  
  return (
    <div>
      {movies &&
        movies.map((movie) => (
          <div key={movie._id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>{movie.director}</p>
            <p>{movie.releaseDate}</p>
          </div>
        ))}
    </div>
  );
};

export default DisplayMovies;
