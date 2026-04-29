import React, { useContext, useState } from 'react'
import { taskActiveContext } from './TaskActiveProvider';
import { Clock, Flag } from 'lucide-react';


const TaskList = () => {
   let {active,setactive}=useContext(taskActiveContext)
   const tasks = [
  { id: 1, title: "Submit Machine Learning Assignment", priority: "high", course: "Machine Learning Basics", due: "Today, 11:59 PM", type: "Assignment", status: "todo" },
  { id: 2, title: "Complete Chapter 5 Reading", priority: "medium", course: "Data Structures & Algorithms", due: "Tomorrow", type: "Reading", status: "todo" },
  { id: 3, title: "Team Project Presentation", priority: "high", course: "Advanced Web Development", due: "Mar 30, 2026", type: "Project", status: "todo" },
  { id: 4, title: "Design Portfolio Review", priority: "low", course: "UI/UX Design Principles", due: "Apr 2, 2026", type: "Review", status: "todo" },
  { id: 5, title: "Database Schema Design", priority: "medium", course: "Database Management Systems", due: "Apr 5, 2026", type: "Assignment", status: "todo" },
  { id: 6, title: "Practice Coding Problems", priority: "low", course: "Data Structures & Algorithms", due: "Weekly", type: "Practice", status: "complete" },
  { id: 7, title: "Watch Lecture 8 Video", priority: "medium", course: "Machine Learning Basics", due: "Apr 1, 2026", type: "Lecture", status: "complete" }
];
   const [taskList, setTaskList] = useState(tasks)
   const taskToggle=(id)=>{
  setTaskList((prev)=>{
   return prev.map(task=>
    task.id===id? {...task,status:task.status==='complete'?'todo':'complete'}:task
    
   )
 })
 
   }
   
   
  return (
    <div className='flex flex-col flex-nowrap gap-5'>
      
      {taskList.filter((e)=>{
        if(active=='all'){
          return e
        }
        if(active=='complete'){
          return e.status==='complete'
        }
          if(active=='active'){
          return e.status==='todo'
        }
      }).
      map(({id,title,priority,course,due,type,status})=>{
         const bgColor =
  priority === 'high'
    ? '#FEE2E2'
    : priority === 'medium'
    ? '	#FEF3C7'
    : '#DBEAFE';

const textColor =
  priority === 'high'
    ? '#b91c1c'
    : priority === 'medium'
    ? '#A16207'
    : '#B91C1C';

const borderColor =
  priority === 'high'
    ? '#FECACA'
    : priority === 'medium'
    ? '#FDE68A'
    : '#BFDBFE';

      return (
            <div key={id} className={` flex flex-1 bg-white px-5 gap-2  rounded-2xl hover:shadow-sm hover:translate-y-1 hover:shadow-black/30
            ${status==='complete'? 'opacity-40':''}
            `}>
        <div>
          <input type="checkbox" name="check" id="check" className=' checkbox size-5 transition-all items-start mt-5'  onChange={()=>taskToggle(id)}  />
        </div>
        <div className='flex justify-between flex-1 py-5 px-2'>
          <div className='flex flex-col gap-2'>
            <h1 className={`text-xl font-semibold ${status==='complete'? 'line-through':''}`}>{title}</h1>
            <h3 className='text-base  text-slate-400'>{course}</h3>
            <div className='flex gap-5 items-center'>
              <div className='flex gap-2 text-sm'><Clock size={20}/> <p>{due}</p>  </div> 
             
              <p>{type}</p>
              
              </div>
          </div>
          <div className=' h-fit w-fit px-5 py-2 flex text-white border rounded-xl  ' style={{background:bgColor,color:textColor,borderColor:borderColor}}>
            <Flag/>{priority}
          </div>
        </div>

     
      </div>
      
)})}
    </div>
  )
}

export default TaskList