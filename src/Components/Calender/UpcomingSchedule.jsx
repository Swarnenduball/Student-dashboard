import React from 'react'

const schedule = [
  {
    title: "Advanced Web Development",
    course: "CS 401",
    day: "Today",
    time: "10:00 AM",
    color: "#FF6B6B"
  },
  {
    title: "Data Structures Lecture",
    course: "CS 202",
    day: "Today",
    time: "2:00 PM",
    color: "#4ECDC4"
  },
  {
    title: "Team Project Meeting",
    course: "CS 401",
    day: "Tomorrow",
    time: "4:00 PM",
    color: "#FFD93D"
  },
  {
    title: "Office Hours - Dr. Chen",
    course: "CS 401",
    day: "Tomorrow",
    time: "11:00 AM",
    color: "#6C5CE7"
  }
];
const UpcomingSchedule = () => {
  return (
    <div className='w-1/3 py-5 px-8'>
      <h1 className='text-2xl font-bold'>Upcoming Events</h1>
      <div className='mt-5 flex flex-col gap-5 '>
        {schedule.map(({ title, course, day, time, color }, i) => (
  <div key={i} className='w-full h-fit cursor-pointer bg-white gap-3 flex items-stretch rounded-2xl border border-slate-100 px-3 py-5
  hover:shadow-2xl hover:scale-105'>
    <div className='w-1 rounded-2xl shadow' style={{ backgroundColor: color }}></div>
    <div>
      <h1 className='text-xl font-semibold '>{title}</h1>
      <h2 className='text-md text-slate-700'>{course}</h2>
      <h3 className='text-sm  text-slate-400'>{day } {time}</h3>
    </div>
  </div>
))}
      </div>
      <div className='mt-10 font-bold text-lg capitalize w-full flex justify-center text-indigo-600 transition rounded-2xl duration-300 cursor-pointer delay-110 hover:bg-indigo-100'>
        <p>View all events</p>
      </div>
    </div>
  )
}

export default UpcomingSchedule