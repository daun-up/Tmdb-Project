import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import App from "../App";

function Home(){
    const [loading, setLoading] = useState(true);
    const [results, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://api.themoviedb.org/3/discover/movie`,
                {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2QxOTAzM2JmYzA3YmFmNzMwYTBkNzNlZmUyNTdhOCIsInN1YiI6IjY2MGJhMTU0NWFhZGM0MDE2MzYzNWY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dThumqTNOQ2xbVSd4t7ZijMkQVXjUOy84cd6dGOWohQ`
                    }
                }
            )
        ).json();
        setMovies(json.results);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {results.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.poster_path}
                            title={movie.title}
                            overview={movie.overview}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;