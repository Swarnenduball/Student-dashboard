import React, { useState } from 'react'

const TaskOptions = () => {
    const [active, setactive] = useState('active')
    const tabs=['all','active','complete']
  return (
    <div className='flex w-fit gap-2 justify-between bg-white rounded border border-slate-50 p-2'>
       {tabs.map((tab)=>
      <button 
       key={tab}
        onClick={() => setactive(tab)}
      className={` capitalize px-5 py-2 rounded-2xl text-sm text-slate-800 
         ${active===tab?'bg-indigo-600 text-white rounded border':''}
        `}>{tab}</button>  
    )}

    </div>
  )
}

export default TaskOptions