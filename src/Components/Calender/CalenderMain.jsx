import React from 'react'
import CalenderBody from './CalenderBody'

const CalenderMain = () => {
  return (
    <div>
        <div>
            <h1 className='text-3xl font-bold'>Calender</h1>
            <p className='text-lg mt-3'>View your schedule and upcoming events</p>
        </div>
        <CalenderBody/>
    </div>
  )
}

export default CalenderMain