import { repoPath } from '../js/deploy'
import { Link } from 'react-router-dom'

import '../styles/default/404.scss'



export default function NotFound() {
    return (
        <div className='wrongLink'>
            <h1>Change your Settings for browser Support</h1>
            <p>This is unavailable because of This React Application is deployed on Github Pages</p>
            <Link to={repoPath('/home')}>
                <button>Go to main page </button>
            </Link>
        </div>

    )
}