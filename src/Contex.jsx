import React, { useEffect, useMemo } from "react";
import { createContext } from "react";
import useLocalStorage from "./useLocalStorage";
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"



export const TaskContext=createContext()

export const Context=({children})=>{ 

    dayjs.extend(relativeTime)
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

    const onComplete=(id)=>{
      console.log("worked")
       setTask(prevTasks=>{
        return prevTasks.map(task=>{
          if(task.id==id){
            return {...task, complete:true,date:dayjs().format("MMM D HH:mm")}
          }
          else{
            return task
          }
        })
       })

    }
    
  
    const filterExpired=useMemo(()=>{
      const dateNow=dayjs().format("MMM D HH:mm")
      if(tasks){
        return tasks.filter(f=>(dayjs(f.date).format("MMM D HH:mm")<dateNow)&&f.date)}
        else{

          return null

        }
    }, [tasks])


    const filterToday=useMemo(()=>{
      const dateNow=dayjs()
      if(tasks){
        return tasks.filter(f=>(!filterExpired.includes(f))&&(!f.dateStart||dayjs(f.dateStart).format("D")-dayjs().format("D")<1)&&f.complete!==true)}
        else{

          return null

        }
    }, [filterExpired,tasks])


    const filterUpcoming=useMemo(()=>{
      const dateNow=dayjs()
      if(tasks){
        return tasks.filter(f=>!filterExpired.includes(f)&&!filterToday.includes(f)&&f.complete!==true)}

        else{
          return null
        }
    }, [filterToday,filterExpired,tasks])

    const completedTasks=useMemo(()=>{
                            return tasks.filter(f2=>f2.complete==true)
    
    },[tasks])

    const onUpdate=(edited)=>{
    
       setTask(prevTask=>{
        return prevTask.map(x=>{
          if(x.id==edited.id){
            return edited
          }else{
            return x
          }
        })
       })

    }
 

    const value={
        tasks,
        addTask,
        deleteTask,
        filterExpired,
        filterToday, 
        filterUpcoming,
        onComplete,
        completedTasks,
        onUpdate,
    }
    
   console.log(filterToday)

    return( 
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )

}