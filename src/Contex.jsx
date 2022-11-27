import React, { useEffect, useMemo, useState } from "react";
import { createContext } from "react";
import useLocalStorage from "./useLocalStorage";
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import {storage} from "./firebase"
import {getDownloadURL,ref,uploadBytesResumable} from "@firebase/storage"
import {v4 as uuidV4} from "uuid"



export const TaskContext=createContext()

export const Context=({children})=>{ 

  
    const [tasks,setTask]=useLocalStorage("TASK",[]) // кастом хук. все даннные будут собираться  в локал сторидже. СМ.файл useLocalStorage.js 

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
    
    //фукнция фильтрации просроченных по времени задач
    const filterExpired=useMemo(()=>{
      const dateNow=dayjs().format("MMM D HH:mm")
      console.log(dateNow)
      if(tasks){
        return tasks.filter(f=>(dayjs(f.date).format("MMM D HH:mm")<dateNow)&&f.date)}
        else{
          return null
        }
    }, [tasks])

   //функция фильтрации задач на сегодня
    const filterToday=useMemo(()=>{
      const dateNow=dayjs()
      if(tasks){
        return tasks.filter(f=>(!filterExpired.includes(f))&&(!f.dateStart||dayjs(f.dateStart).format("D")-dayjs().format("D")<1)&&f.complete!==true)}
        else{
          return null
        }
    }, [filterExpired,tasks])

    //функция фильтрации предстоящих задач
    const filterUpcoming=useMemo(()=>{
      const dateNow=dayjs()
      if(tasks){
        return tasks.filter(f=>!filterExpired.includes(f)&&!filterToday.includes(f)&&f.complete!==true)}

        else{
          return null
        }
    }, [filterToday,filterExpired,tasks])
    
    //функция фильтрации выполненных задач
    const completedTasks=useMemo(()=>{
                            return tasks.filter(f2=>f2.complete==true)
    
    },[tasks])
    
    //редактирование задач
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
 



    
  
  const [isLoading,setIsLoading]=useState(false)
  
  // загрузка файлов в firebase. принимает файл, сохраняет его в файрбейс, сохраняет url в localstorage
  const uploadFiles = (file, setValue) => {
    if (!file) return;
    const sotrageRef = ref(storage, `/to-do-files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setIsLoading(true)
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL)
        setIsLoading(false)
        return setValue(prevValue=>{ return{...prevValue,file:downloadURL}})
        }      
        );
      }
    );
  };
   
 

  const [value,setValue]=useState({id:uuidV4(),title:"", desc:"", dateStart:"", date: "",complete:false, file:null})
  const [burger,setBurger]=useState(true)
  const [modal,setModal]=useState(false)

    const val={
        tasks,
        addTask,
        deleteTask,
        filterExpired,
        filterToday, 
        filterUpcoming,
        onComplete,
        completedTasks,
        onUpdate,
        uploadFiles,
        burger, 
        setBurger,
        isLoading,
        value,
        setValue,
        modal,
        setModal
    }
    
   console.log(filterToday)

    return( 
        <TaskContext.Provider value={val}>
            {children}
        </TaskContext.Provider>
    )

}