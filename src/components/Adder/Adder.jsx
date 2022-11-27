import React, { useEffect, useState } from "react";
import {v4 as uuidV4} from "uuid"
import cl from "./Adder.module.css"


import { flushSync } from 'react-dom'
import { useContext } from "react";
import { TaskContext } from "../../Contex";
import Upcoming from "../../pages/Upcoming";





const Adder=({toAdd,value,setValue,setIsClicked})=>{ 
    
    const {isLoading,uploadFiles}=useContext(TaskContext)
    const [isAdded,setIsAdded]=useState(false)
    const [input,setInput]=useState(false)
    const [trackfile,setTrack]=useState("")

    const fileHandler = (e) => {
        e.preventDefault();
        setIsAdded(true)
        const file = e.target[0].files[0];
        uploadFiles(file,setValue)
        
       

      };
   
 
    
    
    const universalFuncion=()=>{
        toAdd(value)
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

              
                {input?
                   <form className={cl.form}onClick= {(e)=>e.stopPropagation()} onSubmit={fileHandler}>
                                          
                                            <input className={cl.input_file} onChange={e=>setTrack(e.target.value)}id="file" type="file" title="wefew" placeholder="" />
                                            {trackfile?<p>Файл выбран, загрузите его</p>:<></>}
                                            {value.file? 
                                                        <p>Текущий файл:
                                                            <a className={cl.a_hover} target="blank" href={value.file}>{value.file.slice(30,72)}..</a>
                                                            </p> 
                                                        :
                                                        <></>}
                                            <button className={cl.submit}  type="submit">Загрузить файл</button>
                                            { isAdded?<p>Файл {
                                                isLoading?<span>грузится...</span>
                                                : 
                                                <span>загружен</span>}
                                            </p>
                                             :<></>}
                </form>
                :
                <p className={cl.text}onClick={()=>setInput(true)}>Загрузить файл..</p>
}
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