import "./Movie.css";
import data from "../data";
import MovieDeleteButton from "./MovieDeleteButton";
import { useState } from "react";
import AllDeleteButton from "./AllDeleteButton";
import ReloadMovieButton from "./ReloadMovieButton";
import categories from "../categories";

const Movie = () => {
    const [movies, setMovies] = useState(data);
    const deleteOneMovie = (idecko) => {
        const filteredMovies = movies.filter((oneMovie) => {
            return oneMovie.id !== idecko;
        });
        setMovies(filteredMovies);
    };
    const deleteAllMovies = () => {
        setMovies([])
    }
    const reloadAllMovies = () => {
        setMovies(data)
    }

    return (
        <section>
             <div className="all-movies">
            {
                movies.map((oneMovie) => {
                    const { id, image, title, age, tags, description } = oneMovie;
                    return <div key={id} className="one-movie">
                        <img src={image} alt="" />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <MovieDeleteButton delete={() => deleteOneMovie(id)} />
                    </div>;
                })
                
            }
        </div>
        <div className="button-box">
            <AllDeleteButton deleteAll={deleteAllMovies}/>
            <ReloadMovieButton reload={reloadAllMovies} />
        </div>
        </section>
    );
        
       
};

export default Movie;
