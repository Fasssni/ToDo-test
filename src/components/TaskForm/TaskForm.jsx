import React, { useState } from "react";
import cl from "./TaskForm.module.css"
import useLocalStorage from "../../useLocalStorage"
import edit from "../../assets/edit.svg"
import del from "../../assets/delete.svg"
import dayjs from "dayjs"
import "../../style.css"
import Adder from "../Adder/Adder";
import { useContext } from "react";
import { TaskContext } from "../../Contex";

const TaskForm=({task,deleteTask, onComplete})=>{

    
    const [value, setValue]=useState(task)
    const [isClicked, setIsClicked]=useState(false)
    const [isOver, setIsOver]=useState(false)
    const [isEdit,setIsEdit]=useState(true)
    const location=window.location
    const isComplete=window.location.origin+"/completed"

    const data=useContext(TaskContext)

    function toPass(){
        data.onUpdate(value)
        setIsEdit(true)
    }
 

 

    return( 
        <>{isEdit?
           
        <div className={cl.main}
        onMouseOver={()=>setIsOver(true)}
        onMouseOut={()=>setIsOver(false)}> 
            <div className={cl.left__side}> 
                        {location==isComplete?
                        <></>
                        :
                        <div className={cl.marker} onClick={()=>onComplete(task.id)}>

                        </div>}
                        <div className={cl.sep}>
                              <div  className={cl.info__part}>
                       
                                <p className={cl.title}>{task.title}</p>
                                <p  className={cl.desc}>{task.desc}</p>
                               {location==isComplete?
                                <div className={cl.dates}>
                                
                                    <p className={cl.dateStart}>Завершено:{task.date}</p>
                                
                                </div>
                                
                                :
                                <div className={cl.dates}>
                                <p className={cl.dateStart}>{task.dateStart?dayjs(task.dateStart).format("MMM D HH:mm"):task.dateStart}</p> 
                                <p className={cl.date}>{task.date?dayjs(task.date).format("MMM D HH:mm"):task.date}</p> 
                                </div>
                                }
                                
                            </div>
                            {task.file?
                                <div className={cl.file}>
                                    <a href={task.file}  target="_blank" className={cl.file_text}>
                                        File
                                    </a>
                            </div> 
                            :
                            <></>}
                     </div>  
              
            </div>
            <div className={cl.right_side}> 
              {isOver?
              <>
               {location==isComplete?
               <></>
               :
                <img className={cl.edit} src={edit}
                    onClick={()=>setIsEdit(false)}/>
               }
                <img className={cl.delete} src={del}
                     onClick={()=>deleteTask(task.id)}/>
              </>
              
              
           
           
              :<></>
            
            }
            </div>
            
          

        </div>
        :
        <Adder value={value} 
               setValue={setValue}
               toAdd={toPass}
              />  
}
        </>
    )
}

export default TaskForm