import React from 'react';
import profPic from "../../assets/avatar/profpic.JPG";

function About() {
    return (
      <section className= "my-5">
        <div className="color-block">
          <div id ="profpic">
            <img id="main" src={profPic} className="my-2" alt="profile" />
          </div>
          <h1 id="about">Who am I?</h1>
        </div>
        <div className="my-2">
          <p>
          My certificate from UCB in the Full-Stack Web Development program has aptly prepared me to take on the front and back end of projects but I have a fondness for UX and design as I got my second degree in Art at UCSC. In the Full-Stack Web Development program I worked with others where I was able to demonstrate skills in communication, project management and self-sufficiency. I have 3 years experience creating projects in Python then JavaScript. I completed my Python classes with high grades and  the projects I collaborated on in the UCB program received glowing reviews from instructors.  My degree in Cognitive Science with a focus in AI focused heavily on tech and user experience. I am passionate about accessibility and making apps for disabled people and websites that are easy for all to navigate. Using design knowledge that I obtained through my Art degree I hope to make elegant, interesting applications that are also easily accessible for people of all abilities. 
          </p>     
        </div>
      </section>
    );
  }
  
  export default About;