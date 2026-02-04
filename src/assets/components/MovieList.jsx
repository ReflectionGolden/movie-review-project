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
                <li className='px-3 cursor-pointer'>8+</li>
                <li className='px-3 cursor-pointer'>7+</li>
                <li className='px-3 cursor-pointer'>6+</li>
            </ul>
            <select className='bg-neutral-800 outline outline-neutral-400 px-1 mx-1 rounded' name="" id="">
                <option value="" disabled>Sort By</option>
                <option value="">Date</option>
                <option value="">Rating</option>
            </select>
            <select className='bg-neutral-800 outline mx-1 rounded' name="" id="">
                <option value="">Ascending</option>
                <option value="">Descending</option>
            </select>
        </div>
        <div>
            {props.children}
        </div>
    </section>
  )
}

export default MovieList
