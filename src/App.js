import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi'; 
import { MdGroup, MdMovie } from 'react-icons/md'; 
import { GiGamepad } from 'react-icons/gi'; 
import './App.css';
import Movie from './pages/Movie';
import Series from './pages/Series'; 
import Game from './pages/Game';      
import Profile from './pages/Profile';
import Detail from './pages/Detail';  

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 14</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/movie" replace />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/series" element={<Series />} />  
        <Route path="/game" element={<Game />} />      
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:category/:id" element={<Detail />} />  
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/series" className="iconWrapper">  
          <MdMovie className="icon" /> Series
        </NavLink>
        <NavLink to="/game" className="iconWrapper">    
          <GiGamepad className="icon" /> Game
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
