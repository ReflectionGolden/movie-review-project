import '../../App.css';

const FilterMovies = ({handleMovieFilter, ratings, minRating}) => {
  return (
    <>
        <ul className='flex justify-center items-center'>
            <li className='px-3'>Rating:</li>
            {ratings.map(rate => 
                <li key={rate} className={`px-3 cursor-pointer hover:text-indigo-400 ${minRating === rate ? 'underline' : ''}`} onClick={() => handleMovieFilter(rate)}>{rate === 0 ? "all" : rate.toString()+"+"}</li>
            )}
        </ul>
    </>
  )
}

export default FilterMovies