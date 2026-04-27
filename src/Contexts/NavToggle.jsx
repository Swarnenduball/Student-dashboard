import React, { createContext, useState } from 'react'
export const  NavToggleContext= createContext();
const NavToggle = (props) => {
   
   const [navActive, setNavActive] = useState(true)
  return (
    
        <NavToggleContext.Provider value={{navActive,setNavActive}}>
      {props.children}
        </NavToggleContext.Provider>
   
  )
}

export default NavToggle