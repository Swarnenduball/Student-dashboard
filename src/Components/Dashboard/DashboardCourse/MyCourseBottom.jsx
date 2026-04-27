
import React from 'react'

const MyCourseBottom = () => {
  const courses = [
    {
      id: 1,
      initials: "AW",
      title: "Advanced Web Development",
      instructor: "Dr. Michael Chen",
      progress: 75,
      nextClass: "Mon, 10:00 AM",
      gradient: "linear-gradient(135deg, #1e90ff, #00bcd4)",
    },
    {
      id: 2,
      initials: "DS",
      title: "Data Structures & Algorithms",
      instructor: "Prof. Emily Rodriguez",
      progress: 60,
      nextClass: "Tue, 2:00 PM",
      gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    },
    {
      id: 3,
      initials: "ML",
      title: "Machine Learning Basics",
      instructor: "Dr. James Wilson",
      progress: 45,
      nextClass: "Wed, 11:00 AM",
      gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    },
    {
      id: 4,
      initials: "UD",
      title: "UI/UX Design Principles",
      instructor: "Sarah Martinez",
      progress: 90,
      nextClass: "Thu, 3:00 PM",
      gradient: "linear-gradient(to right, #f97316, #ef4444)",
    }
  ];
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5 w-full'>
      {courses.map(({ id, initials, title, instructor, progress, nextClass, gradient }) => {
        return (
          <div key={id} className='bg-white w-full border p-5 border-slate-50 rounded-2xl duration-300 cursor-pointer transition-all hover:shadow-sm hover:translate-y-1 hover:shadow-black/30'>
            <div className={` rounded-2xl h-40 flex items-center justify-center w-full `} style={{ background: gradient }}>
              <h1 className='opacity-50 text-white text-2xl md:text-3xl  lg:text-4xl'>{initials}</h1>
            </div>
            <h3 className='bg-(--primary-text) text-[1.2rem]'>{title}</h3>
            <p>{instructor}</p>
            <div className='mt-5 flex flex-col gap-2'>
              <div className="texts flex justify-between">
                <p className='text-[var(--secondary-text)]'>Pogress</p>
                <p className='text-black'>{progress}%</p>
              </div>
              <div className="pogress  h-3 bg-slate-200 w-full rounded-2xl">
                <div style={{ width: `${progress}%` }} className={`h-full  bg-[#030213] rounded-2xl`}>

                </div>
              </div>
            </div >
             <hr className='my-5 border-gray-200' />
            <div className='border-t-2 border-gray-50 flex justify-between'>
              <p>Next class</p>
              <p className='text-black font-semibold'>{nextClass}</p>
            </div>
          </div>
        );
      })}


    </div>
  )
}

export default MyCourseBottom