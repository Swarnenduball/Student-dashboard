import { X } from 'lucide-react'
import React, { useContext } from 'react'
import { NavToggleContext } from '../../../Contexts/NavToggle'

const LNavTop = () => {
  let {navActive,setNavActive}=useContext(NavToggleContext)
  
  return (
    <div><div className="top">
            <div className="logo-div pb-8.5 flex gap-5 items-center border-b border-gray-200">
            <div className="logo shrink-0"><h1>S</h1></div>
             <div className="text">
                <h1 className='text-2xl font-semibold'>Student Hub</h1>
                <p className='font-light'>Learning Portal</p>
             </div>
               <X  className=' shrink-0 h-8 w-8 ml-15 lg:hidden' onClick={()=>{
        console.log(navActive)
         setNavActive(!navActive)
      }}/>
            <hr />
            </div>
 

        </div></div>
  )
}

export default LNavTop