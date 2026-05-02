import React from 'react'

const CourseGrade = () => {
    const courses = [
        {
            id: "CS401",
            title: "Advanced Web Development",
            department: "CS",
            grade: "A",
            currentScore: 94,
            assignments: 92,
            exams: 95,
            participation: 100,
            cardGradient: "linear-gradient(to right, #00CFFF, #0080FF)",
            gradeColor: "#0066CC", // darker blue badge
        },
        {
            id: "CS202",
            title: "Data Structures & Algorithms",
            department: "CS",
            grade: "A-",
            currentScore: 91,
            assignments: 92,
            exams: 95,
            participation: 100,
            cardGradient: "linear-gradient(to right, #CC44CC, #9933FF)",
            gradeColor: "#7722BB", // darker purple badge
        },
        {
            id: "CS315",
            title: "Machine Learning Basics",
            department: "CS",
            grade: "B+",
            currentScore: 88,
            assignments: 92,
            exams: 95,
            participation: 100,
            cardGradient: "linear-gradient(to right, #00DD55, #00AA33)",
            gradeColor: "#008822", // darker green badge
        },
        {
            id: "DES220",
            title: "UI/UX Design Principles",
            department: "DES",
            grade: "A+",
            currentScore: 98,
            assignments: 92,
            exams: 95,
            participation: 100,
            cardGradient: "linear-gradient(to right, #FF6600, #FF3300)",
            gradeColor: "#CC2200", // darker orange/red badge
        },
        {
            id: "CS305",
            title: "Database Management Systems",
            department: "CS",
            grade: "A-",
            currentScore: 90,
            assignments: 92,
            exams: 95,
            participation: 100,
            cardGradient: "linear-gradient(to right, #00CCAA, #009988)",
            gradeColor: "#007766", // darker teal badge
        },
        {
            id: "CS410",
            title: "Mobile App Development",
            department: "CS",
            grade: "B+",
            currentScore: 87,
            assignments: 92,
            exams: 95,
            participation: 100,
            cardGradient: "linear-gradient(to right, #FF44AA, #CC0077)",
            gradeColor: "#AA0055", // darker pink badge
        },
    ];
    return (
        <div className='mt-10  '>
            <h1 className='text-2xl font-bold mb-5'>Course Grades</h1>
            <div className='grid grid-cols-2 h-fit  gap-5 '>
                {courses.map(({ id, title, department, grade, currentScore, assignments, exams, participation, cardGradient, gradeColor }

                ,idx) =>
                    <div key={idx} className='flex flex-col relative  border border-slate-200  rounded-2xl transition-all hover:shadow-md  hover:scale-101'>
                        <div style={{ background: cardGradient }} className='w-full rounded-t-2xl relative h-30 '>
                            <h1 className='left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute  text-4xl text-white opacity-40'>{department}</h1>
                            <div className='bg-white h-14 w-14 absolute right-0 flex items-center justify-center text-2xl font-bold  rounded-2xl top-5 mr-10' > <p style={{ color: gradeColor }}>{grade}</p></div>
                        </div>
                        <div className='p-5'>
                            <h1 className='text-xl font-semibold'>{title}</h1>
                            <h2 className='text-slate-500'>{id}</h2>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='text-slate-500'>Current Score</p>
                                    <p className='text-lg font-bold'>{currentScore}%</p>
                                </div>
                                <div>

                                    <div className='w-full mt-1  h-2.5 bg-slate-900/20 rounded-xl'>
                                        <div className={`w-[${currentScore}%] h-full bg-black rounded-xl`}></div></div>

                                </div>
                            </div>



                            <div className='w-full flex  mt-10 p-5  border-t border-gray-200'>
                                <div className='flex px-10 w-full justify-evenly '>
                                    <div>
                                        <p className='text-md text-slate-500'>assignments</p>
                                        <b  className='text-md'>{assignments}</b>
                                    </div>
                                    <div>
                                        <p className='text-md text-slate-500'>Exams</p>
                                        <b className='text-md'>{exams}</b>
                                    </div>
                                    <div>
                                        <p className='text-md text-slate-500'>participation</p>
                                        <b className='text-md'>{participation}</b>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default CourseGrade