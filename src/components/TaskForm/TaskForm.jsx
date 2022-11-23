import React, { useState } from "react";
import cl from "./TaskForm.module.css"
import useLocalStorage from "../../useLocalStorage"
import edit from "../../assets/edit.svg"
import del from "../../assets/delete.svg"
import dayjs from "dayjs"


const TaskForm=({task,deleteTask})=>{

    const [isClicked, setIsClicked]=useState(false)
    const [isOver, setIsOver]=useState(false)
 

 

    return( 
        <div className={cl.main}
        onMouseOver={()=>setIsOver(true)}
        onMouseOut={()=>setIsOver(false)}> 
            <div className={cl.left__side}> 
                    <div className={cl.marker}></div>
                      

                     <div  className={cl.info__part}>
                        <h3 className={cl.title}>{task.title}</h3>
                        <p  className={cl.desc}>{task.desc}</p>
                        <p className={cl.date}>{task.dateStart?dayjs(task.dateStart).format("MMM D HH:mm"):task.dateStart}</p> 
                        <p className={cl.date}>{task.date?dayjs(task.date).format("MMM D HH:mm"):task.date}</p> 
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