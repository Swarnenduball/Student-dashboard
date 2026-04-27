import React, { useContext } from 'react'


import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Course from './Pages/Course'
import Task from './Pages/Task'
import Calender from './Pages/Calender'
import LeftNav from './Components/Nav/Leftnav/LeftNav'
import TopNav from './Components/Nav/TopNav/TopNav'
import { NavToggleContext } from './Contexts/NavToggle'
const App = () => {
  let {navActive,setNavActive}=useContext(NavToggleContext)
  return (
   <div className="flex min-h-screen">
  <LeftNav/>

  <div className={`flex bg-gray-50 flex-col lg:opacity-100 flex-1 ${navActive ? 'opacity-50' : 'opacity-100'}`}>
    
    <TopNav />

    <div className="flex-1 p-10">
      <Routes>
        <Route path='/dashboard' element={<Dashboard/> }/>
        <Route path='/course' element={<Course/> }/>
        <Route path='/task' element={<Task/> }/>
        <Route path='/calender' element={<Calender/> }/>
        <Route path='*' element={<Navigate to="/dashboard" />} />
        
      </Routes>
    </div>

  </div>
</div>
  )
}

export default App