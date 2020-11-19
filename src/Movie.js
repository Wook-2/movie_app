import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"


function Movie({title, summary, id, year, poster, genre}) {

    return (
    <div className = "movies__movie">
        <img src={poster} alt={title} title={title}></img>
        <div className = "movie__data">
            <h3 className="movie__title">{title}</h3>
            <h3 className="movie__year">{year}</h3>
            <ul className="movie__genres">
                {genre.map((genre, index) => (<li key={index} className="genres__genre">{genre}</li>
            ))}</ul>
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
    poster: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;