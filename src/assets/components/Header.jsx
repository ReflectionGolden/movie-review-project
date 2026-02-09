import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';

import {faGithub} from '@fortawesome/free-brands-svg-icons';

function Header(props) {
    return (
        <div className='items-center justify-between px-5'>
            <div>
                <h1>Movie Review Application</h1>
                <p>
                    This project has been made in conjunction with the <a title='GitHub Pages site' href="https://reflectiongolden.github.io/react-essentials-site/"     target='_blank'>react-essentials-site</a><a title='GitHub Repository' href="https://github.com/ReflectionGolden/react-essentials-site" target='_blank'><FontAwesomeIcon icon={faGithub} /></a> project as part of Module 9.
                </p>
            </div>
            <nav className='flex items-left mx-auto my-5 w-fit'>
                <button className='mx-3 px-1 bg-neutral-800 text-indigo-500 border border-orange-100 rounded hover:text-indigo-400 hover:bg-linear-to-b hover:from-neutral-600 hover:to-neutral-700 active:bg-linear-to-t' onClick={() => props.handleListChange("popular", "Popular Movies")}>Popular Movies</button>
                <p>|</p>
                <button className='mx-3 px-1 bg-neutral-800 text-indigo-500 border border-orange-100 rounded hover:text-indigo-400 hover:bg-linear-to-b hover:from-neutral-600 hover:to-neutral-700 active:bg-linear-to-t' onClick={() => props.handleListChange("top_rated", "Top Rated Movies")}>Highly Rated</button>
                <p>|</p>
                <button className='mx-3 px-1 bg-neutral-800 text-indigo-500 border border-orange-100 rounded hover:text-indigo-400 hover:bg-linear-to-b hover:from-neutral-600 hover:to-neutral-700 active:bg-linear-to-t' onClick={() => props.handleListChange("now_playing", "Now Playing Movies")}>Now Playing</button>
            </nav>
        </div>
    )
}

export default Header
