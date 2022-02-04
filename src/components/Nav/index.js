import React from "react";

function Nav(props) {
  
    console.log("****props", props)

    const handleClick = (item) => {
      console.log(item);
      return item;
    };

    return (
        <header className="flex-row px-1">
          <h2>
            {/* <a data-testid="link" href="/"> */}
              <span role="img" aria-label="camera"> 📸</span> Oh Snap!
            {/* </a> */}
          </h2>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                {/* <a data-testid="about" href="#about">
                  About me
                </a> */}
              </li>
              <li className={"mx-2"}>
                <span onClick={() => handleClick('Contact')}>
                  Contact {props.cat} {props.dog}
                </span>
                 
                </li>
            </ul>
          </nav>
        </header>
      );
    }
    
    export default Nav;