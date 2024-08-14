const AllDeleteButton = (props) => {
  return (
    <button className="text-white text-lg bg-[#e50914] py-1 px-3 cursor-pointer" onClick={props.deleteAllMovies}>Vymaž všechny filmy</button>
  )
}

export default AllDeleteButton
