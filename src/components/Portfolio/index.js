import React from 'react';
import profPic from "../../assets/avatar/profpic.JPG";

function Portfolio() {
    return (
      <section className= "my-10">
        <div id="portfolio">
          <div className="highlight">
              <h1>Portfolio</h1>
          </div>
              <div className="flex-box-tags">
                <div id="split">
                  <a className="top-tags" href="#img2">Monster Safe</a>
                </div>
                <a className="top-tags" href="#img3">Extension Pass</a>
              </div>
            <div id="img2" class="img-container">
                <a href="https://github.com/kaynboyle/monstersafe//">Monster Safe</a>
                <p>A Covid Safety Travel Web App</p>
            </div>
            <div id="img3" class="img-container">
                <a href="https://whispering-plains-41505.herokuapp.com">Extension-Pass</a>
                <p>A Travel Blog Web App With Social Features</p>
            </div>
            <div id="img4" class="img-container">
              <a href="https://kaynboyle.github.io/WeatherAppModule6">Weather App</a>
              <p>A weather forecast site </p>
            </div>
            <div id="img5" class="img-container">
              <a href="https://tranquil-gorge-31416.herokuapp.com">Passport Extension</a>
              <p>A travel blog and community </p>
            </div>
            <div id="img6" class="img-container">
              <a href="https://kaynboyle.github.io/module2">My First Portfolio</a>
              <p> An HTML and CSS portfolio </p>
            </div>
            <div id="img7" class="img-container">
              <a href="https://kaynboyle.github.io/Work-Day-Planner">Work Day Planner</a>
              <p> A site to help you plan out your day </p>
            </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio;