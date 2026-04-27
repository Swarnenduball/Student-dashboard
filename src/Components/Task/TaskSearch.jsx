import { Funnel, Search } from 'lucide-react'
import React, { useState } from 'react'

const TaskSearch = () => {
  const [input, setInput] = useState('')
  return (
    <div className='py-5 flex  gap-2 flex-wrap lg:flex-nowrap '>
        <div className='flex relative items-center w-full'>
            
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400' />
            <input type="text" placeholder='Search Task...' className='w-full pl-10 h-12 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-indigo-600 focus:outline-none' value={input} onChange={(e)=>{
              setInput(e.target.value)
            }} />
        </div>
        <div className='flex bg-white items-center border flex-1 border-slate-200 justify-center px-4 py-3 rounded-2xl'>
          <Funnel/>
          <p className=' text-slate-700 font-medium'>Filter</p>
        </div>
       
    </div>
  )
}

export default TaskSearch