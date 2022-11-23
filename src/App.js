import dayjs from "dayjs";
import { useContext } from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import { TaskContext } from "./Contex";
import Menu from "./Menu";
import Completed from "./pages/Completed";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";
import useLocalStorage from "./useLocalStorage"


function App() {
  
  const data=useContext(TaskContext)

  // console.log(dayjs().format("MMM D HH:mm")<data.tasks[0].date)
  


  return (

    <div className="App">
    <Menu></Menu>

    <BrowserRouter>
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
