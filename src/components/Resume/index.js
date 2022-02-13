import React from 'react';
import profPic from "../../assets/avatar/profpic.JPG";

function Resume() {
    return (
      <section className= "my-10">
        <div id="resume">
          <div className="Title">
            <h1>Resume</h1>
            <h5>Front End Web Developer</h5>
          </div>
          <div className="resume-body">
            <h6>Skills</h6>
              <p>Languages: Javascript, Python</p>

             <p>Applications: Web Development</p> 

              <p>Tools:  HTML, CSS, React, Node.js, RestfulAPIs, MongoDB, graphQL, SQL</p>
            <h6>Projects </h6>
            <a href="/Portfolio">
            Monster-Safe | UCB
            </a>
            <p>
            Summary: 
            The purpose of this project was to create a site that gave updated covid stats for each of the 50 states so that users could take calculated risks while traveling. 
            Responsibilities:
            Implementing the web API and working on the local Storage aspect to save past searches and the users home state. 

            Technologies: 
              Javascript, Local Storage, RestfulAPIs
            </p>
            <p>
            <a href="/Portfolio">
            Extension Pass| UCB
            </a>
            </p>
            <p>
              
            Summary: 
            The purpose of this project was to create a site that acted as a travel blog with features similar to reddit with upvotes and comments for users to interact with one another. 
            Responsibilities:
            Front-end css styling and Handlebars modifications

            Technologies: 
            Javascript, SQL, Bulma CSS, Handlebars

            </p>
            <h6>Education</h6>
            <p>
            UCB Full-Stack Web-Development Bootcamp Certificate - March 2022
            </p>
            <p>
              University of California, Santa Cruz 
              Bachelor of Sciences and Bachelor of Arts - May 2021
            </p>
          </div>
        <a id="download" href="\assets\resume\Kaylin Boyle Resume.pdf" download="Kaylin Boyle Resume">Download Resume</a>
        </div>
      </section>
    );
  }
  
  export default Resume;