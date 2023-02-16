import React from "react";

// used destructring for props using {} braces
const MovieCard = ({movie:{imdbID, Year, Poster, Title, Type}}) =>{
    return(
       
        <div className="movie" key={imdbID}>
            <p>
                {Year}
            </p>
        <div className=''>
            <img src={Poster!=='N/A'? Poster :'https://via.placeholder.com/400'} alt={Title}/>
        </div>
        <div >
            <span>{Type}</span>
            <h3>{Title}</h3>
        </div>
        </div>
    
    );
}

export default MovieCard;