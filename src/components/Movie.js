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
       <div className="w-[90%] flex flex-row justify-center flex-wrap my-10 mx-auto">
        {movie.map((oneMovie) => {
            const {id, image, title, age, tags, description, category} = oneMovie
            return <div className="w-[300px] text-white my-2 mx-1 bg-[#141414] transition-all duration-500 hover:scale-105" key={id}>
                <img src={image} alt="" className="h-[170px]"/>
                <h2 className="pl-2 my-2">{title}</h2>
                <p className="pl-2 my-2">{age}</p>
                <p className="pl-2 my-2">{tags}</p>
                <p className="pl-2 my-2">{description}</p>
                <p className="pl-2 my-2">{category}</p>
                <MovieDeleteButton deleteMovie={() => deleteMovie(id)}/>
            </div>
})}
    </div>
    <div className="flex flex-row justify-center">
    <AllDeleteButton deleteAllMovies = {() => setMovie([])} />
    <ReloadMovieButton reloadMovies = {() => setMovie(allMovies)}/>  
    </div>
    </section> 
  )
}

export default Movie