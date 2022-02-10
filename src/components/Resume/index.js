import React from 'react';
import profPic from "../../assets/avatar/profpic.JPG";

function Resume() {
    return (
      <section className= "my-10">
        <div id="resume">
            <img id="main" src={profPic} className="my-2" alt="profile" />
            <img src="src\assets\avatar\profpic.JPG" alt="profpic"/>
            <div id="img2" class="img-container">
                <a href="https://github.com/kaynboyle/monstersafe//">Monster Safe</a>
            </div>
            <div id="img3" class="img-container">
                <a href="https://whispering-plains-41505.herokuapp.com/login">Extension-Pass</a>
            </div>
            <div id="img4" class="img-container">

            </div>
            <div id="img5" class="img-container">

            </div>
        </div>
      </section>
    );
  }
  
  export default Resume;