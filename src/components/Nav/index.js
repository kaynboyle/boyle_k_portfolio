import React from "react";

function Nav(props) {
  

  const {
    pages = [],
    contactSelected,
    setContactSelected,
    currentPage,
    setCurrentPage,
  } = props;
    console.log("****props", props)

    // const handleClick = (item) => {
    //   console.log(item);
    //   return item;
    // };

    return (
      <section id="Nav">
        <h2>
          <a href="/">
              Kaylin Boyle Tech Portfolio
          </a>
        </h2>
        <header className="flex-row px-1">
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a href="#about" onClick={() => setContactSelected(false)}>
                  About me
                </a>
              </li>
              <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={() => setContactSelected(true)}>Contact</span>
              </li>
              {pages.map((page) => (
            <li
              className={`mx-1 ${
                currentPage.name === page.name && !contactSelected && 'navActive'
                }`}
              key={page.name}
            >
              <span
                onClick={() => {
                  setCurrentPage(page);
                  setContactSelected(false);
                }}
              >
                {page.name}
              </span>
            </li>
          ))}
           
            </ul>
          </nav>
        </header>
      </section>
      );
    }
    
    export default Nav;