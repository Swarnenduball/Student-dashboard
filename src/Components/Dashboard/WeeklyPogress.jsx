import React from 'react'
import WeeklyPogressTop from './WeeklyPogressTop'
import WeeklyPogressBar from './WeeklyPogressBar'
import WeeklyStatus from './WeeklyStatus'

const WeeklyPogress = () => {
  return (
    <div className='w-full bg-white rounded-2xl px-5 py4'>
       <WeeklyPogressTop/>
       <WeeklyPogressBar/>
       <WeeklyStatus/>
        
        
        </div>
  )
}

export default WeeklyPogress