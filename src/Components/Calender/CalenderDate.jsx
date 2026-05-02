import React, { useState } from 'react'
import { ArrowLeft, ChevronLeft, ChevronsLeftRightIcon, ChevronRight } from 'lucide-react';
const CalenderDate = () => {
  let d=new Date()
  const [cur, setcur] = useState({d:d.getDate(),m:d.getMonth(),y:d.getFullYear()})
  const [active, setactive] = useState(null)

    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
  "January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
   const lastDays = new Date(cur.y, cur.m + 1, 0).getDate();
let firstDate = new Date(cur.y, cur.m, 1).getDay();
const isToday = (date) =>
    date === d.getDate() && cur.m === d.getMonth() && cur.y === d.getFullYear();
const nxtDate=()=>{ setcur( ({d,m,y})=>d===lastDays ?{d:1,m:m+1,y:y}:{d:d+1,m:m,y:y}) } ;
const prvDate=()=>{ setcur( ({d,m,y})=>d===firstDate ?{d:1,m:m+1,y:y}:{d:d+1,m:m,y:y}) }
  return (
    <div>
      <div className="top flex justify-between p-5">
            <h1 className='text-3xl  font-semibold '>{months[new Date(cur.y, cur.m, 1).getDay()]} { d.getFullYear()}</h1>
         <div className='flex items-center gap-3'>
          <p><ChevronLeft size={30} onClick={prvDate} /></p>
          <div className='bg-purple-600 text-white font-bold p-3 rounded-2xl'>Today</div>
          <p><ChevronRight size={30} /></p>
         </div>
        
        </div>
    <div className='w-full px-10 text-slate-600 grid font-semibold  rounded-2xl p-5'>
        <div  className='w-full grid gap-2 grid-cols-7 items-center mb-5 '> 
         {weeks.map((w)=><span className='flex items-center justify-center w-20' >{w}</span>)}
        </div>
         
        <div className='w-full grid grid-cols-7 gap-2'>
          { Array.from({length:firstDate}).map((_,i)=><div key={i}></div>)}
        { Array.from({length:lastDays},(_,i)=>i).map((_,i)=>
        <div key={i} className={`${isToday(i)?'bg-indigo-600 hover:bg-indigo-700 text-white':'bg-slate-50 hover:bg-slate-100'}   flex aspect-square gap-2 rounded-2xl items-center text-sm transition-all cursor-pointer justify-center  `}>{i+1}</div>)}
        </div>
    </div>
    </div>
  )
}

export default CalenderDate