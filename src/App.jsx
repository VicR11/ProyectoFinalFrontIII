import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import CharacterDetailsPage from './pages/CharacterDetails/CharacterDetailsPage';
import Contact from './pages/Contact/Contact';

import './App.css'
import { CharacterProvider } from './context/CharacterContext';

function App() {
 

  return (
    <BrowserRouter>
      <CharacterProvider>
        
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Favorites' element={<Favorites />}></Route>
            <Route path='/CharacterDetailsPage/:id' element={<CharacterDetailsPage />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path="*" element={<h1>Not Found 404</h1>} />
          </Routes>
        
        </CharacterProvider>
       
      </BrowserRouter>
 
    
  )
}

export default App
