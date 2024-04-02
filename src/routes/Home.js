import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import App from "../App";

function Home(){
    const [loading, setLoading] = useState(true);
    const [results, setMovies] = useState([]);
    const KEY = process.env.REACT_APP_API_KEY;
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://api.themoviedb.org/3/discover/movie`,
                {
                    headers: {
                        Authorization: `Bearer ${KEY}`
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