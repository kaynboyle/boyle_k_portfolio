import React from 'react';
import profPic from "../../assets/avatar/profpic.JPG";

function About() {
    return (
      <section className= "my-5">
        <div className="color-block">
          <h1 id="about">Who am I?</h1>
          <img src={profPic} className="my-2" alt="profile" />
         </div>
        <div className="my-2">
          <p>
              orem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
            condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
            mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
            Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
            justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
            dictumst. Phasellus mattis nunc sed orci consequat laoreet. Pra
          </p>        
        </div>
      </section>
    );
  }
  
  export default About;