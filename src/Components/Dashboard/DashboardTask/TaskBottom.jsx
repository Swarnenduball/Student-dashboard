import { Clock, Flag } from 'lucide-react'
import React from 'react'

const TaskBottom = () => {
    const tasks=[
        {
            task:'Submit Machine Learning Assignment',
            course:"Machine Learning Basics",
            time:'Today 11:59 PM',
            priority:"High"
        },
          {
            task:'Complete Chapter 5 Reading',
            course:"Data Structures & Algorithms",
            time:'Tomorrow',
            priority:"Medium"
        },
         {
            task:'Team Project Presentation',
            course:"Advanced Web Development",
            time:'Mar 30, 2026',
            priority:"High"
        },
          {
            task:'Design Portfolio Review',
            course:"UI/UX Design Principles",
            time:'Apr 2, 2026',
            priority:"Low"
        }
    ]
  return (
    <div>
        {tasks.map(({task,course,time,priority})=>{
            const color=priority=='High'?'#F87171':priority=='Medium'?'#FBBF24':'#60A5FA'
          return (<div className='flex gap-5 mt-5 bg-white p-5 rounded-3xl duration-300 cursor-pointer transition-all hover:shadow-sm hover:translate-y-1 hover:shadow-black/30'>  
            <div>
              <input  className='size-6 transition-all duration-1000' type="checkbox" name="" id="" /></div>
              <div className=' flex flex-col gap-5'>
                <h1 className='text-black font-semibold'>{task}</h1>
                <h2 className='text-black'>{course}</h2>
                
                <div className='flex gap-2'>
                  <p className='flex text-[primary] opacity-60'>
                  <Clock/>  {time}</p>
                <div style={{background:color,text:color}} className='w-max flex rounded-4xl px-3 py-1  '><Flag />{priority}</div></div>
                
                
              </div>
            <h1></h1>
          </div>)
        })}
    </div>
  )
}

export default TaskBottom