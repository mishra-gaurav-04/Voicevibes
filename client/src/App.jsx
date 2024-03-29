import React from 'react'
import Home from './Pages/Home'
import Auth from './Pages/Auth';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App