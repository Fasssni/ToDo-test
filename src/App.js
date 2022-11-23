import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Completed from "./pages/Completed";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";
import useLocalStorage from "./useLocalStorage"


function App() {
  
  


  return (

    <div className="App">
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
