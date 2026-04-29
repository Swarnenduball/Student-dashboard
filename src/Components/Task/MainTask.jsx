import React from 'react'
import TaskTop from './TaskTop'
import TaskActiveProvider from './TaskActiveProvider'
import TaskList from './TaskList'


const MainTask = () => {

  return (
    <TaskActiveProvider>
    <div>
        <TaskTop/>
        <TaskList/>
        
    </div>
    </TaskActiveProvider>
   
  )
}

export default MainTask