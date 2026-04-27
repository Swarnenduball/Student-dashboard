import React from 'react'
import MyCourseTop from './MyCourseTop'
import MyCourseBottom from './MyCourseBottom'

const MyCourses = () => {
  return (
    <div>
        <div className=" flex w-full flex-col  p-0 flex-1">
       <MyCourseTop/>
       <MyCourseBottom/>
            
        </div>
    </div>
  )
}

export default MyCourses