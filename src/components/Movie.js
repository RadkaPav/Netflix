import "./Movie.css"
import allMovies from "../data"
import AllDeleteButton from "./AllDeleteButton";
import ReloadMovieButton from "./ReloadMovieButton";
import MovieDeleteButton from "./MovieDeleteButton";
import React, { useState } from 'react';


const Movie = () => {
const [movie, setMovie] = useState(allMovies)
    const deleteMovie = (id) => {
        const filteredMovies = movie.filter((oneMovie) => {
            return oneMovie.id !== id
        })
        setMovie(filteredMovies)
    }
  return (
    <section>
       <div className="all-movies">
        {movie.map((oneMovie) => {
            const {id, image, title, age, tags, description, category} = oneMovie
            return <div className="one-movie" key={id}>
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{age}</p>
                <p>{tags}</p>
                <p>{description}</p>
                <p>{category}</p>
                <MovieDeleteButton deleteMovie={() => deleteMovie(id)}/>
            </div>
})}
    </div>
    <div className="button-box">
    <AllDeleteButton deleteAllMovies = {() => setMovie([])} />
    <ReloadMovieButton reloadMovies = {() => setMovie(allMovies)}/>  
    </div>
    </section>
   
  )
}

export default Movie