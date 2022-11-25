import React, { useContext } from "react";
import { TaskContext } from "../../Contex";
import cl from "./NavBar.module.css"

export const NavBar=()=>{ 

    const {setBurger,burger}=useContext(TaskContext)
    
    return <div className={cl.main}>
                <svg className={cl.svg} width="30px" height="30px" viewBox="0 0 48 48" 
                    onClick={()=>setBurger(!burger)}>
                    <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="white"/>
                    <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="white"/>
                    <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="white"/>
                </svg> 

           </div>
    
}