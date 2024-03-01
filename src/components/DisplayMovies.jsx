/* eslint-disable react/prop-types */

const DisplayMovies = ({ movies }) => {

  return (
    <div>
      <h1>Movies app</h1>
      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>{movie.director}</p>
            <p>{movie.releaseDate}</p>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayMovies;