import './NavBar.css';

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App__navbar">
      <nav>
        <div className="logo">
          <a href="index.html">
            High<em>way</em>
          </a>
        </div>
        <div className="menu-icon">
          <span></span>
        </div>
      </nav>
      <section className="overlay-menu">
        <div className="container">
          <div className="row" style={{display: 'block'}}>
            <div className="main-menu">
              <ul>
                <li>
                  <Link to={`/aboutus`}>ABOUT US</Link>
                </li>
                <li>
                  <Link to={`/events`}>EVENTS</Link>
                </li>
                <li>
                  <Link to={`/gallery`}>GALLERY</Link>
                </li>
                <li>
                  <Link to={`/oursponsors`}>OUR SPONSORS</Link>
                </li>
                <li>
                  <Link to={`/team`}>TEAM</Link>
                </li>
                <li>
                  <Link to={`/join`}>JOIN</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;