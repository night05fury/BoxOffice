import React from "react";

// used destructring for props using {} braces
const MovieCard = ({movie}) =>{
    return(
        <div className='container'>
        <div className="movie">
            <p>
                {movie.Year}
            </p>
        <div className=''>
            <img src={movie.Poster!=='N/A'? movie.Poster :'https://via.placeholder.com/400'} alt={movie.Title}/>
        </div>
        <div >
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
        </div>
    </div>
    );
}

export default MovieCard;