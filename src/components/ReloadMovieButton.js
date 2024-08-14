import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
  return (
    <button className="reload-movies-button" onClick={props.reloadMovies}>Vypiš všechny filmy</button>
  )
}

export default ReloadMovieButton