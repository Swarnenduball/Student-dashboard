import { Award, BookOpen, Clock, TrendingUp, TrendingUpDownIcon } from 'lucide-react'
import React from 'react'

const CourseStatus = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-4 '>
      
      <div className="bg-white px-6 py-8 w-full border flex flex-col gap-2 border-slate-200 rounded-2xl duration-300 cursor-pointer transition-all hover:shadow-sm hover:translate-y-1 hover:shadow-black/30">
        <div className="bg-blue-500 h-12 w-12 flex items-center justify-center rounded-2xl">
          <BookOpen color='white' />
        </div>
        <h4 className='text-gray-500 mt-2'>Courses Enrolled</h4>
        <h1 className='font-bold text-3xl'>8</h1>
        <p className='text-green-600 text-xs'>+2 this semester</p>
      </div>


      <div className="bg-white px-6 py-8 w-full border flex flex-col gap-2 border-slate-200 rounded-2xl duration-300 cursor-pointer transition-all hover:shadow-sm hover:translate-y-1 hover:shadow-black/30">
        <div className="bg-purple-500 h-12 w-12 flex items-center justify-center rounded-2xl">
          <Clock color='white' />
        </div>
        <h4 className='text-gray-500 mt-2'>Hours Studied</h4>
        <h1 className='font-bold text-3xl'>124</h1>
        <p className='text-green-600 text-xs'>+18 this week</p>
      </div>

    <div className="bg-white px-6 py-8 w-full border flex flex-col gap-2 border-slate-200 rounded-2xl duration-300 cursor-pointer transition-all hover:shadow-sm hover:translate-y-1 hover:shadow-black/30">
        <div className="bg-green-500 h-12 w-12 flex items-center justify-center rounded-2xl">
          <Award color='white' />
        </div>
        <h4 className='text-gray-500 mt-2'>Average Grade</h4>
        <h1 className='font-bold text-3xl'>92%</h1>
        <p className='text-green-600 text-xs'>+3% from last month</p>
      </div>

       <div className="bg-white px-6 py-8 w-full border flex flex-col gap-2 border-slate-200 rounded-2xl duration-300 cursor-pointer transition-all hover:shadow-sm hover:translate-y-1 hover:shadow-black/30">
        <div className="bg-orange-500 h-12 w-12 flex items-center justify-center rounded-2xl">
          <TrendingUp color='white' />
        </div>
        <h4 className='text-gray-500 mt-2'>Completion Rate</h4>
        <h1 className='font-bold text-3xl'>87%</h1>
        <p className='text-green-600 text-xs'>+5% improvement</p>
      </div>
      
    </div>
  )
}

export default CourseStatus