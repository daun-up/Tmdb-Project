import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({id, coverImg, title, overview}) {
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${coverImg}`} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
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