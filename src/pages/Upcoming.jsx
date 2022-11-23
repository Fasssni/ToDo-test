import React, { useContext } from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import { TaskContext } from "../Contex";

const Upcoming=()=>{
    const data=useContext(TaskContext)

  

    return(
     <div className="main_view">
      
      {data.filterUpcoming?.map(task=>{
        return <TaskForm key={task.id} 
                         task={task}
                         deleteTask={data.deleteTask}/>
      })

      }
     
      
    </div>
    )
}

export default Upcoming