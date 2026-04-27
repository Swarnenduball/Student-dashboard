import React from 'react'
import { NavLink } from 'react-router-dom'

const LNavIcon = ({props}) => {
  return (
    
    <div>
        <NavLink to={`/${props.path}`} end className={({ isActive }) =>
          isActive
            ? "flex lnav-icon nav-item gap-2 bg-red-500 text-white"
            : "flex lnav-icon  gap-2"
        }> {props.logo} <h1 className='font-bold '>{`${props.path}`}</h1></NavLink>
    </div>
  )
}

export default LNavIcon