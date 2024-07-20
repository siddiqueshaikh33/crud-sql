//import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Add from './Component/Add'
import Edit from './Component/Edit'
function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/add' element={<Add/>}/>
        <Route exact path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </Router>
  )
}

export default App
