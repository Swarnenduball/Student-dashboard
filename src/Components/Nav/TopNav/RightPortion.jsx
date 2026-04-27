import React from 'react'
import { Bell } from 'lucide-react'
import User from './User'

const RightPortion = () => {
  return (
    <div className='flex items-center h-3/4'>
      <div className="bell">
      <Bell />
      </div>
      <User/>
      
      
      </div>
  )
}

export default RightPortion