import dayjs from "dayjs";
import { useContext, useState } from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import { TaskContext } from "./Contex";
import Menu from "./Menu";
import Completed from "./pages/Completed";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";
import useLocalStorage from "./useLocalStorage"
import "./style.css" 
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  
  const data=useContext(TaskContext)
  

  return (

    <div className="App">
    

    <BrowserRouter>
    <NavBar></NavBar>
    <Menu></Menu>
  
    
     <Routes>
      <Route path="/" element={<Today/>}/>
      <Route path="/upcoming" element={<Upcoming/>}/>
      <Route path="/completed" element={<Completed/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
