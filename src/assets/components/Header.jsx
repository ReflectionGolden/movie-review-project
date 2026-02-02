
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css'

import {faGithub} from '@fortawesome/free-brands-svg-icons';

function AppHeader() {
    return (
        <div>
            <h1>Movie Review Application</h1>
            <p>
                This project has been made in conjunction with the <a title='GitHub Pages site' href="https://reflectiongolden.github.io/react-essentials-site/"     target='_blank'>react-essentials-site</a><a title='GitHub Repository' href="https://github.com/ReflectionGolden/react-essentials-site" target='_blank'><FontAwesomeIcon icon={faGithub} /></a> project as part of Module 9.
            </p>
            <nav></nav>
        </div>
    )
}

export default AppHeader