import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Class from './pages/Class'
import Student from './pages/Student'
import About from './pages/About'
import RootLayout from './Layouts/RootLayout'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Home/>}></Route>
            <Route path="/" element={<RootLayout/>}>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              <Route path="/classes" element={<Class/>}></Route>
              <Route path="/students" element={<Student/>}></Route>
              <Route path="/about" element={<About/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App