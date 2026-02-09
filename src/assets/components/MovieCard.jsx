import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';

import {faStar} from '@fortawesome/free-solid-svg-icons';

function MovieCard({movie}) {
  return (
    <section className='grid grid-cols-4 gap-2 border-2 border-orange-100 m-2 rounded-lg'>
        <a className='border-r border-orange-100 justify-center items-center flex' href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank'>
            <img className='w-3/4' src={`https://www.themoviedb.org/t/p/w600_and_h900_face${movie.poster_path}`} alt="Movie Image" />
        </a>
        <div className='flex flex-col'>
            <div className='flex-none border border-t-0 border-orange-100 h-fit mb-2'>
                <h3 className='pb-2'>{movie.title}</h3>
            </div>
            <div className='flex-auto flex justify-center items-center border border-b-0 border-orange-100'>
                <p>
                    {movie.overview}
                </p>
            </div>
        </div>
        <div className='flex flex-col border-x border-orange-100'>
            <h3 className='flex-none'>Rating:</h3>
            <p className='flex-auto flex justify-center items-center text-5xl'>{movie.vote_average.toFixed(1)}/10<FontAwesomeIcon icon={faStar} style={{color: "#efbf04",}} /></p>
        </div>
        <div className='flex flex-col border-l border-orange-100'>
            <h3>Release Date:</h3>
            <p className='flex-auto flex justify-center items-center text-5xl'>{movie.release_date}</p>
        </div>
    </section>
  )
}

export default MovieCard
