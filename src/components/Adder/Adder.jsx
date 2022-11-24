import React, { useEffect, useState } from "react";
import {v4 as uuidV4} from "uuid"
import cl from "./Adder.module.css"


import { flushSync } from 'react-dom'



const Adder=({toAdd,value,setValue,setIsClicked})=>{ 
    const universalFuncion=()=>{
        toAdd(value)
        setIsClicked(true)

    }
    return(
        
        <div className={cl.Adder}>
            
         <div className={cl.container}>
            <input className={cl.title} type="text"
            value={value.title}
            rows="3"
            placeholder="Добавьте название задачи"
            onChange={(e)=>setValue({...value,title:e.target.value})}/>

            <input className={cl.desc} type="text" 
            placeholder="Описание задачи"
            value={value.desc}
             onChange={(e)=>setValue({...value,desc:e.target.value})}/>


            <div className={cl.inputs}>
                 <label className={cl.label_start} for="start">Старт</label>
                 <input className={cl.date} 
                         id="start" 
                         type="datetime-local"
                         value={value.dateStart}
                         onChange={(e)=>setValue({...value,dateStart:e.target.value})}/>
            
                 <label className={cl.label_finish} for="start">Финиш</label>
                <input id="finish"
                         className={cl.date} type="datetime-local"
                         value={value.date}
                         onChange={(e)=>setValue({...value,date:e.target.value})}/>
            </div>

            </div>
            <div className={cl.btns}>
                    <button onClick={()=>setIsClicked(true)} className={cl.button__second} > 
                        Отмена
                    </button>
                    <button className={cl.button} onClick={()=>universalFuncion(value)}> 
                        Добавить задачу
                    </button>
            </div>
          
            
       
      
      

          

        </div>

       
     
    
     
    )
}

export default Adder