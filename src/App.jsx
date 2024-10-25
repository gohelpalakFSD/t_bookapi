import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Form from './components/pages/Form'
import SingleBook from './components/pages/SingleBook'


function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/singlebook/:id' element={<SingleBook/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
