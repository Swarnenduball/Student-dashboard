import React from 'react'
import StudentPerformence from './StudentPerformence'
import PogressBar from './PogressBar'
import CourseGrade from './CourseGrade'

const GradeMain = () => {
  return (
    <div>
      <div>
            <h1 className='text-3xl font-bold'>Calender</h1>
            <p className='text-lg mt-3'>View your schedule and upcoming events</p>
        </div>
        <StudentPerformence/>
        <PogressBar/>
        <CourseGrade/>
    </div>
  )
}

export default GradeMain