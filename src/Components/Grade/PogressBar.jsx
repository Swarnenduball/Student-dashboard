import React from 'react'

const PogressBar = () => {
  return (
    <div className='bg-white mt-10 rounded-2xl p-8 border border-slate-100'>
        <div className='flex justify-between'>
        <div>
               <h1 className='text-xl text-black font-bold'>Overall Progress</h1>
        <p>Semester average across all courses</p>
        </div>
     
        <div className='flex flex-col justify-end'>
            <h1 className='text-3xl text-indigo-500 font-extrabold'>91%</h1>
            <p className='text-green-600'>+2.5% from last term</p>
        </div>
        </div>
        <div className='w-full mt-5  h-3 bg-slate-900/20 rounded-xl'>
  <div className='w-[91%] h-full bg-black rounded-xl'></div>
</div>
    </div>
  )
}

export default PogressBar