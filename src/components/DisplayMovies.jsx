import { useEffect } from "react";

const DisplayMovies = () => {

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:3000/movies');
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des films", error);
            }
        }
        )();
    }, []);

  return (
    <div>DisplayMovies</div>
  )
}

export default DisplayMovies;