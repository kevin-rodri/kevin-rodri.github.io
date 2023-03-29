import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Photo from "../components/Photo";
import Projects from "../components/Projects";
function HomePage(){
    return(
        <div>
        <Home></Home>
        <About></About>
        <Photo></Photo>
        <Projects></Projects>
        </div>
    )
}

export default HomePage;