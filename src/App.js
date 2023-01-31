import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Student from './components/Student'
import EditStudent from './components/EditStudent'
import AddStudent from './components/AddStudent'
import DataContext from './components/DataContext'

import './App.css'

const App = () => {
  const [data, setdata] = useState([{
    name: 'Yogendra',
    age: '25',
    course: 'B.E.',
    batch: '2020'
  },
  {
    name: 'patidar',
    age: '24',
    course: 'M. E.',
    batch: '2022'
  }])
  const navigate = useNavigate();
  const home = () => {
    navigate('/')
  }
  const student = () => {
    navigate('/student')
  }
  const contact = () => {
    navigate('/contact')
  }
  return (
    <div>
      <div className='navbar'>
        <h2 onClick={home}>Home</h2>
        <h2 onClick={student}>Student</h2>
        <h2 onClick={contact}>Contact Us</h2>

      </div>
      <div className='route-div'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/student' element={
            <DataContext.Provider value={{ entries: data, updatefunc: setdata }}>
              <Student />
            </DataContext.Provider>
          } />
          <Route path='/addstudent' element={
            <DataContext.Provider value={{ entries: data, updatefunc: setdata }}>
              <AddStudent />
            </DataContext.Provider>
          } />
          <Route path='/contact' element={<Contact />} />

          <Route path='/editstudent' element={
            <DataContext.Provider value={{ entries: data, updatefunc: setdata }}>
              <EditStudent />
            </DataContext.Provider>
          } />
        </Routes>
      </div>
    </div>
  )
}

export default App