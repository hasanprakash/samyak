import './App.css';

// import './components/Bootstrap/js/vendor/jquery-1.11.2.min.js';
import './components/Bootstrap/css/bootstrap.min.css'
import './components/Bootstrap/css/light-box.css'

import './components/Bootstrap/css/templatemo-style.css'
import './components/Bootstrap/js/main.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/BaseComponents/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/* <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/searchproblem" element={<SearchProblem />} />
        </Routes> */}
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
