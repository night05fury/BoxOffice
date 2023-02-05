import React, { useEffect } from 'react';
import "./App.css"
import SearchIcon from './search.svg';


//58a66706    API Key for OMBD 

const API_URL='http://www.omdbapi.com?apikey=58a66706';
const movie1={
    "Title":"Avengers",
    "Year":"2015",
    "imdbID":"tt2586634",
    "Type":"movie",
    "Poster":"N/A"
}




const App=()=>{

    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();

        console.log(data.Search);
        

    }
    useEffect(()=>{
        searchMovies('Avengers');
    },[]);



    return(
    <div className="app">
            <h1>
                Box Office
            </h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Avengers"
                    onChange={()=>{}}
                />
                <img src={SearchIcon}
                alt="Search"
                onClick={()=>{}}
                />
            </div>

            <div className='container'>
                <div className="movie">
                    <p>
                        {movie1.Year}
                    </p>
                <div className=''>
                    <img src={movie1.Poster!=='N/A'? movie1.Poster :'https://via.placeholder.com/400'} alt={movie1.Title}/>
                </div>
                <div >
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
                </div>
            </div>
    </div>
    );
}

export default App;