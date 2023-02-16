import React from 'react';
import { useState } from 'react';
import "./App.css"
import SearchIcon from './search.svg';
import MovieCard  from './MovieCard';



//58a66706    API Key for OMBD 

const API_URL='http://www.omdbapi.com?apikey=58a66706';
// const movie={
//     "Title":"Avengers",
//     "Year":"2015",
//     "imdbID":"tt2586634",
//     "Type":"movie",
//     "Poster":"N/A"
// }




const App=()=>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm]=useState("");
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(data.Search);
        

    }
    // useEffect(()=>{
    //     searchMovies('Avengers');
    // },[]);



    return(
    <div className="app">
            <h1>
                Box Office
            </h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon}
                alt="Search"
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length>0?(
                    <div className='container'>
                    {/* <MovieCard movie1={movie1}/>  this is static card  */}
                    
                    {/* this is now a dynamic map for accessing the movie */
                        movies.map((movie)=>(
                            <MovieCard movie={movie} />
                        ))
                    }
                </div>
                ):(
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
           
           
    </div>
    );
}

export default App;