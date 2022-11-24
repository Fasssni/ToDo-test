import React from "react";

const Menu=()=>{

    return( 
        <div className="menu">
        <ul>
            <a href="/upcoming"><li >upComing</li></a> 
            <a  href="/today"><li>today</li></a> 
            <a href="/completed"><li>completed</li></a> 
        </ul>
        </div>
    )
}


export default Menu