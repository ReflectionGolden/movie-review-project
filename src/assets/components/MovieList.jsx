import React from 'react'
import '../../App.css'

function MovieList(props) {
  return (
    <section className=' border-2 border-orange-100 rounded-lg bg-neutral-800'>
        <header className='px-3 pt-6 text-left'>
            <h2>{props.title}</h2>
        </header>
        <div className='flex items-center py-4'>
            <ul className='flex justify-center items-center'>
                <li className='px-3'>Rating:</li>
                <li className={`px-3 cursor-pointer hover:text-indigo-400 ${props.minRating === 8 ? 'underline' : ''}`} onClick={() => props.handleMovieFilter(8)}>8+</li>
                <li className={`px-3 cursor-pointer hover:text-indigo-400 ${props.minRating === 7 ? 'underline' : ''}`} onClick={() => props.handleMovieFilter(7)}>7+</li>
                <li className={`px-3 cursor-pointer hover:text-indigo-400 ${props.minRating === 6 ? 'underline' : ''}`} onClick={() => props.handleMovieFilter(6)}>6+</li>
                <li className={`px-3 cursor-pointer hover:text-indigo-400 ${props.minRating === 0 ? 'underline' : ''}`} onClick={() => props.handleMovieFilter(0)}>all</li>
            </ul>
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
