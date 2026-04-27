import React from 'react'
import CourseStatus from '../CourseStatus'
import WeeklyPogress from './WeeklyPogress'
import MyCourses from './DashboardCourse/MyCourses'
import Task from './DashboardTask/Task'

const DashboardJoin = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className="text">
            <h1 className='text-3xl font-bold'>Welcome back, Sarah! 👋</h1>
      <p className='opacity-90'>Here's what's happening with your learning today</p>
      </div>
      <CourseStatus/>
      <WeeklyPogress/>
     <div className="flex w-full flex-wrap gap-5 items-start lg:flex-nowrap">
      <div className="w-full lg:w-4/6">
        <MyCourses />
      </div>
      <div className="w-full lg:w-2/6">
        <Task />
      </div>
    </div>
      
  
    </div>
  )
}

export default DashboardJoin