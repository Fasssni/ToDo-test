import React, { useEffect, useMemo, useReducer, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "./Contex";
import today from "./assets/today.svg"
import completed from "./assets/completed.svg"
import upcoming from "./assets/upcoming.svg"

const Menu=()=>{
    const origin=window.location.origin
    const [location,setLocation]=useState(window.location)

    const forceUpdate = useReducer(x => x + 1, 0)[1]
    
    const {burger, filterToday,completedTasks,filterUpcoming,tasks}=useContext(TaskContext)
    const [el, setEl]=useState([{name:"Предстоящие",to:"/upcoming",icon:upcoming,loc:location==origin+"/upcoming", amount:filterUpcoming.length},
                                {name:"Сегодня",to:"/today",icon:today,loc:location==origin+"/today",amount:filterToday.length},
                                {name:"Выполненные",to:"/completed",icon:completed,loc:location==origin+"/completed", amount:completedTasks.length}])

    // useEffect(()=>{
    // setEl(prevEl=>{
    //     return prevEl.map(p=>{
    //         return{...p,loc:location==origin+p.to}
    //     })
    // })}, [location])
    // console.log(el)
   
    // const setL=()=>{
    //     setTimeout(()=>setLocation(window.location),5)
    // }

    
    

    const setLoc=(id)=>
        setEl(prevEl=>{
            return prevEl.map(x=>{
                if(x.to==id){
                    return{...x ,loc:true}
                }else{
                    return{...x, loc:false}
                }
            })
        })
         
  
   

  
    // useEffect(()=>{ 
    //     forceUpdate()
    // }, [filterToday],[filterUpcoming],[completedTasks])
    
    

    return( 
        <div className={burger?"menu":"menu_off"}>
        <ul className="group">
            {el.map(p=>
            <Link onClick={()=>setLoc(p.to)}  to={p.to} >
              
                 <div 
                     style={{background:p.loc?"rgb(174, 168, 161)":"white"}} 
                    className="els">
                
                   <img className="icon"src={p.icon}/>
                   <li className="menu_link">{p.name}</li> 
                   
                
                 </div>
            </Link>
            )
            }
           
        </ul>
        </div>
    )
}


export default Menu