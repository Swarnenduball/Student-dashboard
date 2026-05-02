import React from 'react'
import CalenderBox from './CalenderBox'
import UpcomingSchedule from './UpcomingSchedule'

const CalenderBody = () => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap w-full justify-between py-8 px-3'>
        <CalenderBox/>
        <UpcomingSchedule/>
    </div>
  )
}

export default CalenderBody