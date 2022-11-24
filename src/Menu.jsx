import React from "react";
import { Link } from "react-router-dom";

const Menu=()=>{
    const el=[{name:"Upcoming",to:"/upcoming"},{name:"Today",to:"/today"},{name:"Completed",to:"/completed"},]

    return( 
        <div className="menu">
        <ul>
            {el.map(p=>
            <li className="menu_link"><Link to={p.to}>{p.name}</Link></li> )
            }
           
        </ul>
        </div>
    )
}


export default Menu