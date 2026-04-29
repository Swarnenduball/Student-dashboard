import React, { createContext, useState } from 'react'

export const  taskActiveContext = createContext()
const TaskActiveProvider = (props) => {
    const [active, setactive] = useState('all')
  return (
     <taskActiveContext.Provider value={{active,setactive}}>
    <div>
      
       { props.children}
    </div>
     </taskActiveContext.Provider>
  )
}

export default TaskActiveProvider