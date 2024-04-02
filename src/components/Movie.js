import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, overview, year}) {
    return(
        <div className={styles.movie}>
            <img src={`https://image.tmdb.org/t/p/w500${coverImg}`} alt={title} className={styles.movie__img}/>
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{overview}</p>
        </div>
    );

}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
};

export default Movie;