import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./Home.module.css";
import Movie from "../components/Movie";
import axios from "axios";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState([]);
    const KEY = process.env.REACT_APP_API_KEY;

    const getDetail = async () => {
        const data = await axios.get (
            `https://api.themoviedb.org/3/movie/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${KEY}`
                    }
                }


        )
        setMovies(data.data);
        setLoading(false);
    };
    useEffect(() => {
        getDetail();
    }, []);
    // return <h1>Detail {id}</h1>;
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                        <Movie
                            key={id}
                            id={id}
                            year={movie.release_date}
                            coverImg={movie.poster_path}
                            title={movie.title}
                            overview={movie.overview}
                        />
                </div>
            )}
        </div>
    )
}

export default Detail;