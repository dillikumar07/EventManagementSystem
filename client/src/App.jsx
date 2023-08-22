import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import CreateEvents from './CreateEvents';
import Home from './Home';
import ApproveEvents from './ApproveEvents';
import DisplayEvents from './DisplayEvents';
import Events from './Events';
import Contact from './Contact';
import About from './About';
import Sports from './components/Sports';
import Music from './components/Music';
import Games from './components/Games';
import Comedy from './components/Comedy';
import Courses from './components/Courses';
import Workshops from './components/Workshops';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/createvent' element={<CreateEvents />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/approve' element={<ApproveEvents />}></Route>
        <Route path='/display/:id' element={<DisplayEvents />}></Route>
        <Route path='/sports' element={<Sports/>}></Route>
        <Route path='/music' element={<Music/>}></Route>
        <Route path='/games' element={<Games/>}></Route>
        <Route path='/comedy' element={<Comedy/>}></Route>
        <Route path='/course' element={<Courses/>}></Route>
        <Route path='/workshop' element={<Workshops/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
