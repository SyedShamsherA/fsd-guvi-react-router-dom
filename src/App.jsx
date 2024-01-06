import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import All from './components/all'
import Fullstack from './components/fullstack'
import Datascience from './components/datascience'
import Cybersecurity from './components/cybersecurity'
import Career from './components/career'
import Guvi from '../src/assets/guvi.png'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <div>
          <img src={Guvi} alt='Guvi' className='image-guvi' />
          <nav>
            <ul className="horizontal-menu">
              <li>
                <a href="/">ALL</a>
              </li>
              <li>
                <a href="/fullstack">FULL STACK DEVELOPMENT</a>
              </li>
              <li>
                <a href="/datascience">DATA SCIENCE</a>
              </li>
              <li>
                <a href="/cybersecurity">CYBER SECURITY</a>
              </li>
              <li>
                <a href="/career">CAREER</a>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' Component={All} />
            <Route path='/fullstack' Component={Fullstack} />
            <Route path='/datascience' Component={Datascience} />
            <Route path='/cybersecurity' Component={Cybersecurity} />
            <Route path='/career' Component={Career} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
