
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css'

import {faStar} from '@fortawesome/free-solid-svg-icons';

function MovieCard(props) {
  return (
    <section className='grid grid-cols-4 gap-2 border-2 border-orange-100 m-2 rounded-lg'>
        <div className='border-r border-orange-100 justify-center items-center flex'>
            <img className='w-3/4' src={props.image} alt="Movie Image" />
        </div>
        <div className='flex flex-col'>
            <div className='flex-none border border-t-0 border-orange-100 h-fit mb-2'>
                <h3 className='pb-2'>{props.title}</h3>
            </div>
            <div className='flex-auto flex justify-center items-center border border-b-0 border-orange-100'>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
        <div className='flex flex-col border-x border-orange-100'>
            <h3 className='flex-none'>Rating:</h3>
            <p className='flex-auto flex justify-center items-center text-6xl'>{props.rating}/10<FontAwesomeIcon icon={faStar} style={{color: "#efbf04",}} /></p>
        </div>
        <div className='flex flex-col border-l border-orange-100'>
            <h3>Release Date:</h3>
            <p className='flex-auto flex justify-center items-center text-6xl'>{props.date}</p>
        </div>
    </section>
  )
}

export default MovieCard
