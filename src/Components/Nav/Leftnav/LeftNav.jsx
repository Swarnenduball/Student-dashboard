import React, { useContext } from 'react'
import LNavTop from './LNavTop'
import { NavLink } from 'react-router-dom'
import { House,BookOpenText,SquareCheckBig,Calendar,Award, LogOut } from 'lucide-react'

import LNavIcon from './LNavIcon'
import NavBottom from './NavBottom'
import { NavToggleContext } from '../../../Contexts/NavToggle'
 
     
const LeftNav = () => {
  let {navActive,setNavActive}=useContext(NavToggleContext)
  let menu=[{id:1,path:'dashboard',logo:<House />},{id:2,path:'course',logo:<BookOpenText />},
  {id:3,path:'task',logo:<SquareCheckBig />},
   {id:4,path:'calender',logo:<Calendar />},
    {id:5,path:'grade',logo:<Award />},
  ]
  return (
        <div className={`left-nav-bar absolute lg:sticky lg:top-0 h-screen bg-white w-100 left-nav flex   z-50  ${navActive?'left-0 sticky top-0':'-left-627.5'} shrink-0 px-3 py-10 border-t border-r flex-col lg:left-0  justify-between border-gray-200 h-screen w-2/4 lg:w-1/5`}>
      <div>
      <LNavTop />
      <div className='pt-2 pb-2'>
      { menu.map((elm)=>{
        return <LNavIcon key={elm.id} props={elm} />
      })}

      </div>
      </div>

      <NavBottom/>

    </div>
  )
}

export default LeftNav