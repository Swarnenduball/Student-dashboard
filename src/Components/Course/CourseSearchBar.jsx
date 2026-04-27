import { Search } from 'lucide-react'
import React, { useState } from 'react'

const CourseSearchBar = () => {
    const [text, setText] = useState('')
  return (
    <div className='w-full'>
        <div className='flex w-full relative'>
           <Search className='absolute w-5 h-5 left-2 text-slate-400 top-1/2  -translate-y-1/2  ' /> 
              <input className='bg-white pl-9 py-6 rounded-xl border-2 h-10 border-slate-200 transition-all w-full  focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Search ' type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/></div>
        </div>
   
  )
}

export default CourseSearchBar