import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import axios from 'axios';

function Home(){
    const [loading, setLoading] = useState(true);
    const [results, setMovies] = useState([]);
    const KEY = process.env.REACT_APP_API_KEY;
    const getMovies = async () => {
        const data = await axios.get (
                `https://api.themoviedb.org/3/discover/movie`,
                {
                    headers: {
                        Authorization: `Bearer ${KEY}`
                    }
                }

        );
        setMovies(data.data.results);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    {results.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.release_date}
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