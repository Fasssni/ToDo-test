import React from "react";
import { useContext } from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import { TaskContext } from "../Contex";

const Completed=()=>{

   const data=useContext(TaskContext)
  
    return(
        <div className="main_view">

{data.completedTasks?.map(task=>{
        return <TaskForm key={task.id} 
                         task={task}
                         deleteTask={data.deleteTask}
                         onComplete={data.onComplete}/>
      })

      }
        </div>
    )
}

export default Completed