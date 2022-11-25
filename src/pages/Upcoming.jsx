import React, { useContext } from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import { TaskContext } from "../Contex";

const Upcoming=()=>{
    const data=useContext(TaskContext)

    const {burger,deleteTask,onComplete, filterUpcoming}=useContext(TaskContext)

    return(
     <div className={burger?"main_view":"main_view_on"}>
       <h2 className="title">Предстоящие</h2>
         {filterUpcoming.length>0?
            filterUpcoming?.map(task=>{
              return <TaskForm key={task.id} 
                              task={task}
                              deleteTask={deleteTask}
                              onComplete={onComplete}/>
            })
          :
          <h3 class="ifno">Вам уже очень скоро предстоит выполнять задачи..</h3>
          }

      
     
      
    </div>
    )
}

export default Upcoming