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
                <a href="https://whispering-plains-41505.herokuapp.com/login">Extension-Pass</a>
                <p>A Travel Blog Web App With Social Features</p>
            </div>
            <div id="img4" class="img-container">
              <a href="https://whispering-plains-41505.herokuapp.com/login">Extension-Pass</a>
              <p>A Travel Blog Web App With Social Features</p>
            </div>
            <div id="img5" class="img-container">

            </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio;