import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <h1>YAMSCART</h1>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/add" element={<Add />}></Route>
        </Routes>
    </>
  )
}

export default App