import React from "react";
import { useContext } from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import { TaskContext } from "../Contex";

const Completed=()=>{

   
   const {burger,deleteTask,onComplete,completedTasks}=useContext(TaskContext)
  
    return(
        <div className={burger?"main_view":"main_view_on"}>
         <h2 className="title">Выполненные</h2>
            {completedTasks.length>0?

                completedTasks?.map(task=>{
                        return <TaskForm key={task.id} 
                                        task={task}
                                        deleteTask={deleteTask}
                                        onComplete={onComplete}/>
                    })

                
                :  
                <h3 class="ifno">У Вас пока нет выполненных задач..</h3>
                    }
        </div>
    )
}

export default Completed