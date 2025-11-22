import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../homepage";
import Login from "./Login";
import Businesslogin from "./BusinessLogin";
import Custsignup from "./Custsignup";
import Bussignup from "./Bussignup";
 const App=()=>{
  return(
  <Router>
    <Routes>
      <Route path = "/" element = {<HomePage />}/>
      <Route path = "/login" element ={<Login/>}/>
      <Route path = "/Businesslogin" element ={<Businesslogin/>}/>
      <Route path = "/Custsignup" element ={<Custsignup/>}/>
      <Route path = "/Bussignup" element ={<Bussignup/>}/>
    </Routes>
  </Router>

   );
 };
export default App;