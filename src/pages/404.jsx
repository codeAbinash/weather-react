import { repoPath } from '../js/deploy'
import { Link } from 'react-router-dom'

import '../styles/default/404.scss'



export default function NotFound() {
    return (
        <div className='wrongLink'>
            <h1>404 : Page Not Found</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, explicabo.</p>
            <Link to={repoPath('/home')}>
                <button>Go to main page </button>
            </Link>
        </div>

    )
}