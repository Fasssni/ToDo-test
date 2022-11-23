import React, { useEffect, useState } from "react";
import {v4 as uuidV4} from "uuid"
import cl from "./Adder.module.css"

import { flushSync } from 'react-dom'



const Adder=({onAddTask})=>{ 
    const [value,setValue]=useState({id:uuidV4(),title:"", desc:"", dateStart:"", date: "",status:""})
   
    const toAdd=(e)=>{
        e.preventDefault()

        if(value.title){
        onAddTask(value)
        return(setValue({id:uuidV4(),title:"", desc:"", date: "",status:""}))
    }

        
        else{ 
            alert("Пожалуйста, дайте заголовок задаче")
        }
        
      
        
      


    }

   
    
    return(
        <div className={cl.Adder}>

            <input className={cl.title} type="text"
            value={value.title}
            onChange={(e)=>setValue({...value,title:e.target.value})}/>

            <input className={cl.desc} type="text"
            value={value.desc}
             onChange={(e)=>setValue({...value,desc:e.target.value})}/>

            <input className={cl.date} type="datetime-local"
             value={value.dateStart}
             onChange={(e)=>setValue({...value,dateStart:e.target.value})}/>
            

            <input className={cl.date} type="datetime-local"
             value={value.date}
             onChange={(e)=>setValue({...value,date:e.target.value})}/>
            
            <button onClick={(e)=>toAdd(e)}> 
                Add
            </button>

        </div>
    )
}

export default Adder