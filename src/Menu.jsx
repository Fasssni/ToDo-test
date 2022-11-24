import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Menu=()=>{
    const origin=window.location.origin
    const [location,setLocation]=useState(window.location)
    const [el, setEl]=useState([{name:"Upcoming",to:"/upcoming", loc:location==origin+"/upcoming"},{name:"Today",to:"/today",loc:location==origin+"/today"},{name:"Completed",to:"/completed",loc:location==origin+"/completed"}])

    // useMemo(()=>{
    // setEl(prevEl=>{
    //     return prevEl.map(p=>{
    //         return{...p,loc:location==origin+p.to}
    //     })
    // })}, [location])
    // console.log(el)
   
    const setL=()=>{
        setTimeout(()=>setLocation(window.location),5)
    }

    
    

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
        

    // useEffect(()=>{setLoc()},[location])

    

    

    return( 
        <div className="menu">
        <ul className="group">
            {el.map(p=>
            <Link onClick={()=>setLoc(p.to)}  to={p.to} >
                 <div 
                     style={{background:p.loc?"rgb(174, 168, 161)":"white"}} 
                    className={"els"}>
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