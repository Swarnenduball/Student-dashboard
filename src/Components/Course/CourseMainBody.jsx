import { BookOpen, Clock, User } from 'lucide-react';
import React from 'react'

const CourseMainBody = () => {
    const courses = [
        {
            id: 1,
            initials: "AW",
            title: "Advanced Web Development",
            instructor: "Dr. Michael Chen",
            progress: 75,

            gradient: "linear-gradient(135deg, #1e90ff, #00bcd4)",
            students: 45,
            time: '12 weeks',
            ClassTime: "Mon & Wed, 10:00-11:30 AM",
            status: "Active",
            courseCode: 'CS 401',
            courseType: 'CS'

        },
        {
            id: 2,
            initials: "DS",
            title: "Data Structures & Algorithms",
            instructor: "Prof. Emily Rodriguez",
            progress: 60,

            gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
            students: 62,
            time: '16 weeks',
            ClassTime: "Tue & Thu, 2:00-3:30 PM",
            status: "Active",
            courseCode: 'CS 202',
            courseType: 'CS'
        },
        {
            id: 3,
            initials: "ML",
            title: "Machine Learning Basics",
            instructor: "Dr. James Wilson",
            progress: 45,

            gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
            students: 38,
            time: '10 weeks',
            ClassTime: "Wed & Fri, 11:00-12:30 PM",
            status: "Active",
            courseCode: 'CS 315 ',
            courseType: 'CS'
        },
        {
            id: 4,
            initials: "UD",
            title: "UI/UX Design Principles",
            instructor: "Sarah Martinez",
            progress: 90,

            gradient: "linear-gradient(to right, #f97316, #ef4444)",
            students: 28,
            time: '8 weeks',
            ClassTime: "Mon & Wed, 1:00-2:30 PM",
            status: "Active",
            courseCode: 'DES 220 ',
            courseType: 'DES'
        },
        {
            id: 5,
            initials: "CS",
            title: "Database Management Systems",
            instructor: "Prof. David Lee",
            progress: 55,
            gradient: "linear-gradient(to right, #06b6d4, #0ea5e9)",
            students: 52,
            time: "14 weeks",
            ClassTime: "Mon & Wed, 1:00-2:30 PM",
            status: "Active",
            courseCode: "CS 305",
            courseType: "CS"
        },
        {
            id: 6,
            initials: "CS",
            title: "Mobile App Development",
            instructor: "Dr. Lisa Anderson",
            progress: 30,
            gradient: "linear-gradient(to right, #ec4899, #f43f5e)",
            students: 34,
            time: "12 weeks",
            ClassTime: "Tue & Thu, 10:00-11:30 AM",
            status: "Active",
            courseCode: "CS 410",
            courseType: "CS"
        }
    ];
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-5 gap-3'>
            {courses.map(({id,initials, title,instructor,progress,gradient,students,time,ClassTime,status,courseCode,courseType}) => {
                return(
                    <div className='bg-white w-full rounded-2xl relative mt-5 cursor-pointer transition-all duration-150 hover:translate-y-1 hover:shadow-2xl'> 
                     <div className='w-full rounded-t-2xl h-30 relative top-0 ' style={{background:gradient}}>
                        <p className=' text-5xl text-center absolute left-[50%] top-[50%] -translate-x-1/5 -translate-y-1/2 opacity-20'>{courseType}</p>
                      <div className='text-white bg-white/20 mb-2 ml-5 flex w-fit px-5 py-2  absolute bottom-0  rounded-2xl'> <h1>{courseCode}</h1></div>
                     </div>
                      <div className='px-3 py-5'>
                        <h1>{title}</h1>
                        <h1>{instructor}</h1>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <h2>Course pogress</h2>
                            <h2>{progress}%</h2>
                            </div>
                            
                            <div className='w-full h-2.5 rounded-2xl bg-gray-900/20'>
                                <div className={`bg-black h-2.5 rounded-2xl `} style={{width:`${progress}%`}}></div>
                            </div>
                        </div>
                        <div className='flex justify-between text-slate-600 text-xs mt-5 border-t-2 border-b-2 border-gray-100 py-3'>
                           <div className='flex text-slate-600 items-center gap-1'><Clock size={15} />{time} </div>
                           <div className='flex text-slate-600 items-center gap-1'><User size={15} />{students}Students </div>
                        <div className='flex text-slate-600 items-center gap-1'><BookOpen size={15} />{status} </div>
                        </div>
                        <h1 className='mt-3 text-xs text-slate-500'>Schedule: {ClassTime}</h1>
                      </div>
                     </div>

                ) 
            })}
        </div>
    )
}

export default CourseMainBody