import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {
  return (
    <button className="main-delete-button" onClick={props.deleteAllMovies}>Vymaž všechny filmy</button>
  )
}

export default AllDeleteButton