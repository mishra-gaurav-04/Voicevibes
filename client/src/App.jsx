import React from 'react'
import Home from './Pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App