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
   

 

  const data=useContext(TaskContext)
  const {burger}=useContext(TaskContext)

  const {value,setValue}=useContext(TaskContext)
  
 

  
  



  const toAdd=(value)=>{ 
    if(value.title){
    data.addTask(value)
    setIsClicked(true)
    return(setValue({id:uuidV4(),title:"", desc:"", date: "",status:"", file:null}))
}else{ 
        alert("Пожалуйста, дайте заголовок задаче")
    }
}

  
   console.log(data.tasks)
    return(
     <div className={burger?"main_view":"main_view_on"}>

      <h2 className="title">Просрочено</h2>
            {data.filterExpired.length>0?
                data.filterExpired?.map(task=>{
                  return <TaskForm key={task.id} 
                                   task={task}
                                   deleteTask={data.deleteTask}
                                   onComplete={data.onComplete}
                                   />
                })

            
            :
            <h3 class="ifno">У Вас нет просроченных задач!</h3>
          }
      
      
      <h2 className="title">Сегодня</h2>
      {data.filterToday.length>0?
          data.filterToday?.map(task=>{
            return <TaskForm key={task.id} 
                            task={task}
                            deleteTask={data.deleteTask}
                            onComplete={data.onComplete}/>
          })

      
      :
      <h3 class="ifno">Место для Ваших задач на сегодня</h3>
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