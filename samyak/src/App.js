import './App.css';
import React from 'react';

// BOOTSTRAP
import './components/Bootstrap/css/bootstrap.min.css'
import './components/Bootstrap/css/bootstrap-theme.min.css'
import './components/Bootstrap/css/fontAwesome.css'
import './components/Bootstrap/css/light-box.css'
import './components/Bootstrap/css/templatemo-style.css'
import './components/Bootstrap/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import './components/Bootstrap/js/vendor/bootstrap.min.js';
import './components/Bootstrap/js/plugins.js';
import './components/Bootstrap/js/main.js';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/BaseComponents/NavBar';

// import './components/Bootstrap/js/vendor/jquery-1.11.2.min.js';
import './components/Bootstrap/css/bootstrap.min.css'
import './components/Bootstrap/css/light-box.css'

import './components/Bootstrap/css/templatemo-style.css'
import './components/Bootstrap/js/main.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/BaseComponents/NavBar';
import AboutUs from './components/AboutUs/AboutUs';
import Events from './components/Events/Events';
import Gallery from './components/Gallery/Gallery';
import OurSponsors from './components/OurSponsors/OurSponsors';
import Team from './components/Team/Team';
import Join from './components/Join/Join';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/oursponsors" element={<OurSponsors />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/join" element={<Join />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
