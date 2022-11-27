import React, { useContext, useState } from "react";
import { useRef } from "react";
import { TaskContext } from "../../Contex";
import cl from "./Modal.module.css"

export const Modal=()=>{


   
    const inputRef=useRef(null)

     

    

    return <div className={modal?cl.main:cl.none} onClick={()=>setModal(false)}>
                     

           </div>
}