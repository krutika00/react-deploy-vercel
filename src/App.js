import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./login";
import Abouthistory from "./components/Abouthistory";
import Aboutteam from "./components/Aboutteam";
import Aboutapplication from "./components/Aboutapplication";
import Registaion from "./components/Registaion";

const App = () => {
    return(
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>
            <Route path="/login" Component={Login}/>
            <Route path="/login/registation" Component={Registaion}/>
            <Route path="/about/abouthistory" Component={Abouthistory}/>
            <Route path="/about/aboutteam" Component={Aboutteam}/>
            <Route path="/about/aboutapplication" Component={Aboutapplication}/>
         </Routes>
    )
}

export default App;