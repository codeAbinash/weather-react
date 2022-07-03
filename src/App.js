import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import { repoPath, REPO } from './js/deploy';

import './styles/main.scss'

//import screens
import Start from './pages/Start'
import Start2 from './pages/Start2'
import SetLocation from './pages/SetLocation'
import NotFound404 from './pages/404';




function App() {
  return (
    <div className='container'>

      <Router>
        <Routes>

          <Route path={ '/' + REPO } element={ <Start /> } />
          <Route path={ repoPath('/home') } element={ <Start /> } />

          <Route path={ repoPath('/home2') } element={ <Start2 /> } />
          <Route path={ repoPath('/set-location') } element={ <SetLocation /> } />

          <Route path='*' element={ <NotFound404 /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
