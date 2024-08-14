const MovieDeleteButton = (props) => {
  return (
    <button className="text-white bg-[#e50914] p-1 cursor-pointer w-[300px]" onClick={props.deleteMovie}>Vymaž film</button>
  )
}

export default MovieDeleteButton