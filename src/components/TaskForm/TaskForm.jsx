import React, { useState } from "react";
import cl from "./TaskForm.module.css"
import useLocalStorage from "../../useLocalStorage"
import edit from "../../assets/edit.svg"
import del from "../../assets/delete.svg"
import dayjs from "dayjs"
import "../../style.css"

const TaskForm=({task,deleteTask, onComplete})=>{

    const [isClicked, setIsClicked]=useState(false)
    const [isOver, setIsOver]=useState(false)
 

 

    return( 
        <div className={cl.main}
        onMouseOver={()=>setIsOver(true)}
        onMouseOut={()=>setIsOver(false)}> 
            <div className={cl.left__side}> 
                    <div className={cl.marker} onClick={()=>onComplete(task.id)}>

                    </div>
                     <div  className={cl.info__part}>
                        <p className={cl.title}>{task.title}</p>
                        <p  className={cl.desc}>{task.desc}</p>
                        <div className={cl.dates}>
                        <p className={cl.dateStart}>{task.dateStart?dayjs(task.dateStart).format("MMM D HH:mm"):task.dateStart}</p> 
                        <p className={cl.date}>{task.date?dayjs(task.date).format("MMM D HH:mm"):task.date}</p> 
                        </div>
                     </div>  
              
            </div>
            <div className={cl.right_side}> 
              {isOver?
              <>
                <img className={cl.edit} src={edit}
                    onClick={()=>setIsClicked(true)}/>

                <img className={cl.delete} src={del}
                     onClick={()=>deleteTask(task.id)}/>
              </>
              
              
           
           
              :<></>
            
            }
            </div>
            
          

        </div>
    )
}

export default TaskForm