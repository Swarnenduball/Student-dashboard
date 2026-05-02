import { Award, Target, TrendingUp } from 'lucide-react'
import React from 'react'

const StudentPerformence = () => {
  return (
    <div className='flex lg:flex-nowrap flex-wrap   gap-4 mt-10 '>
        <div className='h-fit p-5 flex   flex-col    bg-white w-full    rounded-2xl  px-5 py-8 gap-3 border border-slate-200 hover:shadow'>
            <div className=' flex justify-center items-center bg-indigo-600  rounded-2xl text-white h-16 w-16'> <Award size={30} /></div>
            <p className='text-slate-500  text-sm'>Current GPA</p>
            <h5  className='text-3xl text-black font-bold'>3.82</h5>
            <p className='text-sm text-slate-500'>Out of 4.0</p>
        </div>
        <div className='h-fit p-5 flex  flex-col w-full   bg-white  rounded-2xl  px-5 py-8 gap-3 border border-slate-200 hover:shadow '>
            <div className=' flex justify-center items-center bg-green-600  rounded-2xl text-white h-16 w-16'> <TrendingUp size={30} /></div>
        <p  className='text-slate-500 text-sm'>Current GPA</p>
            <h5 className='text-3xl text-black font-bold'>3.82</h5>
            <p  className='text-sm text-slate-500' >Out of 4.0</p>
        </div>
        <div className='h-fit p-5 flex  flex-col w-full  bg-white   rounded-2xl  px-5 py-8 gap-3 border transition-all  border-slate-200 hover:shadow '>
            
            <div className=' flex justify-center items-center bg-purple-600  rounded-2xl text-white h-16 w-16'> <Target size={30} /></div>
        <p className='text-slate-500 text-sm'>Current GPA</p>
            <h5 className='text-3xl text-black font-bold'>3.82</h5>
            <p className='text-sm text-slate-500'>Out of 4.0</p>
        </div>
    </div>
  )
}

export default StudentPerformence