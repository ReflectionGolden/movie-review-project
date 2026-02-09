import FilterMovies from './FilterMovies';
import '../../App.css';

function MovieList(props) {
  return (
    <section className=' border-2 border-orange-100 rounded-lg bg-neutral-800'>
        <header className='px-3 pt-6 text-left'>
            <h2>{props.title}</h2>
        </header>
        <div className='flex items-center py-4'>
            <FilterMovies handleMovieFilter={props.handleMovieFilter} ratings={[8,7,6,0]} minRating={props.minRating} />
            <select className='bg-neutral-800 outline outline-neutral-400 px-1 mx-1 rounded' name="sortTypeDrop" id="sortTypeDrop" onChange={props.handleSorting}>
                <option disabled>Sort By</option>
                <option value="default">Default</option>
                <option value="date">Date</option>
                <option value="rating">Rating</option>
            </select>
            <select className='bg-neutral-800 outline mx-1 rounded' name="sortDirDrop" id="sortDirDrop" onChange={props.handleSorting}>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>
        <div>
            {props.children}
        </div>
    </section>
  )
}

export default MovieList
