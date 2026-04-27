import { Plus } from 'lucide-react'
import React from 'react'
import TaskSearch from './TaskSearch'
import TaskOptions from './TaskOptions'

const TaskTop = () => {

  return (
    <div>
    <div className='flex justify-between '>
        <div>
             <h1 className='text-2xl font-bold'>My Tasks</h1>
             <p className='text-slate-500 mt-3'>5 active • 2 complete</p>
        </div>
        <div className='flex items-center justify-center my-5 px-4 py-2 gap-1.5 w-fit rounded-lg bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700 transition-colors'>
  <Plus size={15} strokeWidth={2.5} />
  <span className='text-sm font-medium'>Add Task</span>
</div>
      
      </div>
      <TaskOptions/>
      <TaskSearch/>
    </div>
  

  )
}

export default TaskTop