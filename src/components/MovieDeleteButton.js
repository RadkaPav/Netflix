import "./MovieDeleteButton.css"

const MovieDeleteButton = (props) => {
  return (
    <button className="movie-delete-button" onClick={props.deleteMovie}>Vymaž film</button>
  )
}

export default MovieDeleteButton