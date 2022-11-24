import React, { useState } from "react";
import { useContext } from "react";
import Adder from "../components/Adder/Adder";
import TaskForm from "../components/TaskForm/TaskForm";
import { TaskContext } from "../Contex";
import dayjs from "dayjs"
import {v4 as uuidV4} from "uuid"
import add from "../assets/add.svg"

const Today=({onAddTask,tasks,deleteTask})=>{ 

  const [isClicked,setIsClicked]=useState(true)
  const [isEdit,setIsEdit]=useState(false)
   

  const [value,setValue]=useState({id:uuidV4(),title:"", desc:"", dateStart:"", date: "",complete:false})

  const data=useContext(TaskContext)

  const toAdd=()=>{
    

    if(value.title){
    data.addTask(value)
    return(setValue({id:uuidV4(),title:"", desc:"", date: "",status:""}))
}

    
    else{ 
        alert("Пожалуйста, дайте заголовок задаче")
    }
}

  

    return(
     <div className="main_view">

      <h2>Просрочено</h2>
            {data.filterExpired.length>0?
                data.filterExpired?.map(task=>{
                  return <TaskForm key={task.id} 
                                   task={task}
                                   deleteTask={data.deleteTask}
                                   onComplete={data.onComplete}
                                   />
                })

            
            :
            <h3>У Вас нет просроченных задач!</h3>
          }
      
      
      <h2>Сегодня</h2>
      {data.filterToday.length>0?
          data.filterToday?.map(task=>{
            return <TaskForm key={task.id} 
                            task={task}
                            deleteTask={data.deleteTask}
                            onComplete={data.onComplete}/>
          })

      
      :
      <h3>Место для Ваших задач на сегодня</h3>
    }
    {isClicked?

        <div className="isClicked" onClick={()=>setIsClicked(false)}>
                 <img className="icon" src={add} ></img>
                 <p className="action">Добавить задачу</p>

            </div>
        :
      <Adder setIsClicked={setIsClicked}
            toAdd={toAdd} 
             tasks={tasks}
             value={value}
             setValue={setValue}/>}
      
    </div>
    )
}

export default Today