import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import DetailsAnime from './pages/Details/Anime/DetailsAnime'
import DetailsMangas from './pages/Details/Mangas/DetailsMangas'
import Animes from './pages/Animes/Animes'
import Mangas from './pages/Mangas/Mangas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes >
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/animes' element={<Animes />}/>
          <Route path='/mangas' element={<Mangas />} />
          <Route path='/anime/:id' element={<DetailsAnime />}/>
          <Route path='/manga/:id' element={<DetailsMangas />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
