import React from "react";
import me from "./me.jpg";
import "./home.css";
import Nav1 from "./Nav";

function Home() {
  return (
    // <div className='row'>
    // <div className='col col-md-6 col-lg-6 col-sm-6 col-xl-6 '>
    <>
    <Nav1/>
    <div className="d-flex   row column">
      <div className="col col-md-6 ">
        <img src={me} className="im img-fluid" />
      </div>
    

        {/* <h3 className="mar">MERN Stack Devolper</h3> */}

        <div class="wrapper col col-md-6  ">
        
            <h5 class="bounce">
                <span>M</span>
                <span>E</span>
                <span>R</span>
                <span>N</span>
                <span>S</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>K</span>
                <span>D</span>
                <span>E</span>
                <span>V</span>
                <span>E</span>
                <span>L</span>
                <span>O</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
            </h5>


            <br />
            <br />
            <br />

<p className="para">
  Pascinated by new technical innovations and reasearch in the field and
  intersted to learn and develope new things .
</p>
        </div>
    </div>













       
    

   
    </>
  );
}

export default Home;
