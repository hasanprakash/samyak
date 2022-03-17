import './NavBar.css';

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App__navbar">
      <nav>
        <div class="logo">
          <a href="index.html">
            High<em>way</em>
          </a>
        </div>
        <div class="menu-icon">
          <span></span>
        </div>
      </nav>
      <section class="overlay-menu">
        <div class="container">
          <div class="row">
            <div class="main-menu">
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
              <p>We create awesome templates for you.</p>
            </div>
          </div>
        </div>
      </section>
      <div className='navbar__behindblock'></div>
    </div>
  );
};

export default NavBar;