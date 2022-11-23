import React from "react";
import { createContext } from "react";
import useLocalStorage from "./useLocalStorage";

export const TaskContext=createContext()

export const Context=({children})=>{ 
    const [tasks,setTask]=useLocalStorage("TASK",[])

    const addTask=(newTask)=>{ 
      setTask([...tasks,newTask])
    }
  
    const deleteTask=(id)=>{ 
      setTask(prevTasks=>{
        return prevTasks.filter(task=>task.id!==id)
      }
      )
  
    }
     
    const value={
        tasks,
        addTask,
        deleteTask,
    }
   

    return( 
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )

}