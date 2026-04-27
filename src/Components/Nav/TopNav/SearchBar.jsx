import React, { useContext, useState } from 'react'
import {Search} from 'lucide-react'
import { Menu } from 'lucide-react'
import { NavToggleContext } from '../../../Contexts/NavToggle'

const SearchBar = () => {
     const [input, setinput] = useState('')
     let {navActive,setNavActive}=useContext(NavToggleContext)
     console.log(navActive,setNavActive)
  return (
    <div className=' w-full lg:w-1/2 flex items-center gap-3'>
      <Menu className=' lg:hidden' onClick={()=>{
       
         setNavActive(!navActive)
      }}/>
        <div className="searchbar  flex relative w-full ">
         <Search className='absolute w-5 h-5 left-2 text-slate-400 top-1/2  -translate-y-1/2 ' /> 
         <input className='bg-gray-50 pl-9 py-6 rounded-xl border-2 h-10 border-slate-200 transition-all w-full max-w-md focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Search Courses,tasks...' type="text" value={input} onChange={(e)=>{setinput(e.target.value)}}/>
        </div></div>
  )
}

export default SearchBar