import React, { useState } from "react";
import { useContext } from "react";
import Adder from "../components/Adder/Adder";
import TaskForm from "../components/TaskForm/TaskForm";
import { TaskContext } from "../Contex";


const Today=({onAddTask,tasks,deleteTask})=>{ 

  const data=useContext(TaskContext)
  

    return(
     <div className="main_view">
      {data.tasks.map(task=>{
        return <TaskForm key={task.id} 
                         task={task}
                         deleteTask={data.deleteTask}/>
      })

      }
      <Adder onAddTask={data.addTask} tasks={tasks}/>
      
    </div>
    )
}

export default Today