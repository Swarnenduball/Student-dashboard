import React from 'react'
import CourseSearchBar from './CourseSearchBar'
import { Filter } from 'lucide-react'
import ItemFilter from './ItemFilter'
import CourseMainBody from './CourseMainBody'

const CourseMain = () => {
  return (
    <div className=''>
      <div>
          <h1 className='text-3xl font-bold'>My Courses</h1>
      <p>Manage and track your enrolled courses</p>
      </div>
      <div className='w-full flex mt-5 gap-2 flex-wrap lg:flex-nowrap flex-nowrap'>
          <CourseSearchBar/>
          <ItemFilter/>
          </div>
          <CourseMainBody/>
     
    
    
    </div>
  )
}

export default CourseMain