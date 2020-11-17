import React from "react";
import PropTypes from "prop-types";



function Movie({title, summary, id, year, poster}) {

    return (
    <div className = "movies">
        <img src={poster} alt={title} title={title}></img>
        <div className = "movie__data">
            <h3 className="movie__title">{title}</h3>
            <h3 className="movie__year">{year}</h3> 
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
    
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired 
};

export default Movie;